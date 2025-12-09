import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Djibouti: React.FC = () => {
    <Helmet>
        <title>
          Internet in Djibouti | Connectivity, ISPs & Submarine Cable Hub
        </title>
        <meta
          name="description"
          content="Detailed overview of Djibouti's internet connectivity, submarine cable landings, terrestrial routes, telecom operators, broadband statistics and inte-QT service capabilities in Djibouti City and other key locations."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/africa/djibouti"
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
            // 🔁 swap this with your own Djibouti City / port screenshot
            backgroundImage: 'url("https://images.unsplash.com/photo-1544704325-8c4f82787278?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGppYm91dGl8ZW58MHx8MHx8fDI%3D")',
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
            Internet in Djibouti
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A strategic Horn of Africa hub at the entrance to the Red Sea, where
            more than a dozen submarine cables land and power regional internet
            traffic into East Africa and the Middle East.
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
                        <strong>Official Name:</strong> Republic of Djibouti
                      </li>
                      <li>
                        <strong>Population:</strong> ~1.18 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main City:</strong> Djibouti City
                        (capital and largest city)
                      </li>
                      <li>
                        <strong>Other Towns:</strong> Ali Sabieh, Tadjoura,
                        Obock, Dikhil
                      </li>
                      <li>
                        <strong>Location &amp; Neighbours:</strong> Horn of
                        Africa, at the Bab-el-Mandeb strait; borders Eritrea,
                        Ethiopia and Somalia; coastline on the Red Sea &amp;
                        Gulf of Aden
                      </li>
                      <li>
                        <strong>Languages:</strong> Arabic &amp; French
                        (official); Somali &amp; Afar widely spoken
                      </li>
                      <li>
                        <strong>Currency:</strong> Djiboutian franc (DJF)
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/dj.png"
                        alt="Djibouti Flag"
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
                      Djibouti sits at one of the world&apos;s most strategic
                      maritime chokepoints: the Bab-el-Mandeb Strait, linking
                      the Red Sea and Suez Canal with the Gulf of Aden and the
                      wider Indian Ocean. Djibouti City is the political and
                      economic centre, hosting the main ports, logistics parks,
                      free zones and foreign military bases.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      This geography also makes Djibouti a regional digital
                      hub. A large cluster of submarine cables land on its
                      coast, and Djibouti Telecom operates several cable landing
                      stations and a growing data centre ecosystem. Domestically,
                      the market is small and low-income, with a strong focus on
                      wholesale transit and regional backhaul. Most end users
                      rely on mobile broadband, with fixed broadband
                      concentrated in Djibouti City and a few urban centres.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Djibouti"
                          src="https://www.google.com/maps?q=Djibouti&output=embed"
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
                          Djibouti–Ambouli International Airport (JIB) — main
                          international gateway for Djibouti City
                        </li>
                        <li>
                          Chabelley Airfield — mainly military and logistics use
                        </li>
                        <li>
                          Regional and airstrip facilities linked to port and
                          logistics activities
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
                        For a small country, Djibouti has relatively strong
                        headline internet indicators thanks to its role as a
                        transit hub. Around two-thirds of the population are
                        online, with roughly{" "}
                        <span className="font-medium">765k</span> internet users
                        and an internet penetration rate of about{" "}
                        <span className="font-medium">65%</span> as of 2025.
                        Social media usage is lower but rising, with roughly{" "}
                        <span className="font-medium">215k</span> identities
                        (≈18% penetration). Mobile networks are the main last
                        mile, while fixed broadband remains limited and
                        primarily urban, government and enterprise-focused.
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
                                Internet Users (start 2025)
                              </td>
                              <td className="py-3 px-4">≈ 765,000</td>
                              <td className="py-3 px-4">
                                ~65% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Identities
                              </td>
                              <td className="py-3 px-4">≈ 215,000</td>
                              <td className="py-3 px-4">
                                ~18% of population
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
                                ~85–95% (multi-SIM growing)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband (2024–25 est.)
                              </td>
                              <td className="py-3 px-4">
                                &lt; 30–40k lines
                              </td>
                              <td className="py-3 px-4">
                                &lt; 3–4 per 100 inhabitants
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
                  Djibouti is one of Africa&apos;s most important submarine
                  cable hubs. More than a dozen cables land at Djibouti Telecom
                  cable landing stations, including systems such as AAE-1,
                  SEACOM, EASSy, EIG, SMW3, SMW5, ADEN–Djibouti, DARE1 and the
                  2Africa cable. These cables link Europe, the Middle East and
                  Asia, with Djibouti acting as a key interconnection point for
                  Ethiopia, Somalia and the wider region via terrestrial
                  backhaul.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Replace href/src with your own submarine-cable screenshot */}
                  <a
                    href="https://www.submarinecablemap.com/country/djibouti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Djibouti.png"
                      alt="Submarine cables and international routes serving Djibouti"
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
                  Djibouti Telecom is the dominant operator, owning the cable
                  landing stations, domestic backbone and most last-mile
                  infrastructure. The country&apos;s strategy is strongly
                  focused on positioning Djibouti City as a regional hub for IP
                  transit, colocation and interconnection, serving traffic to
                  and from East Africa and the Arabian Peninsula. Retail
                  services for local households and SMEs are mainly mobile data
                  and limited fixed broadband offers in urban areas.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) and IP transit in Djibouti City data centres and carrier hotels",
                    "Enterprise Internet and VPN services for ports, free zones, logistics parks and embassies",
                    "Last-mile options via fibre, microwave and 4G/LTE where available",
                    "SLA-backed Services with 24x7 NOC monitoring and regional escalation paths",
                    "CPE / Router procurement, staging, configuration and managed lifecycle",
                    "Layer-3 VPNs and SD-WAN overlays toward Ethiopia, Somalia and regional sites",
                    "Diverse routing across multiple submarine cable systems and terrestrial backhaul",
                    "Managed Security, VPN termination, firewalling and DDoS mitigation at regional edge points",
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
              . We can support connectivity in Djibouti City and selected
              strategic sites, including ports, free zones, data centres and
              cross-border backhaul, subject to local infrastructure and
              regulatory feasibility.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Djibouti%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2025-djibouti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2025: Djibouti
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Djibouti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Djibouti
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinenetworks.com/en/stations/africa/djibouti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Networks — Djibouti Cable Landings
                </a>
              </li>
              <li>
                <a
                  href="https://datareportal.com/digital-in-djibouti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital in Djibouti (Overview)
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

export default Djibouti;
