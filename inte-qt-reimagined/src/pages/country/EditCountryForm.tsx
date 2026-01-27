// pages/EditCountryForm.tsx
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Globe, 
  Upload, 
  Link as LinkIcon,
  CheckCircle2, 
  AlertTriangle,
  ArrowLeft,
  Save,
  Send,
  RefreshCw,
  Copy,
  Plus,
  Trash2,
  Link,
  RefreshCcw,
  History,
  X,
  Image as ImageIcon
} from "lucide-react";
import { useCountryAuth } from "../../context/AuthContext";

const API_BASE = import.meta.env.VITE_API_BASE;

interface CountryFormData {
  name: string;
  slug: string;
  partnersRange: string;
  Ipv4PeersRange: string;
  Ipv6PeersRange: string;
  IxpPartnersRange: string;
  Ipv4GatewaysRange: string;
  Ipv6GatewaysRange: string;
  CloudPartnersRange: string;
  ddosProtection: boolean;
  minServiceLatencyRange: string;
  avgServiceLatencyRange: string;
  features: string;
  ourServices: string;
  commercialOfferDateRange: string;
  deliveryDateRange: string;
  integrationNote: string;
  whyChooseUs: string;
  capabilities: string;
  submarineCableImage: string;
  submarineCableLink: string;
  references: string[];
}

interface SubmissionData {
  _id: string;
  Countryname: string;
  name: string;
  slug: string;
  partnersRange: string;
  Ipv4PeersRange: string;
  Ipv6PeersRange: string;
  IxpPartnersRange: string;
  Ipv4GatewaysRange: string;
  Ipv6GatewaysRange: string;
  CloudPartnersRange: string;
  ddosProtection: boolean;
  minServiceLatencyRange: string;
  avgServiceLatencyRange: string;
  features: string;
  ourServices: string;
  commercialOfferDateRange: string;
  deliveryDateRange: string;
  integrationNote: string;
  whyChooseUs: string;
  capabilities: string;
  submarineCableImage: string;
  submarineCableLink: string;
  references: string[];
  status: string;
  rejectionNote?: string;
  createdAt: string;
  updatedAt: string;
}

