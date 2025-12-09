const Queue = require('bullmq'); // example
const User = require('../models/SocialUser');

async function processNotify(job) {
  const { userId, type, actorId, postId } = job.data;
  const recipient = await User.findById(userId);
  if (!recipient) return;

  // 1) send push/email via OneSignal/SendGrid etc.
  await sendEmailOrPush(recipient, { type, actorId, postId });

  // 2) if recipient allows LinkedIn and we have token, attempt a LinkedIn call
  if (recipient.allowLinkedinNotifications && recipient.linkedinAccessToken) {
    try {
      // Example: create a personal LinkedIn post for the recipient (requires w_member_social & app approval)
      await linkedinPostAsUser(recipient.linkedinAccessToken, {
        text: `You were mentioned in a post — view: ${FRONTEND_URL}/community/posts/${postId}`
      });
    } catch (err) {
      console.error('LinkedIn notify failed for user', userId, err.message);
    }
  }
}
