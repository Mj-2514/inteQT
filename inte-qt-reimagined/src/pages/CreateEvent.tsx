import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, AlertTriangle } from "lucide-react";
import Navbar from "../components/Navbar";

const API_BASE = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inteqt.onrender.com";

/* ===============================
   Helpers
================================ */
function looksLikeUrl(s: string) {
  try {
    const u = new URL(s);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function revokeIfBlobUrl(url?: string | null) {
  if (url && url.startsWith("blob:")) {
    URL.revokeObjectURL(url);
  }
}

/* ===============================
   Component
================================ */
const CreateEvent: React.FC = () => {
  const navigate = useNavigate();

  const eventUserRaw = localStorage.getItem("eventUser");
  const eventUser = eventUserRaw ? JSON.parse(eventUserRaw) : null;
  const isAdmin = Boolean(eventUser?.isAdmin);

  /* -------- Fields -------- */
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Conference");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  /* -------- Media -------- */
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaUrl, setMediaUrl] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  /* -------- UI State -------- */
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [addAnother, setAddAnother] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ===============================
     Validation
  ================================ */
  const validate = () => {
    if (!title.trim()) return "Event title is required.";
    if (!startDate || !endDate) return "Event date range is required.";
    if (new Date(endDate) < new Date(startDate))
      return "End date cannot be before start date.";
    if (!location.trim()) return "Event location is required.";
    if (!city.trim()) return "City is required.";
    if (!description.trim()) return "Description is required.";
    if (!mediaFile && !mediaUrl)
      return "Event image or hosted image URL is required.";
    if (mediaUrl && !looksLikeUrl(mediaUrl))
      return "Media URL is not valid.";
    if (link && !looksLikeUrl(link))
      return "Event link is not valid.";
    return null;
  };

  /* ===============================
     Reset Form
  ================================ */
  const resetForm = () => {
    setTitle("");
    setType("Conference");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setCity("");
    setLink("");
    setDescription("");
    setMediaFile(null);
    setMediaUrl("");
    setPreview(null);
  };

  /* ===============================
     Handlers
  ================================ */
  const handleFile = (file: File | null) => {
    if (preview) revokeIfBlobUrl(preview);
    setMediaFile(file);
    setMediaUrl("");

    if (!file) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const handleUrlChange = (url: string) => {
    if (preview) revokeIfBlobUrl(preview);
    setMediaUrl(url);
    setMediaFile(null);
    setPreview(url || null);
  };

  /* ===============================
     Submit
  ================================ */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("eventToken");
      if (!token) throw new Error("Not authenticated.");

      const fd = new FormData();
      fd.append("title", title.trim());
      fd.append("type", type);
      fd.append("startDate", startDate);
      fd.append("endDate", endDate);
      fd.append("location", location.trim());
      fd.append("city", city.trim());
      fd.append("description", description.trim());

      if (link.trim()) fd.append("link", link.trim());

      if (mediaFile) {
        fd.append("media", mediaFile);
      } else {
        fd.append("mediaUrl", mediaUrl.trim());
      }

      const res = await fetch(`${API_BASE}/api/events/add`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: fd,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed");

      revokeIfBlobUrl(preview);

      if (addAnother) {
        resetForm();
      } else {
        setSubmitted(true);
        setTimeout(() => navigate("/events"), 900);
      }
    } catch (err: any) {
      setError(err?.message || "Submit failed");
    } finally {
      setLoading(false);
    }
  };

  /* ===============================
     Render
  ================================ */
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-10 pt-20 md:pt-24">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 text-sky-500" />
            <span>{isAdmin ? "Admin · Event Creator" : "Event Creator"}</span>
          </div>
          <h1 className="mt-2 text-2xl font-semibold md:text-3xl">
            Create a new event
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="rounded-3xl border bg-card p-6 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                placeholder="Event title *"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border px-3 py-2.5 text-sm text-black"
              />

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-xl border px-3 py-2.5 text-sm text-black"
              >
                <option>Conference</option>
                <option>Expo</option>
                <option>Summit</option>
                <option>Meetup</option>
              </select>

              {/* DATE RANGE */}
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="rounded-xl border px-3 py-2.5 text-sm text-black"
                  required
                />
                <input
                  type="date"
                  value={endDate}
                  min={startDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="rounded-xl border px-3 py-2.5 text-sm text-black"
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  placeholder="Venue *"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="rounded-xl border px-3 py-2.5 text-sm text-black"
                />
                <input
                  placeholder="City *"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="rounded-xl border px-3 py-2.5 text-sm text-black"
                />
              </div>

              {/* External Link */}
              <input
                type="url"
                placeholder="External event link (optional)"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full rounded-xl border px-3 py-2.5 text-sm text-black"
              />

              <textarea
                placeholder="Description *"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-xl border px-3 py-2.5 text-sm text-black"
                rows={4}
              />

              <input
                type="file"
                accept="image/*,video/*"
                onChange={(e) =>
                  handleFile(e.target.files?.[0] || null)
                }
                className="text-xs"
              />

              <input
                placeholder="Or paste hosted image/video URL"
                value={mediaUrl}
                onChange={(e) => handleUrlChange(e.target.value)}
                className="w-full rounded-xl border px-3 py-2.5 text-sm text-black"
              />

              {preview && (
                <img
                  src={preview}
                  className="max-h-48 w-full rounded-xl object-cover"
                />
              )}

              {/* Add Another */}
              <div className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={addAnother}
                  onChange={(e) => setAddAnother(e.target.checked)}
                />
                <span>Add another event after publishing</span>
              </div>

              {error && (
                <div className="flex gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-500">
                  <AlertTriangle className="h-4 w-4" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                {loading ? "Submitting..." : "Publish event"}
              </button>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CreateEvent;
