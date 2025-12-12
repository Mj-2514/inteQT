// src/pages/Coverage.tsx
import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Network, CheckCircle } from "lucide-react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";

const WorldGlobe = lazy(() => import("./WorldGlobe"));

const canonical = "https://www.inte-qt.com/coverage";
const pageTitle = "Global Coverage — Regions & Countries Served | inte-QT";
const pageDescription =
  "inte-QT covers 190+ countries with enterprise-grade connectivity, multi-carrier redundancy, 24/7 monitoring and local support teams. Explore regional coverage and network features.";
const shareImage = "https://www.inte-qt.com/og/coverage-1200x630.jpg"; // ideal: place this file in /public/og/

const regions = [
  { name: "North America", slug: "north-america", countries: 25, image: "https://i.imgur.com/SrLzIM8.jpg" },
  { name: "South America", slug: "south-america", countries: 20, image: "https://i.imgur.com/YGlkriS.jpg" },
  { name: "Europe", slug: "europe", countries: 45, image: "https://i.imgur.com/tuFAw97.jpg" },
  { name: "Asia", slug: "asia", countries: 48, image: "https://i.imgur.com/iHPP1Ia.jpg" },
  { name: "Africa", slug: "africa", countries: 35, image: "https://i.imgur.com/0WyVgYN.jpg" },
  { name: "Oceania", slug: "oceania", countries: 17, image: "https://images.unsplash.com/photo-1539475314840-751cecc1dacd" },
];

const features = [
  "24/7 Network Monitoring",
  "99.9% Uptime Guarantee",
  "Local Support Teams",
  "Multi-carrier Redundancy",
  "Fastest Route Selection",
  "Real-time Performance Monitoring",
];

const orgJson = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "inte-QT",
  url: "https://www.inte-qt.com",
  logo: "https://www.inte-qt.com/logo.png",
};

const pageJson = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  description: pageDescription,
  url: canonical,
};

const breadcrumbJson = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.inte-qt.com" },
    { "@type": "ListItem", position: 2, name: "Coverage", item: canonical },
  ],
};

const Coverage: React.FC = () => {
  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        image={shareImage}
        siteName="inte-QT"
        extraJsonLd={[orgJson, pageJson, breadcrumbJson]}
      />

      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        {/* HERO + globe area */}
        <section className="relative">
          

          {/* HERO VISUAL: static fallback image for fast LCP */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[580px]">
            <div className="absolute inset-0 w-full h-full bg-slate-900">
              <img
                src="/og/coverage-1200x630.jpg"
                alt="inte-QT global coverage map"
                className="w-full h-full object-cover block"
                loading="eager"
                aria-hidden="false"
              />
            </div>

            {/* Lazy-loaded interactive globe: rendered on demand (keeps LCP fast) */}
            <Suspense fallback={null}>
              <div className="absolute inset-0">
                {/* pointer-events enabled here so globe is interactive once loaded */}
                <WorldGlobe />
              </div>
            </Suspense>
          </div>
        </section>

        {/* REGIONS */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Regional Coverage</h2>
              <p className="text-base sm:text-lg text-muted-foreground">We operate across all major regions — local support and multi-carrier redundancy.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region) => (
                <Link
                  to={`/coverage/${region.slug}`}
                  key={region.slug}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                  aria-label={`Coverage in ${region.name} — view countries`}
                >
                  <Card className="relative overflow-hidden group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-56 md:h-64">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${region.image})` }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/40 transition-all" aria-hidden="true" />

                    <CardContent className="relative z-10 p-6 h-full flex flex-col items-center justify-center text-center text-white">
                      <MapPin className="w-10 h-10 mb-3 drop-shadow-lg" aria-hidden="true" />
                      <h3 className="text-xl sm:text-2xl font-semibold mb-1 drop-shadow-lg">{region.name}</h3>
                      <p className="text-3xl sm:text-4xl font-bold drop-shadow-lg">{region.countries}+</p>
                      <p className="text-sm text-white/90 mt-1">Countries covered</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Why Choose Our Network?</h2>
              <p className="text-base sm:text-lg text-muted-foreground">Industry-leading features and reliability</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 rounded-lg bg-card hover:bg-primary/5 transition">
                  <CheckCircle className="w-6 h-6 text-primary" aria-hidden="true" />
                  <span className="font-medium text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">190+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">500+</p>
                <p className="text-sm text-muted-foreground">Network Partners</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime SLA</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 text-center">
          <Network className="w-14 h-14 mx-auto mb-4 text-primary" aria-hidden="true" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Go Global?</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our global network can support your business expansion.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg" className="gradient-primary shadow-glow">
              <Link to="/contact" aria-label="Get started with coverage">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2">
              <Link to="/coverage/map" aria-label="View interactive coverage map">View Map</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Coverage;
