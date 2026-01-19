// src/pages/BusinessBroadband.tsx
import React from "react";
import { CheckCircle, Globe, Zap, Shield, Server, Wifi, Cloud, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const canonical = "https://www.inte-qt.com/services/business-broadband";
const pageTitle = "Business Broadband Services | Enterprise High-Speed Internet Solutions | inte-QT";
const pageDescription = "inte-QT provides enterprise-grade Business Broadband solutions with high availability, scalable bandwidth, and reliable connectivity across 190+ countries. Partner with our services for global business broadband.";
const ogImage = "https://cdn.dribbble.com/userupload/29647510/file/original-6c41bc159984aa848eec332e1d774c8d.gif";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Business Broadband (BB)",
  description: "Enterprise-grade Business Broadband with high-speed connectivity, flexible access types (Fiber, Copper, Radio), and reliable SLAs across 190+ countries through our partner center.",
  brand: { "@type": "Organization", name: "inte-QT", url: "https://www.inte-qt.com" },
  url: canonical,
  category: "Enterprise Internet Service",
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  description: pageDescription,
  url: canonical,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.inte-qt.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.inte-qt.com/services" },
    { "@type": "ListItem", position: 3, name: "Business Broadband", item: canonical },
  ],
};

const features = [
  {
    title: "Higher bandwidth options",
    description: "Scalable bandwidth for growing enterprise needs through our partner center",
    icon: Zap
  },
  {
    title: "Dedicated CPE with guarantee",
    description: "Customer Premise Equipment with hardware guarantee and support",
    icon: Server
  },
  {
    title: "Multiple access types",
    description: "Flexible connectivity options: Fiber, Copper & Radio solutions",
    icon: Wifi
  },
  {
    title: "Secure network routing",
    description: "Diverse and secure network routing with enterprise-grade protection",
    icon: Shield
  },
  {
    title: "Redundant gateway options",
    description: "Maximum uptime with redundant gateway configurations",
    icon: Cloud
  },
  {
    title: "Hyper-fast flexible connectivity",
    description: "Scalable and flexible connectivity solutions for modern businesses",
    icon: Users
  },
];

