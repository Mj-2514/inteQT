// src/pages/RejectedEvents.tsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const API_BASE = import.meta.env.DEV ? "http://localhost:5000" : "https://inteqt.onrender.com";

const RejectedEvents = () => {
  const { token } = useAuth();
  const [rejected, setRejected] = useState<any[]>([]);

  useEffect(() => { fetchRejected(); }, []);

  const fetchRejected = async () => {
    const res = await fetch(`${API_BASE}/api/admin/events?status=rejected`, { headers: { Authorization: `Bearer ${token}` } });
    const data = await res.json();
    setRejected(data.events || []);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Rejected Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rejected.map(e => (
          <Link key={e._id} to={`/event-admin-dashboard/events/${e._id}`} className="border rounded p-4 hover:shadow transition">
            <h2 className="font-semibold">{e.title}</h2>
            <p className="text-gray-500">{e.type}</p>
            <p className="text-gray-400 text-sm">Submitted by: {e.userName}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RejectedEvents;
