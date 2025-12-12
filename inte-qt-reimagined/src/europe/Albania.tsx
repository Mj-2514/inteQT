// src/pages/Albania.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Albania: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Albania | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Albania’s internet connectivity, broadband infrastructure, mobile networks, ISPs and enterprise connectivity services across Tirana, Durrës, Vlorë and key regions.",
    url: "https://www.inte-qt.com/coverage/europe/albania",
    about: {
      "@type": "Country",
      name: "Albania",
      population: 2840000,
      currency: "ALL (Albanian Lek)",
      languages: ["Albanian"],
      neighbouringCountries: [
        "Montenegro",
        "Kosovo",
        "North Macedonia",
        "Greece",
        "Italy (maritime)"
      ],
      majorCities: ["Tirana", "Durrës", "Vlorë", "Shkodër"]
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
        <title>Internet in Albania | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Albania’s internet connectivity, broadband infrastructure, mobile networks, ISPs and enterprise connectivity services across Tirana, Durrës, Vlorë and other key regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/albania"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Internet in Albania | Connectivity & ISPs"
        />
        <meta
          property="og:description"
          content="Explore Albania’s internet infrastructure, broadband access, mobile networks, submarine connectivity and enterprise services."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.inte-qt.com/coverage/europe/albania"
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
          style={{ backgroundImage: 'url("https://i.imgur.com/ZK8AaKl.jpg")' }}
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
            Internet in Albania
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4"
          >
            A Western Balkan country with expanding broadband infrastructure,
            strong mobile coverage and growing digital adoption across urban and
            coastal regions.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-3 gap-10">
            {/* KEY FACTS */}
            <aside>
              <Card className="backdrop-blur-xl bg-white/70 dark:bg-black/30 rounded-3xl border shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-5">
                    Albania – Key Facts
                  </h2>

                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li><strong>Population:</strong> ~2.84 million</li>
                    <li><strong>Capital:</strong> Tirana</li>
                    <li><strong>Region:</strong> Western Balkans</li>
                    <li><strong>Languages:</strong> Albanian</li>
                    <li><strong>Currency:</strong> Albanian Lek (ALL)</li>
                    <li>
                      <strong>Major Cities:</strong> Tirana, Durrës, Vlorë,
                      Shkodër
                    </li>
                    <li>
                      <strong>Internet Penetration:</strong> ~80–83%
                    </li>
                  </ul>

                  <div className="text-center mt-6">
                    <img
                      src="https://flagcdn.com/w320/al.png"
                      alt="Flag of Albania"
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
                    Internet Infrastructure in Albania
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    Albania has seen steady improvements in broadband and mobile
                    connectivity, driven by urban fibre deployment, competitive
                    mobile operators and increasing demand for digital services.
                  </p>

                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      title="Map of Albania"
                      src="https://www.google.com/maps?q=Albania&output=embed"
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

        {/* SUBMARINE CABLES */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <Card className="rounded-3xl shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine & International Connectivity
                </h2>

                <p className="text-muted-foreground mb-4">
                  Albania connects to the global internet via submarine cable
                  systems in the Adriatic and Mediterranean Sea, complemented by
                  cross-border terrestrial fibre routes.
                </p>

                <img
                  src="https://i.imgur.com/9W8oRIG.png"
                  alt="Submarine cable systems serving Albania"
                  className="rounded-xl shadow-lg w-full max-w-3xl mx-auto"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ISPs */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <Card className="rounded-3xl shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  ISPs & Enterprise Connectivity
                </h2>

                <p className="text-muted-foreground mb-4">
                  Major providers include Vodafone Albania and ONE Albania,
                  offering nationwide mobile coverage and expanding fibre
                  broadband in urban centres.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband",
                    "4G / 5G Wireless Connectivity",
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
                  href="https://data.worldbank.org/country/albania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  World Bank — Albania
                </a>
              </li>
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2024-albania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital in Albania
                </a>
              </li>
              <li>
                <a
                  href="https://akep.al"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  AKEP — Albanian Communications Authority
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

export default Albania;
