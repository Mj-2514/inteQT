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
function countWords(text = "") {
  return (text.trim().match(/\S+/g) || []).length;
}

function parseTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags.map(t => t.trim()).filter(Boolean);
  return tags.split(",").map(t => t.trim()).filter(Boolean);
}

function mediaTypeFromMime(mime) {
  if (!mime) return "external";
  if (mime === "image/gif") return "gif";
  if (mime.startsWith("image/")) return "image";
  if (mime.startsWith("video/")) return "video";
  return "external";
}

function mediaTypeFromUrl(url = "") {
  const lower = url.split("?")[0].toLowerCase();
  if (lower.endsWith(".gif")) return "gif";
  if (lower.match(/\.(mp4|webm|ogg)$/)) return "video";
  if (lower.match(/\.(jpg|jpeg|png|webp)$/)) return "image";
  return "external";
}

/* =========================
   UPLOAD TO CLOUDINARY
========================= */
/* =========================
   UPLOAD TO CLOUDINARY
========================= */
const uploadToCloudinary = async (file) => {
  try {
    if (!file || !file.path) {
      console.error('No file or file path provided:', file);
      return null;
    }
    
    console.log('Uploading to Cloudinary:', {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      path: file.path
    });
    
    // Upload to Cloudinary - use cloudinary directly (already v2)
    const result = await cloudinary.uploader.upload(file.path, {
      folder: 'blogs',
      resource_type: 'auto', // auto-detect image or video
      timeout: 60000 // 60 second timeout
    });
    
    console.log('Cloudinary upload successful:', {
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
    console.error('Cloudinary upload error:', error.message);
    console.error('Error details:', error);
    return null;
  }
};

/* =========================
   CREATE BLOG
========================= */
export const createBlog = async (req, res) => {
  try {
    const user = req.user;
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    let parsedData;
    try {
      parsedData = JSON.parse(req.body.data || "{}");
    } catch {
      return res.status(400).json({ message: "Invalid blog payload" });
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

    if (!title || !introduction || !description || !conclusion) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const introFile = req.files?.introImage?.[0];
    const descFile = req.files?.descriptionImage?.[0];

    let introMedia = null;
    let descMedia = null;
    let introMediaType = "external";
    let descMediaType = "external";

    // INTRO MEDIA
    if (introFile) {
      const upload = await uploadToCloudinary(introFile);
      introMedia = upload.url;
      introMediaType = upload.resource_type === "video"
        ? "video"
        : introFile.mimetype === "image/gif"
        ? "gif"
        : "image";
    } else if (introImageUrl) {
      introMedia = introImageUrl.trim();
      introMediaType = mediaTypeFromUrl(introMedia);
    }

    // DESCRIPTION MEDIA
    if (descFile) {
      const upload = await uploadToCloudinary(descFile);
      descMedia = upload.url;
      descMediaType = upload.resource_type === "video"
        ? "video"
        : descFile.mimetype === "image/gif"
        ? "gif"
        : "image";
    } else if (descriptionImageUrl) {
      descMedia = descriptionImageUrl.trim();
      descMediaType = mediaTypeFromUrl(descMedia);
    }

    if (!introMedia || !descMedia) {
      return res.status(400).json({
        message: "Intro and Description media are required",
      });
    }

    const dbUser = await User.findById(user.id).select("name");
    if (!dbUser) return res.status(401).json({ message: "Invalid user" });

    const blog = new Blog({
      title: title.trim(),
      authorName: dbUser.name,
      authorLinkedin: authorLinkedin || "",
      tags: tags?.split(",").map(t => t.trim()).filter(Boolean),
      introduction,
      description,
      conclusion,
      introImage: introMedia,
      introMediaType,
      descriptionImage: descMedia,
      descriptionMediaType: descMediaType,
      createdBy: user.id,
      status: user.isAdmin ? "approved" : "pending",
      published: user.isAdmin ? published : false,
    });

    await blog.save();
    // after Blog.create(...)
try {
  const admins = await User.find({
    isAdmin: true,
    isDeleted: false
  }).select("email name");

  console.log("BLOG ADMINS FOUND:", admins.length);

  if (admins.length === 0) {
    console.warn("⚠️ No blog admins found — mail skipped");
  }

  await Promise.all(
    admins.map(admin =>
      sendEmail({
        to: admin.email,
        subject: "New Blog Pending Approval",
        text: `A new blog has been submitted for review.

Title: ${blog.title}
Author: ${blog.authorName}
`,
        html: `
          <h2>New Blog Pending Approval</h2>
          <ul>
            <li><strong>Title:</strong> ${blog.title}</li>
            <li><strong>Author:</strong> ${blog.authorName}</li>
          </ul>
          <p>Please review it in the admin panel.</p>
        `
      })
    )
  );
} catch (err) {
  console.error("BLOG ADMIN MAIL ERROR:", err);
}


    res.status(201).json({
      message: user.isAdmin
        ? "Blog published successfully"
        : "Blog submitted for admin review",
      blogId: blog._id,
    });

  } catch (err) {
    console.error("BLOG CREATE ERROR:", err);
    res.status(500).json({ message: "Blog submission failed" });
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
  await sendMail({
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
  await sendMail({
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