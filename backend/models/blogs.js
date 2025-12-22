// models/blogs.js
import mongoose from 'mongoose';
import slugify from 'slugify';

const blogSchema = new mongoose.Schema({
  authorName: { type: String, required: true, trim: true },
  authorLinkedin: { type: String, trim: true },
  publicationDate: { type: Date, required: true, default: Date.now },
  title: { type: String, required: true, trim: true },
  slug: { type: String, index: true, unique: true },
  tags: [{ type: String }],
  introduction: { type: String },
  // introImage and descriptionImage stay strings (URL). They can point to a still image or GIF or video URL.
  introImage: { type: String, required: true },
  introMediaType: { type: String, enum: ['gif','image','video','external'], default: 'image' },
  description: { type: String },
  descriptionImage: { type: String, required: true },
  descriptionMediaType: { type: String, enum: ['gif','image','video','external'], default: 'image' },
  conclusion: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// pre validate same as before
blogSchema.pre('validate', function () {
  if (!this.slug && this.title) {
    const base = slugify(this.title, { lower: true, strict: true }).slice(0, 200);
    this.slug = `${base}-${Date.now().toString(36).slice(-6)}`;
  }
  this.updatedAt = Date.now();
});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
