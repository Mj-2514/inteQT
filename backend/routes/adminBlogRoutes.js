import express from "express";
import { protect, adminOnly } from "../Middleware/authMiddleware.js";
import * as blogController from "../controllers/blogController.js";
import * as authController from "../controllers/authController.js";

const router = express.Router();

// ==================== BLOG ROUTES ====================
// Get all blogs with filters (search, pagination, status)
router.get("/blogs", protect, adminOnly, blogController.getAllBlogsAdmin);

// Get blog by ID
router.get("/blogs/:id", protect, adminOnly, blogController.getBlogById);

// Get blogs by status
router.get("/blogs/status/pending", protect, adminOnly, blogController.getPendingBlogs);
router.get("/blogs/status/approved", protect, adminOnly, blogController.getApprovedBlogs);
router.get("/blogs/status/rejected", protect, adminOnly, blogController.getRejectedBlogs);

// Approve blog
router.put("/blogs/:id/approve", protect, adminOnly, blogController.approveBlog);

// Reject blog
router.put("/blogs/:id/reject", protect, adminOnly, blogController.rejectBlog);

// Delete blog
router.delete("/blogs/:id", protect, adminOnly, blogController.deleteBlog);

// ==================== USER ROUTES ====================
// Get all active users
router.get("/users", protect, adminOnly, authController.getAllUsers);

// Get deleted users
router.get("/users/deleted", protect, adminOnly, authController.getDeletedUsers);

// Delete user (soft delete)
router.delete("/users/:id", protect, adminOnly, authController.deleteUser);

// Restore user
router.put("/users/:id/restore", protect, adminOnly, authController.restoreUser);

// Admin create user
router.post("/users/create", protect, adminOnly, authController.adminCreateUser);

export default router;