// controllers/socialPostController.js
const SocialPost = require('../models/Post');
const SocialUser = require('../models/SocialUser');
const SocialNotification = require('../models/Notification');
const { extractMentions } = require('../utils/mentionParser');
const { enqueueNotification } = require('../lib/queue');

exports.createPost = async (req, res, next) => {
  try {
    const { content, media = [] } = req.body;
    if (!content || !content.trim()) return res.status(400).json({ message: 'Content required' });

    // parse mentions (@username)
    const mentionUsernames = extractMentions(content);
    let mentionIds = [];
    if (mentionUsernames.length) {
      // resolve usernames -> SocialUser ids
      const users = await SocialUser.find({ username: { $in: mentionUsernames } }).select('_id');
      mentionIds = users.map(u => u._id);
    }

    const post = await SocialPost.create({
      author: req.socialUser._id,
      content: content.trim(),
      media: Array.isArray(media) ? media : [],
      mentions: mentionIds,
    });

    // increment author's postsCount (best-effort)
    await SocialUser.findByIdAndUpdate(req.socialUser._id, { $inc: { postsCount: 1 } });

    // create notifications for mentioned users
    for (const uid of mentionIds) {
      await SocialNotification.create({
        user: uid,
        actor: req.socialUser._id,
        type: 'mention',
        data: { postId: post._id, snippet: content.slice(0, 200) },
      });
      // enqueue external notification job
      enqueueNotification('external-notify', { userId: uid.toString(), type: 'mention', actorId: req.socialUser._id.toString(), postId: post._id.toString() });
    }

    // Informational enqueue for post creation (could notify followers later)
    enqueueNotification('post-created', { postId: post._id.toString(), actorId: req.socialUser._id.toString() });

    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

exports.listPosts = async (req, res, next) => {
  try {
    const page = Math.max(1, Number(req.query.page || 1));
    const limit = Math.min(50, Number(req.query.limit || 20));
    const skip = (page - 1) * limit;

    const posts = await SocialPost.find({ deleted: false })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('author', 'name username avatar')
      .lean();

    res.json({ page, limit, items: posts });
  } catch (err) { next(err); }
};

exports.getPost = async (req, res, next) => {
  try {
    const post = await SocialPost.findById(req.params.id)
      .populate('author', 'name username avatar')
      .populate('mentions', 'name username avatar')
      .lean();
    if (!post || post.deleted) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) { next(err); }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await SocialPost.findById(req.params.id);
    if (!post || post.deleted) return res.status(404).json({ message: 'Post not found' });
    if (post.author.toString() !== req.socialUser._id.toString()) return res.status(403).json({ message: 'Not allowed' });

    const { content, media } = req.body;
    if (content !== undefined) post.content = content;
    if (media !== undefined) post.media = media;
    post.updatedAt = new Date();
    await post.save();
    res.json(post);
  } catch (err) { next(err); }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await SocialPost.findById(req.params.id);
    if (!post || post.deleted) return res.status(404).json({ message: 'Post not found' });
    // allow deletion by author OR (if you want) admin check — here just author
    if (post.author.toString() !== req.socialUser._id.toString()) return res.status(403).json({ message: 'Not allowed' });

    post.deleted = true;
    await post.save();
    // optionally decrement postsCount
    await SocialUser.findByIdAndUpdate(req.socialUser._id, { $inc: { postsCount: -1 } });
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};
