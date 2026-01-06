import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Pencil, Trash2, Plus, Calendar, User, Loader2 } from "lucide-react";

const API_BASE =import.meta.env.VITE_API_BASE;

type BlogFromApi = {
  _id: string;
  title: string;
  authorName: string;
  slug: string;
  publicationDate?: string | Date;
  // new fields to support media previews
  introImage?: string | null;
  introMediaType?: "gif" | "image" | "video" | "external" | string | null;
};

const formatDate = (dateValue?: string | Date): string => {
  if (!dateValue) return "Unknown";
  const d = new Date(dateValue);
  if (isNaN(d.getTime())) return "Unknown";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.3, ease: "easeOut" },
  }),
};

const THUMB_SIZE = "56"; // px height for thumbnail (used in classnames)

const AdminBlogList = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<BlogFromApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${API_BASE}/api/blogs/all`);
      const text = await res.text();
      let data: BlogFromApi[] | { message?: string };

      try {
        data = text ? JSON.parse(text) : ([] as any);
      } catch {
        throw new Error("Failed to parse blogs response");
      }

      if (!res.ok) {
        throw new Error((data as any)?.message || `Failed with status ${res.status}`);
      }

      // Ensure shaped array (defensive mapping)
      const shaped = (data as BlogFromApi[]).map((b) => ({
        _id: b._id,
        title: b.title,
        authorName: b.authorName,
        slug: b.slug,
        publicationDate: b.publicationDate,
        introImage: (b as any).introImage || null,
        introMediaType: (b as any).introMediaType || null,
      }));

      setBlogs(shaped);
    } catch (err: any) {
      setError(err?.message || "Unable to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog? This cannot be undone."
    );
    if (!confirm) return;

    try {
      setDeletingId(id);
      setError(null);

      const token = localStorage.getItem("token"); // or wherever you store it

      const res = await fetch(`${API_BASE}/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      const text = await res.text();
      let data: { message?: string } = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        // ignore parse error
      }

      if (!res.ok) {
        throw new Error(data?.message || `Failed with status ${res.status}`);
      }

      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch (err: any) {
      setError(err?.message || "Failed to delete blog");
    } finally {
      setDeletingId(null);
    }
  };

  // Render small media thumb: img for image/gif, video for video
  const MediaThumb = ({ url, mediaType }: { url?: string | null; mediaType?: string | null }) => {
    if (!url) {
      return (
        <div className="flex h-14 w-14 items-center justify-center rounded-md border border-white/6 bg-white/3 text-[11px] text-slate-300">
          No media
        </div>
      );
    }

    // Use <video> for video types (if you later allow video uploads)
    if (mediaType === "video" || (typeof url === "string" && url.match(/\.(mp4|webm|ogg)(?:\?.*)?$/i))) {
      return (
        <video
          src={url}
          className="h-14 w-14 rounded-md object-cover"
          muted
          playsInline
          loop
          preload="metadata"
        />
      );
    }

    // For images and gifs use img (GIFs will animate)
    return <img src={url} alt="thumb" className="h-14 w-14 rounded-md object-cover" />;
  };

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-50">
        <Navbar />
        {/* gradient bg */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 left-0 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-400/25 blur-3xl" />
        </div>

        <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <h1 className="text-base font-semibold text-slate-100">Blog Management</h1>
            <div className="flex gap-2">
              <button
                onClick={() => navigate("/")}
                className="hidden rounded-full border border-white/15 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/5 md:inline-flex"
              >
                Go to site
              </button>
              <button
                onClick={() => navigate("/admin/create-blog")}
                className="inline-flex items-center gap-1.5 rounded-full bg-sky-500 px-3.5 py-1.5 text-xs font-medium text-slate-950 hover:bg-sky-400"
              >
                <Plus className="h-4 w-4" />
                New Blog
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-6 md:py-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-slate-50">All Blogs</h2>
              <p className="text-xs text-slate-400">As admin, you can edit and delete any blog from here.</p>
            </div>
            <p className="text-xs text-slate-500">
              Total blogs:{" "}
              <span className="font-semibold text-slate-200">{blogs.length}</span>
            </p>
          </motion.div>

          {error && (
            <div className="mb-4 rounded-xl border border-rose-500/40 bg-rose-900/20 px-4 py-3 text-xs text-rose-100">
              {error}
            </div>
          )}

          {/* Loading state */}
          {loading ? (
            <div className="flex items-center justify-center py-20 text-slate-300">
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Loading blogs...
            </div>
          ) : blogs.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-12 text-center text-sm text-slate-300">
              No blogs found yet.{" "}
              <button onClick={() => navigate("/admin/create-blog")} className="text-sky-300 underline underline-offset-2">
                Create your first blog
              </button>
            </div>
          ) : (
            <motion.div initial="hidden" animate="visible" className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/40">
              <div className="hidden grid-cols-[1.6fr_1fr_0.7fr_0.7fr] gap-4 border-b border-white/10 px-5 py-3 text-xs text-slate-400 md:grid">
                <span>Title</span>
                <span>Author / Date</span>
                <span>Slug</span>
                <span className="text-right">Actions</span>
              </div>

              {/* Desktop: rows */}
              <div className="hidden flex-col md:flex">
                {blogs.map((blog, idx) => (
                  <motion.div key={blog._id} variants={fadeUp} custom={idx} className="grid grid-cols-[1.6fr_1fr_0.7fr_0.7fr] items-center gap-4 border-b border-white/5 px-5 py-3 last:border-b-0">
                    <div className="flex items-center gap-3">
                      {/* thumbnail */}
                      <div className="flex-shrink-0">
                        <MediaThumb url={blog.introImage} mediaType={blog.introMediaType || null} />
                      </div>

                      <div className="space-y-0.5">
                        <p className="line-clamp-1 text-sm font-medium text-slate-50">{blog.title}</p>
                        <p className="text-[11px] text-slate-400">ID: {blog._id.slice(0, 8)}…</p>
                      </div>
                    </div>

                    <div className="text-xs text-slate-300">
                      <div className="inline-flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-sky-300" />
                        <span>{blog.authorName}</span>
                      </div>
                      <div className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-slate-400">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{formatDate(blog.publicationDate)}</span>
                      </div>
                    </div>

                    <div className="truncate text-xs text-slate-300">{blog.slug}</div>

                    <div className="flex justify-end gap-2">
                      <button onClick={() => navigate(`/admin/blogs/${blog.slug}/edit`)} className="inline-flex items-center gap-1 rounded-full border border-sky-400/60 px-3 py-1 text-xs text-sky-200 hover:bg-sky-500/10">
                        <Pencil className="h-3.5 w-3.5" />
                        Edit
                      </button>
                      <button onClick={() => handleDelete(blog._id)} disabled={deletingId === blog._id} className="inline-flex items-center gap-1 rounded-full border border-rose-500/60 px-3 py-1 text-xs text-rose-200 hover:bg-rose-500/10 disabled:opacity-60">
                        <Trash2 className="h-3.5 w-3.5" />
                        {deletingId === blog._id ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile cards */}
              <div className="flex flex-col gap-3 p-4 md:hidden">
                {blogs.map((blog, idx) => (
                  <motion.div key={blog._id} variants={fadeUp} custom={idx} className="rounded-xl border border-white/10 bg-slate-900/90 p-3 text-xs text-slate-200">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <MediaThumb url={blog.introImage} mediaType={blog.introMediaType || null} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-slate-50">{blog.title}</p>
                        <p className="mt-0.5 text-[10px] text-slate-500">ID: {blog._id.slice(0, 8)}…</p>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-slate-300">
                          <span className="inline-flex items-center gap-1"><User className="h-3.5 w-3.5 text-sky-300" />{blog.authorName}</span>
                          <span className="inline-flex items-center gap-1 text-slate-400"><Calendar className="h-3.5 w-3.5" />{formatDate(blog.publicationDate)}</span>
                        </div>
                        <p className="mt-1 truncate text-[11px] text-slate-400">slug: {blog.slug}</p>
                      </div>
                    </div>

                    <div className="mt-3 flex justify-end gap-2">
                      <button onClick={() => navigate(`/admin/blogs/${blog.slug}/edit`)} className="inline-flex items-center gap-1 rounded-full border border-sky-400/60 px-2.5 py-1 text-[11px] text-sky-200">
                        <Pencil className="h-3 w-3" />
                        Edit
                      </button>
                      <button onClick={() => handleDelete(blog._id)} disabled={deletingId === blog._id} className="inline-flex items-center gap-1 rounded-full border border-rose-500/60 px-2.5 py-1 text-[11px] text-rose-200 disabled:opacity-60">
                        <Trash2 className="h-3 w-3" />
                        {deletingId === blog._id ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </>
  );
};

export default AdminBlogList;
