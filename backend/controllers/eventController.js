import Event from "../models/Event.js";
import cloudinary from "../config/Cloudinary.js";
import { isCompanyEmail } from "../utils/validateCompanyEmail.js";

const detectMediaTypeFromUrl = (url) => {
  if (/\.(mp4|webm)$/i.test(url)) return "video";
  if (/\.gif$/i.test(url)) return "gif";
  return "image";
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find()
      .sort({ createdAt: -1 })
      .populate("createdBy", "name email");

    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addEvent = async (req, res) => {
  try {
    if (!isCompanyEmail(req.user.email)) {
      return res.status(403).json({ message: "Company email required" });
    }

    const {
      title,
      startDate,
      endDate,
      location,
      city,
      description,
      type,
      link,
      mediaUrl: bodyMediaUrl,
    } = req.body;

    if (!title || !startDate || !endDate || !location || !city || !description || !type) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    if (new Date(endDate) < new Date(startDate)) {
  return res
    .status(400)
    .json({ message: "End date cannot be before start date" });
}

    let mediaUrl;
    let mediaType;

    // ===== FILE UPLOAD =====
    if (req.file) {
      const isVideo = req.file.mimetype.startsWith("video");

      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            folder: "events",
            resource_type: isVideo ? "video" : "image",
          },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }
        ).end(req.file.buffer);
      });

      mediaUrl = uploadResult.secure_url;
      mediaType = isVideo
        ? "video"
        : req.file.mimetype === "image/gif"
        ? "gif"
        : "image";
    }

    // ===== IMAGE / VIDEO URL =====
    else if (bodyMediaUrl) {
      mediaUrl = bodyMediaUrl;
      mediaType = detectMediaTypeFromUrl(bodyMediaUrl);
    }

    // ===== NO MEDIA =====
    else {
      return res.status(400).json({ message: "Media is required" });
    }

    const event = await Event.create({
      title,
      startDate,
      endDate,
      location,
      city,
      description,
      type,
      link,
      mediaUrl,
      mediaType,
      createdBy: req.user.id,
    });

    res.status(201).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    await event.deleteOne();
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
