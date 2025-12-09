// controllers/socialNotificationController.js
const SocialNotification = require('../models/Notification');

exports.listNotifications = async (req, res, next) => {
  try {
    const page = Math.max(1, Number(req.query.page || 1));
    const limit = Math.min(50, Number(req.query.limit || 20));
    const skip = (page - 1) * limit;

    const items = await SocialNotification.find({ user: req.socialUser._id })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('actor', 'name username avatar')
      .lean();

    const unreadCount = await SocialNotification.countDocuments({ user: req.socialUser._id, read: false });

    res.json({ page, limit, unreadCount, items });
  } catch (err) { next(err); }
};

exports.markRead = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id === 'all') {
      await SocialNotification.updateMany({ user: req.socialUser._id, read: false }, { $set: { read: true } });
      return res.json({ message: 'All marked read' });
    } else {
      await SocialNotification.updateOne({ _id: id, user: req.socialUser._id }, { $set: { read: true } });
      return res.json({ message: 'Marked read' });
    }
  } catch (err) { next(err); }
};
