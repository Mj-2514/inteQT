// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../Middleware/authMiddleware');
const admin = require('../Middleware/adminMiddleware');
const blogController = require('../controllers/blogController');

// routes/blogRoutes.js
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 30 * 1024 * 1024 }, // 30MB for GIFs (adjust as needed)
  fileFilter: (req, file, cb) => {
    // Allow images (including gifs). If you want to allow video uploads too, uncomment the video check.
    if (file.mimetype.startsWith('image/')) return cb(null, true);
    if (file.mimetype.startsWith('video/')) return cb(null, true); // optional
    return cb(new Error('Only image files are allowed (GIF/JPG/PNG/etc).'), false);
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
