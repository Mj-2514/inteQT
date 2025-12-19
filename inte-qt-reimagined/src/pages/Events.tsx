import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";


const Events = () => {
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

  const upcomingEvents = [
    {
      img: "https://imgur.com/y1G9poB.png",
      title: "International Telecoms Week 2024",
      date: "5 - 7 May 2025",
      location: "Gaylord National Resort & Convention Centre",
      city: "National Harbor, USA",
      description:
        "The world's largest annual gathering of international wholesale telecoms professionals.",
      type: "Conference",
      link:"https://www.linkedin.com/posts/bitsandbyteglobal_itw2025-keepingtheworldconnected-inteqt-activity-7323719026596073476-sDhS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWwxKcBI0BREvIY19bExq4WeJKoDAUgNyg"
    },
    {
      img: "https://i.imgur.com/6G5KxAG.jpg",
      title: "Channel Partners Conference & Expo 2025",
      date: "24 - 25 March 2025",
      location: "The Venetian Resort",
      city: "Las Vegas, USA",
      description:
        "Premier event for indirect sales leaders and technology services distributors.",
      type: "Expo",
      link:"https://www.linkedin.com/posts/dagagaurav_channelpartners-sdwan-connectivity-activity-7306338847896862722-BxOt?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWwxKcBI0BREvIY19bExq4WeJKoDAUgNyg"
    },
    {
      img: "https://i.imgur.com/XAx622Y.jpg",
      title: "Capacity Europe 2024",
      date: "15 - 17 October 2024",
      location: "InterContinental London",
      city: "London, UK",
      description:
        "Europe's leading telecommunications and digital infrastructure event.",
      type: "Conference",
      link:"https://www.linkedin.com/posts/dagagaurav_inteqt-weareinteqt-internetaggregator-activity-7247932957078736898-fgwI?utm_source=share&utm_medium=member_ios"
    },

    // Repeating/other events (kept your original duplicates/content) — each has an img
    {
      img: "https://media.licdn.com/dms/image/v2/D4D22AQErfzJMyYQnbg/feedshare-shrink_800/feedshare-shrink_800/0/1724161514570?e=1764806400&v=beta&t=kmWPmodOFLLrzbbWWtOJTZeQp_3FQJqqR8Cjne7JJg4",
      title: "ITW Africa And Data Cloud Africa 2024",
      date: "10 - 12 October 2024",
      location: "Radisson Blu Hotel",
      city: "Kenya",
      description:
        "Europe's leading telecommunications and digital infrastructure event.",
      type: "Conference",
      link:"https://www.linkedin.com/posts/bitsandbyteglobal_itwafrica-itw2024-keepingtheworldconnected-activity-7231657540122513408-k4uO?utm_source=share&utm_medium=member_ios"
    },
    {
      img: "https://i.imgur.com/43lN9Po.jpg",
      title: "Aslan 2024",
      date: "10 - 18 April 2024",
      location: "InterContinental London",
      city: "Palacio de Congresos de IFEMA",
      description:
        "Europe's leading telecommunications and digital infrastructure event.",
      type: "Conference",
      link:"https://www.linkedin.com/posts/bitsandbyteglobal_aslan2024-madrid-aslan-activity-7185596782733574144-w5yd?utm_source=share&utm_medium=member_ios"
    },
    {
      img: "https://i.imgur.com/N9WxHdS.jpg",
      title: "Internation Telecoms Week 2024",
      date: "14 - 17 May 2024",
      location: "Gaylord National Resort & Convention Centre National Harbor",
      city: "MD",
      description:
        "Europe's leading telecommunications and digital infrastructure event.",
      type: "Conference",
      link:"https://www.linkedin.com/posts/bitsandbyteglobal_inte-qt-at-itw-2024-activity-7191032993136701440-QJAv/?utm_source=share&utm_medium=member_ios"
    },
    {
      img: "https://i.imgur.com/RHoqD2S.jpg",
      title: "Capacity Middle East 2024",
      date: "05 - 08 February 2024",
      location: "Grand Hyatt",
      city: "Dubai, UAE",
      description:
        "Europe's leading telecommunications and digital infrastructure event.",
      type: "Conference",
      link:"https://www.linkedin.com/posts/bitsandbyteglobal_capacitymiddleeast-capacitymedia-telecoms-activity-7153755223310675969-Uh3v?utm_source=share&utm_medium=member_ios"
    },
    {
      img: "https://i.imgur.com/uC4mK8p.jpg",
      title: "PTC 2024",
      date: "21 - 24 January 2024",
      location: "Honolulu",
      city: "Hawaii",
      description:
        "Europe's leading telecommunications and digital infrastructure event.",
      type: "Conference",
      link:"https://www.linkedin.com/posts/dagagaurav_ptc2024-api-hawaii-activity-7150533292499292162-svt6?utm_source=share&utm_medium=member_ios"
    },
    {
      img: "https://i.imgur.com/nAkVeWK.jpg",
      title: "Total Telecom 2023",
      date: "21 - 22 November 2023",
      location: "The Rai",
      city: "Amsterdam",
      description:
        "Europe's leading telecommunications and digital infrastructure event.",
      type: "Conference",
      link:"https://www.linkedin.com/posts/bitsandbyteglobal_conference-businessoutcomes-telecommunications-activity-7130910010393423872-B4zF?utm_source=share&utm_medium=member_ios"
    },
    {
      img: "https://i.imgur.com/1Qkqrmn.jpg",
      title: "Capacity Europe 2023",
      date: "17 - 19 October 2023",
      location: "London",
      city: "UK",
      description:
        "Europe's leading telecommunications and digital infrastructure event.",
      type: "Conference",
      link:"https://www.linkedin.com/posts/dagagaurav_london-capacityeurope2023-internetaccess-activity-7117125137639911424-XD8D?utm_source=share&utm_medium=member_ios"
    },
    {
      img: "https://i.imgur.com/b0C0jRl.jpg",
      title: "International telecoms Week",
      date: "14 - 17 May 2023",
      location: "Gaylord National Resort & Convention Centre National Harbor",
      city: "MD",
      description:
        "Europe's leading telecommunications and digital infrastructure event.",
      type: "Conference",
      link:"https://www.linkedin.com/posts/bitsandbyteglobal_itw2023-activity-7054431720669888512-dq_M?utm_medium=member_ios&utm_source=social_share_video"
    },
    {
      img: "https://i.imgur.com/vIt6jue.jpg",
      title: "Cloud Expo Europe 2022",
      date: "28 - 29 October 2022",
      location: "Madrid",
      city: "ES",
      description:
        "Europe's leading telecommunications and digital infrastructure event.",
      type: "Conference",
      link:"https://www.linkedin.com/posts/bitsandbyteglobal_ifemamadrid-access-sdwan-activity-6991348989002452993-OW4Y?utm_source=share&utm_medium=member_desktop"
    },
    {
      img: "https://i.imgur.com/89ne2Om.jpg",
      title: "Capacity Europe 2022",
      date: "17 - 20 October 2022",
      location: "InterContinental Continental",
      city: "London, UK",
      description:
        "Europe's leading telecommunications and digital infrastructure event.",
      type: "Conference",
      link:"https://www.linkedin.com/posts/bitsandbyteglobal_capacityeurope-telecoms-events-activity-6983397911896182785-qPYo?utm_source=share&utm_medium=member_android"
    },
    {
      img: "https://i.imgur.com/6BUFQXx.jpg",
      title: "Congreso & Expo Aslan 2022",
      date: "28 - 03 February 2022",
      location: "ES",
      city: "Spain",
      description:
        "Europe's leading telecommunications and digital infrastructure event.",
      type: "Conference",
      link:"https://www.linkedin.com/feed/update/urn:li:activity:6932313942992011264"
    },
    {
      img: "https://i.imgur.com/3SbymtI.jpg",
      title: "SDWAN And SASE Summit 2021",
      date: "14 - 16 December 2021",
      location: "France",
      city: "Paris",
      description:
        "Europe's leading telecommunications and digital infrastructure event.",
      type: "Conference",
      link:"https://www.linkedin.com/feed/update/urn:li:activity:6876121511753719808"
    },
    {
      img: "https://imgur.com/y1G9poB.png",
      title: "Capacity Europe 2021",
      date: "18 - 21 October 2021",
      location: "Virtual",
      city: "",
      description:
        "Europe's leading telecommunications and digital infrastructure event.",
      type: "Conference",
      link:"https://www.linkedin.com/posts/bitsandbyteglobal_capacityeurope2021-internetaccess-event-activity-6855817706504114176-o3eT"
    },
  ];

  const pastEvents = [
    {
      title: "MWC Barcelona 2024",
      date: "February 2024",
      location: "Barcelona, Spain",
      attendees: "50,000+",
    },
    {
      title: "ITW Chicago 2023",
      date: "May 2023",
      location: "Chicago, USA",
      attendees: "7,000+",
    },
    {
      title: "Capacity Asia 2023",
      date: "October 2023",
      location: "Singapore",
      attendees: "3,000+",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
  className="relative gradient-hero py-24 bg-content bg-center bg-no-repeat"
  style={{
    backgroundImage: `url("https://dipoletechi.co.uk/wp-content/uploads/2023/07/ezgif.com-optimize-6.gif")`,
    backgroundSize: "600px",
    backgroundPosition: "96% center",
  }}
>
  {/* contrast overlay */}
  <div className="absolute inset-0 bg-black/50" />
  <div className="container mx-auto px-4 text-center relative z-10">
    {/* <Globe className="w-20 h-20 mx-auto mb-6 animate-pulse-glow" /> */}
    <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] animate-fade-in">
  Events & Exhibitions
</h1>

<p className="text-white text-xl md:text-2xl max-w-3xl mx-auto font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-in-up">
  Meet us at industry-leading events around the world
</p>


  </div>
</section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Events</h2>
            <p className="text-xl text-muted-foreground text-gray">
              Connect with us at these upcoming industry events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background"
              >
                {/* IMAGE */}
                <div className="w-full h-56 bg-muted flex items-center justify-center overflow-hidden">
  <img
    src={event.img}
    alt={event.title}
    loading="lazy"
    className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
  />
</div>


                {/* CONTENT */}
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                    {event.type}
                  </p>

                  <h3 className="text-2xl font-bold leading-tight">{event.title}</h3>

                  <div className="space-y-2 text-muted-foreground text-sm">
                    {event.date && (
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                    )}

                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 mt-0.5" />
                      <div>
                        <p>{event.location}</p>
                        <p className="text-sm opacity-80">{event.city}</p>
                      </div>
                    </div>
                  </div>

                  {/* <p className="text-muted-foreground">{event.description}</p> */}

                 <Button
  className="gradient-primary shadow-glow w-full"
  onClick={() => event.link && window.open(event.link, "_blank")}
>
  See Post <ArrowRight className="ml-2 w-4 h-4" />
</Button>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
