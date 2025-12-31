// controllers/eventController.js
import Event from "../models/Event.js";
import sendEmail from "../utils/sendMail.js";
import cloudinary from "../config/Cloudinary.js";
import streamifier from "streamifier";
import dotenv from "dotenv";
import fs from "fs/promises"; // Add this import
import EventUser from "../models/EventUser.js";

dotenv.config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

/* =========================
   HELPER FUNCTIONS
========================= */
const parseTags = (tags) => {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags.map(t => t.trim()).filter(Boolean);
  if (typeof tags === "string") return tags.split(",").map(t => t.trim()).filter(Boolean);
  return [];
};

const detectMediaType = (mime, resourceType, format) => {
  if (mime === "image/gif" || format === "gif") return "gif";
  if (mime?.startsWith("image/")) return "image";
  if (mime?.startsWith("video/")) return "video";
  if (resourceType === "video") return "video";
  if (resourceType === "image") return "image";
  return "none";
};

// FIXED: Cloudinary upload function for disk storage
const uploadToCloudinary = (buffer, folder = "events") => {
  return new Promise((resolve, reject) => {
    console.log(`📤 Uploading to Cloudinary folder: ${folder}`);
    console.log(`📏 Buffer size: ${buffer.length} bytes`);
    
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "auto",
        timeout: 60000
      },
      (error, result) => {
        if (error) {
          console.error("❌ Cloudinary callback error:", error);
          console.error("Error details:", {
            message: error.message,
            http_code: error.http_code,
            name: error.name
          });
          reject(new Error(`Cloudinary upload failed: ${error.message}`));
        } else {
          console.log("✅ Cloudinary upload successful!");
          console.log("Upload result:", {
            url: result.secure_url,
            resource_type: result.resource_type,
            format: result.format,
            public_id: result.public_id,
            bytes: result.bytes
          });
          resolve(result);
        }
      }
    );
    
    // Create readable stream from buffer
    const readableStream = streamifier.createReadStream(buffer);
    
    // Pipe to Cloudinary
    readableStream.pipe(uploadStream);
    
    // Handle stream errors
    readableStream.on('error', (error) => {
      console.error("❌ Stream error:", error);
      reject(error);
    });
    
    uploadStream.on('error', (error) => {
      console.error("❌ Upload stream error:", error);
      reject(error);
    });
  });
};

