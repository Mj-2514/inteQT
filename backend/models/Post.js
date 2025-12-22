// models/SocialPost.js
const mongoose = require("mongoose");

const socialPostSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "SocialUser", required: true },
  content: { type: String, required: true },
  media: [{ url: String, type: String }], // type: image/gif/video
  mentions: [{ type: mongoose.Schema.Types.ObjectId, ref: "SocialUser" }],
  reactionCounts: { type: Map, of: Number, default: {} },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  deleted: { type: Boolean, default: false },
});

const SocialPost = mongoose.model("SocialPost", socialPostSchema);
export default SocialPost;
