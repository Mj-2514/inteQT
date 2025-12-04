// controllers/blogController.js
const Blog = require('../models/blogs');
const cloudinary = require('../config/Cloudinary');
// const { uploadBufferToImgur } = require('../utils/imgur');

function countWords(text = '') {
  return (text.trim().match(/\S+/g) || []).length;
}

function parseTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags.map(t=>t.trim()).filter(Boolean);
  return tags.split(',').map(t=>t.trim()).filter(Boolean);
}

function formatDateYYYYMMDD(d) {
  if (!d) return null;
  const dt = new Date(d);
  const yyyy = dt.getFullYear();
  const mm = String(dt.getMonth() + 1).padStart(2, '0');
  const dd = String(dt.getDate()).padStart(2, '0');
  return `${yyyy}/${mm}/${dd}`;
}
function uploadBufferToCloudinary(buffer, folder) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: 'image',
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    stream.end(buffer);
  });
}


// POST /api/blogs/add
exports.createBlog = async (req, res) => {
  try {
    const {
      title,
      authorName,
      authorLinkedin,
      tags,
      introduction,
      description,
      conclusion,
      published,
    } = req.body;

    if (!title || !authorName || !introduction || !description) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Cloudinary folder from env or default
    const folder =
      process.env.CLOUDINARY_FOLDER || 'inteqt-blogs';

    let introImageUrl = null;
    let descriptionImageUrl = null;

    // Upload intro image if provided
    if (
      req.files &&
      req.files.introImage &&
      req.files.introImage[0] &&
      req.files.introImage[0].buffer
    ) {
      const result = await uploadBufferToCloudinary(
        req.files.introImage[0].buffer,
        folder
      );
      introImageUrl = result.secure_url;
    }

    // Upload description image if provided
    if (
      req.files &&
      req.files.descriptionImage &&
      req.files.descriptionImage[0] &&
      req.files.descriptionImage[0].buffer
    ) {
      const result = await uploadBufferToCloudinary(
        req.files.descriptionImage[0].buffer,
        folder
      );
      descriptionImageUrl = result.secure_url;
    }

    // tags: frontend sends comma-separated string, convert to array
    let tagArray = [];
    if (Array.isArray(tags)) {
      tagArray = tags;
    } else if (typeof tags === 'string' && tags.trim()) {
      tagArray = tags.split(',').map(t => t.trim()).filter(Boolean);
    }

    const blog = new Blog({
      title: title.trim(),
      authorName: authorName.trim(),
      authorLinkedin: authorLinkedin?.trim() || undefined,
      tags: tagArray,
      introduction: introduction?.trim() || '',
      description: description?.trim() || '',
      conclusion: conclusion?.trim() || '',
      introImage: introImageUrl,
      descriptionImage: descriptionImageUrl,
      published: published !== undefined ? published === 'true' || published === true : true,
      createdBy: req.user._id, // from auth middleware
      // publicationDate, createdAt, updatedAt handled by model
    });

    const saved = await blog.save();
    return res.status(201).json(saved);
  } catch (err) {
    console.error('Error creating blog:', err);
    return res.status(500).json({ message: 'Server error creating blog' });
  }
};



exports.getBlogs = async (req, res, next) => {
  try {
    const { q, tag, page = 1, limit = 20 } = req.query;
    const filter = { published: true };
    if (q) filter.$or = [{ title: new RegExp(q, 'i') }, { introduction: new RegExp(q, 'i') }, { description: new RegExp(q, 'i') }];
    if (tag) filter.tags = tag;
    const skip = (Math.max(1, Number(page)) - 1) * Number(limit);

    const blogs = await Blog.find(filter)
      .select('-description') // lighter list; description omitted
      .sort('-publicationDate')
      .skip(skip)
      .limit(Number(limit));

    // format publicationDate for each blog
    const out = blogs.map(b => {
      const o = b.toObject();
      o.publicationDate = formatDateYYYYMMDD(o.publicationDate);
      return o;
    });

    res.json(out);
  } catch (err) { next(err); }
};


exports.getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, published: true });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    const o = blog.toObject();
    o.publicationDate = formatDateYYYYMMDD(o.publicationDate);
    res.json(o);
  } catch (err) { next(err); }
};


// update & delete (admin only — routes will protect)
// update allows changing everything, including replacing images (uploads to Imgur)
exports.updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    const {
      title, authorName, authorLinkedin,
      tags = '', introduction, description, conclusion, published
    } = req.body;

    if (title) blog.title = title;
    if (authorName) blog.authorName = authorName;
    if (authorLinkedin !== undefined) blog.authorLinkedin = authorLinkedin;
    if (tags) blog.tags = parseTags(tags);

    if (introduction !== undefined) {
      if (countWords(introduction) > 330) return res.status(400).json({ message: 'Introduction exceeds 330-word limit' });
      blog.introduction = introduction;
    }
    if (description !== undefined) {
      if (countWords(description) > 1500) return res.status(400).json({ message: 'Description exceeds 1500-word limit' });
      blog.description = description;
    }
    if (conclusion !== undefined) {
      if (countWords(conclusion) > 650) return res.status(400).json({ message: 'Conclusion exceeds 650-word limit' });
      blog.conclusion = conclusion;
    }
    if (published !== undefined) blog.published = (published === 'true' || published === true);

    // files
    const introFile = (req.files && req.files.introImage && req.files.introImage[0]) || null;
    const descFile = (req.files && req.files.descriptionImage && req.files.descriptionImage[0]) || null;

    if (introFile) {
      try {
        const link = await uploadBufferToImgur(introFile.buffer);
        blog.introImage = link;
      } catch (err) {
        return res.status(500).json({ message: 'Intro image upload failed: ' + err.message });
      }
    }
    if (descFile) {
      try {
        const link = await uploadBufferToImgur(descFile.buffer);
        blog.descriptionImage = link;
      } catch (err) {
        return res.status(500).json({ message: 'Description image upload failed: ' + err.message });
      }
    }

    await blog.save();
    const out = blog.toObject();
    out.publicationDate = formatDateYYYYMMDD(out.publicationDate);
    res.json(out);
  } catch (err) { next(err); }
};


exports.deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Mongoose 7+ compatible
    await Blog.deleteOne({ _id: id });
    // or: await blog.deleteOne();

    return res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error('Error deleting blog:', err);
    return res
      .status(500)
      .json({ message: 'Server error deleting blog', error: err.message });
  }
};

