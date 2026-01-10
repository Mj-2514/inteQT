// src/pages/PartnerCenter.tsx
import React, { Fragment } from "react";
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
} from "lucide-react";

const canonical = "https://www.inte-qt.com/partner-center";
const pageTitle = "Partner Center | Global Telecom Partnership Program – inte-QT";
const pageDescription =
  "Join inte-QT's global partner ecosystem. Collaborate to deliver end-to-end Internet, managed services, and networking solutions through our digital platform. Extend your local capabilities to global markets.";
const ogImage = "https://www.inte-qt.com/og/partner-center-1200x630.jpg";

const benefits = [
  {
    title: "Global Reach, Local Expertise",
    description: "Extend your local network capabilities to 190+ countries through our global ecosystem",
    icon: Globe2,
    image:
      "https://i0.wp.com/unimetrix.com/wp-content/uploads/2021/05/globeanim.gif?w=1080&ssl=1",
  },
  {
    title: "Quote-to-Cash-to-Assurance",
    description: "End-to-end operational efficiency with single-point coordination for customers",
    icon: TrendingUp,
    image:
      "https://www.knightsbridge-ng.com/knightbridge/knightsbridge/img/Why-partnerships-can-make-or-break-you.gif",
  },
  {
    title: "Digital Enablement Platform",
    description: "Access our portal for seamless service delivery and management",
    icon: Layers,
    image:
      "https://gifdb.com/images/high/aesthetic-pixel-city-discord-banner-nyv1jjie9r6dtoer.gif",
  },
  {
    title: "Continuous Business Opportunities",
    description: "Unlock sustainable growth through our expanding global footprint",
    icon: Award,
    image:
      "https://leveragedgrowth.in/wp-content/uploads/2020/01/ezgif.com-video-to-gif-1.gif",
  },
  {
    title: "Operational Excellence",
    description: "Streamlined processes ensuring faster execution and delivery",
    icon: Clock,
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQHvOy-KbCkKrg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1714732113532?e=2147483647&v=beta&t=QomZv1t1jONLehsalEi_MNQywO5CstRpXw4oL4dk_rc",
  },
];

const partnershipFeatures = [
  {
    title: "Collaboration at Core",
    description: "We believe collaboration is fundamental to enhancing our service portfolio worldwide. Partnering with the right local and global suppliers enables us to deliver comprehensive solutions.",
    icon: Users2,
    color: "text-blue-500 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    title: "Service Integration",
    description: "We integrate our services with partner offerings on our portal to provide end-to-end solutions—from quote to cash to assurance for global connectivity.",
    icon: Network,
    color: "text-green-500 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
  },
  {
    title: "Global Aggregation",
    description: "As a global network connectivity aggregator, we work closely with reliable partners to deliver Internet, managed services, and networking solutions to enterprises worldwide.",
    icon: Globe,
    color: "text-purple-500 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    title: "Long-term Value Creation",
    description: "We build sustainable growth through long-term partnerships, combining local expertise with global reach to simplify enterprise connectivity.",
    icon: BarChart,
    color: "text-amber-500 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery & Alignment",
    description: "Initial discussions to understand mutual capabilities and partnership fit",
  },
  {
    number: "02",
    title: "Evaluation & Due Diligence",
    description: "Assessment of reliability, scalability, and commitment to service quality",
  },
  {
    number: "03",
    title: "Platform Integration",
    description: "Onboarding to our digital portal and technical integration",
  },
  {
    number: "04",
    title: "Joint Go-to-Market",
    description: "Launch collaboration and begin delivering solutions to customers",
  },
];

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Active Partners",
    description: "Global network of reliable providers",
    duration: 2500,
  },
  {
    value: 190,
    suffix: "+",
    label: "Countries Covered",
    description: "Through our partner ecosystem",
    duration: 2000,
  },
  {
    value: 96,
    suffix: "%",
    label: "Partner Satisfaction",
    description: "Based on annual partnership surveys",
    duration: 1800,
  },
  {
    value: 24,
    suffix: "/7",
    label: "Partner Support",
    description: "Dedicated relationship management",
    duration: 1000,
  },
];

// JSON-LD for organization + partnership offers
const orgJson = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "inte-QT Partner Center",
  description:
    "A global partnership ecosystem for Internet connectivity, managed services, and networking solutions.",
  url: canonical,
  areaServed: "Worldwide",
  sameAs: ["https://www.linkedin.com/company/bitsandbyteglobal/posts/?feedView=all"],
};

const offerCatalogJson = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Partnership Programs",
  itemListElement: partnershipFeatures.map((t, i) => ({
    "@type": "Offer",
    position: i + 1,
    itemOffered: {
      "@type": "Service",
      name: t.title,
      description: t.description,
    },
  })),
};

