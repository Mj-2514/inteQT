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
/* =========================
   LOGIN
========================= */
export const loginCountryUser = async (req, res) => {
  try {
    ('🔐 Backend login attempt:', req.body.email);
    
    const { email, password } = req.body;

    ('📧 Email validation:', validateCompanyEmail(email));
    
    const user = await CountryUser.findOne({ email, isActive: true }).select("+password");
    ('👤 User found:', user ? 'YES' : 'NO');
    
    if (!user) {
      ('❌ No user found or inactive');
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    ('🔑 Password match:', match);
    
    if (!match) {
      ('❌ Password mismatch');
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = signToken(user._id);
    ('✅ Token generated');

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isAdmin: user.role === 'admin',
        isActive: user.isActive,
      },
    });
  } catch (err) {
    console.error('💥 Server error:', err);
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   ADMIN CREATES USER
========================= */
// Update the createNewUser function in CountryAdminDashboard.tsx:

export const createNewUser = async (req, res) => {
  try {
    // only admins
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { name, email, password, role = "user" } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!email.endsWith("@inte-qt.com")) {
      return res.status(400).json({ message: "Only @inte-qt.com emails allowed" });
    }

    const existing = await CountryUser.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await CountryUser.create({
      name,
      email,
      password: hashedPassword,
      role,
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
      },
    });
  } catch (err) {
    console.error("Create user error:", err);
    res.status(500).json({ message: "Failed to create user" });
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


/* =========================
   ADMIN: GET ALL USERS
========================= */
export const getAllUsers = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { role, active, page = 1, limit = 10 } = req.query;

    const filter = {
      $or: [
        { deletedAt: null },
        { deletedAt: { $exists: false } },
      ],
    };

    if (role && role !== "all") {
      filter.role = role;
    }

    if (active !== undefined) {
      filter.isActive = active === "true";
    }

    const skip = (Number(page) - 1) * Number(limit);

    const [users, total] = await Promise.all([
      CountryUser.find(filter)
        .populate("createdBy", "name email")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit))
        .select("-password -__v"),
      CountryUser.countDocuments(filter),
    ]);

    res.status(200).json({
      users,
      total,
      pages: Math.ceil(total / Number(limit)),
      currentPage: Number(page),
    });
  } catch (err) {
    console.error("GET ALL USERS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};


/* =========================
   ADMIN: DELETE USER (SOFT DELETE)
========================= */
export const deleteUser = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { id } = req.params;

    // Extra safety check - prevent deleting yourself
    if (id === req.user._id.toString()) {
      return res.status(400).json({ message: "Cannot permanently delete your own account" });
    }

    const user = await CountryUser.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Also delete all submissions by this user
    await Country.deleteMany({ createdBy: id });

    res.json({ 
      message: "User permanently deleted along with their submissions",
      deletedUser: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   ADMIN: TOGGLE USER ACTIVE STATUS
========================= */
export const toggleUserStatus = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { id } = req.params;

    const user = await CountryUser.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Prevent admin from deactivating themselves
    if (id === req.user._id.toString()) {
      return res.status(400).json({ message: "Cannot change your own status" });
    }

    user.isActive = !user.isActive;
    await user.save();

    res.json({ 
      message: `User ${user.isActive ? 'activated' : 'deactivated'} successfully`,
      isActive: user.isActive 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};