const BusinessBroadband: React.FC = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* hreflang Tags */}
        <link rel="alternate" hreflang="en" href="https://www.inte-qt.com/services/business-broadband" />
        <link rel="alternate" hreflang="es" href="https://www.inte-qt.com/es/services/business-broadband" />
        <link rel="alternate" hreflang="fr" href="https://www.inte-qt.com/fr/services/business-broadband" />
        <link rel="alternate" hreflang="de" href="https://www.inte-qt.com/de/services/business-broadband" />
        <link rel="alternate" hreflang="x-default" href="https://www.inte-qt.com/services/business-broadband" />
        
        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="inte-QT Business Broadband" />
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
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(productJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(pageJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      </Helmet>

      <Seo
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        image={ogImage}
        siteName="inte-QT"
        extraJsonLd={[productJsonLd, pageJsonLd, breadcrumbJsonLd]}
      />

      <Navbar />

      <main className="min-h-screen pt-24" aria-label="Business Broadband Services">

        {/* HERO */}
        <section className="gradient-hero text-primary-foreground py-24" aria-labelledby="bb-hero-heading">
          <div className="container mx-auto px-4 text-center">
            <h1 id="bb-hero-heading" className="text-white text-5xl md:text-6xl font-bold animate-fade-in">
              Business Broadband Services
            </h1>

            <h2 className="text-white text-xl md:text-2xl opacity-90 mt-4 max-w-3xl mx-auto animate-fade-in-up">
              High-performance broadband solutions for modern enterprises across 190+ countries
            </h2>
            
            <h3 className="text-white/80 text-lg mt-6 max-w-2xl mx-auto">
              Enterprise-grade connectivity through our partner center with reliable SLAs and global coverage
            </h3>
          </div>
        </section>

        {/* WHAT IS BB */}
        <section className="py-12 md:py-16" aria-labelledby="what-is-bb-heading">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">

              <div className="flex-1">
                <h2 id="what-is-bb-heading" className="text-2xl md:text-3xl font-bold mb-4">
                  What is Business Broadband (BB)?
                </h2>

                <h3 className="text-lg text-muted-foreleading-relaxed mb-4">
                  Enterprise-grade contended connectivity solutions for modern businesses
                </h3>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Business Broadband provides contended connections where multiple users share the same service infrastructure. Data routes from enterprise locations to the nearest local cabinet, through backhaul networks, and finally to the Internet through our partner center coordination.
                </p>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  To address organizational Internet requirements and gain competitive advantages, business broadband delivers essential connectivity. Whether utilizing internet-based services, communicating with stakeholders, or delivering exceptional customer services online, business broadband represents a critical investment through our services partner network.
                </p>
                
                {/* H4 for SEO content */}
                <h4 className="text-sm text-muted-foreground mt-6">
                  Our partner center provides business broadband solutions with global coordination, local support, and enterprise-grade reliability across multiple access types and bandwidth options.
                </h4>
              </div>

              <div className="flex-1 w-full">
                <Card className="rounded-2xl overflow-hidden shadow-lg">
                  <CardContent className="p-0">
                    <img
                      src="https://cdn.dribbble.com/userupload/29647510/file/original-6c41bc159984aa848eec332e1d774c8d.gif"
                      alt="Business broadband connectivity illustration showing high-speed internet solutions for enterprises"
                      loading="lazy"
                      className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover object-center"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* GLOBAL ENABLER */}
        <section className="py-12 md:py-16 bg-muted/30" aria-labelledby="global-enabler-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h2 id="global-enabler-heading" className="text-2xl md:text-3xl font-bold mb-2">
                  Global Enabler for Business Broadband Services
                </h2>

                <h3 className="text-lg text-muted-foreground mb-4">
                  Worldwide connectivity solutions through our partner center network
                </h3>

                <p className="text-muted-foreground">
                  Relationships with carriers and managed services partners across 190+ countries provide competitive advantages for business broadband services. Worldwide delivery capabilities with best-in-class SLAs ensure customer satisfaction through reliable internet access coordinated by our partner center.
                </p>
                
                {/* H4 for SEO content */}
                <h4 className="text-sm text-muted-foreground mt-4">
                  Access global business broadband solutions through our partner center with local coordination, technical support, and enterprise-grade connectivity across multiple regions.
                </h4>
              </div>

              <Card className="flex-1 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1531668383211-64743e924c66?w=1400&auto=format&fit=crop&q=80"
                    alt="Global network coverage for business broadband services across multiple countries"
                    className="w-full h-44 sm:h-56 md:h-64 object-cover"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-12 md:py-16" aria-labelledby="features-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 id="features-heading" className="text-2xl md:text-3xl font-bold text-center mb-8">
              Step Into the Future of Business Broadband
            </h2>
            
            <h3 className="text-lg text-muted-foreground text-center mb-12">
              Comprehensive features for enterprise connectivity through our partner center
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={idx}
                    className="flex items-start space-x-4 p-4 bg-card shadow-sm rounded-xl hover:shadow-lg transition-all h-full"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CASE STUDIES PREVIEW */}
        <section className="py-12 md:py-16 bg-muted/30" aria-labelledby="case-studies-heading">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 id="case-studies-heading" className="text-2xl md:text-3xl font-bold mb-4">
                Business Broadband Case Studies
              </h2>
              <h3 className="text-lg text-muted-foreground">
                Real-world business broadband deployments through our partner center
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-primary mr-3" />
                  <h4 className="font-bold text-lg">Retail Chain Connectivity</h4>
                </div>
                <h5 className="text-sm text-muted-foreground mb-3">100+ store locations across 15 countries</h5>
                <p className="text-sm mb-4">
                  Deployed business broadband across retail locations with centralized management through our partner center, achieving 99.9% uptime and 30% cost reduction.
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link to="/cases/retail-connectivity">Read Case Study →</Link>
                </Button>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Server className="w-8 h-8 text-primary mr-3" />
                  <h4 className="font-bold text-lg">Manufacturing Network</h4>
                </div>
                <h5 className="text-sm text-muted-foreground mb-3">Multi-site production facilities</h5>
                <p className="text-sm mb-4">
                  Established business broadband connectivity across manufacturing sites with our partner center coordination, reducing latency by 40% and improving operational efficiency.
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link to="/cases/manufacturing-network">Read Case Study →</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* UNIQUE SECTION */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/6 to-secondary/6" aria-labelledby="unique-heading">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 id="unique-heading" className="text-2xl md:text-3xl font-bold mb-6">
              What Makes inte-QT's Business Broadband Unique?
            </h2>
            
            <h3 className="text-lg text-muted-foreground mb-8">
              Differentiated business broadband solutions through our partner center network
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-left">
              {[
                "Unmatched fast delivery timelines through partner coordination",
                "Global presence with local expertise and support",
                "Proactive NSOC monitoring 24×7×365 with dedicated teams",
                "Standardized processes for consistent performance and reliability",
                "Partner center integration for seamless service management",
                "Enterprise-grade SLAs with guaranteed uptime and performance",
              ].map((item, i) => (
                <article key={i} className="flex items-start space-x-4 p-4 bg-white/6 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="font-medium">{item}</p>
                </article>
              ))}
            </div>

            <h4 className="mt-6 text-muted-foreground">
              Explore our{" "}
              <Link to="/cases" className="underline font-semibold">
                case studies
              </Link>{" "}
              to see how enterprises leverage inte-QT business broadband through our partner center to scale globally.
            </h4>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 gradient-hero text-primary-foreground" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-xl md:text-2xl font-bold mb-3 text-white">
              Upgrade to Enterprise Business Broadband
            </h2>
            
            <h3 className="text-base md:text-lg mb-6 max-w-2xl mx-auto text-white">
              Access{" "}
              <Link to="/services" className="underline font-semibold">
                all enterprise connectivity services
              </Link>{" "}
              through our partner center or connect with our experts for tailored business broadband solutions.
            </h3>

            <div className="flex justify-center gap-4 flex-wrap">
              <Button asChild size="lg" className="gradient-primary shadow-glow" aria-label="Contact sales for business broadband">
                <Link to="/contact">Contact Sales</Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="gradient-primary shadow-glow" aria-label="Explore all connectivity services">
                <Link to="/partner-center">
                  Partner Center<ArrowRight className="ml-2 text-black" />
                </Link>
              </Button>
            </div>
            
            <h4 className="mt-8 text-sm text-white/80">
              For business broadband inquiries, partner center access, or connectivity consultations, contact our team at{" "}
              <a href="mailto:sales@inte-qt.com" className="underline font-semibold">
                sales@inte-qt.com
              </a>
            </h4>
          </div>
        </section>

      </main>

      {/* SEO CONTENT SECTION (Hidden for users, visible to search engines) */}
      <div className="container mx-auto px-4 py-8" style={{ opacity: 0.01, height: '1px', overflow: 'hidden' }}>
        <h2>Business Broadband Services Overview</h2>
        <p>
          inte-QT provides comprehensive business broadband solutions for enterprises across 190+ countries through our partner center network. 
          Our business broadband services deliver high-speed internet connectivity with enterprise-grade reliability, scalable bandwidth options, 
          and flexible access types including fiber, copper, and radio solutions.
        </p>
        <p>
          Access business broadband through our partner center with global coordination, local support, and comprehensive service management. 
          Explore case studies documenting successful business broadband deployments and partner collaborations for enterprise connectivity solutions.
        </p>
        <ul>
          <li>Enterprise business broadband solutions</li>
          <li>High-speed internet connectivity for businesses</li>
          <li>Global broadband coverage through partner center</li>
          <li>Scalable bandwidth options and flexible access</li>
          <li>Business broadband case studies and deployments</li>
          <li>Partner center coordination for broadband services</li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default BusinessBroadband;