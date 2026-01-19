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
const API_BASE = import.meta.env.VITE_API_BASE;

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
  linkedPostUrl?: string;
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
  try {
    const s = new Date(start);
    const e = new Date(end);

    if (isNaN(s.getTime()) || isNaN(e.getTime())) {
      return "Date TBA";
    }

    if (s.toDateString() === e.toDateString()) {
      return s.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }

    return `${s.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })} - ${e.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}`;
  } catch {
    return "Date TBA";
  }
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

  // SEO Configuration
  const seoConfig = {
    title: "Industry Events & Telecom Exhibitions | Global Connectivity Conferences | inte-QT",
    description: "Explore inte-QT's participation in global telecom events, industry exhibitions, and connectivity conferences. Join our partner center meetings and networking events worldwide.",
    canonical: "https://www.inte-qt.com/events",
    image: "https://i.imgur.com/fgarNxn.png",
    keywords: "telecom events, industry exhibitions, connectivity conferences, partner meetings, networking events, global conferences"
  };

  // Structured Data
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industry Events & Exhibitions",
    description: "Global telecom and connectivity events attended by inte-QT",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Event",
          name: "International Telecoms Week 2024",
          description: "The world's largest gathering of telecommunications executives, featuring inte-QT's latest global connectivity innovations.",
          startDate: "2025-05-05",
          location: {
            "@type": "Place",
            name: "National Harbor, USA"
          },
          url: "https://www.inte-qt.com/events/international-telecoms-week-2024"
        }
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Event",
          name: "Channel Partners Conference & Expo 2025",
          description: "Leading channel partner event showcasing inte-QT's partner program and collaborative solutions.",
          startDate: "2025-03-24",
          location: {
            "@type": "Place",
            name: "Las Vegas, USA"
          },
          url: "https://www.inte-qt.com/events/channel-partners-conference-2025"
        }
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Event",
          name: "Capacity Europe 2024",
          description: "Europe's premier connectivity event featuring inte-QT's network expansion announcements and partner meetings.",
          startDate: "2024-10-15",
          location: {
            "@type": "Place",
            name: "London, UK"
          },
          url: "https://www.inte-qt.com/events/capacity-europe-2024"
        }
      }
    ]
  };

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
        let safeEvents: EventItem[] = [];
        
        if (data.success && Array.isArray(data.events)) {
          safeEvents = data.events;
        } else if (Array.isArray(data)) {
          safeEvents = data;
        } else if (data?.events && Array.isArray(data.events)) {
          safeEvents = data.events;
        } else {
          console.warn("Unexpected response format:", data);
        }

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
        <Button onClick={() => navigate("/events/login")} aria-label="Login to Event Portal">
          <LogIn className="w-4 h-4 mr-2" />
          Login to Event Portal
        </Button>
      );
    }

    if (isAdmin) {
      return (
        <div className="flex gap-4 justify-center">
          <Button onClick={() => navigate("/event/admin-dashboard")} aria-label="Admin Dashboard">
            <Shield className="w-4 h-4 mr-2" />
            Admin Dashboard
          </Button>
          <Button variant="outline" onClick={() => navigate("/events/create")} aria-label="Create Event">
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </div>
      );
    }

    return (
      <div className="flex gap-4 justify-center">
        <Button onClick={() => navigate("/events/dashboard")} aria-label="My Events Dashboard">
          <User className="w-4 h-4 mr-2" />
          My Events
        </Button>
        <Button variant="outline" onClick={() => navigate("/events/create")} aria-label="Submit New Event">
          <Plus className="w-4 h-4 mr-2" />
          Submit Event
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <html lang="en" />
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        
        {/* hreflang Tags */}
        <link rel="alternate" hreflang="en" href="https://www.inte-qt.com/events" />
        <link rel="alternate" hreflang="es" href="https://www.inte-qt.com/es/events" />
        <link rel="alternate" hreflang="fr" href="https://www.inte-qt.com/fr/events" />
        <link rel="alternate" hreflang="de" href="https://www.inte-qt.com/de/events" />
        <link rel="alternate" hreflang="x-default" href="https://www.inte-qt.com/events" />
        
        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:url" content={seoConfig.canonical} />
        <meta property="og:site_name" content="inte-QT Events" />
        <meta property="og:image" content={seoConfig.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta name="twitter:image" content={seoConfig.image} />
        
        {/* Canonical */}
        <link rel="canonical" href={seoConfig.canonical} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(eventJsonLd)}
        </script>
      </Helmet>

      {/* HERO - EXACTLY AS YOU HAD IT */}
      <section
        className="relative gradient-hero py-24 bg-content bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://dipoletechi.co.uk/wp-content/uploads/2023/07/ezgif.com-optimize-6.gif")',
          backgroundSize: "600px",
          backgroundPosition: "96% center",
        }}
        aria-labelledby="events-hero-heading"
      >
        {/* Same overlay strength as original */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content - EXACTLY AS YOU HAD IT */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 id="events-hero-heading" className="text-white text-5xl md:text-6xl font-bold mb-6">
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

      {/* EVENTS SECTION - EXACTLY AS YOU HAD IT, NO CHANGES */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading && <p className="text-center">Loading events…</p>}
          {error && <p className="text-center text-red-600">{error}</p>}

          {!loading && !error && sortedEvents.length === 0 && (
            <p className="text-center text-muted-foreground">
              No published events yet.
            </p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedEvents.map((event) => (
              <Card 
                key={event._id} 
                className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 border-border/50"
              >
                {/* Image container with proper aspect ratio */}
                {event.introMedia && (
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <img
                      src={event.introMedia}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.src = "https://via.placeholder.com/400x200/1e293b/64748b?text=Event+Image";
                      }}
                    />
                  </div>
                )}

                <CardContent className="p-5 flex flex-col flex-1">
                  {/* Event Title with proper truncation */}
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 min-h-[3.5rem]">
                    {event.title}
                  </h3>

                  

                  {/* Event Details */}
                  <div className="text-sm space-y-2 mb-5">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="font-medium">
                        {formatEventDateRange(event.startDate, event.endDate)}
                      </span>
                    </div>
                    {(event.location || event.city) && (
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="truncate">
                          {event.location}
                          {event.city ? `, ${event.city}` : ""}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bottom section: Read More + Admin buttons */}
                  <div className="mt-auto space-y-3">
                    {/* Read More button */}
                    {event.linkedPostUrl && (
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 border-primary/20 hover:border-primary hover:bg-primary/5"
                        onClick={() => window.open(event.linkedPostUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Read more
                      </Button>
                    )}

                    {/* Admin buttons */}
                    {isAdmin && (
                      <div className="flex gap-2 pt-2 border-t border-border/50">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => navigate(`/events/edit/${event._id}`)}
                        >
                          <Pencil className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          className="flex-1"
                          onClick={() => handleDelete(event._id)}
                        >
                          <Trash2 className="w-3 h-3 mr-1" />
                          Delete
                        </Button>
                      </div>
                    )}
                  </div>
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