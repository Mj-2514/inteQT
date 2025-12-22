// models/SocialComment.js
const mongoose = require("mongoose");

const socialCommentSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: "SocialPost", required: true },
  parentComment: { type: mongoose.Schema.Types.ObjectId, ref: "SocialComment", default: null },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "SocialUser", required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  deleted: { type: Boolean, default: false },
});
const SocialComment = mongoose.model("SocialComment", socialCommentSchema);
export default SocialComment;