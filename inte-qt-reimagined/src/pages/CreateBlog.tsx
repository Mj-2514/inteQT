import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, AlertTriangle } from "lucide-react";

// adjust this path to your actual Navbar component
import Navbar from "../components/Navbar";


const API_BASE = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inteqt.onrender.com";


function countWords(text = "") {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
}

const CreateBlog: React.FC = () => {
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
  const introWords = useMemo(
    () => countWords(introduction),
    [introduction]
  );
  const descWords = useMemo(
    () => countWords(description),
    [description]
  );
  const conclWords = useMemo(
    () => countWords(conclusion),
    [conclusion]
  );

  const validate = () => {
    if (!title.trim()) return "Title is required.";
    if (!authorName.trim()) return "Author name is required.";
    if (!introduction.trim()) return "Introduction is required.";
    if (!description.trim()) return "Description is required.";
    if (introWords > 330)
      return `Introduction exceeds 330 words (${introWords}).`;
    if (descWords > 1500)
      return `Description exceeds 1500 words (${descWords}).`;
    if (conclWords > 650)
      return `Conclusion exceeds 650 words (${conclWords}).`;
    return null;
  };

  const handleFile = (
    f: File | null,
    setterFile: typeof setIntroImageFile,
    setterPreview: typeof setIntroPreview
  ) => {
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

      const fd = new FormData();
      fd.append("title", title.trim());
      fd.append("authorName", authorName.trim());
      if (authorLinkedin.trim()) {
        fd.append("authorLinkedin", authorLinkedin.trim());
      }

      fd.append(
        "tags",
        tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
          .join(",")
      );
      fd.append("introduction", introduction.trim());
      fd.append("description", description.trim());
      fd.append("conclusion", conclusion.trim());
      fd.append("published", String(published));

      if (introImageFile) fd.append("introImage", introImageFile);
      if (descImageFile) fd.append("descriptionImage", descImageFile);

      const res = await fetch(`${API_BASE}/api/blogs/add`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: fd,
      });

      const text = await res.text();
      let data: any;
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = text;
      }

      if (!res.ok) {
        const msg =
          (data &&
            (data.message ||
              (Array.isArray(data.errors)
                ? data.errors.map((x: any) => x.msg).join(", ")
                : JSON.stringify(data)))) ||
          `Failed: ${res.status}`;
        throw new Error(msg);
      }

      setSubmitted(true);

      if (introPreview) URL.revokeObjectURL(introPreview);
      if (descPreview) URL.revokeObjectURL(descPreview);

      setTimeout(() => navigate("/blogs"), 900);
    } catch (err: any) {
      setError(err?.message || "Submit failed");
    } finally {
      setLoading(false);
    }
  };

  const wordBar = (
    used: number,
    max: number,
    colorActive: string,
    label: string
  ) => {
    const ratio = Math.min(used / max, 1);
    const percent = Math.round(ratio * 100);
    const isOver = used > max;

    return (
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{label}</span>
          <span
            className={
              isOver ? "text-destructive font-medium" : "text-muted-foreground"
            }
          >
            {used} / {max}
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-muted">
          <div
            className={`h-1.5 rounded-full transition-all ${
              isOver ? "bg-destructive" : colorActive
            }`}
            style={{ width: `${percent}%` }}
          />
        </div>
        {isOver && (
          <p className="flex items-center gap-1 text-[11px] text-destructive">
            <AlertTriangle className="h-3 w-3" />
            Over the limit — trim this section.
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* If Navbar is already in your layout, REMOVE this line */}
      <Navbar />

      {/* Simple top padding so content isn't under the navbar.
          Adjust pt-16/pt-20 to match your navbar height. */}
      <main className="mx-auto max-w-6xl px-4 pb-10 pt-20 md:pt-24">
        {/* subtle gradient that respects theme (only strong in dark) */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 left-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/30" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl dark:bg-indigo-500/30" />
        </div>

        {/* Header row */}
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5 text-sky-500" />
              <span>Admin · Blog Creator</span>
            </div>
            <h1 className="text-2xl font-semibold md:text-3xl">
              Create a new blog
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground">
              Write, attach visuals, and publish. You can later edit or delete
              from the admin dashboard.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => navigate("/admin/blogs")}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Manage blogs
            </button>
            <button
              onClick={() => navigate("/blogs")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90"
            >
              View public blog list
            </button>
          </div>
        </div>

        {/* Content grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid gap-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.1fr)]"
        >
          {/* Main form card */}
          <div className="rounded-3xl border border-border bg-card p-5 shadow-md md:p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Title */}
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Title <span className="text-destructive">*</span>
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                  placeholder="Understanding SD-WAN vs MPLS in Enterprise Networks"
                />
              </div>

              {/* Author + LinkedIn */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Author Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Author LinkedIn
                  </label>
                  <input
                    value={authorLinkedin}
                    onChange={(e) => setAuthorLinkedin(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Tags (comma separated)
                </label>
                <input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                  placeholder="sd-wan, automation, devops"
                />
              </div>

              {/* Introduction */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="mb-1 block text-sm font-medium">
                    Introduction <span className="text-destructive">*</span>
                  </label>
                  <p className="text-[11px] text-muted-foreground">
                    Max 330 words — keep it crisp and clear.
                  </p>
                </div>
                <textarea
                  value={introduction}
                  onChange={(e) => setIntroduction(e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                  placeholder="Set the context and hook the reader..."
                />
              </div>

              {/* Intro image */}
              <div className="grid gap-4 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-center">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Intro Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleFile(
                        e.target.files?.[0] || null,
                        setIntroImageFile,
                        setIntroPreview
                      )
                    }
                    className="block w-full text-xs text-muted-foreground file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-primary-foreground hover:file:bg-primary/90"
                  />
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Ideal: 1200×630, under 5MB, clean header image.
                  </p>
                </div>
                {introPreview && (
                  <div className="overflow-hidden rounded-2xl border border-border bg-muted">
                    <img
                      src={introPreview}
                      alt="Intro preview"
                      className="max-h-40 w-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="mb-1 block text-sm font-medium">
                    Description <span className="text-destructive">*</span>
                  </label>
                  <p className="text-[11px] text-muted-foreground">
                    Max 1500 words — main body of your article.
                  </p>
                </div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={8}
                  className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                  placeholder="Break down the concept with sections, examples, and use cases..."
                />
              </div>

              {/* Description image */}
              <div className="grid gap-4 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-center">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Description Image (Mandatory)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleFile(
                        e.target.files?.[0] || null,
                        setDescImageFile,
                        setDescPreview
                      )
                    }
                    className="block w-full text-xs text-muted-foreground file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-primary-foreground hover:file:bg-primary/90"
                  />
                </div>
                {descPreview && (
                  <div className="overflow-hidden rounded-2xl border border-border bg-muted">
                    <img
                      src={descPreview}
                      alt="Description preview"
                      className="max-h-40 w-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Conclusion */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="mb-1 block text-sm font-medium">
                    Conclusion(Mandatory)
                  </label>
                  <p className="text-[11px] text-muted-foreground">
                    Max 650 words — key takeaways & CTA.
                  </p>
                </div>
                <textarea
                  value={conclusion}
                  onChange={(e) => setConclusion(e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                  placeholder="Summarize and tell the reader what to do next..."
                />
              </div>

              {/* Error / success */}
              {error && (
                <div className="flex items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                  <AlertTriangle className="mt-0.5 h-4 w-4" />
                  <p>{error}</p>
                </div>
              )}

              {submitted && !error && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-500">
                  <CheckCircle2 className="h-4 w-4" />
                  <p>Submitted! Redirecting to blogs…</p>
                </div>
              )}

              {/* CTA buttons */}
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? "Submitting..."
                    : submitted
                    ? "Submitted"
                    : "Publish blog"}
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/blogs")}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  Cancel & go to blogs
                </button>
              </div>
            </form>
          </div>

          {/* Side panel */}
          <div className="space-y-4">
            {/* Publish toggle + status */}
            <div className="rounded-3xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Publish status
                  </p>
                  <p className="mt-1 text-sm">
                    {published ? "Will be live after submit" : "Saved as draft"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPublished((p) => !p)}
                  className={`relative inline-flex h-7 w-12 items-center rounded-full border transition ${
                    published
                      ? "border-emerald-500 bg-emerald-500/30"
                      : "border-muted bg-muted"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-background transition ${
                      published ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                Toggle this to quickly switch between published and draft
                without losing your content.
              </p>
            </div>

            {/* Word counters */}
            <div className="space-y-4 rounded-3xl border border-border bg-card p-4 shadow-sm">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Content health
              </p>
              {wordBar(
                introWords,
                330,
                "bg-sky-500",
                "Introduction words"
              )}
              {wordBar(
                descWords,
                1500,
                "bg-indigo-500",
                "Description words"
              )}
              {wordBar(
                conclWords,
                650,
                "bg-emerald-500",
                "Conclusion words"
              )}
            </div>

            {/* Tips */}
            <div className="rounded-3xl border border-border bg-card p-4 text-xs text-muted-foreground shadow-sm">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Writing tips
              </p>
              <ul className="list-disc space-y-1 pl-4">
                <li>Use headings and short paragraphs in the description.</li>
                <li>
                  Make intro clear enough that even non-networking people
                  understand it.
                </li>
                <li>End conclusion with a clear CTA or next step.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CreateBlog;
