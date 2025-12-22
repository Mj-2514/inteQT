import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import EventUser from "../models/EventUser.js";

dotenv.config();

/* ============================
   HELPER: SIGN JWT
============================ */
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

/* ============================
   HELPER: GET ADMIN EMAILS
   (HARDENED & BULLETPROOF)
============================ */
const getAdminEmails = () => {
  return (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((e) => e.replace(/\s+/g, "").toLowerCase())
    .filter(Boolean);
};

/* ============================
   REGISTER EVENT USER
============================ */
export const registerEventUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password required" });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // domain lock
    if (!normalizedEmail.endsWith("@inte-qt.com")) {
      return res
        .status(403)
        .json({ message: "Your email is not allowed" });
    }

    // check existing user
    const exists = await EventUser.findOne({ email: normalizedEmail });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // compute admin ONCE
    const adminEmails = getAdminEmails();
    const isAdmin = adminEmails.includes(normalizedEmail);

    // create user
    const user = await EventUser.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
      isAdmin,
    });

    const token = signToken(user._id);

    return res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (err) {
    console.error("Event register error:", err);
    return res.status(500).json({ message: "Registration failed" });
  }
};

/* ============================
   LOGIN EVENT USER
============================ */
export const loginEventUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const normalizedEmail = email?.toLowerCase().trim();

    const user = await EventUser.findOne({
      email: normalizedEmail,
    }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    user.lastLogin = new Date();
    await user.save();

    const token = signToken(user._id);

    return res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (err) {
    console.error("Event login error:", err);
    return res.status(500).json({ message: "Login failed" });
  }
};
