import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Shield,
  Wifi,
  Users,
  ArrowRight,
  Activity,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

export default function GlobalNsoc(): JSX.Element {
  const pageUrl = "https://www.inte-qt.com/global-nsoc";
  const ogImage = "https://i.imgur.com/rNiboOR.jpg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Global Network Security Operations Center (NSOC)",
    description:
      "24×7 monitoring, threat detection, incident response, and network optimization across 190+ countries.",
    provider: {
      "@type": "Organization",
      name: "inte-QT",
      url: "https://www.inte-qt.com",
    },
    areaServed: "Worldwide",
    url: pageUrl,
  };

  return (
    <>
      <Helmet>
        <title>
          Global NSOC | 24×7 Network Security Operations Center – inte-QT
        </title>

        <meta
          name="description"
          content="inte-QT’s Global NSOC delivers 24×7 monitoring, threat detection, incident response, and optimized enterprise network performance worldwide."
        />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content="Global NSOC | inte-QT" />
        <meta
          property="og:description"
          content="Human-led, AI-powered network monitoring and security operations across 190+ countries."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {/* HERO */}
          <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${ogImage})`,
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/65" />

            <div className="relative z-10 px-6 max-w-4xl">
              <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
                Global Network Security Operations Center
              </h1>
              <p className="text-white/90 text-base md:text-lg mb-6">
                24×7 human-led monitoring, AI-driven threat detection, and
                enterprise-grade network assurance.
              </p>

              <Button size="lg" className="gradient-primary shadow-glow" asChild>
                <a href="/contact">
                  Talk to NSOC Experts <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </section>

          {/* HUMAN + AI NSOC */}
          <section className="py-14 md:py-20 bg-background">
            <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  Human Expertise. Intelligent Automation.
                </h2>
                <p className="text-muted-foreground mb-5">
                  inte-QT’s Global NSOC blends certified network engineers with
                  AI-powered analytics to proactively detect, analyze, and
                  resolve incidents before they impact your business.
                </p>

                <ul className="space-y-3">
                  {[
                    "Live engineers validating every critical alert",
                    "AI-based anomaly and traffic behavior analysis",
                    "Predictive fault detection and SLA enforcement",
                    "Structured escalation and root-cause workflows",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <Shield className="w-5 h-5 text-primary mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.imgur.com/WSZQMpb.png"
                  alt="3D visualization of global NSOC operations"
                  className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0  bg-gradient-to-t from-black/50 to-transparent" />

              </div>
            </div>
          </section>

          {/* NSOC PROCESS */}
          {/* NSOC PROCESS */}
<section className="py-14 md:py-20 bg-muted/30">
  <div className="container mx-auto px-4 max-w-6xl text-center">
    <h2 className="text-2xl md:text-4xl font-bold mb-4">
      End-to-End NSOC Operations
    </h2>

    <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
      Every incident is handled through a structured lifecycle to ensure speed,
      accuracy, accountability, and continuous optimization.
    </p>

    {/* PROCESS CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
      {[
        {
          step: "01",
          title: "Detect",
          desc: "24×7 telemetry, traffic behavior, and anomaly monitoring.",
        },
        {
          step: "02",
          title: "Analyze",
          desc: "Human-verified alerts with root-cause identification.",
        },
        {
          step: "03",
          title: "Respond",
          desc: "Immediate remediation, rerouting, or isolation.",
        },
        {
          step: "04",
          title: "Report",
          desc: "Post-incident RCA and performance optimization insights.",
        },
      ].map((s, i) => (
        <Card key={i} className="hover:shadow-glow transition-all">
          <CardContent className="p-6 text-left">
            <span className="text-primary font-bold text-lg">{s.step}</span>
            <h3 className="font-semibold mt-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* SUPPORTING VISUAL */}
    <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-black">
      <img
        src="https://i.imgur.com/FVpCGEE.png"
        alt="NSOC end-to-end operational workflow visualization"
        className="w-full h-[260px] sm:h-[360px] md:h-[460px] object-contain"
        loading="lazy"
      />

      {/* subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  </div>
</section>


          {/* CAPABILITIES */}
          <section className="py-14 md:py-20 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Eye,
                    title: "24×7 Monitoring",
                    desc: "Continuous visibility across global networks.",
                  },
                  {
                    icon: Shield,
                    title: "Threat Detection",
                    desc: "AI-assisted detection with human validation.",
                  },
                  {
                    icon: Wifi,
                    title: "Network Optimization",
                    desc: "Latency, routing and uptime assurance.",
                  },
                  {
                    icon: Users,
                    title: "Incident Response",
                    desc: "Rapid triage and escalation handling.",
                  },
                  {
                    icon: Activity,
                    title: "Performance Analytics",
                    desc: "Bandwidth, jitter and SLA insights.",
                  },
                  {
                    icon: ArrowRight,
                    title: "Root Cause Analysis",
                    desc: "Clear RCA reports after every incident.",
                  },
                ].map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card
                      key={i}
                      className="hover:shadow-glow transition-all"
                    >
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

          {/* CTA */}
          <section className="py-14 md:py-20 gradient-hero text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Global Network?
              </h2>
              <p className="text-white/80 mb-6">
                Speak with our NSOC specialists and get enterprise-grade
                protection today.
              </p>

              <Button size="lg" variant="secondary" asChild>
                <a href="/contact">
                  Contact NSOC Team <ArrowRight className="ml-2" />
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
