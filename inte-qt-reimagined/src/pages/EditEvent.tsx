import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inteqt.onrender.com";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    city: "",
    description: "",
    type: "",
    link: "",
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const token = localStorage.getItem("eventToken");

        const res = await fetch(`${API_BASE}/api/events/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to load event");

        const data = await res.json();
        setForm({
          title: data.title,
          date: data.date,
          location: data.location,
          city: data.city,
          description: data.description,
          type: data.type,
          link: data.link || "",
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("eventToken");

      const res = await fetch(`${API_BASE}/api/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Update failed");

      navigate("/events");
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 space-y-4">
      {Object.entries(form).map(([key, value]) => (
        <input
          key={key}
          name={key}
          value={value}
          onChange={handleChange}
          placeholder={key}
          className="w-full border p-2 rounded"
        />
      ))}

      <button className="bg-primary px-4 py-2 rounded text-white">
        Update Event
      </button>
    </form>
  );
};

export default EditEvent;
