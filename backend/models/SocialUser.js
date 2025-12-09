// models/SocialUser.js
const mongoose = require("mongoose");

const socialUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, unique: true }, // for @mentions
  email: { type: String, index: true },

  avatar: { type: String }, // linkedin photo or user-uploaded

  // LinkedIn fields
  linkedinId: { type: String, index: true },
  linkedinAccessToken: { type: String },
  linkedinRefreshToken: { type: String },
  linkedinScopes: [String],

  allowLinkedinNotifications: { type: Boolean, default: false },

  // community stats
  postsCount: { type: Number, default: 0 },
  commentsCount: { type: Number, default: 0 },
  reactionsCount: { type: Number, default: 0 },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SocialUser", socialUserSchema);
