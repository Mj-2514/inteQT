import jwt from "jsonwebtoken";
import User from "../models/user.js";

export default async function auth(req, res, next) {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(401).json({ message: "User not found" });

    const admins = (process.env.ADMIN_EMAILS || "")
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);

    if (admins.includes(user.email.toLowerCase())) user.isAdmin = true;

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token invalid or expired" });
  }
}
