import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Activity,
  Wifi,
  ArrowRight,
  Layers,
  Cpu,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

export default function Aeta(): JSX.Element {
  const pageUrl = "https://www.inte-qt.com/aeta";
  const videoUrl =
    "https://res.cloudinary.com/dmhhkhgny/video/upload/v1745406688/website/vzw7z92zdvomwfvwlguc.mp4";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AETA Automation Platform",
    description:
      "AETA is an agile automation platform providing a single interface for quote-to-cash assurance, real-time APIs, policy control, and interoperable enterprise workflows.",
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    provider: {
      "@type": "Organization",
      name: "inte-QT",
      url: "https://www.inte-qt.com",
    },
    url: pageUrl,
  };

  return (
    <>
      <Helmet>
        <title>
          AETA Automation Platform | Quote-to-Cash Assurance – inte-QT
        </title>

        <meta
          name="description"
          content="AETA is an enterprise automation platform built on agile architecture. One interface for quote-to-cash assurance, real-time quotes, APIs, and policy control."
        />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content="AETA Automation Platform" />
        <meta
          property="og:description"
          content="Single interface for quote-to-cash assurance with real-time APIs and enterprise-grade interoperability."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {/* ================= HERO (VIDEO) ================= */}
          {/* ================= AETA INTRO ================= */}
<section className="py-20 md:py-28 bg-background text-center">
  <div className="container mx-auto px-6 max-w-4xl">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
      AETA Automation Platform
    </h1>

    <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
      The finest automation platform built on agile architecture —
      delivering a single interface for quote-to-cash assurance,
      real-time control, and seamless interoperability.
    </p>

    <Button size="lg" className="gradient-primary shadow-glow px-10 py-6 text-lg" asChild>
      <a
        href="https://portal.inte-qt.com/auth/login/?next=/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Access AETA Portal <ArrowRight className="ml-2" />
      </a>
    </Button>
  </div>
</section>


          {/* ================= AETA SPLIT SECTION ================= */}
{/* ================= AETA SPLIT SECTION (VIDEO EMPHASIS) ================= */}
<section className="py-24 md:py-32 bg-background">
  <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 items-center">

    {/* LEFT: CONTENT */}
    <div>
      <h2 className="text-2xl md:text-4xl font-bold mb-6">
        One Platform. Total Control.
      </h2>

      <p className="text-muted-foreground mb-6 text-base md:text-lg leading-relaxed">
        AETA unifies quoting, assurance, policy control, and APIs into a single
        interoperable automation layer — designed for scale, speed, and
        precision.
      </p>

      <ul className="space-y-4">
        {[
          "Single interface for quote-to-cash workflows",
          "Real-time quotes with policy enforcement",
          "Secure web login and API access",
          "Interoperable with private and partner systems",
        ].map((item, i) => (
          <li key={i} className="flex gap-3 items-start">
            <Shield className="w-5 h-5 text-primary mt-1 shrink-0" />
            <span className="text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT: BIG VIDEO */}
    {/* RIGHT: FIXED-SIZE VIDEO */}
<div className="relative w-full flex justify-center lg:justify-end">
  <div
    className="
      bg-black rounded-2xl overflow-hidden shadow-2xl
      aspect-video
      w-full
      max-w-[720px]
    "
  >
    <video
      className="w-full h-full object-contain"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source
        src="https://res.cloudinary.com/dmhhkhgny/video/upload/v1745406688/website/vzw7z92zdvomwfvwlguc.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</div>


  </div>
</section>



          {/* ================= CAPABILITIES ================= */}
          <section className="py-14 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
                Platform Capabilities
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Layers,
                    title: "Agile Architecture",
                    desc: "Built to evolve with continuous feature updates.",
                  },
                  {
                    icon: Cpu,
                    title: "API-First Design",
                    desc: "Test APIs, private APIs, and partner integrations.",
                  },
                  {
                    icon: Activity,
                    title: "Real-Time Quotes",
                    desc: "Instant pricing with policy validation.",
                  },
                  {
                    icon: Wifi,
                    title: "Interoperable",
                    desc: "Seamless integration across ecosystems.",
                  },
                  {
                    icon: Shield,
                    title: "Policy Control",
                    desc: "Centralized governance and assurance.",
                  },
                  {
                    icon: ArrowRight,
                    title: "Project Workflows",
                    desc: "Structured steps from quote to delivery.",
                  },
                ].map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className="hover:shadow-glow transition-all">
                      <CardContent className="p-6 text-center">
                        <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold">{f.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {f.desc}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ================= CTA ================= */}
          <section className="py-14 md:py-20 gradient-hero text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Experience Automation Without Friction
              </h2>
              <p className="text-white/80 mb-6">
                Access the AETA platform and streamline your quote-to-cash
                operations today.
              </p>

              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://portal.inte-qt.com/auth/login/?next=/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to AETA Portal <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
