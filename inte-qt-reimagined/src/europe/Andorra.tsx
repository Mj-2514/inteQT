import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Andorra: React.FC = () => {
    <Helmet>
        <title>Internet in Andorra | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Andorra’s internet connectivity, fibre routes, ISPs, broadband and mobile penetration, and inte-QT service capabilities in Andorra la Vella and other parishes."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/andorra"
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
            // Andorra la Vella – swap with your own asset if needed
            backgroundImage:
              'url("https://i.imgur.com/7n85BGJ.jpg")',
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
            Internet in Andorra
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A small, high-altitude principality in the Pyrenees — with strong
            tourism, a developed services sector, and growing broadband and
            mobile connectivity across its valleys and parishes.
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
                        <strong>Population:</strong> ~87,000 (2024–2025
                        estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Landlocked microstate in the
                        eastern Pyrenees, Southwestern Europe
                      </li>
                      <li>
                        <strong>Neighbors:</strong> France (north), Spain
                        (south)
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> Andorra la
                        Vella
                      </li>
                      <li>
                        <strong>Official Language:</strong> Catalan (Spanish,
                        French and Portuguese also widely spoken)
                      </li>
                      <li>
                        <strong>Currency:</strong> Euro (EUR)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Tourism, retail &amp;
                        duty-free trade, banking &amp; financial services,
                        construction, winter sports, real estate
                      </li>
                      <li>
                        <strong>Government:</strong> Parliamentary co-principality
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Andorra is one of Europe&apos;s smallest states by area
                        and population. Most residents live in urbanised valleys
                        across its seven parishes, with Andorra la Vella
                        recognised as the highest capital city in Europe by
                        elevation.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/ad.png"
                        alt="Andorra Flag"
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
                {/* Overview & Tourism */}
                <Card className="rounded-3xl shadow-xl border border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">
                      A Brief Overview
                    </h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Andorra, officially the Principality of Andorra, is a
                      landlocked country located in the eastern Pyrenees between
                      France and Spain. Despite its small size, it has a
                      high-income economy centred around tourism, retail,
                      banking, and services.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The capital Andorra la Vella and nearby parishes host most
                      of the population, with urban development concentrated in
                      narrow valleys surrounded by mountains. The country is
                      known for its ski resorts, duty-free shopping, and alpine
                      landscapes.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3">
                      Tourism in Andorra
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Tourism is the backbone of Andorra&apos;s economy, with
                      millions of visitors each year attracted by skiing and
                      winter sports, hiking and mountain tourism, and a strong
                      retail offering. Seasonal peaks align with the ski season
                      and summer holidays, putting strong demands on both
                      transport and connectivity infrastructure.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Andorra&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Airports/Access + Connectivity */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Access & Gateways */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Main Access Points
                      </h3>

                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        Being landlocked and mountainous, Andorra does not have
                        seaports or a large commercial airport. Access is
                        primarily via road connections to France and Spain.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Closest Major Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>Andorra–La Seu d&apos;Urgell Airport (regional)</li>
                        <li>Barcelona–El Prat Airport (Spain)</li>
                        <li>Toulouse–Blagnac Airport (France)</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Road Gateways
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>CG-1 corridor towards La Seu d&apos;Urgell (Spain)</li>
                        <li>RN-20 / N-22 corridor towards Foix &amp; Toulouse (France)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Connectivity / Internet Access */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Connectivity & Internet Access
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        Andorra has a modern telecoms infrastructure relative to
                        its size, with high internet and mobile penetration
                        rates. Fixed broadband and mobile networks support both
                        residents and a large volume of seasonal visitors.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Metric
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Status
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Notes
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">
                                Majority of population online
                              </td>
                              <td className="py-3 px-4">
                                High internet penetration relative to population
                                size.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband
                              </td>
                              <td className="py-3 px-4">
                                Widespread in urban valleys
                              </td>
                              <td className="py-3 px-4">
                                Fibre and high-speed access in Andorra la Vella
                                and main parishes.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Networks
                              </td>
                              <td className="py-3 px-4">
                                4G nationwide; 5G in key areas
                              </td>
                              <td className="py-3 px-4">
                                Strong focus on coverage along roads and ski
                                resorts.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        A single national operator model and compact geography
                        allow for efficient coverage, though traffic peaks during
                        tourism seasons require robust capacity planning.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Submarine/International Connectivity & Our Capabilities */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* International & Backbone Connectivity */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  International & Backbone Connectivity
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  As a landlocked microstate, Andorra does not host submarine
                  cable landing stations itself. Instead, it relies on
                  cross-border terrestrial fibre links into neighbouring Spain
                  and France, where it connects into larger European backbone
                  and submarine cable systems.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  These routes provide access to major hubs such as Barcelona
                  and Toulouse, delivering diverse paths to Tier-1 carriers,
                  cloud providers and internet exchanges across Western Europe.
                </p>

                <div className="flex justify-center">
      
        <img
          src="https://i.imgur.com/ryaaUDf.png"
          alt="Submarine Cables Andorra"
          className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
        />
      
    </div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Andorra
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT delivers enterprise-grade connectivity solutions
                  across Andorra, with a focus on Andorra la Vella and key
                  commercial and tourism areas. We support customers in
                  hospitality, retail, financial services, public sector and
                  international organisations requiring reliable, secure access.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity (4G/5G last mile)",
                    "Service Level Agreements (SLA)",
                    "Customer Premises Equipment (CPE) / Routers",
                    "Global Enterprise Management Solutions (GEMS)",
                    "Diverse Gateway Solutions",
                    "Distributed Denial of Service (DDoS) Protection",
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

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our Global Business Solutions team can typically provide a{" "}
                  <strong>Commercial Offer within 2–4 working days</strong>, and
                  services can usually be delivered within{" "}
                  <strong>4–6 weeks</strong>, subject to local access conditions
                  and site readiness.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Offer & References */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Contact us to receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">
                Commercial Offer in 2–4 working days
              </mark>
              . Our local and regional partners help us deliver robust
              connectivity in Andorra la Vella and surrounding parishes.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Mail from Our Site"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">Suggested References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>World Bank — Andorra (ICT & connectivity indicators)</li>
              <li>Digital 2024: Andorra — DataReportal</li>
              <li>Government of Andorra — Statistics Department</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Andorra;
