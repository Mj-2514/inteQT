const Post = require('../models/Post');
const Notification = require('../models/Notification');
const queue = require('../lib/queue'); // e.g. BullMQ

exports.createPost = async (req, res, next) => {
  try {
    const { content, media = [], mentions = [] } = req.body;
    if (!content || !content.trim()) return res.status(400).json({ message: 'Content required' });

    const post = await Post.create({
      author: req.user._id,
      content: content.trim(),
      media,
    });

    // create notifications for mentioned users
    if (Array.isArray(mentions) && mentions.length) {
      for (const mentionedUserId of mentions) {
        await Notification.create({
          user: mentionedUserId,
          actor: req.user._id,
          type: 'mention',
          data: { postId: post._id, snippet: content.slice(0, 120) }
        });

        // enqueue external notification job (email/push/linkedin) for mentioned user
        await queue.add('external-notify', {
          userId: mentionedUserId,
          type: 'mention',
          actorId: req.user._id,
          postId: post._id,
        });
      }
    }

    // broadcast via socket (pseudo)
    req.app.get('io')?.to(`user:${req.user._id}`).emit('post:created', { postId: post._id });

    res.status(201).json(post);
  } catch (err) { next(err); }
};
