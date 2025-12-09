import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Brunei: React.FC = () => {
    <Helmet>
        <title>
          Internet in Brunei | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of Brunei's internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Bandar Seri Begawan, Kuala Belait and other key urban centers."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/asia/brunei"
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
            // Public-domain photo of Omar Ali Saifuddien Mosque (Brunei)
            backgroundImage:
              'url("https://i.imgur.com/SMn6Dub.jpeg")',
          }}
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1.5px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Brunei
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A small, energy-rich sultanate on Borneo&apos;s coast — with
            near-universal internet usage, modern fiber networks, and ambitions
            to be a regional digital hub.
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
                        <strong>Population:</strong> ~466,000 (2025 est.)
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Malaysia (Sarawak); coastline
                        on the South China Sea
                      </li>
                      <li>
                        <strong>Languages:</strong> Malay (official), English,
                        Chinese, indigenous languages
                      </li>
                      <li>
                        <strong>Currency:</strong> Brunei dollar (BND)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Bandar Seri Begawan,
                        Kuala Belait, Seria, Tutong
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/bn.png"
                        alt="Brunei Flag"
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
                      Brunei Darussalam is an Islamic sultanate on the northern
                      coast of Borneo, almost entirely surrounded by Malaysia
                      and open to the South China Sea. Its prosperity is driven
                      by oil and gas, high per-capita income, and a small but
                      urbanised population anchored around Bandar Seri Begawan.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Digitally, Brunei is unusual for the region: internet
                      usage is close to universal, mobile penetration exceeds
                      100%, and a single wholesale network operator
                      (Unified National Networks, UNN) provides a modern fiber
                      backbone shared by three retail telcos — DST, imagine and
                      Progresif. Submarine cables land directly on Brunei&apos;s
                      shores, giving the country multiple international routes.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Brunei"
                          src="https://www.openstreetmap.org/export/embed.html?bbox=114.0%2C4.0%2C115.3%2C5.3&layer=mapnik&marker=4.5%2C114.67"
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
                          Brunei International Airport — Bandar Seri Begawan
                        </li>
                        <li>Anduki Airfield — Seria (industrial / charter)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Connectivity Overview
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Brunei runs on a modern, highly consolidated telecom
                        model: UNN manages national infrastructure, while DST,
                        imagine and Progresif compete on retail services.
                        Internet adoption is among the highest in Southeast
                        Asia, supported by extensive fiber rollouts and several
                        international submarine cables.
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
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                49,452 subscriptions (2020)
                              </td>
                              <td className="py-3 px-4">
                                Widespread in urban areas
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Cellular</td>
                              <td className="py-3 px-4">
                                603,486 subscriptions (2021)
                              </td>
                              <td className="py-3 px-4">
                                ~118% (multiple SIMs common)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">
                                410,800 users (2019)
                              </td>
                              <td className="py-3 px-4">
                                ~99% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Landline</td>
                              <td className="py-3 px-4">
                                122,204 lines (2022)
                              </td>
                              <td className="py-3 px-4">
                                Limited vs. mobile usage
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

        {/* Submarine Cable */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine Cables & Internet Backbone
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Unlike landlocked states, Brunei connects directly to the
                  global internet via multiple submarine cable systems, landed
                  at Tungku and Telisai cable stations. Systems such as AAG,
                  SJC, SEA-ME-WE 3 and the Labuan–Brunei Cable provide
                  diversified routes to Asia, the US and beyond, supporting
                  Brunei&apos;s role as a regional connectivity node on Borneo.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/brunei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="https://i.imgur.com/YplTTNX.png"
                      alt="Global Submarine Cable Map"
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
                  Retail connectivity in Brunei is delivered by three main
                  operators: Datastream Digital (DST), imagine, and Progresif.
                  Underneath, Unified National Networks (UNN) operates a single
                  wholesale infrastructure, aggregating fiber, mobile and
                  international capacity into a unified platform.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless & 4G/5G Connectivity",
                    "SLA-backed Services",
                    "CPE / Router Deployment",
                    "Global Enterprise Management",
                    "Diverse Gateway Routing via regional hubs",
                    "DDoS Protection & Traffic Engineering",
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
              . Our local partners can deliver connectivity across Bandar Seri
              Begawan, Kuala Belait, Seria, Tutong and key industrial zones,
              subject to last-mile feasibility.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Mail from Our Site"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://data.worldbank.org/country/brunei-darussalam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  World Bank — Brunei Darussalam
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Telecommunications_in_Brunei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Telecommunications in Brunei
                </a>
              </li>
              <li>
                <a
                  href="https://unn.com.bn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Unified National Networks (UNN)
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

export default Brunei;
