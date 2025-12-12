// src/pages/BosniaAndHerzegovina.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const BosniaAndHerzegovina: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Bosnia and Herzegovina | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Bosnia and Herzegovina’s internet connectivity, broadband access, mobile networks, regional backbone routes and enterprise connectivity services.",
    url: "https://www.inte-qt.com/coverage/europe/bosnia-and-herzegovina",
    about: {
      "@type": "Country",
      name: "Bosnia and Herzegovina",
      population: 3200000,
      currency: "BAM (Convertible Mark)",
      languages: ["Bosnian", "Croatian", "Serbian"],
      neighbouringCountries: ["Croatia", "Serbia", "Montenegro"],
      majorCities: ["Sarajevo", "Banja Luka", "Mostar", "Tuzla", "Zenica"]
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
          Internet in Bosnia and Herzegovina | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Explore Bosnia and Herzegovina’s internet infrastructure, broadband coverage, mobile networks, backbone connectivity and enterprise services in Sarajevo, Banja Luka, Mostar and other cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/bosnia-and-herzegovina"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Internet in Bosnia and Herzegovina | Connectivity Overview"
        />
        <meta
          property="og:description"
          content="Detailed overview of Bosnia and Herzegovina’s broadband, mobile connectivity, backbone routes and enterprise internet services."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.inte-qt.com/coverage/europe/bosnia-and-herzegovina"
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
          style={{ backgroundImage: 'url("https://i.imgur.com/A0mOhuS.jpg")' }}
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
            Internet in Bosnia and Herzegovina
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4"
          >
            A Western Balkan country expanding broadband and mobile connectivity
            across Sarajevo, Banja Luka, Mostar and key regional corridors.
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
                    Bosnia and Herzegovina – Key Facts
                  </h2>

                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li><strong>Population:</strong> ~3.2 million</li>
                    <li><strong>Capital:</strong> Sarajevo</li>
                    <li><strong>Region:</strong> Western Balkans</li>
                    <li><strong>Languages:</strong> Bosnian, Croatian, Serbian</li>
                    <li><strong>Currency:</strong> BAM (Convertible Mark)</li>
                  </ul>

                  <div className="text-center mt-6">
                    <img
                      src="https://flagcdn.com/w320/ba.png"
                      alt="Flag of Bosnia and Herzegovina"
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
                    Internet Infrastructure in Bosnia and Herzegovina
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    Bosnia and Herzegovina relies on a mix of fixed broadband,
                    cable and mobile networks, with the strongest infrastructure
                    concentrated in major cities and transport corridors.
                  </p>

                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      title="Map of Bosnia and Herzegovina"
                      src="https://www.google.com/maps?q=Bosnia%20and%20Herzegovina&output=embed"
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
                  Regional & International Backbone Connectivity
                </h2>

                <p className="text-muted-foreground mb-4">
                  Connectivity is provided via terrestrial fibre routes into
                  Croatia, Serbia and Montenegro, enabling access to major
                  European backbones and submarine cable systems.
                </p>

                <img
                  src="https://i.imgur.com/8b7uBo9.png"
                  alt="International backbone connectivity for Bosnia and Herzegovina"
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
                    <div key={cap} className="flex items-start gap-3 p-3 rounded-xl border">
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
                  href="https://data.worldbank.org/country/bosnia-and-herzegovina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  World Bank — Bosnia and Herzegovina
                </a>
              </li>
              <li>
                <a
                  href="https://datareportal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital in Bosnia and Herzegovina
                </a>
              </li>
              <li>
                <a
                  href="https://www.rak.ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Communications Regulatory Agency of Bosnia and Herzegovina
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

export default BosniaAndHerzegovina;