const EditCountryForm = () => {
  const { user, token } = useCountryAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [newReference, setNewReference] = useState("");
  const [originalSlug, setOriginalSlug] = useState("");
  const [originalData, setOriginalData] = useState<SubmissionData | null>(null);
  const [showRejectionNote, setShowRejectionNote] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [formData, setFormData] = useState<CountryFormData>({
    name: "",
    slug: "",
    partnersRange: "",
    Ipv4PeersRange: "",
    Ipv6PeersRange: "",
    IxpPartnersRange: "",
    Ipv4GatewaysRange: "",
    Ipv6GatewaysRange: "",
    CloudPartnersRange: "",
    ddosProtection: false,
    minServiceLatencyRange: "",
    avgServiceLatencyRange: "",
    features: "",
    ourServices: "",
    commercialOfferDateRange: "",
    deliveryDateRange: "",
    integrationNote: "",
    whyChooseUs: "",
    capabilities: "",
    submarineCableImage: "",
    submarineCableLink: "",
    references: [],
  });

  const generateSlug = useCallback((name: string): string => {
    if (!name.trim()) return "";
    
    return name
      .toLowerCase()
      .trim()
      .replace(/[\s\.,;:!?']+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-+/g, '-')
      .replace(/^-+|-+$/g, '')
      .substring(0, 100);
  }, []);

  useEffect(() => {
    if (!slugManuallyEdited && formData.name) {
      const newSlug = generateSlug(formData.name);
      setFormData(prev => ({
        ...prev,
        slug: newSlug
      }));
    }
  }, [formData.name, slugManuallyEdited, generateSlug]);

  useEffect(() => {
    if (!token || !user) {
      navigate("/country/login");
      return;
    }

    if (id) {
      fetchSubmission(id);
    } else {
      setError("No submission ID provided");
      navigate("/country/dashboard");
    }
  }, [id, token, user, navigate]);

  const fetchSubmission = async (submissionId: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const res = await fetch(`${API_BASE}/api/country/dashboard/users/submission/${submissionId}`, {
        headers: { "Authorization": `Bearer ${token}` }
      });

      const data = await res.json();
      
      if (data.success) {
        const submission = data.submission;
        const permissions = data.permissions;
        
        if (!permissions?.canEdit) {
          setError(`This submission cannot be edited because it's ${submission?.status || 'unknown'}. Only pending, rejected, or draft submissions can be edited.`);
          setTimeout(() => {
            navigate("/country/dashboard");
          }, 3000);
          return;
        }

        setOriginalData(submission);
        
        setFormData({
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
        });

        setOriginalSlug(submission.slug || "");

        if (submission.submarineCableImage && looksLikeUrl(submission.submarineCableImage)) {
          setPreviewImage(submission.submarineCableImage);
        }
      } else {
        throw new Error(data.message || "Failed to fetch submission");
      }
    } catch (err: any) {
      console.error("Failed to fetch submission:", err);
      setError(err.message || "Failed to load submission. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const looksLikeUrl = (s: string) => {
    if (!s) return false;
    try {
      const u = new URL(s);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch {
      return false;
    }
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return "Country name is required";
    if (!formData.slug.trim()) return "Slug is required";
    
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(formData.slug)) {
      return "Slug must be lowercase with hyphens only (e.g., 'united-states')";
    }

    if (!formData.partnersRange.trim()) return "Partners Range is required";

    if (formData.submarineCableLink && !looksLikeUrl(formData.submarineCableLink)) {
      return "Submarine cable link must be a valid URL";
    }

    // Validate references URLs
    for (const ref of formData.references) {
      if (ref && !looksLikeUrl(ref)) {
        return `Invalid URL in references: ${ref}`;
      }
    }

    return null;
  };

  // Separate function to upload image to Cloudinary
  const uploadImageToCloudinary = async (file: File): Promise<string> => {
    try {
      setUploadingImage(true);
      setUploadProgress(0);
      
      const formDataObj = new FormData();
      formDataObj.append("image", file);

      const response = await fetch(`${API_BASE}/api/upload/image`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formDataObj,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Upload failed with status ${response.status}`);
      }

     
      return data.url;

    } catch (err: any) {
      console.error("Image upload failed:", err);
      throw new Error(`Upload failed: ${err.message}`);
    } finally {
      setUploadingImage(false);
      setUploadProgress(0);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setUpdating(true);

    try {
      // If user uploaded a new file, upload it to Cloudinary first
      let finalImageUrl = formData.submarineCableImage;
      
      if (imageFile) {
        try {
          finalImageUrl = await uploadImageToCloudinary(imageFile);
         
        } catch (uploadError: any) {
          throw new Error(`Image upload failed: ${uploadError.message}`);
        }
      }

      // Use the ID-based update API endpoint
      const url = `${API_BASE}/api/country/dashboard/user/submission/${id}`;

      const payload = {
        Countryname: formData.name.trim(),
        name: formData.name.trim(),
        slug: formData.slug.trim(),
        partnersRange: formData.partnersRange.trim(),
        Ipv4PeersRange: formData.Ipv4PeersRange.trim(),
        Ipv6PeersRange: formData.Ipv6PeersRange.trim(),
        IxpPartnersRange: formData.IxpPartnersRange.trim(),
        Ipv4GatewaysRange: formData.Ipv4GatewaysRange.trim(),
        Ipv6GatewaysRange: formData.Ipv6GatewaysRange.trim(),
        CloudPartnersRange: formData.CloudPartnersRange.trim(),
        ddosProtection: formData.ddosProtection,
        minServiceLatencyRange: formData.minServiceLatencyRange.trim(),
        avgServiceLatencyRange: formData.avgServiceLatencyRange.trim(),
        features: formData.features.trim(),
        ourServices: formData.ourServices.trim(),
        commercialOfferDateRange: formData.commercialOfferDateRange.trim(),
        deliveryDateRange: formData.deliveryDateRange.trim(),
        integrationNote: formData.integrationNote.trim(),
        whyChooseUs: formData.whyChooseUs.trim(),
        capabilities: formData.capabilities.trim(),
        submarineCableImage: finalImageUrl.trim(),
        submarineCableLink: formData.submarineCableLink.trim(),
        references: formData.references.filter(ref => ref.trim() !== ''),
      };

      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update submission");
      }

      setSubmitted(true);
      setTimeout(() => {
        navigate("/country/dashboard");
      }, 1500);
    } catch (err: any) {
      console.error("Update error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!validImageTypes.includes(file.type)) {
      setError("Please upload a valid image (JPEG, PNG, GIF, WEBP)");
      return;
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      setError("Image must be under 10MB");
      return;
    }

    // Store the file for later upload
    setImageFile(file);

    // Create preview immediately with blob URL
    const objectUrl = URL.createObjectURL(file);
    setPreviewImage(objectUrl);
    setUploadProgress(0);
    
    // Clear the image file input
    e.target.value = '';
  };

  const handleRemoveImage = () => {
    if (previewImage && previewImage.startsWith('blob:')) {
      URL.revokeObjectURL(previewImage);
    }
    setPreviewImage(null);
    setImageFile(null);
    setFormData(prev => ({
      ...prev,
      submarineCableImage: "",
    }));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setFormData(prev => ({ ...prev, name: newName }));
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSlug = e.target.value.toLowerCase();
    setFormData(prev => ({ ...prev, slug: newSlug }));
    setSlugManuallyEdited(true);
  };

  const regenerateSlug = () => {
    if (formData.name) {
      const newSlug = generateSlug(formData.name);
      setFormData(prev => ({ ...prev, slug: newSlug }));
      setSlugManuallyEdited(false);
    }
  };

  const copySlugToClipboard = () => {
    if (formData.slug) {
      navigator.clipboard.writeText(formData.slug)
        .then(() => {
          alert("Slug copied to clipboard!");
        })
        .catch(err => {
          console.error("Failed to copy slug:", err);
        });
    }
  };

  const handleAddReference = () => {
    if (!newReference.trim()) {
      setError("Please enter a URL");
      return;
    }

    if (!looksLikeUrl(newReference)) {
      setError("Please enter a valid URL (must start with http:// or https://)");
      return;
    }

    // Check for duplicates
    if (formData.references.includes(newReference.trim())) {
      setError("This URL is already in the references list");
      return;
    }

    setFormData(prev => ({
      ...prev,
      references: [...prev.references, newReference.trim()]
    }));
    setNewReference("");
    setError(null);
  };

  const handleRemoveReference = (index: number) => {
    setFormData(prev => ({
      ...prev,
      references: prev.references.filter((_, i) => i !== index)
    }));
  };

  const handleClearReferences = () => {
    if (confirm("Are you sure you want to clear all references?")) {
      setFormData(prev => ({
        ...prev,
        references: []
      }));
    }
  };

  const handlePasteReferences = (e: React.ClipboardEvent) => {
    const pastedText = e.clipboardData.getData('text');
    const urls = pastedText.split(/[\n,;]+/).map(url => url.trim()).filter(url => url);
    
    if (urls.length > 1) {
      e.preventDefault();
      const validUrls = urls.filter(url => looksLikeUrl(url));
      const invalidUrls = urls.filter(url => !looksLikeUrl(url));
      
      if (validUrls.length > 0) {
        const uniqueUrls = validUrls.filter(url => !formData.references.includes(url));
        setFormData(prev => ({
          ...prev,
          references: [...prev.references, ...uniqueUrls]
        }));
        
        if (invalidUrls.length > 0) {
          alert(`Added ${validUrls.length} valid URLs. ${invalidUrls.length} invalid URLs were ignored.`);
        } else {
          alert(`Added ${validUrls.length} URLs`);
        }
      } else {
        setError("No valid URLs found in pasted text");
      }
    }
  };

  const resetToOriginal = () => {
    if (originalData && confirm("Are you sure you want to reset all changes? This cannot be undone.")) {
      setFormData({
        name: originalData.Countryname || originalData.name || "",
        slug: originalData.slug || "",
        partnersRange: originalData.partnersRange || "",
        Ipv4PeersRange: originalData.Ipv4PeersRange || "",
        Ipv6PeersRange: originalData.Ipv6PeersRange || "",
        IxpPartnersRange: originalData.IxpPartnersRange || "",
        Ipv4GatewaysRange: originalData.Ipv4GatewaysRange || "",
        Ipv6GatewaysRange: originalData.Ipv6GatewaysRange || "",
        CloudPartnersRange: originalData.CloudPartnersRange || "",
        ddosProtection: originalData.ddosProtection || false,
        minServiceLatencyRange: originalData.minServiceLatencyRange || "",
        avgServiceLatencyRange: originalData.avgServiceLatencyRange || "",
        features: originalData.features || "",
        ourServices: originalData.ourServices || "",
        commercialOfferDateRange: originalData.commercialOfferDateRange || "",
        deliveryDateRange: originalData.deliveryDateRange || "",
        integrationNote: originalData.integrationNote || "",
        whyChooseUs: originalData.whyChooseUs || "",
        capabilities: originalData.capabilities || "",
        submarineCableImage: originalData.submarineCableImage || "",
        submarineCableLink: originalData.submarineCableLink || "",
        references: originalData.references || [],
      });
      setOriginalSlug(originalData.slug || "");
      
      // Clean up blob URL if exists
      if (previewImage && previewImage.startsWith('blob:')) {
        URL.revokeObjectURL(previewImage);
      }
      
      if (originalData.submarineCableImage && looksLikeUrl(originalData.submarineCableImage)) {
        setPreviewImage(originalData.submarineCableImage);
      } else {
        setPreviewImage(null);
      }
      
      setImageFile(null);
      setSlugManuallyEdited(false);
      setError(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading submission...</p>
        </div>
      </div>
    );
  }

  if (error && !originalData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center max-w-md p-6">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Error Loading Submission</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate("/country/dashboard")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate("/country/dashboard")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Dashboard</span>
            </button>
            
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-600">
                Editing submission for <span className="font-semibold">{formData.name || "Unknown Country"}</span>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                <RefreshCcw className="h-3 w-3 mr-1" />
                Editing Mode
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Edit Country Submission
              </h1>
              <p className="text-gray-600 max-w-2xl">
                Update your country submission details. All fields marked with * are required.
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                <span className="text-sm text-gray-600">Original Slug:</span>
                <code className="text-sm font-mono bg-white px-2 py-1 rounded border">{originalSlug}</code>
              </div>
              
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                  originalData?.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  originalData?.status === 'approved' ? 'bg-green-100 text-green-800' :
                  originalData?.status === 'rejected' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  Status: <span className="capitalize">{originalData?.status}</span>
                </span>
                
                {originalData?.status === 'rejected' && originalData?.rejectionNote && (
                  <button
                    onClick={() => setShowRejectionNote(!showRejectionNote)}
                    className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-800"
                  >
                    <AlertTriangle className="h-3 w-3" />
                    View Rejection Note
                  </button>
                )}
                
                <button
                  onClick={resetToOriginal}
                  className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-gray-800"
                  title="Reset all changes"
                >
                  <History className="h-3 w-3" />
                  Reset
                </button>
              </div>
            </div>
          </div>
          
          {showRejectionNote && originalData?.rejectionNote && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-red-800 mb-2">Rejection Note from Admin:</h4>
                  <p className="text-sm text-red-700 whitespace-pre-wrap">{originalData.rejectionNote}</p>
                  <p className="text-xs text-red-600 mt-2">Please address these issues before resubmitting.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2">
            <form onSubmit={handleUpdate} className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b">
                  Basic Information
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={handleNameChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
                      placeholder="e.g., United States"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Enter the full country name. The slug will be automatically generated.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Slug *
                        <span className="text-xs text-gray-500 ml-2">(URL-friendly identifier)</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={regenerateSlug}
                          className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800"
                          title="Regenerate slug from name"
                        >
                          <RefreshCw className="h-3 w-3" />
                          Regenerate
                        </button>
                        <button
                          type="button"
                          onClick={copySlugToClipboard}
                          className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-gray-800"
                          title="Copy slug to clipboard"
                        >
                          <Copy className="h-3 w-3" />
                          Copy
                        </button>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={handleSlugChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black pr-32"
                        placeholder="e.g., united-states"
                        required
                      />
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {formData.slug.length > 0 ? `${formData.slug.length} chars` : "empty"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500">
                        Auto-generated from country name. You can edit it manually if needed.
                      </p>
                      {slugManuallyEdited && (
                        <span className="text-xs text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded">
                          Manually edited
                        </span>
                      )}
                      {formData.slug === originalSlug && (
                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          Original slug
                        </span>
                      )}
                    </div>
                    
                    {formData.slug && (
                      <div className="mt-2 p-2 bg-gray-50 rounded-lg border">
                        <p className="text-xs text-gray-600 mb-1">Preview URL:</p>
                        <code className="text-xs text-blue-600 break-all">
                          {window.location.origin}/country?slug={formData.slug}
                        </code>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Submarine Cable Image Section - UPDATED */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b">
                  Submarine Cable Information
                </h2>
                
                <div className="space-y-6">
                  {/* Image Upload Section */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Submarine Cable Image
                    </label>
                    
                    <div className="space-y-4">
                      {/* Upload Area */}
                      <div className={`border-2 border-dashed ${uploadingImage ? 'border-blue-400' : 'border-gray-300'} rounded-xl p-6 text-center transition-colors hover:border-blue-500 bg-gray-50`}>
                        <input
                          type="file"
                          id="image-upload"
                          accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                          onChange={handleImageUpload}
                          className="hidden"
                          disabled={uploadingImage || updating}
                        />
                        
                        <label htmlFor="image-upload" className={`cursor-pointer ${uploadingImage || updating ? 'opacity-50 cursor-not-allowed' : ''}`}>
                          {uploadingImage ? (
                            <div className="space-y-3">
                              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
                              <p className="text-sm text-gray-600">Uploading to Cloudinary...</p>
                              {uploadProgress > 0 && (
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${uploadProgress}%` }}
                                  ></div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <Upload className="h-10 w-10 text-gray-400 mx-auto" />
                              <p className="text-sm text-gray-600">Click to upload image</p>
                              <p className="text-xs text-gray-500">PNG, JPG, GIF, WEBP up to 10MB</p>
                            </div>
                          )}
                        </label>
                      </div>

                      {/* Image Preview */}
                      {previewImage && (
                        <div className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Preview</span>
                            <button
                              type="button"
                              onClick={handleRemoveImage}
                              className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
                              disabled={updating}
                            >
                              <X className="h-4 w-4" />
                              Remove
                            </button>
                          </div>
                          <div className="border rounded-xl overflow-hidden">
                            <img
                              src={previewImage}
                              alt="Submarine cable preview"
                              className="w-full h-64 object-contain bg-gray-100"
                              onError={() => {
                                setError("Failed to load image. Please re-upload.");
                                setPreviewImage(null);
                                setFormData(prev => ({ ...prev, submarineCableImage: "" }));
                                setImageFile(null);
                              }}
                            />
                          </div>
                          <div className="mt-2 text-xs text-gray-500">
                            {previewImage.includes('cloudinary.com') ? (
                              <span className="text-green-600">✓ Uploaded to Cloudinary</span>
                            ) : previewImage.startsWith('blob:') ? (
                              <span className="text-blue-600">New image ready to upload</span>
                            ) : (
                              <span className="text-blue-600">External image URL</span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Image URL Field (for external URLs) */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Or enter image URL
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={formData.submarineCableImage}
                            onChange={(e) => {
                              const url = e.target.value;
                              setFormData(prev => ({ ...prev, submarineCableImage: url }));
                              if (looksLikeUrl(url)) {
                                // Clean up blob URL if exists
                                if (previewImage && previewImage.startsWith('blob:')) {
                                  URL.revokeObjectURL(previewImage);
                                }
                                setPreviewImage(url);
                                setImageFile(null);
                              }
                            }}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
                            placeholder="https://example.com/image.jpg"
                            disabled={uploadingImage}
                          />
                          {formData.submarineCableImage && !previewImage && looksLikeUrl(formData.submarineCableImage) && (
                            <button
                              type="button"
                              onClick={() => {
                                // Clean up blob URL if exists
                                if (previewImage && previewImage.startsWith('blob:')) {
                                  URL.revokeObjectURL(previewImage);
                                }
                                setPreviewImage(formData.submarineCableImage);
                                setImageFile(null);
                              }}
                              className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition"
                              disabled={updating}
                            >
                              Preview
                            </button>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Enter a direct image URL or upload a file
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Cable Link Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <LinkIcon className="inline h-4 w-4 mr-1" />
                      Submarine Cable Link
                    </label>
                    <input
                      type="url"
                      value={formData.submarineCableLink}
                      onChange={(e) => setFormData({...formData, submarineCableLink: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
                      placeholder="https://submarinecablemap.com/..."
                      disabled={updating}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b">
                  Network Statistics
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { label: "Partners Range *", key: "partnersRange", placeholder: "100-200" },
                    { label: "IPv4 Peers Range", key: "Ipv4PeersRange", placeholder: "50-100" },
                    { label: "IPv6 Peers Range", key: "Ipv6PeersRange", placeholder: "20-50" },
                    { label: "IXP Partners Range", key: "IxpPartnersRange", placeholder: "10-20" },
                    { label: "IPv4 Gateways Range", key: "Ipv4GatewaysRange", placeholder: "5-10" },
                    { label: "IPv6 Gateways Range", key: "Ipv6GatewaysRange", placeholder: "2-5" },
                    { label: "Cloud Partners Range", key: "CloudPartnersRange", placeholder: "AWS, Azure, GCP" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label}
                      </label>
                      <input
                        type="text"
                        value={formData[field.key as keyof CountryFormData] as string}
                        onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
                        placeholder={field.placeholder}
                        required={field.label.includes('*')}
                        disabled={updating}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Min Service Latency Range
                    </label>
                    <input
                      type="text"
                      value={formData.minServiceLatencyRange}
                      onChange={(e) => setFormData({...formData, minServiceLatencyRange: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
                      placeholder="e.g., 10-20ms (mention ms if applicable)"
                      disabled={updating}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Avg Service Latency Range
                    </label>
                    <input
                      type="text"
                      value={formData.avgServiceLatencyRange}
                      onChange={(e) => setFormData({...formData, avgServiceLatencyRange: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
                      placeholder="e.g., 20-30ms (mention ms if applicable)"
                      disabled={updating}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.ddosProtection}
                      onChange={(e) => setFormData({...formData, ddosProtection: e.target.checked})}
                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      disabled={updating}
                    />
                    <span className="text-sm font-medium text-gray-700">
                      DDoS Protection Available
                    </span>
                  </label>
                </div>
              </div>

          
                
              <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b">
                  Detailed Information
                </h2>
                
                {[
                  { label: "Landline and Mobile", key: "features", rows: 3, placeholder: "Key features of your network infrastructure..." },
                  { label: "Our Services", key: "ourServices", rows: 3, placeholder: "Services offered to clients..." },
                  { label: "Country Internet", key: "integrationNote", rows: 3, placeholder: "Notes about integration process..." },
                  { label: "Why Choose Us", key: "whyChooseUs", rows: 4, placeholder: "What makes your offering unique..." },
                  { label: "Capabilities", key: "capabilities", rows: 4, placeholder: "Technical capabilities and expertise..." },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <textarea
                      rows={field.rows}
                      value={formData[field.key as keyof CountryFormData] as string}
                      onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none text-black"
                      placeholder={field.placeholder}
                      disabled={updating}
                    />
                  </div>
                ))}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Commercial Offer Days Range
                    </label>
                    <input
                      type="text"
                      value={formData.commercialOfferDateRange}
                      onChange={(e) => setFormData({...formData, commercialOfferDateRange: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
                      placeholder="e.g., 30-60 days"
                      disabled={updating}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Days Range
                    </label>
                    <input
                      type="text"
                      value={formData.deliveryDateRange}
                      onChange={(e) => setFormData({...formData, deliveryDateRange: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
                      placeholder="e.g., 30-60 days"
                      disabled={updating}
                    />
                  </div>
                </div>
              </div>

              {error && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-red-800">Error</h4>
                    <p className="text-sm text-red-600 mt-1">{error}</p>
                  </div>
                </div>
              )}

              {submitted && (
                <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-green-800">Success!</h4>
                    <p className="text-sm text-green-600 mt-1">
                      Country form updated successfully. Redirecting to dashboard...
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
                <button
                  type="submit"
                  disabled={updating || submitted || uploadingImage}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <RefreshCcw className="h-5 w-5" />
                  {updating ? "Updating..." : submitted ? "Updated!" : "Update & Resubmit for Review"}
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/country/dashboard")}
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition"
                  disabled={updating}
                >
                  Cancel
                </button>
                
                <button
                  type="button"
                  onClick={resetToOriginal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition"
                  disabled={updating}
                >
                  <History className="h-5 w-5" />
                  Reset Changes
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Update Guidelines
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Fields marked with * are mandatory</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Uploaded images will be stored on Cloudinary</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>External image URLs are also accepted</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Maximum image size: 10MB</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>When updated, status will reset to "pending" for admin review</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Rejection note (if any) will be cleared after update</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl shadow-lg p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-900 mb-3">Image Upload Status</h3>
              <div className="space-y-4">
                {uploadingImage ? (
                  <div className="flex items-center gap-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-900">Uploading...</p>
                      <div className="w-full bg-blue-100 rounded-full h-1.5 mt-1">
                        <div 
                          className="bg-blue-600 h-1.5 rounded-full transition-all"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ) : previewImage ? (
                  <div className="flex items-center gap-2">
                    {previewImage.includes('cloudinary.com') ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : previewImage.startsWith('blob:') ? (
                      <Upload className="h-5 w-5 text-blue-600" />
                    ) : (
                      <Link className="h-5 w-5 text-blue-600" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-blue-900">
                        {previewImage.includes('cloudinary.com') ? 'Uploaded to Cloudinary' : 
                         previewImage.startsWith('blob:') ? 'New image ready' : 'External URL'}
                      </p>
                      <p className="text-xs text-blue-700">
                        {imageFile ? `Will be uploaded when you submit` : 'Ready to use'}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <p className="text-sm text-yellow-900">No image uploaded</p>
                  </div>
                )}
              </div>
            </div>

            
            <div className="bg-yellow-50 rounded-2xl shadow-lg p-6 border border-yellow-100">
              <h3 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                <RefreshCcw className="h-5 w-5 text-yellow-600" />
                Important Notes
              </h3>
              <ul className="space-y-3 text-sm text-yellow-700">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-yellow-600 rounded-full mt-1.5"></div>
                  <span>Original submission ID: <code className="text-xs bg-yellow-100 px-1 py-0.5 rounded">{id}</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-yellow-600 rounded-full mt-1.5"></div>
                  <span>Original status: <span className="font-medium capitalize">{originalData?.status}</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-yellow-600 rounded-full mt-1.5"></div>
                  <span>Created: {originalData ? new Date(originalData.createdAt).toLocaleDateString() : 'N/A'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-yellow-600 rounded-full mt-1.5"></div>
                  <span>Last updated: {originalData ? new Date(originalData.updatedAt).toLocaleDateString() : 'N/A'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-yellow-600 rounded-full mt-1.5"></div>
                  <span>Images are uploaded to Cloudinary when you submit the form</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default EditCountryForm;