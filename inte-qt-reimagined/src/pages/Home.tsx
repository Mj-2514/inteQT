// src/pages/Home.tsx
import React from "react";
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
  Users,
  TrendingUp,
  Award,
  Eye,
  Plane,
  Cloud,
  DollarSign,
  Calendar,
  Lightbulb,
  Hotel,
} from "lucide-react";

const nsocImage = "https://www.hrcloud.com/hubfs/workplace.gif";

const Home: React.FC = () => {
  const services = [
    {
      title: "Dedicated Lines",
      subtitle: "Premium Connectivity",
      description: "High-performance dedicated internet connections",
      image:
        "https://assets.superhivemarket.com/cache/0346e49935ae63f6209492bf3994d0b4.gif",
      icon: Network,
    },
    {
      title: "Business Broadband",
      subtitle: "Reliable Speeds",
      description: "Reliable broadband solutions for businesses",
      image:
        "https://cdn.dribbble.com/userupload/29647510/file/original-6c41bc159984aa848eec332e1d774c8d.gif",
      icon: Zap,
    },
    {
      title: "Wireless Connect",
      subtitle: "Next-Gen Wireless",
      description: "Cutting-edge wireless connectivity",
      image:
        "https://www.gadgetmatch.com/wp-content/uploads/2018/12/GadgetMatch-20181219-5G-Explainer-03.gif",
      icon: Globe,
    },
  ];

  const partnerBenefits = [
    { title: "Global", subtitle: "Interfacing", icon: Globe },
    { title: "Transparency of", subtitle: "Deal Cycle", icon: TrendingUp },
    { title: "A Forum to", subtitle: "Gain", icon: Users },
    { title: "Opportunity to", subtitle: "Grow", icon: Award },
    { title: "Efficient", subtitle: "Quote to Cash", icon: DollarSign },
  ];

  const industries = [
    { name: "Telecom", icon: Network },
    { name: "Airline", icon: Plane },
    { name: "Cloud", icon: Cloud },
    { name: "Pharma", icon: Shield },
    { name: "Financial", icon: DollarSign },
    { name: "Events", icon: Calendar },
    { name: "Energy", icon: Lightbulb },
    { name: "Hotels", icon: Hotel },
  ];

  const events = [
    {
      title: "International Telecoms Week 2024",
      date: "5 - 7 May 2025",
      location:
        "Gaylord National Resort & Convention Centre National Harbor",
      img: "https://imgur.com/y1G9poB.png",
    },
    {
      title: "Channel Partners Conference & Expo 2025",
      date: "24 - 25 March 2025",
      location: "The Venetian Resort in Las Vegas",
      img: "https://i.imgur.com/6G5KxAG.jpg",
    },
    {
      title: "Capacity Europe 2024",
      date: "15 - 17 October 2024",
      location: "InterContinental London - The O2",
      img: "https://i.imgur.com/XAx622Y.jpg",
    },
  ];

  // === SEO values ===
  const title =
    "Global Internet Provider in 190+ Countries | Dedicated Line & SD-WAN Underlay – inte-QT";
  const description =
    "inte-QT delivers Dedicated Lines, Business Broadband, Wireless Connect and Global SD-WAN underlay solutions in 190+ countries. One provider. One SLA. 24×7 Global NSOC.";
  const canonical = "https://www.inte-qt.com/";
  const image = "https://i.imgur.com/o0I3t65.jpeg";
  const siteName = "inte-QT";

  // JSON-LD objects
  const orgJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: canonical,
    logo: image,
    description:
      "Global provider of Dedicated Internet Access, Business Broadband, 4G/5G Wireless Connect and SD-WAN underlay services across 190+ countries.",
    sameAs: [
      "https://www.linkedin.com/company/bitsandbyteglobal/posts/?feedView=all",
    ],
  };

  const websiteJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: canonical,
    name: siteName,
    potentialAction: {
      "@type": "SearchAction",
      target: `${canonical}search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonical },
    ],
  };

  // Backlink injection (SEO-safe)
  const backlinkJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Global Connectivity by inte-QT",
    mainEntityOfPage: canonical,
    knowsAbout: [
      {
        "@type": "CreativeWork",
        name: "Dedicated Internet Access",
        url: "https://www.inte-qt.com/services/dedicated-lines",
      },
      {
        "@type": "CreativeWork",
        name: "SD-WAN Underlay",
        url: "https://www.inte-qt.com/services/sd-wan-underlay",
      },
      {
        "@type": "CreativeWork",
        name: "Business Broadband",
        url: "https://www.inte-qt.com/services/business-broadband",
      },
      {
        "@type": "CreativeWork",
        name: "Wireless 4G/5G Connect",
        url: "https://www.inte-qt.com/services/wireless-connect",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        image={image}
        siteName={siteName}
        extraJsonLd={[
          orgJson,
          websiteJson,
          breadcrumbJson,
          backlinkJson, // ← added backlink JSON-LD
        ]}
      />

      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${image}")` }}
        />
        <div className="absolute inset-0" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            Your Global Access Enabler
            <br />
            <span className="text-gradient">in 190+ Countries</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-black font-bold">
            Managed L3 Internet Global Services — Dedicated Lines, DIA, SD-WAN
            underlay and 24×7 NSOC.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="gradient-primary shadow-glow text-lg px-6 py-3 w-full sm:w-auto"
            >
              <Link to="/services">
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
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprehensive connectivity solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  to={`/services/${service.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  key={index}
                >
                  <Card className="relative overflow-hidden rounded-2xl shadow-xl h-[320px] group cursor-pointer">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />

                    <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                      <h3 className="text-xl sm:text-2xl font-semibold">
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <p className="text-sm opacity-90 -mt-1">
                          {service.subtitle}
                        </p>
                      )}
                      <p className="text-xs sm:text-sm opacity-80 mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
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
              <Link to="/coverage">
                {" "}
                <Globe className="mr-2 inline-block w-5 h-5" /> We cover 190+
                countries across the globe
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PARTNER BENEFITS */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Why become our partner?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Join our global network
            </p>
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
                    <p className="text-sm text-muted-foreground">
                      {benefit.title}
                    </p>
                    <p className="text-lg font-semibold">{benefit.subtitle}</p>
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
              <Link to="/partner-center">
                {" "}
                Learn More <ArrowRight className="ml-2 inline-block" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* NSOC */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${nsocImage})` }}
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <Eye className="w-10 h-10 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold">
                Sit back &amp; Relax, We got our{" "}
                <span className="text-gradient">EYES</span> on it
              </h2>
            </div>
            <p className="text-base sm:text-lg mb-6">
              24×7 Global Network Security Operations Center
            </p>
            <Button
              asChild
              size="lg"
              className="gradient-primary shadow-glow"
            >
              <Link to="/cases">
                Explore NSOC 24X7{" "}
                <ArrowRight className="ml-2 inline-block" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              We help not One, but many Industries
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Trusted by leading sectors worldwide
            </p>
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
                    <p className="text-sm text-center">{industry.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Upcoming Events
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Meet us at industry leading events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full h-56 overflow-hidden rounded-t-xl">
                  <img
                    src={event.img}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent>
                  <div className="flex items-start gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {event.date}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {event.location}
                      </p>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="link"
                    className="text-primary px-0"
                  >
                    <Link to="/events">
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
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
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
            What Our Clients Say
          </h2>

          <Card className="bg-white/10 backdrop-blur-m border-white/20 shadow-2xl mx-auto rounded-3xl">
            <CardContent className="p-6 sm:p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl sm:text-2xl font-bold mb-4">
                BRILLIANT work by inte-QT.
              </p>
              <p className="text-base sm:text-lg text-white/80 mb-4">
                It was seamlessly managed by inte-QT, right from quotation
                to timely delivery within the event schedule. A truly
                delightful experience.
              </p>

              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold">Associate Director</p>
                <p className="text-sm text-white/70">
                  World's Leading Tier-1 Carrier • London, UK
                </p>
                <p className="text-sm text-primary mt-2">
                  World Championship Motor Racing
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
            Not sure what you need?
          </h2>
          <p className="text-base sm:text-lg mb-6 text-white">
            Contact us and our team will resolve your concerns
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg px-6 py-3"
          >
            <Link to="/contact">
              Get In Touch <ArrowRight className="ml-2 inline-block" />
            </Link>
          </Button>
        </div>
      </section>

      {/* HIDDEN BACKLINKS (SEO) */}
      <div style={{ display: "none" }}>
        <a href="https://www.inte-qt.com/services/dedicated-lines">
          Dedicated Internet Access
        </a>
        <a href="https://www.inte-qt.com/services/sd-wan-underlay">
          SD-WAN Underlay Provider
        </a>
        <a href="https://www.inte-qt.com/coverage">
          Global Internet Coverage in 190+ Countries
        </a>
        <a href="https://www.inte-qt.com/contact">
          Enterprise Connectivity Solutions
        </a>
      </div>
    </div>
  );
};

export default Home;
