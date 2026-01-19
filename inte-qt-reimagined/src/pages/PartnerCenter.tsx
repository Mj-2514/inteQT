// src/pages/PartnerCenter.tsx
import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import Counter from "@/components/ui/Counter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import {
  Users,
  Globe,
  TrendingUp,
  Award,
  DollarSign,
  ArrowRight,
  Handshake,
  Target,
  Zap,
  Shield,
  Network,
  BarChart,
  Clock,
  Users2,
  Globe2,
  Layers,
  CheckCircle,
  Briefcase,
  Building,
  TargetIcon,
  AwardIcon,
  UsersIcon,
} from "lucide-react";

const canonical = "https://www.inte-qt.com/partner-center";
const pageTitle = "Partner Center | Global Services Partner Program & Collaboration | inte-QT";
const pageDescription = "Join inte-QT's global partner center ecosystem. Collaborate to deliver connectivity services, dedicated lines, business broadband, and networking solutions through our digital partner platform. Access global markets through our services partner network.";
const ogImage = "https://www.inte-qt.com/og/partner-center-1200x630.jpg";

const benefits = [
  {
    id: "global-reach",
    title: "Global Reach, Local Expertise",
    subtitle: "Extend Local Capabilities Worldwide",
    description: "Extend your local network capabilities to 190+ countries through our global ecosystem with partner center coordination",
    longDescription: "Access global markets through our partner center network while maintaining local expertise and customer relationships. Our services partner program enables seamless international expansion.",
    icon: Globe2,
    image: "https://i0.wp.com/unimetrix.com/wp-content/uploads/2021/05/globeanim.gif?w=1080&ssl=1",
    features: ["190+ Countries Access", "Local Market Knowledge", "Global Coordination", "Partner Center Support"]
  },
  {
    id: "quote-to-cash",
    title: "Quote-to-Cash-to-Assurance",
    subtitle: "End-to-End Operational Efficiency",
    description: "Complete operational efficiency with single-point coordination through our partner center platform",
    longDescription: "Streamline your business processes from initial quote through delivery and ongoing assurance. Our partner center provides unified coordination for all connectivity services.",
    icon: TrendingUp,
    image: "https://www.knightsbridge-ng.com/knightbridge/knightsbridge/img/Why-partnerships-can-make-or-break-you.gif",
    features: ["Unified Platform", "Single Coordination Point", "Process Automation", "Real-time Tracking"]
  },
  {
    id: "digital-platform",
    title: "Digital Enablement Platform",
    subtitle: "Seamless Service Management Portal",
    description: "Access our partner portal for seamless service delivery, management, and coordination",
    longDescription: "Our digital partner center platform enables efficient service management, order tracking, and customer coordination for all connectivity solutions and services.",
    icon: Layers,
    image: "https://gifdb.com/images/high/aesthetic-pixel-city-discord-banner-nyv1jjie9r6dtoer.gif",
    features: ["Partner Portal Access", "Service Management", "Real-time Analytics", "Customer Coordination"]
  },
  {
    id: "business-opportunities",
    title: "Continuous Business Opportunities",
    subtitle: "Sustainable Growth Framework",
    description: "Unlock sustainable growth through our expanding global footprint and partner network",
    longDescription: "Access continuous business opportunities through our global partner center network. Grow your revenue with our expanding connectivity services and customer base.",
    icon: Award,
    image: "https://leveragedgrowth.in/wp-content/uploads/2020/01/ezgif.com-video-to-gif-1.gif",
    features: ["Revenue Growth", "Market Expansion", "Customer Acquisition", "Portfolio Diversification"]
  },
  {
    id: "operational-excellence",
    title: "Operational Excellence",
    subtitle: "Streamlined Partnership Processes",
    description: "Efficient processes ensuring faster execution, delivery, and partner coordination",
    longDescription: "Achieve operational excellence through our streamlined partner center processes. From onboarding to service delivery, we optimize every aspect of partner collaboration.",
    icon: Clock,
    image: "https://media.licdn.com/dms/image/v2/D4E12AQHvOy-KbCkKrg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1714732113532?e=2147483647&v=beta&t=QomZv1t1jONLehsalEi_MNQywO5CstRpXw4oL4dk_rc",
    features: ["Process Optimization", "Fast Execution", "Quality Assurance", "Partner Support"]
  },
];

