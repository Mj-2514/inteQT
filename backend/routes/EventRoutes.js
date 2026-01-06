import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import {
  createEvent,
  getMyEvents,
  getPublishedEvents,
  getEventBySlug
} from "../controllers/eventController.js";

import dotenv from "dotenv";
dotenv.config();

import { eventProtect } from "../Middleware/auth.middleware.js";

const router = express.Router();
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

// Create multer instance WITHOUT file filter
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit (increased from 20MB)
  }
});

/* ============================
   CLEANUP TEMP FILES MIDDLEWARE (OPTIONAL)
============================ */
const cleanupTempFiles = (req, res, next) => {
  // Clean up temp files after response is sent (only for errors)
  res.on('finish', () => {
    if (req.file && req.file.path && fs.existsSync(req.file.path)) {
      (`⚠️ Found leftover temp file, cleaning up: ${req.file.path}`);
      try {
        fs.unlinkSync(req.file.path);
        (`🧹 Cleaned up leftover temp file: ${req.file.path}`);
      } catch (err) {
        console.error(`Failed to delete temp file ${req.file.path}:`, err.message);
      }
    }
  });
  next();
};



/* ===============================
   PUBLIC ROUTES
================================ */

// Get all published events
// GET /api/events
router.get("/all-events", getPublishedEvents);

// Get single event by slug + increment views
// GET /api/events/:slug
router.get("/:slug", getEventBySlug);


/* ===============================
   USER ROUTES
================================ */

// Create event (user/admin)
// POST /api/events
router.post("/create", eventProtect, upload.single("file"), createEvent);

// Get logged-in user's events
// GET /api/events/my
router.get(
  "/my",
  eventProtect,
  getMyEvents
);

export default router;
