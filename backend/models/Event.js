// models/Event.js
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true
    },

    description: {
      type: String,
      required: true,
    },

    startDate: {
      type: Date,
      required: true
    },

    endDate: {
      type: Date,
      required: true,
      validate: {
        validator(v) {
          return v > this.startDate;
        },
        message: "End date must be after start date"
      }
    },

    location: String,
    city: String,

    type: {
      type: String,
      enum: [
        "conference",
        "workshop",
        "meeting",
        "seminar",
        "networking",
        "webinar",
        "hackathon",
        "other"
      ],
      default: "meeting"
    },

    tags: [String],

    // FIXED: Only one introMedia field
    introMedia: {
      type: String,
      default: null
    },

    mediaType: {
  type: String,
  enum: ["image", "video", "gif", "external", "none"],
  default: "none"
},

    linkedPostUrl: {
      type: String,
      trim: true
    },

    status: {
      type: String,
      enum: ["pending", "published", "rejected"],
      default: "pending"
    },

    rejectionNote: String,

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EventUser",
      required: true
    },

    views: {
      type: Number,
      default: 0
    },

    isDeleted: {
      type: Boolean,
      default: false
    },

    deletedAt: Date
  },
  { timestamps: true }
);

/* ===============================
   SLUG GENERATION (SAFE & CLEAN)
================================ */
eventSchema.pre("save", async function () {
  if (!this.isModified("title")) return;

  const baseSlug = this.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();

  let slug = baseSlug;
  let count = 1;

  const Event = mongoose.model("Event");

  while (await Event.exists({ slug, _id: { $ne: this._id } })) {
    slug = `${baseSlug}-${count++}`;
  }

  this.slug = slug;
});

export default mongoose.model("Event", eventSchema);