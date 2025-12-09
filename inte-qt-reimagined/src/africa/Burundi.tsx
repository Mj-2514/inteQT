import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Burundi: React.FC = () => {
    <Helmet>
        <title>
          Internet in Burundi | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of Burundi's internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Gitega, Bujumbura and other key cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/africa/burundi"
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
            // swap this with your own hero screenshot if you want
            backgroundImage:
              'url("https://i.imgur.com/uGzREJd.jpeg")',
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
            Internet in Burundi
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A dense, landlocked nation in the Great Lakes region — where mobile
            networks drive connectivity, fiber follows trade routes to the
            coast, and digital access is growing from a very low baseline.
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
                        <strong>Population:</strong> ~14.4 million (2025 est.)
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Rwanda, Tanzania, DR Congo
                      </li>
                      <li>
                        <strong>Languages:</strong> Kirundi, French, English;
                        Swahili widely used in trade
                      </li>
                      <li>
                        <strong>Currency:</strong> Burundian franc (BIF)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Gitega (capital),
                        Bujumbura, Ngozi, Muyinga, Rumonge
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/bi.png"
                        alt="Burundi Flag"
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
                      Burundi is a compact, landlocked country in East Africa&apos;s
                      Great Lakes region. Politically, Gitega is the capital,
                      while Bujumbura on Lake Tanganyika remains the main
                      commercial and logistics hub. Most of the population lives
                      in rural areas and depends on subsistence agriculture,
                      which shapes both infrastructure deployment and demand.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The digital landscape is evolving from a very low base.
                      Mobile connectivity is widespread compared with fixed
                      infrastructure, but internet adoption is still limited:
                      millions remain offline due to affordability constraints,
                      power issues and gaps in rural coverage. Recent backbone
                      projects and cross-border fiber links into Tanzania, Rwanda
                      and the DRC are steadily improving international capacity
                      and regional integration.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Burundi"
                          src="https://www.openstreetmap.org/export/embed.html?bbox=28.8%2C-4.7%2C31.0%2C-2.0&layer=mapnik&marker=-3.43%2C29.92"
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
                          Bujumbura Melchior Ndadaye International Airport (BJM)
                          — primary international gateway
                        </li>
                        <li>Gitega Airport — domestic / regional</li>
                        <li>Kirundo Airport — small regional airfield</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Connectivity Overview
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Burundi&apos;s telecom market is driven by mobile. At the
                        end of 2025 there were about 8.8 million mobile
                        connections in the country (many users holding multiple
                        SIMs), while only around 11% of the population was
                        online. Fixed broadband is still rare and concentrated in
                        Bujumbura and a few provincial towns; mobile broadband
                        and 4G expansion by operators like Lumitel and Econet Leo
                        do the heavy lifting for data.
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
                              <td className="py-3 px-4">≈ 1.6 million</td>
                              <td className="py-3 px-4">
                                ~11% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">
                                ≈ 8.8 million SIMs
                              </td>
                              <td className="py-3 px-4">
                                ~61 per 100 people
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Users
                              </td>
                              <td className="py-3 px-4">≈ 1.2 million IDs</td>
                              <td className="py-3 px-4">
                                ~8% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Very limited (tens of thousands of lines)
                              </td>
                              <td className="py-3 px-4">
                                &lt;1% — mostly urban / enterprise
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

        {/* Submarine / Terrestrial Backbone */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Regional Fiber Routes & International Capacity
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Being landlocked, Burundi has no direct submarine cable
                  landings. Instead, it relies on terrestrial fiber corridors
                  that connect into cable landing stations in Tanzania, Kenya,
                  and other coastal neighbours. Projects such as the Burundi
                  Backbone System (BBS) and cross-border links into Tanzania and
                  Rwanda carry traffic from Gitega and Bujumbura to systems like
                  EASSy and SEACOM on the Indian Ocean coast.
                </p>

                <div className="flex justify-center">
                  {/* Replace href/src with your own screenshot if you prefer */}
                  <a
                    href="https://i.imgur.com/GmufPsb.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="https://i.imgur.com/yVhDYfd.png"
                      alt="Regional fiber routes and submarine connectivity serving Burundi"
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
                  The mobile market is dominated by Lumitel, Econet Leo and
                  ONATEL/Onamob. These operators provide nationwide 2G/3G/4G
                  coverage along main corridors, with Lumitel in particular
                  pushing LTE coverage. Fixed and enterprise services are
                  offered via ONATEL and a small number of ISPs using fiber,
                  microwave and VSAT, mainly around Bujumbura and Gitega.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) over fiber & microwave",
                    "Business Broadband and SME access",
                    "4G / LTE last-mile with backup options",
                    "SLA-backed Services with proactive monitoring",
                    "CPE / Router deployment & lifecycle management",
                    "MPLS / SD-WAN for multi-site networks",
                    "Diverse routing via multiple regional gateways",
                    "Managed Security, VPN and DDoS mitigation",
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
              . We can support connectivity across Gitega, Bujumbura, Ngozi,
              Muyinga and other regional centres, subject to last-mile
              feasibility and security conditions.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Burundi%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2026-burundi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2026: Burundi
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Burundi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Burundi
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Communications_in_Burundi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Communications in Burundi
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

export default Burundi;
