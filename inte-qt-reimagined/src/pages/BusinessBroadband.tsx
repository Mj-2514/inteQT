import { CheckCircle, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

import { Card, CardContent } from "@/components/ui/card";

<Helmet>
        <title>Business Broadband (BB) | High-Performance Enterprise Broadband – inte-QT</title>

        <meta
          name="description"
          content="Enterprise-grade Business Broadband (BB) with high availability, scalable bandwidth, faster provisioning, and reliable connectivity delivered across 190+ countries. Powered by inte-QT."
        />

        <meta
          name="keywords"
          content="business broadband, enterprise broadband, BB internet, sd-wan broadband, global broadband provider, fiber broadband enterprise, copper broadband, radio broadband, high speed business internet"
        />

        <link rel="canonical" href="https://www.inte-qt.com/services/business-broadband" />

        {/* OpenGraph */}
        <meta property="og:title" content="Business Broadband | Enterprise-Grade High-Performance Connectivity – inte-QT" />
        <meta
          property="og:description"
          content="Experience reliable, scalable, and fast Business Broadband designed for enterprise workloads, cloud apps, and global operations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inte-qt.com/services/business-broadband" />
        <meta property="og:image" content="https://cdn.dribbble.com/userupload/29647510/file/original-6c41bc159984aa848eec332e1d774c8d.gif" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Broadband for Enterprises – inte-QT" />
        <meta
          name="twitter:description"
          content="Future-ready broadband built for modern enterprises. Reliable, scalable, globally available."
        />
        <meta name="twitter:image" content="https://cdn.dribbble.com/userupload/29647510/file/original-6c41bc159984aa848eec332e1d774c8d.gif" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Business Broadband (BB)",
              "description": "Enterprise-grade Business Broadband with high-speed connectivity, flexible access types (Fiber, Copper, Radio), and reliable SLAs across 190+ countries.",
              "brand": { "@type": "Organization", "name": "inte-QT" },
              "url": "https://www.inte-qt.com/services/business-broadband",
              "category": "Enterprise Internet Service"
            }
          `}
        </script>
      </Helmet>

const BusinessBroadband = () => {
  return (
    <>

      <Navbar />

      <div className="min-h-screen pt-24">

        {/* HERO SECTION */}
        <section className="gradient-hero text-primary-foreground py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-white dark:text-white text-5xl md:text-6xl font-bold animate-fade-in">
              Business Broadband (BB)
            </h1>
            <p className="text-white dark:text-white text-xl md:text-2xl opacity-90 mt-4 max-w-3xl mx-auto animate-fade-in-up">
              High-performance broadband built for modern enterprises that rely on speed,
              stability, and always-on connectivity.
            </p>
          </div>
        </section>

        {/* WHAT IS BB + IMAGE SIDE BY SIDE */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">

              {/* LEFT — TEXT */}
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-8">
                  What is Business Broadband (BB)?
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Business Broadband is a{" "}
                  <span className="font-semibold text-primary">contended connection</span>,
                  where multiple users share the same service. The data travels from
                  enterprise sites to the nearest cabinet, then backhaul, and finally
                  out to the internet.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  For businesses that depend on online services, communication
                  tools, smooth customer interactions, or cloud-based operations,
                  a robust broadband connection becomes a{" "}
                  <span className="font-semibold">strategic advantage</span>.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  High availability, reliable throughput, and faster provisioning
                  make Business Broadband a future-proof investment.
                </p>
              </div>

              {/* RIGHT — IMAGE CARD */}
              <div className="flex-1">
                <div
                  className="w-full h-[320px] lg:h-[360px] rounded-2xl shadow-lg bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://cdn.dribbble.com/userupload/29647510/file/original-6c41bc159984aa848eec332e1d774c8d.gif)",
                  }}
                ></div>
              </div>

            </div>
          </div>
        </section>

        {/* GLOBAL ENABLER SECTION */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">

              <div className="flex-1">
                <Globe className="w-16 h-16 text-primary mb-6" />
                <h2 className="text-4xl font-bold mb-4">
                  Global Enabler for Business Broadband Services
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With partnerships across{" "}
                  <span className="font-semibold text-primary">190+ countries</span>,
                  we deliver business broadband with rapid deployment, superior SLAs,
                  and reliable access even in remote and challenging regions.
                </p>
              </div>

              <Card className="flex-1 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className="w-full h-[260px] bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(https://cdn.dribbble.com/userupload/12401517/file/original-e410e68345bfa66a8c4a89745041cc28.gif)",
                    }}
                  ></div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-12">
              Step Into the Future of Business Broadband
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Higher bandwidth options for growing enterprise needs",
                "Dedicated Customer Premise Equipment (CPE) with hardware guarantee",
                "Multiple access types: Fiber, Copper & Radio",
                "Secure and diverse network routing",
                "Redundant gateway options for maximum uptime",
                "Hyper-fast, flexible, scalable connectivity",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 p-5 bg-card shadow-sm rounded-xl hover:shadow-lg transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <p className="font-medium leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UNIQUE SECTION */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">
              What Makes inte-QT Unique?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
              {[
                "Unmatched fast delivery timelines",
                "Global presence with solid local expertise",
                "Proactive NSOC monitoring 24×7×365",
                "Standardized processes for consistent performance",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Upgrade to Smarter Broadband
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Talk to our experts and discover how Business Broadband can elevate
              your enterprise operations.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Contact Sales
            </Button>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default BusinessBroadband;
