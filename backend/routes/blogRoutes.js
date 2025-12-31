import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { protect, adminOnly } from "../Middleware/authMiddleware.js";
import * as blogController from "../controllers/blogController.js";
import {upload} from "../Middleware/upload.js"

const router = express.Router();

/* ============================
   TEMPORARY MULTER STORAGE (for Cloudinary upload)
============================ */
const uploadDir = "tmp";

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadDir);
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
    cb(null, name);
  },
});


/* ============================
   CLEANUP TEMP FILES MIDDLEWARE
============================ */
const cleanupTempFiles = (req, res, next) => {
  // Clean up temp files after response is sent
  res.on('finish', () => {
    if (req.files) {
      Object.values(req.files).flat().forEach(file => {
        if (file.path && fs.existsSync(file.path)) {
          fs.unlinkSync(file.path);
        }
      });
    }
  });
  next();
};

/* ============================
   PUBLIC ROUTES
============================ */
router.get("/all", blogController.getBlogs);
router.get("/slug/:slug", blogController.getBlogBySlug);
router.get("/user/stats", blogController.getUserBlogStats);

/* ============================
   CREATE BLOG – USER + ADMIN
============================ */
router.post(
  "/add",
  protect,
  upload.fields([
    { name: "introImage", maxCount: 1 },
    { name: "descriptionImage", maxCount: 1 },
  ]),
  cleanupTempFiles,
  blogController.createBlog
);

/* ============================
   UPDATE / DELETE – ADMIN
============================ */
router.put(
  "/:id",
  protect,
  adminOnly,
  upload.fields([
    { name: "introImage", maxCount: 1 },
    { name: "descriptionImage", maxCount: 1 },
  ]),
  cleanupTempFiles,
  blogController.updateBlog
);

router.delete("/:id", protect, adminOnly, blogController.deleteBlog);


router.get("/user/all", protect, blogController.getUserBlogs);
router.get("/user/published", protect, blogController.getUserPublishedBlogs);
router.get("/user/pending", protect, blogController.getUserPendingBlogs);
router.get("/user/rejected", protect, blogController.getUserRejectedBlogs);

export default router;