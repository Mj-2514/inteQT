import { CheckCircle, Globe, Wifi, Zap, Shield, Cloud, Cpu, Network, Smartphone, Router, Satellite, BarChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WirelessConnection = () => {
  const pageUrl = "https://www.inte-qt.com/services/wireless-connection";
  const ogImage = "https://i.imgur.com/89t9JdN.jpeg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wireless Connect (XC)",
    "brand": "inte-QT",
    "description": "Enterprise-grade 3G, 4G LTE, and 5G wireless connectivity services for IoT, automation, and global operations. Partner with our center for global connectivity cases and coverage.",
    "url": pageUrl,
    "image": ogImage,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "category": "Wireless Connectivity Services"
    },
    "provider": {
      "@type": "Organization",
      "name": "inte-QT",
      "description": "Global network services partner and connectivity center"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wireless Connect (XC) Services",
    "serviceType": "3G/4G LTE/5G Wireless Connectivity",
    "provider": {
      "@type": "Organization",
      "name": "inte-QT"
    },
    "areaServed": {
      "@type": "Global",
      "name": "190+ countries"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wireless Connectivity Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IoT Connectivity Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Wireless Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Global Coverage Services"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Wireless Connect (XC) Services | 3G/4G LTE/5G Enterprise Wireless Partner | inte-QT Center</title>

        <meta
          name="description"
          content="Wireless Connect (XC) services partner by inte-QT delivers secure 3G/4G LTE/5G wireless connectivity for enterprise automation, IoT cases, remote operations, and rapid global deployments. Read our connectivity blogs and event coverage."
        />

        <meta
          name="keywords"
          content="wireless connect services, XC partner, LTE connectivity center, 5G enterprise internet cases, global wireless service events, IoT connectivity blogs, remote wireless solution partner, wireless broadband for business center, inte-QT XC connectivity services"
        />

        <link rel="canonical" href={pageUrl} />

        {/* Hreflang tags */}
        <link rel="alternate" hreflang="en" href={pageUrl} />
        <link rel="alternate" hreflang="en-US" href={pageUrl} />
        <link rel="alternate" hreflang="x-default" href={pageUrl} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />

        {/* OpenGraph */}
        <meta property="og:title" content="Wireless Connect (XC) Services | Global 3G/4G/5G Connectivity Partner Center" />
        <meta
          property="og:description"
          content="High-speed, enterprise-grade wireless connectivity services for automation, IoT cases, and remote business environments with coverage in 190+ countries. Partner with our center."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="inte-QT" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wireless Connect (XC) Services — Enterprise LTE & 5G Partner Center" />
        <meta
          name="twitter:description"
          content="Secure global wireless connectivity services powered by 3G/4G LTE/5G technology for IoT cases and mission-critical operations. Read our blogs."
        />
        <meta name="twitter:image" content={ogImage} />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <Navbar />

      <div className="min-h-screen pt-20 md:pt-24">

        {/* HERO SECTION */}
        <section className="gradient-hero text-primary-foreground py-12 sm:py-16 md:py-20 lg:py-24" aria-labelledby="main-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="main-heading" className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Wireless Connect (XC) Services
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto px-2">
              High-speed, secure 3G/4G LTE/5G wireless connectivity services engineered
              for automation, IoT cases, and modern business agility. Partner with our center.
            </p>
            <div className="mt-6">
              <h4 className="text-white/80 text-sm md:text-base font-medium mb-2">Connectivity Services Partner</h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">Global Coverage</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">IoT Cases</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">Partner Center</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">Event Monitoring</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS XC + IMAGE SIDE BY SIDE */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20" aria-labelledby="what-is-xc">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12">

              {/* LEFT — TEXT */}
              <div className="flex-1 w-full">
                <h2 id="what-is-xc" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
                  What is Wireless Connect (XC) Services?
                </h2>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Networks that use 3G, 4G Long Term Evolution (LTE), and 5G mobile broadband technologies for enterprise services.
                  </p>

                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Our center offers global coverage, security services, and other capabilities to organizations for uninterrupted internet access— especially for advanced IoT (Internet of Things) applications and automation cases.
                  </p>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3">Key Service Components:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-primary" />
                        <h5 className="text-sm font-medium">IoT Connectivity Cases</h5>
                      </div>
                      <div className="flex items-center gap-2">
                        <Network className="w-4 h-4 text-primary" />
                        <h5 className="text-sm font-medium">Global Partner Network</h5>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        <h5 className="text-sm font-medium">Secure Service Center</h5>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart className="w-4 h-4 text-primary" />
                        <h5 className="text-sm font-medium">Performance Analytics</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT — IMAGE */}
              <div className="flex-1 w-full">
                <div
                  className="w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] rounded-xl sm:rounded-2xl shadow-lg md:shadow-xl bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      "url(https://www.gadgetmatch.com/wp-content/uploads/2018/12/GadgetMatch-20181219-5G-Explainer-03.gif)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute bottom-4 left-4">
                    <h6 className="text-xs text-white/80 font-medium bg-black/50 px-2 py-1 rounded">
                      Wireless Connectivity Technology
                    </h6>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* GLOBAL WIRELESS CONNECT */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20 bg-gray-50" aria-labelledby="global-connect">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-center">

              {/* Content */}
              <div className="flex-1 w-full">
                <div className="mb-4 sm:mb-6">
                  <Globe className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary" />
                </div>
                <h2 id="global-connect" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-4 leading-tight text-black">
                  End-to-End Fully Managed Global Wireless Connect Services
                </h2>
                <h3 className="text-lg sm:text-xl text-muted-foreground mb-4">
                  Partner with Our Global Connectivity Center
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  We have relations with carriers and managed service partners in more than 190+ countries across the world, giving us unmatched presence to provide wireless connect (XC) and LTE solutions with best-in-segment SLAs for all connectivity cases.
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">Our Partner Services Include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <h5 className="font-medium">Global Coverage Services</h5>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <h5 className="font-medium">Case Management Center</h5>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <h5 className="font-medium">Event Monitoring Services</h5>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image Card */}
              <div className="flex-1 w-full">
                <Card className="shadow-lg sm:shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border-0">
                  <CardContent className="p-0">
                    <div
                      className="w-full h-[200px] sm:h-[240px] md:h-[260px] bg-cover bg-center relative"
                      style={{
                        backgroundImage:
                          "url(https://images.unsplash.com/vector-1761074483084-ec628a7624b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBjb25uZWN0aW9ufGVufDB8MHwwfHx8Mg%3D%3D)",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute bottom-4 right-4">
                        <h6 className="text-xs text-white/80 font-medium bg-black/50 px-2 py-1 rounded">
                          Global Network Visualization
                        </h6>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20 bg-muted/40" aria-labelledby="key-features">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 id="key-features" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                Why Businesses Choose Wireless Connect (XC) Services
              </h2>
              <h3 className="text-lg sm:text-xl text-muted-foreground">
                Partner with Our Center for Comprehensive Connectivity Solutions
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  title: "Quick deployments with high-capacity bandwidth",
                  desc: "Rapid service implementation for connectivity cases",
                  icon: Zap
                },
                {
                  title: "Uninterrupted connectivity with minimal disruptions",
                  desc: "Continuous service coverage for all events",
                  icon: Wifi
                },
                {
                  title: "SIM device pairing for secure dedicated access",
                  desc: "Secure partner center access management",
                  icon: Shield
                },
                {
                  title: "Dedicated portal for optimizing tariffs",
                  desc: "Service management through partner portal",
                  icon: Cloud
                },
                {
                  title: "Secure wireless connectivity for IoT & automation",
                  desc: "Comprehensive IoT case management services",
                  icon: Smartphone
                },
                {
                  title: "Reliable performance in hard-to-reach regions",
                  desc: "Global coverage services for remote cases",
                  icon: Satellite
                },
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 md:p-5 bg-card shadow-sm hover:shadow-lg transition-all rounded-lg sm:rounded-xl"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm sm:text-base md:text-lg leading-relaxed mb-1">
                        {feature.title}
                      </h4>
                      <h5 className="text-xs sm:text-sm text-muted-foreground">
                        {feature.desc}
                      </h5>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 pt-8 border-t">
              <h4 className="text-lg font-semibold text-center mb-4">Additional Service Benefits</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <h5 className="font-medium mb-2">24/7 Support Center</h5>
                  <p className="text-sm text-muted-foreground">Round-the-clock partner support services</p>
                </div>
                <div className="text-center p-4">
                  <h5 className="font-medium mb-2">Case Management</h5>
                  <p className="text-sm text-muted-foreground">Comprehensive incident case handling</p>
                </div>
                <div className="text-center p-4">
                  <h5 className="font-medium mb-2">Performance Blogs</h5>
                  <p className="text-sm text-muted-foreground">Regular updates and technical blogs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY INTE-QT UNIQUE */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20" aria-labelledby="unique-features">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 id="unique-features" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              What Makes inte-QT Services Unique?
            </h2>
            <h3 className="text-lg sm:text-xl text-muted-foreground mb-8">
              Partner with Our Center for Superior Connectivity Solutions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 text-left">
              {[
                {
                  title: "Unmatched fast delivery",
                  desc: "Rapid service deployment for all connectivity cases",
                  sub: "Service Delivery Center"
                },
                {
                  title: "Global presence with strong local expertise",
                  desc: "Worldwide coverage with local partner support",
                  sub: "Global Partner Network"
                },
                {
                  title: "Proactive monitoring by NSOC 24×7×365",
                  desc: "Continuous event monitoring from our center",
                  sub: "Monitoring Services"
                },
                {
                  title: "Standardized, secure wireless process",
                  desc: "Secure service protocols for all partner cases",
                  sub: "Security Center"
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm sm:text-base mb-1">{item.title}</h4>
                    <h5 className="text-xs text-muted-foreground mb-1">{item.desc}</h5>
                    <h6 className="text-xs font-medium text-primary">{item.sub}</h6>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-6">Our Service Coverage</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <h5 className="text-2xl font-bold text-primary mb-2">190+</h5>
                  <h6 className="text-sm font-medium">Countries Served</h6>
                </div>
                <div>
                  <h5 className="text-2xl font-bold text-primary mb-2">24/7</h5>
                  <h6 className="text-sm font-medium">Support Center</h6>
                </div>
                <div>
                  <h5 className="text-2xl font-bold text-primary mb-2">99.9%</h5>
                  <h6 className="text-sm font-medium">Uptime SLA</h6>
                </div>
                <div>
                  <h5 className="text-2xl font-bold text-primary mb-2">30min</h5>
                  <h6 className="text-sm font-medium">Response Time</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20 gradient-hero text-primary-foreground" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              Ready for Wireless XC Services?
            </h2>
            <h3 className="text-lg sm:text-xl mb-4 opacity-90 text-white">
              Partner with Our Connectivity Center
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-2 text-white">
              Connect with our specialists and bring secure, high-speed wireless
              connectivity services to any location on the globe. Read our connectivity blogs and event coverage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="gradient-primary shadow-glow text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                <a href="/contact">Contact Us</a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/20 text-sm sm:text-base"
              >
                <a href="/blogs">Read Blogs</a>
              </Button>
            </div>

            <div className="mt-8">
              <h4 className="text-white/90 font-medium mb-3">Related Services:</h4>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="/cases" className="text-white/70 hover:text-white text-sm">IoT Cases</a>
                <a href="/events" className="text-white/70 hover:text-white text-sm">Network Events</a>
                <a href="/coverage" className="text-white/70 hover:text-white text-sm">Coverage Services</a>
                
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default WirelessConnection;