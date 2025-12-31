import Blog from "../models/blogs.js";
import User from "../models/user.js";
import { v2 as cloudinary } from "cloudinary";
import sendEmail from "../utils/sendMail.js";
import dotenv from "dotenv";
dotenv.config();


/* =========================
   CLOUDINARY CONFIGURATION
========================= */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

/* =========================
   HELPERS
========================= */
function parseTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags.map(t => t.trim()).filter(Boolean);
  return tags.split(",").map(t => t.trim()).filter(Boolean);
}

function mediaTypeFromUrl(url = "") {
  const lower = url.split("?")[0].toLowerCase();
  if (lower.endsWith(".gif")) return "gif";
  if (lower.match(/\.(mp4|webm|ogg)$/)) return "video";
  if (lower.match(/\.(jpg|jpeg|png|webp)$/)) return "image";
  return "external";
}

/* =========================
   UPLOAD TO CLOUDINARY (NO STREAMIFIER VERSION)
========================= */
const uploadToCloudinary = async (buffer, mimetype) => {
  try {
    console.log('🔄 Starting Cloudinary upload...');
    console.log('📏 Buffer size:', buffer.length, 'bytes');
    console.log('📄 Mime type:', mimetype);
    
    // Convert buffer to base64
    const base64Data = buffer.toString('base64');
    
    // Determine resource type
    const resourceType = mimetype.startsWith('video/') ? 'video' : 'image';
    const dataURI = `data:${mimetype};base64,${base64Data}`;
    
    // Upload using Cloudinary's upload method
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'blogs',
      resource_type: resourceType,
      timeout: 60000
    });
    
    console.log('✅ Cloudinary upload successful!');
    console.log('📊 Upload result:', {
      url: result.secure_url,
      public_id: result.public_id,
      resource_type: result.resource_type
    });
    
    return {
      url: result.secure_url,
      public_id: result.public_id,
      resource_type: result.resource_type
    };
    
  } catch (error) {
    console.error('❌ Cloudinary upload error:', error.message);
    throw error;
  }
};

