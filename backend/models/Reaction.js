// models/SocialReaction.js
const mongoose = require("mongoose");

const socialReactionSchema = new mongoose.Schema({
  targetType: { type: String, enum: ["Post", "Comment"], required: true },
  targetId: { type: mongoose.Schema.Types.ObjectId, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "SocialUser", required: true },
  type: { type: String, required: true }, // like, love, laugh...
  createdAt: { type: Date, default: Date.now },
});

socialReactionSchema.index({ targetType: 1, targetId: 1, user: 1 }, { unique: true });

const SocialReaction = mongoose.model("SocialReaction", socialReactionSchema);
export default SocialReaction;