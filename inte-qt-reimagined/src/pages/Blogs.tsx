import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

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
};

type BlogCard = {
  id: string;
  img: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  slug: string;
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

const mapBlogToCard = (blog: BlogFromApi): BlogCard => {
  const img = blog.introImage || blog.descriptionImage || fallbackImage;

  let category = "";
  if (Array.isArray(blog.tags)) {
    category = blog.tags.join(" / ");
  } else if (typeof blog.tags === "string") {
    category = blog.tags;
  }

  const baseText = blog.introduction || blog.description || "";
  const maxLen = 220;
  const excerpt =
    baseText.length > maxLen
      ? baseText.slice(0, maxLen).trim() + "..."
      : baseText;

  return {
    id: blog._id,
    img,
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

        const res = await fetch(`${API_BASE}/api/blogs/all`);
        const text = await res.text();
        let data: BlogFromApi[] = [];
        try {
          data = text ? JSON.parse(text) : [];
        } catch {
          throw new Error("Failed to parse blogs response");
        }

        if (!res.ok) {
          throw new Error(
            (data as any)?.message || `Failed with status ${res.status}`
          );
        }

        const mapped = data
          .map(mapBlogToCard)
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
  <Helmet>
        <title>
          Blogs & Insights | Telecom, SD-WAN, Internet Access, Automation –
          inte-QT
        </title>

        <meta
          name="description"
          content="Explore blogs and insights on SD-WAN, MPLS, NSOC operations, network monitoring, global connectivity, IoT, automation, SLA management, and enterprise internet solutions from inte-QT."
        />

        <meta
          name="keywords"
          content="SD-WAN blogs, MPLS insights, telecom articles, NSOC operations, enterprise internet blog, global connectivity insights, 5G, automation blogs, SLA importance, networking articles"
        />

        <link rel="canonical" href="https://www.inte-qt.com/blog" />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Blogs & Insights | SD-WAN, MPLS, Telecom – inte-QT"
        />
        <meta
          property="og:description"
          content="Stay updated with industry-leading insights on SD-WAN, MPLS, networking, automation, NSOC, and enterprise connectivity."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inte-qt.com/blog" />
        <meta property="og:image" content="https://imgur.com/QihDOBg.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blogs & Insights | SD-WAN, MPLS, Telecom – inte-QT"
        />
        <meta
          name="twitter:description"
          content="Industry insights on telecom, SD-WAN, MPLS, NSOC monitoring, automation, and connectivity trends."
        />
        <meta
          name="twitter:image"
          content="https://imgur.com/QihDOBg.jpg"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "url": "https://www.inte-qt.com/blog",
              "name": "inte-QT Blogs & Insights",
              "description": "A collection of expert blogs covering SD-WAN, telecom, internet access, automation, NSOC operations, IoT, and global connectivity.",
              "publisher": {
                "@type": "Organization",
                "name": "inte-QT",
                "url": "https://www.inte-qt.com"
              }
            }
          `}
        </script>
      </Helmet>

  return (
    <div className="min-h-screen pt-20">
      

      {/* HERO SECTION */}
      <section
        className="gradient-hero text-primary-foreground py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://gifdb.com/images/high/office-desk-background-myhb5mf4xpj1ews9.gif")`,
          backgroundSize: "500px",
          backgroundPosition: "10% center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white dark:text-white text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Blogs & Insights
          </h1>
          <p className="text-white dark:text-white text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in-up">
            Stay informed with the latest industry news and insights
          </p>
        </div>
      </section>

      {/* BLOG CARDS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Blogs</h2>
            <p className="text-xl text-muted-foreground">
              Explore industry insights, trends, and expert opinions
            </p>

            {/* ✅ Go to login/auth page */}
            <button
              onClick={() => navigate("/auth")} // or "/auth" depending on your routes
              className="mt-4 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500"
            >
              Login to add Blog
            </button>
          </div>

          {/* states */}
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
                  className="overflow-hidden border-2 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background"
                >
                  <div className="w-full h-56 overflow-hidden">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                      {blog.category}
                    </p>

                    <h3 className="text-2xl font-bold leading-tight">
                      {blog.title}
                    </h3>

                    <p className="text-muted-foreground text-sm">
                      {blog.excerpt}
                    </p>

                    <div className="space-y-2 text-muted-foreground text-sm">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{blog.author}</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                    </div>

                    <Button
                      className="gradient-primary shadow-glow w-full"
                      onClick={() => navigate(`/blog/${blog.slug}`)}
                    >
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