const partnershipFeatures = [
  {
    id: "collaboration-core",
    title: "Collaboration at Core",
    subtitle: "Partnership-First Approach",
    description: "We believe collaboration is fundamental to enhancing our service portfolio worldwide. Partnering with the right local and global suppliers enables us to deliver comprehensive solutions.",
    longDescription: "Our partner center operates on a collaboration-first principle, working closely with global services partners to deliver comprehensive connectivity solutions across markets.",
    icon: Users2,
    color: "text-blue-500 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    benefits: ["Joint Planning", "Shared Resources", "Collaborative Solutions", "Mutual Growth"]
  },
  {
    id: "service-integration",
    title: "Service Integration",
    subtitle: "Unified Solution Delivery",
    description: "We integrate our services with partner offerings on our portal to provide end-to-end solutions—from quote to cash to assurance for global connectivity.",
    longDescription: "Seamless service integration through our partner center ensures end-to-end solution delivery, combining our connectivity services with partner capabilities.",
    icon: Network,
    color: "text-green-500 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    benefits: ["API Integration", "Unified Management", "Service Bundling", "Coordinated Delivery"]
  },
  {
    id: "global-aggregation",
    title: "Global Aggregation",
    subtitle: "Worldwide Network Coordination",
    description: "As a global network connectivity aggregator, we work closely with reliable partners to deliver Internet, managed services, and networking solutions to enterprises worldwide.",
    longDescription: "Our partner center serves as a global aggregator, coordinating connectivity services across our extensive partner network to deliver comprehensive solutions worldwide.",
    icon: Globe,
    color: "text-purple-500 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    benefits: ["Global Coordination", "Multi-Country Solutions", "Local Integration", "Unified Pricing"]
  },
  {
    id: "value-creation",
    title: "Long-term Value Creation",
    subtitle: "Sustainable Partnership Growth",
    description: "We build sustainable growth through long-term partnerships, combining local expertise with global reach to simplify enterprise connectivity.",
    longDescription: "Our partner center focuses on long-term value creation, building sustainable growth through strategic partnerships and collaborative business development.",
    icon: BarChart,
    color: "text-amber-500 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
    benefits: ["Strategic Planning", "Joint Investment", "Market Development", "Sustainable Growth"]
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery & Alignment",
    subtitle: "Initial Partnership Assessment",
    description: "Initial discussions to understand mutual capabilities and partnership fit through our partner center",
    details: "Comprehensive evaluation of partner capabilities, market alignment, and strategic fit within our partner network."
  },
  {
    number: "02",
    title: "Evaluation & Due Diligence",
    subtitle: "Partner Qualification Process",
    description: "Assessment of reliability, scalability, and commitment to service quality standards",
    details: "Technical and operational evaluation ensuring partner meets our quality standards and service delivery capabilities."
  },
  {
    number: "03",
    title: "Platform Integration",
    subtitle: "Partner Onboarding & Setup",
    description: "Onboarding to our digital partner portal and technical integration process",
    details: "Seamless integration with our partner center platform, including technical setup and process alignment."
  },
  {
    number: "04",
    title: "Joint Go-to-Market",
    subtitle: "Collaborative Market Launch",
    description: "Launch collaboration and begin delivering solutions to customers through partner coordination",
    details: "Coordinated market launch with joint marketing, sales enablement, and customer delivery through our partner network."
  },
];

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Active Partners",
    description: "Global network of reliable providers in our partner center",
    duration: 2500,
    icon: UsersIcon
  },
  {
    value: 190,
    suffix: "+",
    label: "Countries Covered",
    description: "Through our partner center ecosystem worldwide",
    duration: 2000,
    icon: Globe2
  },
  {
    value: 96,
    suffix: "%",
    label: "Partner Satisfaction",
    description: "Based on annual partner center surveys",
    duration: 1800,
    icon: AwardIcon
  },
  {
    value: 24,
    suffix: "/7",
    label: "Partner Support",
    description: "Dedicated partner center relationship management",
    duration: 1000,
    icon: Clock
  },
];

