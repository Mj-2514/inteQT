import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { useAuth } from "../context/AuthContext";

const API_BASE = import.meta.env.VITE_API_BASE;

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
  introMediaType?: "gif" | "image" | "video" | "external";

  descriptionImage?: string | null;
  descriptionMediaType?: "gif" | "image" | "video" | "external";
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

const fallbackImage = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";

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

const normalizeUrl = (url?: string | null): string => {
  if (!url) return fallbackImage;
  const s = url.trim();
  
  // If it's already a full URL, return as is
  if (/^https?:\/\//i.test(s)) return s;
  
  // If it starts with /, it's a local path - prepend the API base URL
  if (s.startsWith('/')) {
    // Check if it's a Cloudinary URL that might have been stored incorrectly
    if (s.includes('cloudinary')) {
      // If it's a Cloudinary path without protocol, add https
      return `https:${s}`;
    }
    return `${API_BASE}${s}`;
  }
  
  // If it looks like a Cloudinary path without protocol
  if (s.includes('cloudinary.com') && !s.startsWith('http')) {
    return `https://${s}`;
  }
  
  return fallbackImage;
};

function urlLooksLikeVideo(url?: string | null) {
  if (!url) return false;
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url.split("?")[0]);
}

const decideIsVideo = (url?: string | null, mediaType?: string | null): boolean => {
  if (!url) return false;
  
  // First check the mediaType field from database
  if (mediaType && mediaType.toLowerCase() === "video") {
    return true;
  }
  
  // Fallback to URL extension check
  if (urlLooksLikeVideo(url)) {
    return true;
  }
  
  return false;
};

const mapBlogToCard = (blog: BlogFromApi): BlogCard => {
  const rawUrl = blog.descriptionImage || blog.introImage || null;
  const mediaType = blog.descriptionMediaType || blog.introMediaType || null;

  const imgIsVideo =
    mediaType === "video" ||
    (rawUrl ? urlLooksLikeVideo(rawUrl) : false);

  let category = "Technology";
  if (blog.tags) {
    if (Array.isArray(blog.tags)) category = blog.tags.slice(0, 2).join(" • ");
    else category = blog.tags;
  }

  const baseText = blog.introduction || blog.description || "";
  const excerpt =
    baseText.length > 160 ? baseText.slice(0, 160).trim() + "..." : baseText;

  return {
    id: blog._id,
    img: normalizeUrl(rawUrl),
    imgIsVideo,
    mediaType,
    title: blog.title,
    excerpt: excerpt || "Explore insights on technology and innovation.",
    author: blog.authorName || "Anonymous",
    date: formatDate(blog.publicationDate),
    category,
    slug: blog.slug,
  };
};

