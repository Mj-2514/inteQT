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
  Link
} from "lucide-react";
import { useCountryAuth } from "../../context/AuthContext";

const API_BASE =import.meta.env.VITE_API_BASE;

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
  references: string[]; // Added references field
}

const CreateCountryForm = () => {
  const { user, token } = useCountryAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [newReference, setNewReference] = useState(""); // For adding new references

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
    references: [], // Initialize empty array
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
      setIsEditMode(true);
    }
  }, [id, token, user, navigate]);

  const fetchSubmission = async (submissionId: string) => {
    try {
      const res = await fetch(`${API_BASE}/api/countries/${submissionId}`, {
        headers: { "Authorization": `Bearer ${token}` }
      });

      if (res.ok) {
        const data = await res.json();
        setFormData({
          name: data.Countryname || data.name || "",
          slug: data.slug || "",
          partnersRange: data.partnersRange || "",
          Ipv4PeersRange: data.Ipv4PeersRange || "",
          Ipv6PeersRange: data.Ipv6PeersRange || "",
          IxpPartnersRange: data.IxpPartnersRange || "",
          Ipv4GatewaysRange: data.Ipv4GatewaysRange || "",
          Ipv6GatewaysRange: data.Ipv6GatewaysRange || "",
          CloudPartnersRange: data.CloudPartnersRange || "",
          ddosProtection: data.ddosProtection || false,
          minServiceLatencyRange: data.minServiceLatencyRange || "",
          avgServiceLatencyRange: data.avgServiceLatencyRange || "",
          features: data.features || "",
          ourServices: data.ourServices || "",
          commercialOfferDateRange: data.commercialOfferDateRange || "",
          deliveryDateRange: data.deliveryDateRange || "",
          integrationNote: data.integrationNote || "",
          whyChooseUs: data.whyChooseUs || "",
          capabilities: data.capabilities || "",
          submarineCableImage: data.submarineCableImage || "",
          submarineCableLink: data.submarineCableLink || "",
          references: data.references || [], // Load references
        });

        if (data.submarineCableImage && looksLikeUrl(data.submarineCableImage)) {
          setPreviewImage(data.submarineCableImage);
        }
      }
    } catch (err) {
      console.error("Failed to fetch submission:", err);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const url = `${API_BASE}/api/country/dashboard/submit`;
      
      console.log('Submitting to:', url);

      const payload = {
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
        references: formData.references.filter(ref => ref.trim() !== ''), // Include references
      };

      console.log('Payload:', payload);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log('Response:', data);

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit country form");
      }

      setSubmitted(true);
      setTimeout(() => {
        navigate("/country/dashboard");
      }, 1500);
    } catch (err: any) {
      console.error("Submit error:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDraft = async () => {
    setError(null);
    
    if (!formData.name.trim() || !formData.slug.trim()) {
      setError("Name and Slug are required even for draft");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        ...formData,
        status: "draft"
      };

      const res = await fetch(`${API_BASE}/api/countries/draft`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Draft saved successfully!");
        navigate("/country/dashboard");
      } else {
        const data = await res.json();
        throw new Error(data.message || "Failed to save draft");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
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

  // Handle adding a new reference
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

  // Handle removing a reference
  const handleRemoveReference = (index: number) => {
    setFormData(prev => ({
      ...prev,
      references: prev.references.filter((_, i) => i !== index)
    }));
  };

  // Handle clearing all references
  const handleClearReferences = () => {
    if (confirm("Are you sure you want to clear all references?")) {
      setFormData(prev => ({
        ...prev,
        references: []
      }));
    }
  };

  // Handle pasting multiple URLs
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
                Logged in as <span className="font-semibold">{user?.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <Globe className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {isEditMode ? "Edit Country Submission" : "Create New Country Submission"}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill in the details about your country's network infrastructure. All fields marked with * are required.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                      Country form submitted successfully. Redirecting...
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  {loading ? "Submitting..." : submitted ? "Submitted!" : "Submit for Review"}
                </button>

                <button
                  type="button"
                  onClick={handleSaveDraft}
                  disabled={loading || submitted}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="h-5 w-5" />
                  Save as Draft
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/country/dashboard")}
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Submission Guidelines
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Fields marked with * are mandatory</span>
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

            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-gray-600" />
                About Slugs
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong>What is a slug?</strong> A URL-friendly version of your country name.
                </p>
                <div className="bg-white p-3 rounded-lg border">
                  <p className="font-medium mb-1">Example:</p>
                  <p className="text-xs">Country Name: <span className="font-semibold">United States</span></p>
                  <p className="text-xs">Auto-generated Slug: <code className="text-blue-600">united-states</code></p>
                  <p className="text-xs mt-1">Resulting URL: <code className="text-blue-600">{window.location.origin}/country?slug=united-states</code></p>
                </div>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Slugs must be unique across all submissions</li>
                  <li>Automatically generated from country name</li>
                  <li>You can customize it if needed</li>
                  <li>Only lowercase letters, numbers, and hyphens allowed</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CreateCountryForm;