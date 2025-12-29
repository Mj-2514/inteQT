import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const eventUserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^[a-zA-Z0-9._%+-]+@inte-qt\.com$/, "Only @inte-qt.com emails allowed"],
    },
    password: { type: String, required: true, minlength: 6, select: false },
    isAdmin: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    deletedAt: Date,
    lastLogin: Date,
  },
  { timestamps: true }
);

// Pre-save hook – no `next` needed
eventUserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password method
eventUserSchema.methods.comparePassword = function (entered) {
  return bcrypt.compare(entered, this.password);
};

export default mongoose.model("EventUser", eventUserSchema);
