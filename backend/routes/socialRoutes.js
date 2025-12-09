// routes/socialRoutes.js
const express = require('express');
const router = express.Router();
const socialAuth = require('../Middleware/socialAuth');

const socialPostController = require('../controllers/socialPostController');
const socialCommentController = require('../controllers/socialCommentController');
const socialReactionController = require('../controllers/soicalReactionController');
const socialNotificationController = require('../controllers/socialNotificationController');

// Posts
router.post('/posts', socialAuth, socialPostController.createPost);
router.get('/posts', socialPostController.listPosts); // public feed
router.get('/posts/:id', socialPostController.getPost);
router.put('/posts/:id', socialAuth, socialPostController.updatePost);
router.delete('/posts/:id', socialAuth, socialPostController.deletePost);

// Comments
router.post('/posts/:postId/comments', socialAuth, socialCommentController.addComment);
router.get('/posts/:postId/comments', socialCommentController.listComments);
router.delete('/comments/:id', socialAuth, socialCommentController.deleteComment);

// Reactions (targetType 'post' or 'comment')
router.post('/:targetType/:id/reaction', socialAuth, socialReactionController.toggleReaction);
router.get('/:targetType/:id/reactions', socialReactionController.listReactions);

// Notifications
router.get('/notifications', socialAuth, socialNotificationController.listNotifications);
router.post('/notifications/:id/read', socialAuth, socialNotificationController.markRead); // id='all' for bulk

module.exports = router;
