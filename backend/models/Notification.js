// models/SocialNotification.js
const mongoose = require("mongoose");

const socialNotificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "SocialUser", required: true }, // recipient
  actor: { type: mongoose.Schema.Types.ObjectId, ref: "SocialUser" }, // who triggered it
  type: { type: String, required: true }, // post_like, comment, mention, reply, reaction
  data: { type: mongoose.Schema.Types.Mixed }, // { postId, commentId, reactionType, snippet, ... }
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

socialNotificationSchema.index({ user: 1, read: 1, createdAt: -1 });

const SocialNotification = mongoose.model("SocialNotification", socialNotificationSchema);
export default SocialNotification;