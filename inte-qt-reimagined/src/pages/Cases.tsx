// src/pages/Cases.tsx
import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Shield, Award, Clock, CheckCircle, Globe, Server, Users, BarChart } from "lucide-react";
import Seo from "@/components/Seo";
import Counter from "@/components/ui/Counter";

const canonical = "https://www.inte-qt.com/cases";
const pageTitle = "Case Studies | Global Connectivity Solutions & Success Stories – inte-QT";
const pageDescription = "Explore inte-QT's case studies showcasing successful connectivity deployments, partner center collaborations, and global services across telecom, banking, FMCG, and enterprise sectors.";
const ogImage = "https://www.inte-qt.com/og/cases-1200x630.jpg";

const features = [
  {
    title: "Global Partner Network",
    description: "Collaborative solutions through our partner center",
    icon: Users,
  },
  {
    title: "Connectivity Services",
    description: "Comprehensive global connectivity solutions",
    icon: Globe,
  },
  {
    title: "NSOC Monitoring",
    description: "24×7 network security operations center",
    icon: Shield,
  },
  {
    title: "Performance Metrics",
    description: "Data-driven success measurement",
    icon: BarChart,
  },
];

const caseStudies = [
  {
    id: "fiji-bank",
    title: "Strategic Network Deployment for Fiji's Leading Bank",
    subtitle: "Banking & Financial Services Case Study",
    description: "Deeper customer engagement has always been a part of culture at inte-QT. The customer do understand and appreciate the support they receive from us and this helps them to share their requirements and concerns in an open manner.",
    longDescription: "This case study details how inte-QT partnered with Fiji's premier banking institution to deploy a robust global connectivity framework. Our services partner team collaborated closely with the bank's IT department to implement secure dedicated lines, ensuring seamless operations across their 45+ branch network while maintaining strict compliance with financial regulations.",
    image: "https://i.imgur.com/diCPBGP.jpg",
    highlights: [
      "24×7 NSOC coverage with dedicated monitoring",
      "Sub-15 minute incident response SLA",
      "Zero downtime during critical banking hours",
      "Multi-country coordination through partner center",
      "Compliance with international banking standards",
    ],
    link: "/cases/fiji",
    industries: ["Banking", "Financial Services"],
    technologies: ["Dedicated Lines", "SD-WAN", "NSOC 24/7"],
    results: ["99.9% Uptime", "40% Cost Reduction", "Enhanced Security"]
  },
  {
    id: "fmcg-connectivity",
    title: "Rapid Connectivity for Global FMCG Corporation",
    subtitle: "Fast-Moving Consumer Goods Deployment",
    description: "We accepted this requirement and took as a challenge as 'In the middle of every difficulty, lies an opportunity'. The operations team collaboratively worked with partner as well as the end customer for finalising the delivery framework and the required configuration.",
    longDescription: "This case demonstrates how inte-QT enabled a multinational FMCG company to establish reliable connectivity across 30+ manufacturing facilities worldwide. Through our global services partner network, we delivered business broadband solutions that supported real-time inventory management, supply chain optimization, and seamless communication between regional headquarters.",
    image: "https://i.imgur.com/PqG4Gaa.jpg",
    highlights: [
      "SLA monitoring & comprehensive reporting",
      "Latency & packet-loss optimization algorithms",
      "Regulatory compliance support across regions",
      "Dedicated NSOC engineers for 24/7 oversight",
      "Partner center coordination for rapid deployment",
    ],
    link: "/cases/fmcg",
    industries: ["FMCG", "Manufacturing", "Retail"],
    technologies: ["Business Broadband", "Wireless Connect", "VPN"],
    results: ["60% Faster Deployment", "30% Bandwidth Savings", "Unified Management"]
  },
  {
    id: "crisis-connectivity",
    title: "Emergency Connectivity During Global Crisis",
    subtitle: "Disaster Response & Crisis Management",
    description: "The technical specifications were different from the normal internet access deliveries. There was need to install a circuit of high bandwidth using copper lines and scope was work from end to end within the given time frames.",
    longDescription: "This case study highlights inte-QT's rapid response capabilities during a global crisis. When traditional connectivity failed, our partner center mobilized resources across 15 countries to establish emergency communication links for humanitarian organizations, ensuring critical data transfer and coordination capabilities remained operational.",
    image: "https://i.imgur.com/rjhk18X.jpg",
    highlights: [
      "Threat intelligence feeds integration",
      "Advanced security event correlation",
      "Enterprise-grade DDoS mitigation",
      "Global visibility dashboard access",
      "Partner network collaboration",
    ],
    link: "/cases/amid-crisis",
    industries: ["NGO", "Healthcare", "Government"],
    technologies: ["Emergency Connectivity", "Satellite Links", "Mobile Solutions"],
    results: ["100% Availability", "Rapid Deployment", "Life-saving Communications"]
  },
];

