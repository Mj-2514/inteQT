import express from "express";
import { authEvent } from "../Middleware/AuthEventMiddleware.js";
import { eventAdminOnly } from "../Middleware/eventAdmin.js";
import eventUpload from "../Middleware/uploadMiddleware.js";
import {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
   getEventById
} from "../controllers/eventController.js";

const router = express.Router();

/* =========================
   GET ALL EVENTS
========================= */
router.get("/", getEvents);

/* =========================
   ADD EVENT (FIXED)
   POST /api/events/add
========================= */
router.post(
  "/add",
  authEvent,
  eventUpload.single("media"), // MUST be "media"
  addEvent
);
router.get(
  "/:id",
  authEvent,
  eventAdminOnly,
  getEventById
);

/* =========================
   UPDATE EVENT
========================= */
router.put("/:id", authEvent, eventAdminOnly, updateEvent);

/* =========================
   DELETE EVENT
========================= */
router.delete("/:id", authEvent, eventAdminOnly, deleteEvent);

export default router;