/* =========================
   CREATE BLOG (FIXED)
========================= */
/* =========================
   CREATE BLOG (SIMPLIFIED)
========================= */
export const createBlog = async (req, res) => {
  try {
    const user = req.user;
    if (!user) return res.status(401).json({ success: false, message: "Unauthorized" });

    // Parse request data
    let parsedData;
    try {
      parsedData = JSON.parse(req.body.data || "{}");
    } catch {
      return res.status(400).json({ success: false, message: "Invalid blog payload" });
    }

    const {
      title,
      authorLinkedin,
      tags,
      introduction,
      description,
      conclusion,
      introImageUrl,
      descriptionImageUrl,
      published,
    } = parsedData;

    // Validate required fields
    if (!title || !introduction || !description || !conclusion) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    // Get files
    const introFile = req.files?.introImage?.[0];
    const descFile = req.files?.descriptionImage?.[0];

    let introMedia = null;
    let descMedia = null;
    let introMediaType = "external";
    let descMediaType = "external";

    // UPLOAD INTRO MEDIA
    if (introFile && introFile.buffer) {
      try {
        // Convert buffer to base64 for Cloudinary
        const base64Data = introFile.buffer.toString('base64');
        const dataURI = `data:${introFile.mimetype};base64,${base64Data}`;
        
        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(dataURI, {
          folder: 'blogs',
          resource_type: introFile.mimetype.startsWith('video/') ? 'video' : 'image',
          timeout: 60000
        });
        
        if (result && result.secure_url) {
          introMedia = result.secure_url;
          introMediaType = introFile.mimetype === "image/gif" 
            ? "gif" 
            : introFile.mimetype.startsWith("video/") 
            ? "video" 
            : "image";
        }
      } catch (uploadError) {
        console.error("Intro media upload failed:", uploadError.message);
        // Continue with URL if available
        if (introImageUrl) {
          introMedia = introImageUrl.trim();
          introMediaType = introMedia.endsWith('.gif') ? 'gif' : 
                          introMedia.match(/\.(mp4|webm|ogg)$/) ? 'video' : 'image';
        }
      }
    } else if (introImageUrl) {
      introMedia = introImageUrl.trim();
      introMediaType = introMedia.endsWith('.gif') ? 'gif' : 
                      introMedia.match(/\.(mp4|webm|ogg)$/) ? 'video' : 'image';
    }

    // UPLOAD DESCRIPTION MEDIA
    if (descFile && descFile.buffer) {
      try {
        // Convert buffer to base64 for Cloudinary
        const base64Data = descFile.buffer.toString('base64');
        const dataURI = `data:${descFile.mimetype};base64,${base64Data}`;
        
        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(dataURI, {
          folder: 'blogs',
          resource_type: descFile.mimetype.startsWith('video/') ? 'video' : 'image',
          timeout: 60000
        });
        
        if (result && result.secure_url) {
          descMedia = result.secure_url;
          descMediaType = descFile.mimetype === "image/gif" 
            ? "gif" 
            : descFile.mimetype.startsWith("video/") 
            ? "video" 
            : "image";
        }
      } catch (uploadError) {
        console.error("Description media upload failed:", uploadError.message);
        // Continue with URL if available
        if (descriptionImageUrl) {
          descMedia = descriptionImageUrl.trim();
          descMediaType = descMedia.endsWith('.gif') ? 'gif' : 
                          descMedia.match(/\.(mp4|webm|ogg)$/) ? 'video' : 'image';
        }
      }
    } else if (descriptionImageUrl) {
      descMedia = descriptionImageUrl.trim();
      descMediaType = descMedia.endsWith('.gif') ? 'gif' : 
                      descMedia.match(/\.(mp4|webm|ogg)$/) ? 'video' : 'image';
    }

    // Check if both media are provided
    if (!introMedia || !descMedia) {
      return res.status(400).json({
        success: false,
        message: "Intro and Description media are required"
      });
    }

    // Get user info
    const dbUser = await User.findById(user.id).select("name");
    if (!dbUser) return res.status(401).json({ success: false, message: "Invalid user" });

    // Create blog
    const blog = new Blog({
      title: title.trim(),
      authorName: dbUser.name,
      authorLinkedin: authorLinkedin || "",
      tags: tags ? tags.split(",").map(t => t.trim()).filter(t => t) : [],
      introduction,
      description,
      conclusion,
      introImage: introMedia,
      introMediaType,
      descriptionImage: descMedia,
      descriptionMediaType: descMediaType,
      createdBy: user.id,
      status: user.isAdmin ? "approved" : "pending",
      published: user.isAdmin ? (published || false) : false,
    });

    await blog.save();

    // Send admin notifications (if any admins exist)
    try {
      const admins = await User.find({ isAdmin: true }).select("email name");
      
      if (admins.length > 0) {
        for (const admin of admins) {
          await sendEmail({
            to: admin.email,
            subject: "New Blog Pending Approval",
            html: `
              <h2>New Blog Pending Approval</h2>
              <p><strong>Title:</strong> ${blog.title}</p>
              <p><strong>Author:</strong> ${blog.authorName}</p>
              <p><strong>Submitted by:</strong> ${user.email}</p>
              <p>Please review it in the admin panel.</p>
            `
          });
        }
      }
      // If no admins found, don't worry - blog is still created
    } catch (emailError) {
      console.error("Email error:", emailError.message);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: user.isAdmin
        ? "Blog published successfully"
        : "Blog submitted for admin review",
      blogId: blog._id
    });

  } catch (err) {
    console.error("BLOG CREATE ERROR:", err);
    res.status(500).json({ 
      success: false,
      message: "Blog submission failed"
    });
  }
};


