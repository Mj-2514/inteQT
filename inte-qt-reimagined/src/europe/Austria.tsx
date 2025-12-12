// src/pages/Austria.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Austria: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Austria | Connectivity, ISPs & Broadband Overview",
    description:
      "Comprehensive overview of Austria’s internet connectivity, fibre and mobile broadband infrastructure, ISPs and enterprise connectivity services across Vienna, Graz, Linz and other key regions.",
    url: "https://www.inte-qt.com/coverage/europe/austria",
    about: {
      "@type": "Country",
      name: "Austria",
      population: 9160000,
      currency: "EUR (Euro)",
      languages: ["German"],
      neighbouringCountries: [
        "Germany",
        "Czech Republic",
        "Slovakia",
        "Hungary",
        "Slovenia",
        "Italy",
        "Switzerland",
        "Liechtenstein"
      ],
      majorCities: ["Vienna", "Graz", "Linz", "Salzburg", "Innsbruck"]
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
        <title>Internet in Austria | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Explore Austria’s internet infrastructure, fibre and mobile broadband networks, ISPs and enterprise connectivity services across Vienna, Graz, Linz and major economic hubs."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/austria"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Internet in Austria | Connectivity & ISPs"
        />
        <meta
          property="og:description"
          content="Detailed overview of Austria’s broadband, mobile connectivity, backbone infrastructure and enterprise internet services."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.inte-qt.com/coverage/europe/austria"
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
          style={{ backgroundImage: 'url("https://i.imgur.com/YrjxC8I.jpg")' }}
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
            Internet in Austria
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4"
          >
            A high-income Central European country with near-universal internet
            access, dense fibre backbones and advanced mobile broadband
            supporting a diversified economy.
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
                    Austria – Key Facts
                  </h2>

                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li><strong>Population:</strong> ~9.16 million</li>
                    <li><strong>Capital:</strong> Vienna</li>
                    <li><strong>Region:</strong> Central Europe</li>
                    <li><strong>Language:</strong> German</li>
                    <li><strong>Currency:</strong> Euro (EUR)</li>
                    <li><strong>Internet Penetration:</strong> ~95%</li>
                  </ul>

                  <div className="text-center mt-6">
                    <img
                      src="https://flagcdn.com/w320/at.png"
                      alt="Flag of Austria"
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
                    Internet Infrastructure in Austria
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    Austria operates one of Central Europe’s most reliable
                    digital infrastructures, combining extensive fibre
                    deployment, strong IXPs and nationwide mobile broadband
                    coverage for enterprises and consumers.
                  </p>

                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      title="Map of Austria"
                      src="https://www.google.com/maps?q=Austria&output=embed"
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

        {/* BACKBONE */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <Card className="rounded-3xl shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  International & Regional Backbone Connectivity
                </h2>

                <p className="text-muted-foreground mb-4">
                  Austria is deeply integrated into Europe’s terrestrial fibre
                  backbone, with highly redundant routes into Germany, Italy,
                  Switzerland and neighbouring Central European countries.
                </p>

                <img
                  src="https://i.imgur.com/vBic44e.png"
                  alt="Austria regional backbone connectivity map"
                  className="rounded-xl shadow-lg w-full max-w-3xl mx-auto"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ENTERPRISE */}
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
                    "4G / 5G Wireless Connectivity",
                    "Service Level Agreements (SLA)",
                    "Managed Routers & CPE",
                    "Global Enterprise Management Solutions",
                    "Diverse Gateway Solutions",
                    "DDoS Protection"
                  ].map((cap) => (
                    <div
                      key={cap}
                      className="flex items-start gap-3 p-3 rounded-xl border"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span className="text-sm">{cap}</span>
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
                  href="https://data.worldbank.org/country/austria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  World Bank — Austria
                </a>
              </li>
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2024-austria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2024: Austria
                </a>
              </li>
              <li>
                <a
                  href="https://www.statistik.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Statistics Austria — ICT Indicators
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

export default Austria;
