import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { isCompanyEmail } from "../utils/validateCompanyEmail.js";

/* ======================
   TOKEN GENERATOR
====================== */
const generateToken = (user) =>
  jwt.sign(
    { id: user._id, email: user.email, name: user.name, isAdmin: !!user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );

/* ======================
   ADMIN CREATE USER
====================== */
export const adminCreateUser = async (req, res) => {
  try {
    if (!req.user?.isAdmin)
      return res.status(403).json({ message: "Admins only" });

    const { name, email, tempPassword } = req.body;
    const normalized = email.toLowerCase().trim();

    if (!isCompanyEmail(normalized))
      return res.status(403).json({ message: "Only @inte-qt.com allowed" });

    const exists = await User.findOne({ email: normalized });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(tempPassword, 10);

    const user = await User.create({
      name,
      email: normalized,
      password: hashed,
      isAdmin: false,
    });

    res.status(201).json({ message: "User created", userId: user._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ======================
   LOGIN
====================== */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const normalized = email.toLowerCase().trim();

    if (!isCompanyEmail(normalized))
      return res.status(403).json({ message: "Only @inte-qt.com allowed" });

    const user = await User.findOne({ email: normalized });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user);

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
    res.status(500).json({ message: err.message });
  }
};

/* ======================
   CHANGE PASSWORD
====================== */
export const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user.id);
  const ok = await bcrypt.compare(oldPassword, user.password);

  if (!ok) return res.status(400).json({ message: "Incorrect old password" });

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  res.json({ message: "Password updated" });
};

/* ======================
   BOOTSTRAP ADMIN
====================== */
export const bootstrapAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const normalized = email.toLowerCase().trim();

    if (!process.env.ADMIN_EMAILS)
      return res.status(500).json({ message: "ADMIN_EMAILS not configured" });

    if (normalized !== process.env.ADMIN_EMAILS.toLowerCase().trim())
      return res.status(403).json({ message: "Unauthorized admin email" });

    if (!isCompanyEmail(normalized))
      return res.status(403).json({ message: "Only @inte-qt.com allowed" });

    const exists = await User.findOne({ email: normalized });
    if (exists) return res.status(400).json({ message: "Admin already exists" });

    const hashed = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email: normalized,
      password: hashed,
      isAdmin: true,
    });

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/* =========================
   ADMIN: GET ALL USERS
========================= */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ isDeleted: { $ne: true } })
      .select('-password')
      .sort({ createdAt: -1 });
    
    res.json(users);
  } catch (err) {
    console.error("GET ALL USERS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

/* =========================
   ADMIN: DELETE USER
========================= */
/* =========================
   ADMIN: DELETE USER
========================= */
/* =========================
   ADMIN: DELETE USER
========================= */
export const deleteUser = async (req, res) => {
  try {
    ('Delete user called for ID:', req.params.id);
    ('Current user ID:', req.user.id);
    
    const { id } = req.params;
    
    // Don't allow deleting yourself
    if (id === req.user.id) {
      ('User tried to delete themselves');
      return res.status(400).json({ message: "You cannot delete your own account" });
    }
    
    ('Finding user:', id);
    const user = await User.findById(id);
    
    if (!user) {
      ('User not found:', id);
      return res.status(404).json({ message: "User not found" });
    }
    
    ('User found:', user.email, 'Is deleted?', user.isDeleted);
    
    // Check if already deleted
    if (user.isDeleted) {
      return res.status(400).json({ message: "User is already deleted" });
    }
    
    // Soft delete
    user.isDeleted = true;
    user.deletedAt = new Date();
    
    ('Attempting to save user...');
    
    // Try direct update as alternative
    try {
      // Option 1: Use findByIdAndUpdate instead
      // const updatedUser = await User.findByIdAndUpdate(
      //   id,
      //   { 
      //     isDeleted: true,
      //     deletedAt: new Date(),
      //     updatedAt: Date.now()
      //   },
      //   { new: true }
      // );
      
      // Option 2: Try save with error handling
      await user.save();
      ('User saved successfully');
      
    } catch (saveError) {
      console.error("SAVE USER ERROR DETAILS:", {
        message: saveError.message,
        stack: saveError.stack,
        user: user._id
      });
      
      // Try alternative approach
      try {
        ('Trying alternative update method...');
        const result = await User.updateOne(
          { _id: id },
          { 
            $set: { 
              isDeleted: true,
              deletedAt: new Date(),
              updatedAt: new Date()
            }
          }
        );
        ('Update result:', result);
        
        if (result.modifiedCount === 0) {
          throw new Error('No document was updated');
        }
        
      } catch (updateError) {
        console.error("ALTERNATIVE UPDATE ERROR:", updateError);
        return res.status(500).json({ 
          message: "Failed to delete user",
          error: "Database update failed"
        });
      }
    }
    
    ('User deletion completed for:', id);
    
    res.json({ 
      success: true,
      message: "User deleted successfully",
      userId: id
    });
    
  } catch (err) {
    console.error("DELETE USER FATAL ERROR:", {
      message: err.message,
      stack: err.stack,
      params: req.params,
      user: req.user
    });
    
    res.status(500).json({ 
      message: "Server error while deleting user",
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
  }
};

/* =========================
   ADMIN: GET DELETED USERS
========================= */
export const getDeletedUsers = async (req, res) => {
  try {
    const users = await User.find({ isDeleted: true })
      .select('-password')
      .sort({ deletedAt: -1 });
    
    res.json(users);
  } catch (err) {
    console.error("GET DELETED USERS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch deleted users" });
  }
};

/* =========================
   ADMIN: RESTORE USER
========================= */
export const restoreUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    user.isDeleted = false;
    user.deletedAt = null;
    await user.save();
    
    res.json({ 
      message: "User restored successfully",
      userId: id 
    });
  } catch (err) {
    console.error("RESTORE USER ERROR:", err);
    res.status(500).json({ message: "Failed to restore user" });
  }
};