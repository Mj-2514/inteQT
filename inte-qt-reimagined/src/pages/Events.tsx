import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const API_BASE = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inteqt.onrender.com";

/* =========================
   Helpers
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
   Date Formatter
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

  const sameMonth = s.getMonth() === e.getMonth();
  const sameYear = s.getFullYear() === e.getFullYear();

  if (sameMonth && sameYear) {
    return `${s.getDate()} – ${e.getDate()} ${s.toLocaleDateString("en-IN", {
      month: "short",
      year: "numeric",
    })}`;
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
   Types
========================= */
type EventItem = {
  _id?: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  city: string;
  description: string;
  type: string;
  link?: string;
  mediaUrl?: string;
};

export default function Events() {
  const navigate = useNavigate();

  const eventUser = getEventUser();
  const isLoggedIn = Boolean(eventUser);
  const isAdmin = Boolean(eventUser?.isAdmin === true);

  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  /* =========================
     Fetch Events
  ========================= */
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/events`);
        const data = await res.json();
        setEvents(data || []);
      } catch {
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  /* =========================
     Delete Event (ADMIN)
  ========================= */
  const handleDelete = async (id?: string) => {
    if (!id) return;
    if (!window.confirm("Delete this event?")) return;

    const token = localStorage.getItem("eventToken");

    await fetch(`${API_BASE}/api/events/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setEvents((prev) => prev.filter((e) => e._id !== id));
  };

  const sortedEvents = [...events].sort(
    (a, b) =>
      new Date(b.startDate).getTime() -
      new Date(a.startDate).getTime()
  );
  <Helmet>
  <title>Telecom Events & Exhibitions | Global Conferences & Meetups – inte-QT</title>

  <meta
    name="description"
    content="Explore all global telecom events and exhibitions attended by inte-QT, including ITW, Capacity Europe, Channel Partners Expo, PTC, and more. Meet us at the world’s biggest telecom and connectivity conferences."
  />

  <meta
    name="keywords"
    content="telecom events, telecom exhibitions, ITW conference, capacity europe, enterprise connectivity events, telecom expo, global telecom conferences, networking events telecom"
  />

  <link rel="canonical" href="https://www.inte-qt.com/events" />

  {/* OpenGraph */}
  <meta property="og:title" content="Telecom Events & Exhibitions | inte-QT" />
  <meta
    property="og:description"
    content="Meet inte-QT at global telecom, connectivity, and cloud networking events worldwide. Explore our upcoming and past event participation."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.inte-qt.com/events" />
  <meta property="og:image" content="https://imgur.com/y1G9poB.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Telecom Events & Exhibitions | inte-QT" />
  <meta
    name="twitter:description"
    content="Your gateway to major telecom exhibitions and conferences where inte-QT participates globally."
  />
  <meta name="twitter:image" content="https://imgur.com/y1G9poB.png" />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Telecom Events & Exhibitions",
        "description": "A global list of telecom conferences, expos, and events attended by inte-QT.",
        "url": "https://www.inte-qt.com/events",
        "publisher": {
          "@type": "Organization",
          "name": "inte-QT",
          "url": "https://www.inte-qt.com"
        }
      }
    `}
  </script>
</Helmet>
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Telecom Events & Exhibitions | inte-QT</title>
        <meta
          name="description"
          content="Explore global telecom events, conferences, and exhibitions where inte-QT participates."
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Events & Exhibitions
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto font-bold">
            Meet us at global industry events
          </p>

          {/* ADMIN ONLY */}
          
            <div className="mt-8">
              <Button
                className="gradient-primary"
                onClick={() => navigate("/events/auth")}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Event
              </Button>
            </div>
          
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading && (
            <p className="text-center text-muted-foreground">
              Loading events…
            </p>
          )}

          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {sortedEvents.map((event) => (
                <Card
                  key={event._id}
                  className="overflow-hidden rounded-xl hover:shadow-xl transition flex flex-col"
                >
                  {/* IMAGE — NO CROPPING */}
                  {event.mediaUrl && (
                    <div className="w-full aspect-[16/9] bg-muted flex items-center justify-center">
                      <img
                        src={event.mediaUrl}
                        alt={event.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  )}

                  <CardContent className="p-6 flex flex-col flex-1">
                    <p className="text-xs font-semibold uppercase text-primary mb-2">
                      {event.type}
                    </p>

                    <h3 className="text-2xl font-bold mb-3">
                      {event.title}
                    </h3>

                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {event.description}
                    </p>

                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatEventDateRange(
                          event.startDate,
                          event.endDate
                        )}
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5" />
                        <span>
                          {event.location}
                          <br />
                          {event.city}
                        </span>
                      </div>
                    </div>

                    <div className="mt-auto pt-6 space-y-2">
                      {event.link && (
                        <Button
                          className="w-full"
                          onClick={() =>
                            window.open(event.link!, "_blank")
                          }
                        >
                          See Event <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      )}

                      {/* ADMIN ONLY */}
                      {isAdmin && event._id && (
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            className="w-full"
                            onClick={() =>
                              navigate(`/events/edit/${event._id}`)
                            }
                          >
                            <Pencil className="w-4 h-4 mr-1" />
                            Edit
                          </Button>

                          <Button
                            variant="destructive"
                            className="w-full"
                            onClick={() => handleDelete(event._id)}
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
