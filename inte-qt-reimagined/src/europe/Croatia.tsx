import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Croatia: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Croatia | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Croatia's internet connectivity, submarine and terrestrial fiber routes, telecom operators, broadband statistics and inte-QT service capabilities in Zagreb, Split, Rijeka, Osijek and other key cities.",
    url: "https://www.inte-qt.com/coverage/europe/croatia",
    about: {
      "@type": "Country",
      name: "Croatia",
      population: 3870000,
      currency: "EUR",
      languages: ["Croatian"],
      majorCities: [
        "Zagreb",
        "Split",
        "Rijeka",
        "Osijek",
        "Zadar",
        "Dubrovnik",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "inte-QT",
      url: "https://www.inte-qt.com",
    },
  };

  return (
    <>
      <Helmet>
        <title>Internet in Croatia | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Explore Croatia’s internet infrastructure, broadband coverage, submarine cables, mobile networks and enterprise connectivity across Zagreb, Split, Rijeka, Osijek and coastal regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/croatia"
        />

        {/* OpenGraph */}
        <meta property="og:title" content="Internet in Croatia | inte-QT" />
        <meta
          property="og:description"
          content="Overview of Croatia’s broadband, mobile connectivity, submarine cables and enterprise network capabilities."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.inte-qt.com/coverage/europe/croatia"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative py-28 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1555990793-da11153b2473?q=80&w=1171&auto=format&fit=crop")',
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1.5px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Croatia
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            An EU and Schengen member on the Adriatic with dense fibre, cable and
            mobile networks supported by multiple Mediterranean submarine cable
            systems and robust terrestrial backbones.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* LEFT */}
              <motion.aside
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-white/70 dark:bg-black/30 rounded-3xl shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-5">Key Facts</h2>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li><strong>Population:</strong> ~3.87 million</li>
                      <li><strong>Capital:</strong> Zagreb</li>
                      <li><strong>Major Cities:</strong> Split, Rijeka, Osijek, Zadar, Dubrovnik</li>
                      <li><strong>Currency:</strong> Euro (EUR)</li>
                      <li><strong>EU & Schengen:</strong> Member</li>
                    </ul>

                    <div className="text-center mt-6">
                      <img
                        src="https://flagcdn.com/w320/hr.png"
                        alt="Croatia Flag"
                        className="mx-auto rounded-lg shadow border"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.aside>

              {/* RIGHT */}
              <motion.article
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-10"
              >
                <Card className="rounded-3xl shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">Overview</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Croatia has a mature EU-aligned telecom market with high
                      broadband adoption, strong mobile usage and growing FTTH
                      deployments across urban and coastal regions.
                    </p>

                    <div className="mt-6 rounded-2xl overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps?q=Croatia&output=embed"
                        width="100%"
                        height="420"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Our Capabilities</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Dedicated Internet Access (DIA)",
                        "Business Broadband & FTTH",
                        "4G / 5G Wireless Connectivity",
                        "MPLS / SD-WAN",
                        "SLA-backed Enterprise Services",
                        "DDoS Protection & Security",
                      ].map((cap) => (
                        <div key={cap} className="flex gap-3">
                          <CheckCircle className="text-primary" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Croatia;
