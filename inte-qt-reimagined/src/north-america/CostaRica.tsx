import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const CostaRica: React.FC = () => {
    <Helmet>
        <title>
          Internet in Costa Rica | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of Costa Rica's internet connectivity, submarine and terrestrial fiber routes, telecom operators, broadband statistics and inte-QT service capabilities in San José, Alajuela, Heredia and other key cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/latin-america/costa-rica"
        />
      </Helmet>
  return (
    <>
      

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
            // 🔁 swap this with your own San José / map screenshot
            backgroundImage:
              'url("https://images.unsplash.com/photo-1552727131-5fc6af16796d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29zdGElMjByaWNhfGVufDB8fDB8fHwy")',
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
            Internet in Costa Rica
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A stable Central American service economy where dense mobile and
            fibre networks connect the Central Valley and coasts, with
            near-universal internet access and strong demand from households,
            enterprises and digital nomads.
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
                        <strong>Population:</strong> ~5.2 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Region:</strong> San José (capital)
                        in the Central Valley; key region for services and tech
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Nicaragua (north), Panama
                        (southeast), Pacific Ocean (west), Caribbean Sea (east)
                      </li>
                      <li>
                        <strong>Languages:</strong> Spanish (official); English
                        widely used in tourism &amp; services
                      </li>
                      <li>
                        <strong>Currency:</strong> Costa Rican colón (CRC)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> San José, Alajuela,
                        Heredia, Cartago, Liberia, Limón, Puntarenas
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/cr.png"
                        alt="Costa Rica Flag"
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
                      Costa Rica sits in the heart of Central America, with
                      coasts on both the Pacific Ocean and Caribbean Sea. The
                      Central Valley around San José, Alajuela, Heredia and
                      Cartago concentrates most of the population, services,
                      tech parks and government, while Liberia, Puntarenas and
                      Limón anchor tourism and logistics on the coasts.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The country is highly connected by regional standards.
                      Internet penetration is above 90% and mobile broadband is
                      widespread, with most users accessing services via
                      smartphones. Fibre and HFC footprints are strong in the
                      Central Valley and expanding into secondary cities.
                      International capacity comes from multiple submarine
                      cables landing on both coasts, backed by domestic fibre
                      rings and power-line corridors, which together support a
                      sizeable outsourcing, shared-services and digital nomad
                      ecosystem.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Costa Rica"
                          src="https://www.google.com/maps?q=Costa%20Rica&output=embed"
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
                          Juan Santamaría International Airport (SJO) — main hub
                          serving San José / Alajuela and the Central Valley
                        </li>
                        <li>
                          Daniel Oduber Quirós International Airport (LIR) —
                          Liberia, key gateway for Guanacaste and Pacific
                          resorts
                        </li>
                        <li>
                          Limón International Airport (LIO) — Caribbean coast
                          and port region
                        </li>
                        <li>
                          Tobías Bolaños International Airport (SYQ) — domestic
                          / regional business and GA traffic near San José
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
                        Costa Rica is one of the most connected markets in Latin
                        America. Internet penetration is above 92% with roughly
                        4.8 million users, and mobile connections exceed the
                        total population. ICE/Kölbi, Claro and Liberty (formerly
                        Cabletica / Movistar fixed assets) are key players,
                        alongside a cluster of regional ISPs and fibre
                        operators. Fixed broadband is widely available in urban
                        areas, with strong FTTH growth and competitive triple
                        play offerings.
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
                                Internet Users (Oct 2025)
                              </td>
                              <td className="py-3 px-4">≈ 4.78 million</td>
                              <td className="py-3 px-4">
                                ~92.6% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">
                                ≈ 6.0–6.5 million SIMs
                              </td>
                              <td className="py-3 px-4">
                                ~115–125% (multi-SIM common)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Identities
                              </td>
                              <td className="py-3 px-4">
                                ≈ 4.0–4.2 million accounts
                              </td>
                              <td className="py-3 px-4">
                                ~80% (heavily mobile-first)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband (2024–25 est.)
                              </td>
                              <td className="py-3 px-4">
                                ≈ 900k–1.0 million lines
                              </td>
                              <td className="py-3 px-4">
                                ~17–19 per 100 inhabitants
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

        {/* Submarine Cables & Backbone */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine Cables & International Routes
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Costa Rica is connected to the global internet through
                  multiple Caribbean and Pacific submarine systems, with landing
                  points on both coasts. Systems such as ARCOS-1, MAYA-1,
                  PAC, CFX-1 and regional spurs provide diverse routes into
                  North America and the wider Americas, feeding domestic fibre
                  backbones that loop the Central Valley and extend towards
                  Liberia, Limón and key border crossings.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Replace href/src with your own submarine-cable screenshot */}
                  <a
                    href="https://www.submarinecablemap.com/country/costa-rica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Costa.png"
                      alt="Submarine cables and international routes serving Costa Rica"
                      className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* ISPs */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The market combines a strong state-owned actor with private
                  competition. ICE (Kölbi) remains central in fixed and mobile,
                  while Claro and Liberty bring regional scale and converged
                  offerings. A number of local fibre and wireless ISPs focus on
                  specific provinces, tourism regions and SME segments. Service
                  expectations are relatively high, with many enterprise and
                  residential users demanding low-latency paths to US clouds and
                  OTT platforms.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in San José, Alajuela, Heredia, Cartago & Liberia",
                    "Business Broadband and FTTH for offices, retail, hospitality and co-working hubs",
                    "4G / LTE and fixed wireless last-mile with redundancy options",
                    "SLA-backed Services with 24x7 monitoring and detailed reporting",
                    "CPE / Router procurement, configuration and managed lifecycle",
                    "MPLS / SD-WAN for multi-site organisations across the Central Valley and coasts",
                    "Diverse routing via Caribbean and Pacific subsea systems towards North America",
                    "Managed Security, VPN, cloud on-ramps and DDoS mitigation",
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
              . We can support connectivity across the Central Valley, Pacific
              and Caribbean coasts, subject to local infrastructure and
              last-mile feasibility.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Costa%20Rica%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2026-costa-rica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2026: Costa Rica
                </a>
              </li>
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2024-costa-rica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2024: Costa Rica
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Costa_Rica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Costa Rica
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Telecommunications_in_Costa_Rica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Telecommunications in Costa Rica
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinecablemap.com/country/costa-rica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Cable Map — Costa Rica Landings
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

export default CostaRica;