export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const {
      title,
      authorName,
      authorLinkedin,
      tags,
      introduction,
      description,
      conclusion,
      introImageUrl,
      descriptionImageUrl
    } = req.body;

    if (title) blog.title = title.trim();
    if (authorName) blog.authorName = authorName.trim();
    if (authorLinkedin !== undefined) blog.authorLinkedin = authorLinkedin.trim();
    if (tags) blog.tags = parseTags(tags);
    if (introduction) blog.introduction = introduction;
    if (description) blog.description = description;
    if (conclusion) blog.conclusion = conclusion;

    const introFile = req.files?.introImage?.[0];
    const descFile = req.files?.descriptionImage?.[0];

    if (introFile) {
      // Upload to Cloudinary
      const cloudinaryResult = await uploadToCloudinary(introFile);
      if (cloudinaryResult) {
        blog.introImage = cloudinaryResult.url;
        blog.introMediaType = cloudinaryResult.resource_type === 'video' ? 'video' : 
                              cloudinaryResult.resource_type === 'image' ? 
                              (introFile.mimetype === 'image/gif' ? 'gif' : 'image') : 'external';
      }
    } else if (introImageUrl) {
      blog.introImage = introImageUrl.trim();
      blog.introMediaType = mediaTypeFromUrl(blog.introImage);
    }

    if (descFile) {
      // Upload to Cloudinary
      const cloudinaryResult = await uploadToCloudinary(descFile);
      if (cloudinaryResult) {
        blog.descriptionImage = cloudinaryResult.url;
        blog.descriptionMediaType = cloudinaryResult.resource_type === 'video' ? 'video' : 
                                   cloudinaryResult.resource_type === 'image' ? 
                                   (descFile.mimetype === 'image/gif' ? 'gif' : 'image') : 'external';
      }
    } else if (descriptionImageUrl) {
      blog.descriptionImage = descriptionImageUrl.trim();
      blog.descriptionMediaType = mediaTypeFromUrl(blog.descriptionImage);
    }

    await blog.save();
    res.json(blog);

  } catch (err) {
    console.error("UPDATE BLOG ERROR:", err);
    res.status(500).json({ message: "Blog update failed" });
  }
};

/* =========================
   GET USER BLOGS (PUBLIC)
========================= */
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ published: true, status: "approved" })
      .sort({ createdAt: -1 });

    res.json(blogs);
  } catch (err) {
    console.error("GET BLOGS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

/* =========================
   DELETE BLOG
========================= */
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (blog) {
      // Delete media from Cloudinary if they're Cloudinary URLs
      if (blog.introImage?.includes('cloudinary.com')) {
        const publicId = blog.introImage.split('/').pop().split('.')[0];
        await cloudinary.v2.uploader.destroy(`blogs/${publicId}`);
      }
      
      if (blog.descriptionImage?.includes('cloudinary.com')) {
        const publicId = blog.descriptionImage.split('/').pop().split('.')[0];
        await cloudinary.v2.uploader.destroy(`blogs/${publicId}`);
      }
    }
    
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (err) {
    console.error("DELETE BLOG ERROR:", err);
    res.status(500).json({ message: "Failed to delete blog" });
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
      published: true,
      status: "approved",
    });

    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    console.error("GET BLOG BY SLUG ERROR:", err);
    res.status(500).json({ message: "Failed to fetch blog" });
  }
};

/* =========================
   ADMIN: GET ALL BLOGS (WITH FILTERS)
========================= */
export const getAllBlogsAdmin = async (req, res) => {
  try {
    const { status, page = 1, limit = 10, search = '' } = req.query;
    const filter = {};
    
    // Filter by status
    if (status && status !== 'all') {
      filter.status = status;
    }
    
    // Search filter
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { authorName: { $regex: search, $options: 'i' } },
        { introduction: { $regex: search, $options: 'i' } }
      ];
    }
    
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;
    
    // Get blogs with pagination
    const blogs = await Blog.find(filter)
      .populate('createdBy', 'name email')
      .populate('reviewedBy', 'name')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);
    
    const total = await Blog.countDocuments(filter);
    
    res.json({
      blogs,
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum)
    });
  } catch (err) {
    console.error("GET ALL BLOGS ADMIN ERROR:", err);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

/* =========================
   GET PENDING BLOGS
========================= */
export const getPendingBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ status: "pending" })
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error("GET PENDING BLOGS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch pending blogs" });
  }
};

/* =========================
   GET APPROVED BLOGS
========================= */
export const getApprovedBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ status: "approved" })
      .populate('createdBy', 'name email')
      .populate('reviewedBy', 'name')
      .sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error("GET APPROVED BLOGS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch approved blogs" });
  }
};

/* =========================
   GET REJECTED BLOGS
========================= */
export const getRejectedBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ status: "rejected" })
      .populate('createdBy', 'name email')
      .populate('reviewedBy', 'name')
      .sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error("GET REJECTED BLOGS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch rejected blogs" });
  }
};

