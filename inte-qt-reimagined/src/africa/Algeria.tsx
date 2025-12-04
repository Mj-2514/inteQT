import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Algeria: React.FC = () => {
    <Helmet>
        <title>
          Internet in Algeria | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Overview of Algeria’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Algiers, Oran, Constantine and other key regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/africa/algeria"
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
            // Algiers / Mediterranean coast vibe – swap to your own asset if needed
            backgroundImage:
              'url("https://i.imgur.com/Qk6TNGC.jpg")',
          }}
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1.5px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Algeria
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A hydrocarbon-driven North African economy with dense coastal
            population centers, growing fibre and mobile broadband, and national
            backbones linking Mediterranean cities to interior oil, gas and
            desert regions.
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
                        <strong>Population:</strong> ~46 million (2024 estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> North Africa, Mediterranean
                        Coast
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Tunisia (northeast), Libya
                        (east), Niger (southeast), Mali (southwest), Mauritania
                        &amp; Western Sahara (west), Morocco (northwest);
                        Mediterranean Sea (north)
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> Algiers
                      </li>
                      <li>
                        <strong>Other Major Cities:</strong> Oran, Constantine,
                        Annaba, Blida, Sétif, Batna, Béjaïa, Tlemcen
                      </li>
                      <li>
                        <strong>Official Languages:</strong> Arabic &amp; Amazigh
                        (Berber); French widely used in business and
                        administration
                      </li>
                      <li>
                        <strong>Currency:</strong> Algerian Dinar (DZD)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Oil &amp; gas,
                        petrochemicals, mining, construction, manufacturing, food
                        processing, agriculture, logistics, services
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> &gt;70% of
                        population online
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Algeria is Africa’s largest country by land area, with
                        most of its population concentrated in a narrow band
                        along the Mediterranean coast. Inland, high plateaus and
                        the Sahara dominate, shaping how fibre backbones and
                        wireless networks are engineered to link coastal metros,
                        interior towns and remote energy and mining sites.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/dz.png"
                        alt="Algeria Flag"
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
                      Algeria is a major North African economy whose public
                      finances and exports are heavily anchored in oil and gas,
                      with hydrocarbons accounting for the bulk of export
                      revenue. The government is pushing to diversify into
                      manufacturing, agriculture, logistics, services and
                      digital industries while expanding infrastructure and
                      housing in rapidly growing cities.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The country’s population and economic activity are
                      strongly concentrated in Algiers and other coastal and
                      highland cities such as Oran, Constantine, Annaba and
                      Blida. National connectivity follows this pattern, with
                      fibre rings and long-haul routes running along the
                      Mediterranean corridor and inland axes towards plateaus,
                      interior towns and southern oil and gas hubs.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Algeria’s fixed broadband and mobile markets have expanded
                      significantly in recent years. FTTH footprints continue to
                      grow, and 3G/4G mobile broadband covers the vast majority
                      of the population, with 5G deployments emerging in key
                      urban areas. These networks support cloud, collaboration,
                      e-commerce and mission-critical connectivity for energy,
                      government and enterprises.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Algeria&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Airports / Ports + Connectivity */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Airports & Ports */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Main Airports & Ports
                      </h3>

                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        Algeria’s international airports and Mediterranean ports
                        are gateways for passengers, hydrocarbons, bulk cargo
                        and containers. They anchor significant demand for
                        reliable connectivity, particularly for airline
                        operations, logistics, energy and public safety.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          Houari Boumediene Intl. Airport (ALG) — Algiers
                        </li>
                        <li>
                          Oran Es-Sénia (Ahmed Ben Bella) Intl. Airport (ORN) —
                          Oran
                        </li>
                        <li>
                          Mohamed Boudiaf Intl. Airport (CZL) — Constantine
                        </li>
                        <li>Rabah Bitat Airport (AAE) — Annaba</li>
                        <li>Soummam–Abane Ramdane Airport (BJA) — Béjaïa</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Algiers</li>
                        <li>Port of Oran</li>
                        <li>Port of Béjaïa</li>
                        <li>Port of Skikda</li>
                        <li>Port of Arzew &amp; Port of Annaba</li>
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
                        Algeria has significantly expanded digital
                        infrastructure, with tens of millions of internet users,
                        nationwide mobile broadband, and a growing base of FTTH
                        subscribers. Coastal and major inland cities benefit
                        from dense fixed networks, while smaller towns and
                        remote energy sites often rely on a mix of fixed, mobile
                        and satellite solutions.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Metric
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Status (recent)
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
                                ≈33–34 million users
                              </td>
                              <td className="py-3 px-4">
                                Internet penetration around the low–mid 70% of
                                population, with strong year-on-year growth.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Strongest in major cities &amp; towns
                              </td>
                              <td className="py-3 px-4">
                                Copper, xDSL and FTTH concentrated in Algiers,
                                Oran, Constantine, Annaba, Béjaïa and other
                                urban areas; FTTH base expanding rapidly.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                3G/4G nationwide; 5G in key cities
                              </td>
                              <td className="py-3 px-4">
                                Very high mobile penetration; 3G/4G mobile
                                broadband coverage reaches most of the
                                population and is a primary access method.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Focused on coastal belt &amp; energy corridors
                              </td>
                              <td className="py-3 px-4">
                                DIA, IP-VPN, SD-WAN and managed services for
                                energy, government, banking, logistics,
                                manufacturing and education across the coastal
                                strip and interior oil &amp; gas fields.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Network design often combines terrestrial fibre, diverse
                        coastal and inland routes, and wireless backup, to
                        mitigate risks from geography, distance, climate and
                        infrastructure constraints.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Submarine Cables & Backbone / Our Capabilities */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* Submarine Cables & National Backbone */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine Cables & National Backbone
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Algeria connects to the global internet through multiple
                  Mediterranean submarine cable systems that land at points such
                  as Algiers, Oran, Annaba and other coastal sites, linking the
                  country to Europe, the Middle East and wider international
                  routes. These systems provide essential capacity and route
                  diversity for both retail and wholesale traffic.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  International landing stations feed into national fibre
                  backbones operated by Algeria Telecom and other infrastructure
                  players. These north–south and east–west routes interconnect
                  Algiers, Oran, Constantine, Annaba, Béjaïa and numerous
                  provincial capitals, and extend towards high plateaus and
                  trans-Saharan corridors serving oil, gas and mining regions.
                </p>

                <div className="flex justify-center">
      
        <img
          src="https://i.imgur.com/vfpfvPv.png"
          alt="Submarine Cables Algeria"
          className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
        />
      
    </div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Algeria
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with leading Algerian and regional operators
                  to deliver managed connectivity solutions in Algiers, Oran,
                  Constantine, Annaba, Béjaïa, Blida and other strategic
                  locations across the coastal belt, interior plateaus and key
                  energy and industrial zones.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support sectors such as oil &amp; gas, energy,
                  manufacturing, financial services, logistics, retail,
                  education and public administration with secure, scalable
                  network and security services tailored to local and global
                  requirements.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Services</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity (4G/5G or fixed wireless last mile)",
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
                  services are generally deliverable within{" "}
                  <strong>4–6 weeks</strong>, depending on access technology,
                  region and site readiness.
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
              . We support deployments across Algiers, Oran, Constantine,
              Annaba, Béjaïa and other major cities and industrial regions in
              Algeria.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-qt.com?subject=Mail from Our Site"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">Suggested References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>World Bank / ITU — Algeria ICT &amp; internet indicators</li>
              <li>Digital 2023–2024 Algeria — internet &amp; social media data</li>
              <li>National telecom regulator and market reports</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Algeria;
