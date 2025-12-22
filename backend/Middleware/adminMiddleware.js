// middleware/adminMiddleware.js
export default function admin(req, res, next){
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(403).json({ message: 'Admin privileges required' });
};
