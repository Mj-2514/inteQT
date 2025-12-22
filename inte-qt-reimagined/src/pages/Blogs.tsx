import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

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
  introImage?: string | null;
  descriptionImage?: string | null;
  introMediaType?: string | null;
  descriptionMediaType?: string | null;
};

type BlogCard = {
  id: string;
  img: string;
  imgIsVideo: boolean;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  slug: string;
  mediaType?: string | null;
};

const fallbackImage = "https://via.placeholder.com/600x400?text=Blog";

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

function urlLooksLikeVideo(url?: string | null) {
  if (!url) return false;
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url.split("?")[0]);
}

const mapBlogToCard = (blog: BlogFromApi): BlogCard => {
  const candidateUrl = blog.descriptionImage || blog.introImage || fallbackImage;
  const mediaType = blog.descriptionMediaType || blog.introMediaType || null;
  const imgIsVideo =
    (mediaType && mediaType.toLowerCase() === "video") ||
    urlLooksLikeVideo(candidateUrl);

  let category = "";
  if (Array.isArray(blog.tags)) {
    category = blog.tags.join(" / ");
  } else if (typeof blog.tags === "string") {
    category = blog.tags;
  }

  const baseText = blog.introduction || blog.description || "";
  const maxLen = 220;
  const excerpt =
    baseText.length > maxLen ? baseText.slice(0, maxLen).trim() + "..." : baseText;

  return {
    id: blog._id,
    img: candidateUrl,
    imgIsVideo,
    mediaType,
    title: blog.title,
    excerpt: excerpt || "Read this blog to learn more.",
    author: blog.authorName,
    date: formatDate(blog.publicationDate),
    category: category || "General",
    slug: blog.slug,
  };
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const endpoint = `${API_BASE}/api/blogs/all`;
        const res = await fetch(endpoint);
        const text = await res.text();

        let data: BlogFromApi[] = [];
        try {
          data = text ? JSON.parse(text) : [];
        } catch (e) {
          throw new Error("Failed to parse blogs response");
        }

        if (!res.ok) {
          const serverMessage =
            (data as any)?.message || `Failed with status ${res.status}`;
          throw new Error(serverMessage);
        }

        const mapped = data
          .map((b) => mapBlogToCard(b))
          .sort(
            (a, b) =>
              new Date(b.date).getTime() - new Date(a.date).getTime()
          );

        setBlogs(mapped);
      } catch (err: any) {
        setError(err?.message || "Unable to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // --------------------------
  // SEO JSON-LD BLOCKS
  // --------------------------

  const canonical = "https://www.inte-qt.com/blog";

  const orgJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "inteQT",
    url: "https://www.inte-qt.com",
    logo: "https://www.inte-qt.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/bitsandbyteglobal/posts/?feedView=all",
    ],
  };

  const websiteJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://www.inte-qt.com",
    name: "inteQT",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.inte-qt.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.inte-qt.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: canonical,
      },
    ],
  };

  const blogListJson = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: canonical,
    name: "inteQT Blog",
    description:
      "Insights on SD-WAN, MPLS, telecom, routing, NSOC operations, and enterprise connectivity.",
    blogPost: blogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      image: blog.img,
      author: {
        "@type": "Person",
        name: blog.author,
      },
      datePublished: blog.date,
      url: `https://www.inte-qt.com/blog/${blog.slug}`,
      description: blog.excerpt,
    })),
  };

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>
          Blogs & Insights | Telecom, SD-WAN, Internet Access, Automation –
          inte-QT
        </title>

        <meta
          name="description"
          content="Explore blogs and insights on SD-WAN, MPLS, NSOC operations, network monitoring, global connectivity, IoT, automation, SLA management, and enterprise internet solutions from inte-QT."
        />
        <link rel="canonical" href={canonical} />

        {/* SEO JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(orgJson)}</script>
        <script type="application/ld+json">
          {JSON.stringify(websiteJson)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJson)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(blogListJson)}
        </script>
      </Helmet>

      {/* HERO */}
      <section
        className="relative gradient-hero py-24 bg-content bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://gifdb.com/images/high/office-desk-background-myhb5mf4xpj1ews9.gif")',
          backgroundSize: "500px",
          backgroundPosition: "10% center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] animate-fade-in">
            Blogs & Insights
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-in-up">
            Stay informed with the latest industry news and insights
          </p>
        </div>
      </section>

      {/* BLOGS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Blogs</h2>
            <p className="text-xl text-muted-foreground">
              Explore industry insights, trends, and expert opinions
            </p>
            <button
              onClick={() => navigate("/auth")}
              className="mt-4 px-4 py-2 rounded-lg bg-indigo-600 text-white"
            >
              Login to add Blog
            </button>
          </div>

          {loading && (
            <div className="text-center text-muted-foreground">
              Loading blogs...
            </div>
          )}
          {error && !loading && (
            <div className="text-center text-rose-500 mb-6">{error}</div>
          )}
          {!loading && !error && blogs.length === 0 && (
            <div className="text-center text-muted-foreground">
              No blogs found.
            </div>
          )}

          {!loading && !error && blogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {blogs.map((blog) => (
                <Card
                  key={blog.id}
                  className="overflow-hidden border-2 rounded-xl hover:shadow-xl transition-all duration-300 bg-background flex flex-col h-full"
                >
                  <div className="w-full h-56 overflow-hidden bg-muted">
                    {blog.imgIsVideo ? (
                      <video
                        src={blog.img}
                        autoPlay
                        loop
                        muted
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover hover:scale-105 transition"
                      />
                    ) : (
                      <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-full object-cover hover:scale-105 transition"
                      />
                    )}
                  </div>

                  <CardContent className="p-6 flex flex-col flex-1 min-h-[320px]">
                    {/* Category */}
                    <p className="text-xs font-semibold uppercase text-primary tracking-wide mb-3">
                      {blog.category}
                    </p>

                    {/* Title */}
                    <h3 className="text-2xl font-bold leading-snug mb-3">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                      {blog.excerpt}
                    </p>

                    {/* Author and Date */}
                    <div className="text-sm text-muted-foreground space-y-2 pt-3">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                    </div>

                    {/* Button at bottom */}
                    <div className="mt-auto pt-6">
                      <Button
                        className="gradient-primary w-full"
                        onClick={() => navigate(`/blog/${blog.slug}`)}
                      >
                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;