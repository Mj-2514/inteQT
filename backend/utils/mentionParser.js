// utils/mentionParser.js
// extract tokens of the form @username from text
function extractMentions(text = "") {
  if (!text) return [];
  const regex = /@([a-zA-Z0-9_.-]{3,40})/g;
  const mentions = new Set();
  let m;
  while ((m = regex.exec(text))) {
    mentions.add(m[1]);
  }
  return Array.from(mentions);
}

module.exports = { extractMentions };
