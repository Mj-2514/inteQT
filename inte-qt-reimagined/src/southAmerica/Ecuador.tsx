import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Ecuador: React.FC = () => {
    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Ecuador | Connectivity, ISPs & Broadband Overview",
  description:
    "Detailed overview of Ecuador's internet connectivity, submarine and terrestrial fiber routes, telecom operators, broadband statistics and inte-QT service capabilities in Quito, Guayaquil, Cuenca and other key cities.",
  url: "https://www.inte-qt.com/coverage/latin-america/ecuador",

  about: {
    "@type": "Country",
    name: "Ecuador",

    population: {
      "@type": "QuantitativeValue",
      value: 18000000
    },

    currency: "USD",

    inLanguage: ["Spanish", "Kichwa", "Shuar"],

    capital: {
      "@type": "City",
      name: "Quito"
    },

    containsPlace: [
      { "@type": "City", name: "Quito" },
      { "@type": "City", name: "Guayaquil" },
      { "@type": "City", name: "Cuenca" },
      { "@type": "City", name: "Manta" },
      { "@type": "City", name: "Machala" }
    ],

    neighboringCountry: [
      { "@type": "Country", name: "Colombia" },
      { "@type": "Country", name: "Peru" }
    ],

    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.8312,
      longitude: -78.1834
    }
  },

  mentions: [
    {
      "@type": "Airport",
      name: "Mariscal Sucre International Airport",
      iataCode: "UIO"
    },
    {
      "@type": "Airport",
      name: "José Joaquín de Olmedo International Airport",
      iataCode: "GYE"
    },
    {
      "@type": "Airport",
      name: "Eloy Alfaro International Airport",
      iataCode: "MEC"
    },
    {
      "@type": "Airport",
      name: "Seymour Airport",
      iataCode: "GPS"
    }
  ],

  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.inte-qt.com/#website"
  },

  publisher: {
    "@type": "Organization",
    "@id": "https://www.inte-qt.com/#organization"
  }
};

  return (
    <>
      <Helmet>
      <title>
        Internet in Ecuador | Connectivity, ISPs & Broadband Overview
      </title>

      <meta
        name="description"
        content="Detailed overview of Ecuador's internet connectivity, submarine and terrestrial fiber routes, telecom operators, broadband statistics and inte-QT service capabilities in Quito, Guayaquil, Cuenca and other key cities."
      />

      <link
        rel="canonical"
        href="https://www.inte-qt.com/coverage/latin-america/ecuador"
      />

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
          style={{
            // 🔁 swap this with your own Quito / Guayaquil / Andes coastline screenshot
            backgroundImage: 'url("https://images.unsplash.com/photo-1610226977124-9fd2755d09f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWN1YWRvcnxlbnwwfHwwfHx8Mg%3D%3D")',
          }}
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
            Internet in Ecuador
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            An Andean–Pacific economy where fibre and mobile networks connect the
            Sierra, Costa and Amazon regions, backed by multiple subsea systems
            along the Pacific coast and terrestrial routes into Colombia and Peru.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* LEFT — KEY FACTS */}
              <motion.aside
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <Card className="backdrop-blur-xl bg-white/70 dark:bg-black/30 rounded-3xl border border-white/20 shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-5">Key Facts</h2>

                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>
                        <strong>Official Name:</strong> Republic of Ecuador
                      </li>
                      <li>
                        <strong>Population:</strong> ~18 million (mid-2020s est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Quito
                        (capital, Andean highlands), Guayaquil (main port and
                        economic hub), Cuenca, Santo Domingo, Machala, Manta
                      </li>
                      <li>
                        <strong>Regions:</strong> Sierra (Andes), Costa (Pacific
                        coast), Oriente (Amazon), Galápagos Islands
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Colombia (north), Peru
                        (south &amp; east), Pacific Ocean (west)
                      </li>
                      <li>
                        <strong>Languages:</strong> Spanish (official); Kichwa &
                        Shuar recognised, many indigenous languages
                      </li>
                      <li>
                        <strong>Currency:</strong> US dollar (USD) — fully
                        dollarised economy
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/ec.png"
                        alt="Ecuador Flag"
                        className="mx-auto rounded-lg shadow-lg border border-white/40"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.aside>

              {/* RIGHT — MAIN CONTENT */}
              <motion.article
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-10"
              >
                {/* Overview */}
                <Card className="rounded-3xl shadow-xl border border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">
                      A Brief Overview
                    </h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Ecuador spans the Andes, Pacific lowlands and western
                      Amazon, plus the remote Galápagos Islands. Quito, in the
                      highlands, is the political centre and a growing tech hub,
                      while Guayaquil on the coast is the main port city and
                      commercial engine. Cuenca and other regional cities add
                      manufacturing, services and tourism.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Connectivity reflects this geography. International
                      capacity lands on the Pacific coast and runs inland along
                      fibre corridors to Quito and other Andean cities, with
                      extensions toward the Amazon and key border crossings into
                      Colombia and Peru. Internet and mobile adoption are high
                      by regional standards, but there is still a gap between
                      major urban centres and rural Andean / Amazon communities.
                      Mobile broadband is the dominant access method, with fixed
                      fibre and cable concentrated in cities.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Ecuador"
                          src="https://www.google.com/maps?q=Ecuador&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Airports + Connectivity Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Main Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>
                          Mariscal Sucre International Airport (UIO) — serving
                          Quito and the Sierra
                        </li>
                        <li>
                          José Joaquín de Olmedo International Airport (GYE) —
                          Guayaquil and coastal business / ports
                        </li>
                        <li>
                          Eloy Alfaro International Airport (MEC) — Manta and
                          central coast
                        </li>
                        <li>
                          Coronel Artillería Víctor Larrea Airport (ETR) —
                          Santa Rosa / Machala (south coast)
                        </li>
                        <li>
                          Seymour Airport (GPS, Baltra) &amp; San Cristóbal
                          Airport (SCY) — Galápagos Islands
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Connectivity Overview
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Ecuador has a fairly advanced telecom market for its
                        income level. Internet penetration is around{" "}
                        <span className="font-medium">
                          80–85% of the population
                        </span>{" "}
                        (≈{" "}
                        <span className="font-medium">
                          14–15 million users
                        </span>
                        ), with{" "}
                        <span className="font-medium">
                          mobile connections above 100% penetration
                        </span>{" "}
                        due to multi-SIM usage. Fixed broadband is growing via
                        FTTH and cable in cities like Quito, Guayaquil and
                        Cuenca, while a large share of the population relies on
                        mobile data, especially in peri-urban and rural areas.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Type
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Users / Lines
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Penetration
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Internet Users (mid-2020s est.)
                              </td>
                              <td className="py-3 px-4">
                                ≈ 14–15 million
                              </td>
                              <td className="py-3 px-4">
                                ~80–85% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">
                                ≈ 20–21 million SIMs
                              </td>
                              <td className="py-3 px-4">
                                ~115–120% (multi-SIM common)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Identities
                              </td>
                              <td className="py-3 px-4">
                                ≈ 13–14 million accounts
                              </td>
                              <td className="py-3 px-4">
                                ~75–80% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband (2023–24 est.)
                              </td>
                              <td className="py-3 px-4">
                                ≈ 3.0–3.2 million lines
                              </td>
                              <td className="py-3 px-4">
                                ~17–18 per 100 inhabitants
                              </td>
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

        {/* Submarine Cables & International Routes */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine Cables & International Routes
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Ecuador connects to the global internet via Pacific submarine
                  cables landing mainly near Manta and other coastal sites,
                  including systems that run along the west coast of the
                  Americas. These feed domestic fibre backbones that link
                  Guayaquil, Quito, Cuenca and border crossings into Colombia
                  and Peru. Redundancy is achieved through multiple cable
                  systems and cross-border terrestrial routes into neighbouring
                  countries.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Swap src with your own submarine-cable screenshot; keep anchor tag */}
                  <a
                    href="https://www.submarinecablemap.com/country/ecuador"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Ecuador.png"
                      alt="Submarine cables and international routes serving Ecuador"
                      className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* ISPs & Market */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Internet Providers & Market
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The market is led by mobile and fixed operators such as{" "}
                  <span className="font-medium">Claro</span>,{" "}
                  <span className="font-medium">Movistar</span> and the
                  state-affiliated{" "}
                  <span className="font-medium">CNT (Corporación Nacional de
                  Telecomunicaciones)</span>, plus a number of regional ISPs and
                  fibre providers. Competition is strongest in Quito, Guayaquil
                  and Cuenca, while smaller coastal and Amazon towns often have
                  fewer choices and rely heavily on mobile data or fixed-wireless
                  access.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in Quito, Guayaquil, Cuenca, Manta and other key cities",
                    "Business broadband and FTTH where available for offices, retail and industrial parks",
                    "4G / LTE and fixed-wireless last-mile with backup and hybrid designs",
                    "SLA-backed services with 24x7 monitoring and local / regional escalation paths",
                    "CPE / Router supply, staging, configuration and managed lifecycle services",
                    "MPLS / SD-WAN overlays for multi-site organisations across Sierra, Costa, Oriente and Galápagos",
                    "Diverse routing via multiple Pacific subsea systems and cross-border terrestrial paths",
                    "Managed Security, VPN, cloud on-ramps and DDoS mitigation for business-critical workloads",
                  ].map((cap) => (
                    <div
                      key={cap}
                      className="flex items-start space-x-3 bg-card/40 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow"
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

        {/* Commercial Offer */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Contact us to receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">
                Commercial Offer in 2–4 working days
              </mark>
              . We can support connectivity across Quito, Guayaquil, Cuenca,
              Manta and other regional centres, subject to local infrastructure
              and last-mile feasibility.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Ecuador%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2025-ecuador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2025: Ecuador
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Ecuador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Ecuador
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Telecommunications_in_Ecuador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Telecommunications in Ecuador
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinecablemap.com/country/ecuador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Cable Map — Ecuador Landings
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

export default Ecuador;
