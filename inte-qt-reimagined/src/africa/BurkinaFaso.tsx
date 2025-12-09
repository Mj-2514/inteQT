import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const BurkinaFaso: React.FC = () => {
    <Helmet>
        <title>
          Internet in Burkina Faso | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of Burkina Faso's internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Ouagadougou, Bobo-Dioulasso and other key cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/africa/burkina-faso"
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
            // You can swap this with your own city / skyline image
            backgroundImage:
              'url("https://i.imgur.com/C5fPqtn.jpeg")',
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
            Internet in Burkina Faso
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A landlocked Sahel nation where mobile networks dominate, fiber
            corridors link to the West African coast, and digital access is
            growing despite security and infrastructure challenges.
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
                        <strong>Population:</strong> ~24.2 million (2025 est.)
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Mali, Niger, Benin, Togo,
                        Ghana, Côte d&apos;Ivoire
                      </li>
                      <li>
                        <strong>Languages:</strong> Mooré, Bissa, Dyula, Fula
                        (official); French &amp; English as working languages;
                        dozens of other national languages
                      </li>
                      <li>
                        <strong>Currency:</strong> West African CFA franc (XOF)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Ouagadougou,
                        Bobo-Dioulasso, Koudougou, Ouahigouya, Banfora
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/bf.png"
                        alt="Burkina Faso Flag"
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
                      Burkina Faso is a landlocked country in West Africa,
                      positioned between the Sahara and the Gulf of Guinea. Its
                      capital and largest city, Ouagadougou, anchors political
                      and economic life, while Bobo-Dioulasso serves as a key
                      commercial and cultural hub in the west.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The economy remains heavily agricultural, but digital
                      infrastructure is expanding fast. Mobile penetration is
                      above 100% with tens of millions of active SIMs, while
                      internet use still lags — especially in rural areas —
                      because of affordability, power, and backhaul constraints.
                      Fiber backbone projects and regional initiatives along the
                      coastal gateways of Côte d&apos;Ivoire, Ghana and Benin
                      are gradually improving capacity and resilience.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Burkina Faso"
                          src="https://www.openstreetmap.org/export/embed.html?bbox=-6.0%2C9.0%2C3.0%2C15.5&layer=mapnik&marker=12.4%2C-1.6"
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
                          Ouagadougou International Airport (OUA) — capital
                          gateway
                        </li>
                        <li>
                          Bobo Dioulasso Airport (BOY) — secondary international
                          hub in the west
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
                        Burkina Faso&apos;s connectivity is dominated by mobile:
                        Orange, Onatel (Moov Africa) and Telecel share a market
                        with more than 29&nbsp;million active SIMs and mobile
                        teledensity around or above 120%. Fixed broadband and
                        landlines remain limited and concentrated in major
                        cities, while internet penetration is still in the 20–25%
                        range and heavily skewed toward urban users.
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
                                Internet Users (late 2025)
                              </td>
                              <td className="py-3 px-4">≈ 5.4 million</td>
                              <td className="py-3 px-4">~22–23% of population</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">
                                ≈ 29.3 million SIMs
                              </td>
                              <td className="py-3 px-4">
                                ~121% (many users have multiple SIMs)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Users
                              </td>
                              <td className="py-3 px-4">≈ 3.9 million</td>
                              <td className="py-3 px-4">
                                ~16% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Tens of thousands of lines
                              </td>
                              <td className="py-3 px-4">
                                &lt;1% — mainly business / urban
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

        {/* Submarine Cable / Backbone */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Fiber Corridors & International Capacity
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  As a landlocked state, Burkina Faso reaches the global
                  internet through terrestrial fiber corridors that connect to
                  submarine cable landing stations in neighboring coastal
                  countries such as Côte d&apos;Ivoire, Ghana and Benin. These
                  west-coast systems — including ACE, WACS, MainOne and others
                  — feed national backbones that cross the Sahel and link major
                  cities like Ouagadougou and Bobo-Dioulasso.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Replace this src with your own submarine cable / backbone screenshot */}
                  <a
                    href="https://imgur.com/GmufPsb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    >
                    <img
                    src="https://i.imgur.com/GmufPsb.png"
                    alt="Submarine and terrestrial routes serving Burkina Faso"
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
                  The telecom market is effectively a triopoly: Orange Burkina
                  Faso, Onatel (Moov Africa / FasoNet) and Telecel Faso. Orange
                  and Onatel operate nationwide mobile and fixed networks, while
                  Telecel focuses on mobile. Around these, a growing ecosystem
                  of ISPs and wireless operators provides enterprise and
                  last-mile access, particularly in Ouagadougou and
                  Bobo-Dioulasso.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband over fiber & wireless",
                    "4G / LTE last-mile and backup links",
                    "SLA-backed Services with monitoring",
                    "CPE / Router supply & management",
                    "MPLS / SD-WAN for multi-site enterprises",
                    "Diverse routing via multiple coastal gateways",
                    "Managed Security & DDoS mitigation",
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
              . We can support connectivity across Ouagadougou,
              Bobo-Dioulasso, Koudougou and other regional centers, depending
              on last-mile feasibility and security conditions.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Burkina%20Faso%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2026-burkina-faso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2026: Burkina Faso
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Burkina_Faso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Burkina Faso
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Telecommunications_in_Burkina_Faso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Telecommunications in Burkina Faso
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

export default BurkinaFaso;
