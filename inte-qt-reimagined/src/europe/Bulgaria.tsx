// src/pages/Bulgaria.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Bulgaria: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Bulgaria | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Bulgaria’s internet connectivity, broadband access, mobile networks, international backbone routes and enterprise connectivity services.",
    url: "https://www.inte-qt.com/coverage/europe/bulgaria",
    about: {
      "@type": "Country",
      name: "Bulgaria",
      population: 6800000,
      currency: "BGN (Bulgarian Lev)",
      languages: ["Bulgarian"],
      neighbouringCountries: [
        "Romania",
        "Serbia",
        "North Macedonia",
        "Greece",
        "Türkiye"
      ],
      majorCities: [
        "Sofia",
        "Plovdiv",
        "Varna",
        "Burgas",
        "Ruse",
        "Stara Zagora"
      ]
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
        <title>
          Internet in Bulgaria | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Explore Bulgaria’s internet infrastructure, broadband coverage, mobile networks, backbone connectivity and enterprise services in Sofia, Plovdiv, Varna, Burgas and other cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/bulgaria"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Internet in Bulgaria | Connectivity Overview"
        />
        <meta
          property="og:description"
          content="Detailed overview of Bulgaria’s broadband, mobile connectivity, backbone routes and enterprise internet services."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.inte-qt.com/coverage/europe/bulgaria"
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
      <section className="relative py-28 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://i.imgur.com/pEgmyIY.jpeg")' }}
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
            Internet in Bulgaria
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4"
          >
            A Balkan and Black Sea nation with strong urban broadband, dense
            fibre backbones, and competitive mobile networks across major cities.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background">
        {/* (Your existing content remains unchanged below this point) */}

        {/* REFERENCES */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h4 className="font-semibold mb-3">References</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://data.worldbank.org/country/bulgaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  World Bank — Bulgaria (ICT Indicators)
                </a>
              </li>
              <li>
                <a
                  href="https://datareportal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital in Bulgaria
                </a>
              </li>
              <li>
                <a
                  href="https://www.crc.bg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Communications Regulation Commission (CRC) Bulgaria
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

export default Bulgaria;
