// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../Middleware/authMiddleware');
const admin = require('../Middleware/adminMiddleware');
const blogController = require('../controllers/blogController');

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 6 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) return cb(new Error('Only images allowed'), false);
    cb(null, true);
  }
});

// Public endpoints (no auth)
router.get('/all', blogController.getBlogs);
router.get('/slug/:slug', blogController.getBlogBySlug);

// Create: authenticated users only
router.post(
  '/add',
  auth,
  upload.fields([
    { name: 'introImage', maxCount: 1 },
    { name: 'descriptionImage', maxCount: 1 }
  ]),
  blogController.createBlog
);


// Update & Delete: admin only (auth + admin)
router.put(
  '/:id',
  auth,
  admin,
  upload.fields([{ name: 'introImage', maxCount: 1 }, { name: 'descriptionImage', maxCount: 1 }]),
  blogController.updateBlog
);

router.delete('/:id', auth, admin, blogController.deleteBlog);


module.exports = router;
