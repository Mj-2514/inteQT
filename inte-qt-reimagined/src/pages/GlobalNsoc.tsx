// src/pages/GlobalNsoc.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Shield, Wifi, Users, ArrowRight, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

/**
 * Global NSOC page
 * - Responsive layout (mobile-first)
 * - SEO: title, description, canonical, OG, Twitter, JSON-LD
 * - Accessibility: aria attributes, semantic HTML
 * - Keeps your UI intact
 */

export default function GlobalNsoc(): JSX.Element {
  const pageUrl = "https://www.inte-qt.com/global-nsoc";
  const ogImage = "https://www.inte-qt.com/og/global-nsoc-1200x630.jpg"; // replace with actual image path

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Global Network Security Operations Center (NSOC)",
    description:
      "24×7 monitoring, threat detection, incident response, route optimization, and network diagnostics across 190+ countries.",
    provider: {
      "@type": "Organization",
      name: "inte-QT",
      url: "https://www.inte-qt.com",
    },
    url: pageUrl,
    areaServed: "Worldwide",
  };

  return (
    <>
      <Helmet>
        <title>Global NSOC | 24×7 Network Security Operations Center – inte-QT</title>

        <meta
          name="description"
          content="inte-QT’s Global NSOC provides 24×7 monitoring, incident response, real-time threat detection, and optimized network performance across 190+ countries."
        />
        <meta
          name="keywords"
          content="global nsoc, network security operations center, nsoc services, 24x7 monitoring, threat detection, enterprise network monitoring, telecom nsoc"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:title" content="Global Network Security Operations Center | inte-QT" />
        <meta
          property="og:description"
          content="Experience continuous monitoring, proactive threat defense, and real-time diagnostics through inte-QT’s Global NSOC."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Global NSOC | Secure, Monitor & Optimize – inte-QT" />
        <meta
          name="twitter:description"
          content="24×7 monitoring, AI-powered diagnostics, and rapid incident response with inte-QT’s Global NSOC."
        />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* HERO */}
        <main className="flex-1">
          <section
            className="relative h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] flex items-center justify-center text-center overflow-hidden"
            aria-labelledby="nsoc-hero-title"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/vector-1762275212334-bd13fce3c41e?w=1400&q=80&auto=format&fit=crop")',
              }}
              role="img"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

            <div className="relative z-10 px-6 max-w-3xl">
              <h1 id="nsoc-hero-title" className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Global Network Security Operations Center
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6">
                24×7 monitoring, proactive threat defense, and fully managed network security.
              </p>

              <Button size="lg" className="gradient-primary shadow-glow" asChild>
                <a href="/contact" aria-label="Contact NSOC team">Get Started <ArrowRight className="ml-2" /></a>
              </Button>
            </div>
          </section>

          {/* OVERVIEW */}
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">What is Global NSOC?</h2>
              <p className="text-base sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
                Our NSOC team continuously monitors, optimizes, and protects your network infrastructure.
                Powered by advanced analytics, AI-driven alerts, and real-time diagnostics, we ensure
                uninterrupted performance across 190+ countries.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-glow transition-all">
                  <CardContent className="p-6 text-center">
                    <Eye className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-1">24×7 Monitoring</h3>
                    <p className="text-sm text-muted-foreground">Real-time network visibility with instant alerts.</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-glow transition-all">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-1">Threat Detection</h3>
                    <p className="text-sm text-muted-foreground">AI-based threat detection and rapid mitigation.</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-glow transition-all">
                  <CardContent className="p-6 text-center">
                    <Wifi className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-1">Optimized Connectivity</h3>
                    <p className="text-sm text-muted-foreground">Intelligent routing, uptime assurance, and fault isolation.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* VIDEO / PROCESS */}
          <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">NSOC Processes — End to End Management</h2>
              <p className="text-base sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                From proactive monitoring to rapid incident response, our NSOC team ensures your
                business stays online, secure, and optimized at all times.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-2xl border bg-black">
                {/* responsive video with fallback poster */}
                <video
                  src="/videos/NSOC_arrow.mp4"
                  poster="/images/nsoc-poster.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[220px] sm:h-[300px] md:h-[420px] object-cover"
                  aria-label="NSOC process video"
                >
                  {/* Fallback content for very old browsers */}
                  Your browser does not support HTML5 video. View our NSOC overview on the website.
                </video>
              </div>
            </div>
          </section>

          {/* FEATURES GRID */}
          <section className="py-12 md:py-20 bg-muted/40">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Key Capabilities</h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto mt-2">
                  Everything your enterprise needs to stay secure and connected.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Users, title: "Incident Response", desc: "Rapid triage and immediate troubleshooting." },
                  { icon: Activity, title: "Performance Analytics", desc: "Deep insights into bandwidth, routing, and latency." },
                  { icon: Shield, title: "Security Enforcement", desc: "Firewall, IDS/IPS, and threat-proof architecture." },
                  { icon: Wifi, title: "Network Optimization", desc: "Route tuning and zero-downtime maintenance." },
                  { icon: Eye, title: "Real-Time Alerts", desc: "Smart notifications with severity grading." },
                  { icon: ArrowRight, title: "Root Cause Analysis", desc: "Comprehensive RCA documentation for every event." },
                ].map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className="p-5 hover:shadow-glow transition-all">
                      <CardContent className="text-center">
                        <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                        <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
                        <p className="text-sm text-muted-foreground">{f.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 md:py-16 gradient-hero text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white">Ready to secure your global network?</h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 text-muted-foreground texst-black">Speak with our NSOC specialists today.</p>

              <Button size="lg" variant="secondary" asChild>
                <a href="/contact" aria-label="Contact NSOC">Contact Us <ArrowRight className="ml-2" /></a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
