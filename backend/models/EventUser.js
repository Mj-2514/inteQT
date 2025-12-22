import mongoose from "mongoose";

const EventUserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^[^@]+@inte-qt\.com$/, "Only inte-qt.com emails allowed"],
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    isAdmin: { type: Boolean, default: false },
    name: String,
    lastLogin: Date,
  },
  { timestamps: true }
);

export default mongoose.model("EventUser", EventUserSchema);

