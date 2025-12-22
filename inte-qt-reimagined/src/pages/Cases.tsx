// src/pages/Cases.tsx
import React, { Fragment } from "react";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Shield, Award, Clock, CheckCircle } from "lucide-react";
import nsocImage from "@/assets/nsoc-operations.jpg";
import Seo from "@/components/Seo";

const canonical = "https://www.inte-qt.com/cases";
const pageTitle = "NSOC 24×7 | Global Network Security Operations Center – inte-QT";
const pageDescription =
  "inte-QT’s Global NSOC delivers 24×7 monitoring, proactive security, rapid incident response, threat intelligence, and performance optimization across 190+ countries.";
const ogImage = "https://www.inte-qt.com/og/nsoc-1200x630.jpg"; // add to /public/og/

const features = [
  {
    title: "24×7 Monitoring",
    description: "Round-the-clock network surveillance and threat detection",
    icon: Clock,
  },
  {
    title: "Proactive Security",
    description: "Advanced threat prevention and rapid incident response",
    icon: Shield,
  },
  {
    title: "Expert Team",
    description: "Certified security professionals with deep industry expertise",
    icon: Award,
  },
  {
    title: "Global Coverage",
    description: "Monitoring and protection across all 190+ countries",
    icon: Eye,
  },
];
const caseStudies = [
  {
    title: "Strategic Network Deployment for Fiji's Leading Bank",
    description:
      "Deeper customer engagement has always been a part of culture at inte-QT. The customer do understand and appreciate the support they receive from us and this helps them to share their requirements and concerns in an open manner.",
    image:
      "https://i.imgur.com/diCPBGP.jpg",
    highlights: [
      "24×7 NSOC coverage",
      "Sub-15 minute incident response",
      "Zero downtime during live event",
      "Multi-country coordination",
    ],
    link: "/cases/fiji",
  },
  {
    title: "Rapid Connectivity for FMCG",
    description:
      "We accepted this requirement and took as a challenge as ‘In the middle of every difficulty, lies an opportunity’. The operations team collaborative worked with partner as well as the end customer for finalising the delivery frame work and the required configuration. We engaged with partner for speeding up the delivery process.",
    image:
      "https://i.imgur.com/PqG4Gaa.jpg",
    highlights: [
      "SLA monitoring & reporting",
      "Latency & packet-loss optimization",
      "Regulatory compliance support",
      "Dedicated NSOC engineers",
    ],
    link: "/cases/fmcg",
  },
  {
    title: "Delivering Connectivity Amid Crisis",
    description:
      "The technical specifications were different from the normal internet access deliveries. There was need to a install circuit of high bandwidth using copper lines and scope was work from end to end within the given time frames.",
    image:
      "https://i.imgur.com/rjhk18X.jpg",
    highlights: [
      "Threat intelligence feeds",
      "Security event correlation",
      "DDoS mitigation",
      "Global visibility dashboard",
    ],
    link: "/cases/amid-crisis",
  },
];



const services = [
  "Real-time Network Monitoring",
  "Security Incident Response",
  "Performance Optimization",
  "Threat Intelligence",
  "Compliance Reporting",
  "DDoS Protection",
  "Network Forensics",
  "Vulnerability Assessment",
];

// JSON-LD: Service structured data
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "NSOC 24x7",
  serviceType: "Network Security Operations Center (NSOC)",
  provider: {
    "@type": "Organization",
    name: "inte-QT",
    url: "https://www.inte-qt.com",
  },
  description:
    "24×7 Global Network Security Operations Center delivering monitoring, threat detection, incident response, and performance optimization.",
  areaServed: "Worldwide",
  audience: {
    "@type": "BusinessAudience",
    name: "Enterprises, Telecom, IT Teams",
  },
};

