import { Helmet } from "react-helmet-async";
import { blogData } from "../pages/blog-data";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 px-4 max-w-6xl mx-auto">
      <Helmet>
        <title>Blogs | inteQT</title>
        <meta
          name="description"
          content="Explore latest blogs from networking, SD-WAN, 5G, automation and more."
        />
        <link rel="canonical" href="https://www.inte-qt.com/blog" />
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

              <button
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
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
