import express from "express";
import multer from "multer";
import auth from "../Middleware/authMiddleware.js";
import admin from "../Middleware/adminMiddleware.js";
import * as blogController from "../controllers/blogController.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 30 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) return cb(null, true);
    if (file.mimetype.startsWith("video/")) return cb(null, true);
    return cb(new Error("Only image files are allowed (GIF/JPG/PNG/etc)."), false);
  },
});

// Public endpoints
router.get("/all", blogController.getBlogs);
router.get("/slug/:slug", blogController.getBlogBySlug);

// Create: authenticated users only
router.post(
  "/add",
  auth,
  upload.fields([{ name: "introImage", maxCount: 1 }, { name: "descriptionImage", maxCount: 1 }]),
  blogController.createBlog
);

// Update & Delete: admin only
router.put(
  "/:id",
  auth,
  admin,
  upload.fields([{ name: "introImage", maxCount: 1 }, { name: "descriptionImage", maxCount: 1 }]),
  blogController.updateBlog
);

router.delete("/:id", auth, admin, blogController.deleteBlog);

export default router;
