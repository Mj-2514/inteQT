// controllers/blogController.js
import Blog from "../models/blogs.js";
import cloudinary from "../config/Cloudinary.js";

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

function uploadBufferToCloudinary(buffer, folder, opts = {}) {
  const resource_type = opts.resource_type || 'auto';
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type },
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

function cloudinaryDirectUrl(maybeUrlOrPublicId) {
  if (!maybeUrlOrPublicId) return null;
  const s = String(maybeUrlOrPublicId);
  if (s.startsWith('http://') || s.startsWith('https://')) return s;
  try {
    const cloudName = (cloudinary.config && cloudinary.config().cloud_name) || process.env.CLOUDINARY_CLOUD_NAME;
    if (!cloudName) return s;
    return `https://res.cloudinary.com/${cloudName}/raw/upload/${encodeURIComponent(s)}`;
  } catch {
    return s;
  }
}
// -------------------- end helpers --------------------

// -------------------- BLOG CONTROLLERS --------------------

// POST /api/blogs/add
export const createBlog = async (req, res) => {
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
      introImageUrl,
      descriptionImageUrl
    } = req.body;

    if (!title || !authorName || !introduction || !description) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const folder = process.env.CLOUDINARY_FOLDER || 'inteqt-blogs';
    let introUrl = introImageUrl || null;
    let descUrl = descriptionImageUrl || null;
    let introMediaType = 'image';
    let descriptionMediaType = 'image';

    // handle intro image (upload or external)
    if (req.files?.introImage?.[0]?.buffer) {
      const result = await uploadBufferToCloudinary(req.files.introImage[0].buffer, folder);
      introUrl = result.secure_url;
      introMediaType = mediaTypeFromMime(req.files.introImage[0].mimetype) || mediaTypeFromUrl(result.secure_url);
    } else if (introUrl && typeof introUrl === 'string' && introUrl.trim()) {
      introUrl = introUrl.trim();
      introMediaType = mediaTypeFromUrl(introUrl);
      if (introMediaType === 'external') introMediaType = 'image';
    }

    // handle description image (upload or external)
    if (req.files?.descriptionImage?.[0]?.buffer) {
      const result = await uploadBufferToCloudinary(req.files.descriptionImage[0].buffer, folder);
      descUrl = result.secure_url;
      descriptionMediaType = mediaTypeFromMime(req.files.descriptionImage[0].mimetype) || mediaTypeFromUrl(result.secure_url);
    } else if (descUrl && typeof descUrl === 'string' && descUrl.trim()) {
      descUrl = descUrl.trim();
      descriptionMediaType = mediaTypeFromUrl(descUrl);
      if (descriptionMediaType === 'external') descriptionMediaType = 'image';
    }

    const tagArray = Array.isArray(tags) ? tags : (typeof tags === 'string' ? tags.split(',').map(t => t.trim()).filter(Boolean) : []);

    const blog = new Blog({
      title: title.trim(),
      authorName: authorName.trim(),
      authorLinkedin: authorLinkedin?.trim() || undefined,
      tags: tagArray,
      introduction: introduction?.trim() || '',
      description: description?.trim() || '',
      conclusion: conclusion?.trim() || '',
      introImage: introUrl,
      introMediaType,
      descriptionImage: descUrl,
      descriptionMediaType,
      published: published !== undefined ? (published === 'true' || published === true) : true,
      createdBy: req.user?._id
    });

    const saved = await blog.save();
    return res.status(201).json(saved);

  } catch (err) {
    console.error('Error creating blog:', err);
    return res.status(500).json({ message: 'Server error creating blog', error: err.message });
  }
};

