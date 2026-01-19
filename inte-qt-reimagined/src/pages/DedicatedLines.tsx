import { CheckCircle, Globe, Zap, Server, ArrowRight, Shield, Wifi, Cloud, Users, Network, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const canonical = "https://www.inte-qt.com/services/dedicated-lines";
const pageTitle = "Dedicated Lines & DIA Services | Enterprise Leased Line Connectivity | inte-QT";
const pageDescription = "inte-QT provides enterprise-grade Dedicated Internet Access (DIA) with uncontended bandwidth, symmetrical speeds, low latency, and global coverage across 190+ countries. Partner with us for dedicated line solutions.";
const ogImage = "https://assets.superhivemarket.com/cache/0346e49935ae63f6209492bf3994d0b4.gif";

const DedicatedLines = () => {
  // Features with icons and descriptions
  const features = [
    {
      title: "Up to 10Gb Uncontended Bandwidth",
      description: "High-capacity dedicated lines with guaranteed uncontended bandwidth",
      icon: Zap
    },
    {
      title: "Static IP on WAN & LAN",
      description: "Flexible static IP configurations for enterprise networking",
      icon: Network
    },
    {
      title: "Dedicated CPE with Hardware Guarantee",
      description: "Customer Premise Equipment with full hardware support and guarantee",
      icon: Server
    },
    {
      title: "Guaranteed Low Latency",
      description: "Enterprise-grade performance with minimal latency for critical applications",
      icon: Wifi
    },
    {
      title: "Minimal Packet Loss",
      description: "Optimized routing for mission-critical workloads with reliable delivery",
      icon: Cloud
    },
    {
      title: "24×7×365 NSOC Monitoring",
      description: "Continuous monitoring by dedicated Network Security Operations Center",
      icon: Shield
    }
  ];

  // Unique selling points
  const uniquePoints = [
    "Global presence with local expertise through partner center",
    "Tailor-made connectivity solutions with flexible terms",
    "Low delivery lead times for rapid deployments",
    "Dedicated NSOC team with proactive 24×7×365 monitoring",
    "Partner center coordination for seamless service delivery",
    "Enterprise-grade SLAs with guaranteed performance"
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* hreflang Tags */}
        <link rel="alternate" hreflang="en" href="https://www.inte-qt.com/services/dedicated-lines" />
        <link rel="alternate" hreflang="es" href="https://www.inte-qt.com/es/services/dedicated-lines" />
        <link rel="alternate" hreflang="fr" href="https://www.inte-qt.com/fr/services/dedicated-lines" />
        <link rel="alternate" hreflang="de" href="https://www.inte-qt.com/de/services/dedicated-lines" />
        <link rel="alternate" hreflang="x-default" href="https://www.inte-qt.com/services/dedicated-lines" />
        
        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="inte-QT Dedicated Lines" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Canonical */}
        <link rel="canonical" href={canonical} />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Dedicated Internet Access (DIA)",
              "description": "Uncontended enterprise dedicated lines with symmetrical bandwidth, guaranteed speeds, and 24×7 NSOC monitoring through our partner center.",
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

      <Seo
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        image={ogImage}
        siteName="inte-QT"
      />

      <Navbar />

      <div className="min-h-screen pt-20 md:pt-24">

        {/* HERO SECTION - Responsive */}
        <section className="gradient-hero text-primary-foreground py-12 sm:py-16 md:py-20 lg:py-24" aria-labelledby="dedicated-hero-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="dedicated-hero-heading" className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Dedicated Lines & DIA Services
            </h1>
            
            <h2 className="text-white text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto px-2 mb-4">
              Ultra-reliable, high-capacity, enterprise-grade connectivity designed
              to power the world's most demanding business networks.
            </h2>
            
            <h3 className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto px-2">
              Global dedicated line solutions through our partner center with guaranteed performance across 190+ countries
            </h3>
          </div>
        </section>

        {/* WHAT IS DIA - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20" aria-labelledby="what-is-dia-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12">

              {/* LEFT — TEXT */}
              <div className="flex-1 w-full">
                <h2 id="what-is-dia-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
                  What is Dedicated Line (DIA)?
                </h2>
                
                <h3 className="text-lg sm:text-xl text-muted-foreground mb-4">
                  Enterprise-grade symmetrical connectivity for mission-critical operations
                </h3>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    A dedicated line is a fiber, copper, or radio connection between two points, with one point being the end user location. It provides symmetrical connectivity with fast, equal upload and download speeds through our partner center coordination.
                  </p>

                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    This uninterrupted connection offers dedicated speed, ultra-low latency, and direct connectivity to businesses — similar to a pipe that carries multiple data types. A leased line can carry various data traffic, VPN traffic over WAN or LAN, phone calls, and VoIP through our dedicated line services.
                  </p>
                </div>
                
                {/* H4 for SEO content */}
                <h4 className="text-sm text-muted-foreground mt-6">
                  Our partner center provides dedicated line solutions with global coordination, enterprise-grade reliability, and comprehensive support for connectivity services across multiple access types.
                </h4>
              </div>

              {/* RIGHT — IMAGE CARD */}
              <div className="flex-1 w-full">
                <div
                  className="w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] rounded-xl sm:rounded-2xl shadow-lg md:shadow-xl bg-cover bg-center"
                  style={{
                    backgroundImage: "url(https://assets.superhivemarket.com/cache/0346e49935ae63f6209492bf3994d0b4.gif)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  aria-label="Dedicated line connectivity animation"
                />
              </div>

            </div>
          </div>
        </section>

        {/* GLOBAL COVERAGE - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20 bg-gray-50" aria-labelledby="global-coverage-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-center">

              {/* Content */}
              <div className="flex-1 w-full">
                <div className="mb-4 sm:mb-6">
                  <Globe className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary" />
                </div>
                
                <h2 id="global-coverage-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-4 leading-tight text-black">
                  Global Dedicated Line Coverage
                </h2>
                
                <h3 className="text-lg sm:text-xl text-muted-foreground mb-4">
                  Tier 1, 2, 3 & Remote Regions Through Partner Center
                </h3>
                
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                  We maintain relationships with carriers and managed services partners across 190+ countries worldwide, providing unmatched presence for dedicated internet access (DIA) in remote areas. Our partner center coordinates multiple bandwidth capabilities with stringent SLAs.
                </p>
                
                {/* H4 for SEO content */}
                <h4 className="text-sm text-muted-foreground">
                  Access dedicated line solutions globally through our partner center network, with local coordination and enterprise-grade connectivity across diverse regions and access types.
                </h4>
              </div>

              {/* Image Card */}
              <div className="flex-1 w-full">
                <Card className="shadow-lg sm:shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border-0">
                  <CardContent className="p-0">
                    <div
                      className="w-full h-[200px] sm:h-[240px] md:h-[260px] bg-cover bg-center"
                      style={{
                        backgroundImage: "url(https://images.unsplash.com/photo-1644088379091-d574269d422f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0d29ya3xlbnwwfDB8MHx8fDI%3D)",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      aria-label="Global network infrastructure"
                    />
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>

        

        {/* KEY FEATURES - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20 bg-muted/40" aria-labelledby="features-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 id="features-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
              Why Businesses Choose Our Dedicated Lines
            </h2>
            
            <h3 className="text-lg sm:text-xl text-muted-foreground text-center mb-8">
              Enterprise-grade features for mission-critical connectivity
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={i}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 md:p-5 bg-card shadow-sm hover:shadow-lg transition-all rounded-lg sm:rounded-xl h-full"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base md:text-lg mb-1">{feature.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY INTE-QT UNIQUE - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20" aria-labelledby="unique-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 id="unique-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              What Makes inte-QT's Dedicated Lines Unique?
            </h2>
            
            <h3 className="text-lg sm:text-xl text-muted-foreground mb-6">
              Differentiated dedicated line solutions through our partner center
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 text-left">
              {uniquePoints.map((item, index) => (
                <article key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                  <p className="font-medium text-sm sm:text-base">{item}</p>
                </article>
              ))}
            </div>
            
            <h4 className="mt-8 text-muted-foreground">
              Explore our{" "}
              <Link to="/cases" className="underline font-semibold">
                case studies
              </Link>{" "}
              to see how enterprises leverage inte-QT dedicated lines through our partner center for global connectivity.
            </h4>
          </div>
        </section>

        {/* CTA SECTION - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20 gradient-hero text-primary-foreground" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              Ready to Experience Enterprise DIA?
            </h2>
            
            <h3 className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-2 text-white">
              Get in touch with our specialists and discover dedicated line connectivity built
              for performance, security, and scale through our partner center.
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="gradient-primary shadow-glow text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                aria-label="Contact us for dedicated lines"
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 text-black"
                aria-label="Access partner center"
              >
                <Link to="/partner-center">
                  Partner Center Access <ArrowRight className="ml-2 text-black" />
                </Link>
              </Button>
            </div>
            
            <h4 className="mt-8 text-sm text-white/80">
              For dedicated line inquiries, partner center access, or connectivity consultations, contact our team at{" "}
              <a href="mailto:sales@inte-qt.com" className="underline font-semibold">
                sales@inte-qt.com
              </a>
            </h4>
          </div>
        </section>

      </div>

      {/* SEO CONTENT SECTION (Hidden for users, visible to search engines) */}
      <div className="container mx-auto px-4 py-8" style={{ opacity: 0.01, height: '1px', overflow: 'hidden' }}>
        <h2>Dedicated Lines & DIA Services Overview</h2>
        <p>
          inte-QT provides comprehensive dedicated line solutions including Dedicated Internet Access (DIA) for enterprises across 190+ countries through our partner center network. 
          Our dedicated line services deliver uncontended bandwidth, symmetrical speeds, low latency, and enterprise-grade reliability for mission-critical operations.
        </p>
        <p>
          Access dedicated line solutions through our partner center with global coordination, technical support, and comprehensive service management. 
          Explore case studies documenting successful dedicated line deployments and partner collaborations for enterprise connectivity requirements.
        </p>
        <ul>
          <li>Enterprise dedicated lines and DIA solutions</li>
          <li>Uncontended bandwidth with symmetrical speeds</li>
          <li>Global dedicated line coverage through partner center</li>
          <li>Dedicated CPE with hardware guarantee and support</li>
          <li>Dedicated line case studies and deployments</li>
          <li>Partner center coordination for DIA services</li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default DedicatedLines;