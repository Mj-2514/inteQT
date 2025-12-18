// src/pages/CoteDIvoire.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const CoteDIvoire = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Côte d’Ivoire | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Côte d’Ivoire’s internet connectivity, submarine cable systems, national fiber backbone, ISPs, broadband statistics and inte-QT service capabilities.",
    url: "https://www.inte-qt.com/coverage/africa/cote-divoire",
    about: {
      "@type": "Country",
      name: "Côte d’Ivoire",
      population: 29000000,
      currency: "XOF (West African CFA franc)",
      languages: ["French"],
      neighbouringCountries: [
        "Ghana",
        "Liberia",
        "Guinea",
        "Mali",
        "Burkina Faso"
      ],
      majorCities: [
        "Abidjan",
        "Yamoussoukro",
        "Bouaké",
        "San-Pédro",
        "Korhogo"
      ],
      climate: "Tropical; wet and dry seasons",
      nationalSport: "Football",
      touristsPerYear: "~2 million"
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Internet in Côte d’Ivoire | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of Côte d’Ivoire’s internet connectivity, submarine cables, fiber backbone, ISPs, broadband penetration and enterprise connectivity landscape."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/africa/cote-divoire"
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Internet in Côte d’Ivoire | Connectivity, ISPs & Broadband Overview"
        />
        <meta
          property="og:description"
          content="Overview of Côte d’Ivoire’s internet infrastructure, submarine cable systems, ISPs and broadband ecosystem."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.inte-qt.com/coverage/africa/cote-divoire"
        />
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
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1553242018-6496a076bd3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXZvcnklMjBjb2FzdHxlbnwwfDB8MHx8fDI%3D")'
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1.5px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Côte d’Ivoire
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A key digital gateway in West Africa — Côte d’Ivoire’s internet
            ecosystem is driven by multiple submarine cable landings, a growing
            national fiber backbone, and Abidjan’s role as a regional hub.
          </motion.p>
        </div>
      </section>

      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background">
        {/* CONTENT */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* KEY FACTS */}
              <motion.aside
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="backdrop-blur-xl bg-white/70 dark:bg-black/30 rounded-3xl border border-white/20 shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-5">Key Facts</h2>

                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li><strong>Population:</strong> ~29 million</li>
                      <li>
                        <strong>Neighbors:</strong> Ghana, Liberia, Guinea,
                        Mali, Burkina Faso
                      </li>
                      <li><strong>Language:</strong> French</li>
                      <li>
                        <strong>Currency:</strong> West African CFA franc (XOF)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Abidjan, Yamoussoukro,
                        Bouaké, San-Pédro
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Telecom, Finance,
                        Agriculture, Logistics
                      </li>
                      <li><strong>Tourists per Year:</strong> ~2 million</li>
                      <li><strong>National Sport:</strong> Football</li>
                      <li><strong>Climate:</strong> Tropical</li>
                    </ul>

                    <div className="text-center mt-6">
                      <img
                        src="https://flagcdn.com/w320/ci.png"
                        alt="Flag of Côte d’Ivoire"
                        className="mx-auto rounded-lg shadow-lg border border-white/40"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.aside>

              {/* MAIN CONTENT */}
              <motion.article
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-10"
              >
                {/* OVERVIEW */}
                <Card className="rounded-3xl shadow-xl border border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">A Brief Overview</h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Côte d’Ivoire is one of West Africa’s most advanced
                      connectivity markets, benefiting from early submarine
                      cable investments and strong regional demand for
                      enterprise and transit services.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Abidjan acts as a primary internet and data hub for
                      Francophone West Africa, aggregating traffic for landlocked
                      neighbors and supporting regional cloud and financial
                      services.
                    </p>

                    {/* MAP */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Côte d’Ivoire"
                          src="https://www.google.com/maps?q=Côte%20d’Ivoire&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AIRPORTS + CONNECTIVITY */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Main Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Félix Houphouët-Boigny Intl – Abidjan</li>
                        <li>Bouaké Airport</li>
                        <li>San-Pédro Airport</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Connectivity Overview
                      </h3>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left">Type</th>
                              <th className="py-3 px-4 text-left">Users</th>
                              <th className="py-3 px-4 text-left">
                                Penetration
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t">
                              <td className="py-3 px-4">Mobile Internet</td>
                              <td className="py-3 px-4">~17 million</td>
                              <td className="py-3 px-4">~58%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">~1.5 million</td>
                              <td className="py-3 px-4">~5%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="py-3 px-4">Landline</td>
                              <td className="py-3 px-4">~1.2 million</td>
                              <td className="py-3 px-4">~4%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="py-3 px-4">Access to Internet</td>
                              <td className="py-3 px-4">~18 million</td>
                              <td className="py-3 px-4">~62%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* BACKBONE */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  International Connectivity & Internet Backbone
                </h2>

                <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Côte d’Ivoire hosts multiple submarine cable systems including
                  ACE, MainOne and SAT-3, landing in Abidjan and San-Pédro. These
                  are reinforced by terrestrial fiber routes serving Mali,
                  Burkina Faso and Guinea.
                </p>

                <a
                  href="https://www.submarinecablemap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.imgur.com/0m9kT2Z.jpg"
                    alt="Côte d’Ivoire Submarine Cable Map"
                    className="rounded-xl shadow-lg border border-white/20 mx-auto"
                    loading="lazy"
                  />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ISPs */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Major ISPs in Côte d’Ivoire include Orange CI, MTN Côte d’Ivoire,
                  Moov Africa, VIPNET and MainOne, providing consumer, enterprise
                  and international connectivity services.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Cross-Border Fiber Connectivity",
                    "MPLS & SD-WAN",
                    "West Africa Regional Transit",
                    "DDoS Protection & Network Security"
                  ].map((cap) => (
                    <div
                      key={cap}
                      className="flex items-start space-x-3 bg-card/40 p-3 rounded-xl border border-white/10"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <div className="text-sm">{cap}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* COMMERCIAL */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Contact us to receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">
                Commercial Offer in 2–4 working days
              </mark>
              . Services in Abidjan can typically be deployed within 3–4 weeks,
              subject to last-mile availability.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Cote%20dIvoire%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>
                <a
                  href="https://data.worldbank.org/country/cote-divoire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  World Bank — Côte d’Ivoire
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinecablemap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Cable Map
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

export default CoteDIvoire;
