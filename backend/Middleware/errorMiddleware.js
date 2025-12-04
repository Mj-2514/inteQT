// middleware/errorMiddleware.js
module.exports = (err, req, res, next) => {
  console.error('ERROR:', err);

  const status = err.statusCode || 500;
  const message = err.message || 'Server Error';

  res.status(status).json({ message });
};
