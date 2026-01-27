// controllers/uploadController.js
import cloudinary from "../config/Cloudinary.js";
import streamifier from "streamifier";

export const uploadImage = async (req, res) => {
  try {
    console.log("=== IMAGE UPLOAD REQUEST ===");
    
    if (!req.file) {
      return res.status(400).json({ 
        success: false,
        message: "No image file provided" 
      });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/jpg'];
    if (!allowedTypes.includes(req.file.mimetype)) {
      return res.status(400).json({
        success: false,
        message: "Only JPEG, PNG, GIF, and WEBP images are allowed"
      });
    }

    // Validate file size (10MB max for Cloudinary free)
    const maxSize = 10 * 1024 * 1024;
    if (req.file.size > maxSize) {
      return res.status(413).json({
        success: false,
        message: "Image size exceeds 10MB limit"
      });
    }

    console.log("Uploading to Cloudinary:", {
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
    });

    // Upload to Cloudinary using stream
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "country-submarine-cables",
          resource_type: "auto",
          quality: "auto:best",
          fetch_format: "auto",
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      // Pipe buffer to Cloudinary
      streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
    });

    console.log("Cloudinary upload successful:", {
      url: uploadResult.secure_url,
      size: uploadResult.bytes
    });

    res.json({
      success: true,
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
      format: uploadResult.format,
      bytes: uploadResult.bytes
    });

  } catch (err) {
    console.error("Upload error:", err);
    
    let errorMessage = "Image upload failed";
    if (err.message.includes("File size too large")) {
      errorMessage = "File too large for Cloudinary";
    } else if (err.message.includes("Invalid image")) {
      errorMessage = "Invalid image file";
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};