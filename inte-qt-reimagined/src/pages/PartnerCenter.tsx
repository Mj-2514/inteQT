// src/pages/PartnerCenter.tsx
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";

const canonical = "https://www.inte-qt.com/partner-center";
const pageTitle = "Partner Center | Global Telecom Partnership Program – inte-QT";
const pageDescription =
  "Join inte-QT’s global partner network. Access 190+ countries, accelerate your quote-to-cash cycle, gain industry insights, and grow your business with our partnership programs.";
const ogImage = "https://www.inte-qt.com/og/partner-center-1200x630.jpg"; // add to /public/og/

const benefits = [
  {
    title: "Global Interfacing",
    description: "Access to our extensive global network spanning 190+ countries",
    icon: Globe,
    image:
      "https://i0.wp.com/unimetrix.com/wp-content/uploads/2021/05/globeanim.gif?w=1080&ssl=1",
  },
  {
    title: "Transparency of Deal Cycle",
    description: "Clear and transparent processes from quotation to delivery",
    icon: TrendingUp,
    image:
      "https://www.knightsbridge-ng.com/knightbridge/knightsbridge/img/Why-partnerships-can-make-or-break-you.gif",
  },
  {
    title: "A Forum to Gain",
    description: "Knowledge sharing and collaborative growth opportunities",
    icon: Users,
    image:
      "https://gifdb.com/images/high/aesthetic-pixel-city-discord-banner-nyv1jjie9r6dtoer.gif",
  },
  {
    title: "Opportunity to Grow",
    description: "Scale your business with our expanding global footprint",
    icon: Award,
    image:
      "https://leveragedgrowth.in/wp-content/uploads/2020/01/ezgif.com-video-to-gif-1.gif",
  },
  {
    title: "Efficient Quote to Cash",
    description: "Streamlined processes for faster business execution",
    icon: DollarSign,
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQHvOy-KbCkKrg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1714732113532?e=2147483647&v=beta&t=QomZv1t1jONLehsalEi_MNQywO5CstRpXw4oL4dk_rc",
  },
];

const partnerTypes = [
  {
    title: "Technology Partners",
    description: "Integrate your solutions with our global connectivity platform",
    icon: Zap,
  },
  {
    title: "Reseller Partners",
    description: "Expand your portfolio with our comprehensive connectivity services",
    icon: Handshake,
  },
  {
    title: "Strategic Partners",
    description: "Build long-term relationships for mutual growth and success",
    icon: Target,
  },
];

const steps = [
  {
    number: "01",
    title: "Application",
    description: "Submit your partnership application with your business details",
  },
  {
    number: "02",
    title: "Evaluation",
    description: "Our team reviews your application and assesses partnership fit",
  },
  {
    number: "03",
    title: "Onboarding",
    description: "Get trained on our systems and receive partner resources",
  },
  {
    number: "04",
    title: "Launch",
    description: "Start offering our services and grow your business together",
  },
];

// JSON-LD for organization + partnership offers
const orgJson = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "inte-QT Partner Center",
  description:
    "A global partnership program offering reseller, technology, and strategic collaboration opportunities.",
  url: canonical,
  areaServed: "Worldwide",
  sameAs: ["https://www.linkedin.com/company/bitsandbyteglobal/posts/?feedView=all"],
};

const offerCatalogJson = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Partnership Programs",
  itemListElement: partnerTypes.map((t, i) => ({
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
          className="py-24 bg-cover bg-center text-center"
          style={{
            backgroundImage:
              'url("https://cdn.arrify.com/wp-content/uploads/2022/05/giphy.gif")',
            backgroundSize: "698px",
          }}
        >
          <div className="
  container mx-auto px-4
  bg-white/50
  backdrop-blur-md
  rounded-3xl
  py-10
  max-w-4xl
  mx-auto
">

            <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-sm">
  Partner Center
</h1>

<p className="max-w-3xl mx-auto text-lg text-black font-bold">
  Join our global network and grow your business with inte-QT — access connectivity,
  operational tools, and commercial support.
</p>

          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">Why Become Our Partner?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Experience the benefits of partnering with a global connectivity provider.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.slice(0, 3).map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={benefit.title}
                    className="relative overflow-hidden rounded-2xl shadow-lg h-[320px] group"
                    role="article"
                    aria-label={benefit.title}
                  >
                    {/* background image — decorative */}
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                      aria-hidden
                    />
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/50 transition" aria-hidden />
                    <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
                          <Icon className="w-5 h-5 text-white" />
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
              {benefits.slice(3).map((benefit, idx) => (
                <Card
                  key={benefit.title}
                  className="relative overflow-hidden rounded-2xl shadow-lg h-[260px] group"
                  role="article"
                  aria-label={benefit.title}
                >
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-hidden
                  />
                  <div className="absolute inset-0 bg-black/35" aria-hidden />
                  <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-bold">{benefit.title}</h3>
                    <p className="text-sm opacity-90 -mt-1">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNER TYPES */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">Partnership Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Choose the partnership model that fits your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnerTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <Card key={type.title} className="border-2 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gradient-primary mb-4 mx-auto">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                      <p className="text-muted-foreground mb-4">{type.description}</p>
                      
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Partnership Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Simple steps to become an inte-QT partner
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <article key={step.number} className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-primary-foreground text-lg font-bold mb-4 mx-auto">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">500+</p>
                <p className="text-sm text-muted-foreground">Active Partners</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">190+</p>
                <p className="text-sm text-muted-foreground">Countries Covered</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">95%</p>
                <p className="text-sm text-muted-foreground">Partner Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">24/7</p>
                <p className="text-sm text-muted-foreground">Partner Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <Users className="mx-auto mb-4 w-12 h-12 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Ready to Partner With Us?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our network and unlock new opportunities for growth.
            </p>
            <div className="mt-4">
              <Button asChild size="sm" variant="outline" className="mt-4">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default PartnerCenter;
