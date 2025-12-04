import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

const PartnerCenter = () => {
  const benefits = [
    {
      title: "Global Interfacing",
      description: "Access to our extensive global network spanning 190+ countries",
      icon: Globe,
      image: "https://i0.wp.com/unimetrix.com/wp-content/uploads/2021/05/globeanim.gif?w=1080&ssl=1"
    },
    {
      title: "Transparency of Deal Cycle",
      description: "Clear and transparent processes from quotation to delivery",
      icon: TrendingUp,
      image: "https://www.knightsbridge-ng.com/knightbridge/knightsbridge/img/Why-partnerships-can-make-or-break-you.gif"
    },
    {
      title: "A Forum to Gain",
      description: "Knowledge sharing and collaborative growth opportunities",
      icon: Users,
      image: "https://gifdb.com/images/high/aesthetic-pixel-city-discord-banner-nyv1jjie9r6dtoer.gif"
    },
    {
      title: "Opportunity to Grow",
      description: "Scale your business with our expanding global footprint",
      icon: Award,
      image: "https://leveragedgrowth.in/wp-content/uploads/2020/01/ezgif.com-video-to-gif-1.gif"
    },
    {
      title: "Efficient Quote to Cash",
      description: "Streamlined processes for faster business execution",
      icon: DollarSign,
      image: "https://media.licdn.com/dms/image/v2/D4E12AQHvOy-KbCkKrg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1714732113532?e=2147483647&v=beta&t=QomZv1t1jONLehsalEi_MNQywO5CstRpXw4oL4dk_rc"
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
  <Helmet>
  <title>Partner Center | Global Telecom Partnership Program – inte-QT</title>

  <meta
    name="description"
    content="Join inte-QT’s global partner network. Access 190+ countries, accelerate your quote-to-cash cycle, gain industry insights, and grow your business with our partnership programs."
  />

  <meta
    name="keywords"
    content="telecom partner program, global connectivity partners, reseller telecom program, technology partner telecom, global telecom reseller network, carrier partner program, telecom strategic partnerships"
  />

  <link rel="canonical" href="https://www.inte-qt.com/partner-center" />

  {/* Open Graph */}
  <meta property="og:title" content="Partner Center | Grow With inte-QT" />
  <meta
    property="og:description"
    content="Explore inte-QT’s global partner program – reseller, technology, and strategic partnerships designed to unlock global telecom opportunities."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.inte-qt.com/partner-center" />
  <meta property="og:image" content="https://i0.wp.com/unimetrix.com/wp-content/uploads/2021/05/globeanim.gif?w=1080&ssl=1" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Partner Center | Global Partnerships – inte-QT" />
  <meta
    name="twitter:description"
    content="Become a partner with inte-QT and expand your reach with global connectivity and high-value telecom services."
  />
  <meta name="twitter:image" content="https://i0.wp.com/unimetrix.com/wp-content/uploads/2021/05/globeanim.gif?w=1080&ssl=1" />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "inte-QT Partner Center",
        "description": "A global partnership program offering reseller, technology, and strategic collaboration opportunities.",
        "url": "https://www.inte-qt.com/partner-center",
        "brand": "inte-QT",
        "areaServed": "Worldwide",
        "offers": {
          "@type": "OfferCatalog",
          "name": "Partnership Programs",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Technology Partners"
            },
            {
              "@type": "Offer",
              "name": "Reseller Partners"
            },
            {
              "@type": "Offer",
              "name": "Strategic Partners"
            }
          ]
        }
      }
    `}
  </script>
</Helmet>


  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
  className="gradient-hero text-primary-foreground py-28 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url("https://cdn.arrify.com/wp-content/uploads/2022/05/giphy.gif")`,
    backgroundSize: "698px", // make it big manually
  }}
>
  <div className="container mx-auto px-4 text-center">
    {/* <Globe className="w-20 h-20 mx-auto mb-6 animate-pulse-glow" /> */}
    <h1 className="text-black dark:text-black text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
      Partner Center
    </h1>
    <p className="text-black dark:text-black text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in-up">
      Join our global network and grow your business with inte-QT
    </p>
  </div>
</section>


      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Become Our Partner?</h2>
            <p className="text-xl text-muted-foreground">
              Experience the benefits of partnering with a global leader
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.slice(0, 3).map((benefit, index) => {
              const Icon = benefit.icon;
              return (
               <Card
  key={index}
  className="relative overflow-hidden rounded-2xl shadow-xl h-[340px] group cursor-pointer"
>
  {/* FULL BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${benefit.image})` }}
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />

  {/* CONTENT */}
  <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
    <h3 className="text-2xl font-bold">{benefit.title}</h3>

    {benefit.description && (
      <p className="text-sm font-semibold opacity-90 -mt-1">
        {benefit.description}
      </p>
    )}

    
  </CardContent>
</Card>


              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {benefits.slice(3).map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden rounded-2xl shadow-xl h-[340px] group cursor-pointer"
                >
                  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${benefit.image})` }}
  />
                  <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
    <h3 className="text-black text-2xl font-bold">{benefit.title}</h3>

    {benefit.description && (
      <p className="text-black text-sm font-semibold opacity-90 -mt-1">
        {benefit.description}
      </p>
    )}

    
  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Partnership Programs</h2>
            <p className="text-xl text-muted-foreground">
              Choose the partnership model that fits your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Partnership Journey</h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to become an inte-QT partner
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary text-primary-foreground text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-gradient mb-2">500+</p>
              <p className="text-muted-foreground">Active Partners</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gradient mb-2">190+</p>
              <p className="text-muted-foreground">Countries Covered</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gradient mb-2">95%</p>
              <p className="text-muted-foreground">Partner Satisfaction</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gradient mb-2">24/7</p>
              <p className="text-muted-foreground">Partner Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our global network and unlock new opportunities for growth
          </p>
          <Button size="lg" className="gradient-primary shadow-glow text-lg px-8">
            <Link to="/contact">
              Apply Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PartnerCenter;
