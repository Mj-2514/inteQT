import { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; // adjust path if needed

const API_BASE = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inteqt.onrender.com";

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
  introMediaType?: string | null;
  descriptionMediaType?: string | null;
};

const formatDate = (dateValue?: string | Date): string => {
  if (!dateValue) return "Unknown date";
  const d = new Date(dateValue);
  if (isNaN(d.getTime())) return "Unknown date";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};

const normalizeTags = (tags?: string[] | string): string[] => {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags;
  return tags
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
};

function extLooksLikeVideo(url?: string | null) {
  if (!url) return false;
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url.split("?")[0]);
}
function extLooksLikeGif(url?: string | null) {
  if (!url) return false;
  return /\.gif(\?.*)?$/i.test(url.split("?")[0]);
}

const normalizeUrl = (url?: string | null): string | null => {
  if (!url) return null;
  const s = url.trim();
  if (/^https?:\/\//i.test(s)) return s;
  return `https://${s}`;
};

const DetailedBlog = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [blog, setBlog] = useState<BlogFromApi | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        const endpoint = `${API_BASE}/api/blogs/slug/${encodeURIComponent(slug)}`;
        console.log("Fetching blog detail from:", endpoint);

        const res = await fetch(endpoint);
        const text = await res.text();
        let data: BlogFromApi | { message?: string };

        try {
          data = text ? JSON.parse(text) : ({} as any);
          console.log("Blog detail JSON:", data);
        } catch (parseErr) {
          console.error("Failed to parse blog response:", parseErr, "text:", text);
          throw new Error("Failed to parse blog response");
        }

        if (!res.ok) {
          throw new Error((data as any)?.message || `Failed with status ${res.status}`);
        }

        // Normalize potential non-http urls in returned media fields
        const b = data as BlogFromApi;
        b.introImage = normalizeUrl(b.introImage) || null;
        b.descriptionImage = normalizeUrl(b.descriptionImage) || null;

        setBlog(b);
      } catch (err: any) {
        console.error("Error fetching blog:", err);
        setError(err?.message || "Unable to fetch blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const tags = normalizeTags(blog?.tags);
  const pubDate = blog ? formatDate(blog.publicationDate) : "";
  const pageTitle = blog ? `${blog.title} | inte-QT Blog` : "Blog | inte-QT";

  const structuredData = useMemo(() => {
    if (!blog) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blog.title,
      author: {
        "@type": "Person",
        name: blog.authorName,
      },
      datePublished: new Date(blog.publicationDate || new Date()).toISOString(),
      image: blog.introImage || blog.descriptionImage || "",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.inte-qt.com/blog/${blog.slug}`,
      },
    };
  }, [blog]);

  // motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 * i, duration: 0.5, ease: "easeOut" },
    }),
  };

  // decide whether a media URL should be rendered as <video>
  const decideIsVideo = (url?: string | null, mediaType?: string | null) => {
    if (!url) return false;
    if (mediaType && mediaType.toLowerCase() === "video") return true;
    if (extLooksLikeVideo(url)) return true;
    return false;
  };

  // extract media decisions for debugging
  const introIsVideo = decideIsVideo(blog?.introImage ?? null, blog?.introMediaType ?? null);
  const descIsVideo = decideIsVideo(blog?.descriptionImage ?? null, blog?.descriptionMediaType ?? null);

  // renderer for media with autoplay + loop + muted
  const MediaBlock: React.FC<{
    src?: string | null;
    alt?: string;
    isVideo?: boolean;
    className?: string;
  }> = ({ src, alt, isVideo, className }) => {
    if (!src) return null;
    if (isVideo) {
      return (
        <video
          src={src}
          // autoplay+loop+muted so it plays continuously until user interacts
          autoPlay
          loop
          muted
          controls
          playsInline
          preload="metadata"
          className={className}
          crossOrigin="anonymous"
          onError={(e) => console.error("Detailed blog video error:", e, src)}
        />
      );
    }
    // GIFs and images
    return <img src={src} alt={alt} className={className} onError={(e) => console.error("Detailed blog image error:", e, src)} />;
  };
<Helmet>
        <title>{pageTitle}</title>

        {blog && (
          <>
            <meta name="description" content={blog.introduction?.slice(0, 155) || "Read this detailed blog on SD-WAN, MPLS, automation, and more from inte-QT."} />
            <link rel="canonical" href={`https://www.inte-qt.com/blog/${blog.slug}`} />

            <meta property="og:title" content={blog.title} />
            <meta property="og:description" content={blog.introduction?.slice(0, 200) || "Expert insights from inte-QT."} />
            <meta property="og:image" content={blog.introImage || blog.descriptionImage || "https://imgur.com/QihDOBg.jpg"} />
            <meta property="og:url" content={`https://www.inte-qt.com/blog/${blog.slug}`} />
            <meta property="og:type" content="article" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={blog.title} />
            <meta name="twitter:description" content={blog.introduction?.slice(0, 200) || "Expert insights from inte-QT."} />
            <meta name="twitter:image" content={blog.introImage || blog.descriptionImage || "https://imgur.com/QihDOBg.jpg"} />

            {structuredData && <script type="application/ld+json">{JSON.stringify(structuredData)}</script>}
          </>
        )}
      </Helmet>
  return (
    <>
      

      <div className="min-h-screen bg-slate-950 text-slate-50">
       

        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 -left-10 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-sky-400/25 blur-3xl" />
        </div>

        <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
            <button onClick={() => navigate("/blogs")} className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-white hover:-translate-x-0.5 transition-transform">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blogs</span>
            </button>
          </div>
        </header>

        <main className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 md:py-10">
          {loading && (
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 md:p-8 shadow-2xl shadow-black/40">
              <div className="mb-4 h-6 w-2/3 animate-pulse rounded bg-slate-700/70" />
              <div className="mb-2 h-4 w-1/3 animate-pulse rounded bg-slate-700/70" />
              <div className="mb-6 flex gap-3">
                <div className="h-4 w-24 animate-pulse rounded bg-slate-700/70" />
                <div className="h-4 w-20 animate-pulse rounded bg-slate-700/70" />
              </div>
              <div className="mb-6 h-52 w-full animate-pulse rounded-2xl bg-slate-800/80" />
              <div className="space-y-3">
                <div className="h-4 w-full animate-pulse rounded bg-slate-700/70" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-slate-700/70" />
                <div className="h-4 w-4/6 animate-pulse rounded bg-slate-700/70" />
              </div>
            </motion.div>
          )}

          {error && !loading && (
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="rounded-2xl border border-rose-500/30 bg-rose-900/20 px-6 py-10 text-center text-rose-200">
              {error}
            </motion.div>
          )}

          {!loading && !error && !blog && (
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-10 text-center text-slate-300">
              Blog not found.
            </motion.div>
          )}

          {!loading && !error && blog && (
            <motion.article initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/50">
              {/* Top media */}
              {blog.introImage && (
                <motion.div initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="relative h-64 w-full overflow-hidden md:h-80">
                  <MediaBlock src={blog.introImage} alt={blog.title} isVideo={introIsVideo} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="max-w-xl">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-200/80">inte-QT Blog</p>
                      <h1 className="mt-1 text-2xl font-bold text-white md:text-3xl">{blog.title}</h1>
                    </div>
                    <div className="text-xs text-slate-200/80">
                      <div>{blog.authorName}</div>
                      <div className="text-[13px] mt-1">{pubDate}</div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="grid gap-8 p-6 md:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)] md:p-8">
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="space-y-8">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-300">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-1">
                      <User className="h-4 w-4 text-sky-300" />
                      <span>{blog.authorName}</span>
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-1">
                      <Calendar className="h-4 w-4 text-emerald-300" />
                      <span>{pubDate}</span>
                    </span>

                    {tags.length > 0 && (
                      <div className="inline-flex flex-wrap items-center gap-2">
                        <Tag className="h-4 w-4 text-amber-300" />
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag, i) => (
                            <motion.span key={tag + i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.06, duration: 0.4 }} className="rounded-full bg-slate-800/80 px-2.5 py-1 text-[0.75rem]">
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Introduction */}
                  {blog.introduction && (
                    <section className="space-y-3">
                      <h2 className="text-lg font-semibold text-slate-50">Introduction</h2>
                      <p className="text-sm md:text-base leading-relaxed text-slate-200 whitespace-pre-line">{blog.introduction}</p>
                    </section>
                  )}

                  {/* Description */}
                  {blog.description && (
                    <section className="space-y-3">
                      <h2 className="text-lg font-semibold text-slate-50">Description</h2>
                      {blog.description.split(/\n{2,}/).map((para, idx) => (
                        <p key={idx} className="text-sm md:text-base leading-relaxed text-slate-200 whitespace-pre-line">
                          {para}
                        </p>
                      ))}
                    </section>
                  )}

                  {/* Description media */}
                  {blog.descriptionImage && (
                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                      <MediaBlock src={blog.descriptionImage} alt={`${blog.title} illustration`} isVideo={descIsVideo} className="max-h-[420px] w-full object-cover" />
                    </motion.div>
                  )}

                  {/* Conclusion */}
                  {blog.conclusion && (
                    <section className="mt-4 border-t border-white/10 pt-5">
                      <h2 className="text-lg font-semibold text-slate-50">Conclusion</h2>
                      <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-200 whitespace-pre-line">{blog.conclusion}</p>
                    </section>
                  )}
                </motion.div>

                <motion.aside variants={fadeUp} initial="hidden" animate="visible" custom={1} className="space-y-4 md:space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 md:p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Author</p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-50">{blog.authorName}</h3>

                    {blog.authorLinkedin && (
                      <div className="mt-2 text-sm">
                        <a href={normalizeUrl(blog.authorLinkedin)} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                          View author on LinkedIn
                        </a>
                      </div>
                    )}

                    <div className="mt-4 rounded-xl bg-slate-800/70 px-3 py-3 text-xs text-slate-300">
                      <p>Share this blog with your team or save it to revisit.</p>
                    </div>
                  </div>

                  <div className="hidden md:block rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-xs text-slate-300">
                    <p className="mb-1 font-semibold text-slate-100">Reading tips</p>
                    <p>Use this as a reference when discussing SD-WAN, MPLS or automation with clients. Highlight 2–3 key points per section for quick recall.</p>
                  </div>
                </motion.aside>
              </div>
            </motion.article>
          )}
        </main>
      </div>
    </>
  );
};

export default DetailedBlog;