const MediaPreview: React.FC<{
  src: string;
  alt: string;
  isVideo: boolean;
  className?: string;
}> = ({ src, alt, isVideo, className }) => {
  const [error, setError] = useState(false);

  if (isVideo && !error) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={`w-full h-full object-cover ${className}`}
        onError={() => setError(true)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <img
      src={error ? fallbackImage : src}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const auth = useAuth();
  const user = auth?.user ?? null;
  const isAuthenticated = !!user;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        
        const res = await fetch(`${API_BASE}/api/blogs/all`);
        
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }
        
        const text = await res.text();
        
        
        let data: BlogFromApi[] = [];

        try {
          const parsedData = text ? JSON.parse(text) : null;
          
          
          // Check various possible response formats
          if (Array.isArray(parsedData)) {
            // Direct array response
            data = parsedData;
          } else if (parsedData && Array.isArray(parsedData.data)) {
            // Response with { data: [...] } wrapper
            data = parsedData.data;
          } else if (parsedData && Array.isArray(parsedData.blogs)) {
            // Response with { blogs: [...] } wrapper
            data = parsedData.blogs;
          } else if (parsedData && parsedData.success && Array.isArray(parsedData.blogs)) {
            // Response with { success: true, blogs: [...] } wrapper
            data = parsedData.blogs;
          } else if (parsedData && parsedData.blogs && typeof parsedData.blogs === 'object') {
            // If blogs is an object, try to convert it to array
            console.warn("Blogs is an object, attempting conversion");
            data = Object.values(parsedData.blogs);
          } else if (parsedData && parsedData.message) {
            // API returned a message instead of data
            console.warn("API message:", parsedData.message);
            data = [];
          } else {
            // Handle empty or unexpected response
            console.warn("Unexpected or empty response format:", parsedData);
            data = [];
          }
          
          // Ensure data is definitely an array before mapping
          if (!Array.isArray(data)) {
            console.error("Data is not an array after processing:", data);
            data = [];
          }
          
          (`Successfully loaded ${data.length} blogs`);
          
          // Debug log for media info
          if (data.length > 0) {
            ({
              title: data[0].title,
              introImage: data[0].introImage,
              descriptionImage: data[0].descriptionImage,
              introMediaType: data[0].introMediaType,
              descriptionMediaType: data[0].descriptionMediaType,
            });
          }
        } catch (parseErr) {
          console.error("Failed to parse JSON:", parseErr, "Text received:", text);
          throw new Error("Invalid response format from server");
        }

        // Safely map the data
        const mapped = Array.isArray(data) 
          ? data.map((b) => mapBlogToCard(b))
          : [];
        
        setBlogs(mapped);
      } catch (err: any) {
        console.error("Error fetching blogs:", err);
        setError(err?.message || "Unable to fetch blogs. Please try again later.");
        setBlogs([]); // Ensure blogs is set to empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleCreateOrDashboard = () => {
    if (!isAuthenticated) return navigate("/auth");
    if (user?.isAdmin) return navigate("/admin-dashboard");
    return navigate("/user-dashboard");
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto text-indigo-600" />
          <p className="mt-4 text-lg text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Blogs & Insights | inte-QT</title>
        <meta
          name="description"
          content="Explore blogs and insights on SD-WAN, MPLS, NSOC operations, network monitoring, global connectivity, IoT, automation, SLA management, and enterprise internet solutions from inte-QT."
        />
        <link rel="canonical" href="https://www.inte-qt.com/blog" />
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
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] animate-fade-in">
              Blogs & Insights
            </h1>

            <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-in-up">
              Stay informed with the latest industry news, technology insights, and expert analysis
            </p>

            <button
              onClick={handleCreateOrDashboard}
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl mt-3"
            >
              {isAuthenticated
                ? user?.isAdmin
                  ? "Go to Admin Dashboard"
                  : "Go to Dashboard"
                : "Login to Contribute"}
            </button>
          </div>
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {error && (
            <div className="mb-10 max-w-2xl mx-auto">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Load Blogs</h3>
                <p className="text-red-600 mb-4">{error}</p>
                <Button 
                  onClick={() => window.location.reload()} 
                  variant="outline"
                  className="border-red-300 text-red-700 hover:bg-red-50"
                >
                  Try Again
                </Button>
              </div>
            </div>
          )}

          {!error && blogs.length === 0 && (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="text-gray-400 mb-4">
                  <User className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No Blogs Yet</h3>
                <p className="text-gray-500 mb-6">Be the first to share your insights!</p>
                <Button onClick={handleCreateOrDashboard}>
                  Create Your First Blog
                </Button>
              </div>
            </div>
          )}

          {!error && Array.isArray(blogs) && blogs.length > 0 && (
            <>
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Latest Articles
                </h2>
                <p className="text-gray-600 text-lg">
                  Discover our collection of {blogs.length} articles
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {blogs.map((blog) => (
                  <Card
                    key={blog.id}
                    className="overflow-hidden border border-gray-200 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-white flex flex-col h-full hover:border-indigo-200 group"
                  >
                    <div className="w-full h-56 md:h-64 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <MediaPreview
                        src={blog.img}
                        alt={blog.title}
                        isVideo={blog.imgIsVideo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {blog.imgIsVideo && (
                        <div className="absolute top-3 right-3 z-20">
                          <span className="bg-black/80 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            Video
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                        {blog.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                        {blog.excerpt}
                      </p>

                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="font-medium text-gray-700">{blog.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>{blog.date}</span>
                          </div>
                        </div>

                        <Button
                          className="w-full group/btn"
                          onClick={() => navigate(`/blog/${blog.slug}`)}
                          variant="outline"
                        >
                          <span>Read Article</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;