/* =========================
   APPROVE BLOG
========================= */
export const approveBlog = async (req, res) => {
  try {
    const user = req.user;
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    blog.status = "approved";
    blog.published = true;
    blog.adminNote = req.body.note || "";
    blog.reviewedBy = user.id;
    blog.updatedAt = Date.now();
    await blog.save();
    const author = await User.findById(blog.createdBy)
  .select("email name isDeleted");

if (!author || author.isDeleted) {
  console.warn("Author not found or deleted — mail skipped");
} else {
  await sendEmail({
    to: author.email,
    subject:
      blog.status === "approved"
        ? "Your Blog Has Been Approved 🎉"
        : "Your Blog Was Rejected",
    text:
      blog.status === "approved"
        ? `Your blog "${blog.title}" is now live.`
        : `Your blog "${blog.title}" was rejected.\n\nNote: ${blog.adminNote || "—"}`,
    html: `
      <h2>Blog ${blog.status === "approved" ? "Approved" : "Rejected"}</h2>
      <p><strong>${blog.title}</strong></p>
      ${
        blog.status === "rejected"
          ? `<p><strong>Reason:</strong> ${blog.adminNote || "—"}</p>`
          : `<p>Your blog is now live 🎉</p>`
      }
    `
  });
}


    res.json({ 
      message: "Blog approved successfully",
      blog 
    });
  } catch (err) {
    console.error("APPROVE BLOG ERROR:", err);
    res.status(500).json({ message: "Failed to approve blog" });
  }
};

/* =========================
   REJECT BLOG
========================= */
export const rejectBlog = async (req, res) => {
  try {
    const user = req.user;
    const { note } = req.body;
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (!note || note.trim() === "") {
      return res.status(400).json({ message: "Rejection note is required" });
    }

    blog.status = "rejected";
    blog.published = false;
    blog.adminNote = note.trim();
    blog.reviewedBy = user.id;
    blog.updatedAt = Date.now();
    await blog.save();
    const author = await User.findById(blog.createdBy)
  .select("email name isDeleted");

if (!author || author.isDeleted) {
  console.warn("Author not found or deleted — mail skipped");
} else {
  await sendEmail({
    to: author.email,
    subject:
      blog.status === "approved"
        ? "Your Blog Has Been Approved 🎉"
        : "Your Blog Was Rejected",
    text:
      blog.status === "approved"
        ? `Your blog "${blog.title}" is now live.`
        : `Your blog "${blog.title}" was rejected.\n\nNote: ${blog.adminNote || "—"}`,
    html: `
      <h2>Blog ${blog.status === "approved" ? "Approved" : "Rejected"}</h2>
      <p><strong>${blog.title}</strong></p>
      ${
        blog.status === "rejected"
          ? `<p><strong>Reason:</strong> ${blog.adminNote || "—"}</p>`
          : `<p>Your blog is now live 🎉</p>`
      }
    `
  });
}


    res.json({ 
      message: "Blog rejected successfully",
      blog 
    });
  } catch (err) {
    console.error("REJECT BLOG ERROR:", err);
    res.status(500).json({ message: "Failed to reject blog" });
  }
};

/* =========================
   ADMIN: GET BLOG BY ID
========================= */
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate('createdBy', 'name email')
      .populate('reviewedBy', 'name');
    
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    
    res.json(blog);
  } catch (err) {
    console.error("GET BLOG BY ID ERROR:", err);
    res.status(500).json({ message: "Failed to fetch blog" });
  }
};
// In your blogController.js

/* =========================
   GET USER BLOG STATS
========================= */
export const getUserBlogStats = async (req, res) => {
  try {
    const userId = req.user.id;
    
    // Get counts by status
    const counts = await Blog.aggregate([
      {
        $match: {
          createdBy: userId,
          // Exclude if you have soft delete
          // isDeleted: { $ne: true }
        }
      },
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]);

    // Calculate totals and individual counts
    const stats = {
      total: 0,
      published: 0,
      pending: 0,
      rejected: 0,
      views: 0,
      approvalRate: 0
    };

    // Process the aggregation results
    counts.forEach(item => {
      stats.total += item.count;
      if (item._id === 'published' || item._id === 'approved') {
        stats.published += item.count;
      } else if (item._id === 'pending') {
        stats.pending += item.count;
      } else if (item._id === 'rejected') {
        stats.rejected += item.count;
      }
    });

    // Get total views
    const viewsResult = await Blog.aggregate([
      {
        $match: {
          createdBy: userId,
          // isDeleted: { $ne: true }
        }
      },
      {
        $group: {
          _id: null,
          totalViews: { $sum: "$views" }
        }
      }
    ]);

    stats.views = viewsResult.length > 0 ? viewsResult[0].totalViews : 0;

    // Calculate approval rate
    if (stats.total > 0) {
      const approvedCount = stats.published;
      stats.approvalRate = Math.round((approvedCount / stats.total) * 100);
    }

    res.json({
      success: true,
      data: stats
    });

  } catch (error) {
    console.error("GET USER BLOG STATS ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch stats"
    });
  }
};
// In your blogController.js

