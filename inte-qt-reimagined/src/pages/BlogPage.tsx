import { Helmet } from "react-helmet-async";
import { blogData } from "../pages/blog-data";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();

  // === SEO Canonical URL ===
  const canonical = "https://www.inte-qt.com/blog";

  // === JSON-LD: Organization Schema ===
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "inteQT",
    url: "https://www.inte-qt.com",
    logo: "https://www.inte-qt.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/bitsandbyteglobal/posts/?feedView=all",
    ],
  };

  // === JSON-LD: Website Schema ===
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "inteQT",
    url: "https://www.inte-qt.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.inte-qt.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // === JSON-LD: Breadcrumb Schema ===
  const breadcrumbJsonLd = {
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

  // === JSON-LD: Blog List Schema ===
  const blogListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: canonical,
    name: "inteQT Blog",
    description:
      "Insights on global networks, SD-WAN, telecom, DIA, routing, 5G and more.",
    blogPost: blogData.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      image: blog.img,
      author: {
        "@type": "Person",
        name: blog.author || "inteQT Editorial Team",
      },
      datePublished: blog.date || "2025-01-01",
      url: `https://www.inte-qt.com/blog/${blog.slug}`,
      description: blog.excerpt,
    })),
  };

  return (
    <div className="pt-28 pb-20 px-4 max-w-6xl mx-auto">
      <Helmet>
        <title>Blogs | inteQT</title>
        <meta
          name="description"
          content="Explore latest blogs from networking, SD-WAN, 5G, automation and more."
        />
        <link rel="canonical" href={canonical} />

        {/* === Inject JSON-LD SEO === */}
        <script type="application/ld+json">
          {JSON.stringify(orgJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(blogListJsonLd)}
        </script>
      </Helmet>

      <h1 className="text-4xl font-bold mb-10 text-center">Blogs</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white dark:bg-neutral-900 shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition"
            onClick={() => navigate(`/blog/${blog.slug}`)}
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                {blog.excerpt}
              </p>

              <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
