import Event from "../models/Event.js";
import sendMail from "../utils/sendMail.js";
import cloudinary from "../config/Cloudinary.js";
import streamifier from "streamifier";


import EventUser from "../models/EventUser.js";


const uploadToCloudinary = (buffer, folder = "events") => {
  return new Promise((resolve, reject) => {
    try {
      // Check buffer size
      if (!buffer || buffer.length === 0) {
        return reject(new Error("Empty file buffer"));
      }

      // Determine resource type based on file signature
      const fileSignature = buffer.toString('hex', 0, 4);
      let resourceType = 'auto';
      
      // Check for image formats
      if (fileSignature.startsWith('ffd8ff') || // JPEG
          fileSignature.startsWith('89504e47') || // PNG
          fileSignature.startsWith('47494638') || // GIF
          fileSignature.startsWith('52494646')) { // WEBP
        resourceType = 'image';
      }
      // Check for video formats
      else if (fileSignature.startsWith('00000018') || // MP4
               fileSignature.startsWith('52494646')) { // AVI, MOV
        resourceType = 'video';
      }

      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: folder,
          resource_type: resourceType,
          timeout: 60000, // 60 second timeout
          chunk_size: 6000000, // 6MB chunks for large files
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            reject(new Error(`Cloudinary upload failed: ${error.message}`));
          } else {
            console.log("✅ Cloudinary upload successful:", result.secure_url);
            resolve(result);
          }
        }
      );

      // Create read stream from buffer
      const readStream = streamifier.createReadStream(buffer);
      
      // Handle stream errors
      readStream.on('error', (err) => {
        console.error("Stream error:", err);
        reject(new Error(`Stream error: ${err.message}`));
      });

      // Pipe the buffer to Cloudinary
      readStream.pipe(uploadStream);

    } catch (err) {
      console.error("Upload preparation error:", err);
      reject(new Error(`Upload preparation failed: ${err.message}`));
    }
  });
};

export const createEvent = async (req, res) => {
  try {
    // ✅ Check authentication
    if (!req.user) {
      return res.status(401).json({ 
        success: false,
        message: "Unauthorized: User not authenticated" 
      });
    }

    const isAdmin = req.user.isAdmin;
    let uploadedMediaUrl = null;
    let mediaType = req.body.mediaType || "none";

    console.log("File info:", {
      hasFile: !!req.file,
      fileSize: req.file?.buffer?.length,
      originalName: req.file?.originalname,
      mediaType: mediaType
    });

    // ✅ Handle file upload to Cloudinary
    if (req.file && req.file.buffer) {
      try {
        // Validate file size (max 10MB)
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (req.file.buffer.length > maxSize) {
          return res.status(400).json({
            success: false,
            message: "File size exceeds 10MB limit"
          });
        }

        // Upload to Cloudinary
        const result = await uploadToCloudinary(req.file.buffer, "events");
        
        if (result && result.secure_url) {
          uploadedMediaUrl = result.secure_url;
          
          // Auto-detect media type if not specified
          if (mediaType === "none" || !mediaType) {
            if (result.resource_type === 'video') {
              mediaType = "video";
            } else if (result.resource_type === 'image') {
              mediaType = "image";
            }
          }
          
          console.log("Upload successful:", {
            url: uploadedMediaUrl,
            type: mediaType,
            resourceType: result.resource_type
          });
        } else {
          console.warn("Cloudinary upload returned no URL");
        }

      } catch (uploadError) {
        console.error("Upload failed:", uploadError);
        
        // Continue without media if upload fails (optional)
        // return res.status(500).json({
        //   success: false,
        //   message: "Failed to upload media",
        //   error: uploadError.message
        // });
        
        // Alternatively, log error but continue
        console.log("Continuing without media due to upload error");
      }
    }

    // ✅ Validate required fields
    if (!req.body.title || !req.body.startDate || !req.body.location) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: title, startDate, and location are required"
      });
    }

    // ✅ Parse tags
    let tags = [];
    if (req.body.tags) {
      if (Array.isArray(req.body.tags)) {
        tags = req.body.tags;
      } else if (typeof req.body.tags === 'string') {
        tags = req.body.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      }
    }

    // ✅ Create event
    const eventData = {
      title: req.body.title,
      description: req.body.description || "",
      startDate: req.body.startDate,
      endDate: req.body.endDate || req.body.startDate,
      location: req.body.location,
      city: req.body.city || "",
      type: req.body.type || "other",
      tags: tags,
      mediaType: uploadedMediaUrl ? mediaType : "none",
      introMedia: uploadedMediaUrl,
      linkedPostUrl: req.body.linkedPostUrl || null,
      createdBy: req.user._id,
      status: isAdmin ? "published" : "pending",
    };

    console.log("Creating event with data:", {
      ...eventData,
      introMedia: uploadedMediaUrl ? "Set" : "Not set"
    });

    const event = await Event.create(eventData);

    // ✅ Notify admins if created by non-admin
    if (!isAdmin) {
      try {
        const admins = await EventUser.find({ isAdmin: true }).select("email name");
        
        if (admins.length > 0) {
          await Promise.all(
            admins.map(async (admin) => {
              try {
                await sendMail({
                  to: admin.email,
                  subject: "New Event Pending Approval",
                  text: `A new event requires review.\n\nTitle: ${event.title}\nCreated by: ${req.user.name} (${req.user.email})\nDate: ${new Date(event.startDate).toLocaleDateString()}\nLocation: ${event.location}`,
                  html: `
                    <h2>New Event Pending Approval</h2>
                    <p>A new event has been submitted and requires review.</p>
                    <ul>
                      <li><strong>Title:</strong> ${event.title}</li>
                      <li><strong>Created by:</strong> ${req.user.name} (${req.user.email})</li>
                      <li><strong>Date:</strong> ${new Date(event.startDate).toLocaleDateString()}</li>
                      <li><strong>Location:</strong> ${event.location}</li>
                    </ul>
                    <p>Please log in to the admin panel to review this event.</p>
                  `
                });
              } catch (mailErr) {
                console.error(`Failed to send email to ${admin.email}:`, mailErr);
              }
            })
          );
          console.log("Admin notifications sent");
        }
      } catch (notificationError) {
        console.error("Admin notification error:", notificationError);
        // Don't fail the request if notification fails
      }
    }

    // ✅ Return success response
    res.status(201).json({
      success: true,
      message: isAdmin ? "Event published successfully" : "Event submitted for admin approval",
      event: {
        id: event._id,
        title: event.title,
        status: event.status,
        introMedia: event.introMedia,
        mediaType: event.mediaType,
        createdBy: {
          id: req.user._id,
          name: req.user.name
        }
      }
    });

  } catch (error) {
    console.error("Create Event Error:", {
      message: error.message,
      stack: error.stack,
      body: req.body,
      user: req.user ? req.user._id : "No user"
    });

    res.status(500).json({
      success: false,
      message: "Failed to create event",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
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

    res.status(200).json({ events });
  } catch (error) {
    console.error("Get published events error:", error);
    res.status(500).json({ message: "Failed to fetch events" });
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
