import { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, User, Tag, Share2, ImageOff } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const API_BASE = import.meta.env.VITE_API_BASE;

/* ================= TYPES ================= */

type BlogFromApi = {
  _id: string;
  title: string;
  authorName: string;
  authorLinkedin?: string;
  publicationDate?: string | Date;
  slug: string;
  tags?: string[] | string;
  introduction?: string;
  description?: string;
  conclusion?: string;
  introImage?: string | null;
  descriptionImage?: string | null;
};

/* ================= HELPERS ================= */

const formatDate = (d?: string | Date) =>
  d ? new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "2-digit" }) : "Unknown date";

const normalizeTags = (tags?: string[] | string): string[] =>
  Array.isArray(tags) ? tags : tags ? tags.split(",").map(t => t.trim()) : [];

const normalizeUrl = (url?: string | null) => {
  if (!url) return null;
  let s = url.trim();

  if (s.includes("imgur.com") && !s.includes("i.imgur.com")) {
    const id = s.split("/").pop()?.split(".")[0];
    if (id) return `https://i.imgur.com/${id}.jpg`;
  }

  if (s.startsWith("//")) return `https:${s}`;
  if (s.startsWith("/")) return `${API_BASE}${s}`;
  if (!/^https?:\/\//i.test(s)) return `https://${s}`;

  return s;
};

const fallbackIntro = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80";
const fallbackDesc  = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";

/* ================= MEDIA BLOCK ================= */

const MediaBlock = ({ src, type }: { src?: string | null; type: "intro" | "description" }) => {
  const [failed, setFailed] = useState(false);
  const fallback = type === "intro" ? fallbackIntro : fallbackDesc;

  return (
    <img
      src={failed ? fallback : src || fallback}
      onError={() => setFailed(true)}
      className="w-full h-full object-cover"
      loading="lazy"
      alt=""
    />
  );
};

/* ================= PAGE ================= */

export default function DetailedBlog() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogFromApi | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/blogs/slug/${slug}`)
      .then(r => r.json())
      .then(b => {
        b.introImage = normalizeUrl(b.introImage);
        b.descriptionImage = normalizeUrl(b.descriptionImage);
        setBlog(b);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading)
    return <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">Loading…</div>;

  if (!blog)
    return <div className="min-h-screen bg-slate-950 text-white text-center pt-20">Blog not found</div>;

  const tags = normalizeTags(blog.tags);

  return (
    <>
      <Helmet>
        <title>{blog.title} | inte-QT</title>
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <div className="mx-auto max-w-5xl px-4 py-10">
          <button onClick={() => navigate("/blogs")} className="flex items-center gap-2 text-sm mb-6">
            <ArrowLeft size={16} /> Back to blogs
          </button>

          <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-slate-900 rounded-3xl overflow-hidden">

            <div className="h-72">
              <MediaBlock src={blog.introImage} type="intro" />
            </div>

            <div className="p-8 space-y-8">

              <h1 className="text-4xl font-bold">{blog.title}</h1>

              <div className="flex gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2"><User size={14} /> {blog.authorName}</span>
                <span className="flex items-center gap-2"><Calendar size={14} /> {formatDate(blog.publicationDate)}</span>
              </div>

              {tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {tags.map(t => (
                    <span key={t} className="bg-slate-800 px-3 py-1 rounded-full text-xs">{t}</span>
                  ))}
                </div>
              )}

              {blog.introduction && <p className="text-lg text-slate-200">{blog.introduction}</p>}
              {blog.description && <p className="text-slate-300">{blog.description}</p>}

              {blog.descriptionImage && (
                <div className="h-72 rounded-xl overflow-hidden">
                  <MediaBlock src={blog.descriptionImage} type="description" />
                </div>
              )}

              {blog.conclusion && <p className="text-lg text-slate-200 border-t border-slate-700 pt-6">{blog.conclusion}</p>}
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
}