const Cases: React.FC = () => {
  return (
    <Fragment>
      <Seo
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        image={ogImage}
        siteName="inte-QT"
        extraJsonLd={[serviceJsonLd]}
      />

      <main className="min-h-screen pt-20 bg-background text-foreground">
        {/* HERO */}
        <section
          className="relative flex items-center justify-center"
          aria-label="NSOC hero"
          style={{
            minHeight: "60vh",
            backgroundImage: `url(${"https://images.unsplash.com/vector-1757394158090-f76e0d78d661?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbXxlbnwwfDB8MHx8fDI%3D"})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {/* overlay for contrast */}
          <div className="absolute inset-0 bg-black/70" aria-hidden />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl text-center mx-auto">


              <div className="flex items-center justify-center gap-4 mb-6">
  <Eye className="w-12 h-12 text-white animate-pulse-glow drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" />
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
    We got our <span className="text-gradient">EYES</span> on it
  </h1>
</div>

<p className="text-lg sm:text-xl text-white font-bold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
  Global Network Security Operations Center (NSOC) — 24×7 monitoring, protection and optimization.
</p>

<p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto mb-6 font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]">
  Sit back and relax while our dedicated team monitors, protects, and optimizes your global network infrastructure around the clock.
</p>



              <div className="flex gap-3 justify-center">
                <Button asChild size="lg" className="gradient-primary shadow-glow">
                  <a href="/support" aria-label="Contact NSOC">Contact Support</a>
                </Button>
                <Button
  asChild
  size="lg"
  variant="outline"
  className="
    border-2
    text-foreground
    dark:text-white/90
  "
>
  <a href="/global-nsoc" aria-label="View success stories">
    Explore NSOC
  </a>
</Button>

              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        {/* CASE STUDIES */}
{/* CASE STUDIES – SERVICES STYLE */}
<section className="py-16 sm:py-20">
  <div className="container mx-auto px-4 space-y-20">
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Case Studies
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
        How inte-QT’s NSOC delivers real-world results
      </p>
    </div>

    {caseStudies.map((cs, index) => {
      const reverse = index % 2 !== 0;

      return (
        <div
          key={index}
          className={`flex flex-col lg:flex-row ${
            reverse ? "lg:flex-row-reverse" : ""
          } gap-10 lg:gap-12 items-center`}
        >
          {/* IMAGE – FIRST ON MOBILE */}
          <div className="flex-1 order-1 lg:order-none w-full">
            <Card className="relative aspect-[16/9] rounded-2xl overflow-hidden border-0 shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${cs.image})` }}
              />
              <div className="absolute inset-0 bg-black/25" />
            </Card>
          </div>

          {/* CONTENT */}
          <div className="flex-1 order-2 lg:order-none text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              {cs.title}
            </h3>

            <p className="text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
              {cs.description}
            </p>

            <ul className="space-y-3 mb-8 max-w-xl mx-auto lg:mx-0">
              {cs.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg">
              <a href={cs.link}>
                Read more <span className="ml-1">→</span>
              </a>
            </Button>
          </div>
        </div>
      );
    })}
  </div>
</section>



        {/* SERVICES GRID */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">What We Monitor</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">Comprehensive security and performance services</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {services.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card hover:shadow-md transition">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" aria-hidden />
                  <span className="font-medium text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY / TESTIMONIAL */}
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2019/07/16/11/39/charles-4341624_1280.jpg")` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden />

          <div className="relative container mx-auto px-4 text-center text-white max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Success Story</h2>
            <p className="mb-8">Real results from real clients</p>

            <Card className="bg-white/5 border-white/10 shadow-2xl max-w-4xl mx-auto rounded-2xl">
              <CardContent className="p-6 md:p-10">
                <div className="flex flex-col items-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-6 h-6 text-yellow-400 mx-1" aria-hidden />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl font-bold text-blue-400 mb-4">BRILLIANT work by inte-QT.</p>

                  <p className="text-sm md:text-base text-white/80 mb-6 max-w-3xl">
                    It was seamlessly managed by inte-QT, right from quotation to timely delivery within the event schedule. A truly delightful experience.
                  </p>

                  <div className="border-t border-white/10 pt-4 w-full text-left">
                    <p className="font-semibold text-white text-center">Associate Director</p>
                    <p className="text-sm text-white/70 text-center">World's Leading Tier-1 Carrier • London, UK</p>
                    <p className="text-sm text-primary mt-2 text-center">World Championship Motor Racing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why Choose Our NSOC?</h2>
              <p className="text-muted-foreground">Peace of mind with enterprise-grade security</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "24/7/365 continuous monitoring",
                "Rapid incident response (< 15 minutes)",
                "Proactive threat hunting",
                "Detailed compliance reporting",
                "Multi-layered security approach",
                "Global threat intelligence",
                "Expert security analysts",
                "Customized security policies",
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-card">
                  <CheckCircle className="w-5 h-5 text-primary" aria-hidden />
                  <span className="text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">&lt;15m</p>
                <p className="text-sm text-muted-foreground">Response Time</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">10M+</p>
                <p className="text-sm text-muted-foreground">Events Monitored / day</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">Global</p>
                <p className="text-sm text-muted-foreground">Coverage</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
};

export default Cases;
