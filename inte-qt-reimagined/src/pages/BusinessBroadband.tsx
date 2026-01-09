// src/pages/BusinessBroadband.tsx
import React from "react";
import { CheckCircle, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const canonical = "https://www.inte-qt.com/services/business-broadband";
const pageTitle =
  "Business Broadband (BB) | High-Performance Enterprise Broadband – inte-QT";
const pageDescription =
  "Enterprise-grade Business Broadband (BB) with high availability, scalable bandwidth, faster provisioning, and reliable connectivity delivered across 190+ countries. Powered by inte-QT.";
const ogImage =
  "https://cdn.dribbble.com/userupload/29647510/file/original-6c41bc159984aa848eec332e1d774c8d.gif";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Business Broadband (BB)",
  description:
    "Enterprise-grade Business Broadband with high-speed connectivity, flexible access types (Fiber, Copper, Radio), and reliable SLAs across 190+ countries.",
  brand: { "@type": "Organization", name: "inte-QT", url: "https://www.inte-qt.com" },
  url: canonical,
  category: "Enterprise Internet Service",
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  description: pageDescription,
  url: canonical,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.inte-qt.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.inte-qt.com/services" },
    { "@type": "ListItem", position: 3, name: "Business Broadband", item: canonical },
  ],
};

const features = [
  "Higher bandwidth options for growing enterprise needs",
  "Dedicated Customer Premise Equipment (CPE) with hardware guarantee",
  "Multiple access types: Fiber, Copper & Radio",
  "Secure and diverse network routing",
  "Redundant gateway options for maximum uptime",
  "Hyper-fast, flexible, scalable connectivity",
];

const BusinessBroadband: React.FC = () => {
  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        image={ogImage}
        siteName="inte-QT"
        extraJsonLd={[productJsonLd, pageJsonLd, breadcrumbJsonLd]}
      />

      <Navbar />

      <main className="min-h-screen pt-24">

        {/* HERO */}
        <section className="gradient-hero text-primary-foreground py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-white text-5xl md:text-6xl font-bold animate-fade-in">
              Business Broadband (BB)
            </h1>

            <p className="text-white text-xl md:text-2xl opacity-90 mt-4 max-w-3xl mx-auto animate-fade-in-up">
              High-performance broadband built for modern enterprises{" "}
              
            </p>
          </div>
        </section>

        {/* WHAT IS BB */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">

              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">What is Business Broadband (BB)?</h2>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Business Broadband is a contended connection, with different users sharing the same service. Data routes from Enterprises to the nearest local cabinet through which it goes to backhaul and then to the Internet.
                </p>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  To address an organization’s Internet needs and help gain competitive advantage, business broadband gives an edge. If a business utilizes internet-based services, relies on connection to communicate with stakeholders or deliver excellent customer services online, then a business broadband could be an important investment.
                </p>

                
              </div>

              <div className="flex-1 w-full">
                <Card className="rounded-2xl overflow-hidden shadow-lg">
                  <CardContent className="p-0">
                    <img
                      src="https://cdn.dribbble.com/userupload/29647510/file/original-6c41bc159984aa848eec332e1d774c8d.gif"
                      alt="Business broadband illustration"
                      loading="lazy"
                      className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover object-center"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* GLOBAL ENABLER */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Global Enabler for Business Broadband Services
                </h2>

                <p className="text-muted-foreground">
                  Relationships with carriers and managed services partners in more than 190+ countries provide us an edge for business broadband services. Worldwide faster delivery capabilities and SLAs which are best in the segment, ensure customer satisfaction with reliable internet access.
                </p>
              </div>

              <Card className="flex-1 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1531668383211-64743e924c66?w=1400&auto=format&fit=crop&q=80"
                    alt="Network coverage"
                    className="w-full h-44 sm:h-56 md:h-64 object-cover"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Step Into the Future of Business Broadband
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 p-4 bg-card shadow-sm rounded-xl hover:shadow-lg transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <p className="font-medium leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UNIQUE SECTION */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/6 to-secondary/6">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What Makes inte-QT Unique?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-left">
              {[
                "Unmatched fast delivery timelines",
                "Global presence with local expertise",
                "Proactive NSOC monitoring 24×7×365",
                "Standardized processes for consistent performance",
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 bg-white/6 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-muted-foreground">
              Visit our{" "}
              <Link to="/cases" className="underline font-semibold">
                case studies
              </Link>{" "}
              to see how enterprises use inte-QT connectivity to scale globally.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-white">Upgrade to Smarter Broadband</h2>
            <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto text-white">
              Explore{" "}
              <Link to="/services" className="underline font-semibold">
                all enterprise connectivity services
              </Link>{" "}
              or connect with our experts for tailored solutions.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Button asChild size="lg" className="gradient-primary shadow-glow">
                <a href="/contact">Contact Sales</a>
              </Button>

              <Button asChild size="lg" variant="outline" className="gradient-primary shadow-glow">
                <a href="/services">Explore Services</a>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default BusinessBroadband;
