// controllers/blogController.js
const Blog = require('../models/blogs');
const cloudinary = require('../config/Cloudinary'); // make sure this exports configured cloudinary.uploader
// const { uploadBufferToImgur } = require('../utils/imgur'); // not used here

// -------------------- helpers --------------------
function countWords(text = '') {
  return (text.trim().match(/\S+/g) || []).length;
}

function parseTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags.map(t => t.trim()).filter(Boolean);
  return tags.split(',').map(t => t.trim()).filter(Boolean);
}

function formatDateYYYYMMDD(d) {
  if (!d) return null;
  const dt = new Date(d);
  if (isNaN(dt.getTime())) return null;
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
        resource_type: 'auto', // accept gifs, webm, mp4 etc.
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    stream.end(buffer);
  });
}

function mediaTypeFromMime(mime) {
  if (!mime) return 'external';
  if (mime === 'image/gif') return 'gif';
  if (mime.startsWith('image/')) return 'image';
  if (mime.startsWith('video/')) return 'video';
  return 'external';
}

function mediaTypeFromUrl(url) {
  if (!url) return 'external';
  const lower = url.split('?')[0].toLowerCase();
  if (lower.endsWith('.gif')) return 'gif';
  if (lower.match(/\.(mp4|webm|ogg)$/)) return 'video';
  if (lower.match(/\.(jpg|jpeg|png|webp)$/)) return 'image';
  return 'external';
}
// -------------------- end helpers --------------------


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
      // optional external URL fields (frontend may send these instead of files)
      introImageUrl,
      descriptionImageUrl
    } = req.body;

    // minimal required field checks (title/authorName/introduction/description)
    if (!title || !authorName || !introduction || !description) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const folder = process.env.CLOUDINARY_FOLDER || 'inteqt-blogs';

    let introImageUrlSaved = null;
    let descriptionImageUrlSaved = null;
    let introMediaType = 'image';
    let descriptionMediaType = 'image';

    // If files uploaded via multer (memoryStorage) -> req.files.introImage[0].buffer
    if (req.files && req.files.introImage && req.files.introImage[0] && req.files.introImage[0].buffer) {
      const file = req.files.introImage[0];
      const result = await uploadBufferToCloudinary(file.buffer, folder);
      introImageUrlSaved = result.secure_url;
      introMediaType = mediaTypeFromMime(file.mimetype) || mediaTypeFromUrl(result.secure_url);
    } else if (introImageUrl && typeof introImageUrl === 'string' && introImageUrl.trim()) {
      // If frontend provided an external URL instead of file
      introImageUrlSaved = introImageUrl.trim();
      introMediaType = mediaTypeFromUrl(introImageUrlSaved);
    }

    if (req.files && req.files.descriptionImage && req.files.descriptionImage[0] && req.files.descriptionImage[0].buffer) {
      const file = req.files.descriptionImage[0];
      const result = await uploadBufferToCloudinary(file.buffer, folder);
      descriptionImageUrlSaved = result.secure_url;
      descriptionMediaType = mediaTypeFromMime(file.mimetype) || mediaTypeFromUrl(result.secure_url);
    } else if (descriptionImageUrl && typeof descriptionImageUrl === 'string' && descriptionImageUrl.trim()) {
      descriptionImageUrlSaved = descriptionImageUrl.trim();
      descriptionMediaType = mediaTypeFromUrl(descriptionImageUrlSaved);
    }

    // convert tags into array if needed
    let tagArray = [];
    if (Array.isArray(tags)) tagArray = tags;
    else if (typeof tags === 'string' && tags.trim()) tagArray = tags.split(',').map(t => t.trim()).filter(Boolean);

    const blog = new Blog({
      title: title.trim(),
      authorName: authorName.trim(),
      authorLinkedin: authorLinkedin?.trim() || undefined,
      tags: tagArray,
      introduction: introduction?.trim() || '',
      description: description?.trim() || '',
      conclusion: conclusion?.trim() || '',
      introImage: introImageUrlSaved,
      introMediaType,
      descriptionImage: descriptionImageUrlSaved,
      descriptionMediaType,
      published: published !== undefined ? (published === 'true' || published === true) : true,
      createdBy: req.user && req.user._id ? req.user._id : undefined,
    });

    const saved = await blog.save();
    return res.status(201).json(saved);
  } catch (err) {
    console.error('Error creating blog:', err);
    return res.status(500).json({ message: 'Server error creating blog', error: err.message });
  }
};


