import express from "express";
import {
  createEvent,
  getMyEvents,
  getPublishedEvents,
  getEventBySlug
} from "../controllers/eventController.js";
import dotenv from "dotenv";
dotenv.config();


import { eventProtect } from "../Middleware/auth.middleware.js";
import {upload} from "../Middleware/upload.js";

const router = express.Router();

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
router.post(
  "/create",
  eventProtect,
  upload.single("media"), // Cloudinary upload
  createEvent
);

// Get logged-in user's events
// GET /api/events/my
router.get(
  "/my",
  eventProtect,
  getMyEvents
);

export default router;
