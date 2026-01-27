// controllers/countryController.js
import mongoose from "mongoose";
import Country from "../models/Country.js";
import CountryUser from "../models/CountryUser.js";
import cloudinary from '../config/Cloudinary.js';

/* =========================
   USER: CREATE/UPDATE COUNTRY FORM
========================= */

export const createOrUpdateCountry = async (req, res) => {
  try {
    const {
      name,
      Countryname,
      slug,
      partnersRange,
      Ipv4PeersRange,
      Ipv6PeersRange,
      IxpPartnersRange,
      Ipv4GatewaysRange,
      Ipv6GatewaysRange,
      CloudPartnersRange,
      ddosProtection,
      minServiceLatencyRange,
      avgServiceLatencyRange,
      features,
      ourServices,
      commercialOfferDateRange,
      deliveryDateRange,
      integrationNote,
      whyChooseUs,
      capabilities,
      submarineCableImage,
      submarineCableLink,
      references,
    } = req.body;

    console.log('=== CREATE/UPDATE COUNTRY REQUEST ===');
    console.log('Form Data Received:', {
      name,
      Countryname,
      slug,
      submarineCableImage: submarineCableImage ? "Image present" : "No image",
      referencesCount: references ? (Array.isArray(references) ? references.length : 1) : 0
    });

    // Use whichever is provided
    const countryName = Countryname || name;
    
    // Validate required fields
    if (!countryName || !countryName.trim()) {
      return res.status(400).json({ 
        success: false,
        message: "Country name is required" 
      });
    }
    
    if (!slug || !slug.trim()) {
      return res.status(400).json({ 
        success: false,
        message: "Slug is required" 
      });
    }

    // Check slug format
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      return res.status(400).json({ 
        success: false,
        message: "Slug must be lowercase with hyphens only (e.g., 'united-states')" 
      });
    }

    // Check if slug exists
    const existingCountry = await Country.findOne({ slug });
    
    // Check if user owns this country
    let isEditingOwnSubmission = false;
    if (existingCountry) {
      isEditingOwnSubmission = existingCountry.createdBy.toString() === req.user._id.toString();
    }

    // If slug exists but user doesn't own it, block
    if (existingCountry && !isEditingOwnSubmission) {
      return res.status(400).json({ 
        success: false,
        message: "Slug already exists. Please choose a different slug." 
      });
    }

    // Prepare references array
    let referencesArray = [];
    if (references) {
      if (Array.isArray(references)) {
        // Filter out empty strings and validate URLs
        referencesArray = references.filter(ref => ref && ref.trim() !== '');
        
        // Validate URLs
        const urlPattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
        const invalidUrls = referencesArray.filter(url => !urlPattern.test(url));
        
        if (invalidUrls.length > 0) {
          return res.status(400).json({ 
            success: false,
            message: `Invalid URLs found: ${invalidUrls.join(', ')}` 
          });
        }
      } else if (typeof references === 'string' && references.trim() !== '') {
        // Handle comma-separated string
        referencesArray = references.split(',')
          .map(ref => ref.trim())
          .filter(ref => ref !== '');
        
        // Validate URLs
        const urlPattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
        const invalidUrls = referencesArray.filter(url => !urlPattern.test(url));
        
        if (invalidUrls.length > 0) {
          return res.status(400).json({ 
            success: false,
            message: `Invalid URLs found: ${invalidUrls.join(', ')}` 
          });
        }
      }
    }

    // Check if submarineCableImage is a Cloudinary URL
    const isCloudinaryUrl = submarineCableImage && 
                           (submarineCableImage.includes('cloudinary.com') || 
                            submarineCableImage.includes('res.cloudinary.com'));

    // Helper function to extract public_id from Cloudinary URL
    const extractCloudinaryPublicId = (url) => {
      if (!url || !url.includes('cloudinary.com')) return null;
      
      try {
        // Example: https://res.cloudinary.com/demo/image/upload/v1234567/folder/image.jpg
        const urlParts = url.split('/');
        const uploadIndex = urlParts.indexOf('upload');
        
        if (uploadIndex > -1) {
          // Skip version if present (starts with 'v')
          const startIndex = urlParts[uploadIndex + 1].startsWith('v') ? 
                            uploadIndex + 2 : uploadIndex + 1;
          
          // Get everything after upload
          const pathParts = urlParts.slice(startIndex);
          const fullPath = pathParts.join('/');
          
          // Remove file extension
          return fullPath.replace(/\.[^/.]+$/, "");
        }
      } catch (error) {
        console.error('Error extracting Cloudinary public_id:', error);
      }
      return null;
    };

    // Prepare data object
    const countryData = {
      Countryname: countryName.trim(),
      slug: slug.trim(),
      partnersRange: partnersRange?.trim() || "",
      Ipv4PeersRange: Ipv4PeersRange?.trim() || "",
      Ipv6PeersRange: Ipv6PeersRange?.trim() || "",
      IxpPartnersRange: IxpPartnersRange?.trim() || "",
      Ipv4GatewaysRange: Ipv4GatewaysRange?.trim() || "",
      Ipv6GatewaysRange: Ipv6GatewaysRange?.trim() || "",
      CloudPartnersRange: CloudPartnersRange?.trim() || "",
      ddosProtection: ddosProtection || false,
      minServiceLatencyRange: minServiceLatencyRange?.trim() || "",
      avgServiceLatencyRange: avgServiceLatencyRange?.trim() || "",
      features: features?.trim() || "",
      ourServices: ourServices?.trim() || "",
      commercialOfferDateRange: commercialOfferDateRange?.trim() || "",
      deliveryDateRange: deliveryDateRange?.trim() || "",
      integrationNote: integrationNote?.trim() || "",
      whyChooseUs: whyChooseUs?.trim() || "",
      capabilities: capabilities?.trim() || "",
      submarineCableImage: submarineCableImage?.trim() || "",
      submarineCableLink: submarineCableLink?.trim() || "",
      references: referencesArray,
    };

    console.log('Prepared country data:', {
      ...countryData,
      submarineCableImage: isCloudinaryUrl ? "Cloudinary URL" : 
                          countryData.submarineCableImage ? "External URL" : "No image",
      referencesCount: referencesArray.length
    });

    // If updating existing submission
    if (existingCountry && isEditingOwnSubmission) {
      const oldImage = existingCountry.submarineCableImage;
      const newImage = countryData.submarineCableImage;
      
      // Handle Cloudinary image deletion when image changes
      if (oldImage && oldImage !== newImage && oldImage.includes('cloudinary.com')) {
        try {
          const publicId = extractCloudinaryPublicId(oldImage);
          if (publicId) {
            console.log('Deleting old Cloudinary image:', publicId);
            const result = await cloudinary.uploader.destroy(publicId);
            console.log('Cloudinary deletion result:', result);
          }
        } catch (cloudinaryErr) {
          console.error('Error deleting old Cloudinary image:', cloudinaryErr);
          // Don't fail the whole request if image deletion fails
        }
      }

      // Update all fields
      Object.assign(existingCountry, countryData);
      existingCountry.status = "pending"; // Reset status when updated
      existingCountry.rejectionNote = ""; // Clear rejection note
      existingCountry.updatedAt = Date.now();
      
      await existingCountry.save();
      
      console.log('Country updated successfully:', existingCountry._id);
      
      return res.json({ 
        success: true,
        message: "Country form updated and submitted for review", 
        country: existingCountry,
        isUpdate: true 
      });
    }

    // Create new submission
    const country = await Country.create({
      ...countryData,
      status: "pending",
      createdBy: req.user._id,
    });

    console.log('New country created successfully:', country._id);

    res.status(201).json({ 
      success: true,
      message: "Country form created and submitted for review", 
      country,
      isUpdate: false 
    });
  } catch (err) {
    console.error("Error in createOrUpdateCountry:", err);
    
    // Handle duplicate key error specifically
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern)[0];
      if (field === 'slug') {
        return res.status(400).json({ 
          success: false,
          message: "Slug already exists. Please choose a different one." 
        });
      }
      return res.status(400).json({ 
        success: false,
        message: "Duplicate entry found" 
      });
    }
    
    // Handle validation errors
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ 
        success: false,
        message: "Validation failed",
        errors: messages 
      });
    }
    
    res.status(500).json({ 
      success: false,
      message: "Server error. Please try again later.",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

export const saveDraft = async (req, res) => {
  try {
    const { ...formData } = req.body;
    
    // Check if slug already exists
    const existing = await Country.findOne({ slug: formData.slug });
    
    if (existing && existing.createdBy.toString() !== req.user._id.toString()) {
      return res.status(400).json({ message: "Slug already exists" });
    }

    // If updating existing draft
    if (existing) {
      Object.assign(existing, {
        ...formData,
        status: "draft"
      });
      await existing.save();
      return res.json({ message: "Draft updated", country: existing });
    }

    // Create new draft
    const country = await Country.create({
      ...formData,
      status: "draft",
      createdBy: req.user._id,
    });

    res.status(201).json({ message: "Draft saved", country });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/* =========================
   USER: GET MY SUBMISSIONS
========================= */
/* =========================
   USER: GET MY SUBMISSIONS (Enhanced)
   Now supports optional status filtering
========================= */
export const getMySubmissions = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    
    // Build filter
    const filter = { createdBy: req.user._id };
    if (status && status !== "all") {
      filter.status = status;
    }
    
    const skip = (page - 1) * limit;
    
    const [submissions, total] = await Promise.all([
      Country.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .select("-__v"),
      Country.countDocuments(filter),
    ]);

    res.json({
      submissions,
      total,
      pages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      limit: parseInt(limit),
      filter: status || "all"
    });
  } catch (err) {
    console.error("Error in getMySubmissions:", err);
    res.status(500).json({ message: err.message });
  }
};


/* =========================
   USER: GET MY SUBMISSIONS SUMMARY
   Returns all submissions grouped by status with details
========================= */
export const getMySubmissionsSummary = async (req, res) => {
  try {
    // Get all submissions for the user
    const allSubmissions = await Country.find({ createdBy: req.user._id })
      .sort({ createdAt: -1 })
      .select("-__v");
    
    // Group by status
    const grouped = {
      pending: [],
      approved: [],
      rejected: [],
      draft: []
    };
    
    allSubmissions.forEach(submission => {
      if (grouped[submission.status]) {
        grouped[submission.status].push(submission);
      }
    });
    
    // Get counts
    const counts = {
      total: allSubmissions.length,
      pending: grouped.pending.length,
      approved: grouped.approved.length,
      rejected: grouped.rejected.length,
      draft: grouped.draft.length
    };
    
    res.json({
      counts,
      submissions: grouped,
      totalSubmissions: allSubmissions.length
    });
  } catch (err) {
    console.error("Error in getMySubmissionsSummary:", err);
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   ADMIN: GET ALL SUBMISSIONS
========================= */
export const getAllSubmissions = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { status, page = 1, limit = 10 } = req.query;
    
    const filter = {};
    if (status && status !== "all") {
      filter.status = status;
    }

    const skip = (page - 1) * limit;

    const [submissions, total] = await Promise.all([
      Country.find(filter)
        .populate("createdBy", "name email")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .select("-__v"),
      Country.countDocuments(filter),
    ]);

    res.json({
      submissions,
      total,
      pages: Math.ceil(total / limit),
      currentPage: parseInt(page),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   ADMIN: APPROVE/REJECT SUBMISSION
========================= */
/* =========================
   ADMIN: APPROVE/REJECT SUBMISSION (FIXED)
========================= */
export const reviewSubmission = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { id } = req.params;
    const { status, rejectionNote } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const country = await Country.findById(id);
    if (!country) {
      return res.status(404).json({ message: "Submission not found" });
    }

    if (status === "rejected" && !rejectionNote?.trim()) {
      return res.status(400).json({ message: "Rejection note is required" });
    }

    country.status = status;
    
    if (status === "rejected") {
      country.rejectionNote = rejectionNote;
      // Remove the slug when rejected to prevent SEO conflicts
      country.slug = undefined;
      // Clear references if rejected (optional)
      country.references = [];
    } else {
      country.rejectionNote = "";
      // Ensure slug exists for approved submissions
      if (!country.slug) {
        // Generate slug from country name if not exists
        const baseSlug = country.Countryname 
          ? country.Countryname.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
          : country.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        
        // Check if slug already exists
        let slug = baseSlug;
        let counter = 1;
        let existingCountry = await Country.findOne({ slug, _id: { $ne: country._id } });
        
        while (existingCountry) {
          slug = `${baseSlug}-${counter}`;
          existingCountry = await Country.findOne({ slug, _id: { $ne: country._id } });
          counter++;
        }
        
        country.slug = slug;
      }
    }

    await country.save();

    res.json({ 
      message: `Submission ${status} successfully`,
      country 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   ADMIN: GET DASHBOARD STATS
========================= */
export const getAdminStats = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const [total, pending, approved, rejected] = await Promise.all([
      Country.countDocuments(),
      Country.countDocuments({ status: "pending" }),
      Country.countDocuments({ status: "approved" }),
      Country.countDocuments({ status: "rejected" }),
    ]);

    res.json({
      total,
      pending,
      approved,
      rejected,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   USER: GET MY STATS
========================= */
export const getUserStats = async (req, res) => {
  try {
    const [total, pending, approved, rejected] = await Promise.all([
      Country.countDocuments({ createdBy: req.user._id }),
      Country.countDocuments({ createdBy: req.user._id, status: "pending" }),
      Country.countDocuments({ createdBy: req.user._id, status: "approved" }),
      Country.countDocuments({ createdBy: req.user._id, status: "rejected" }),
    ]);

    res.json({
      total,
      pending,
      approved,
      rejected,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   GET SUBMISSION BY SLUG (FOR ADMIN REVIEW)
========================= */
export const getSubmissionBySlug = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { slug } = req.params;

    const submission = await Country.findOne({ slug })
      .populate("createdBy", "name email")
      .lean();

    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }

    res.json(submission);
  } catch (err) {
    console.error("getSubmissionBySlug error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* =========================
   USER: GET MY SUBMISSIONS BY STATUS
   Returns detailed submissions for a specific status
========================= */
export const getMySubmissionsByStatus = async (req, res) => {
  try {
    const { status } = req.params; // 'pending', 'approved', or 'rejected'
    const { page = 1, limit = 10 } = req.query;
    
    // Validate status
    const validStatuses = ["pending", "approved", "rejected", "draft"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ 
        message: "Invalid status. Must be: pending, approved, rejected, or draft" 
      });
    }
    
    const skip = (page - 1) * limit;
    
    const [submissions, total] = await Promise.all([
      Country.find({ 
        createdBy: req.user._id, 
        status: status 
      })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .select("-__v"),
      Country.countDocuments({ 
        createdBy: req.user._id, 
        status: status 
      }),
    ]);

    res.json({
      status,
      submissions,
      total,
      pages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      limit: parseInt(limit),
    });
  } catch (err) {
    console.error("Error in getMySubmissionsByStatus:", err);
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   ADMIN: MANAGE REFERENCES FOR A COUNTRY
   Add/Remove/Update references
========================= */
export const manageReferences = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { id } = req.params;
    const { action, references } = req.body;

    const country = await Country.findById(id);
    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }

    switch (action) {
      case 'add':
        if (!Array.isArray(references) && typeof references !== 'string') {
          return res.status(400).json({ message: "References must be an array or comma-separated string" });
        }
        
        let newReferences = [];
        if (Array.isArray(references)) {
          newReferences = references.filter(ref => ref.trim() !== '');
        } else {
          newReferences = references.split(',')
            .map(ref => ref.trim())
            .filter(ref => ref !== '');
        }
        
        // Add new references, avoiding duplicates
        const existingRefs = new Set(country.references || []);
        newReferences.forEach(ref => {
          if (!existingRefs.has(ref)) {
            existingRefs.add(ref);
          }
        });
        
        country.references = Array.from(existingRefs);
        break;

      case 'remove':
        if (!Array.isArray(references)) {
          return res.status(400).json({ message: "References to remove must be an array" });
        }
        
        country.references = (country.references || []).filter(
          ref => !references.includes(ref)
        );
        break;

      case 'replace':
        if (!Array.isArray(references) && typeof references !== 'string') {
          return res.status(400).json({ message: "References must be an array or comma-separated string" });
        }
        
        let replacementRefs = [];
        if (Array.isArray(references)) {
          replacementRefs = references.filter(ref => ref.trim() !== '');
        } else {
          replacementRefs = references.split(',')
            .map(ref => ref.trim())
            .filter(ref => ref !== '');
        }
        
        country.references = replacementRefs;
        break;

      default:
        return res.status(400).json({ 
          message: "Invalid action. Use 'add', 'remove', or 'replace'" 
        });
    }

    await country.save();

    res.json({ 
      message: `References ${action}ed successfully`,
      references: country.references,
      totalReferences: country.references.length
    });
  } catch (err) {
    console.error("Error in manageReferences:", err);
    res.status(500).json({ message: err.message });
  }
};

/* =========================
   USER: UPDATE REFERENCES FOR OWN SUBMISSION
   (Only for drafts or pending submissions)
========================= */
export const updateMyReferences = async (req, res) => {
  try {
    const { id } = req.params;
    const { references } = req.body;

    const country = await Country.findOne({ 
      _id: id, 
      createdBy: req.user._id 
    });

    if (!country) {
      return res.status(404).json({ 
        message: "Submission not found or you don't have permission" 
      });
    }

    // Only allow updates for drafts or pending submissions
    if (!['draft', 'pending'].includes(country.status)) {
      return res.status(400).json({ 
        message: "Can only update references for draft or pending submissions" 
      });
    }

    let referencesArray = [];
    if (references) {
      if (Array.isArray(references)) {
        referencesArray = references.filter(ref => ref.trim() !== '');
      } else if (typeof references === 'string') {
        referencesArray = references.split(',')
          .map(ref => ref.trim())
          .filter(ref => ref !== '');
      }
      
      // Validate URLs (optional)
      const urlPattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
      const invalidUrls = referencesArray.filter(url => !urlPattern.test(url));
      
      if (invalidUrls.length > 0) {
        return res.status(400).json({ 
          message: `Invalid URLs found: ${invalidUrls.join(', ')}` 
        });
      }
    }

    country.references = referencesArray;
    
    // If updating a draft, keep it as draft
    // If updating a pending submission, reset to pending (admin needs to review again)
    if (country.status === 'pending') {
      country.status = 'pending';
      country.rejectionNote = '';
    }
    
    await country.save();

    res.json({ 
      message: "References updated successfully",
      country: {
        _id: country._id,
        Countryname: country.Countryname,
        slug: country.slug,
        status: country.status,
        references: country.references,
        updatedAt: country.updatedAt
      }
    });
  } catch (err) {
    console.error("Error in updateMyReferences:", err);
    res.status(500).json({ message: err.message });
  }
};
/* =========================
   USER: GET SINGLE SUBMISSION BY ID
   For editing/viewing a specific submission
========================= */
export const getSubmissionById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ 
        success: false,
        message: "Invalid submission ID format" 
      });
    }

    const submission = await Country.findOne({
      _id: id,
      createdBy: req.user._id // Ensure user can only access their own submissions
    }).select("-__v");

    if (!submission) {
      return res.status(404).json({ 
        success: false,
        message: "Submission not found or you don't have permission to access it" 
      });
    }

    res.json({ 
      success: true,
      submission 
    });
  } catch (err) {
    console.error("Error in getSubmissionById:", err);
    res.status(500).json({ 
      success: false,
      message: "Server error" 
    });
  }
};
/* =========================
   USER: GET MY SUBMISSION BY ID
   For editing/viewing a specific submission - with proper authorization
========================= */
export const getMySubmission = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ 
        success: false,
        message: "Invalid submission ID format" 
      });
    }

    // Find submission with user ownership check
    const submission = await Country.findOne({
      _id: id,
      createdBy: req.user._id
    })
    .select("-__v")
    .lean();

    if (!submission) {
      return res.status(404).json({ 
        success: false,
        message: "Submission not found or you don't have permission to access it" 
      });
    }

    // Check if user can edit this submission
    const canEdit = ['pending', 'rejected', 'draft'].includes(submission.status);
    
    // Prepare response data
    const responseData = {
      _id: submission._id,
      Countryname: submission.Countryname || submission.name || "",
      name: submission.Countryname || submission.name || "",
      slug: submission.slug || "",
      partnersRange: submission.partnersRange || "",
      Ipv4PeersRange: submission.Ipv4PeersRange || "",
      Ipv6PeersRange: submission.Ipv6PeersRange || "",
      IxpPartnersRange: submission.IxpPartnersRange || "",
      Ipv4GatewaysRange: submission.Ipv4GatewaysRange || "",
      Ipv6GatewaysRange: submission.Ipv6GatewaysRange || "",
      CloudPartnersRange: submission.CloudPartnersRange || "",
      ddosProtection: submission.ddosProtection || false,
      minServiceLatencyRange: submission.minServiceLatencyRange || "",
      avgServiceLatencyRange: submission.avgServiceLatencyRange || "",
      features: submission.features || "",
      ourServices: submission.ourServices || "",
      commercialOfferDateRange: submission.commercialOfferDateRange || "",
      deliveryDateRange: submission.deliveryDateRange || "",
      integrationNote: submission.integrationNote || "",
      whyChooseUs: submission.whyChooseUs || "",
      capabilities: submission.capabilities || "",
      submarineCableImage: submission.submarineCableImage || "",
      submarineCableLink: submission.submarineCableLink || "",
      references: submission.references || [],
      status: submission.status || "pending",
      rejectionNote: submission.rejectionNote || "",
      canEdit: canEdit,
      createdAt: submission.createdAt,
      updatedAt: submission.updatedAt,
      // Additional metadata
      submissionDate: submission.createdAt,
      lastUpdated: submission.updatedAt,
      statusHistory: [
        {
          status: submission.status,
          date: submission.updatedAt,
          note: submission.rejectionNote || null
        }
      ]
    };

    res.json({ 
      success: true,
      message: "Submission retrieved successfully",
      submission: responseData,
      permissions: {
        canEdit: canEdit,
        canDelete: ['pending', 'draft'].includes(submission.status),
        canView: true,
        canResubmit: submission.status === 'rejected'
      }
    });
  } catch (err) {
    console.error("Error in getMySubmission:", err);
    res.status(500).json({ 
      success: false,
      message: "Server error while fetching submission" 
    });
  }
};
/* =========================
   USER: GET MY SUBMISSION FOR EDITING
   For editing a specific submission owned by the user
========================= */
export const getMySubmissionForEdit = async (req, res) => {
  try {
    console.log("=== GET MY SUBMISSION FOR EDIT API CALLED ===");
    console.log("Submission ID:", req.params.id);
    console.log("User ID:", req.user._id);
    console.log("User Role:", req.user.role);

    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ObjectId:", id);
      return res.status(400).json({ 
        success: false,
        message: "Invalid submission ID" 
      });
    }

    // Find the submission by ID
    const submission = await Country.findById(id);
    
    if (!submission) {
      console.log("Submission not found in database");
      return res.status(404).json({ 
        success: false,
        message: "Submission not found" 
      });
    }

    // Check ownership - users can only view their own submissions
    const isOwner = submission.createdBy.toString() === req.user._id.toString();
    
    console.log("Is Owner:", isOwner);
    console.log("Submission createdBy:", submission.createdBy?.toString());
    console.log("Current user ID:", req.user._id.toString());

    if (!isOwner && req.user.role !== 'admin') {
      return res.status(403).json({ 
        success: false,
        message: "You don't have permission to view this submission" 
      });
    }

    // Prepare response data
    const responseData = {
      _id: submission._id,
      Countryname: submission.Countryname || "",
      name: submission.Countryname || "", // For compatibility
      slug: submission.slug || "",
      partnersRange: submission.partnersRange || "",
      Ipv4PeersRange: submission.Ipv4PeersRange || "",
      Ipv6PeersRange: submission.Ipv6PeersRange || "",
      IxpPartnersRange: submission.IxpPartnersRange || "",
      Ipv4GatewaysRange: submission.Ipv4GatewaysRange || "",
      Ipv6GatewaysRange: submission.Ipv6GatewaysRange || "",
      CloudPartnersRange: submission.CloudPartnersRange || "",
      ddosProtection: submission.ddosProtection || false,
      minServiceLatencyRange: submission.minServiceLatencyRange || "",
      avgServiceLatencyRange: submission.avgServiceLatencyRange || "",
      features: submission.features || "",
      ourServices: submission.ourServices || "",
      commercialOfferDateRange: submission.commercialOfferDateRange || "",
      deliveryDateRange: submission.deliveryDateRange || "",
      integrationNote: submission.integrationNote || "",
      whyChooseUs: submission.whyChooseUs || "",
      capabilities: submission.capabilities || "",
      submarineCableImage: submission.submarineCableImage || "",
      submarineCableLink: submission.submarineCableLink || "",
      references: submission.references || [],
      status: submission.status,
      rejectionNote: submission.rejectionNote || "",
      createdAt: submission.createdAt,
      updatedAt: submission.updatedAt
    };

    res.json({
      success: true,
      message: "Submission retrieved successfully",
      submission: responseData,
      permissions: {
        canEdit: isOwner && ['pending', 'rejected', 'draft'].includes(submission.status),
        canDelete: isOwner && ['pending', 'draft'].includes(submission.status),
        canView: true,
        canResubmit: isOwner && submission.status === 'rejected'
      }
    });

  } catch (err) {
    console.error("Error in getMySubmissionForEdit:", err);
    console.error("Error stack:", err.stack);
    
    res.status(500).json({
      success: false,
      message: "Server error while fetching submission",
      error: err.message
    });
  }
};
// controllers/country.js
export const userSubmissionById = async (req, res) => {
  try {
    console.log("=== GET MY SUBMISSION FOR EDIT API CALLED ===");
    console.log("Submission ID:", req.params.id);
    console.log("User ID:", req.user._id);
    console.log("User Role:", req.user.role);

    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ObjectId:", id);
      return res.status(400).json({ 
        success: false,
        message: "Invalid submission ID" 
      });
    }

    // Find the submission by ID
    const submission = await Country.findById(id);
    
    if (!submission) {
      console.log("Submission not found in database");
      return res.status(404).json({ 
        success: false,
        message: "Submission not found" 
      });
    }

    // Check ownership - compare as strings
    // Admin can view any submission, users can only view their own
    const isAdmin = req.user.role === 'admin';
    const isOwner = submission.createdBy.toString() === req.user._id.toString();
    
    console.log("Is Admin:", isAdmin);
    console.log("Is Owner:", isOwner);
    console.log("Submission createdBy:", submission.createdBy.toString());
    console.log("Current user ID:", req.user._id.toString());

    if (!isAdmin && !isOwner) {
      return res.status(403).json({ 
        success: false,
        message: "You don't have permission to edit this submission" 
      });
    }

    // Check if submission can be edited
    const canEdit = ['pending', 'rejected', 'draft'].includes(submission.status);
    if (!canEdit && !isAdmin) {
      return res.status(400).json({
        success: false,
        message: `This submission cannot be edited because it's ${submission.status}. Only pending, rejected, or draft submissions can be edited.`
      });
    }

    // Prepare response data
    const responseData = {
      _id: submission._id,
      Countryname: submission.Countryname || "",
      name: submission.Countryname || "", // For compatibility
      slug: submission.slug || "",
      partnersRange: submission.partnersRange || "",
      Ipv4PeersRange: submission.Ipv4PeersRange || "",
      Ipv6PeersRange: submission.Ipv6PeersRange || "",
      IxpPartnersRange: submission.IxpPartnersRange || "",
      Ipv4GatewaysRange: submission.Ipv4GatewaysRange || "",
      Ipv6GatewaysRange: submission.Ipv6GatewaysRange || "",
      CloudPartnersRange: submission.CloudPartnersRange || "",
      ddosProtection: submission.ddosProtection || false,
      minServiceLatencyRange: submission.minServiceLatencyRange || "",
      avgServiceLatencyRange: submission.avgServiceLatencyRange || "",
      features: submission.features || "",
      ourServices: submission.ourServices || "",
      commercialOfferDateRange: submission.commercialOfferDateRange || "",
      deliveryDateRange: submission.deliveryDateRange || "",
      integrationNote: submission.integrationNote || "",
      whyChooseUs: submission.whyChooseUs || "",
      capabilities: submission.capabilities || "",
      submarineCableImage: submission.submarineCableImage || "",
      submarineCableLink: submission.submarineCableLink || "",
      references: submission.references || [],
      status: submission.status,
      rejectionNote: submission.rejectionNote || "",
      createdAt: submission.createdAt,
      updatedAt: submission.updatedAt,
      createdBy: {
        _id: submission.createdBy,
        name: req.user.name,
        email: req.user.email
      }
    };

    res.json({
      success: true,
      message: "Submission retrieved successfully",
      submission: responseData,
      permissions: {
        canEdit: isAdmin || canEdit,
        canDelete: isAdmin || ['pending', 'draft'].includes(submission.status),
        canView: true,
        canResubmit: submission.status === 'rejected',
        isAdmin: isAdmin,
        isOwner: isOwner
      }
    });

  } catch (err) {
    console.error("Error in getMySubmissionForEdit:", err);
    console.error("Error stack:", err.stack);
    
    res.status(500).json({
      success: false,
      message: "Server error while fetching submission",
      error: err.message
    });
  }
};

