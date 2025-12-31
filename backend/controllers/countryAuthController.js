import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import CountryUser from "../models/CountryUser.js";
import dotenv from "dotenv";
dotenv.config();

/* =========================
   HELPERS
========================= */
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

const validateCompanyEmail = (email) => {
  return email.endsWith("@inte-qt.com");
};
const getAdminEmails = () => {
  if (!process.env.ADMIN_EMAILS) return [];
  return process.env.ADMIN_EMAILS
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
};


/* =========================
   BOOTSTRAP ADMIN REGISTER
   (only if no admin exists)
========================= */
export const registerFirstAdmin = async (req, res) => {
  try {
    const adminExists = await CountryUser.findOne({ role: "admin" });
    if (adminExists)
      return res.status(403).json({ message: "Admin already exists" });

    const { name, email, password } = req.body;

    if (!validateCompanyEmail(email))
      return res.status(400).json({ message: "Only @inte-qt.com emails allowed" });

    const allowedAdmins = getAdminEmails();

    if (!allowedAdmins.includes(email.toLowerCase())) {
      return res.status(403).json({ message: "You are not authorized to become admin" });
    }

    const hashed = await bcrypt.hash(password, 10);

    await CountryUser.create({
      name,
      email,
      password: hashed,
      role: "admin",
    });

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createAdminByAdmin = async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "Admin only" });

    const { name, email, password } = req.body;

    if (!validateCompanyEmail(email))
      return res.status(400).json({ message: "Only @inte-qt.com emails allowed" });

    if (!getAdminEmails().includes(email.toLowerCase()))
      return res.status(403).json({ message: "Email not allowed to be admin" });

    const exists = await CountryUser.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);

    await CountryUser.create({
      name,
      email,
      password: hashed,
      role: "admin",
      createdBy: req.user._id,
    });

    res.status(201).json({ message: "Admin created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



/* =========================
   LOGIN
========================= */
export const loginCountryUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!validateCompanyEmail(email))
      return res.status(401).json({ message: "Unauthorized domain" });

    const user = await CountryUser.findOne({ email, isActive: true }).select("+password");
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const token = signToken(user._id);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   ADMIN CREATES USER
========================= */
export const createUserByAdmin = async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "Admin only" });

    const { name, email, password, role } = req.body;

    if (!validateCompanyEmail(email))
      return res.status(400).json({ message: "Only @inte-qt.com emails allowed" });

    const exists = await CountryUser.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const user = await CountryUser.create({
      name,
      email,
      password: hashed,
      role: role || "user",
      createdBy: req.user._id,
    });

    res.status(201).json({ message: "User created", id: user._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   CHANGE PASSWORD (ADMIN + USER)
========================= */
export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const user = await CountryUser.findById(req.user._id).select("+password");

    const match = await bcrypt.compare(oldPassword, user.password);
    if (!match) return res.status(400).json({ message: "Old password incorrect" });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
