import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Shield, Wifi, Users, ArrowRight, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const GlobalNsoc = () => {
  <Helmet>
  <title>Global NSOC | 24×7 Network Security Operations Center – inte-QT</title>

  <meta
    name="description"
    content="inte-QT’s Global NSOC provides 24×7 monitoring, incident response, real-time threat detection, and optimized network performance across 190+ countries. Enterprise-grade security and uptime you can trust."
  />

  <meta
    name="keywords"
    content="global nsoc, network security operations center, nsoc services, 24x7 monitoring, threat detection, enterprise network monitoring, telecom nsoc, network operations center"
  />

  <link rel="canonical" href="https://www.inte-qt.com/global-nsoc" />

  {/* OpenGraph */}
  <meta property="og:title" content="Global Network Security Operations Center | inte-QT" />
  <meta
    property="og:description"
    content="Experience continuous monitoring, proactive threat defense, and real-time diagnostics through inte-QT’s Global NSOC."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.inte-qt.com/global-nsoc" />
  <meta property="og:image" content="https://imgur.com/y1G9poB.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Global NSOC | Secure, Monitor & Optimize – inte-QT" />
  <meta
    name="twitter:description"
    content="24×7 monitoring, AI-powered diagnostics, and rapid incident response with inte-QT’s Global NSOC."
  />
  <meta name="twitter:image" content="https://imgur.com/y1G9poB.png" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Global Network Security Operations Center (NSOC)",
        "description": "24×7 monitoring, threat detection, incident response, route optimization, and network diagnostics across 190+ countries.",
        "provider": {
          "@type": "Organization",
          "name": "inte-QT",
          "url": "https://www.inte-qt.com"
        },
        "url": "https://www.inte-qt.com/global-nsoc",
        "areaServed": "Worldwide"
      }
    `}
  </script>
</Helmet>

  return (
    <div className="min-h-screen">
        <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[45vh] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/vector-1762275212334-bd13fce3c41e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbXxlbnwwfDB8MHx8fDI%3D")`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-white dark:text-white text-5xl md:text-6xl font-bold text-white mb-4">
            Global Network Security Operations Center
          </h1>
          <p className="text-white dark:text-white text-xl text-white/90 mb-8">
            24×7 monitoring, proactive threat defense, and fully managed network security.
          </p>

          <Button size="lg" className="gradient-primary shadow-glow">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-6 text-center">What is Global NSOC?</h2>

          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Our NSOC team continuously monitors, optimizes, and protects your network infrastructure.
            Powered by advanced analytics, AI-driven alerts, and real-time diagnostics, we ensure
            uninterrupted performance across 190+ countries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-glow transition-all">
              <CardContent className="p-6 text-center">
                <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">24×7 Monitoring</h3>
                <p className="text-muted-foreground">
                  Real-time network visibility with instant alerts.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow transition-all">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Threat Detection</h3>
                <p className="text-muted-foreground">
                  AI-based security threat detection and rapid mitigation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow transition-all">
              <CardContent className="p-6 text-center">
                <Wifi className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Optimized Connectivity</h3>
                <p className="text-muted-foreground">
                  Intelligent routing, uptime assurance, and fault isolation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION – END-TO-END MANAGEMENT */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            NSOC Processes – End to End Management
          </h2>

          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            From proactive monitoring to rapid incident response, our NSOC team ensures your
            business stays online, secure, and optimized at all times.
          </p>

          {/* >>> INSERT YOUR VIDEO BELOW <<< */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border bg-black">
            <video
              src="./NSOC_arrow.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Key Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Everything your enterprise needs to stay secure and connected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Users,
                title: "Incident Response",
                desc: "Rapid triage and immediate troubleshooting.",
              },
              {
                icon: Activity,
                title: "Performance Analytics",
                desc: "Deep insights into bandwidth, routing, and latency.",
              },
              {
                icon: Shield,
                title: "Security Enforcement",
                desc: "Firewall, IDS/IPS, and threat-proof architecture.",
              },
              {
                icon: Wifi,
                title: "Network Optimization",
                desc: "Route tuning and zero-downtime maintenance.",
              },
              {
                icon: Eye,
                title: "Real-Time Alerts",
                desc: "Smart notifications with severity grading.",
              },
              {
                icon: ArrowRight,
                title: "Root Cause Analysis",
                desc: "Comprehensive RCA documentation for every event.",
              },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <Card
                  key={i}
                  className="p-6 text-center hover:shadow-glow transition-all"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground">{f.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-black text-4xl font-bold mb-4">
            Ready to secure your global network?
          </h2>
          <p className="text-black text-lg mb-8 opacity-90">
            Speak with our NSOC specialists today.
          </p>

          <Button size="lg" variant="secondary" className="px-10 text-lg">
            Contact Us <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GlobalNsoc;