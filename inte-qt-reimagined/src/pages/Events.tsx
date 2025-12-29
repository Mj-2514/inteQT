import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Plus,
  Pencil,
  Trash2,
  LogIn,
  User,
  Shield,
  ExternalLink,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

/* =========================
   API BASE
========================= */
const API_BASE = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inteqt.onrender.com";

/* =========================
   TYPES (MATCH BACKEND)
========================= */
interface EventItem {
  _id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location?: string;
  city?: string;
  type: string;
  introMedia?: string;
  mediaType?: "image" | "video" | "gif" | "none";
  linkedPostUrl?: string; // ✅ MATCHES SCHEMA
  status: "pending" | "published" | "rejected";
  slug: string;
  views: number;
  tags?: string[];
}

/* =========================
   AUTH HELPER
========================= */
const getEventUser = () => {
  try {
    const raw = localStorage.getItem("eventUser");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

/* =========================
   DATE FORMATTER
========================= */
const formatEventDateRange = (start: string, end: string) => {
  const s = new Date(start);
  const e = new Date(end);

  if (s.toDateString() === e.toDateString()) {
    return s.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  return `${s.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })} – ${e.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}`;
};

/* =========================
   COMPONENT
========================= */
export default function Events() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const eventUser = getEventUser();
  const isLoggedIn = Boolean(eventUser);
  const isAdmin = Boolean(eventUser?.isAdmin);

  /* =========================
     FETCH PUBLISHED EVENTS
  ========================= */
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/events/all-events`);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();

        // 🔒 GUARANTEE ARRAY
        const safeEvents: EventItem[] = Array.isArray(data)
          ? data
          : Array.isArray(data?.events)
          ? data.events
          : [];

        setEvents(safeEvents);
        setError(null);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load events.");
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  /* =========================
     DELETE (ADMIN ONLY)
  ========================= */
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this event permanently?")) return;

    const token = localStorage.getItem("eventToken");
    if (!token) return navigate("/events/login");

    try {
      const res = await fetch(`${API_BASE}/api/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Delete failed");

      setEvents((prev) => prev.filter((e) => e._id !== id));
    } catch {
      alert("Failed to delete event.");
    }
  };

  /* =========================
     SORT (SAFE)
  ========================= */
  const sortedEvents = Array.isArray(events)
    ? [...events].sort(
        (a, b) =>
          new Date(b.startDate).getTime() -
          new Date(a.startDate).getTime()
      )
    : [];

  /* =========================
     AUTH CTA BUTTONS
  ========================= */
  const renderAuthButtons = () => {
    if (!isLoggedIn) {
      return (
        <Button onClick={() => navigate("/events/login")}>
          <LogIn className="w-4 h-4 mr-2" />
          Login to Event Portal
        </Button>
      );
    }

    if (isAdmin) {
      return (
        <div className="flex gap-4 justify-center">
          <Button onClick={() => navigate("/event/admin-dashboard")}>
            <Shield className="w-4 h-4 mr-2" />
            Admin Dashboard
          </Button>
          <Button variant="outline" onClick={() => navigate("/events/create")}>
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </div>
      );
    }

    return (
      <div className="flex gap-4 justify-center">
        <Button onClick={() => navigate("/events/dashboard")}>
          <User className="w-4 h-4 mr-2" />
          My Events
        </Button>
        <Button variant="outline" onClick={() => navigate("/events/create")}>
          <Plus className="w-4 h-4 mr-2" />
          Submit Event
        </Button>
      </div>
    );
  };

  /* =========================
     RENDER
  ========================= */
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Events & Exhibitions | inte-QT</title>
        <meta
          name="description"
          content="Explore global telecom events and exhibitions attended by inte-QT."
        />
      </Helmet>

      {/* HERO */}
      <section
  className="relative gradient-hero py-24 bg-content bg-center bg-no-repeat"
  style={{
    backgroundImage:
      'url("https://dipoletechi.co.uk/wp-content/uploads/2023/07/ezgif.com-optimize-6.gif")',
    backgroundSize: "600px",
    backgroundPosition: "96% center",
  }}
>
  {/* Same overlay strength as original */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="container mx-auto px-4 text-center relative z-10">
    <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
      Events & Exhibitions
    </h1>

    <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto font-bold">
      Meet us at global industry events
    </p>

    <div className="flex justify-center gap-4 mt-3">
      {renderAuthButtons()}
    </div>
  </div>
</section>





      {/* EVENTS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading && <p className="text-center">Loading events…</p>}
          {error && <p className="text-center text-red-600">{error}</p>}

          {!loading && !error && sortedEvents.length === 0 && (
            <p className="text-center text-muted-foreground">
              No published events yet.
            </p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sortedEvents.map((event) => (
              <Card key={event._id} className="flex flex-col">
                {event.introMedia && (
                  <img
                    src={event.introMedia}
                    alt={event.title}
                    className="aspect-video object-cover"
                  />
                )}

                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    {event.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="text-sm space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatEventDateRange(
                        event.startDate,
                        event.endDate
                      )}
                    </div>
                    {(event.location || event.city) && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                        {event.city ? `, ${event.city}` : ""}
                      </div>
                    )}
                  </div>

                  {/* ✅ READ MORE */}
                  {event.linkedPostUrl && (
                    <Button
                      variant="outline"
                      className="mb-4 flex items-center gap-2"
                      onClick={() =>
                        window.open(event.linkedPostUrl, "_blank")
                      }
                    >
                      <ExternalLink className="w-4 h-4" />
                      Read more
                    </Button>
                  )}

                  {isAdmin && (
                    <div className="mt-auto flex gap-2">
                      <Button
                        size="sm"
                        onClick={() =>
                          navigate(`/events/edit/${event._id}`)
                        }
                      >
                        <Pencil className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(event._id)}
                      >
                        <Trash2 className="w-3 h-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
