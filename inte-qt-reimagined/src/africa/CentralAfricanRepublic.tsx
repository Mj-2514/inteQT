import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const CentralAfricanRepublic: React.FC = () => {
    <Helmet>
        <title>
          Internet in Central African Republic | Connectivity, ISPs & Broadband
          Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of Central African Republic internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Bangui, Bimbo, Berbérati, Bambari and other key locations."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/africa/central-african-republic"
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
            backgroundImage:
              'url("https://images.unsplash.com/photo-1641072906027-0e2d12120b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VudHJhbCUyMGFmcmljYW4lMjByZXB1YmxpY3xlbnwwfHwwfHx8Mg%3D%3D")',
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
            Internet in Central African Republic
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A landlocked nation of savannas, rivers, and forests — where
            bandwidth flows in from the coasts via fiber, and mobile networks
            carry most of the country’s connectivity.
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
                        <strong>Population:</strong> ~5.6 million (Oct 2025 est.)
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Cameroon, Chad, Sudan, South
                        Sudan, Democratic Republic of the Congo, Republic of the
                        Congo
                      </li>
                      <li>
                        <strong>Languages:</strong> French (official), Sango
                        (co-official, lingua franca)
                      </li>
                      <li>
                        <strong>Currency:</strong> Central African CFA franc
                        (XAF)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Bangui, Bimbo, Berbérati,
                        Carnot, Bambari, Bouar
                      </li>
                    </ul>

                    <div className="text-center mt-6 space-y-4">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/cf.png"
                        alt="Central African Republic Flag"
                        className="mx-auto rounded-lg shadow-lg border border-white/40"
                      />

                      <p className="text-[0.78rem] text-muted-foreground leading-relaxed">
                        The Central African Republic is a landlocked country in{" "}
                        Central Africa. Its capital and largest city is Bangui,
                        sitting on the Ubangi River and acting as the main hub
                        for politics, trade, and telecom infrastructure.
                      </p>
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
                      The Central African Republic (CAR) sits in the heart of
                      Africa, bordered by six countries and spanning vast
                      savanna and rainforest zones. Despite rich natural
                      resources, years of political instability and conflict
                      have held back infrastructure investment, keeping
                      connectivity levels among the lowest in the world.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Because CAR is landlocked, it has no direct access to
                      submarine cables. International capacity typically
                      backhauls over terrestrial fiber links through Cameroon,
                      the Republic of the Congo, and the Democratic Republic of
                      the Congo, all of which are connected to major West and
                      Central African cable systems. Mobile networks dominate
                      internet use, while fixed broadband remains extremely
                      limited outside Bangui and a few regional centers.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Central%20African%20Republic&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Central African Republic Map"
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
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                        CAR has a single primary international gateway in
                        Bangui, with a network of regional airfields supporting
                        humanitarian and domestic movements.
                      </p>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-sm">
                        <li>
                          Bangui — Bangui M&apos;Poko International Airport
                          (BGF)
                        </li>
                        <li>Bambari Airport (BBY)</li>
                        <li>Berbérati Airport (BBT)</li>
                        <li>Bouar Airport (BOP)</li>
                        <li>Bangassou, Bria and other regional airstrips</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Connectivity Overview
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                        Digital adoption is growing but still early stage.
                        Mobile is the primary access method, with a relatively
                        small share of the population online and an even smaller
                        share using social media. Large parts of the country
                        remain offline and underserved.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Type
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Users / Connections
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Penetration
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">2.49 million</td>
                              <td className="py-3 px-4">44.8% of population</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">670,000</td>
                              <td className="py-3 px-4">12.0%</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Social Media Users</td>
                              <td className="py-3 px-4">230,000</td>
                              <td className="py-3 px-4">4.1%</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Offline Population
                              </td>
                              <td className="py-3 px-4">~4.9 million</td>
                              <td className="py-3 px-4">88.0%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-[0.78rem] text-muted-foreground mt-3 leading-relaxed">
                        Figures for late 2025 based on Digital 2026:
                        Central African Republic (DataReportal / Kepios, UN &
                        GSMA sources).
                      </p>
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
                  Submarine Cables & Internet Backbone
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  As a landlocked country, the Central African Republic relies
                  on regional terrestrial fiber to reach submarine cable landing
                  stations in neighboring states. Routes through Cameroon, the
                  Republic of the Congo, and the Democratic Republic of the
                  Congo connect CAR to systems like WACS, ACE, and 2Africa,
                  while initiatives such as the Central African Backbone aim to
                  improve redundancy and capacity.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.africabandwidthmaps.com/?page_id=30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    {/* you’ll replace this image with your own screenshot */}
                    <img
                      src="/CentralAfrica.png"
                      alt="Regional Submarine Cables & Terrestrial Backbones – Central African Republic"
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
                  The mobile and broadband market in CAR is compact but
                  competitive, with a handful of operators driving digital
                  access, especially in and around Bangui and key regional
                  towns.
                </p>

                <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-sm mb-4">
                  <li>Orange Centrafrique (Orange CAR)</li>
                  <li>Telecel Centrafrique (Telecel CAR)</li>
                  <li>Moov Africa Centrafrique</li>
                  <li>Azur Centrafrique</li>
                  <li>Socatel (state-owned incumbent, fixed & backbone)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Layer-2 / MPLS & Private WAN",
                    "Wireless & Last-Mile Solutions",
                    "Managed CPE / Router Deployment",
                    "SLA-backed Enterprise Services",
                    "Redundant Cross-Border Routing",
                    "DDoS Protection & Traffic Scrubbing",
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
              . Our local and regional partners can deliver connectivity across
              Bangui, as well as selected routes to Bimbo, Berbérati, Bambari,
              Bouar and other strategic sites, subject to feasibility.
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
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2026-central-african-republic"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2026: Central African Republic
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Central_African_Republic"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Wikipedia — Central African Republic
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Telecommunications_in_the_Central_African_Republic"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Telecommunications in the Central African Republic
                </a>
              </li>
              <li>
                <a
                  href="https://documents1.worldbank.org/curated/en/271291649102938232/pdf/Eastern-Africa-Central-African-Backbone-SOP5-Project.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  World Bank — Central African Backbone (CAB) Programme
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

export default CentralAfricanRepublic;