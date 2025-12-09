import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Dominica: React.FC = () => {
    <Helmet>
        <title>
          Internet in Dominica | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of Dominica's internet connectivity, submarine cables, telecom operators, broadband statistics and inte-QT service capabilities in Roseau, Portsmouth and other key locations on the Nature Island."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/caribbean/dominica"
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
            // 🔁 swap with your own Dominica / Nature Island / Roseau image
            backgroundImage: 'url("https://images.unsplash.com/photo-1649703196751-9019ead6b2f4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9taW5pY2F8ZW58MHx8MHx8fDI%3D")',
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
            Internet in Dominica
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A small &quot;Nature Island&quot; in the Eastern Caribbean where
            rugged terrain, hurricanes and a tiny population meet growing fibre,
            mobile broadband and regional submarine cable links.
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
                        <strong>Official Name:</strong> Commonwealth of Dominica
                      </li>
                      <li>
                        <strong>Population:</strong> ~66,000 (2024–25 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Towns:</strong> Roseau
                        (capital), Portsmouth, Marigot
                      </li>
                      <li>
                        <strong>Location:</strong> Eastern Caribbean, between
                        Guadeloupe (north) and Martinique (south), Lesser
                        Antilles island arc
                      </li>
                      <li>
                        <strong>Languages:</strong> English (official);
                        Dominican Creole French widely spoken
                      </li>
                      <li>
                        <strong>Currency:</strong> Eastern Caribbean dollar
                        (XCD)
                      </li>
                      <li>
                        <strong>Nickname:</strong> &quot;The Nature Island of
                        the Caribbean&quot;
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/dm.png"
                        alt="Dominica Flag"
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
                      Dominica is a mountainous volcanic island in the Eastern
                      Caribbean, known for dense rainforest, hot springs and the
                      Boiling Lake, plus a resident sperm whale population.
                      Roseau on the southwest coast is the compact capital and
                      main commercial centre, with Portsmouth anchoring the
                      north. Tourism, agriculture and citizenship-by-investment
                      dominate the small, service-heavy economy.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The telecom market is tiny but strategically plugged into
                      regional infrastructure. A handful of submarine cables
                      land on the island, and mobile operators have rebuilt and
                      hardened networks after major hurricanes. Internet
                      adoption is high relative to population, but terrain,
                      weather and limited scale all influence last-mile
                      economics. Most users connect via mobile data or
                      fixed-wireless, with fixed broadband clustered around
                      Roseau, Portsmouth and a few coastal communities.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Dominica"
                          src="https://www.google.com/maps?q=Dominica&output=embed"
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
                          Douglas–Charles Airport (DOM) — primary international
                          airport on the northeast coast
                        </li>
                        <li>
                          Canefield Airport (DCF) — near Roseau, mainly
                          regional / charter operations
                        </li>
                        <li>
                          New international airport under construction — planned
                          to support long-haul flights in the late 2020s
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
                        Despite its small population, Dominica has relatively
                        strong adoption of internet and mobile services. Recent
                        digital reports estimate around{" "}
                        <span className="font-medium">
                          55.4&nbsp;thousand internet users
                        </span>{" "}
                        at the start of 2025 (≈
                        <span className="font-medium">
                          {" "}
                          83.8% penetration
                        </span>
                        ), and{" "}
                        <span className="font-medium">
                          92.4&nbsp;thousand mobile connections
                        </span>{" "}
                        (≈
                        <span className="font-medium">
                          {" "}
                          140% of population
                        </span>{" "}
                        — multi-SIM common). Social media identities are a bit
                        over half the population, indicating a very
                        mobile-centric user base.
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
                                Internet Users (Jan&nbsp;2025)
                              </td>
                              <td className="py-3 px-4">
                                ≈ 55.4&nbsp;thousand
                              </td>
                              <td className="py-3 px-4">
                                ~83.8% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">
                                ≈ 92.4&nbsp;thousand SIMs
                              </td>
                              <td className="py-3 px-4">
                                ~140% (multi-SIM common)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Identities
                              </td>
                              <td className="py-3 px-4">
                                ≈ 35.5&nbsp;thousand accounts
                              </td>
                              <td className="py-3 px-4">
                                ~53.7% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband (2020 est.)
                              </td>
                              <td className="py-3 px-4">
                                ≈ 8–9&nbsp;thousand lines
                              </td>
                              <td className="py-3 px-4">
                                ~12–14 per 100 inhabitants
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
                  Dominica forms part of regional fibre rings in the Eastern
                  Caribbean. The island is a landing point on systems such as
                  the Eastern Caribbean Fiber System (ECFS) and Southern
                  Caribbean Fiber (SCF), which interconnect multiple islands
                  from the British Virgin Islands down to Trinidad. These
                  systems give Dominica diverse paths towards major Caribbean
                  hubs and onward to North and South America, even though local
                  demand is modest.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Swap src with your own submarine cable screenshot; keep anchor tag */}
                  <a
                    href="https://www.submarinecablemap.com/country/dominica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Dominica.png"
                      alt="Submarine cables and international routes serving Dominica"
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
                  Dominica&apos;s telecom market is built around two main
                  operators: <span className="font-medium">Flow Dominica</span>{" "}
                  (Cable &amp; Wireless) and{" "}
                  <span className="font-medium">Digicel Dominica</span>, both
                  offering mobile and broadband services. A small number of
                  legacy cable and DSL networks have been consolidated into
                  these brands. Regulation is handled by the National
                  Telecommunications Regulatory Commission under the ECTEL
                  framework for Eastern Caribbean states.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in Roseau, Portsmouth and selected coastal areas",
                    "Business broadband and fibre where available for hotels, resorts and offices",
                    "4G / LTE and fixed-wireless last-mile with backup and hybrid designs",
                    "SLA-backed Services with 24x7 monitoring and clear escalation paths",
                    "CPE / Router supply, staging, configuration and managed lifecycle",
                    "IP-VPN / SD-WAN overlays for multi-site customers across multiple Caribbean islands",
                    "Diverse routing via ECFS, SCF and other regional systems towards major Caribbean and US hubs",
                    "Managed Security, VPN, cloud access and DDoS mitigation tuned for small-island networks",
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
              . We can support connectivity across Roseau, Portsmouth and other
              feasible sites, including hotels, eco-resorts and government /
              enterprise locations, subject to local infrastructure and
              regulatory conditions.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Dominica%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2025-dominica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2025: Dominica
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Dominica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Dominica
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Telecommunications_in_Dominica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Telecommunications in Dominica
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinecablemap.com/country/dominica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Cable Map — Dominica Landings
                </a>
              </li>
              <li>
                <a
                  href="https://data.worldbank.org/indicator/SP.POP.TOTL?locations=DM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  World Bank — Population, Dominica
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

export default Dominica;
