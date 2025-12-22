import jwt from "jsonwebtoken";
import EventUser from "../models/EventUser.js";

export const authEvent = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await EventUser.findById(decoded.id).select("_id name email");
    if (!user) return res.status(401).json({ message: "User not found" });

    const adminEmails = (process.env.ADMIN_EMAILS || "")
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean);

    req.user = {
      _id: user._id,
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: adminEmails.includes(user.email.toLowerCase()),
    };

    next();
  } catch (err) {
    console.error("authEvent error:", err.message);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
