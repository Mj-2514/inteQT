import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const EastTimor: React.FC = () => {
    <Helmet>
        <title>
          Internet in East Timor (Timor-Leste) | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of Timor-Leste's internet connectivity, satellite and new submarine routes, telecom operators, broadband statistics and inte-QT service capabilities in Dili, Baucau and other key locations."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/asia/timor-leste"
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
            // 🔁 swap this with your own Dili / island screenshot
            backgroundImage: 'url("https://images.unsplash.com/photo-1591325408953-ef9298125f96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWFzdCUyMHRpbW9yfGVufDB8fDB8fHwy")',
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
            Internet in East Timor (Timor-Leste)
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A young Southeast Asian nation where a small mobile-first market,
            rugged terrain and limited infrastructure meet new subsea projects
            and growing demand for connectivity around Dili and key towns.
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
                        <strong>Official Name:</strong> Democratic Republic of Timor-Leste
                        (East Timor)
                      </li>
                      <li>
                        <strong>Population:</strong> ~1.4–1.5 million (mid-2020s est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Towns:</strong> Dili (capital),
                        Baucau, Same, Maliana, Suai, Lospalos
                      </li>
                      <li>
                        <strong>Location &amp; Neighbours:</strong> Eastern half of
                        Timor island and exclave of Oecusse; shares land border with
                        Indonesia; north of Australia across the Timor Sea
                      </li>
                      <li>
                        <strong>Languages:</strong> Tetum and Portuguese (official);
                        Indonesian and English used; many local languages
                      </li>
                      <li>
                        <strong>Currency:</strong> US dollar (USD) widely used;
                        Timorese centavo coins
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/tl.png"
                        alt="Timor-Leste Flag"
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
                      Timor-Leste occupies the eastern half of the island of Timor,
                      plus the Oecusse exclave on the north coast of Indonesian
                      West Timor and the islands of Atauro and Jaco. Dili is the
                      compact seaside capital and main economic centre, with Baucau
                      and other district towns spread across steep, mountainous
                      terrain.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Connectivity has historically relied on satellite and
                      microwave, with limited domestic fibre. Internet uptake has
                      been modest but rising as 3G/4G rollouts expand and prices
                      slowly improve. Most users access services via mobile phones
                      and small Wi-Fi hotspots in urban areas. New submarine cable
                      projects linking Timor-Leste to Indonesia and Australia aim
                      to dramatically improve international capacity and latency,
                      supporting government digitalisation and private-sector
                      services.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Timor-Leste (East Timor)"
                          src="https://www.google.com/maps?q=Timor-Leste&output=embed"
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
                          Presidente Nicolau Lobato International Airport (DIL) —
                          main international gateway serving Dili
                        </li>
                        <li>
                          Baucau Airport — long runway, currently limited / special-use
                          but seen as future international option
                        </li>
                        <li>
                          Suai Airport (XSU) — serving the south coast and Tasi Mane
                          petroleum corridor
                        </li>
                        <li>
                          Oecusse Airport — supporting the Oecusse Special Economic Zone
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
                        Timor-Leste is still an early-stage internet market. Recent
                        estimates suggest roughly{" "}
                        <span className="font-medium">35–40% internet penetration</span>,
                        with perhaps{" "}
                        <span className="font-medium">0.5–0.6 million internet users</span>{" "}
                        and around{" "}
                        <span className="font-medium">
                          1.0–1.1 million mobile connections
                        </span>{" "}
                        (multi-SIM common). Most connectivity is via 3G/4G, while
                        fixed broadband is scarce and largely limited to government,
                        NGOs and a small number of businesses and higher-income homes
                        in Dili and district centres.
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
                                ≈ 0.5–0.6 million
                              </td>
                              <td className="py-3 px-4">
                                ~35–40% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">
                                ≈ 1.0–1.1 million SIMs
                              </td>
                              <td className="py-3 px-4">
                                ~70–80% (multi-SIM usage)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Identities
                              </td>
                              <td className="py-3 px-4">
                                ≈ 0.4–0.45 million accounts
                              </td>
                              <td className="py-3 px-4">
                                ~30% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband (2024 est.)
                              </td>
                              <td className="py-3 px-4">
                                &lt; 15–20k lines
                              </td>
                              <td className="py-3 px-4">
                                &lt; 1.5 per 100 inhabitants
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
                  Historically, Timor-Leste has relied heavily on satellite
                  capacity and indirect regional links. New projects — including
                  subsea systems linking Dili to Indonesia and potentially to
                  northern Australia — are being developed to deliver direct,
                  high-capacity international connectivity. These cables will be
                  tied into a domestic backbone along the north coast and through
                  key population centres, progressively replacing microwave and
                  satellite backhaul.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Replace href/src with your own submarine-cable screenshot */}
                  <a
                    href="https://www.submarinecablemap.com/country/timor-leste"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/East-Timor.png"
                      alt="Submarine cables and international routes relevant to Timor-Leste"
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
                  The mobile and broadband market is led by operators such as{" "}
                  <span className="font-medium">Timor Telecom</span>,{" "}
                  <span className="font-medium">Telkomcel</span> and{" "}
                  <span className="font-medium">Telemor</span>, offering 2G/3G/4G
                  services and limited fixed connectivity. Much enterprise demand
                  comes from government, development agencies, NGOs, oil &amp; gas
                  projects and small business, with a growing need for reliable,
                  low-latency paths to cloud platforms in Southeast Asia and
                  Australia.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in Dili and selected district centres, subject to local feasibility",
                    "Business Internet and wireless last-mile for NGOs, government, education and enterprise sites",
                    "Hybrid satellite / LTE / microwave solutions for remote and resilience-critical locations",
                    "SLA-backed Services with 24x7 monitoring tuned to local power and backhaul constraints",
                    "CPE / Router supply, configuration, optimisation and managed lifecycle",
                    "IP-VPN / SD-WAN overlays toward regional hubs in Indonesia, Singapore and Australia",
                    "Traffic engineering over new submarine and regional routes as they become available",
                    "Managed Security, VPN, access control and basic DDoS protection at the edge",
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
              Contact us to discuss{" "}
              <mark className="bg-yellow-200 px-1 rounded">
                feasibility and commercial options
              </mark>{" "}
              in Timor-Leste. We can support connectivity in Dili and selected
              strategic sites, subject to local infrastructure, regulatory
              conditions and the status of new submarine and backbone projects.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Timor-Leste%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/East_Timor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Timor-Leste (East Timor)
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Telecommunications_in_East_Timor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Telecommunications in East Timor
                </a>
              </li>
              <li>
                <a
                  href="https://datareportal.com/digital-in-timor-leste"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital in Timor-Leste
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinenetworks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Networks — Regional Cables (Timor Sea / Indonesia)
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

export default EastTimor;
