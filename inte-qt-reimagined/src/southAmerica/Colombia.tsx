import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Colombia: React.FC = () => {
    <Helmet>
        <title>
          Internet in Colombia | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of Colombia's internet connectivity, submarine and terrestrial fiber routes, telecom operators, broadband statistics and inte-QT service capabilities in Bogotá, Medellín, Cali, Barranquilla, Cartagena and other key cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/south-america/colombia"
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
            // 🔁 swap this with your own Colombia city / map screenshot
            backgroundImage:
              'url("https://images.unsplash.com/photo-1532443603613-61fa154742cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sb21iaWF8ZW58MHx8MHx8fDA%3D")',
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
            Internet in Colombia
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A diversified Andean and Caribbean economy where mobile and fibre
            networks knit together Bogotá, Medellín, Cali and the coasts — and
            new subsea systems keep pushing international capacity higher.
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
                        <strong>Population:</strong> ~53.4 million (2025 est.)
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Venezuela, Brazil, Peru,
                        Ecuador, Panama; coasts on the Caribbean Sea &amp;
                        Pacific Ocean
                      </li>
                      <li>
                        <strong>Languages:</strong> Spanish (official), plus
                        multiple indigenous languages in specific regions
                      </li>
                      <li>
                        <strong>Currency:</strong> Colombian peso (COP)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Bogotá, Medellín, Cali,
                        Barranquilla, Cartagena, Bucaramanga
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/co.png"
                        alt="Colombia Flag"
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
                      Colombia sits in the northwest of South America, bridging
                      the Andes, the Amazon and two oceans. Bogotá is the
                      political and service hub in the central highlands,
                      Medellín anchors innovation and industry in the Aburrá
                      Valley, while Cali, Barranquilla and Cartagena connect
                      Pacific and Caribbean trade, ports and tourism.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The economy and society are strongly mobile-first:
                      smartphone usage is high, mobile data is the default
                      access channel, and social media penetration is among the
                      highest in Latin America. Fixed broadband over HFC and
                      growing FTTH footprints is concentrated in the main urban
                      corridors, with patchier coverage in secondary cities and
                      rural regions. International bandwidth rides on multiple
                      Caribbean and Atlantic subsea cables landing mainly on the
                      northern coast, combined with extensive terrestrial fibre
                      backbones that follow the main road and power routes.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Colombia"
                          src="https://www.openstreetmap.org/export/embed.html?bbox=-79.5%2C-4.5%2C-66.5%2C13.5&layer=mapnik&marker=4.71%2C-74.07"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
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
                          El Dorado International Airport (BOG) — Bogotá&apos;s
                          main hub and one of Latin America&apos;s busiest
                          cargo airports
                        </li>
                        <li>
                          José María Córdova International Airport (MDE) —
                          serving Medellín (Rionegro)
                        </li>
                        <li>
                          Alfonso Bonilla Aragón International Airport (CLO) —
                          serving Cali
                        </li>
                        <li>
                          Rafael Núñez International Airport (CTG) — tourism and
                          business hub in Cartagena
                        </li>
                        <li>
                          Ernesto Cortissoz International Airport (BAQ) — port
                          and industrial gateway at Barranquilla
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p6 md:p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Connectivity Overview
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Colombia&apos;s telecom market is led by Claro, with
                        Movistar and Tigo (now integrating mobile operations)
                        forming a strong second player, and WOM acting as a
                        challenger in mobile. Urban areas see dense 4G and
                        growing 4.5G/5G coverage, plus rapid FTTH rollout, while
                        rural connectivity still depends heavily on mobile and
                        subsidised programs. Usage is overwhelmingly mobile:
                        almost all internet users access online services via
                        smartphones, and social media penetration is above 70%
                        of the population.
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
                                Internet Users (end 2025)
                              </td>
                              <td className="py-3 px-4">≈ 41.7 million</td>
                              <td className="py-3 px-4">
                                ~77–78% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">
                                ≈ 83.0 million SIMs
                              </td>
                              <td className="py-3 px-4">
                                ~155% (multi-SIM very common)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Identities
                              </td>
                              <td className="py-3 px-4">
                                ≈ 37.7 million accounts
                              </td>
                              <td className="py-3 px-4">
                                ~70% (multiple platforms per user)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband (2024–25 est.)
                              </td>
                              <td className="py-3 px-4">
                                ≈ 9 million lines
                              </td>
                              <td className="py-3 px-4">
                                ~16–17 per 100 inhabitants
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
                  Colombia&apos;s international capacity is anchored on multiple
                  submarine cable systems landing mainly at Cartagena,
                  Barranquilla and other Caribbean points — including systems
                  such as ARCOS-1, SAm-1, AMX-1, CFX-1, Maya-1, Globenet and the
                  newer CSN-1 branch into Barranquilla. These are backed by
                  extensive terrestrial fibre backbones that carry traffic south
                  into the Andean core and west towards the Pacific.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Replace href/src with your own submarine-cable screenshot */}
                  <a
                    href="https://www.submarinecablemap.com/country/colombia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Colombia.png"
                      alt="Submarine cables and international routes serving Colombia"
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
                  The market is led by Claro in both mobile and fixed, with
                  Movistar and Tigo integrating mobile operations to form a
                  second large player, alongside WOM and a mix of regional ISPs
                  and fibre players. FTTH is expanding quickly in major cities,
                  while HFC and legacy copper still serve parts of the mass
                  market. Wholesale capacity and enterprise services are
                  concentrated around Bogotá, Medellín, Cali, Barranquilla and
                  Cartagena, where most data centres and cable backhaul meet.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in Bogotá, Medellín, Cali, Barranquilla & Cartagena",
                    "Business Broadband and FTTH for offices, retail and hospitality",
                    "4G / LTE, 5G-ready and fixed wireless last-mile with backup options",
                    "SLA-backed Services with 24x7 monitoring and incident reporting",
                    "CPE / Router deployment, staging and lifecycle management",
                    "MPLS / SD-WAN for multi-site enterprises across main corridors",
                    "Diverse routing across multiple subsea systems and terrestrial paths",
                    "Managed Security, VPN, cloud connectivity and DDoS mitigation",
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
              . We can support connectivity across Bogotá, Medellín, Cali,
              Barranquilla, Cartagena and a wide range of secondary cities,
              subject to local infrastructure and last-mile feasibility.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Colombia%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2026-colombia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2026 / 2025: Colombia
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Colombia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Colombia
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Telecommunications_in_Colombia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Telecommunications in Colombia
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinecablemap.com/country/colombia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Cable Map — Colombia Landings
                </a>
              </li>
              <li>
                <a
                  href="https://datareportal.com/digital-in-colombia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital in Colombia (Overview)
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

export default Colombia;
