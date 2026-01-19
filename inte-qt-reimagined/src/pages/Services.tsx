import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Network,
  Zap,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
  Server,
  CloudCog,
  Wifi,
  Users,
  MapPin,
  Clock,
} from "lucide-react";

const Services = () => {
  /* ================= MAIN SERVICES ================= */
  const mainServices = [
    {
      id: "dedicated-lines",
      title: "Dedicated Lines (DL)",
      subtitle: "Premium Enterprise Connectivity",
      description: "High-performance, dedicated internet connections with guaranteed bandwidth and low latency. Perfect for mission-critical applications and large-scale operations.",
      longDescription: "Dedicated Lines provide secure, high-bandwidth connectivity with 99.9% uptime SLAs for mission-critical operations across financial, healthcare, and enterprise sectors. Our global partner network ensures seamless connectivity across 190+ countries through our partner center.",
      icon: Network,
      link: "/services/dedicated-lines",
      image: "https://assets.superhivemarket.com/cache/0346e49935ae63f6209492bf3994d0b4.gif",
      features: [
        "Global coverage across Tier 1, Tier 2, Tier 3 cities along far-flung areas",
        "High availability & Faster Delivery",
        "Committed Bandwidth up to 10G",
        "Diverse, Scalable, Secure and Reliable Solutions",
        "Priority support through partner center",
      ],
      keywords: ["dedicated lines", "enterprise connectivity", "high bandwidth", "global coverage", "partner services"]
    },
    {
      id: "business-broadband",
      title: "Business Broadband (BB)",
      subtitle: "Reliable High-Speed Internet",
      description: "Reliable, high-speed broadband solutions tailored for businesses of all sizes. Scalable and cost-effective connectivity for your growing needs.",
      longDescription: "Business Broadband from inte-QT offers scalable internet solutions perfect for growing businesses. Our global network provides reliable connectivity with flexible bandwidth options, making it ideal for remote offices, retail locations, and organizations needing multiple connections across different regions through our services partner program.",
      icon: Zap,
      link: "/services/business-broadband",
      image: "https://cdn.dribbble.com/userupload/29647510/file/original-6c41bc159984aa848eec332e1d774c8d.gif",
      features: [
        "Worldwide delivery capability in the segment",
        "Fastest delivery with tailored option",
        "High bandwidth offering",
        "Best in class SLA with Proactive Network Health Monitoring",
        "Convergent, Redundant Gateway, Hyper fast and fully flexible broadband services",
      ],
      keywords: ["business broadband", "high-speed internet", "SMB connectivity", "global services", "partner solutions"]
    },
    {
      id: "wireless-connect",
      title: "Wireless Connects (XC)",
      subtitle: "Next-Gen Wireless Solutions",
      description: "Cutting-edge wireless connectivity solutions for rapid deployment and flexible networking. Ideal for temporary sites and hard-to-reach locations.",
      longDescription: "Our Wireless Connect service provides advanced wireless internet solutions including 5G, satellite connectivity, and microwave point-to-point links for events, construction sites, maritime vessels, and remote industrial locations. As a global connectivity partner, we deliver reliable wireless solutions across our extensive partner network.",
      icon: Wifi,
      link: "/services/wireless-connect",
      image: "https://www.gadgetmatch.com/wp-content/uploads/2018/12/GadgetMatch-20181219-5G-Explainer-03.gif",
      features: [
        "Global Wireless connectivity using 3G/4G/5G options",
        "Quick deployments with High-capacity bandwidth",
        "Secure, optimal performance wireless connectivity solutions",
        "Low latency, High speed mobility",
        "Services monitoring and 24*7 Customer support",
      ],
      keywords: ["wireless connect", "5G solutions", "mobile connectivity", "global partner", "connectivity services"]
    },
  ];

  /* ================= ADDITIONAL SERVICES ================= */
  const additionalServices = [
    {
      id: "gems",
      title: "G.E.M.S",
      subtitle: "Global Edge Managed Services",
      description: "Comprehensive managed services for your global network infrastructure through our partner center.",
      longDescription: "Global Edge Managed Services provide end-to-end network management and optimization across your enterprise infrastructure. Our partner center coordinates seamless service delivery with 24/7 monitoring and proactive maintenance.",
      icon: CloudCog,
      image: "https://i.imgur.com/Q0JibVh.jpg",
      link: "/gems",
      external: false,
      features: ["Network Management", "Performance Optimization", "Partner Coordination", "24/7 Monitoring"]
    },
    {
      id: "nsoc",
      title: "NSOC 24×7",
      subtitle: "Network Security Operations Center",
      description: "Round-the-clock monitoring and security for your network with dedicated partner support.",
      longDescription: "Our 24/7 Network Security Operations Center provides continuous monitoring, threat detection, and incident response for enterprise networks. Through our partner center, we deliver comprehensive security services with real-time alerts and proactive protection.",
      icon: Shield,
      image: "https://www.hrcloud.com/hubfs/workplace.gif",
      link: "/global-nsoc",
      external: false,
      features: ["24/7 Monitoring", "Threat Detection", "Incident Response", "Partner Security"]
    },
    {
      id: "aeta",
      title: "Aeta Platform",
      subtitle: "Revolutionizing Connectivity",
      description: "Advanced portal for managing your connectivity solutions through our partner network.",
      longDescription: "The Aeta Platform provides a unified interface for managing global connectivity services. Our partner center uses this platform to coordinate deployments, monitor performance, and optimize network solutions across multiple regions.",
      icon: Server,
      image: "https://res.cloudinary.com/dmhhkhgny/video/upload/v1745406688/website/vzw7z92zdvomwfvwlguc.mp4",
      link: "/services/aeta",
      external: false,
      features: ["Unified Management", "Real-time Analytics", "Partner Portal", "Service Coordination"]
    },
  ];

  // SEO Configuration
  const seoConfig = {
    title: "Global Connectivity Services | Dedicated Lines, Broadband & Wireless Solutions | inte-QT",
    description: "inte-QT provides comprehensive connectivity services including Dedicated Lines, Business Broadband, Wireless Connect, G.E.M.S, NSOC 24×7, and Aeta Platform across 190+ countries through our partner center.",
    canonical: "https://www.inte-qt.com/services",
    image: "https://i.imgur.com/fgarNxn.png",
    keywords: "connectivity services, dedicated lines, business broadband, wireless connect, partner center, global services, NSOC, GEMS, Aeta platform"
  };

  // Structured Data
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Connectivity Services",
    description: "Global connectivity services offered by inte-QT",
    numberOfItems: mainServices.length + additionalServices.length,
    itemListElement: [
      ...mainServices.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `https://www.inte-qt.com${service.link}`,
          provider: {
            "@type": "Organization",
            name: "inte-QT"
          }
        }
      })),
      ...additionalServices.map((service, index) => ({
        "@type": "ListItem",
        position: mainServices.length + index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `https://www.inte-qt.com${service.link}`,
          provider: {
            "@type": "Organization",
            name: "inte-QT"
          }
        }
      }))
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      {/* ================= SEO & HELMET ================= */}
      <Helmet>
        <html lang="en" />
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        
        {/* hreflang Tags */}
        <link rel="alternate" hreflang="en" href="https://www.inte-qt.com/services" />
        <link rel="alternate" hreflang="es" href="https://www.inte-qt.com/es/services" />
        <link rel="alternate" hreflang="fr" href="https://www.inte-qt.com/fr/services" />
        <link rel="alternate" hreflang="de" href="https://www.inte-qt.com/de/services" />
        <link rel="alternate" hreflang="x-default" href="https://www.inte-qt.com/services" />
        
        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:url" content={seoConfig.canonical} />
        <meta property="og:site_name" content="inte-QT - Global Connectivity Services" />
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
          {JSON.stringify(serviceJsonLd)}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="gradient-hero text-primary-foreground" aria-labelledby="hero-heading">
        <div
          className="relative h-[380px] sm:h-[420px] bg-cover bg-center"
          style={{
            backgroundImage: `url("https://www.hrcloud.com/hubfs/workplace.gif")`,
          }}
        >
          <div className="absolute inset-0 bg-black/35" />
          <div className="container mx-auto px-4 text-center relative z-10 h-full flex flex-col justify-center">
            <Globe className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 text-white animate-pulse" />
            <h1 id="hero-heading" className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Global Connectivity Services
            </h1>
            <h2 className="text-white text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive connectivity solutions through our partner center across 190+ countries
            </h2>
            
            {/* H3 for additional SEO content */}
            <h3 className="text-white/80 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
              Explore our dedicated lines, business broadband, wireless connect, and managed services from our global services partner network
            </h3>
          </div>
        </div>
      </section>

      {/* ================= MAIN SERVICES ================= */}
      <section className="py-14 sm:py-16 lg:py-20" aria-labelledby="main-services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="main-services-heading" className="text-3xl sm:text-4xl font-bold mb-4">
              Core Connectivity Services
            </h2>
            <h3 className="text-muted-foreground text-lg">
              Enterprise-grade solutions from our global partner network
            </h3>
            
            {/* H4 for SEO content */}
            <h4 className="text-sm text-muted-foreground mt-4 max-w-3xl mx-auto">
              Our partner center coordinates dedicated lines, business broadband, and wireless connect services across global markets with comprehensive support and SLAs.
            </h4>
          </div>

          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const reverse = index % 2 !== 0;

              return (
                <article 
                  key={service.id}
                  className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} gap-10 lg:gap-12 items-center`}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  {/* IMAGE – FIRST ON MOBILE & TABLET */}
                  <div className="flex-1 order-1 lg:order-none w-full">
                    <Card className="relative h-[240px] sm:h-[300px] md:h-[340px] lg:h-[360px] rounded-2xl overflow-hidden border-0 shadow-xl">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                        itemProp="image"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <CardContent />
                    </Card>
                  </div>

                  {/* TEXT – AFTER IMAGE ON MOBILE */}
                  <div className="flex-1 order-2 lg:order-none text-center lg:text-left">
                    <Icon className="w-14 h-14 mb-4 text-primary mx-auto lg:mx-0" />

                    <h4 className="text-3xl sm:text-4xl font-bold mb-2" itemProp="name">
                      {service.title}
                    </h4>
                    
                    <h5 className="text-lg text-primary mb-4 font-semibold">
                      {service.subtitle}
                    </h5>

                    <p className="text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0" itemProp="description">
                      {service.description}
                    </p>

                    {/* Additional H6 content */}
                    <h6 className="text-sm font-medium mb-4 text-gray-600">
                      Key Features:
                    </h6>

                    <ul className="space-y-3 mb-8 max-w-xl mx-auto lg:mx-0">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Keywords for SEO (hidden) */}
                    <div className="hidden">
                      {service.keywords.map((keyword, idx) => (
                        <span key={idx}>{keyword}</span>
                      ))}
                    </div>

                    <Link to={service.link}>
                      <Button size="lg" aria-label={`Learn more about ${service.title}`}>
                        Explore Service <ArrowRight className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ADDITIONAL SERVICES ================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-muted/30" aria-labelledby="additional-services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="additional-services-heading" className="text-3xl sm:text-4xl font-bold mb-4">
              Additional Partner Services
            </h2>
            <h3 className="text-muted-foreground text-lg">
              Comprehensive solutions managed through our partner center
            </h3>
            
            {/* H4 for SEO content */}
            <h4 className="text-sm text-muted-foreground mt-4 max-w-3xl mx-auto">
              Our partner center provides G.E.M.S, NSOC 24×7, and Aeta Platform services for complete connectivity management and security across global networks.
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              const Wrapper = service.external ? "a" : Link;
              const wrapperProps = service.external
                ? {
                    href: service.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : { to: service.link };

              return (
                <article key={service.id} className="group block" itemScope itemType="https://schema.org/Service">
                  <Wrapper {...wrapperProps} aria-label={`View ${service.title} service`}>
                    <Card className="relative aspect-[16/9] rounded-2xl overflow-hidden border-0 shadow-lg transition-transform duration-300 group-hover:scale-[1.03]">
                      {service.image.endsWith(".mp4") ? (
                        <video
                          src={service.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                          itemProp="image"
                        />
                      ) : (
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${service.image})`,
                          }}
                          itemProp="image"
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                      <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                        <Icon className="w-12 h-12 mb-4" />
                        <h5 className="text-2xl font-bold" itemProp="name">{service.title}</h5>
                        <h6 className="text-sm font-semibold opacity-90">{service.subtitle}</h6>
                        <p className="text-xs opacity-80 mt-1" itemProp="description">
                          {service.description}
                        </p>
                        
                        {/* Hidden long description for SEO */}
                        <div className="hidden" itemProp="description">
                          {service.longDescription}
                        </div>
                      </CardContent>
                    </Card>
                  </Wrapper>
                  
                  {/* Additional content below card */}
                  <div className="mt-4">
                    <ul className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= GLOBAL COVERAGE ================= */}
      <section className="py-16" aria-labelledby="coverage-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="coverage-heading" className="text-3xl sm:text-4xl font-bold mb-8">
            Global Partner Network Coverage
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h5 className="text-xl font-bold mb-2">190+ Countries</h5>
              <h6 className="text-sm text-muted-foreground">Global connectivity coverage</h6>
            </div>
            
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h5 className="text-xl font-bold mb-2">Partner Network</h5>
              <h6 className="text-sm text-muted-foreground">Global services partners</h6>
            </div>
            
            <div className="text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h5 className="text-xl font-bold mb-2">24/7 Support</h5>
              <h6 className="text-sm text-muted-foreground">Partner center availability</h6>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 gradient-hero text-primary-foreground" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold mb-4 text-white">
            Ready to Connect with Our Partner Center?
          </h2>
          <h3 className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Access global connectivity services through our partner network
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
              <Link to="/partner-center">Access Partner Center</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= SEO CONTENT SECTION (Hidden for users, visible to search engines) ================= */}
      <div className="container mx-auto px-4 py-8" style={{ opacity: 0.01, height: '1px', overflow: 'hidden' }}>
        <h2>Global Connectivity Services Overview</h2>
        <p>
          inte-QT provides comprehensive global connectivity services through our partner center, 
          offering dedicated lines, business broadband, wireless connect solutions, G.E.M.S, NSOC 24×7, 
          and the Aeta Platform. Our services partner network spans 190+ countries with enterprise-grade 
          connectivity solutions for businesses worldwide.
        </p>
        <p>
          As a global connectivity partner, we coordinate services through our partner center, 
          ensuring seamless deployment, monitoring, and support across all connectivity solutions. 
          Explore our case studies and success stories documenting real-world connectivity deployments 
          and partner collaborations.
        </p>
        <ul>
          <li>Dedicated Lines for enterprise connectivity</li>
          <li>Business Broadband for SMB solutions</li>
          <li>Wireless Connect for mobile and remote locations</li>
          <li>G.E.M.S for managed network services</li>
          <li>NSOC 24×7 for network security and monitoring</li>
          <li>Aeta Platform for connectivity management</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Services;