// PUT /api/blogs/:id
export const updateBlog = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    const {
      title,
      authorName,
      authorLinkedin,
      tags = '',
      introduction,
      description,
      conclusion,
      published,
      introImageUrl: newIntroUrl,
      descriptionImageUrl: newDescUrl
    } = req.body;

    if (title) blog.title = title.trim();
    if (authorName) blog.authorName = authorName.trim();
    if (authorLinkedin !== undefined) blog.authorLinkedin = authorLinkedin?.trim() || undefined;
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

    const folder = process.env.CLOUDINARY_FOLDER || 'inteqt-blogs';

    // update intro image
    if (req.files?.introImage?.[0]?.buffer) {
      const result = await uploadBufferToCloudinary(req.files.introImage[0].buffer, folder);
      blog.introImage = result.secure_url;
      blog.introMediaType = mediaTypeFromMime(req.files.introImage[0].mimetype) || mediaTypeFromUrl(result.secure_url);
    } else if (newIntroUrl && typeof newIntroUrl === 'string' && newIntroUrl.trim()) {
      blog.introImage = newIntroUrl.trim();
      blog.introMediaType = mediaTypeFromUrl(blog.introImage);
      if (blog.introMediaType === 'external') blog.introMediaType = 'image';
    }

    // update description image
    if (req.files?.descriptionImage?.[0]?.buffer) {
      const result = await uploadBufferToCloudinary(req.files.descriptionImage[0].buffer, folder);
      blog.descriptionImage = result.secure_url;
      blog.descriptionMediaType = mediaTypeFromMime(req.files.descriptionImage[0].mimetype) || mediaTypeFromUrl(result.secure_url);
    } else if (newDescUrl && typeof newDescUrl === 'string' && newDescUrl.trim()) {
      blog.descriptionImage = newDescUrl.trim();
      blog.descriptionMediaType = mediaTypeFromUrl(blog.descriptionImage);
      if (blog.descriptionMediaType === 'external') blog.descriptionMediaType = 'image';
    }

    await blog.save();
    const out = blog.toObject();
    out.publicationDate = formatDateYYYYMMDD(out.publicationDate);
    res.json(out);

  } catch (err) {
    console.error('Error updating blog:', err);
    next(err);
  }
};

// GET /api/blogs/all
export const getBlogs = async (req, res, next) => {
  try {
    const { q, tag, page = 1, limit = 20 } = req.query || {};
    const filter = { published: true };
    if (q) filter.$or = [
      { title: new RegExp(q, 'i') },
      { introduction: new RegExp(q, 'i') },
      { description: new RegExp(q, 'i') }
    ];
    if (tag) filter.tags = tag;
    const skip = (Math.max(1, Number(page)) - 1) * Number(limit);

    const blogs = await Blog.find(filter)
      .select('-description')
      .sort('-publicationDate')
      .skip(skip)
      .limit(Number(limit));

    const out = blogs.map(b => {
      const o = b.toObject();
      o.introImage = o.introImage ? cloudinaryDirectUrl(o.introImage) : null;
      o.descriptionImage = o.descriptionImage ? cloudinaryDirectUrl(o.descriptionImage) : null;
      o.introMediaType = o.introMediaType || (o.introImage ? mediaTypeFromUrl(o.introImage) : null);
      o.descriptionMediaType = o.descriptionMediaType || (o.descriptionImage ? mediaTypeFromUrl(o.descriptionImage) : null);
      o.publicationDate = formatDateYYYYMMDD(o.publicationDate);
      return o;
    });

    res.json(out);
  } catch (err) {
    next(err);
  }
};

// GET /api/blogs/slug/:slug
export const getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, published: true });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    const o = blog.toObject();
    o.introImage = o.introImage ? cloudinaryDirectUrl(o.introImage) : null;
    o.descriptionImage = o.descriptionImage ? cloudinaryDirectUrl(o.descriptionImage) : null;
    o.introMediaType = o.introMediaType || (o.introImage ? mediaTypeFromUrl(o.introImage) : null);
    o.descriptionMediaType = o.descriptionMediaType || (o.descriptionImage ? mediaTypeFromUrl(o.descriptionImage) : null);
    o.publicationDate = formatDateYYYYMMDD(o.publicationDate);

    res.json(o);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/blogs/:id
export const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    await Blog.deleteOne({ _id: id });
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error('Error deleting blog:', err);
    return res.status(500).json({ message: 'Server error deleting blog', error: err.message });
  }
};
