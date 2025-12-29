import jwt from "jsonwebtoken";
import EventUser from "../models/EventUser.js";
import bcrypt from "bcryptjs";


const signToken = (id, isAdmin) =>
  jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, { expiresIn: "7d" });

/**
 * LOGIN (User + Admin)
 * POST /api/event-auth/login
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // Explicitly select password because select: false in schema
    const user = await EventUser.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Optional: update last login time
    user.lastLogin = new Date();
    await user.save();

    const token = signToken(user._id, user.isAdmin);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * REGISTER USER (ADMIN ONLY)
 * POST /api/auth/register
 */
export const registerUserByAdmin = async (req, res) => {
  const { name, email, password, isAdmin = false } = req.body;

  if (!email.endsWith("@inte-qt.com")) {
    return res.status(400).json({
      message: "Only @inte-qt.com emails are allowed"
    });
  }

  const exists = await EventUser.findOne({ email });
  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await EventUser.create({
    name,
    email,
    password,
    isAdmin
  });

  res.status(201).json({
    message: "User created successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    }
  });
};