/* =========================
   CREATE EVENT CONTROLLER
========================= */
export const createEvent = async (req, res) => {
  console.log("🚀 CREATE EVENT REQUEST RECEIVED =================");
  
  try {
    // 1. Authentication check
    if (!req.user) {
      console.log("❌ Unauthorized request");
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please log in."
      });
    }

    const user = req.user;
    const isAdmin = user.isAdmin;
    console.log(`👤 User: ${user.email}, isAdmin: ${isAdmin}`);

    // 2. Log request details
    console.log("📦 Request body:", req.body);
    console.log("📁 File info:", req.file ? {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      path: req.file.path,
      filename: req.file.filename,
      fieldname: req.file.fieldname
    } : "No file uploaded");

    // 3. Parse request data
    let eventData;
    try {
      eventData = req.body.data ? JSON.parse(req.body.data) : req.body;
      console.log("📝 Parsed event data:", eventData);
    } catch (parseError) {
      console.error("❌ JSON parse error:", parseError);
      return res.status(400).json({
        success: false,
        message: "Invalid JSON data format"
      });
    }

    let uploadedMediaUrl = null;
    let mediaType = "none";

    /* ================= MEDIA UPLOAD HANDLING (DISK STORAGE) ================= */
    
    // CASE 1: File upload (via multer disk storage)
    if (req.file) {
      console.log("📁 File received (disk storage):", {
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        path: req.file.path,
        filename: req.file.filename
      });

      try {
        // Read the file from disk
        console.log("📖 Reading file from disk:", req.file.path);
        const fileBuffer = await fs.readFile(req.file.path);
        console.log("✅ File read from disk, buffer size:", fileBuffer.length);

        // Upload to Cloudinary
        console.log("🔄 Starting Cloudinary upload...");
        const result = await uploadToCloudinary(fileBuffer, "events");
        
        console.log("✅ Cloudinary upload successful!");
        console.log("Cloudinary result:", {
          url: result.secure_url,
          resource_type: result.resource_type,
          format: result.format
        });

        uploadedMediaUrl = result.secure_url;
        mediaType = detectMediaType(
          req.file.mimetype,
          result.resource_type,
          result.format
        );
        
        console.log(`📊 Detected media type: ${mediaType}`);
        console.log(`🔗 Media URL: ${uploadedMediaUrl}`);

        // Delete temp file after successful upload
        await fs.unlink(req.file.path);
        console.log("🗑️ Temp file deleted:", req.file.path);

      } catch (uploadError) {
        console.error("❌ Cloudinary upload failed:", uploadError.message);
        console.error("Full error:", uploadError);
        
        // Clean up temp file even if upload fails
        try {
          if (req.file.path) {
            await fs.unlink(req.file.path);
            console.log("🗑️ Cleaned up temp file after error");
          }
        } catch (cleanupError) {
          console.error("Failed to cleanup temp file:", cleanupError);
        }
        
        return res.status(500).json({
          success: false,
          message: "Failed to upload media to Cloudinary",
          error: process.env.NODE_ENV === 'development' ? uploadError.message : undefined
        });
      }
    }
    
    // CASE 2: External media URL
    else if (eventData.introMedia && typeof eventData.introMedia === "string") {
      const url = eventData.introMedia.trim();
      console.log("🔗 External media URL provided:", url);
      
      // Basic URL validation
      if (url.startsWith('http://') || url.startsWith('https://')) {
        uploadedMediaUrl = url;
        mediaType = eventData.mediaType || "external";
        console.log(`📊 Using external media: ${mediaType}`);
      } else {
        console.warn("⚠️ Invalid external URL provided:", url);
      }
    } else {
      console.log("📭 No media provided for this event");
    }

    /* ================= DATA VALIDATION ================= */
    console.log("✅ Media handling complete:");
    console.log("   - Media URL:", uploadedMediaUrl);
    console.log("   - Media Type:", mediaType);

    const errors = [];
    
    if (!eventData.title || !eventData.title.trim()) {
      errors.push("Title is required");
    }
    
    if (!eventData.startDate) {
      errors.push("Start date is required");
    }
    
    if (!eventData.location || !eventData.location.trim()) {
      errors.push("Location is required");
    }

    if (errors.length > 0) {
      console.log("❌ Validation errors:", errors);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors
      });
    }

    // Date validation
    const startDate = new Date(eventData.startDate);
    const endDate = eventData.endDate ? new Date(eventData.endDate) : null;
    
    if (endDate && endDate <= startDate) {
      console.log("❌ Date validation failed: End date must be after start date");
      return res.status(400).json({
        success: false,
        message: "End date must be after start date"
      });
    }

    /* ================= CREATE EVENT ================= */
    console.log("📝 Creating event in database...");
    
    const event = await Event.create({
      title: eventData.title.trim(),
      description: eventData.description?.trim() || "",
      startDate: startDate,
      endDate: endDate || new Date(startDate.getTime() + 60 * 60 * 1000), // Default: 1 hour later
      location: eventData.location.trim(),
      city: eventData.city?.trim() || "",
      type: eventData.type || "meeting",
      tags: parseTags(eventData.tags),
      introMedia: uploadedMediaUrl,
      mediaType: uploadedMediaUrl ? mediaType : "none",
      linkedPostUrl: eventData.linkedPostUrl?.trim() || null,
      createdBy: user._id,
      status: isAdmin ? "published" : "pending"
    });

    console.log("✅ Event created successfully!");
    console.log("Event details:", {
      id: event._id,
      title: event.title,
      slug: event.slug,
      introMedia: event.introMedia,
      mediaType: event.mediaType,
      status: event.status
    });

    /* ================= ADMIN NOTIFICATION ================= */
    if (!isAdmin) {
      try {
        console.log("📧 Sending admin notifications...");
        const admins = await EventUser.find({ isAdmin: true }).select("email name");
        console.log(`📨 Notifying ${admins.length} admin(s)`);
        
        for (const admin of admins) {
          await sendEmail({
            to: admin.email,
            subject: "📅 New Event Pending Approval",
            html: `
              <h2>New Event Submission</h2>
              <p><strong>Event Title:</strong> ${event.title}</p>
              <p><strong>Submitted By:</strong> ${user.name || user.email}</p>
              <p><strong>Start Date:</strong> ${event.startDate.toLocaleDateString()}</p>
              <p><strong>Location:</strong> ${event.location}</p>
              <p>Please review the event in the admin dashboard.</p>
            `
          });
        }
        
        console.log("✅ Admin notifications sent successfully");
      } catch (emailError) {
        console.error("❌ Failed to send admin notification:", emailError);
        // Don't fail the request if email fails
      }
    }

    /* ================= SUCCESS RESPONSE ================= */
    res.status(201).json({
      success: true,
      message: isAdmin
        ? "Event published successfully"
        : "Event submitted for admin review",
      event: {
        id: event._id,
        title: event.title,
        slug: event.slug,
        status: event.status,
        startDate: event.startDate,
        location: event.location,
        introMedia: event.introMedia,
        mediaType: event.mediaType
      }
    });

  } catch (err) {
    console.error("❌ CREATE EVENT ERROR:", err);
    
    // Handle Mongoose validation errors
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      console.log("❌ Mongoose validation errors:", errors);
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors
      });
    }
    
    // Handle duplicate key errors (e.g., duplicate slug)
    if (err.code === 11000) {
      console.log("❌ Duplicate key error:", err);
      return res.status(400).json({
        success: false,
        message: "An event with similar details already exists"
      });
    }
    
    // Generic error response
    console.error("❌ Unexpected error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to create event",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};






export const incrementViews = async (req, res) => {
  const event = await Event.findOneAndUpdate(
    { slug: req.params.slug, status: "published" },
    { $inc: { views: 1 } },
    { new: true }
  );

  if (!event) return res.status(404).json({ message: "Event not found" });
  res.json(event);
};


/**
 * USER: Create Event
 * POST /api/events
 */


/**
 * USER: My Events
 * GET /api/events/my
 */
export const getMyEvents = async (req, res) => {
  const events = await Event.find({
    createdBy: req.user._id,
    isDeleted: false
  }).sort({ createdAt: -1 });

  res.json(events);
};

/**
 * PUBLIC: Published Events
 * GET /api/events
 */
export const getPublishedEvents = async (req, res) => {
  try {
    const events = await Event.find({
      status: "published",
      isDeleted: false
    })
      .sort({ startDate: 1 })
      .lean();

    res.status(200).json({ 
      success: true,
      events 
    });
  } catch (error) {
    console.error("Get published events error:", error);
    res.status(500).json({ 
      success: false,
      message: "Failed to fetch events" 
    });
  }
};



/**
 * PUBLIC: Increment Views
 * GET /api/events/:slug
 */
export const getEventBySlug = async (req, res) => {
  const event = await Event.findOneAndUpdate(
    { slug: req.params.slug, status: "published" },
    { $inc: { views: 1 } },
    { new: true }
  );

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.json(event);
};
