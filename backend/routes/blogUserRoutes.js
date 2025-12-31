// routes/blogUserRoutes.js
import express from 'express';
import { protect } from '../Middleware/authMiddleware.js'; // Your protect middleware
import {
  getUserBlogs,
  getAllUserBlogs,
  getPublishedUserBlogs,
  getPendingUserBlogs,
  getRejectedUserBlogs,
  getUserBlogStats,
  getUserBlogById,
  updateUserBlog,
  deleteUserBlog
} from '../controllers/blogUserController.js';

const router = express.Router();

// Apply protect middleware to ALL routes in this router
router.use(protect);

// Main endpoint with filtering
router.get('/my', getUserBlogs);

// Specific status endpoints
router.get('/all', getAllUserBlogs);
router.get('/published', getPublishedUserBlogs);
router.get('/pending', getPendingUserBlogs);
router.get('/rejected', getRejectedUserBlogs);

// Stats endpoint
router.get('/stats', getUserBlogStats);

// Single blog operations
router.get('/:id', getUserBlogById);
router.put('/:id', updateUserBlog);
router.delete('/:id', deleteUserBlog);

export default router;