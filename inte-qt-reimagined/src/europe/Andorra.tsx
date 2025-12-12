// src/pages/Andorra.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Andorra: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Andorra | Connectivity, ISPs & Broadband Overview",
    description:
      "Comprehensive overview of Andorra’s internet connectivity, fibre infrastructure, mobile networks, ISPs and enterprise connectivity services across Andorra la Vella and all seven parishes.",
    url: "https://www.inte-qt.com/coverage/europe/andorra",
    about: {
      "@type": "Country",
      name: "Andorra",
      population: 87000,
      currency: "EUR (Euro)",
      languages: ["Catalan", "Spanish", "French", "Portuguese"],
      neighbouringCountries: ["France", "Spain"],
      majorCities: ["Andorra la Vella", "Escaldes-Engordany"]
    },
    publisher: {
      "@type": "Organization",
      name: "inte-QT",
      url: "https://www.inte-qt.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Andorra | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Explore Andorra’s internet infrastructure, fibre connectivity, mobile networks, ISPs and enterprise connectivity services across Andorra la Vella and surrounding parishes."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/andorra"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Internet in Andorra | Connectivity & ISPs"
        />
        <meta
          property="og:description"
          content="Detailed overview of Andorra’s broadband, mobile connectivity, international backbone access and enterprise services."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.inte-qt.com/coverage/europe/andorra"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section
        className="relative py-28 overflow-hidden"
        aria-labelledby="hero-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://i.imgur.com/7n85BGJ.jpg")' }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1.5px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold"
          >
            Internet in Andorra
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4"
          >
            A high-altitude European microstate with modern broadband
            infrastructure, strong mobile coverage and enterprise-grade
            connectivity across its parishes.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-3 gap-10">
            {/* KEY FACTS */}
            <aside>
              <Card className="backdrop-blur-xl bg-white/70 dark:bg-black/30 rounded-3xl shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-5">
                    Andorra – Key Facts
                  </h2>

                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li><strong>Population:</strong> ~87,000</li>
                    <li><strong>Capital:</strong> Andorra la Vella</li>
                    <li><strong>Region:</strong> Pyrenees, Europe</li>
                    <li><strong>Languages:</strong> Catalan (official)</li>
                    <li><strong>Currency:</strong> Euro (EUR)</li>
                    <li><strong>Internet Penetration:</strong> Very high</li>
                  </ul>

                  <div className="text-center mt-6">
                    <img
                      src="https://flagcdn.com/w320/ad.png"
                      alt="Flag of Andorra"
                      className="mx-auto rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* CONTENT */}
            <article className="lg:col-span-2 space-y-10">
              <Card className="rounded-3xl shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Internet Infrastructure in Andorra
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    Despite its small size, Andorra maintains a modern
                    telecommunications infrastructure with extensive fibre
                    coverage and strong mobile networks supporting residents,
                    businesses and tourism demand.
                  </p>

                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      title="Map of Andorra"
                      src="https://www.google.com/maps?q=Andorra&output=embed"
                      width="100%"
                      height="420"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </CardContent>
              </Card>
            </article>
          </div>
        </section>

        {/* INTERNATIONAL CONNECTIVITY */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <Card className="rounded-3xl shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  International & Backbone Connectivity
                </h2>

                <p className="text-muted-foreground mb-4">
                  Andorra relies on cross-border terrestrial fibre links into
                  Spain and France, providing access to major European internet
                  exchanges, cloud providers and submarine cable systems.
                </p>

                <img
                  src="https://i.imgur.com/ryaaUDf.png"
                  alt="International backbone connectivity for Andorra"
                  className="rounded-xl shadow-lg w-full max-w-3xl mx-auto"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ENTERPRISE SERVICES */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <Card className="rounded-3xl shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Enterprise Connectivity & Our Capabilities
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband",
                    "4G / 5G Wireless Access",
                    "Service Level Agreements (SLA)",
                    "Managed Routers & CPE",
                    "Global Enterprise Management Solutions",
                    "Diverse Routing",
                    "DDoS Protection"
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 p-3 rounded-xl border"
                    >
                      <CheckCircle className="text-primary w-5 h-5 mt-1" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* REFERENCES */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h4 className="font-semibold mb-3">References</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.worldbank.org/en/country/andorra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  World Bank — Andorra
                </a>
              </li>
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2024-andorra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2024: Andorra
                </a>
              </li>
              <li>
                <a
                  href="https://www.govern.ad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Government of Andorra — Statistics
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Andorra;
