import { CheckCircle, Globe, Zap, Server, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import Seo from "@/components/Seo";

const canonical = "https://www.inte-qt.com/services/dedicated-lines";
const pageTitle = "Dedicated Lines (DIA) | Enterprise Leased Lines – inte-QT";
const pageDescription = "Ultra-reliable Dedicated Internet Access (DIA) with uncontended bandwidth, symmetrical speeds, low latency, global availability in 190+ countries, and 24×7 NSOC monitoring — powered by inte-QT.";
const ogImage = "https://www.inte-qt.com/og/dedicated-lines-1200x630.jpg";


const DedicatedLines = () => {
  

  return (
    <>
    <Helmet>
  <title>Dedicated Lines (DIA) | Enterprise Leased Lines & Guaranteed Bandwidth – inte-QT</title>

  <meta
    name="description"
    content="Ultra-reliable Dedicated Internet Access (DIA) with uncontended bandwidth, symmetrical speeds, low latency, global availability in 190+ countries, and 24×7 NSOC monitoring — powered by inte-QT."
  />

  <meta
    name="keywords"
    content="dedicated line, DIA, leased line, enterprise internet, guaranteed bandwidth, symmetrical speeds, fiber leased line, uncontended internet, low latency connection, business dedicated internet"
  />

  <link rel="canonical" href="https://www.inte-qt.com/services/dedicated-lines" />

  {/* OpenGraph */}
  <meta property="og:title" content="Dedicated Lines (DIA) | Enterprise Leased Lines – inte-QT" />
  <meta
    property="og:description"
    content="Enterprise-grade DIA with symmetrical bandwidth, ultra-low latency, and global delivery including remote regions."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.inte-qt.com/services/dedicated-lines" />
  <meta property="og:image" content="https://assets.superhivemarket.com/cache/0346e49935ae63f6209492bf3994d0b4.gif" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dedicated Lines (DIA) | Enterprise-Grade Leased Line Internet" />
  <meta
    name="twitter:description"
    content="Uncontended, symmetrical, high-performance Dedicated Internet Access built for mission-critical workloads."
  />
  <meta name="twitter:image" content="https://assets.superhivemarket.com/cache/0346e49935ae63f6209492bf3994d0b4.gif" />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Dedicated Internet Access (DIA)",
        "description": "Uncontended enterprise dedicated lines with symmetrical bandwidth, guaranteed speeds, and 24×7 NSOC monitoring.",
        "brand": {
          "@type": "Organization",
          "name": "inte-QT",
          "url": "https://www.inte-qt.com"
        },
        "category": "Enterprise Connectivity",
        "url": "https://www.inte-qt.com/services/dedicated-lines",
        "areaServed": "Worldwide",
        "offers": {
          "@type": "Offer",
          "url": "https://www.inte-qt.com/services/dedicated-lines",
          "availability": "https://schema.org/InStock"
        }
      }
    `}
  </script>
</Helmet>
    
      <Navbar />

      <div className="min-h-screen pt-24">

        {/* HERO SECTION */}
        <section className="gradient-hero text-primary-foreground py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-white dark:text-white text-5xl md:text-6xl font-bold animate-fade-in">
              Dedicated Lines (DIA)
            </h1>
            <p className="text-white dark:text-white text-xl md:text-2xl opacity-90 mt-4 max-w-3xl mx-auto animate-fade-in-up">
              Ultra-reliable, high-capacity, enterprise-grade connectivity designed
              to power the world’s most demanding business networks.
            </p>
          </div>
        </section>

        {/* WHAT IS DIA */}
        {/* WHAT IS DIA + IMAGE SIDE BY SIDE */}
<section className="py-20">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="flex flex-col lg:flex-row items-center gap-12">

      {/* LEFT — TEXT */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-8">
          What is Dedicated Line (DIA)?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          A dedicated line is a fibre, copper, or radio connection between two
          points — with one endpoint being the customer's premises. It offers
          <span className="font-semibold text-primary"> symmetrical bandwidth </span>
          with equally fast upload and download speeds and
          <span className="font-semibold"> ultra-low latency</span>.
          It's an uninterrupted, uncontended, private connection built for
          mission-critical business operations.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Like a wide pipe carrying multiple flows, a leased line transports data,
          internet traffic, VPN (WAN/LAN), VoIP, and more — all with guaranteed
          speeds and rock-solid performance.
        </p>
      </div>

      {/* RIGHT — IMAGE CARD */}
      <div className="flex-1">
        <div
          className="w-full h-[320px] lg:h-[360px] rounded-2xl shadow-lg bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://assets.superhivemarket.com/cache/0346e49935ae63f6209492bf3994d0b4.gif)",
          }}
        ></div>
      </div>

    </div>
  </div>
</section>


        {/* GLOBAL COVERAGE */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">

              <div className="flex-1">
                <Globe className="w-16 h-16 text-primary mb-6" />
                <h2 className="text-4xl font-bold mb-4">
                  Global Coverage Across Tier 1, 2, 3 & Remote Regions
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With carrier and managed service partnerships in{" "}
                  <span className="font-semibold text-primary">190+ countries</span>,
                  we deliver DIA even in remote, hard-to-reach regions — backed by
                  strict SLAs and multiple bandwidth options.
                </p>
              </div>

              <Card className="flex-1 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className="w-full h-[260px] bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1644088379091-d574269d422f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0d29ya3xlbnwwfDB8MHx8fDI%3D)",
                    }}
                  ></div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Businesses Choose Our Dedicated Lines
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Packages up to 10Gb with totally uncontended bandwidth",
                "Static IP available on WAN & LAN as per requirement",
                "Dedicated CPE with full hardware guarantee",
                "Guaranteed bandwidth with extremely low latency",
                "Minimal packet loss for mission-critical workloads",
                "24×7×365 monitoring by our dedicated NSOC team",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 p-5 bg-card shadow-sm rounded-xl hover:shadow-lg transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <p className="font-medium leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY INTE-QT UNIQUE */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">What Makes inte-QT Unique?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
              {[
                "Unmatched global presence with strong local expertise",
                "Tailor-made connectivity solutions with flexible terms",
                "Low delivery lead times for rapid deployments",
                "Dedicated NSOC team with proactive 24×7×365 monitoring",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Experience DIA?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-white">
              Get in touch with our specialists and discover connectivity built
              for performance, security, and scale.
            </p>
            <Button asChild size="lg" className="gradient-primary shadow-glow">
                            <a href="/contact">Contact Us</a>
                          </Button>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default DedicatedLines;
