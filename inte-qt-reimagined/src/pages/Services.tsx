import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";

const Services = () => {
  /* ================= MAIN SERVICES ================= */

  const mainServices = [
    {
      title: "Dedicated Lines (DL)",
      description:
        "High-performance, dedicated internet connections with guaranteed bandwidth and low latency. Perfect for mission-critical applications and large-scale operations.",
      icon: Network,
      link: "/services/dedicated-lines",
      image:
        "https://assets.superhivemarket.com/cache/0346e49935ae63f6209492bf3994d0b4.gif",
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
        "https://cdn.dribbble.com/userupload/29647510/file/original-6c41bc159984aa848eec332e1d774c8d.gif",
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
      link: "/services/wireless-connect",
      image:
        "https://www.gadgetmatch.com/wp-content/uploads/2018/12/GadgetMatch-20181219-5G-Explainer-03.gif",
      features: [
        "Rapid deployment",
        "Flexible installation",
        "No physical infrastructure needed",
        "Backup connectivity options",
        "Cost-effective solution",
      ],
    },
  ];

  /* ================= ADDITIONAL SERVICES ================= */

  const additionalServices = [
    {
      title: "G.E.M.S",
      subtitle: "Global Edge Managed Services",
      description:
        "Comprehensive managed services for your global network infrastructure",
      icon: CloudCog,
      image: "https://i.imgur.com/Q0JibVh.jpg",
      link: "/gems",
      external: false,
    },
    {
      title: "NSOC 24×7",
      subtitle: "Network Security Operations Center",
      description: "Round-the-clock monitoring and security for your network",
      icon: Shield,
      image: "/nsoc.gif",
      link: "/global-nsoc",
      external: false,
    },
    {
      title: "Aeta Platform",
      subtitle: "Revolutionizing Connectivity",
      description: "Advanced portal for managing your connectivity solutions",
      icon: Server,
      image:
        "https://res.cloudinary.com/dmhhkhgny/video/upload/v1745406688/website/vzw7z92zdvomwfvwlguc.mp4",
      link: "https://portal.inte-qt.com/",
      external: true,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Services | Dedicated Lines, Broadband & Wireless Connectivity – inte-QT
        </title>
        <meta
          name="description"
          content="Explore inte-QT’s enterprise connectivity services including Dedicated Lines, Business Broadband, Wireless Connects, G.E.M.S, NSOC 24×7, and Aeta Platform across 190+ countries."
        />
        <link rel="canonical" href="https://www.inte-qt.com/services" />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="gradient-hero text-primary-foreground">
        <div
          className="relative h-[380px] sm:h-[420px] bg-cover bg-center"
          style={{
            backgroundImage: `url("https://www.hrcloud.com/hubfs/workplace.gif")`,
          }}
        >
          <div className="absolute inset-0 bg-black/35" />
          <div className="container mx-auto px-4 text-center relative z-10 h-full flex flex-col justify-center">
            <Globe className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 text-white animate-pulse" />
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive connectivity solutions for businesses worldwide
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAIN SERVICES ================= */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 space-y-20">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row ${
                  reverse ? "lg:flex-row-reverse" : ""
                } gap-10 lg:gap-12 items-center`}
              >
                {/* IMAGE – FIRST ON MOBILE & TABLET */}
                <div className="flex-1 order-1 lg:order-none w-full">
                  <Card className="relative h-[240px] sm:h-[300px] md:h-[340px] lg:h-[360px] rounded-2xl overflow-hidden border-0 shadow-xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <CardContent />
                  </Card>
                </div>

                {/* TEXT – AFTER IMAGE ON MOBILE */}
                <div className="flex-1 order-2 lg:order-none text-center lg:text-left">
                  <Icon className="w-14 h-14 mb-4 text-primary mx-auto lg:mx-0" />

                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>

                  <p className="text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8 max-w-xl mx-auto lg:mx-0">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={service.link}>
                    <Button size="lg">
                      Learn More <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= ADDITIONAL SERVICES ================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive solutions for your connectivity needs
            </p>
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
                <Wrapper key={index} {...wrapperProps} className="group block">
                 <Card className="relative aspect-[16/9] rounded-2xl overflow-hidden border-0 shadow-lg transition-transform duration-300 group-hover:scale-[1.03]">

                    {service.image.endsWith(".mp4") ? (
                      <video
                        src={service.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${service.image})`,
                        }}
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                      {/* <Icon className="w-12 h-12 mb-4" /> */}
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-sm font-semibold opacity-90">
                        {service.subtitle}
                      </p>
                      <p className="text-xs opacity-80 mt-1">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Get Connected?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Let’s discuss the perfect connectivity solution for your business
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