const PartnerCenter: React.FC = () => {
  return (
    <Fragment>
      <Seo
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        image={ogImage}
        siteName="inte-QT"
        extraJsonLd={[orgJson, offerCatalogJson]}
      />

      <main className="min-h-screen pt-20 bg-background text-foreground">
        {/* HERO */}
        <section
          className="relative py-24 bg-cover bg-center text-center"
          style={{
            backgroundImage:
              'url("https://cdn.arrify.com/wp-content/uploads/2022/05/giphy.gif")',
            backgroundSize: "698px",
          }}
        >
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              Partner With inte-QT
            </h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-6">
              Build sustainable growth through global collaboration
            </p>
            <p className="max-w-2xl mx-auto text-base text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Collaborate with inte-QT to deliver end-to-end Internet, managed services, 
              and networking solutions through our digital enablement platform.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black gap-2">
                <Link to="/contact">
                  Start Partnership <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* PARTNERSHIP PHILOSOPHY */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Collaboration Is Our Core
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To enhance our portfolio of services worldwide, we partner with reliable local 
                and global suppliers who share our commitment to service quality and customer success.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-3 my-8 text-left bg-muted/50 rounded-r-lg">
                <p className="text-foreground/90 italic">
                  "We are enhancing our partner portfolio and our team is constantly looking 
                  for providers offering Internet connectivity, managed services, and networking solutions."
                </p>
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Global Connectivity Aggregation
                </h3>
                <p className="text-muted-foreground">
                  inte-QT is a global network connectivity aggregator, working closely with 
                  local and global partners to deliver end-to-end Internet, managed services, 
                  and networking solutions to enterprise customers worldwide.
                </p>
                <p className="text-muted-foreground">
                  We collaborate with partners who are reliable, scalable, and committed to 
                  service quality—ensuring our customers receive consistent, high-performance 
                  connectivity solutions.
                </p>
                <div className="pt-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link to="/contact">
                      Explore Partnership <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Digital Platform Advantage
                </h3>
                <p className="text-muted-foreground">
                  Our digital platform enables partners to deliver services through a 
                  quote-to-cash-to-assurance model, ensuring operational efficiency and 
                  a single point of coordination for customers.
                </p>
                <p className="text-muted-foreground">
                  By partnering with inte-QT, you can extend your local network capabilities 
                  to global markets and unlock continuous business opportunities through our 
                  integrated service delivery portal.
                </p>
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Partner With inte-QT?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the advantages of joining our global ecosystem focused on 
                simplifying and scaling enterprise connectivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.slice(0, 3).map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={benefit.title}
                    className="relative overflow-hidden rounded-2xl shadow-lg h-[320px] group transition-transform hover:scale-[1.02] border-0"
                    role="article"
                    aria-label={benefit.title}
                  >
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                      aria-hidden
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent dark:from-black/90 dark:via-black/60" aria-hidden />
                    <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      </div>
                      <p className="text-sm opacity-90">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {benefits.slice(3).map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={benefit.title}
                    className="relative overflow-hidden rounded-2xl shadow-lg h-[260px] group transition-transform hover:scale-[1.02] border-0"
                    role="article"
                    aria-label={benefit.title}
                  >
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                      aria-hidden
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent dark:from-black/80 dark:via-black/50" aria-hidden />
                    <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 text-white" />
                        <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      </div>
                      <p className="text-sm opacity-90">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* PARTNERSHIP FEATURES */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Partnership Approach
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                At inte-QT, we don't just deliver services—we build long-term value 
                and sustainable growth with our partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={feature.title} 
                    className="border hover:shadow-xl transition-all duration-300 hover:border-primary/20 bg-card"
                  >
                    <CardContent className="p-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bgColor} mb-4`}>
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-2xl border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground">Seeking Internet & Network Providers</h3>
                  <p className="text-muted-foreground">
                    We're actively expanding our partner portfolio with providers offering:
                    Internet connectivity, managed services, and networking solutions.
                  </p>
                </div>
                <div>
                  <Button asChild size="lg">
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Partnership Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A streamlined process to build successful, long-term collaborations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <article 
                  key={step.number} 
                  className="relative text-center p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow border"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground text-lg font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="pt-8">
                    <h4 className="text-lg font-semibold mb-3 text-card-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Partner Ecosystem</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join a growing network of trusted providers delivering excellence worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div 
                  key={stat.label} 
                  className="text-center bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border"
                >
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
                  <p className="text-lg font-semibold text-card-foreground mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Handshake className="mx-auto mb-6 w-16 h-16 text-primary" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Ready to Grow Together?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Partner with inte-QT to extend your local capabilities to global markets 
                and unlock sustainable growth through our digital enablement platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">
                    Become a Partner <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                Have questions? Contact our Global Partner Management team at{" "}
                <a href="mailto:partners@inte-qt.com" className="text-primary font-semibold hover:underline">
                  sales@inte-qt.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default PartnerCenter;