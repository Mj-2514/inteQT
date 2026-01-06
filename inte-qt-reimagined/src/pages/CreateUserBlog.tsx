import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Send, 
  Info, 
  ExternalLink,
  Upload,
  Link,
  FileText,
  Image as ImageIcon,
  Video,
  X
} from "lucide-react";
import Navbar from "../components/Navbar";

const API_BASE = import.meta.env.VITE_API_BASE;

// Helpers
function countWords(text = "") {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
}

function looksLikeUrl(s: string) {
  if (!s) return false;
  try {
    const u = new URL(s);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function isVideoFile(f?: File | null) {
  return !!(f && f.type && f.type.startsWith("video"));
}

function isImageFile(f?: File | null) {
  return !!(f && f.type && f.type.startsWith("image"));
}

function revokeIfBlobUrl(url?: string | null) {
  if (!url) return;
  try {
    if (url.startsWith("blob:")) URL.revokeObjectURL(url);
  } catch (e) {
    // ignore
  }
}

const UserCreateBlog: React.FC = () => {
  const navigate = useNavigate();
  
  // Get user from localStorage
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string>("");
  
  useEffect(() => {
    const userData = localStorage.getItem("user");
    const userToken = localStorage.getItem("token");
    
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch {
        setUser(null);
      }
    }
    
    if (userToken) {
      setToken(userToken);
    }
  }, []);

  // Text fields
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorLinkedin, setAuthorLinkedin] = useState("");
  const [tags, setTags] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [description, setDescription] = useState("");
  const [conclusion, setConclusion] = useState("");

  // Images/files
  const [introImageFile, setIntroImageFile] = useState<File | null>(null);
  const [descImageFile, setDescImageFile] = useState<File | null>(null);

  // URLs
  const [introImageUrl, setIntroImageUrl] = useState<string>("");
  const [descImageUrl, setDescImageUrl] = useState<string>("");

  // Previews
  const [introPreview, setIntroPreview] = useState<string | null>(null);
  const [descPreview, setDescPreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Update author name when user loads
  useEffect(() => {
    if (user?.name) {
      setAuthorName(user.name);
    }
  }, [user]);

  // Word counts
  const introWords = useMemo(() => countWords(introduction), [introduction]);
  const descWords = useMemo(() => countWords(description), [description]);
  const conclWords = useMemo(() => countWords(conclusion), [conclusion]);

  // Validate form
  const validate = () => {
    if (!title.trim()) return "Title is required.";
    if (!authorName.trim()) return "Author name is required.";
    if (!introduction.trim()) return "Introduction is required.";
    if (!description.trim()) return "Description is required.";
    if (!conclusion.trim()) return "Conclusion is required.";
    
    // Description media is required (either file OR URL)
    if (!descImageFile && !descImageUrl.trim()) {
      return "Description image or video is required (file or URL).";
    }
    
    // Validate URLs if provided
    if (introImageUrl && !looksLikeUrl(introImageUrl)) {
      return "Intro media URL is not valid. Must start with http:// or https://";
    }
    if (descImageUrl && !looksLikeUrl(descImageUrl)) {
      return "Description media URL is not valid. Must start with http:// or https://";
    }
    
    return null;
  };

  // Handle file selection
  const handleFile = (
    f: File | null,
    setterFile: (f: File | null) => void,
    setterPreview: (p: string | null) => void,
    clearUrlSetter?: (v: string) => void
  ) => {
    // Revoke previous blob URL
    if (!f) {
      if (setterPreview) {
        revokeIfBlobUrl(setterPreview);
        setterPreview(null);
      }
      setterFile(null);
      return;
    }
    
    // Validate file size (10MB)
    if (f.size > 10 * 1024 * 1024) {
      setError(`File "${f.name}" is too large. Maximum size is 10MB.`);
      return;
    }
    
    // Validate file type
    if (!f.type.startsWith('image/') && !f.type.startsWith('video/')) {
      setError(`File "${f.name}" is not a valid image or video.`);
      return;
    }
    
    setError(null);
    
    // Create preview URL
    const url = URL.createObjectURL(f);
    setterFile(f);
    setterPreview(url);
    if (clearUrlSetter) clearUrlSetter("");
  };

  // Handle URL changes
  const handleUrlChange = (
    url: string,
    setterUrl: (v: string) => void,
    clearFileSetter?: (f: File | null) => void,
    setterPreview?: (p: string | null) => void
  ) => {
    setterUrl(url);
    setError(null);
    
    if (clearFileSetter) {
      if (clearFileSetter === setIntroImageFile && introImageFile) {
        revokeIfBlobUrl(introPreview);
      } else if (clearFileSetter === setDescImageFile && descImageFile) {
        revokeIfBlobUrl(descPreview);
      }
      clearFileSetter(null);
    }
    
    if (!url.trim()) {
      setterPreview && setterPreview(null);
      return;
    }
    
    // Validate URL format
    if (!looksLikeUrl(url)) {
      setError("Please enter a valid URL (starting with http:// or https://)");
      return;
    }
    
    setterPreview && setterPreview(url);
  };

  // Clean up blob URLs on unmount
  useEffect(() => {
    return () => {
      revokeIfBlobUrl(introPreview);
      revokeIfBlobUrl(descPreview);
    };
  }, [introPreview, descPreview]);

  // Clear media
  const clearIntroMedia = () => {
    revokeIfBlobUrl(introPreview);
    setIntroImageFile(null);
    setIntroImageUrl("");
    setIntroPreview(null);
  };

  const clearDescMedia = () => {
    revokeIfBlobUrl(descPreview);
    setDescImageFile(null);
    setDescImageUrl("");
    setDescPreview(null);
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    
    // Check authentication
    if (!token) {
      setError("You must be logged in to submit a blog. Please login first.");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }
    
    const v = validate();
    if (v) {
      setError(v);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setLoading(true);

    try {
      const fd = new FormData();

      // Prepare data object exactly as backend expects
      // IMPORTANT: tags must be sent as a string (comma-separated) not an array
      const blogData = {
        title: title.trim(),
        authorName: authorName.trim(),
        authorLinkedin: authorLinkedin.trim(),
        tags: tags.trim(), // Send as comma-separated string (backend expects this)
        introduction: introduction.trim(),
        description: description.trim(),
        conclusion: conclusion.trim(),
        introImageUrl: introImageUrl.trim(),
        descriptionImageUrl: descImageUrl.trim(),
        published: false
      };

      

      // Add data as JSON string (backend expects 'data' field)
      fd.append("data", JSON.stringify(blogData));

      // Add files with exact field names backend expects
      if (introImageFile) {
        fd.append("introImage", introImageFile);
        
      }
      if (descImageFile) {
        fd.append("descriptionImage", descImageFile);
        
      }

      

      const res = await fetch(`${API_BASE}/api/blogs/add`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: fd,
      });

      ( res.status);
      ( Object.fromEntries(res.headers.entries()));
      
      const responseText = await res.text();
      
      
      let data: any;
      try {
        data = responseText ? JSON.parse(responseText) : {};
        
      } catch (parseError) {
        console.error("Response parse error:", parseError, "Raw text:", responseText);
        throw new Error(`Server returned invalid response. Status: ${res.status}`);
      }

      if (!res.ok) {
        const errorMsg = data?.message || 
                        data?.error || 
                        `Server error: ${res.status} - ${responseText.substring(0, 100)}...`;
        throw new Error(errorMsg);
      }

      setSubmitted(true);
      setSuccess(data.message || "Blog submitted successfully!");

      // Revoke blob URLs
      revokeIfBlobUrl(introPreview);
      revokeIfBlobUrl(descPreview);

      // Clear form after successful submission
      setTimeout(() => {
        setTitle("");
        setAuthorLinkedin("");
        setTags("");
        setIntroduction("");
        setDescription("");
        setConclusion("");
        clearIntroMedia();
        clearDescMedia();
        
        // Redirect to dashboard after 3 seconds
        setTimeout(() => navigate("/user-dashboard"), 3000);
      }, 1000);
      
    } catch (err: any) {
      console.error("Submit error details:", err);
      setError(err?.message || "Submission failed. Please check console for details.");
    } finally {
      setLoading(false);
    }
  };

  // Word counter bar
  const wordBar = (used: number, max: number, colorActive: string, label: string) => {
    const ratio = Math.min(used / max, 1);
    const percent = Math.round(ratio * 100);
    const isOver = used > max;
    return (
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span>{label}</span>
          <span className={isOver ? "text-red-600 font-medium" : "text-gray-500"}>
            {used} / {max}
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-gray-200">
          <div
            className={`h-1.5 rounded-full transition-all ${isOver ? "bg-red-500" : colorActive}`}
            style={{ width: `${percent}%` }}
          />
        </div>
        {isOver && (
          <p className="flex items-center gap-1 text-[11px] text-red-600">
            <AlertTriangle className="h-3 w-3" />
            Over the limit — trim this section.
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 pb-10 pt-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {/* Main form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-lg md:p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Create New Blog</h1>
                <p className="text-gray-600 mt-2">
                  Share your knowledge with the community. Your blog will be reviewed before publishing.
                </p>
              </div>
              
              {/* Status Messages */}
              {(error || success) && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 rounded-xl p-4 ${error ? 'border-red-200 bg-red-50 text-red-800' : 'border-green-200 bg-green-50 text-green-800'}`}
                >
                  <div className="flex items-start gap-3">
                    {error ? (
                      <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium">{error ? "Error" : "Success"}</p>
                      <p className="text-sm mt-1">{error || success}</p>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Blog Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Understanding SD-WAN vs MPLS in Enterprise Networks"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Make it catchy and descriptive
                  </p>
                </div>

                {/* Author + LinkedIn */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900">
                      Author Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900">
                      Author LinkedIn
                    </label>
                    <input
                      value={authorLinkedin}
                      onChange={(e) => setAuthorLinkedin(e.target.value)}
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="https://linkedin.com/in/..."
                    />
                    <p className="mt-1 text-xs text-gray-500">Optional but recommended</p>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Tags (comma separated)
                  </label>
                  <input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="sd-wan, automation, devops, networking"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Enter tags separated by commas. Example: "networking, sd-wan, cloud"
                  </p>
                </div>

                {/* Introduction */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-sm font-semibold text-gray-900">
                      Introduction <span className="text-red-500">*</span>
                    </label>
                    <span className="text-xs font-medium text-gray-500">
                      Hook your readers
                    </span>
                  </div>
                  <textarea
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                    rows={5}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Start with a compelling hook. Explain why this topic matters and what readers will learn..."
                    required
                  />
                  {wordBar(introWords, 330, "bg-blue-500", "Introduction words")}
                </div>

                {/* Intro Image / Video */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Intro Image / Video (Optional)
                  </label>
                  <div className="space-y-3">
                    {/* File Upload Option */}
                    <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-4 text-center transition-colors hover:border-blue-300 hover:bg-blue-50">
                      <input
                        type="file"
                        id="intro-file"
                        accept="image/*,video/*"
                        onChange={(e) =>
                          handleFile(
                            e.target.files?.[0] || null,
                            setIntroImageFile,
                            setIntroPreview,
                            setIntroImageUrl
                          )
                        }
                        className="hidden"
                      />
                      <label htmlFor="intro-file" className="cursor-pointer">
                        <Upload className="mx-auto h-8 w-8 text-gray-400" />
                        <p className="mt-2 text-sm font-medium text-gray-700">
                          Upload image or video
                        </p>
                        <p className="text-xs text-gray-500">
                          Max 10MB • Images: JPG, PNG, GIF • Videos: MP4, WebM
                        </p>
                      </label>
                    </div>

                    {/* OR Separator */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Or</span>
                      </div>
                    </div>

                    {/* URL Option */}
                    <div>
                      <div className="flex items-center gap-2">
                        <Link className="h-4 w-4 text-gray-400" />
                        <input
                          value={introImageUrl}
                          onChange={(e) =>
                            handleUrlChange(
                              e.target.value,
                              setIntroImageUrl,
                              setIntroImageFile,
                              setIntroPreview
                            )
                          }
                          placeholder="Paste a hosted image or video URL"
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        Use direct links from services like Imgur, Giphy, YouTube, Vimeo, etc.
                      </p>
                    </div>
                  </div>

                  {/* Preview */}
                  {introPreview && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-4"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Preview</span>
                        <button
                          type="button"
                          onClick={clearIntroMedia}
                          className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1"
                        >
                          <X className="h-3 w-3" />
                          Remove
                        </button>
                      </div>
                      <div className="overflow-hidden rounded-lg border border-gray-200">
                        {isVideoFile(introImageFile) || introImageUrl.includes('video') ? (
                          <video
                            src={introPreview}
                            controls
                            className="h-48 w-full object-cover"
                          />
                        ) : (
                          <img
                            src={introPreview}
                            alt="Intro preview"
                            className="h-48 w-full object-cover"
                          />
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                        {isVideoFile(introImageFile) || introImageUrl.includes('video') ? (
                          <Video className="h-3 w-3" />
                        ) : (
                          <ImageIcon className="h-3 w-3" />
                        )}
                        <span>
                          {isVideoFile(introImageFile) || introImageUrl.includes('video') ? "Video" : "Image"}
                          {introImageFile && ` • ${introImageFile.name}`}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-sm font-semibold text-gray-900">
                      Description <span className="text-red-500">*</span>
                    </label>
                    <span className="text-xs font-medium text-gray-500">
                      The main content
                    </span>
                  </div>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={10}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Break down the concept with sections, examples, code snippets, and use cases..."
                    required
                  />
                  {wordBar(descWords, 1500, "bg-purple-500", "Description words")}
                  <p className="mt-2 text-xs text-gray-500">
                    Tip: Use headings, bullet points, and examples to make your content scannable.
                  </p>
                </div>

                {/* Description Image / Video */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Description Image / Video <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {/* File Upload Option */}
                    <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-4 text-center transition-colors hover:border-blue-300 hover:bg-blue-50">
                      <input
                        type="file"
                        id="desc-file"
                        accept="image/*,video/*"
                        onChange={(e) =>
                          handleFile(
                            e.target.files?.[0] || null,
                            setDescImageFile,
                            setDescPreview,
                            setDescImageUrl
                          )
                        }
                        className="hidden"
                      />
                      <label htmlFor="desc-file" className="cursor-pointer">
                        <Upload className="mx-auto h-8 w-8 text-gray-400" />
                        <p className="mt-2 text-sm font-medium text-gray-700">
                          Upload image or video (Required)
                        </p>
                        <p className="text-xs text-gray-500">
                          Max 10MB • Images: JPG, PNG, GIF • Videos: MP4, WebM
                        </p>
                      </label>
                    </div>

                    {/* OR Separator */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Or</span>
                      </div>
                    </div>

                    {/* URL Option */}
                    <div>
                      <div className="flex items-center gap-2">
                        <Link className="h-4 w-4 text-gray-400" />
                        <input
                          value={descImageUrl}
                          onChange={(e) =>
                            handleUrlChange(
                              e.target.value,
                              setDescImageUrl,
                              setDescImageFile,
                              setDescPreview
                            )
                          }
                          placeholder="Paste a hosted image or video URL (Required)"
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        Required: This will be displayed with your main content
                      </p>
                    </div>
                  </div>

                  {/* Preview */}
                  {descPreview && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-4"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Preview</span>
                        <button
                          type="button"
                          onClick={clearDescMedia}
                          className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1"
                        >
                          <X className="h-3 w-3" />
                          Remove
                        </button>
                      </div>
                      <div className="overflow-hidden rounded-lg border border-gray-200">
                        {isVideoFile(descImageFile) || descImageUrl.includes('video') ? (
                          <video
                            src={descPreview}
                            controls
                            className="h-48 w-full object-cover"
                          />
                        ) : (
                          <img
                            src={descPreview}
                            alt="Description preview"
                            className="h-48 w-full object-cover"
                          />
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                        {isVideoFile(descImageFile) || descImageUrl.includes('video') ? (
                          <Video className="h-3 w-3" />
                        ) : (
                          <ImageIcon className="h-3 w-3" />
                        )}
                        <span>
                          {isVideoFile(descImageFile) || descImageUrl.includes('video') ? "Video" : "Image"}
                          {descImageFile && ` • ${descImageFile.name}`}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Conclusion */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-sm font-semibold text-gray-900">
                      Conclusion <span className="text-red-500">*</span>
                    </label>
                    <span className="text-xs font-medium text-gray-500">
                      Wrap it up nicely
                    </span>
                  </div>
                  <textarea
                    value={conclusion}
                    onChange={(e) => setConclusion(e.target.value)}
                    rows={5}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Summarize key takeaways, provide actionable next steps, and invite discussion..."
                    required
                  />
                  {wordBar(conclWords, 650, "bg-green-500", "Conclusion words")}
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-600">
                        {submitted ? (
                          <span className="flex items-center gap-2 text-green-600">
                            <CheckCircle2 className="h-4 w-4" />
                            Blog submitted! Redirecting to dashboard...
                          </span>
                        ) : (
                          "Your blog will be reviewed by admins before publishing."
                        )}
                      </p>
                    </div>
                    <button
                      type="submit"
                      disabled={loading || submitted || !token}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:from-blue-700 hover:to-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Clock className="h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : submitted ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" />
                          Submitted!
                        </>
                      ) : !token ? (
                        "Please Login First"
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Submit for Review
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Guidelines Card */}
              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Writing Guidelines</h2>
                </div>
                
                <div className="space-y-5">
                  <div className="rounded-xl bg-blue-50 p-4">
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-900">
                      <Info className="h-4 w-4" />
                      Word Limits
                    </h3>
                    <ul className="space-y-3 text-sm text-blue-800">
                      <li className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <FileText className="h-3 w-3" />
                          Introduction
                        </span>
                        <span className="font-semibold">≤ 330 words</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <FileText className="h-3 w-3" />
                          Description
                        </span>
                        <span className="font-semibold">≤ 1500 words</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <FileText className="h-3 w-3" />
                          Conclusion
                        </span>
                        <span className="font-semibold">≤ 650 words</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-purple-50 p-4">
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-purple-900">
                      <Info className="h-4 w-4" />
                      Media Requirements
                    </h3>
                    <ul className="space-y-2 text-sm text-purple-800">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>Intro media is optional but recommended</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span className="font-semibold">Description media is required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>Supported: Images, GIFs, Videos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>Max file size: 10MB</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-amber-50 p-4">
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-amber-900">
                      <Info className="h-4 w-4" />
                      Quality Tips
                    </h3>
                    <ul className="space-y-2 text-sm text-amber-800">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>Use clear headings and subheadings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>Include code examples where relevant</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>Cite sources and references</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>Proofread for grammar and spelling</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h3 className="mb-2 text-sm font-semibold text-gray-900">Need Help?</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      Check out our comprehensive writing guide for detailed tips and examples.
                    </p>
                    <button
                      type="button"
                      onClick={() => window.open("/writing-guide", "_blank")}
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      View Writing Guide
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">
                <h3 className="mb-4 text-sm font-semibold text-gray-900">Current Stats</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Introduction</span>
                      <span className={introWords > 330 ? "font-semibold text-red-600" : "font-medium"}>
                        {introWords} / 330
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200">
                      <div 
                        className={`h-1.5 rounded-full ${introWords > 330 ? 'bg-red-500' : 'bg-blue-500'}`}
                        style={{ width: `${Math.min((introWords / 330) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Description</span>
                      <span className={descWords > 1500 ? "font-semibold text-red-600" : "font-medium"}>
                        {descWords} / 1500
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200">
                      <div 
                        className={`h-1.5 rounded-full ${descWords > 1500 ? 'bg-red-500' : 'bg-purple-500'}`}
                        style={{ width: `${Math.min((descWords / 1500) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Conclusion</span>
                      <span className={conclWords > 650 ? "font-semibold text-red-600" : "font-medium"}>
                        {conclWords} / 650
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200">
                      <div 
                        className={`h-1.5 rounded-full ${conclWords > 650 ? 'bg-red-500' : 'bg-green-500'}`}
                        style={{ width: `${Math.min((conclWords / 650) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-gray-700">Total Words:</span>
                      <span className="font-semibold text-gray-900">
                        {introWords + descWords + conclWords}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default UserCreateBlog;