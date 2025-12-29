// src/pages/AllEvents.tsx
import { useEffect, useState } from "react";
import { Calendar, MapPin, Eye } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const API_BASE = import.meta.env.DEV ? "http://localhost:5000" : "https://inteqt.onrender.com";

const AllEvents = () => {
  const { token } = useAuth();
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/events`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setEvents(data.events || data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map(e => (
        <div key={e._id} className="border rounded-lg p-4 hover:shadow-lg transition">
          <h2 className="font-bold">{e.title}</h2>
          <p className="text-sm">{e.type}</p>
          <p className="text-xs text-gray-500 flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.city}, {e.location}</p>
          <p className="text-xs text-gray-500 flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(e.startDate).toLocaleString()}</p>
          <Link to={`/events/${e._id}`} className="mt-2 inline-block text-blue-600 hover:underline flex items-center gap-1"><Eye className="h-4 w-4"/> View</Link>
        </div>
      ))}
    </div>
  );
};

export default AllEvents;
