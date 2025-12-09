import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Croatia: React.FC = () => {
    <Helmet>
        <title>
          Internet in Croatia | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of Croatia's internet connectivity, submarine and terrestrial fiber routes, telecom operators, broadband statistics and inte-QT service capabilities in Zagreb, Split, Rijeka, Osijek and other key cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/croatia"
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
            // 🔁 swap this with your own Zagreb / Adriatic screenshot
            backgroundImage: 'url("https://images.unsplash.com/photo-1555990793-da11153b2473?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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
            Internet in Croatia
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            An EU and Schengen member on the Adriatic where dense fibre, cable
            and mobile networks connect the coast and continental core, and
            international capacity rides multiple Mediterranean cable systems.
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
                        <strong>Population:</strong> ~3.87 million (mid-2024 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Zagreb
                        (capital), Split, Rijeka, Osijek, Zadar, Pula, Dubrovnik
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Slovenia, Hungary, Serbia,
                        Bosnia and Herzegovina, Montenegro; Adriatic Sea to the
                        west
                      </li>
                      <li>
                        <strong>Languages:</strong> Croatian (official); Italian
                        and minority languages locally
                      </li>
                      <li>
                        <strong>Currency:</strong> Euro (EUR) — adopted 2023
                      </li>
                      <li>
                        <strong>EU / Schengen:</strong> EU &amp; Eurozone; joined
                        Schengen 2023
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/hr.png"
                        alt="Croatia Flag"
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
                      Croatia runs along the eastern Adriatic from Istria in the
                      north to Dubrovnik in the far south, with a continental
                      arm stretching towards Zagreb, Slavonia and the Hungarian
                      border. Zagreb is the political, financial and IT hub,
                      while Split and Rijeka anchor the coast, ports and
                      tourism, and Osijek and Slavonia serve agriculture and
                      industry in the northeast.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      As an EU member, Croatia has a relatively mature telecom
                      market. Internet penetration is above 80%, fixed
                      broadband adoption is high for the region and mobile
                      broadband use is widespread. Fibre and DOCSIS networks
                      cover most urban areas, while 4G and expanding 5G layers
                      provide nationwide data coverage. International capacity
                      is delivered via multiple submarine cables and terrestrial
                      routes through neighbouring EU states, with new Adriatic
                      systems increasing diversity and resilience.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Croatia"
                          src="https://www.google.com/maps?q=Croatia&output=embed"
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
                          Zagreb Franjo Tuđman Airport (ZAG) — main national hub
                        </li>
                        <li>
                          Split Airport (SPU) — key coastal and tourism gateway
                        </li>
                        <li>
                          Dubrovnik Airport (DBV) — Adriatic tourism and cruise
                          hub
                        </li>
                        <li>
                          Zadar Airport (ZAD) — low-cost and seasonal tourism
                        </li>
                        <li>
                          Rijeka Airport (RJK) &amp; Pula Airport (PUY) —
                          Istria / Kvarner region
                        </li>
                        <li>
                          Osijek Airport (OSI) — eastern Croatia / Slavonia
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
                        Croatia&apos;s market is led by Hrvatski Telekom (Deutsche
                        Telekom group), with A1 Hrvatska and Telemach as major
                        challengers. Fixed broadband includes VDSL, cable and
                        fast-growing FTTH footprints, especially in Zagreb and
                        coastal cities. Mobile connections significantly exceed
                        the population, with 4G ubiquitous and 5G live in the
                        main urban centres. Internet and social media adoption
                        are close to typical EU levels.
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
                                Internet Users (early 2025)
                              </td>
                              <td className="py-3 px-4">≈ 3.27 million</td>
                              <td className="py-3 px-4">
                                ~84–85% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Identities (2025)
                              </td>
                              <td className="py-3 px-4">≈ 2.68 million</td>
                              <td className="py-3 px-4">
                                ~69–70% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">
                                ≈ 4.8–5.0 million SIMs
                              </td>
                              <td className="py-3 px-4">
                                ~120–130% (multi-SIM common)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband (2023)
                              </td>
                              <td className="py-3 px-4">
                                ≈ 1.1 million lines
                              </td>
                              <td className="py-3 px-4">
                                ~28–29 per 100 inhabitants
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
                  Croatia is connected to the wider European and global internet
                  via submarine systems crossing the Adriatic Sea between Italy
                  and the Croatian coast (such as the Italy–Croatia cable and
                  newer GreenMed projects), backed by terrestrial routes through
                  Slovenia and Hungary. Domestic fibre backbones run along the
                  coast and through Zagreb and Slavonia, forming rings that tie
                  together major cities, ports and data centres.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Replace href/src with your own submarine-cable screenshot */}
                  <a
                    href="https://www.submarinecablemap.com/country/croatia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Croatia.png"
                      alt="Submarine cables and international routes serving Croatia"
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
                  Hrvatski Telekom (HT) is the incumbent and largest integrated
                  operator, with A1 Hrvatska and Telemach competing in both
                  mobile and fixed. A range of regional and municipal ISPs
                  deploy FTTH or wireless solutions in specific towns and
                  tourist areas along the Adriatic. Service levels and speeds in
                  urban zones are comparable with other EU markets, while rural
                  and island areas rely more on mobile and targeted fibre or
                  radio projects.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in Zagreb, Split, Rijeka, Osijek, Zadar & Dubrovnik",
                    "Business Broadband and FTTH for offices, hotels, marinas and resorts",
                    "4G / 5G and fixed wireless last-mile with backup and hybrid options",
                    "SLA-backed Services with 24x7 monitoring and proactive incident handling",
                    "CPE / Router supply, configuration, staging and remote management",
                    "MPLS / SD-WAN for multi-site enterprises across continental and coastal Croatia",
                    "Diverse routing via Adriatic submarine systems and terrestrial EU backbones",
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
              . We can support connectivity across Zagreb, the Adriatic coast
              and key inland corridors, subject to local infrastructure and
              last-mile feasibility.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Croatia%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2025-croatia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2025: Croatia
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Croatia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Croatia
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Telecommunications_in_Croatia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Telecommunications in Croatia
                </a>
              </li>
              <li>
                <a
                  href="https://podaci.dzs.hr/2025/en/97254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Croatian Bureau of Statistics — Population estimate 2024
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinecablemap.com/country/croatia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Cable Map — Croatia Landings
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

export default Croatia;
