import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";
import {
  Network,
  Zap,
  Globe,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Server,
  CloudCog,
  Wifi,
} from "lucide-react";

const Services = () => {
  const mainServices = [
  {
    title: "Dedicated Lines (DL)",
    description:
      "High-performance, dedicated internet connections with guaranteed bandwidth and low latency. Perfect for mission-critical applications and large-scale operations.",
    icon: Network,
    link: "/services/dedicated-lines",
    image:
      "https://assets.superhivemarket.com/cache/0346e49935ae63f6209492bf3994d0b4.gif", // replace
    features: [
      "Guaranteed bandwidth",
      "Low latency connectivity",
      "Symmetric upload/download",
      "Service Level Agreements",
      "Priority support",
    ],
  },
  {
    title: "Business Broadband (BB)",
    description:
      "Reliable, high-speed broadband solutions tailored for businesses of all sizes. Scalable and cost-effective connectivity for your growing needs.",
    icon: Zap,
    link: "/services/business-broadband",
    image:
      "https://cdn.dribbble.com/userupload/29647510/file/original-6c41bc159984aa848eec332e1d774c8d.gif", // replace
    features: [
      "High-speed connectivity",
      "Scalable bandwidth",
      "Static IP addresses",
      "Business-grade support",
      "Flexible contracts",
    ],
  },
  {
    title: "Wireless Connects (XC)",
    description:
      "Cutting-edge wireless connectivity solutions for rapid deployment and flexible networking. Ideal for temporary sites and hard-to-reach locations.",
    icon: Wifi,
    link: "/services/wireless-connection",
    image:
      "https://www.gadgetmatch.com/wp-content/uploads/2018/12/GadgetMatch-20181219-5G-Explainer-03.gif", // replace
    features: [
      "Rapid deployment",
      "Flexible installation",
      "No physical infrastructure needed",
      "Backup connectivity options",
      "Cost-effective solution",
    ],
  },
];


  const additionalServices = [
  {
    title: "G.E.M.S",
    subtitle: "Global Edge Managed Services",
    description: "Comprehensive managed services for your global network infrastructure",
    icon: CloudCog,
    image: "https://i.imgur.com/Q0JibVh.jpg"
  },
  {
    title: "NSOC 24×7",
    subtitle: "Network Security Operations Center",
    description: "Round-the-clock monitoring and security for your network",
    icon: Shield,
    image: "/nsoc.gif"
  },
  {
    title: "Aeta Platform",
    subtitle: "Revolutionizing Connectivity",
    description: "Advanced portal for managing your connectivity solutions",
    icon: Server,
    image: "https://res.cloudinary.com/dmhhkhgny/video/upload/v1745406688/website/vzw7z92zdvomwfvwlguc.mp4"
  },
];
<Helmet>
  <title>Services | Dedicated Lines, Broadband & Wireless Connectivity – inte-QT</title>

  <meta
    name="description"
    content="Explore inte-QT’s full suite of enterprise connectivity services including Dedicated Lines, Business Broadband, Wireless Connections, G.E.M.S, NSOC 24×7, and Aeta Platform—delivered across 190+ countries."
  />

  <meta
    name="keywords"
    content="dedicated lines, business broadband, wireless connectivity, global internet provider, enterprise isp, managed network services, NSOC, GEMS, Aeta platform, leased line provider"
  />

  <link rel="canonical" href="https://www.inte-qt.com/services" />

  {/* OpenGraph */}
  <meta property="og:title" content="Enterprise Connectivity Services | inte-QT" />
  <meta
    property="og:description"
    content="High-performance global connectivity solutions including Dedicated Lines, Broadband, Wireless Internet, Managed Services, and NSOC operations."
  />
  <meta property="og:url" content="https://www.inte-qt.com/services" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://i.ibb.co/nDScWyW/services-banner.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="inte-QT Services | Global Connectivity Solutions" />
  <meta
    name="twitter:description"
    content="Discover enterprise-grade connectivity including DIA, broadband, wireless links, GEMS, NSOC, and the Aeta connectivity platform."
  />
  <meta name="twitter:image" content="https://i.ibb.co/nDScWyW/services-banner.jpg" />

  {/* Schema — Service Catalog */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org/",
        "@type": "Service",
        "name": "Enterprise Connectivity Services",
        "provider": {
          "@type": "Organization",
          "name": "inte-QT",
          "areaServed": "Worldwide"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Connectivity Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Dedicated Lines (DIA)",
                "description": "High-capacity symmetrical connectivity with guaranteed bandwidth."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business Broadband",
                "description": "Reliable, high-speed broadband connectivity for enterprises."
              }
            },
            {
              "@type": "Offer",
              "itemOutfered": {
                "@type": "Service",
                "name": "Wireless Connectivity",
                "description": "Rapid-deployment wireless internet for remote and flexible sites."
              }
            },
            {
              "@type": "Service",
              "name": "G.E.M.S",
              "description": "Global Edge Managed Services"
            },
            {
              "@type": "Service",
              "name": "NSOC 24×7",
              "description": "Network Security Operations Center"
            },
            {
              "@type": "Service",
              "name": "Aeta Platform",
              "description": "Advanced connectivity management portal"
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
  className="gradient-hero text-primary-foreground py-24 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url("https://www.hrcloud.com/hubfs/workplace.gif")`,
  }}
>
  <div className="container mx-auto px-4 text-center">
    <Globe className="w-20 h-20 mx-auto mb-6 animate-pulse-glow" />
    <h1 className="text-black dark:text-black text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
       Our Services
    </h1>
    <p className="text-black dark:text-black text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in-up">
      Comprehensive connectivity solutions for businesses worldwide
    </p>
  </div>
</section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
  <Button size="lg" className="gradient-primary shadow-glow">
    Learn More <ArrowRight className="ml-2" />
  </Button>
</Link>

                  </div>
                  <div className="flex-1">
                    <div className="flex-1">
  <Card
    key={index}
    className="relative overflow-hidden h-[360px] rounded-2xl shadow-xl border-0"
  >
    {/* Full Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${service.image})` }}
    />

    {/* Soft overlay to make image look premium */}
    <div className="absolute inset-0 bg-black/20" />

    <CardContent className="relative z-10 h-full p-0"></CardContent>
  </Card>
</div>





                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions for your connectivity needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
  key={index}
  className="relative overflow-hidden rounded-2xl shadow-lg border-0 h-[340px]"
>
  <video
      src={service.image}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 object-cover"
    />
  {/* Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${service.image})` }}
  />


  {/* Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

  <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
    <Icon className="w-12 h-12 mb-4 drop-shadow-xl" />
    <h3 className="text-2xl font-bold leading-tight">{service.title}</h3>
    <p className="text-sm opacity-90 font-semibold">{service.subtitle}</p>
    <p className="text-xs opacity-80 mt-1 max-w-xs">{service.description}</p>
  </CardContent>
</Card>

              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-6">Why Choose inte-QT?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              We deliver enterprise-grade connectivity solutions with unmatched reliability and support
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                "Global presence in 190+ countries",
                "24/7 expert technical support",
                "99.9% uptime guarantee",
                "Flexible and scalable solutions",
                "Competitive pricing models",
                "Rapid deployment capabilities",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-card">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white dark:text-white text-4xl font-bold mb-4">Ready to Get Connected?</h2>
          <p className="text-white dark:text-white text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss the perfect connectivity solution for your business needs
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
