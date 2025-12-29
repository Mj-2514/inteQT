import Blog from "../models/blogs.js";

/* =========================
   GET PENDING BLOGS
========================= */
export const getPendingBlogs = async (req, res) => {
  const blogs = await Blog.find({ status: "pending" }).sort({ createdAt: -1 });
  res.json(blogs);
};

/* =========================
   GET APPROVED BLOGS
========================= */
export const getApprovedBlogs = async (req, res) => {
  const blogs = await Blog.find({ status: "approved" }).sort({ createdAt: -1 });
  res.json(blogs);
};

/* =========================
   GET REJECTED BLOGS
========================= */
export const getRejectedBlogs = async (req, res) => {
  const blogs = await Blog.find({ status: "rejected" }).sort({ createdAt: -1 });
  res.json(blogs);
};

/* =========================
   APPROVE BLOG
========================= */
export const approveBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });

  blog.status = "approved";
  blog.adminNote = req.body.note || "";
  blog.reviewedBy = req.user.id;
  blog.updatedAt = Date.now();
  await blog.save();

  res.json({ message: "Blog approved" });
};

/* =========================
   REJECT BLOG
========================= */
export const rejectBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });

  blog.status = "rejected";
  blog.adminNote = req.body.note || "";
  blog.reviewedBy = req.user.id;
  blog.updatedAt = Date.now();
  await blog.save();

  res.json({ message: "Blog rejected" });
};
