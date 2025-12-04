// src/pages/CreateBlog.tsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL || "https://inteqt.onrender.com";

function countWords(text = "") {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
}

export default function CreateBlog() {
  const navigate = useNavigate();

  // text fields
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorLinkedin, setAuthorLinkedin] = useState("");
  const [tags, setTags] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [description, setDescription] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [published, setPublished] = useState(true);

  // images
  const [introImageFile, setIntroImageFile] = useState<File | null>(null);
  const [descImageFile, setDescImageFile] = useState<File | null>(null);
  const [introPreview, setIntroPreview] = useState<string | null>(null);
  const [descPreview, setDescPreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // word counts
  const introWords = useMemo(() => countWords(introduction), [introduction]);
  const descWords = useMemo(() => countWords(description), [description]);
  const conclWords = useMemo(() => countWords(conclusion), [conclusion]);

  // validation matches your model constraints
  const validate = () => {
    if (!title.trim()) return "Title is required.";
    if (!authorName.trim()) return "Author name is required.";
    if (!introduction.trim()) return "Introduction is required.";
    if (!description.trim()) return "Description is required.";
    if (introWords > 330) return `Introduction exceeds 330 words (${introWords}).`;
    if (descWords > 1500) return `Description exceeds 1500 words (${descWords}).`;
    if (conclWords > 650) return `Conclusion exceeds 650 words (${conclWords}).`;
    return null;
  };

  const handleFile = (f: File | null, setterFile: typeof setIntroImageFile, setterPreview: typeof setIntroPreview) => {
    setterFile(f);
    if (!f) {
      setterPreview(null);
      return;
    }
    const url = URL.createObjectURL(f);
    setterPreview(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Not authenticated. Please login.");

      // Build FormData — backend accepts multipart via upload.fields
      const fd = new FormData();
      fd.append("title", title.trim());
      fd.append("authorName", authorName.trim());
      if (authorLinkedin.trim()) fd.append("authorLinkedin", authorLinkedin.trim());
      // tags stored as array in model; backend expects comma string or array depending on implementation.
      // We send comma-separated string; server can split into array.
      fd.append("tags", tags.split(",").map(t => t.trim()).filter(Boolean).join(","));
      fd.append("introduction", introduction.trim());
      fd.append("description", description.trim());
      fd.append("conclusion", conclusion.trim());
      fd.append("published", String(published));

      if (introImageFile) fd.append("introImage", introImageFile);
      if (descImageFile) fd.append("descriptionImage", descImageFile);

      // POST multipart/form-data
      const res = await fetch(`${API_BASE}/api/blogs/add`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          // DO NOT set Content-Type; browser will set boundary for FormData
        },
        body: fd,
      });

      const text = await res.text();
      let data;
      try { data = text ? JSON.parse(text) : {}; } catch { data = text; }

      if (!res.ok) {
        const msg =
          (data && (data.message || (Array.isArray(data.errors) ? data.errors.map((x:any)=>x.msg).join(", ") : JSON.stringify(data)))) ||
          `Failed: ${res.status}`;
        throw new Error(msg);
      }

      // success
      setSubmitted(true);

      // Optional: revoke object URLs after success
      if (introPreview) URL.revokeObjectURL(introPreview);
      if (descPreview) URL.revokeObjectURL(descPreview);

      // short confirmation then navigate to blogs list
      setTimeout(() => navigate("/blogs"), 900);
    } catch (err: any) {
      setError(err?.message || "Submit failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center p-6 bg-slate-50">
      <button
  onClick={() => navigate("/admin/blogs")}
  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/5"
>
  Manage blogs
</button>

      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl text-black font-bold mb-2">Create Blog</h2>
          <p className="text-sm text-black text-slate-600 mb-4">Fill the form and publish your blog. After submit you'll be redirected to Blogs.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-black font-medium mb-1">Title *</label>
              <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full text-black px-3 py-2 border rounded-md" placeholder="My Fantastic Blog" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-black font-medium mb-1">Author Name *</label>
                <input value={authorName} onChange={e=>setAuthorName(e.target.value)} className="w-full text-black px-3 py-2 border rounded-md" placeholder="Your name" />
              </div>

              <div>
                <label className="block text-sm text-black font-medium mb-1">Author LinkedIn</label>
                <input value={authorLinkedin} onChange={e=>setAuthorLinkedin(e.target.value)} className="w-full text-black px-3 py-2 border rounded-md" placeholder="https://linkedin.com/in/..." />
              </div>
            </div>

            <div>
              <label className="block text-sm text-black font-medium mb-1">Tags (comma separated)</label>
              <input value={tags} onChange={e=>setTags(e.target.value)} className="w-full text-black px-3 py-2 border rounded-md" placeholder="devops,backend,security" />
            </div>

            <div>
              <label className="block text-sm text-black font-medium mb-1">Introduction * (max 330 words)</label>
              <textarea value={introduction} onChange={e=>setIntroduction(e.target.value)} rows={4} className="w-full text-black px-3 py-2 border rounded-md" />
              <div className="text-xs text-slate-500 mt-1">Words: {introWords} / 330</div>
            </div>

            <div>
              <label className="block text-sm text-black font-medium mb-1">Intro Image</label>
              <input type="file" accept="image/*" onChange={e => handleFile(e.target.files?.[0] || null, setIntroImageFile, setIntroPreview)} />
              {introPreview && <img src={introPreview} alt="intro preview" className="mt-2 text-black max-h-40 rounded-md" />}
            </div>

            <div>
              <label className="block text-sm text-black font-medium mb-1">Description * (max 1500 words)</label>
              <textarea value={description} onChange={e=>setDescription(e.target.value)} rows={8} className="w-full text-black px-3 py-2 border rounded-md" />
              <div className="text-xs text-slate-500 mt-1">Words: {descWords} / 1500</div>
            </div>

            <div>
              <label className="block text-sm text-black font-medium mb-1">Description Image (optional)</label>
              <input type="file" accept="image/*" onChange={e => handleFile(e.target.files?.[0] || null, setDescImageFile, setDescPreview)} />
              {descPreview && <img src={descPreview} alt="description preview" className="mt-2 max-h-40 rounded-md" />}
            </div>

            <div>
              <label className="block text-sm text-black font-medium mb-1">Conclusion (max 650 words)</label>
              <textarea value={conclusion} onChange={e=>setConclusion(e.target.value)} rows={4} className="w-full text-black px-3 py-2 border rounded-md" />
              <div className="text-xs text-slate-500 mt-1">Words: {conclWords} / 650</div>
            </div>


            {error && <div className="text-sm text-black text-rose-600">{error}</div>}
            {submitted && <div className="text-sm text-green-600">Submitted! Redirecting to blogs...</div>}

            <div className="flex gap-3 mt-4">
              <button type="submit" disabled={loading || submitted} className="px-4 py-2 rounded bg-indigo-600 text-white disabled:opacity-60">
                {loading ? "Submitting..." : (submitted ? "Submitted" : "Submit")}
              </button>

              <button type="button" onClick={()=>navigate('/blogs')} className="px-4 py-2 text-black rounded border">
                Go to Blogs
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
