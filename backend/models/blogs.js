// models/blogs.js
const mongoose = require('mongoose');
const slugify = require('slugify');

const blogSchema = new mongoose.Schema({
  authorName: { type: String, required: true, trim: true },
  authorLinkedin: { type: String, trim: true },
  publicationDate: { type: Date, required: true, default: Date.now },
  title: { type: String, required: true, trim: true },
  slug: { type: String, index: true, unique: true },
  tags: [{ type: String }],
  introduction: { type: String },
  introImage: { type: String, required: true },
  description: { type: String },
  descriptionImage: { type: String,required: true},
  conclusion: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Synchronous pre-validate hook: NO `next` param, NO async.
// This guarantees Mongoose won't pass a `next` callback and avoids the TypeError.
blogSchema.pre('validate', function () {
  // `this` is the document
  if (!this.slug && this.title) {
    const base = slugify(this.title, { lower: true, strict: true }).slice(0, 200);
    this.slug = `${base}-${Date.now().toString(36).slice(-6)}`;
  }
  // publicationDate default handled by schema; update updatedAt
  this.updatedAt = Date.now();
  // synchronous, so simply return (no next())
});

module.exports = mongoose.model('Blog', blogSchema);
