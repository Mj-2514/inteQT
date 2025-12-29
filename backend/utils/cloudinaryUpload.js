import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import dotenv from "dotenv";
dotenv.config();
// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

/**
 * Upload buffer to Cloudinary
 * @param {Buffer} buffer - File buffer to upload
 * @param {string} folder - Cloudinary folder name
 * @returns {Promise<Object>} Cloudinary upload result
 */
export const uploadToCloudinary = (buffer, folder = 'events') => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: 'auto', // Automatically detect image/video
        allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'mov', 'avi', 'webm'],
        transformation: [
          { quality: 'auto:good' },
          { fetch_format: 'auto' }
        ]
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          reject(new Error('Failed to upload to Cloudinary'));
        } else {
          resolve(result);
        }
      }
    );
    
    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
};

/**
 * Delete file from Cloudinary
 * @param {string} publicId - Cloudinary public ID
 * @returns {Promise<Object>} Cloudinary deletion result
 */
export const deleteFromCloudinary = (publicId) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(publicId, (error, result) => {
      if (error) {
        console.error('Cloudinary delete error:', error);
        reject(new Error('Failed to delete from Cloudinary'));
      } else {
        resolve(result);
      }
    });
  });
};

/**
 * Extract public ID from Cloudinary URL
 * @param {string} url - Cloudinary URL
 * @returns {string} Public ID
 */
export const extractPublicId = (url) => {
  if (!url) return null;
  
  try {
    // Extract public ID from Cloudinary URL
    const urlParts = url.split('/');
    const uploadIndex = urlParts.indexOf('upload');
    
    if (uploadIndex !== -1) {
      // Get everything after 'upload/' but before the file extension
      const afterUpload = urlParts.slice(uploadIndex + 1).join('/');
      // Remove version if present (v1234567890/)
      const withoutVersion = afterUpload.replace(/^v\d+\//, '');
      // Remove file extension
      return withoutVersion.replace(/\.[^/.]+$/, '');
    }
    
    return null;
  } catch (error) {
    console.error('Error extracting public ID:', error);
    return null;
  }
};

/**
 * Check if URL is from Cloudinary
 * @param {string} url - URL to check
 * @returns {boolean} True if Cloudinary URL
 */
export const isCloudinaryUrl = (url) => {
  if (!url) return false;
  return url.includes('res.cloudinary.com');
};

/**
 * Upload event media with validation
 * @param {Buffer} buffer - File buffer
 * @param {string} originalName - Original filename
 * @param {string} mimetype - File MIME type
 * @param {string} folder - Cloudinary folder
 * @returns {Promise<Object>} Upload result with URL and media type
 */
export const uploadEventMedia = async (buffer, originalName, mimetype, folder = 'events') => {
  try {
    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (buffer.length > maxSize) {
      throw new Error('File size exceeds 10MB limit');
    }

    // Validate MIME type
    const allowedTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'video/mp4',
      'video/quicktime',
      'video/x-msvideo',
      'video/webm'
    ];
    
    if (!allowedTypes.includes(mimetype)) {
      throw new Error('Invalid file type. Allowed: JPG, PNG, GIF, MP4, MOV, AVI, WEBM');
    }

    // Upload to Cloudinary
    const result = await uploadToCloudinary(buffer, folder);
    
    // Determine media type
    let mediaType = 'none';
    if (result.resource_type === 'image') {
      if (mimetype === 'image/gif') {
        mediaType = 'gif';
      } else {
        mediaType = 'image';
      }
    } else if (result.resource_type === 'video') {
      mediaType = 'video';
    }

    return {
      url: result.secure_url,
      publicId: result.public_id,
      mediaType,
      format: result.format,
      width: result.width,
      height: result.height,
      duration: result.duration,
      size: result.bytes
    };
  } catch (error) {
    console.error('Event media upload error:', error);
    throw error;
  }
};

/**
 * Delete event media from Cloudinary
 * @param {string} mediaUrl - Media URL
 * @returns {Promise<boolean>} True if deleted successfully
 */
export const deleteEventMedia = async (mediaUrl) => {
  try {
    if (!mediaUrl || !isCloudinaryUrl(mediaUrl)) {
      return false;
    }

    const publicId = extractPublicId(mediaUrl);
    if (!publicId) {
      return false;
    }

    const result = await deleteFromCloudinary(publicId);
    return result.result === 'ok';
  } catch (error) {
    console.error('Error deleting event media:', error);
    return false;
  }
};

/**
 * Generate Cloudinary URL with transformations
 * @param {string} publicId - Cloudinary public ID
 * @param {Object} options - Transformation options
 * @returns {string} Transformed URL
 */
export const getTransformedUrl = (publicId, options = {}) => {
  if (!publicId) return null;

  const {
    width = null,
    height = null,
    crop = 'fill',
    gravity = 'auto',
    quality = 'auto:good',
    format = 'auto'
  } = options;

  const transformations = [];

  if (width || height) {
    transformations.push(`c_${crop}`);
    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    transformations.push(`g_${gravity}`);
  }

  transformations.push(`q_${quality}`);
  transformations.push(`f_${format}`);

  const transformationString = transformations.join(',');
  
  return cloudinary.url(publicId, {
    transformation: [
      {
        ...(transformationString && { raw_transformation: transformationString })
      }
    ],
    secure: true
  });
};

export default cloudinary;