const services = [
  "Global Connectivity Case Studies",
  "Partner Success Stories",
  "Enterprise Deployment Reviews",
  "Industry-specific Solutions",
  "Compliance & Security Cases",
  "Performance Optimization Studies",
  "Cost-reduction Analysis",
  "Technology Implementation Guides",
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Connectivity Case Studies",
  description: "Collection of successful global connectivity implementations by inte-QT",
  numberOfItems: caseStudies.length,
  itemListElement: caseStudies.map((cs, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Article",
      name: cs.title,
      description: cs.description,
      url: `https://www.inte-qt.com${cs.link}`,
      author: {
        "@type": "Organization",
        name: "inte-QT"
      }
    }
  }))
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "inte-QT",
  url: "https://www.inte-qt.com",
  logo: "https://www.inte-qt.com/img/logo.d6407a89.jpg",
  description: "Global connectivity services partner providing solutions across 190+ countries",
  sameAs: [
    "https://www.linkedin.com/company/inte-qt",
    "https://twitter.com/inte_qt"
  ]
};

const Cases: React.FC = () => {
  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* hreflang tags for international SEO */}
        <link rel="alternate" hreflang="en" href="https://www.inte-qt.com/cases" />
        <link rel="alternate" hreflang="es" href="https://www.inte-qt.com/es/cases" />
        <link rel="alternate" hreflang="fr" href="https://www.inte-qt.com/fr/cases" />
        <link rel="alternate" hreflang="de" href="https://www.inte-qt.com/de/cases" />
        <link rel="alternate" hreflang="x-default" href="https://www.inte-qt.com/cases" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Canonical */}
        <link rel="canonical" href={canonical} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(serviceJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationJsonLd)}
        </script>
      </Helmet>

      <Seo
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        image={ogImage}
        siteName="inte-QT"
        extraJsonLd={[serviceJsonLd, organizationJsonLd]}
      />

      <main className="min-h-screen pt-20 bg-background text-foreground">
        {/* HERO SECTION */}
        <section
          className="relative flex items-center justify-center"
          aria-label="Case Studies Overview"
          style={{
            minHeight: "60vh",
            backgroundImage: `url(${"https://images.unsplash.com/vector-1757394158090-f76e0d78d661?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbXxlbnwwfDB8MHx8fDI%3D"})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="absolute inset-0 bg-black/70" aria-hidden />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl text-center mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Eye className="w-12 h-12 text-white animate-pulse-glow drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                  Case Studies & <span className="text-gradient">Success Stories</span>
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-white font-bold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Real-world connectivity solutions from our global partner network
              </p>

              <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto mb-6 font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]">
                Discover how inte-QT's connectivity services and partner center collaborations deliver measurable results across industries worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="gradient-primary shadow-glow">
                  <a href="/partner-center" aria-label="Access partner center for case studies">
                    Partner Center Access
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 text-foreground dark:text-white/90"
                >
                  <a href="#case-studies" aria-label="View all case studies">
                    Explore Case Studies
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-16 bg-muted/30" aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="features-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Our Case Study Methodology
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Structured approach to documenting connectivity success stories
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CASE STUDIES SECTION */}
        <section id="case-studies" className="py-16 sm:py-20" aria-labelledby="case-studies-heading">
          <div className="container mx-auto px-4 space-y-20">
            <div className="text-center">
              <h2 id="case-studies-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Featured Case Studies
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Detailed analysis of global connectivity deployments through our partner center
              </p>
            </div>

            {caseStudies.map((cs, index) => {
              const reverse = index % 2 !== 0;

              return (
                <article 
                  key={cs.id} 
                  className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} gap-10 lg:gap-12 items-center`}
                  itemScope
                  itemType="https://schema.org/Article"
                >
                  {/* IMAGE */}
                  <div className="flex-1 order-1 lg:order-none w-full">
                    <Card className="relative aspect-[16/9] rounded-2xl overflow-hidden border-0 shadow-xl">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${cs.image})` }}
                        itemProp="image"
                      />
                      <div className="absolute inset-0 bg-black/25" />
                    </Card>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 order-2 lg:order-none text-center lg:text-left">
                    <meta itemProp="author" content="inte-QT" />
                    <meta itemProp="datePublished" content="2024-01-01" />
                    
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2" itemProp="headline">
                      {cs.title}
                    </h3>
                    
                    <h4 className="text-lg text-primary mb-4 font-semibold">
                      {cs.subtitle}
                    </h4>

                    <p className="text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0" itemProp="description">
                      {cs.description}
                    </p>

                    {/* Additional H5 content for SEO */}
                    <h5 className="text-sm font-medium mb-4 text-gray-600">
                      Connectivity Services: {cs.technologies.join(", ")}
                    </h5>

                    <ul className="space-y-3 mb-8 max-w-xl mx-auto lg:mx-0">
                      {cs.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Results Section */}
                    <div className="mb-6">
                      <h6 className="text-sm font-semibold mb-2 text-gray-700">KEY RESULTS:</h6>
                      <div className="flex flex-wrap gap-2">
                        {cs.results.map((result, idx) => (
                          <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button asChild size="lg">
                      <a href={cs.link} itemProp="url">
                        Read Full Case Study <span className="ml-1">→</span>
                      </a>
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-16 bg-muted/30" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Case Study Categories
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Comprehensive analysis across our global services portfolio
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {services.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card hover:shadow-md transition">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" aria-hidden />
                  <span className="font-medium text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section className="relative py-20 overflow-hidden" aria-labelledby="testimonial-heading">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2019/07/16/11/39/charles-4341624_1280.jpg")` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden />

          <div className="relative container mx-auto px-4 text-center text-white max-w-5xl">
            <h2 id="testimonial-heading" className="text-3xl sm:text-4xl font-bold mb-6">
              Client Success Story
            </h2>
            <p className="mb-8">Real results from our partner network</p>

            <Card className="bg-white/5 border-white/10 shadow-2xl max-w-4xl mx-auto rounded-2xl">
              <CardContent className="p-6 md:p-10">
                <div className="flex flex-col items-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-6 h-6 text-yellow-400 mx-1" aria-hidden />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl font-bold text-blue-400 mb-4">
                    BRILLIANT work by inte-QT's partner center.
                  </p>

                  <p className="text-sm md:text-base text-white/80 mb-6 max-w-3xl">
                    Our global connectivity deployment was seamlessly managed by inte-QT's partner center, 
                    from initial quotation through timely delivery. The case study documentation provided 
                    clear insights into performance metrics and ROI.
                  </p>

                  <div className="border-t border-white/10 pt-4 w-full">
                    <p className="font-semibold text-white text-center">Associate Director</p>
                    <p className="text-sm text-white/70 text-center">World's Leading Tier-1 Carrier • London, UK</p>
                    <p className="text-sm text-primary mt-2 text-center">
                      World Championship Motor Racing Connectivity Case
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 id="benefits-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Why Review Our Case Studies?
              </h2>
              <p className="text-muted-foreground">
                Gain insights into successful connectivity implementations
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Proven connectivity deployment strategies",
                "Partner center collaboration models",
                "Global services implementation guides",
                "Performance benchmarking data",
                "Cost optimization case examples",
                "Compliance success stories",
                "Technology integration patterns",
                "Industry-specific best practices",
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-card">
                  <CheckCircle className="w-5 h-5 text-primary" aria-hidden />
                  <span className="text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-16" aria-labelledby="stats-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="stats-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Case Study Metrics
              </h2>
              <p className="text-muted-foreground">
                Quantitative results from our connectivity deployments
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">
                  <Counter end={99.9} suffix="%" decimals={1} />
                </p>
                <p className="text-sm text-muted-foreground">Client Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">
                  <Counter end={50} suffix="+" duration={1500} />
                </p>
                <p className="text-sm text-muted-foreground">Published Case Studies</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">
                  <Counter end={190} suffix="+" duration={2500} />
                </p>
                <p className="text-sm text-muted-foreground">Countries Covered</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">
                  <Counter end={1000} suffix="+" duration={3000} />
                </p>
                <p className="text-sm text-muted-foreground">Partner Network</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 bg-primary/5" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold mb-4">
              Need a Custom Case Study?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our partner center to discuss your connectivity requirements and potential success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary shadow-glow">
                <a href="/contact" aria-label="Contact for custom case study">
                  Request Consultation
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/partner-center" aria-label="Access partner center resources">
                  Partner Center Resources
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* SEO CONTENT SECTION (Hidden for users, visible to search engines) */}
        <div className="container mx-auto px-4 py-8" style={{ opacity: 0.01, height: '1px', overflow: 'hidden' }}>
          <h2>Global Connectivity Case Studies</h2>
          <p>
            inte-QT provides comprehensive case studies documenting successful global connectivity deployments 
            through our partner center. Our case studies showcase real-world applications of dedicated lines, 
            business broadband, SD-WAN, and NSOC services across multiple industries including banking, FMCG, 
            telecom, and enterprise sectors.
          </p>
          <p>
            Each case study details connectivity solutions, partner collaborations, and measurable results 
            achieved through our global services network. Explore how our partner center facilitates seamless 
            connectivity deployments with documented performance metrics and client testimonials.
          </p>
          <ul>
            <li>Global connectivity case studies</li>
            <li>Partner success documentation</li>
            <li>Services deployment analysis</li>
            <li>Performance metrics and results</li>
          </ul>
        </div>

        <Footer />
      </main>
    </Fragment>
  );
};

export default Cases;