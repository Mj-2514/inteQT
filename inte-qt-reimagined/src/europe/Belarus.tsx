// src/pages/Belarus.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Belarus: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Belarus | Connectivity, ISPs & Broadband Overview",
    description:
      "Overview of Belarus’s internet connectivity, fixed and mobile broadband, international backbone routes and enterprise connectivity services across Minsk and major regional cities.",
    url: "https://www.inte-qt.com/coverage/europe/belarus",
    about: {
      "@type": "Country",
      name: "Belarus",
      population: 9300000,
      currency: "BYN (Belarusian Ruble)",
      languages: ["Belarusian", "Russian"],
      neighbouringCountries: [
        "Russia",
        "Ukraine",
        "Poland",
        "Lithuania",
        "Latvia"
      ],
      majorCities: [
        "Minsk",
        "Brest",
        "Gomel",
        "Grodno",
        "Mogilev",
        "Vitebsk"
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
        <title>Internet in Belarus | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Explore Belarus’s internet infrastructure, broadband access, mobile networks, international backbone connectivity and enterprise services in Minsk and major cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/belarus"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Internet in Belarus | Connectivity & ISPs"
        />
        <meta
          property="og:description"
          content="Detailed overview of Belarus’s broadband, mobile connectivity, backbone routes and enterprise internet services."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.inte-qt.com/coverage/europe/belarus"
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
          style={{ backgroundImage: 'url("https://i.imgur.com/NshlLgh.jpg")' }}
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
            Internet in Belarus
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4"
          >
            An Eastern European country with a strategic transit position,
            established fibre infrastructure and widespread mobile connectivity
            across major urban centres.
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
                    Belarus – Key Facts
                  </h2>

                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li><strong>Population:</strong> ~9.3 million</li>
                    <li><strong>Capital:</strong> Minsk</li>
                    <li><strong>Region:</strong> Eastern Europe</li>
                    <li><strong>Languages:</strong> Belarusian, Russian</li>
                    <li><strong>Currency:</strong> Belarusian Ruble (BYN)</li>
                    <li><strong>Internet Usage:</strong> High in urban areas</li>
                  </ul>

                  <div className="text-center mt-6">
                    <img
                      src="https://flagcdn.com/w320/by.png"
                      alt="Flag of Belarus"
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
                    Internet Infrastructure in Belarus
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    Belarus operates a dense terrestrial fibre network linking
                    Minsk with regional centres and neighbouring countries,
                    supporting broadband, wholesale and enterprise connectivity.
                  </p>

                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      title="Map of Belarus"
                      src="https://www.google.com/maps?q=Belarus&output=embed"
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
                  International & Backbone Connectivity
                </h2>

                <p className="text-muted-foreground mb-4">
                  Belarus connects to global internet backbones via terrestrial
                  fibre routes into Poland, the Baltic states, Ukraine and
                  Russia, enabling diverse international connectivity paths.
                </p>

                <img
                  src="https://i.imgur.com/AIP3GvL.png"
                  alt="International backbone connectivity for Belarus"
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
                    "4G Wireless Connectivity",
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
                  href="https://data.worldbank.org/country/belarus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  World Bank — Belarus
                </a>
              </li>
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2024-belarus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2024: Belarus
                </a>
              </li>
              <li>
                <a
                  href="https://www.belstat.gov.by"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  National Statistical Committee of Belarus
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

export default Belarus;
