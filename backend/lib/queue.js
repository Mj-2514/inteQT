// lib/queue.js
// Minimal queue stub. Swap for BullMQ or Rabbit later.
const pending = [];

async function enqueueNotification(jobName, payload) {
  // jobName: 'external-notify' etc.
  (`[queue] enqueue ${jobName}`, payload);
  // For now, run a microtask (non-blocking) — in production swap with Redis-backed queue
  setTimeout(() => {
    try {
      // require worker dynamically (or call handler)
      // e.g., require('../workers/externalNotifications').process(jobName, payload);
      (`[queue] (stub) processing ${jobName}`, payload);
    } catch (err) {
      console.error('[queue] worker error', err);
    }
  }, 50);
  return true;
}

module.exports = { enqueueNotification, pending };
