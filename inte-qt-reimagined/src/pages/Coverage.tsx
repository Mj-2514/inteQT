// Coverage.tsx - FIXED VERSION
import { Card, CardContent } from "@/components/ui/card";
import { Globe, MapPin, Network, CheckCircle, LogIn, Users, Shield, Zap, Server, ArrowRight, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import WorldGlobe from "./WorldGlobe";
import Counter from "@/components/ui/Counter";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Coverage = () => {
  const regions = [
    {
      id: "north-america",
      name: "North America",
      slug: "north-america",
      countries: 25,
      description: "Comprehensive connectivity across USA, Canada, and Mexico",
      image: "https://i.imgur.com/SrLzIM8.jpg",
      features: ["High-density networks", "Financial hub connectivity", "Low-latency routes"]
    },
    {
      id: "south-america",
      name: "South America",
      slug: "south-america",
      countries: 20,
      description: "Emerging market connectivity with local partner support",
      image: "https://i.imgur.com/YGlkriS.jpg",
      features: ["Brazil coverage", "Andean region access", "Local ISP partnerships"]
    },
    {
      id: "europe",
      name: "Europe",
      slug: "europe",
      countries: 45,
      description: "Pan-European network with EU compliance and GDPR support",
      image: "https://i.imgur.com/tuFAw97.jpg",
      features: ["EU data compliance", "Multi-language support", "High-speed backbone"]
    },
    {
      id: "asia",
      name: "Asia",
      slug: "asia",
      countries: 48,
      description: "Largest coverage across APAC with emerging market expertise",
      image: "https://i.imgur.com/iHPP1Ia.jpg",
      features: ["China access", "SEA coverage", "Emerging market expertise"]
    },
    {
      id: "africa",
      name: "Africa",
      slug: "africa",
      countries: 35,
      description: "Rapidly expanding network across key African markets",
      image: "https://i.imgur.com/0WyVgYN.jpg",
      features: ["Sub-Saharan coverage", "North Africa access", "Local partnerships"]
    },
    {
      id: "oceania",
      name: "Oceania",
      slug: "oceania",
      countries: 17,
      description: "Island connectivity with submarine cable access",
      image: "https://images.unsplash.com/photo-1539475314840-751cecc1dacd",
      features: ["Australia/NZ coverage", "Pacific islands", "Submarine cable access"]
    },
  ];

  const features = [
    {
      title: "24/7 Network Monitoring",
      description: "Continuous monitoring through our NSOC partner center",
      icon: Shield
    },
    {
      title: "99.9% Uptime Guarantee",
      description: "SLA-backed reliability across all connectivity services",
      icon: CheckCircle
    },
    {
      title: "Local Support Teams",
      description: "Regional support through our partner network",
      icon: Users
    },
    {
      title: "Multi-carrier Redundancy",
      description: "Multiple carrier options for maximum reliability",
      icon: Network
    },
    {
      title: "Fastest Route Selection",
      description: "Intelligent routing through our partner center",
      icon: Zap
    },
    {
      title: "Real-time Performance Monitoring",
      description: "Live analytics via our partner portal",
      icon: Server
    },
  ];

  // ================= EXACT CASE STUDIES FROM CASES PAGE =================
  const caseStudies = [
    {
      id: "fiji-bank",
      title: "Strategic Network Deployment for Fiji's Leading Bank",
      subtitle: "Banking & Financial Services Case Study",
      description: "Deeper customer engagement has always been a part of culture at inte-QT. The customer do understand and appreciate the support they receive from us and this helps them to share their requirements and concerns in an open manner.",
      image: "https://i.imgur.com/diCPBGP.jpg",
      highlights: [
        "24×7 NSOC coverage",
        "Sub-15 minute incident response",
        "Zero downtime during live event",
        "Multi-country coordination",
      ],
      link: "/cases/fiji",
      region: "Oceania",
      industry: "Banking"
    },
    {
      id: "fmcg-connectivity",
      title: "Rapid Connectivity for FMCG",
      subtitle: "Fast-Moving Consumer Goods Deployment",
      description: "We accepted this requirement and took as a challenge as 'In the middle of every difficulty, lies an opportunity'. The operations team collaboratively worked with partner as well as the end customer for finalising the delivery framework and the required configuration.",
      image: "https://i.imgur.com/PqG4Gaa.jpg",
      highlights: [
        "SLA monitoring & reporting",
        "Latency & packet-loss optimization",
        "Regulatory compliance support",
        "Dedicated NSOC engineers",
      ],
      link: "/cases/fmcg",
      region: "Asia",
      industry: "FMCG"
    },
    {
      id: "crisis-connectivity",
      title: "Delivering Connectivity Amid Crisis",
      subtitle: "Disaster Response & Crisis Management",
      description: "The technical specifications were different from the normal internet access deliveries. There was need to a install circuit of high bandwidth using copper lines and scope was work from end to end within the given time frames.",
      image: "https://i.imgur.com/rjhk18X.jpg",
      highlights: [
        "Threat intelligence feeds",
        "Security event correlation",
        "DDoS mitigation",
        "Global visibility dashboard",
      ],
      link: "/cases/amid-crisis",
      region: "Global",
      industry: "Emergency Services"
    },
  ];

  // SEO Configuration
  const seoConfig = {
    title: "Global Coverage | Network Connectivity Across 190+ Countries | inte-QT",
    description: "inte-QT provides global connectivity coverage across 190+ countries through our partner center. Access regional networks, local support, and enterprise-grade connectivity services worldwide.",
    canonical: "https://www.inte-qt.com/coverage",
    image: "https://i.imgur.com/fgarNxn.png",
    keywords: "global coverage, country connectivity, regional networks, partner center access, worldwide coverage, connectivity services"
  };

  // Structured Data
  const coverageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Global Coverage Regions",
    description: "Global network coverage provided by inte-QT across 190+ countries",
    numberOfItems: regions.length,
    itemListElement: regions.map((region, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Place",
        name: region.name,
        description: region.description,
        url: `https://www.inte-qt.com/coverage/${region.slug}`,
        containedInPlace: {
          "@type": "Continent",
          name: region.name
        }
      }
    }))
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
        <link rel="alternate" hreflang="en" href="https://www.inte-qt.com/coverage" />
        <link rel="alternate" hreflang="es" href="https://www.inte-qt.com/es/coverage" />
        <link rel="alternate" hreflang="fr" href="https://www.inte-qt.com/fr/coverage" />
        <link rel="alternate" hreflang="de" href="https://www.inte-qt.com/de/coverage" />
        <link rel="alternate" hreflang="x-default" href="https://www.inte-qt.com/coverage" />
        
        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:url" content={seoConfig.canonical} />
        <meta property="og:site_name" content="inte-QT - Global Coverage" />
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
          {JSON.stringify(coverageJsonLd)}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
      <section aria-labelledby="coverage-hero-heading">
        <WorldGlobe />
      </section>

      {/* ================= REGIONS ================= */}
      <section className="py-20 bg-muted/30" aria-labelledby="regions-heading">
        <div className="container mx-auto px-4">
          {/* Header with Login Button - Responsive Layout */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
            <div className="flex-1">
              <h1 id="regions-heading" className="text-3xl md:text-4xl font-bold mb-3">
                Global Coverage & Partner Network
              </h1>
              <h2 className="text-lg md:text-xl text-muted-foreground mb-4">
                Connectivity services across 190+ countries through our partner center
              </h2>
              
              {/* H3 for additional SEO content */}
              <h3 className="text-sm text-muted-foreground max-w-3xl">
                Access regional networks, local partner support, and enterprise-grade connectivity 
                services through our global partner center. Explore connectivity case studies and 
                regional success stories.
              </h3>
            </div>
            
            {/* Login Button */}
            <Button 
              asChild 
              className="gap-2 gradient-primary shadow-glow whitespace-nowrap"
              size="lg"
              aria-label="Access country portal login"
            >
              <Link to="/country/login">
                <LogIn className="w-5 h-5" />
                Country Portal Login
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => (
              <article key={region.id} className="group" itemScope itemType="https://schema.org/Place">
                <Link
                  to={`/coverage/${region.slug}`}
                  aria-label={`View coverage in ${region.name}`}
                >
                  <Card className="relative overflow-hidden group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${region.image})` }}
                      itemProp="image"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all" />

                    <CardContent className="relative p-10 z-10 text-white flex flex-col items-center justify-center h-60">
                      <MapPin className="w-12 h-12 mb-4 drop-shadow-lg" />
                      <h4 className="text-3xl font-semibold mb-2 drop-shadow-lg" itemProp="name">
                        {region.name}
                      </h4>
                      <p className="text-4xl font-bold drop-shadow-lg">{region.countries}+</p>
                      <h5 className="text-white/80 mt-1">Countries covered</h5>
                      
                      {/* Hidden description for SEO */}
                      <div className="hidden" itemProp="description">
                        {region.description}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                
                {/* Additional content below card */}
                <div className="mt-4 p-4 bg-card rounded-lg">
                  <h6 className="text-sm font-semibold mb-2">Regional Features:</h6>
                  <ul className="space-y-1">
                    {region.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center">
                        <CheckCircle className="w-3 h-3 text-primary mr-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20" aria-labelledby="features-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="features-heading" className="text-4xl font-bold mb-4">
              Why Choose Our Global Network?
            </h2>
            <h3 className="text-xl text-muted-foreground mb-6">
              Enterprise-grade features through our partner center
            </h3>
            
            {/* H4 for SEO content */}
            <h4 className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Our partner center provides comprehensive connectivity services with global coverage, 
              regional support, and reliable network performance across all connectivity solutions.
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-card hover:bg-primary/5 transition h-full">
                  <Icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold mb-1">{feature.title}</h5>
                    <h6 className="text-sm text-muted-foreground">{feature.description}</h6>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10" aria-labelledby="stats-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="stats-heading" className="text-3xl font-bold mb-4">
              Global Coverage Statistics
            </h2>
            <h3 className="text-lg text-muted-foreground">
              Measurable results from our partner network
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-gradient mb-2">
                <Counter end={190} suffix="+" duration={2200} />
              </p>
              <h4 className="text-muted-foreground">Countries Covered</h4>
              <h5 className="text-xs text-muted-foreground mt-1">Global connectivity reach</h5>
            </div>
            <div>
              <p className="text-5xl font-bold text-gradient mb-2">
                <Counter end={1152} suffix="+" duration={2500} />
              </p>
              <h4 className="text-muted-foreground">Network Partners</h4>
              <h5 className="text-xs text-muted-foreground mt-1">Global partner network</h5>
            </div>
            <div>
              <p className="text-5xl font-bold text-gradient mb-2">
                <Counter end={99.9} suffix="%" duration={1800} decimals={1} />
              </p>
              <h4 className="text-muted-foreground">Uptime SLA</h4>
              <h5 className="text-xs text-muted-foreground mt-1">Guaranteed reliability</h5>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2 flex items-center justify-center">
                <Counter end={24} suffix="/" duration={1500} />
                <Counter end={7} duration={1500} delay={200} />
              </div>
              <h4 className="text-muted-foreground">Partner Support</h4>
              <h5 className="text-xs text-muted-foreground mt-1">Continuous availability</h5>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES PREVIEW ================= */}
      {/* USING EXACT CASE STUDIES FROM CASES PAGE */}
      <section className="py-16 bg-muted/30" aria-labelledby="case-studies-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="case-studies-heading" className="text-3xl font-bold mb-4">
              Global Coverage Success Stories
            </h2>
            <h3 className="text-lg text-muted-foreground mb-8">
              Real-world connectivity deployments from our case studies
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fiji Bank Case Study - EXACT FROM CASES PAGE */}
            <Card className="p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-primary mr-3" />
                <div>
                  <h4 className="font-bold text-lg">{caseStudies[0].title}</h4>
                  <h5 className="text-sm text-muted-foreground">{caseStudies[0].subtitle}</h5>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>Region: {caseStudies[0].region}</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Award className="w-3 h-3 mr-1" />
                  <span>Industry: {caseStudies[0].industry}</span>
                </div>
              </div>
              
              <p className="text-sm mb-4 flex-grow">
                {caseStudies[0].description.substring(0, 120)}...
              </p>
              
              <ul className="space-y-2 mb-4">
                {caseStudies[0].highlights.slice(0, 2).map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-xs">
                    <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <Button asChild variant="link" className="p-0 mt-auto">
                <Link to={caseStudies[0].link}>Read Fiji Bank Case Study →</Link>
              </Button>
            </Card>
            
            {/* FMCG Case Study - EXACT FROM CASES PAGE */}
            <Card className="p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <Network className="w-8 h-8 text-primary mr-3" />
                <div>
                  <h4 className="font-bold text-lg">{caseStudies[1].title}</h4>
                  <h5 className="text-sm text-muted-foreground">{caseStudies[1].subtitle}</h5>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>Region: {caseStudies[1].region}</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Award className="w-3 h-3 mr-1" />
                  <span>Industry: {caseStudies[1].industry}</span>
                </div>
              </div>
              
              <p className="text-sm mb-4 flex-grow">
                {caseStudies[1].description.substring(0, 120)}...
              </p>
              
              <ul className="space-y-2 mb-4">
                {caseStudies[1].highlights.slice(0, 2).map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-xs">
                    <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <Button asChild variant="link" className="p-0 mt-auto">
                <Link to={caseStudies[1].link}>Read FMCG Case Study →</Link>
              </Button>
            </Card>
            
            {/* Crisis Connectivity Case Study - EXACT FROM CASES PAGE */}
            <Card className="p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-primary mr-3" />
                <div>
                  <h4 className="font-bold text-lg">{caseStudies[2].title}</h4>
                  <h5 className="text-sm text-muted-foreground">{caseStudies[2].subtitle}</h5>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <Globe className="w-3 h-3 mr-1" />
                  <span>Region: {caseStudies[2].region}</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Award className="w-3 h-3 mr-1" />
                  <span>Industry: {caseStudies[2].industry}</span>
                </div>
              </div>
              
              <p className="text-sm mb-4 flex-grow">
                {caseStudies[2].description.substring(0, 120)}...
              </p>
              
              <ul className="space-y-2 mb-4">
                {caseStudies[2].highlights.slice(0, 2).map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-xs">
                    <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <Button asChild variant="link" className="p-0 mt-auto">
                <Link to={caseStudies[2].link}>Read Crisis Connectivity Case Study →</Link>
              </Button>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/cases">
                View All Case Studies <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center" aria-labelledby="cta-heading">
        <Network className="w-16 h-16 mx-auto mb-6 text-primary" />
        <h2 id="cta-heading" className="text-4xl font-bold mb-4">
          Ready for Global Connectivity?
        </h2>
        <h3 className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Access our partner center for global network solutions and coverage
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gradient-primary shadow-glow">
            <Link to="/contact">Get Started Today</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/partner-center">
              Access Partner Center <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ================= SEO CONTENT SECTION (Hidden for users, visible to search engines) ================= */}
      <div className="container mx-auto px-4 py-8" style={{ opacity: 0.01, height: '1px', overflow: 'hidden' }}>
        <h2>Global Network Coverage Overview</h2>
        <p>
          inte-QT provides comprehensive global coverage across 190+ countries through our partner center network. 
          Our connectivity services span North America, South America, Europe, Asia, Africa, and Oceania with 
          regional expertise and local partner support. Explore case studies including Fiji Bank deployment, 
          FMCG connectivity solutions, and crisis management connectivity through our partner center.
        </p>
        <p>
          Access country-specific connectivity solutions, regional case studies, and partner network resources 
          through our coverage portal. Explore connectivity services including dedicated lines, business broadband, 
          and wireless connect across global markets with enterprise-grade reliability and support.
        </p>
        <ul>
          <li>Global coverage across 190+ countries</li>
          <li>Regional network access through partner center</li>
          <li>Local support teams in key markets</li>
          <li>Multi-carrier redundancy for reliability</li>
          <li>24/7 network monitoring and support</li>
          <li>Country-specific connectivity solutions</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Coverage;