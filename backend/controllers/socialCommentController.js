// controllers/socialCommentController.js
const SocialComment = require('../models/Comment');
const SocialPost = require('../models/Post');
const SocialUser = require('../models/SocialUser');
const SocialNotification = require('../models/Notification');
const { enqueueNotification } = require('../lib/queue');

exports.addComment = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const { content, parentCommentId } = req.body;
    if (!content || !content.trim()) return res.status(400).json({ message: 'Content required' });

    const post = await SocialPost.findById(postId);
    if (!post || post.deleted) return res.status(404).json({ message: 'Post not found' });

    const comment = await SocialComment.create({
      post: post._id,
      parentComment: parentCommentId || null,
      author: req.socialUser._id,
      content: content.trim(),
    });

    // increment counts
    await SocialUser.findByIdAndUpdate(req.socialUser._id, { $inc: { commentsCount: 1 } });

    // notify post author (if not self)
    if (post.author.toString() !== req.socialUser._id.toString()) {
      await SocialNotification.create({
        user: post.author,
        actor: req.socialUser._id,
        type: 'comment',
        data: { postId: post._id, commentId: comment._id, snippet: content.slice(0, 200) },
      });
      enqueueNotification('external-notify', { userId: post.author.toString(), type: 'comment', actorId: req.socialUser._id.toString(), postId: post._id.toString(), commentId: comment._id.toString() });
    }

    // notify parent comment author if it's a reply (and not self)
    if (parentCommentId) {
      const parent = await SocialComment.findById(parentCommentId);
      if (parent && parent.author.toString() !== req.socialUser._id.toString()) {
        await SocialNotification.create({
          user: parent.author,
          actor: req.socialUser._id,
          type: 'reply',
          data: { postId: post._id, commentId: comment._id, parentCommentId: parent._id, snippet: content.slice(0, 200) },
        });
        enqueueNotification('external-notify', { userId: parent.author.toString(), type: 'reply', actorId: req.socialUser._id.toString(), postId: post._id.toString(), commentId: comment._id.toString() });
      }
    }

    res.status(201).json(comment);
  } catch (err) { next(err); }
};

exports.listComments = async (req, res, next) => {
  try {
    const { postId } = req.params;
    // fetch threaded comments for post (flat list — frontend can nest)
    const comments = await SocialComment.find({ post: postId, deleted: false })
      .sort({ createdAt: 1 })
      .populate('author', 'name username avatar')
      .lean();

    res.json(comments);
  } catch (err) { next(err); }
};

exports.deleteComment = async (req, res, next) => {
  try {
    const comment = await SocialComment.findById(req.params.id);
    if (!comment || comment.deleted) return res.status(404).json({ message: 'Comment not found' });
    if (comment.author.toString() !== req.socialUser._id.toString()) return res.status(403).json({ message: 'Not allowed' });

    comment.deleted = true;
    await comment.save();
    await SocialUser.findByIdAndUpdate(req.socialUser._id, { $inc: { commentsCount: -1 } });
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};
