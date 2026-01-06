import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { UserPlus, Loader2 } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE;

export default function EventCreateUser() {
  const navigate = useNavigate();
  const { eventUser, token } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Only admin can access
  useEffect(() => {
    if (!eventUser?.isAdmin) navigate("/events/login");
  }, [eventUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/api/event-auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to create user");

      alert(`User ${data.user.name} created successfully!`);
      navigate("/event/admin-dashboard");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <UserPlus className="w-6 h-6" /> Create User
        </h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email (must be @inte-qt.com)"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-indigo-700"
          >
            {loading && <Loader2 className="w-5 h-5 animate-spin" />}
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}
