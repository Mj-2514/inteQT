// src/pages/Home.tsx
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Zap,
  Shield,
  Network,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Eye,
  Plane,
  Cloud,
  DollarSign,
  Calendar,
  Lightbulb,
  Hotel,
  X,
  Check,
  MapPin,
  Server,
  Wifi,
} from "lucide-react";

const nsocImage = "https://www.hrcloud.com/hubfs/workplace.gif";

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showGlitters, setShowGlitters] = useState(false);
  
  // Show popup on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Start celebration after component mounts
    setShowGlitters(true);
    setShowPopup(true);
    
    // Auto close after 6 seconds (matching Vue)
    const timer = setTimeout(() => {
      setShowPopup(false);
      setShowGlitters(false);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClosePopup = () => {
    setShowPopup(false);
    setShowGlitters(false);
  };

  const services = [
    {
      title: "Dedicated Lines",
      subtitle: "Premium Connectivity",
      description: "High-performance dedicated internet connections with guaranteed SLAs and 24/7 monitoring",
      longDescription: "Enterprise-grade dedicated internet access providing secure, high-bandwidth connectivity with 99.9% uptime guarantees for mission-critical operations across financial, healthcare, and enterprise sectors.",
      image: "https://assets.superhivemarket.com/cache/0346e49935ae63f6209492bf3994d0b4.gif",
      icon: Network,
      features: ["Guaranteed Bandwidth", "SLA Backed", "Enterprise Security", "Global Coverage"],
      slug: "dedicated-lines"
    },
    {
      title: "Business Broadband",
      subtitle: "Reliable High-Speed Internet",
      description: "Cost-effective broadband solutions delivering consistent speeds for SMBs across 190+ countries",
      longDescription: "Scalable business broadband with flexible bandwidth options ideal for remote offices, retail locations, and organizations needing multiple connections across different regions.",
      image: "https://cdn.dribbble.com/userupload/29647510/file/original-6c41bc159984aa848eec332e1d774c8d.gif",
      icon: Zap,
      features: ["Scalable Plans", "Global Reach", "Cost-Effective", "Quick Deployment"],
      slug: "business-broadband"
    },
    {
      title: "Wireless Connect",
      subtitle: "Next-Gen Wireless Solutions",
      description: "5G, satellite & point-to-point solutions for remote locations and mobile connectivity",
      longDescription: "Advanced wireless internet solutions including 5G, satellite connectivity, and microwave point-to-point links for events, construction sites, maritime vessels, and remote industrial locations.",
      image: "https://www.gadgetmatch.com/wp-content/uploads/2018/12/GadgetMatch-20181219-5G-Explainer-03.gif",
      icon: Globe,
      features: ["5G Ready", "Satellite Options", "Rapid Setup", "Mobile Solutions"],
      slug: "wireless-connect"
    },
  ];

  const industries = [
    { 
      name: "Telecom", 
      icon: Network,
      description: "Backhaul solutions and interconnection services"
    },
    { 
      name: "Airline", 
      icon: Plane,
      description: "In-flight connectivity and airport networks"
    },
    { 
      name: "Cloud", 
      icon: Cloud,
      description: "Direct cloud connectivity solutions"
    },
    { 
      name: "Pharma", 
      icon: Shield,
      description: "Secure clinical trial networks"
    },
    { 
      name: "Financial", 
      icon: DollarSign,
      description: "Low-latency trading connections"
    },
    { 
      name: "Events", 
      icon: Calendar,
      description: "High-density event WiFi solutions"
    },
    { 
      name: "Energy", 
      icon: Lightbulb,
      description: "Remote site SCADA networks"
    },
    { 
      name: "Hotels", 
      icon: Hotel,
      description: "Hospitality network management"
    },
  ];

  const events = [
    {
      title: "International Telecoms Week 2024",
      date: "5 - 7 May 2025",
      location: "Gaylord National Resort & Convention Centre National Harbor",
      description: "Global telecom executives gathering featuring inte-QT's connectivity innovations",
      img: "https://imgur.com/y1G9poB.png",
      slug: "itw-2024"
    },
    {
      title: "Channel Partners Conference & Expo 2025",
      date: "24 - 25 March 2025",
      location: "The Venetian Resort in Las Vegas",
      description: "Leading partner event showcasing inte-QT's partner program",
      img: "https://i.imgur.com/6G5KxAG.jpg",
      slug: "channel-partners-2025"
    },
    {
      title: "Capacity Europe 2024",
      date: "15 - 17 October 2024",
      location: "InterContinental London - The O2",
      description: "Europe's premier connectivity event with inte-QT network announcements",
      img: "https://i.imgur.com/XAx622Y.jpg",
      slug: "capacity-europe-2024"
    },
  ];
  
  const partnerBenefits = [
    { 
      title: "Global", 
      subtitle: "Interfacing", 
      icon: Globe,
      description: "Access to 190+ countries network"
    },
    { 
      title: "Transparency of", 
      subtitle: "Deal Cycle", 
      icon: TrendingUp,
      description: "Real-time deal tracking portal"
    },
    { 
      title: "A Forum to", 
      subtitle: "Gain", 
      icon: Users,
      description: "Exclusive training and events"
    },
    { 
      title: "Opportunity to", 
      subtitle: "Grow", 
      icon: Award,
      description: "Scalable revenue opportunities"
    },
    { 
      title: "Efficient", 
      subtitle: "Quote to Cash", 
      icon: DollarSign,
      description: "Streamlined business processes"
    },
  ];

  // Company logo for popup
  const companylogo = "https://www.inte-qt.com/img/logo.d6407a89.jpg";

  // === SEO Configuration ===
  const seoConfig = {
    title: "Global Connectivity Services Partner | Dedicated Lines & SD-WAN Solutions | inte-QT",
    description: "inte-QT: Global connectivity partner providing Dedicated Lines, Business Broadband, SD-WAN underlay, and 24/7 NSOC across 190+ countries. Join our partner center for enterprise solutions.",
    canonical: "https://www.inte-qt.com/",
    image: "https://i.imgur.com/fgarNxn.png",
    siteName: "inte-QT - Global Connectivity Partner",
    locale: "en_US",
    keywords: "global connectivity, services partner, partner center, dedicated lines, business broadband, SD-WAN, NSOC, case studies, events"
  };

  // Structured Data
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "inte-QT",
    "url": "https://www.inte-qt.com",
    "logo": "https://www.inte-qt.com/img/logo.d6407a89.jpg",
    "description": "Global connectivity services partner providing solutions across 190+ countries",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global"
    },
    "sameAs": [
      "https://www.linkedin.com/company/inte-qt",
      "https://twitter.com/inte_qt"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.inte-qt.com",
    "name": "inte-QT",
    "description": seoConfig.description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.inte-qt.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <html lang="en" />
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        
        {/* hreflang Tags */}
        <link rel="alternate" hreflang="en" href="https://www.inte-qt.com/" />
        <link rel="alternate" hreflang="es" href="https://www.inte-qt.com/es/" />
        <link rel="alternate" hreflang="fr" href="https://www.inte-qt.com/fr/" />
        <link rel="alternate" hreflang="de" href="https://www.inte-qt.com/de/" />
        <link rel="alternate" hreflang="x-default" href="https://www.inte-qt.com/" />
        
        {/* Open Graph */}
        <meta property="og:locale" content={seoConfig.locale} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:url" content={seoConfig.canonical} />
        <meta property="og:site_name" content={seoConfig.siteName} />
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
          {JSON.stringify(organizationJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteJsonLd)}
        </script>
      </Helmet>

      <Seo
        title={seoConfig.title}
        description={seoConfig.description}
        canonical={seoConfig.canonical}
        image={seoConfig.image}
        siteName={seoConfig.siteName}
      />

      {/* POPUP - EXACT VUE DESIGN */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-label="Company Announcement">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/60"
            onClick={handleClosePopup}
            aria-hidden="true"
          />
          
          {/* Glitter Animation - EXACT FROM VUE */}
          {showGlitters && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
              {[...Array(30)].map((_, n) => (
                <div
                  key={n}
                  className="absolute w-[10px] h-[10px] rounded-full animate-glitter"
                  style={{
                    left: `${Math.random() * 100}vw`,
                    top: `${Math.random() * 100}vh`,
                    animationDelay: `${Math.random()}s`,
                    backgroundColor: n % 2 === 0 ? 'gold' : '#fff8dc',
                    opacity: 0.8,
                  }}
                />
              ))}
            </div>
          )}

          {/* Popup Box - EXACT FROM VUE */}
          <div className="relative bg-white rounded-[15px] shadow-lg w-[350px] max-w-[90%] p-5 text-center animate-popup-fade z-10">
            {/* Logo - 300px as in Vue */}
            <img 
              src={companylogo} 
              alt="inte-QT - FT1000 Fastest Growing Company in Europe 2025" 
              className="w-[300px] mx-auto mb-5"
            />
            
            {/* Heading */}
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              We are one of the FT1000: Fastest-Growing Companies in Europe 2025!
            </h2>
            
            {/* Source */}
            <p className="text-gray-600 text-sm">
              (Source: Financial Times, Forbes España)
            </p>
            
            {/* Close button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close announcement"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION - YOUR EXACT DESIGN */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        aria-label="Global Connectivity Hero"
      >
        {/* Background Image - Using your SEO image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://i.imgur.com/o0I3t65.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            Global Connectivity Services Partner
            <br />
            <span className="text-gradient">Across 190+ Countries</span>
          </h1>

          <h2 className="font-agbalumo mt-28 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            Dedicated Lines, SD-WAN underlay, Business Broadband & 24×7 NSOC solutions.
          </h2>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="gradient-primary shadow-glow text-lg px-6 py-3 w-full sm:w-auto"
            >
              <Link to="/services" aria-label="Explore our connectivity services">
                Explore Services{" "}
                <ArrowRight className="ml-2 w-5 h-5 inline-block" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-6 py-3 border-2 w-full sm:w-auto"
            >
              <Link to="/partner-center" aria-label="Access our partner center">
                Partner Center
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - YOUR EXACT DESIGN */}
      <section className="py-16 sm:py-20 bg-muted/30" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold mb-3">
              Global Connectivity Services
            </h2>
            <h3 className="text-base sm:text-lg text-muted-foreground">
              Comprehensive solutions from our services partner network
            </h3>
            
            {/* H5 for additional SEO content */}
            <h5 className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our partner center provides end-to-end connectivity services including dedicated lines, business broadband, and wireless connect solutions with 24/7 NSOC monitoring.
            </h5>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  to={`/services/${service.slug}`}
                  key={index}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <Card className="relative overflow-hidden rounded-2xl shadow-xl h-[320px] group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />

                    <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                      <h4 className="text-xl sm:text-2xl font-semibold">
                        {service.title}
                      </h4> 
                      {service.subtitle && (
                        <h5 className="text-sm opacity-90 -mt-1">
                          {service.subtitle}
                        </h5>
                      )}
                      <p className="text-xs sm:text-sm opacity-80 mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Additional H6 content for SEO */}
                  <div className="mt-2">
                    <h6 className="text-xs text-muted-foreground text-center">
                      {service.features.join(" • ")}
                    </h6>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 w-full sm:w-auto"
            >
              <Link to="/coverage" aria-label="View our global coverage map">
                {" "}
                <Globe className="mr-2 inline-block w-5 h-5" /> We cover 190+ countries across the globe
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FULL-SCREEN VIDEO SECTION - YOUR EXACT DESIGN */}
      <Link 
        to="/services/aeta" 
        className="block relative w-full group cursor-pointer overflow-hidden bg-black"
        aria-label="View AETA connectivity solutions"
      >
        {/* Video fills entire section - ORIGINAL VIDEO */}
        <video
          src="https://res.cloudinary.com/dmhhkhgny/video/upload/v1745406688/website/vzw7z92zdvomwfvwlguc.mp4"
          className="w-full h-auto block"
          autoPlay
          muted
          loop
          playsInline
          aria-label="AETA connectivity solutions demonstration"
        />
        
        {/* Overlay that darkens on hover */}
        <div className="absolute inset-0 transition-all duration-500" />
        
       
      </Link>

      {/* PARTNER BENEFITS SECTION - YOUR EXACT DESIGN */}
      <section className="py-16 sm:py-20" aria-labelledby="partner-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 id="partner-heading" className="text-3xl sm:text-4xl font-bold mb-3">
              Partner Center Benefits
            </h2>
            <h3 className="text-base sm:text-lg text-muted-foreground">
              Join our global services partner network
            </h3>
            
            {/* H5 for SEO content */}
            <h5 className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
              Access exclusive resources, collaborative opportunities, and growth potential through our partner center connectivity services.
            </h5>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partnerBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={i}
                  className="text-center hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <h4 className="text-sm text-muted-foreground">
                      {benefit.title}
                    </h4>
                    <h5 className="text-lg font-semibold">{benefit.subtitle}</h5>
                    
                    {/* H6 for additional content */}
                    <h6 className="text-xs text-muted-foreground mt-2">
                      {benefit.description}
                    </h6>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="gradient-primary shadow-glow"
            >
              <Link to="/partner-center" aria-label="Learn more about partner center">
                {" "}
                Learn More <ArrowRight className="ml-2 inline-block" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* NSOC SECTION - YOUR EXACT DESIGN */}
      <section className="py-16 sm:py-20 relative overflow-hidden" aria-labelledby="nsoc-heading">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${nsocImage})` }}
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl px-6 sm:px-8 py-6">
            <div className="flex items-center gap-4 mb-4">
              <Eye className="w-10 h-10 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" />
              <h2 id="nsoc-heading" className="text-2xl sm:text-3xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                Sit back &amp; Relax, We got our <span className="">EYES</span> on it
              </h2>
            </div>

            <h3 className="text-base sm:text-lg mb-6 text-white font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              24×7 Global Network Security Operations Center
            </h3>

            <Button
              asChild
              size="lg"
              className="gradient-primary shadow-glow"
            >
              <Link to="/global-nsoc" aria-label="Explore NSOC 24×7 services">
                Explore NSOC 24X7{" "}
                <ArrowRight className="ml-2 inline-block" />
              </Link>
            </Button>
            
            {/* H5 for additional SEO content */}
            <h5 className="text-sm text-white/80 mt-4">
              Real-time monitoring and threat detection from our partner center NSOC operations.
            </h5>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION - YOUR EXACT DESIGN */}
      <section className="py-16 sm:py-20 bg-muted/30" aria-labelledby="industries-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 id="industries-heading" className="text-3xl sm:text-4xl font-bold mb-3">
              Industries We Serve
            </h2>
            <h3 className="text-base sm:text-lg text-muted-foreground">
              Trusted by leading sectors worldwide through our partner network
            </h3>
          </div>

          <div className="overflow-hidden py-6">
            <div className="flex space-x-6 animate-scroll">
              {industries.concat(industries).map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-card min-w-[110px]"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                    <h5 className="text-sm text-center">{industry.name}</h5>
                    
                    {/* H6 for additional content */}
                    <h6 className="text-xs text-muted-foreground text-center">
                      {industry.description}
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS SECTION - YOUR EXACT DESIGN */}
      <section className="py-16 sm:py-20" aria-labelledby="events-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 id="events-heading" className="text-3xl sm:text-4xl font-bold mb-3">
              Industry Events & Blogs
            </h2>
            <h3 className="text-base sm:text-lg text-muted-foreground">
              Connect with us at leading global events
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 w-full"
              >
                <div className="w-full aspect-[16/9] overflow-hidden rounded-t-xl bg-muted">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                <CardContent>
                  <div className="flex items-start gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold">
                        {event.title}
                      </h4>
                      <h5 className="text-sm text-muted-foreground">
                        {event.date}
                      </h5>
                      <h6 className="text-sm text-muted-foreground">
                        {event.location}
                      </h6>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {event.description}
                  </p>

                  <Button
                    asChild
                    variant="link"
                    className="text-primary px-0"
                  >
                    <Link to="/events" aria-label="View all events">
                      Read more{" "}
                      <ArrowRight className="ml-1 w-4 h-4 inline-block" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 w-full sm:w-auto"
            >
              <Link to="/events" aria-label="View all events">
                View All Events
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION - YOUR EXACT DESIGN */}
      <section
        className="relative py-20 sm:py-28 overflow-hidden"
        aria-label="Client testimonials"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://cdn.pixabay.com/photo/2019/07/16/11/39/charles-4341624_1280.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        <div className="relative container mx-auto px-4 text-center text-white max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            What Our Partners Say
          </h2>

          <Card className="bg-white/10 backdrop-blur-m border-white/20 shadow-2xl mx-auto rounded-3xl">
            <CardContent className="p-6 sm:p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                BRILLIANT work by inte-QT partner center.
              </h3>
              <p className="text-base sm:text-lg text-white/80 mb-4">
                Our global connectivity deployment was seamlessly managed by inte-QT's partner center, 
                from initial quotation through timely delivery within the event schedule. A truly 
                delightful experience with their services partner network.
              </p>

              <div className="border-t border-white/20 pt-4">
                <h4 className="font-semibold">Associate Director</h4>
                <h5 className="text-sm text-white/70">
                  World's Leading Tier-1 Carrier • London, UK
                </h5>
                <h6 className="text-sm text-primary mt-2">
                  World Championship Motor Racing Connectivity Case
                </h6>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA SECTION - YOUR EXACT DESIGN */}
      <section className="py-16 sm:py-20 gradient-hero text-primary-foreground" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold mb-3 text-white">
            Ready to Connect Globally?
          </h2>
          <h3 className="text-base sm:text-lg mb-6 text-white">
            Contact our partner center for customized connectivity solutions
          </h3>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg px-6 py-3"
          >
            <Link to="/contact" aria-label="Get in touch with our team">
              Get In Touch <ArrowRight className="ml-2 inline-block" />
            </Link>
          </Button>
        </div>
      </section>

      {/* HIDDEN SEO CONTENT SECTION (Visible to search engines only) */}
      <div className="hidden">
        <h2>Global Connectivity Services Partner</h2>
        <p>
          inte-QT is a leading global connectivity services partner providing enterprise solutions 
          through our dedicated partner center. Our connectivity services span 190+ countries with 
          comprehensive offerings including dedicated lines, business broadband, SD-WAN underlay, 
          and 24/7 NSOC monitoring.
        </p>
        <p>
          Explore our case studies documenting successful connectivity deployments, access our partner 
          center for collaborative opportunities, and discover our global services network. From events 
          coordination to enterprise connectivity solutions, inte-QT delivers reliable connectivity 
          across multiple industries.
        </p>
        <ul>
          <li>Global connectivity services partner</li>
          <li>Partner center access and resources</li>
          <li>Dedicated lines and business broadband</li>
          <li>SD-WAN underlay connectivity solutions</li>
          <li>24/7 NSOC monitoring and security</li>
          <li>Case studies and success stories</li>
          <li>Industry events and partner forums</li>
          <li>Global coverage across 190+ countries</li>
        </ul>
      </div>

      {/* BACKLINKS SECTION (SEO optimized) */}
      <div className="container mx-auto px-4 py-8">
        <div className="prose prose-sm max-w-none text-center">
          <h3 className="text-lg font-semibold mb-4">Global Connectivity Resources</h3>
          <p className="text-sm text-muted-foreground">
            Explore our <Link to="/services" className="text-primary">connectivity services</Link>, 
            visit our <Link to="/partner-center" className="text-primary">partner center</Link> for collaboration, 
            review <Link to="/cases" className="text-primary">case studies</Link> of successful deployments, 
            and stay updated with industry <Link to="/events" className="text-primary">events </Link> 
            and <Link to="/blogs" className="text-primary">blogs</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;