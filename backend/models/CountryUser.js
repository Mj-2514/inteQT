import mongoose from "mongoose";

const countryUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false, // never send password in responses
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },

    isActive: {
      type: Boolean,
      default: true, // admin can disable user access
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CountryUser", // admin who created this user
      default: null,
    },
     deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("CountryUser", countryUserSchema);