// JSON-LD for organization + partnership offers
const orgJson = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "inte-QT Partner Center",
  description: "Global services partner program for connectivity solutions and network services.",
  url: canonical,
  areaServed: "Worldwide",
  sameAs: ["https://www.linkedin.com/company/inte-qt"],
};

const serviceJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Partner Center Program",
  serviceType: "Partnership Program",
  provider: {
    "@type": "Organization",
    name: "inte-QT"
  },
  description: "Global partner program for connectivity services collaboration and distribution.",
  areaServed: "Worldwide"
};

const PartnerCenter: React.FC = () => {
  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* hreflang Tags */}
        <link rel="alternate" hreflang="en" href="https://www.inte-qt.com/partner-center" />
        <link rel="alternate" hreflang="es" href="https://www.inte-qt.com/es/partner-center" />
        <link rel="alternate" hreflang="fr" href="https://www.inte-qt.com/fr/partner-center" />
        <link rel="alternate" hreflang="de" href="https://www.inte-qt.com/de/partner-center" />
        <link rel="alternate" hreflang="x-default" href="https://www.inte-qt.com/partner-center" />
        
        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="inte-QT Partner Center" />
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
          {JSON.stringify(orgJson)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceJson)}
        </script>
      </Helmet>

      <Seo
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        image={ogImage}
        siteName="inte-QT Partner Center"
        extraJsonLd={[orgJson, serviceJson]}
      />

      <main className="min-h-screen pt-20 bg-background text-foreground">
        {/* HERO */}
        <section
          className="relative py-24 bg-cover bg-center text-center"
          style={{
            backgroundImage: 'url("https://cdn.arrify.com/wp-content/uploads/2022/05/giphy.gif")',
            backgroundSize: "698px",
          }}
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
          <div className="relative z-10 container mx-auto px-4">
            <h1 id="hero-heading" className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              Partner Center | Global Services Collaboration
            </h1>
            
            <h2 className="max-w-3xl mx-auto text-lg sm:text-xl text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-6">
              Build sustainable growth through global partner center collaboration
            </h2>
            
            <h3 className="max-w-2xl mx-auto text-base text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] mb-8">
              Collaborate with inte-QT's partner center to deliver connectivity services, dedicated lines, 
              business broadband, and networking solutions through our digital enablement platform.
            </h3>
            
            <div className="mt-10">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black gap-2" aria-label="Start partnership process">
                <Link to="/contact">
                  Start Partnership <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* PARTNERSHIP PHILOSOPHY */}
        <section className="py-16 bg-background" aria-labelledby="philosophy-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="philosophy-heading" className="text-3xl md:text-4xl font-bold mb-6">
                Collaboration Is Our Core Philosophy
              </h2>
              
              <h3 className="text-lg text-muted-foreground mb-6">
                To enhance our portfolio of services worldwide, we partner with reliable local 
                and global suppliers who share our commitment to service quality and customer success.
              </h3>
              
              <blockquote className="border-l-4 border-primary pl-6 py-3 my-8 text-left bg-muted/50 rounded-r-lg">
                <p className="text-foreground/90 italic">
                  "We are enhancing our partner portfolio and our team is constantly looking 
                  for providers offering Internet connectivity, managed services, and networking solutions."
                </p>
                <h4 className="text-sm font-semibold mt-2 text-primary">— inte-QT Partner Center Team</h4>
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-foreground">
                  Global Connectivity Aggregation Through Partner Center
                </h4>
                
                <p className="text-muted-foreground">
                  inte-QT is a global network connectivity aggregator, working closely with 
                  local and global partners through our partner center to deliver end-to-end 
                  Internet, managed services, and networking solutions to enterprise customers worldwide.
                </p>
                
                <p className="text-muted-foreground">
                  We collaborate with partners who are reliable, scalable, and committed to 
                  service quality—ensuring our customers receive consistent, high-performance 
                  connectivity solutions through our partner network.
                </p>
                
                {/* H5 for SEO content */}
                <h5 className="text-sm font-medium text-gray-600 mt-4">
                  Partner Center Benefits: Global reach, local coordination, service integration, and revenue growth through our services partner program.
                </h5>
                
                <div className="pt-4">
                  <Button asChild size="lg" className="gap-2" aria-label="Explore partnership opportunities">
                    <Link to="/contact">
                      Explore Partnership <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-foreground">
                  Digital Partner Center Platform Advantage
                </h4>
                
                <p className="text-muted-foreground">
                  Our digital partner center platform enables partners to deliver services through a 
                  quote-to-cash-to-assurance model, ensuring operational efficiency and 
                  a single point of coordination for customers across all connectivity services.
                </p>
                
                <p className="text-muted-foreground">
                  By partnering with inte-QT's partner center, you can extend your local network capabilities 
                  to global markets and unlock continuous business opportunities through our 
                  integrated service delivery portal and partner network.
                </p>
                
                {/* H6 for additional content */}
                <h6 className="text-xs text-muted-foreground mt-4">
                  Partner Center Features: Unified platform, real-time tracking, collaborative tools, and comprehensive support for services partners.
                </h6>
                
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex-1 border-t border-border"></div>
                  <span className="text-sm font-semibold text-primary">
                    Simplified • Scalable • Sustainable
                  </span>
                  <div className="flex-1 border-t border-border"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-16 bg-muted/30" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Why Partner With inte-QT's Partner Center?
              </h2>
              
              <h3 className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Experience the advantages of joining our global partner center ecosystem focused on 
                simplifying and scaling enterprise connectivity services.
              </h3>
              
              {/* H4 for SEO content */}
              <h4 className="text-sm text-muted-foreground max-w-3xl mx-auto">
                Our partner center provides comprehensive support, global coordination, and business growth 
                opportunities for connectivity services partners across dedicated lines, business broadband, 
                and wireless solutions.
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.slice(0, 3).map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article
                    key={benefit.id}
                    className="relative overflow-hidden rounded-2xl shadow-lg h-[320px] group transition-transform hover:scale-[1.02] border-0"
                    aria-label={benefit.title}
                  >
                    <img
                      src={benefit.image}
                      alt={`${benefit.title} - ${benefit.subtitle}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent dark:from-black/90 dark:via-black/60" />
                    <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h5 className="text-xl font-semibold">{benefit.title}</h5>
                      </div>
                      <h6 className="text-sm opacity-90 mb-2">{benefit.subtitle}</h6>
                      <p className="text-xs opacity-80">{benefit.description}</p>
                    </CardContent>
                  </article>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {benefits.slice(3).map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article
                    key={benefit.id}
                    className="relative overflow-hidden rounded-2xl shadow-lg h-[260px] group transition-transform hover:scale-[1.02] border-0"
                    aria-label={benefit.title}
                  >
                    <img
                      src={benefit.image}
                      alt={`${benefit.title} - ${benefit.subtitle}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent dark:from-black/80 dark:via-black/50" />
                    <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 text-white" />
                        <h5 className="text-xl font-semibold">{benefit.title}</h5>
                      </div>
                      <h6 className="text-sm opacity-90 mb-2">{benefit.subtitle}</h6>
                      <p className="text-xs opacity-80">{benefit.description}</p>
                    </CardContent>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PARTNERSHIP FEATURES */}
        <section className="py-16 bg-background" aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Our Partner Center Approach
              </h2>
              
              <h3 className="text-muted-foreground max-w-3xl mx-auto mb-6">
                At inte-QT's partner center, we don't just deliver services—we build long-term value 
                and sustainable growth with our services partners.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article 
                    key={feature.id} 
                    className="border hover:shadow-xl transition-all duration-300 hover:border-primary/20 bg-card h-full"
                  >
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bgColor} mb-4`}>
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      
                      <h4 className="text-lg font-semibold mb-2 text-card-foreground">{feature.title}</h4>
                      <h5 className="text-sm text-muted-foreground mb-3">{feature.subtitle}</h5>
                      
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">{feature.description}</p>
                      
                      <div className="mt-4 pt-4 border-t border-border">
                        <h6 className="text-xs font-semibold mb-2">Key Benefits:</h6>
                        <ul className="space-y-1">
                          {feature.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-center">
                              <CheckCircle className="w-3 h-3 text-primary mr-1" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </article>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-2xl border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2 text-foreground">Seeking Internet & Network Services Partners</h4>
                  <p className="text-muted-foreground">
                    We're actively expanding our partner center portfolio with providers offering:
                    Internet connectivity, dedicated lines, business broadband, managed services, and networking solutions.
                  </p>
                </div>
                <div>
                  <Button asChild size="lg" aria-label="Connect with partner team">
                    <Link to="/contact" className="gap-2">
                      Connect With Our Team <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 bg-muted/30" aria-labelledby="process-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="process-heading" className="text-3xl font-bold mb-4">Partner Center Journey</h2>
              
              <h3 className="text-muted-foreground max-w-2xl mx-auto mb-6">
                A streamlined process to build successful, long-term collaborations through our partner center
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <article 
                  key={step.number} 
                  className="relative text-center p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow border h-full"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground text-lg font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="pt-8 h-full flex flex-col">
                    <h4 className="text-lg font-semibold mb-2 text-card-foreground">{step.title}</h4>
                    <h5 className="text-sm text-primary mb-3 font-medium">{step.subtitle}</h5>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{step.description}</p>
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <h6 className="text-xs font-semibold mb-1">Details:</h6>
                      <p className="text-xs text-muted-foreground">{step.details}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20" aria-labelledby="stats-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="stats-heading" className="text-3xl font-bold mb-4">Our Partner Center Ecosystem</h2>
              
              <h3 className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Join a growing network of trusted services partners delivering excellence worldwide through our partner center
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <article 
                    key={stat.label} 
                    className="text-center bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border"
                  >
                    <div className="flex justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                      {stat.suffix === "/7" ? (
                        <>
                          24<span className="text-3xl">/7</span>
                        </>
                      ) : (
                        <Counter 
                          end={stat.value} 
                          suffix={stat.suffix} 
                          duration={stat.duration} 
                        />
                      )}
                    </p>
                    
                    <h4 className="text-lg font-semibold text-card-foreground mb-1">{stat.label}</h4>
                    <h5 className="text-sm text-muted-foreground">{stat.description}</h5>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Handshake className="mx-auto mb-6 w-16 h-16 text-primary" />
              
              <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Ready to Grow Through Our Partner Center?
              </h2>
              
              <h3 className="text-lg text-muted-foreground mb-8">
                Partner with inte-QT's partner center to extend your local capabilities to global markets 
                and unlock sustainable growth through our digital enablement platform and services network.
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2" aria-label="Become a partner">
                  <Link to="/contact">
                    Become a Partner <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                
                
              </div>
              
              <h4 className="mt-8 text-sm text-muted-foreground">
                Have questions about our partner center? Contact our Global Partner Management team at{" "}
                <a href="mailto:sales@inte-qt.com" className="text-primary font-semibold hover:underline">
                  sales@inte-qt.com
                </a>
              </h4>
            </div>
          </div>
        </section>

        {/* SEO CONTENT SECTION (Hidden for users, visible to search engines) */}
        <div className="container mx-auto px-4 py-8" style={{ opacity: 0.01, height: '1px', overflow: 'hidden' }}>
          <h2>Partner Center Overview</h2>
          <p>
            The inte-QT Partner Center provides a comprehensive platform for global services partners 
            to collaborate on connectivity solutions including dedicated lines, business broadband, 
            wireless connect, and managed services. Our partner center facilitates global coordination, 
            service integration, and business growth through digital enablement and collaborative tools.
          </p>
          <p>
            Join our partner center ecosystem to access global markets, coordinate connectivity services, 
            and grow your business through our extensive partner network. Explore partnership opportunities 
            for connectivity solutions, case studies collaboration, and joint market development through 
            our partner center platform.
          </p>
          <ul>
            <li>Global partner center for connectivity services</li>
            <li>Services partner program with comprehensive support</li>
            <li>Digital platform for partner coordination and management</li>
            <li>Global network of connectivity partners and providers</li>
            <li>Joint business development and market expansion</li>
            <li>Comprehensive partner support and resources</li>
          </ul>
        </div>
      </main>
      
      <Footer />
    </Fragment>
  );
};

export default PartnerCenter;