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

      <div className="min-h-screen pt-20 md:pt-24">

        {/* HERO SECTION - Responsive */}
        <section className="gradient-hero text-primary-foreground py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Dedicated Lines (DIA)
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto px-2">
              Ultra-reliable, high-capacity, enterprise-grade connectivity designed
              to power the world's most demanding business networks.
            </p>
          </div>
        </section>

        {/* WHAT IS DIA - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12">

              {/* LEFT — TEXT */}
              <div className="flex-1 w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
                  What is Dedicated Line (DIA)?
                </h2>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    A dedicated line is a fibre/copper/radio connection between two points, one point is the end user location. It is symmetrical, so will have fast, equal upload and download speeds.
                  </p>

                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    It's an uninterrupted connection with dedicated speed, ultra-low latency, direct to businesses — just like a pipe that can carry many things, a leased line can be used to carry a variety of data traffic, VPN traffic over WAN or LAN, phone calls; and VoIP.
                  </p>
                </div>
              </div>

              {/* RIGHT — IMAGE CARD */}
              <div className="flex-1 w-full">
                <div
                  className="w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] rounded-xl sm:rounded-2xl shadow-lg md:shadow-xl bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://assets.superhivemarket.com/cache/0346e49935ae63f6209492bf3994d0b4.gif)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* GLOBAL COVERAGE - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-center">

              {/* Content */}
              <div className="flex-1 w-full">
                <div className="mb-4 sm:mb-6">
                  <Globe className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-4 leading-tight text-black">
                  Global Coverage Across Tier 1, 2, 3 & Remote Regions
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We have relations with carriers and managed services partners in more than 190+ countries across the world, which gives us unmatched presence to provide dedicated internet access (DIA) in remote areas with multiple bandwidth capabilities and stringent SLAs.
                </p>
              </div>

              {/* Image Card */}
              <div className="flex-1 w-full">
                <Card className="shadow-lg sm:shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border-0">
                  <CardContent className="p-0">
                    <div
                      className="w-full h-[200px] sm:h-[240px] md:h-[260px] bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url(https://images.unsplash.com/photo-1644088379091-d574269d422f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0d29ya3xlbnwwfDB8MHx8fDI%3D)",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>

        {/* KEY FEATURES - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20 bg-muted/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
              Why Businesses Choose Our Dedicated Lines
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
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
                  className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 md:p-5 bg-card shadow-sm hover:shadow-lg transition-all rounded-lg sm:rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                  <p className="font-medium text-sm sm:text-base md:text-lg leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY INTE-QT UNIQUE - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              What Makes inte-QT Unique?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 text-left">
              {[
                "Unmatched global presence with strong local expertise",
                "Tailor-made connectivity solutions with flexible terms",
                "Low delivery lead times for rapid deployments",
                "Dedicated NSOC team with proactive 24×7×365 monitoring",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                  <p className="font-medium text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              Ready to Experience DIA?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-2 text-white">
              Get in touch with our specialists and discover connectivity built
              for performance, security, and scale.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="gradient-primary shadow-glow text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
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