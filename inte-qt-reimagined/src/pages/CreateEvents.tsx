import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Tag, AlertTriangle, CheckCircle2, Link as LinkIcon, LogOut } from "lucide-react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const API_BASE = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inteqt.onrender.com";

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

function isGifFile(f?: File | null) {
  return !!(f && f.type && f.type === "image/gif");
}

function revokeIfBlobUrl(url?: string | null) {
  if (!url) return;
  try {
    if (url.startsWith("blob:")) URL.revokeObjectURL(url);
  } catch (e) {
    // ignore
  }
}

const CreateEvent: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  // Basic event info
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [eventType, setEventType] = useState("meeting");
  const [tags, setTags] = useState("");

  // Media handling
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaUrl, setMediaUrl] = useState<string>("");
  const [mediaType, setMediaType] = useState<string>("none");
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [isVideo, setIsVideo] = useState(false);
  const [isGif, setIsGif] = useState(false);

  // Linked post URL
  const [linkedPostUrl, setLinkedPostUrl] = useState("");

  // Authentication state
  const [user, setUser] = useState<any>(null);
  const [authChecked, setAuthChecked] = useState(false);

  // UI states
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Event type options
  const eventTypes = [
    { value: "conference", label: "Conference" },
    { value: "workshop", label: "Workshop" },
    { value: "meeting", label: "Meeting" },
    { value: "seminar", label: "Seminar" },
    { value: "networking", label: "Networking" },
    { value: "webinar", label: "Webinar" },
    { value: "hackathon", label: "Hackathon" },
    { value: "other", label: "Other" },
  ];

  // Media type options
  const mediaTypes = [
    { value: "none", label: "None" },
    { value: "image", label: "Image" },
    { value: "video", label: "Video" },
    { value: "gif", label: "GIF" },
  ];

  // Check authentication on component mount
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");
      
      console.log("Token exists:", !!token);
      console.log("User exists:", !!storedUser);
      
      if (!token) {
        console.log("No token found, redirecting to login");
        navigate("/login");
        return;
      }
      
      if (storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          setUser(userData);
          
          // Check if user is admin
          if (!userData.isAdmin) {
            setError("Access denied: Admin privileges required");
            setTimeout(() => navigate("/"), 2000);
          }
        } catch (e) {
          console.error("Error parsing user data:", e);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
        }
      }
      
      setAuthChecked(true);
    };
    
    checkAuth();
  }, [navigate]);

  // Test token with backend
  const testTokenWithBackend = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token to test");
      return;
    }

    try {
      console.log("Testing token with backend...");
      
      // Try different endpoints
      const endpoints = [
        `${API_BASE}/api/events/test-auth`,
        `${API_BASE}/api/auth/verify`, 
        `${API_BASE}/api/auth/me`
      ];
      
      for (const endpoint of endpoints) {
        try {
          const res = await fetch(endpoint, {
            headers: { Authorization: `Bearer ${token}` }
          });
          
          console.log(`Endpoint ${endpoint}: ${res.status}`);
          
          if (res.ok) {
            const data = await res.json();
            console.log("Success at endpoint:", endpoint, data);
            return { success: true, data };
          }
        } catch (err) {
          console.log(`Endpoint ${endpoint} failed:`, err.message);
        }
      }
      
      return { success: false, message: "All endpoints failed" };
      
    } catch (err) {
      console.error("Test failed:", err);
      return { success: false, message: err.message };
    }
  };

  // Auto-detect media type from file
  useEffect(() => {
    if (mediaFile) {
      if (isVideoFile(mediaFile)) {
        setMediaType("video");
        setIsVideo(true);
        setIsGif(false);
      } else if (isGifFile(mediaFile)) {
        setMediaType("gif");
        setIsVideo(false);
        setIsGif(true);
      } else {
        setMediaType("image");
        setIsVideo(false);
        setIsGif(false);
      }
    } else if (mediaUrl) {
      // If URL is provided, default to image type for preview
      if (!mediaType || mediaType === "none") {
        setMediaType("image");
      }
    }
  }, [mediaFile, mediaUrl]);

  const validate = () => {
    if (!title.trim()) return "Title is required.";
    if (!description.trim()) return "Description is required.";
    if (!startDate) return "Start date is required.";
    if (!endDate) return "End date is required.";
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (end <= start) return "End date must be after start date.";
    
    if (!location.trim()) return "Location is required.";
    if (!city.trim()) return "City is required.";
    
    // Validate media
    if (mediaType !== "none" && !mediaFile && !mediaUrl) {
      return "Media file or URL is required when media type is selected.";
    }
    
    // Validate linked post URL if provided
    if (linkedPostUrl && !looksLikeUrl(linkedPostUrl)) {
      return "Linked post URL is not valid.";
    }

    return null;
  };

  // Handle file selection
  const handleFile = (f: File | null) => {
    // Clean up previous blob URL
    if (mediaPreview && mediaPreview.startsWith("blob:")) {
      revokeIfBlobUrl(mediaPreview);
    }

    setMediaFile(f);

    if (!f) {
      setMediaPreview(null);
      return;
    }

    const url = URL.createObjectURL(f);
    setMediaPreview(url);
    setMediaUrl(""); // Clear URL when file is selected
  };

  // Handle URL change
  const handleUrlChange = (url: string) => {
    setMediaUrl(url);
    
    // Clean up previous blob URL
    if (mediaPreview && mediaPreview.startsWith("blob:")) {
      revokeIfBlobUrl(mediaPreview);
    }
    
    if (!url) {
      setMediaPreview(null);
      setMediaFile(null);
      if (mediaType === "none") {
        setMediaType("none");
      }
      return;
    }
    
    setMediaPreview(url);
    setMediaFile(null);
    // If media type is still none, set it to image
    if (mediaType === "none") {
      setMediaType("image");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleSubmit = async () => {
  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", description);
    formData.append("startDate", startDate);
  formData.append("endDate", endDate);
  formData.append("location", location || "");
  formData.append("mediaType", mediaType);

  // ✅ FILE UPLOAD
  if (mediaFile && mediaType !== "none") {
    formData.append("file", mediaFile); // 🔥 MATCHES BACKEND
  }

  // ✅ URL MEDIA
  if (!mediaFile && mediaUrl && mediaType !== "none") {
    formData.append("introMedia", mediaUrl.trim());
  }

  try {
    const res = await fetch("/api/events/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to create event");
    }

    console.log("Event created:", data.event);
  } catch (err: any) {
    console.error("Submit failed:", err.message);
  }
};


  // Show loading while checking auth
  if (!authChecked) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Show error if not admin
  if (error && error.includes("Access denied")) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center max-w-md p-6 bg-card rounded-xl border border-border">
          <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
          <p className="text-muted-foreground mb-4">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-10 pt-20 md:pt-24">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 left-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/30" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl dark:bg-indigo-500/30" />
        </div>

        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 text-sky-500" />
              <span>Admin · Event Creator</span>
            </div>
            <h1 className="text-2xl font-semibold md:text-3xl">Create a New Event</h1>
            <p className="text-xs md:text-sm text-muted-foreground">
              Create and publish events immediately. All events are published instantly for admin.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {user && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="hidden md:inline">Logged in as: {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  <LogOut className="h-3 w-3" />
                  Logout
                </button>
              </div>
            )}
            <button
              onClick={() => navigate("/event/admin-dashboard")}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Back to Events
            </button>
            <button
              onClick={() => navigate("/event-admin-dashboard")}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Dashboard
            </button>
            {/* Debug button */}
            <button
              onClick={testTokenWithBackend}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Test Backend Auth
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid gap-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.1fr)]"
        >
          <div className="rounded-3xl border border-border bg-card p-5 shadow-md md:p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Title */}
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Event Title <span className="text-destructive">*</span>
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                  placeholder="Annual Tech Conference 2024"
                  required
                  maxLength={200}
                />
                <p className="mt-1 text-[11px] text-muted-foreground">Max 200 characters</p>
              </div>

              {/* Event Type and Dates */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Event Type <span className="text-destructive">*</span>
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 focus:border-primary focus:ring-1 focus:ring-primary/40"
                  >
                    {eventTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">Tags (comma separated)</label>
                  <input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                    placeholder="tech, networking, innovation"
                  />
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Start Date & Time <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 focus:border-primary focus:ring-1 focus:ring-primary/40"
                    required
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    End Date & Time <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 focus:border-primary focus:ring-1 focus:ring-primary/40"
                    required
                  />
                </div>
              </div>

              {/* Location */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    City <span className="text-destructive">*</span>
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                    placeholder="New York"
                    required
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Location/Venue <span className="text-destructive">*</span>
                  </label>
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                    placeholder="Convention Center, 123 Main St"
                    required
                  />
                </div>
              </div>

              {/* Linked Post URL */}
              <div>
                <label className="mb-1 block text-sm font-medium flex items-center gap-1">
                  <LinkIcon className="h-4 w-4" />
                  Linked Post URL (Optional)
                </label>
                <input
                  type="url"
                  value={linkedPostUrl}
                  onChange={(e) => setLinkedPostUrl(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                  placeholder="https://blog.example.com/related-post"
                />
                <p className="mt-1 text-[11px] text-muted-foreground">
                  Link to a related blog post, article, or external resource
                </p>
              </div>

              {/* Description */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="mb-1 block text-sm font-medium">
                    Event Description <span className="text-destructive">*</span>
                  </label>
                </div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                  placeholder="Describe the event details, agenda, speakers, and what attendees can expect..."
                  required
                />
              </div>

              {/* Media Section */}
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Media Type
                </label>
                <div className="grid gap-4 md:grid-cols-2">
                  <select
                    value={mediaType}
                    onChange={(e) => {
                      setMediaType(e.target.value);
                      if (e.target.value === "none") {
                        setMediaFile(null);
                        setMediaUrl("");
                        if (mediaPreview && mediaPreview.startsWith("blob:")) {
                          revokeIfBlobUrl(mediaPreview);
                        }
                        setMediaPreview(null);
                      }
                    }}
                    className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 focus:border-primary focus:ring-1 focus:ring-primary/40"
                  >
                    {mediaTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>

                  {mediaType !== "none" && (
                    <div className="text-[11px] text-muted-foreground">
                      Select {mediaType === "video" ? "a video" : mediaType === "gif" ? "a GIF" : "an image"} file or provide URL
                    </div>
                  )}
                </div>
              </div>

              {/* Media Upload/URL */}
              {mediaType !== "none" && (
                <div className="grid gap-4 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-center">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)} {mediaType === "video" ? "" : "File"}
                      {mediaType !== "none" && <span className="text-destructive">*</span>}
                    </label>
                    <input
                      type="file"
                      accept={mediaType === "video" ? "video/*" : mediaType === "gif" ? "image/gif" : "image/*"}
                      onChange={(e) => handleFile(e.target.files?.[0] || null)}
                      className="block w-full text-xs text-muted-foreground file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-primary-foreground hover:file:bg-primary/90"
                    />
                    <p className="mt-1 text-[11px] text-muted-foreground">Or use URL below</p>

                    <div className="mt-2">
                      <label className="mb-1 block text-[12px] font-medium">
                        Media URL
                      </label>
                      <input
                        value={mediaUrl}
                        onChange={(e) => handleUrlChange(e.target.value)}
                        placeholder={`https://example.com/${mediaType}.${mediaType === "video" ? "mp4" : mediaType === "gif" ? "gif" : "jpg"}`}
                        className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                      />
                    </div>
                  </div>

                  {mediaPreview && (
                    <div className="overflow-hidden rounded-2xl border border-border bg-muted">
                      {isVideo ? (
                        <video src={mediaPreview} controls className="max-h-40 w-full object-cover" />
                      ) : (
                        <img src={mediaPreview} alt="Media preview" className="max-h-40 w-full object-cover" />
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Error Display */}
              {error && (
                <div className="flex items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                  <AlertTriangle className="mt-0.5 h-4 w-4" />
                  <p>{error}</p>
                </div>
              )}

              {/* Success Display */}
              {submitted && !error && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-500">
                  <CheckCircle2 className="h-4 w-4" />
                  <p>Event published! Redirecting...</p>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Publishing..." : submitted ? "Published" : "Publish Event"}
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/event/admin-dashboard")}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Admin Status */}
            <div className="rounded-3xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Admin Status</p>
                  <p className="mt-1 text-sm text-emerald-500">Will be published immediately</p>
                </div>
                <div className="rounded-full bg-emerald-100 p-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                </div>
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                As admin, your events are published instantly without review.
              </p>
            </div>

            {/* Content Health */}
            <div className="space-y-4 rounded-3xl border border-border bg-card p-4 shadow-sm">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Content Health</p>
              
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Event Dates</span>
                  <span className={startDate && endDate && new Date(endDate) > new Date(startDate) ? "text-emerald-500" : "text-muted-foreground"}>
                    {startDate && endDate ? "✓ Valid" : "Required"}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Location Info</span>
                  <span className={location && city ? "text-emerald-500" : "text-muted-foreground"}>
                    {location && city ? "✓ Complete" : "Incomplete"}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Media</span>
                  <span className={
                    mediaType === "none" ? "text-gray-500" : 
                    (mediaFile || mediaUrl) ? "text-emerald-500" : 
                    "text-yellow-500"
                  }>
                    {mediaType === "none" ? "No media" : 
                     (mediaFile || mediaUrl) ? "✓ Ready" : 
                     "Need file/URL"}
                  </span>
                </div>
              </div>
            </div>

            {/* Event Preview */}
            <div className="rounded-3xl border border-border bg-card p-4 shadow-sm">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Quick Preview</p>
              
              {title && (
                <div className="mb-3 space-y-2">
                  <h3 className="text-sm font-medium truncate">{title}</h3>
                  <div className="flex flex-wrap gap-1">
                    <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2 py-0.5 text-[10px] text-sky-800">
                      <Calendar className="h-2.5 w-2.5" />
                      {startDate && new Date(startDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-800">
                      <MapPin className="h-2.5 w-2.5" />
                      {city}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-2 py-0.5 text-[10px] text-purple-800">
                      <Users className="h-2.5 w-2.5" />
                      {eventType}
                    </span>
                  </div>
                </div>
              )}
              
              {!title && (
                <p className="text-[11px] text-muted-foreground italic">Event title will appear here</p>
              )}
            </div>

            {/* Tips */}
            <div className="rounded-3xl border border-border bg-card p-4 text-xs text-muted-foreground shadow-sm">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Admin Tips</p>
              <ul className="list-disc space-y-1 pl-4">
                <li>All fields with * are required</li>
                <li>End date must be after start date</li>
                <li>Events are published immediately</li>
                <li>Linked post URL is optional</li>
                <li>You can edit events later if needed</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CreateEvent;