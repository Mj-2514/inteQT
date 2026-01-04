import jwt from "jsonwebtoken";
import CountryUser from "../models/CountryUser.js";
export const protectCountry = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.split(" ")[1]
      : null;

    if (!token) return res.status(401).json({ message: "No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await CountryUser.findById(decoded.id).select("-password");

    if (!req.user || !req.user.isActive)
      return res.status(401).json({ message: "Account disabled" });

    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
