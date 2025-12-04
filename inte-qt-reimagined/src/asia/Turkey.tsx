import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Turkey: React.FC = () => {
    <Helmet>
        <title>Internet in Türkiye (Turkey) | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Türkiye’s (Turkey’s) internet connectivity, submarine cables, ISPs, broadband statistics and inte-QT service capabilities in Ankara, Istanbul, Antalya and key port cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/turkey"
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
            // Istanbul skyline – swap with your own asset if needed
            backgroundImage:
              'url("https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=80")',
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
            Internet in Türkiye (Turkey)
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A transcontinental nation bridging Europe and Asia — with growing
            broadband adoption, strong mobile usage, and strategic submarine
            cable connectivity across the region.
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
                        <strong>Population:</strong> ~85 million (2021)*
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Bulgaria (NW), Greece (W),
                        Armenia, Azerbaijan &amp; Iran (E), Georgia (NE), Syria
                        (S), Iraq (SE)
                      </li>
                      <li>
                        <strong>Language:</strong> Turkish (spoken in Turkey,
                        Cyprus, and communities in Europe &amp; the Middle East)
                      </li>
                      <li>
                        <strong>Currency:</strong> Turkish Lira (TRY)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Machinery, tourism,
                        textile, electronics, construction, shipbuilding,
                        automobiles, mining, steel, iron, copper, boron,
                        defence, petroleum, food processing, cotton
                      </li>
                      <li>
                        <strong>Employment Rate*:</strong> Averaged 43.43% from
                        2005 to 2021
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Ankara, Istanbul, Antalya
                      </li>
                      <li>
                        <strong>Climate:</strong> Between subtropical and
                        temperate zones; Mediterranean climate influences many
                        coastal regions
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        Turkey is officially known as the Republic of Türkiye.
                        In 2022, authorities rebranded the country&apos;s
                        international name from &quot;Turkey&quot; to
                        &quot;Türkiye&quot; to better reflect its national
                        identity and language.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        As a bridge between Europe and Asia, Türkiye has long
                        served as a crossroads for trade, culture, and modern
                        logistics networks.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/tr.png"
                        alt="Turkey Flag"
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
                      Türkiye sits at the crossroads of Europe and Asia,
                      combining a diverse industrial base with a strong services
                      and tourism sector. It is a major player in machinery,
                      textiles, automotive, construction, defence, mining, and
                      food processing, with Istanbul acting as the country&apos;s
                      primary commercial hub.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The country&apos;s geography spans Mediterranean coasts,
                      Anatolian plateaus, and Black Sea shores, resulting in a
                      mix of subtropical and temperate climates with notable
                      Mediterranean influence along the south and west.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3">
                      Tourism in Türkiye
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Turkey recorded around <strong>52 million</strong>{" "}
                      tourists in 2019*, ranking 11th globally in absolute
                      visitor numbers. Travellers are drawn to its coastal
                      resorts, historical sites, cultural heritage, and
                      city-break destinations like Istanbul, Antalya, and
                      Cappadocia.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Turkey&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ports/Airports + Connectivity */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Airports & Ports */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Main Airports & Ports
                      </h3>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Airports (Rank – Airport – IATA)
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>1. Istanbul Airport – IST</li>
                        <li>2. Sabiha Gökçen International Airport – SAW</li>
                        <li>3. Antalya Airport – AYT</li>
                        <li>4. Ankara Esenboğa Airport – ESB</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Container Ports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Haydarpaşa</li>
                        <li>Ambarlı</li>
                        <li>Izmir</li>
                        <li>Mersin</li>
                      </ul>
                      <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                        Except Ambarlı, these ports are operated by the
                        state-owned railway and ports authority (TCDD).
                      </p>
                    </CardContent>
                  </Card>

                  {/* Connectivity / Internet Access */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Connectivity & Internet Access
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        Türkiye has seen rapid growth in broadband since the
                        mid-2000s. Fixed broadband usage has expanded
                        significantly, driven by investments from Türk Telekom
                        and other operators, while mobile broadband has become
                        the primary access method for many users.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Metric
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Value
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Notes (Q3 2021*)
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Total Broadband Subscribers
                              </td>
                              <td className="py-3 px-4">87.5 million</td>
                              <td className="py-3 px-4">
                                Includes fixed and mobile broadband subs.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Broadband Users
                              </td>
                              <td className="py-3 px-4">69.7 million</td>
                              <td className="py-3 px-4">
                                ~83.4% population penetration rate.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Average Download</td>
                              <td className="py-3 px-4">30.31 Mbps</td>
                              <td className="py-3 px-4">
                                Average measured speed.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Average Upload</td>
                              <td className="py-3 px-4">8.31 Mbps</td>
                              <td className="py-3 px-4">
                                Average measured speed.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Fixed broadband growth has been supported by Türk
                        Telekom&apos;s infrastructure rollout since 2005, while
                        4G and newer mobile technologies underpin strong mobile
                        broadband adoption.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Culture: Sport & Food (compact card) */}
        <section className="pb-4">
          <div className="container mx-auto px-4 max-w-6xl">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">
                    National Sport of Türkiye
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Oil wrestling (<em>&quot;Yağlı güreş&quot;</em>) has been
                    the traditional national sport since Ottoman times, with
                    wrestlers competing covered in olive oil in open-air
                    festivals that blend sport with deep cultural heritage.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">
                    Typical Turkish Food
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Turkey&apos;s national dish is <strong>döner kebap</strong>.
                    The cuisine favors roasting and grilling, producing a wide
                    variety of kebaps and regional specialties that are popular
                    both domestically and internationally.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Submarine Cables & Our Capabilities */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* Submarine Cables */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine Cables in Türkiye
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Türkiye plays a strategic role in regional connectivity,
                  sitting at the intersection of Europe, the Middle East, and
                  the Caucasus. Several key submarine cable systems land in the
                  country, supporting international transit and domestic
                  backhaul.
                </p>

                <h3 className="font-semibold mb-3 text-lg">
                  Key Submarine Cable Systems
                </h3>
                <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                  <li>KAFOS</li>
                  <li>MedNautilus Submarine System</li>
                  <li>SeaMeWe-3</li>
                  <li>SeaMeWe-5</li>
                  <li>Turcyos-1</li>
                  <li>Turcyos-2</li>
                </ul>

                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  These systems link Türkiye with Europe, the Eastern
                  Mediterranean, and Middle Eastern hubs, enabling diverse,
                  low-latency routes for content, cloud, and enterprise traffic.
                </p>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Internet Capabilities in Türkiye
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT provides high-quality connectivity in key Turkish
                  cities including Antalya, Istanbul, Ankara, and Mersin.
                  Services are underpinned by best-in-class fibre access and
                  24/7 monitoring from our Network &amp; Security Operations
                  Center (NSOC).
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Dedicated Lines",
                    "Business Broadband",
                    "Service Level Agreements (SLA)",
                    "CPE / Router Deployment",
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

                <p className="text-muted-foreground leading-relaxed">
                  Our Global Business Solutions team can typically provide a{" "}
                  <strong>Commercial Offer in 2–3 working days</strong>. Global
                  Operations can deliver services across Türkiye within{" "}
                  <strong>6–8 weeks</strong>, depending on local access
                  conditions and site readiness.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Offer & References */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              For tailored connectivity solutions in Türkiye, contact us to
              receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">
                Commercial Offer in 2–3 working days
              </mark>
              . We support deployments in major hubs such as Antalya, Istanbul,
              Ankara, Mersin and other regions via our local partners and fibre
              footprint.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Mail from Our Site"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Turkey;
