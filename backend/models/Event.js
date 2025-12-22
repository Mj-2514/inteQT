import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    mediaUrl: { type: String, required: true },
    mediaType: {
      type: String,
      enum: ["image", "gif", "video"],
      required: true,
    },
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    location: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    link: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EventUser",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Event", EventSchema);
