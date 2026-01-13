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
      Ipv4PeersRange,        // Changed from avgIpv4PeersRange
      Ipv6PeersRange,        // Changed from avgIpv6PeersRange
      IxpPartnersRange,      // Changed from avgIxpPartnersRange
      Ipv4GatewaysRange,     // Changed from avgIpv4GatewaysRange
      Ipv6GatewaysRange,     // Changed from avgIpv6GatewaysRange
      CloudPartnersRange,    // Changed from avgCloudPartnersRange
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
      references,  // Added references field
    } = req.body;

    console.log('Form Data Received:', {
      name,
      Countryname,
      slug,
      partnersRange,
      Ipv4PeersRange,
      CloudPartnersRange,
      references
    });

    // Use whichever is provided
    const countryName = Countryname || name;
    
    // Validate required fields only
    if (!countryName || !countryName.trim()) {
      return res.status(400).json({ message: "Country name is required" });
    }
    
    if (!slug || !slug.trim()) {
      return res.status(400).json({ message: "Slug is required" });
    }

    // Check slug format
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      return res.status(400).json({ 
        message: "Slug must be lowercase with hyphens only (e.g., 'united-states')" 
      });
    }

    // Check if slug exists
    const existing = await Country.findOne({ slug });
    const isEditingOwnSubmission = existing && existing.createdBy.toString() === req.user._id.toString();
    
    if (existing && !isEditingOwnSubmission) {
      return res.status(400).json({ message: "Slug already exists" });
    }

    // Prepare references array
    let referencesArray = [];
    if (references) {
      if (Array.isArray(references)) {
        // Filter out empty strings and validate URLs
        referencesArray = references.filter(ref => ref.trim() !== '');
        
        // Optional: Validate URLs
        const urlPattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
        const invalidUrls = referencesArray.filter(url => !urlPattern.test(url));
        
        if (invalidUrls.length > 0) {
          return res.status(400).json({ 
            message: `Invalid URLs found: ${invalidUrls.join(', ')}` 
          });
        }
      } else if (typeof references === 'string') {
        // Handle comma-separated string
        referencesArray = references.split(',')
          .map(ref => ref.trim())
          .filter(ref => ref !== '');
        
        // Validate URLs
        const urlPattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
        const invalidUrls = referencesArray.filter(url => !urlPattern.test(url));
        
        if (invalidUrls.length > 0) {
          return res.status(400).json({ 
            message: `Invalid URLs found: ${invalidUrls.join(', ')}` 
          });
        }
      }
    }

    // Prepare data object with correct field names
    const countryData = {
      Countryname: countryName,
      slug,
      partnersRange: partnersRange || "",
      Ipv4PeersRange: Ipv4PeersRange || "",       // Direct mapping
      Ipv6PeersRange: Ipv6PeersRange || "",       // Direct mapping
      IxpPartnersRange: IxpPartnersRange || "",   // Direct mapping
      Ipv4GatewaysRange: Ipv4GatewaysRange || "", // Direct mapping
      Ipv6GatewaysRange: Ipv6GatewaysRange || "", // Direct mapping
      CloudPartnersRange: CloudPartnersRange || "", // Direct mapping
      ddosProtection: ddosProtection || false,
      minServiceLatencyRange: minServiceLatencyRange || "",
      avgServiceLatencyRange: avgServiceLatencyRange || "",
      features: features || "",
      ourServices: ourServices || "",
      commercialOfferDateRange: commercialOfferDateRange || "",
      deliveryDateRange: deliveryDateRange || "",
      integrationNote: integrationNote || "",
      whyChooseUs: whyChooseUs || "",
      capabilities: capabilities || "",
      submarineCableImage: submarineCableImage || "",
      submarineCableLink: submarineCableLink || "",
      references: referencesArray, // Add references
    };

    console.log('Prepared country data:', countryData);

    // If updating existing submission
    if (existing && isEditingOwnSubmission) {
      // Handle image deletion if new image provided
      if (submarineCableImage && existing.submarineCableImage && existing.submarineCableImage !== submarineCableImage) {
        try {
          const oldUrl = existing.submarineCableImage;
          if (oldUrl.includes('cloudinary.com')) {
            const publicId = oldUrl.split('/').pop().split('.')[0];
            await cloudinary.uploader.destroy(publicId);
            console.log('Deleted old Cloudinary image:', publicId);
          }
        } catch (cloudinaryErr) {
          console.error('Error deleting old image:', cloudinaryErr);
        }
      }

      // Update all fields
      Object.assign(existing, countryData);
      existing.status = "pending"; // Reset status when updated
      existing.rejectionNote = ""; // Clear rejection note
      
      await existing.save();
      
      return res.json({ 
        success: true,
        message: "Country form updated and submitted for review", 
        country: existing,
        isUpdate: true 
      });
    }

    // Create new submission
    const country = await Country.create({
      ...countryData,
      status: "pending",
      createdBy: req.user._id,
    });

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
      return res.status(400).json({ 
        success: false,
        message: "Slug already exists. Please choose a different one." 
      });
    }
    
    res.status(500).json({ 
      success: false,
      message: err.message 
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