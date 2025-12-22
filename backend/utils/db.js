// utils/db.js
import mongoose from "mongoose";

const connectDB = async (mongoUri) => {
  if (!mongoUri) {
    console.error("MONGO_URI not provided. Set MONGO_URI in your .env");
    process.exit(1);
  }

  try {
    // For Mongoose v7+, no need to pass useNewUrlParser/useUnifiedTopology options
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