// GET /api/blogs/all
exports.getBlogs = async (req, res, next) => {
  try {
    const { q, tag, page = 1, limit = 20 } = req.query;
    const filter = { published: true };
    if (q) filter.$or = [
      { title: new RegExp(q, 'i') },
      { introduction: new RegExp(q, 'i') },
      { description: new RegExp(q, 'i') }
    ];
    if (tag) filter.tags = tag;
    const skip = (Math.max(1, Number(page)) - 1) * Number(limit);

    const blogs = await Blog.find(filter)
      .select('-description') // keep list lightweight
      .sort('-publicationDate')
      .skip(skip)
      .limit(Number(limit));

    // map and format
    const out = blogs.map(b => {
      const o = b.toObject();
      o.publicationDate = formatDateYYYYMMDD(o.publicationDate);
      // ensure media fields exist for frontend (defensive)
      o.introImage = o.introImage || null;
      o.introMediaType = o.introMediaType || (o.introImage ? mediaTypeFromUrl(o.introImage) : null);
      return o;
    });

    res.json(out);
  } catch (err) {
    next(err);
  }
};


// GET /api/blogs/slug/:slug
exports.getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, published: true });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    const o = blog.toObject();
    o.publicationDate = formatDateYYYYMMDD(o.publicationDate);
    // ensure mediaType is present
    o.introMediaType = o.introMediaType || (o.introImage ? mediaTypeFromUrl(o.introImage) : null);
    o.descriptionMediaType = o.descriptionMediaType || (o.descriptionImage ? mediaTypeFromUrl(o.descriptionImage) : null);
    res.json(o);
  } catch (err) {
    next(err);
  }
};


// PUT /api/blogs/:id  (admin only)
exports.updateBlog = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // destructure incoming fields
    const {
      title,
      authorName,
      authorLinkedin,
      tags = '',
      introduction,
      description,
      conclusion,
      published,
      // optional external URL replacements
      introImageUrl: newIntroImageUrl,
      descriptionImageUrl: newDescriptionImageUrl
    } = req.body;

    // update basic fields if present
    if (title) blog.title = title.trim();
    if (authorName) blog.authorName = authorName.trim();
    if (authorLinkedin !== undefined) blog.authorLinkedin = authorLinkedin?.trim() || undefined;
    if (tags) blog.tags = parseTags(tags);

    // validate word counts if changed
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

    // handle files (multer memoryStorage) OR external URL replacements
    const introFile = (req.files && req.files.introImage && req.files.introImage[0]) || null;
    const descFile = (req.files && req.files.descriptionImage && req.files.descriptionImage[0]) || null;

    const folder = process.env.CLOUDINARY_FOLDER || 'inteqt-blogs';

    // Intro image/file handling
    if (introFile) {
      try {
        const result = await uploadBufferToCloudinary(introFile.buffer, folder);
        blog.introImage = result.secure_url;
        blog.introMediaType = mediaTypeFromMime(introFile.mimetype) || mediaTypeFromUrl(result.secure_url);
      } catch (err) {
        console.error('Intro upload failed', err);
        return res.status(500).json({ message: 'Intro image upload failed: ' + (err.message || err.toString()) });
      }
    } else if (newIntroImageUrl && typeof newIntroImageUrl === 'string' && newIntroImageUrl.trim()) {
      blog.introImage = newIntroImageUrl.trim();
      blog.introMediaType = mediaTypeFromUrl(blog.introImage);
    }

    // Description image/file handling
    if (descFile) {
      try {
        const result = await uploadBufferToCloudinary(descFile.buffer, folder);
        blog.descriptionImage = result.secure_url;
        blog.descriptionMediaType = mediaTypeFromMime(descFile.mimetype) || mediaTypeFromUrl(result.secure_url);
      } catch (err) {
        console.error('Description upload failed', err);
        return res.status(500).json({ message: 'Description image upload failed: ' + (err.message || err.toString()) });
      }
    } else if (newDescriptionImageUrl && typeof newDescriptionImageUrl === 'string' && newDescriptionImageUrl.trim()) {
      blog.descriptionImage = newDescriptionImageUrl.trim();
      blog.descriptionMediaType = mediaTypeFromUrl(blog.descriptionImage);
    }

    // save and respond
    await blog.save();
    const out = blog.toObject();
    out.publicationDate = formatDateYYYYMMDD(out.publicationDate);
    res.json(out);
  } catch (err) {
    console.error('Error in updateBlog:', err);
    next(err);
  }
};


// DELETE /api/blogs/:id  (admin)
exports.deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    await Blog.deleteOne({ _id: id });

    return res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error('Error deleting blog:', err);
    return res.status(500).json({ message: 'Server error deleting blog', error: err.message });
  }
};