/* =========================
   GET USER BLOGS (ALL)
========================= */
export const getUserBlogs = async (req, res) => {
  try {
    const userId = req.user.id;
    const { page = 1, limit = 10, search = '' } = req.query;
    
    const filter = { createdBy: userId };
    
    // Add search filter
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { introduction: { $regex: search, $options: 'i' } }
      ];
    }
    
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;
    
    // Get blogs with pagination
    const blogs = await Blog.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum)
      .select('title introduction status views createdAt adminNote slug');
    
    const total = await Blog.countDocuments(filter);
    
    res.json({
      success: true,
      data: {
        blogs,
        pagination: {
          total,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(total / limitNum)
        }
      }
    });
    
  } catch (error) {
    console.error("GET USER BLOGS ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch blogs"
    });
  }
};

/* =========================
   GET USER PUBLISHED BLOGS
========================= */
export const getUserPublishedBlogs = async (req, res) => {
  try {
    const userId = req.user.id;
    const { page = 1, limit = 10, search = '' } = req.query;
    
    const filter = { 
      createdBy: userId,
      $or: [{ status: 'published' }, { status: 'approved' }],
      published: true
    };
    
    if (search) {
      filter.$or.push(
        { title: { $regex: search, $options: 'i' } },
        { introduction: { $regex: search, $options: 'i' } }
      );
    }
    
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;
    
    const blogs = await Blog.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum)
      .select('title introduction status views createdAt slug');
    
    const total = await Blog.countDocuments(filter);
    
    res.json({
      success: true,
      data: {
        blogs,
        pagination: {
          total,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(total / limitNum)
        }
      }
    });
    
  } catch (error) {
    console.error("GET USER PUBLISHED BLOGS ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch published blogs"
    });
  }
};

/* =========================
   GET USER PENDING BLOGS
========================= */
export const getUserPendingBlogs = async (req, res) => {
  try {
    const userId = req.user.id;
    const { page = 1, limit = 10, search = '' } = req.query;
    
    const filter = { 
      createdBy: userId,
      status: 'pending'
    };
    
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { introduction: { $regex: search, $options: 'i' } }
      ];
    }
    
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;
    
    const blogs = await Blog.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum)
      .select('title introduction status views createdAt adminNote');
    
    const total = await Blog.countDocuments(filter);
    
    res.json({
      success: true,
      data: {
        blogs,
        pagination: {
          total,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(total / limitNum)
        }
      }
    });
    
  } catch (error) {
    console.error("GET USER PENDING BLOGS ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch pending blogs"
    });
  }
};

/* =========================
   GET USER REJECTED BLOGS
========================= */
export const getUserRejectedBlogs = async (req, res) => {
  try {
    const userId = req.user.id;
    const { page = 1, limit = 10, search = '' } = req.query;
    
    const filter = { 
      createdBy: userId,
      status: 'rejected'
    };
    
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { introduction: { $regex: search, $options: 'i' } }
      ];
    }
    
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;
    
    const blogs = await Blog.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum)
      .select('title introduction status views createdAt adminNote');
    
    const total = await Blog.countDocuments(filter);
    
    res.json({
      success: true,
      message: total === 0 ? "No rejected blogs found" : "Rejected blogs fetched successfully",
      data: {
        blogs,
        pagination: {
          total,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(total / limitNum)
        }
      }
    });
    
  } catch (error) {
    console.error("GET USER REJECTED BLOGS ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch rejected blogs"
    });
  }
};