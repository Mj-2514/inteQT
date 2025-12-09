import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const CzechRepublic: React.FC = () => {
    <Helmet>
        <title>
          Internet in the Czech Republic | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of the Czech Republic's internet connectivity, fibre backbones and regional routes, telecom operators, broadband statistics and inte-QT service capabilities in Prague, Brno, Ostrava, Plzeň and other key cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/czech-republic"
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
            // 🔁 swap this with your own Prague / skyline screenshot
            backgroundImage: 'url("https://images.unsplash.com/photo-1458150945447-7fb764c11a92?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3plY2glMjByZXB1YmxpY3xlbnwwfHwwfHx8Mg%3D%3D")',
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
            Internet in the Czech Republic
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A highly connected Central European EU member where dense fibre,
            cable and mobile networks cover most of the population, and traffic
            rides robust terrestrial routes into Germany, Austria, Poland and
            Slovakia.
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
                        <strong>Official Name:</strong> Czech Republic (Czechia)
                      </li>
                      <li>
                        <strong>Population:</strong> ~10.6–10.9 million (2024–25 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Prague
                        (capital), Brno, Ostrava, Plzeň, Liberec, Olomouc, Ústí
                        nad Labem
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Germany, Poland, Slovakia,
                        Austria (landlocked)
                      </li>
                      <li>
                        <strong>Languages:</strong> Czech (official); English
                        and German widely used in business
                      </li>
                      <li>
                        <strong>Currency:</strong> Czech koruna (CZK)
                      </li>
                      <li>
                        <strong>EU / Schengen:</strong> EU &amp; Schengen Area
                        member
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/cz.png"
                        alt="Czech Republic Flag"
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
                      The Czech Republic lies in the heart of Central Europe,
                      with Prague as a major cultural, financial and tech hub on
                      the Vltava River. Brno anchors the south Moravian region
                      and hosts a strong engineering and IT ecosystem, while
                      Ostrava, Plzeň and other regional cities combine industry
                      with services and logistics.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The country has one of the highest internet penetration
                      rates in Central and Eastern Europe, with more than 94% of
                      the population online and widespread use of smartphones,
                      e-commerce and cloud services. Fixed broadband includes a
                      large base of VDSL, HFC and rapidly growing FTTH
                      footprints, while 4G is ubiquitous and 5G is rolling out
                      across major cities and transport corridors. International
                      traffic is carried over multiple high-capacity terrestrial
                      routes into Germany, Austria, Slovakia and Poland, tying
                      into major European IXPs.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of the Czech Republic"
                          src="https://www.google.com/maps?q=Czech%20Republic&output=embed"
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
                          Václav Havel Airport Prague (PRG) — main international hub
                        </li>
                        <li>
                          Brno–Tuřany Airport (BRQ) — serving South Moravia
                        </li>
                        <li>
                          Leoš Janáček Airport Ostrava (OSR) — northeast / industrial region
                        </li>
                        <li>
                          Pardubice Airport (PED) — mixed civilian / charter flights
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
                        The Czech market is competitive and relatively mature.
                        O2 Czech Republic, T-Mobile Czech Republic and Vodafone
                        are the main integrated operators, with CETIN providing
                        much of the wholesale fixed infrastructure and a long
                        tail of regional ISPs and fibre players. More than 10
                        million people use the internet, and mobile
                        connections outnumber inhabitants. Fixed broadband is
                        widely available in cities and towns, with strong FTTH
                        growth and high average speeds.
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
                              <td className="py-3 px-4">≈ 10.1 million</td>
                              <td className="py-3 px-4">
                                ~94% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Identities
                              </td>
                              <td className="py-3 px-4">
                                ≈ 8.0–8.5 million accounts
                              </td>
                              <td className="py-3 px-4">
                                ~75–80% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">
                                ≈ 13–14 million SIMs
                              </td>
                              <td className="py-3 px-4">
                                ~120–130% (multi-SIM common)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband (2023–24)
                              </td>
                              <td className="py-3 px-4">
                                ≈ 4.0 million lines
                              </td>
                              <td className="py-3 px-4">
                                ~36–38 per 100 inhabitants
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

        {/* International Routes & Backbone */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  International Routes & Fibre Backbone
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Being landlocked, the Czech Republic connects to the global
                  internet entirely via terrestrial fibre routes. High-capacity
                  backbones run from Prague and Brno towards Frankfurt, Vienna,
                  Bratislava, Warsaw and other European hubs, tying into major
                  IXPs and carrier hotels. Domestic rings follow motorway and
                  rail corridors, linking regional cities and data centres with
                  multiple diverse paths to neighbouring countries.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Replace href/src with your own backbone / topology screenshot */}
                  <a
                    href="https://www.submarinecablemap.com/country/czech-rep-of"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Czechia.png"
                      alt="International fibre routes and backbone serving the Czech Republic"
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
                  O2 Czech Republic, T-Mobile Czech Republic and Vodafone Czech
                  Republic are the main nationwide operators, with CETIN acting
                  as a key wholesale fibre and copper infrastructure provider.
                  Dozens of regional ISPs and fibre builders deliver FTTH and
                  wireless access to specific towns, industrial zones and
                  business parks. Service levels and speeds in major cities are
                  comparable with Western Europe, while some rural areas still
                  rely on VDSL or fixed wireless.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in Prague, Brno, Ostrava, Plzeň and other regional cities",
                    "Business Broadband and FTTH for offices, retail parks and industrial zones",
                    "4G / 5G and fixed wireless last-mile with backup and hybrid options",
                    "SLA-backed Services with 24x7 monitoring and detailed performance reporting",
                    "CPE / Router supply, staging, configuration and managed lifecycle services",
                    "MPLS / SD-WAN for multi-site enterprises across Czechia and neighbouring EU states",
                    "Diverse routing via multiple terrestrial paths into Germany, Austria, Slovakia and Poland",
                    "Managed Security, VPN, cloud on-ramps and DDoS mitigation for critical workloads",
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
              . We can support connectivity across Prague, Brno, Ostrava, Plzeň
              and other key locations, subject to local infrastructure and
              last-mile feasibility.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Czech%20Republic%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2025-czechia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2025: Czechia
                </a>
              </li>
              <li>
                <a
                  href="https://csu.gov.cz/population-estimates-structure-and-projection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Czech Statistical Office — Population Estimates
                </a>
              </li>
              <li>
                <a
                  href="https://csu.gov.cz/digital-infrastructure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Czech Statistical Office — Digital Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="https://datareportal.com/digital-in-czechia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital in Czechia (overview)
                </a>
              </li>
              <li>
                <a
                  href="https://db-ip.com/country/CZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DB-IP — Major ISPs in Czechia
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

export default CzechRepublic;
