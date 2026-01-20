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
  History
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
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [newReference, setNewReference] = useState("");
  const [originalSlug, setOriginalSlug] = useState("");
  const [originalData, setOriginalData] = useState<SubmissionData | null>(null);
  const [showRejectionNote, setShowRejectionNote] = useState(false);

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
    
    // Use the correct API endpoint
    const res = await fetch(`${API_BASE}/api/country/dashboard/users/submission/${submissionId}`, {
      headers: { "Authorization": `Bearer ${token}` }
    });

    

    const data = await res.json();
   
    
    if (data.success) {
      const submission = data.submission;
      const permissions = data.permissions;
      
     
      
      // Use the permissions from API response instead of checking manually
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
      submarineCableImage: formData.submarineCableImage.trim(),
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

    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
      setFormData(prev => ({ ...prev, submarineCableImage: reader.result as string }));
    };
    reader.readAsDataURL(file);
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
      
      if (originalData.submarineCableImage && looksLikeUrl(originalData.submarineCableImage)) {
        setPreviewImage(originalData.submarineCableImage);
      }
      
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
                    />
                    <span className="text-sm font-medium text-gray-700">
                      DDoS Protection Available
                    </span>
                  </label>
                </div>
              </div>

              {/* References Section */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b">
                  References
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Add Reference URL
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newReference}
                        onChange={(e) => setNewReference(e.target.value)}
                        onPaste={handlePasteReferences}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
                        placeholder="https://example.com/report.pdf"
                      />
                      <button
                        type="button"
                        onClick={handleAddReference}
                        className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                        Add
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Paste multiple URLs separated by commas, semicolons, or new lines
                    </p>
                  </div>

                  {formData.references.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-gray-700">
                          References ({formData.references.length})
                        </h3>
                        <button
                          type="button"
                          onClick={handleClearReferences}
                          className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1"
                        >
                          <Trash2 className="h-3 w-3" />
                          Clear All
                        </button>
                      </div>
                      <div className="space-y-2 max-h-60 overflow-y-auto p-2 border rounded-lg">
                        {formData.references.map((ref, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100">
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                              <Link className="h-4 w-4 text-gray-400 flex-shrink-0" />
                              <a 
                                href={ref} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:text-blue-800 truncate"
                                title={ref}
                              >
                                {ref}
                              </a>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveReference(index)}
                              className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                              title="Remove reference"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b">
                  Submarine Cable Information
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Submarine Cable Image
                    </label>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-center w-full">
                          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="h-8 w-8 text-gray-400 mb-2" />
                              <p className="text-sm text-gray-500">Click to upload image</p>
                              <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                            </div>
                            <input
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={handleImageUpload}
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Or enter image URL below</p>
                      </div>
                      
                      {previewImage && (
                        <div className="md:w-48">
                          <div className="h-32 w-full rounded-xl overflow-hidden border">
                            <img
                              src={previewImage}
                              alt="Preview"
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-2 text-center">Preview</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image URL
                    </label>
                    <input
                      type="text"
                      value={formData.submarineCableImage}
                      onChange={(e) => {
                        setFormData({...formData, submarineCableImage: e.target.value});
                        if (looksLikeUrl(e.target.value)) {
                          setPreviewImage(e.target.value);
                        }
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

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
                  disabled={updating || submitted}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <RefreshCcw className="h-5 w-5" />
                  {updating ? "Updating..." : submitted ? "Updated!" : "Update & Resubmit for Review"}
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/country/dashboard")}
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition"
                >
                  Cancel
                </button>
                
                <button
                  type="button"
                  onClick={resetToOriginal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition"
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
                  <span>When updated, status will reset to "pending" for admin review</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Rejection note (if any) will be cleared after update</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Slug is auto-generated but can be customized</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Ranges should be in format "min-max" or descriptive</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>URLs must be valid (start with http:// or https://)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Add references to supporting documents or reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Submissions will be reviewed by admin before publishing</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl shadow-lg p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-900 mb-3">Status Information</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-900">Pending</span>
                  </div>
                  <p className="text-xs text-blue-700">Awaiting admin review</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-900">Approved</span>
                  </div>
                  <p className="text-xs text-blue-700">Published on platform</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-900">Rejected</span>
                  </div>
                  <p className="text-xs text-blue-700">Will include feedback for edits</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-gray-600" />
                About References
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong>What are references?</strong> URLs to supporting documents, reports, or related resources.
                </p>
                <div className="bg-white p-3 rounded-lg border">
                  <p className="font-medium mb-1">Examples:</p>
                  <ul className="text-xs space-y-1">
                    <li>• https://example.com/whitepaper.pdf</li>
                    <li>• https://stats.example.com/report-2024</li>
                    <li>• https://docs.example.com/technical-specs</li>
                  </ul>
                </div>
                <ul className="list-disc pl-4 space-y-1">
                  <li>URLs must start with http:// or https://</li>
                  <li>You can add multiple references</li>
                  <li>Paste multiple URLs at once (separated by commas or new lines)</li>
                  <li>References help validate your submission</li>
                </ul>
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
                  <span>After update, admin will need to review your submission again</span>
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