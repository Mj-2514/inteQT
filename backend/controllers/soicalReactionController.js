// controllers/socialReactionController.js
const SocialReaction = require('../models/Reaction');
const SocialPost = require('../models/Post');
const SocialComment = require('../models/Comment');
const SocialUser = require('../models/SocialUser');
const SocialNotification = require('../models/Notification');
const { enqueueNotification } = require('../lib/queue');
const mongoose = require('mongoose');

async function incReactionCountForPost(postId, reactionType, delta) {
  // Use $inc to update map field: reactionCounts.<reactionType>
  const key = `reactionCounts.${reactionType}`;
  await SocialPost.updateOne({ _id: postId }, { $inc: { [key]: delta } });
}

exports.toggleReaction = async (req, res, next) => {
  try {
    const { targetType, id } = req.params; // targetType = 'post' or 'comment'
    const { type } = req.body; // reaction type e.g. 'like'
    if (!type) return res.status(400).json({ message: 'Reaction type required' });

    const TargetModel = targetType === 'post' ? SocialPost : SocialComment;
    const target = await TargetModel.findById(id);
    if (!target) return res.status(404).json({ message: 'Target not found' });

    // Try to create reaction — unique index prevents duplicates
    const filter = { targetType: targetType === 'post' ? 'Post' : 'Comment', targetId: id, user: req.socialUser._id };

    const existing = await SocialReaction.findOne(filter);
    if (!existing) {
      // create new
      const reaction = await SocialReaction.create({ ...filter, type });
      // update counts
      if (targetType === 'post') await incReactionCountForPost(id, type, 1);
      await SocialUser.findByIdAndUpdate(req.socialUser._id, { $inc: { reactionsCount: 1 } });

      // notify owner (unless reacting to your own)
      const ownerId = targetType === 'post' ? target.author : target.author;
      if (ownerId.toString() !== req.socialUser._id.toString()) {
        await SocialNotification.create({
          user: ownerId,
          actor: req.socialUser._id,
          type: 'reaction',
          data: { targetType: filter.targetType, targetId: id, reactionType: type }
        });
        enqueueNotification('external-notify', { userId: ownerId.toString(), type: 'reaction', actorId: req.socialUser._id.toString(), targetType: filter.targetType, targetId: id.toString(), reactionType: type });
      }

      return res.json({ action: 'added', reaction });
    } else {
      // if same type => remove (toggle off). if different type => change
      if (existing.type === type) {
        // remove
        await SocialReaction.deleteOne({ _id: existing._id });
        if (targetType === 'post') await incReactionCountForPost(id, type, -1);
        await SocialUser.findByIdAndUpdate(req.socialUser._id, { $inc: { reactionsCount: -1 } });
        return res.json({ action: 'removed' });
      } else {
        // change type
        const oldType = existing.type;
        existing.type = type;
        await existing.save();
        if (targetType === 'post') {
          await incReactionCountForPost(id, oldType, -1);
          await incReactionCountForPost(id, type, 1);
        }
        return res.json({ action: 'changed', from: oldType, to: type });
      }
    }
  } catch (err) { next(err); }
};

exports.listReactions = async (req, res, next) => {
  try {
    const { targetType, id } = req.params;
    const reactions = await SocialReaction.find({ targetType: targetType === 'post' ? 'Post' : 'Comment', targetId: id })
      .populate('user', 'name username avatar')
      .lean();
    res.json(reactions);
  } catch (err) { next(err); }
};
