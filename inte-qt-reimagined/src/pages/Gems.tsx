import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Globe, Server, Users, Shield, Clock, Network, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/* =========================
   IMAGE SLIDER DATA
========================= */
const SLIDER_IMAGES = [
  "https://i.imgur.com/B0W9Oes.jpeg",
  "https://i.imgur.com/8mSihSR.jpg",
  "https://i.imgur.com/Q0JibVh.jpg",
];

const INTRO_IMAGE =
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWd2dG9jenM4Z2ZoemRuanIzZWlqa3o0NG9lN3Z2MzNoYzljanN1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yQqNPOdGMexumRMxVP/giphy.gif";

const Gems: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* Auto slide every 4 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === SLIDER_IMAGES.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // SEO Configuration
  const seoConfig = {
    title: "GEMS - Global Enterprise Management Services | Network Management Solutions | inte-QT",
    description: "inte-QT's GEMS provides global enterprise management services with centralized network management, SLA-backed support, and partner center coordination for comprehensive connectivity solutions.",
    canonical: "https://www.inte-qt.com/gems",
    image: "https://i.imgur.com/fgarNxn.png",
    keywords: "GEMS, global enterprise management services, network management, SLA support, partner center coordination, enterprise connectivity"
  };

  // Features with icons
  const features = [
    {
      title: "Single Global Interface",
      description: "Unified management platform for global network environments",
      icon: Globe
    },
    {
      title: "Device Staging & Commissioning",
      description: "Custom device configuration as per enterprise requirements",
      icon: Server
    },
    {
      title: "24×7×365 Maintenance Support",
      description: "Round-the-clock support with SLA-backed guarantees",
      icon: Clock
    },
    {
      title: "Expert SME Engineers",
      description: "Professional and experienced subject matter experts",
      icon: Users
    },
    {
      title: "Partner Center Coordination",
      description: "Seamless coordination through our partner center network",
      icon: Network
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with compliance management",
      icon: Shield
    }
  ];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <html lang="en" />
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        
        {/* hreflang Tags */}
        <link rel="alternate" hreflang="en" href="https://www.inte-qt.com/gems" />
        <link rel="alternate" hreflang="es" href="https://www.inte-qt.com/es/gems" />
        <link rel="alternate" hreflang="fr" href="https://www.inte-qt.com/fr/gems" />
        <link rel="alternate" hreflang="de" href="https://www.inte-qt.com/de/gems" />
        <link rel="alternate" hreflang="x-default" href="https://www.inte-qt.com/gems" />
        
        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:url" content={seoConfig.canonical} />
        <meta property="og:site_name" content="inte-QT GEMS" />
        <meta property="og:image" content={seoConfig.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta name="twitter:image" content={seoConfig.image} />
        
        {/* Canonical */}
        <link rel="canonical" href={seoConfig.canonical} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "GEMS - Global Enterprise Management Services",
              "description": "Comprehensive global enterprise management services with centralized network management and SLA-backed support.",
              "provider": {
                "@type": "Organization",
                "name": "inte-QT",
                "url": "https://www.inte-qt.com"
              },
              "areaServed": "Worldwide",
              "category": "Enterprise Network Management"
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      {/* =========================
          INTRO SECTION
      ========================== */}
      <section className="pt-28 pb-20 px-4 md:pt-32" aria-labelledby="gems-intro-heading">
        <div className="max-w-6xl mx-auto grid gap-20 md:grid-cols-2 items-center">
          
          {/* LEFT: TEXT */}
          <div>
            <h1 id="gems-intro-heading" className="text-3xl md:text-5xl font-bold mb-6">
              Global Enterprise Management Services (GEMS)
            </h1>

            <h2 className="text-lg text-muted-foreground mb-6">
              Centralized framework for managing enterprise networks globally through our partner center
            </h2>

            <p className="text-muted-foreground mb-8">
              GEMS is inte-QT's centralized framework for managing enterprise
              networks globally — simplifying operations, improving reliability,
              and ensuring SLA-driven performance through our partner center coordination.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 mb-8">
              {[
                "Single interface for global environment management",
                "Device staging & commissioning as per user requirements",
                "Maintenance support 24×7×365 with SLA guarantees",
                "Professional & experienced SME engineers available",
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button asChild>
              <Link to="/contact">
                Contact GEMS Team <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative">
            <img
              src={INTRO_IMAGE}
              alt="GEMS Global Enterprise Management Services network visualization showing global connectivity and management"
              className="w-full h-[260px] sm:h-[320px] md:h-[320px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* =========================
          GEMS FEATURES
      ========================== */}
      <section className="py-16 bg-muted/30" aria-labelledby="gems-features-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="gems-features-heading" className="text-2xl md:text-4xl font-bold mb-4">
              GEMS Service Features
            </h2>
            <h3 className="text-lg text-muted-foreground">
              Comprehensive global enterprise management through our partner center
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <article key={idx} className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{feature.title}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          GEM PROCESS (3 PARTS)
      ========================== */}
      <section className="py-20 px-4 bg-muted/30" aria-labelledby="gems-process-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="gems-process-heading" className="text-2xl md:text-4xl font-bold mb-4">
              GEMS Process Framework
            </h2>
            <h3 className="text-lg text-muted-foreground">
              Structured approach to global enterprise management through partner center coordination
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4">Analyzing Phase</h3>
                <ul className="space-y-2 text-muted-foreground flex-grow">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Comprehensive requirement analysis and assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Network feasibility study and technical evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Performance metrics and SLA planning through partner center</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Assign dedicated project manager and sales support team</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4">Local Procurement</h3>
                <ul className="space-y-2 text-muted-foreground flex-grow">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Align requirements with local region partners through partner center</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Work with Deal ID or local discount structures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Design and prepare comprehensive solutions with proposals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Solution understanding and hardware availability with partners</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4">Delivery & Support</h3>
                <ul className="space-y-2 text-muted-foreground flex-grow">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Define scope of work for partners as per requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Comprehensive testing and commissioning procedures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Ongoing support and continuous monitoring services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Collect device details and documentation from partners</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* =========================
          IMAGE SLIDER
      ========================== */}
      <section className="py-20 px-4" aria-labelledby="gems-action-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="gems-action-heading" className="text-2xl md:text-4xl font-bold mb-4">
              GEMS in Action
            </h2>
            <h3 className="text-lg text-muted-foreground">
              Global enterprise management deployments through our partner center network
            </h3>
          </div>

          <div className="relative overflow-hidden rounded-2xl h-[220px] sm:h-[300px] md:h-[580px]">
            {SLIDER_IMAGES.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`GEMS Global Enterprise Management Services deployment example ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  currentSlide === idx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {SLIDER_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  currentSlide === idx
                    ? "bg-primary"
                    : "bg-muted-foreground/40"
                }`}
                aria-label={`View slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CTA SECTION
      ========================== */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10" aria-labelledby="gems-cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="gems-cta-heading" className="text-2xl md:text-3xl font-bold mb-6">
            Transform Your Enterprise Management with GEMS
          </h2>
          
          <h3 className="text-lg text-muted-foreground mb-8">
            Streamline global network operations through our partner center with comprehensive GEMS solutions
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline">
              <Link to="/partner-center">
                Partner Center <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          
        </div>
      </section>

      {/* =========================
          SEO CONTENT SECTION (Hidden for users, visible to search engines)
      ========================== */}
      <div className="container mx-auto px-4 py-8" style={{ opacity: 0.01, height: '1px', overflow: 'hidden' }}>
        <h2>Global Enterprise Management Services (GEMS)</h2>
        <p>
          inte-QT's GEMS provides comprehensive global enterprise management services with centralized network management, 
          SLA-backed support, and partner center coordination for enterprise connectivity solutions. Our GEMS framework 
          delivers unified management, expert engineering support, and comprehensive service delivery across global networks.
        </p>
        <p>
          Access GEMS services through our partner center network with global coordination, technical expertise, and 
          enterprise-grade management solutions. Explore GEMS deployments, case studies, and partner collaborations for 
          comprehensive enterprise network management and support.
        </p>
        <ul>
          <li>Global enterprise management services (GEMS)</li>
          <li>Centralized network management platform</li>
          <li>SLA-backed support and maintenance</li>
          <li>Partner center coordination for global operations</li>
          <li>Expert SME engineering teams</li>
          <li>Comprehensive enterprise connectivity management</li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default Gems;