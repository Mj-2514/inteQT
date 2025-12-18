// src/pages/Laos.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Laos = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Laos | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Laos’ internet connectivity, terrestrial fiber routes, cross-border transit, ISPs, broadband statistics and inte-QT service capabilities.",
    url: "https://www.inte-qt.com/coverage/asia/laos",
    about: {
      "@type": "Country",
      name: "Laos",
      alternateName: "Lao People’s Democratic Republic",
      population: 7600000,
      currency: "LAK (Lao Kip)",
      languages: ["Lao"],
      neighbouringCountries: [
        "Thailand",
        "Vietnam",
        "China",
        "Cambodia",
        "Myanmar"
      ],
      majorCities: ["Vientiane", "Luang Prabang", "Pakse", "Savannakhet"],
      climate: "Tropical monsoon",
      nationalSport: "Football",
      touristsPerYear: "~3 million"
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Laos | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Laos’ internet connectivity, terrestrial fiber backbone, ISPs, broadband penetration and enterprise connectivity landscape."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/asia/laos"
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Internet in Laos | Connectivity, ISPs & Broadband Overview"
        />
        <meta
          property="og:description"
          content="Overview of Laos’ internet infrastructure, fiber backbone and broadband ecosystem."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.inte-qt.com/coverage/asia/laos"
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1705917950934-7efe2b6866cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFvc3xlbnwwfDB8MHx8fDI%3D")'
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
            Internet in Laos
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A landlocked Southeast Asian nation — Laos relies on cross-border
            terrestrial fiber links through Thailand, Vietnam and China to power
            its growing digital economy.
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
                      <li><strong>Population:</strong> ~7.6 million</li>
                      <li>
                        <strong>Neighbors:</strong> Thailand, Vietnam, China,
                        Cambodia, Myanmar
                      </li>
                      <li>
                        <strong>Language:</strong> Lao
                      </li>
                      <li>
                        <strong>Currency:</strong> Lao Kip (LAK)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Vientiane, Luang Prabang,
                        Pakse, Savannakhet
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Hydropower, Agriculture,
                        Mining, Telecom
                      </li>
                      <li><strong>Tourists per Year:</strong> ~3 million</li>
                      <li><strong>National Sport:</strong> Football</li>
                      <li><strong>Climate:</strong> Tropical monsoon</li>
                    </ul>

                    <div className="text-center mt-6">
                      <img
                        src="https://flagcdn.com/w320/la.png"
                        alt="Flag of Laos"
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
                      Laos has steadily expanded its digital infrastructure over
                      the past decade, primarily through cross-border fiber
                      links connecting to Thailand, Vietnam and China.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Vientiane serves as the primary connectivity hub, while
                      mobile internet adoption continues to drive nationwide
                      access to digital services.
                    </p>

                    {/* MAP */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Laos"
                          src="https://www.google.com/maps?q=Laos&output=embed"
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
                        <li>Wattay International Airport – Vientiane</li>
                        <li>Luang Prabang International Airport</li>
                        <li>Pakse International Airport</li>
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
                              <td className="py-3 px-4">~5.5 million</td>
                              <td className="py-3 px-4">~72%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">~900,000</td>
                              <td className="py-3 px-4">~12%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="py-3 px-4">Landline</td>
                              <td className="py-3 px-4">~600,000</td>
                              <td className="py-3 px-4">~8%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="py-3 px-4">Access to Internet</td>
                              <td className="py-3 px-4">~5.6 million</td>
                              <td className="py-3 px-4">~74%</td>
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
                  Laos’ international connectivity depends on terrestrial fiber
                  corridors routed through Thailand, Vietnam and China, enabling
                  redundancy and regional peering across Southeast Asia.
                </p>

                <a
                  href="https://www.submarinecablemap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Laos.png"
                    alt="Laos Terrestrial Connectivity Map"
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
                  Major ISPs in Laos include Lao Telecom, Unitel, ETL and
                  TPLUS, delivering mobile, broadband and enterprise services
                  nationwide.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Southeast Asia Regional Transit",
                    "MPLS & SD-WAN",
                    "Cross-Border Fiber Connectivity",
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
              . Services in Vientiane and major cities can typically be deployed
              within 3–4 weeks, subject to last-mile availability.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Laos%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>
                <a
                  href="https://data.worldbank.org/country/lao-pdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  World Bank — Lao PDR
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

export default Laos;