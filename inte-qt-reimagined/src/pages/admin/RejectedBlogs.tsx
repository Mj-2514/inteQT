import { useEffect, useState } from "react";

const API =import.meta.env.VITE_API_BASE;

export default function RejectedBlogs() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API}/api/admin/blogs/status/rejected`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(r => r.json())
      .then(setBlogs);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Rejected Blogs</h1>
      {blogs.map(b => (
        <div key={b._id} className="border p-4 rounded mb-4">
          {b.title}
        </div>
      ))}
    </div>
  );
}