// controllers/country.js
export const updateUserSubmissionById = async (req, res) => {
  try {
    const { id } = req.params; // Changed from slug to id
    const updateData = req.body;

    // Find the submission by ID
    const submission = await Country.findById(id);
    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }

    // Verify user owns this submission
    if (req.user.role !== "admin" && submission.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "You can only edit your own submissions" });
    }

    // ... rest of your existing update logic ...
    // Keep all the slug generation and field filtering logic
    
    // Update submission with filtered data
    Object.assign(submission, filteredUpdate);
    
    // Reset status to "pending" when user makes changes
    submission.status = "pending";
    submission.rejectionNote = "";

    await submission.save();

    res.json({ 
      message: "Submission updated successfully",
      submission: {
        _id: submission._id,
        Countryname: submission.Countryname,
        slug: submission.slug,
        status: submission.status,
        updatedAt: submission.updatedAt
      }
    });
  } catch (err) {
    console.error("Error updating user submission:", err);
    
    if (err.code === 11000) {
      return res.status(400).json({ 
        message: "Slug already exists. Please try a different country name." 
      });
    }
    
    res.status(500).json({ message: err.message });
  }
};
export const updateUserSubmission = async (req, res) => {
  try {
    console.log("=== UPDATE USER SUBMISSION API CALLED ===");
    console.log("Submission ID:", req.params.id);
    console.log("User ID:", req.user._id);
    console.log("Update Data:", req.body);

    const { id } = req.params;
    const updateData = req.body;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ 
        success: false,
        message: "Invalid submission ID" 
      });
    }

    // Find the submission by ID
    const submission = await Country.findById(id);
    if (!submission) {
      return res.status(404).json({ 
        success: false,
        message: "Submission not found" 
      });
    }

    // Check ownership - users can only edit their own submissions
    const isOwner = submission.createdBy.toString() === req.user._id.toString();
    
    if (!isOwner) {
      return res.status(403).json({ 
        success: false,
        message: "You can only edit your own submissions" 
      });
    }

    // Check if submission can be edited
    const canEdit = ['pending', 'rejected', 'draft'].includes(submission.status);
    if (!canEdit) {
      return res.status(400).json({
        success: false,
        message: `This submission cannot be edited because it's ${submission.status}. Only pending, rejected, or draft submissions can be edited.`
      });
    }

    // Fields that users are allowed to update
    const allowedUserFields = [
      'Countryname',
      'partnersRange',
      'Ipv4PeersRange',
      'Ipv6PeersRange',
      'IxpPartnersRange',
      'Ipv4GatewaysRange',
      'Ipv6GatewaysRange',
      'CloudPartnersRange',
      'ddosProtection',
      'minServiceLatencyRange',
      'avgServiceLatencyRange',
      'commercialOfferDateRange',
      'deliveryDateRange',
      'submarineCableLink',
      'submarineCableImage',
      'features',
      'ourServices',
      'capabilities',
      'integrationNote',
      'whyChooseUs',
      'references'
    ];

    // Filter update data to only allowed fields
    const filteredUpdate = {};
    Object.keys(updateData).forEach(key => {
      if (allowedUserFields.includes(key)) {
        filteredUpdate[key] = updateData[key];
      }
    });

    // If Countryname is updated, update slug too
    if (filteredUpdate.Countryname && filteredUpdate.Countryname !== submission.Countryname) {
      const baseSlug = filteredUpdate.Countryname.toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      // Generate unique slug
      let newSlug = baseSlug;
      let counter = 1;
      let existingCountry = await Country.findOne({ 
        slug: newSlug, 
        _id: { $ne: submission._id } 
      });
      
      while (existingCountry) {
        newSlug = `${baseSlug}-${counter}`;
        existingCountry = await Country.findOne({ 
          slug: newSlug, 
          _id: { $ne: submission._id } 
        });
        counter++;
      }
      
      filteredUpdate.slug = newSlug;
      console.log("Generated new slug:", newSlug);
    }

    // Update submission with filtered data
    Object.assign(submission, filteredUpdate);
    
    // Reset status to "pending" when user makes changes (requires re-approval)
    submission.status = "pending";
    submission.rejectionNote = ""; // Clear any previous rejection notes
    console.log("Status reset to pending for re-approval");

    await submission.save();

    // Prepare response
    const responseData = {
      _id: submission._id,
      Countryname: submission.Countryname,
      slug: submission.slug,
      status: submission.status,
      rejectionNote: submission.rejectionNote,
      updatedAt: submission.updatedAt
    };

    res.json({
      success: true,
      message: "Submission updated successfully. Status reset to pending for admin review.",
      submission: responseData,
      changedFields: Object.keys(filteredUpdate),
      requiresReapproval: true
    });

  } catch (err) {
    console.error("Error updating user submission:", err);
    console.error("Error stack:", err.stack);
    
    if (err.code === 11000) {
      return res.status(400).json({ 
        success: false,
        message: "Slug already exists. Please try a different country name.",
        error: err.message
      });
    }
    
    res.status(500).json({
      success: false,
      message: "Server error while updating submission",
      error: err.message
    });
  }
};