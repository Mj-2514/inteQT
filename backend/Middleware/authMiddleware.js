// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    if (!token) return res.status(401).json({ message: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // load user from DB to get authoritative isAdmin and latest data
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(401).json({ message: 'User not found' });

    // ensure isAdmin also honored from ADMIN_EMAILS in case you changed env
    const admins = (process.env.ADMIN_EMAILS || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
    if (admins.includes(user.email.toLowerCase())) user.isAdmin = true;

    req.user = user; // full user object without password
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token invalid or expired' });
  }
};



