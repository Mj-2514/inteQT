import jwt from "jsonwebtoken";
import SocialUser from "../models/SocialUser.js";

const secret = process.env.SOCIAL_JWT_SECRET || process.env.JWT_SECRET || "dev-social-secret";

export default async function socialAuth(req, res, next) {
  try {
    const auth = req.headers.authorization || req.headers.Authorization;
    if (!auth || !auth.startsWith("Bearer ")) return res.status(401).json({ message: "Missing token" });

    const token = auth.split(" ")[1];
    const payload = jwt.verify(token, secret);

    if (!payload || !payload.id) return res.status(401).json({ message: "Invalid token" });

    const user = await SocialUser.findById(payload.id).select("-linkedinAccessToken -linkedinRefreshToken");
    if (!user) return res.status(401).json({ message: "User not found" });

    req.socialUser = user;
    next();
  } catch (err) {
    console.error("socialAuth error", err);
    res.status(401).json({ message: "Unauthorized" });
  }
}
