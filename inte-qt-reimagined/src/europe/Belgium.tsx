import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Belgium: React.FC = () => {
    <Helmet>
        <title>Internet in Belgium | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Belgium’s internet connectivity, fixed and mobile broadband, international backbone routes and inte-QT service capabilities in Brussels, Antwerp, Ghent and other key regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/belgium"
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
            // Brussels Grand Place – swap with your own asset if needed
            backgroundImage:
              'url("https://i.imgur.com/RDZ3GT5.jpg")',
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
            Internet in Belgium
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A highly connected Western European country with strong fixed and
            mobile broadband, dense fibre backbones, and a central role in EU
            and international networks.
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
                        <strong>Population:</strong> ~11.7 million (recent
                        estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Western Europe
                      </li>
                      <li>
                        <strong>Neighbors:</strong> France, Netherlands,
                        Germany, Luxembourg; North Sea coastline
                      </li>
                      <li>
                        <strong>Capital &amp; EU Hub:</strong> Brussels
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Brussels, Antwerp, Ghent,
                        Charleroi, Liège
                      </li>
                      <li>
                        <strong>Official Languages:</strong> Dutch, French,
                        German
                      </li>
                      <li>
                        <strong>Currency:</strong> Euro (EUR)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Services &amp; finance,
                        logistics, chemicals, food processing, manufacturing,
                        port &amp; maritime services, EU &amp; NATO
                        institutions, ICT
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> Very high
                        (majority of population online)
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Belgium lies at the heart of Western Europe, combining
                        dense urban areas, one of Europe&apos;s largest ports,
                        and a major concentration of international institutions
                        in Brussels. Its strategic location underpins strong
                        transport and digital connectivity.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/be.png"
                        alt="Belgium Flag"
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
                      Belgium is a highly developed, service-oriented economy
                      with an important manufacturing and logistics base.
                      Brussels serves as the capital of both Belgium and the
                      European Union, hosting EU institutions, NATO, and many
                      multinational headquarters.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The country&apos;s location and transport corridors make
                      it a key hub for trade, finance, and data connectivity
                      between the UK, France, the Netherlands, Germany and
                      beyond. Ports such as Antwerp-Bruges and dense rail/road
                      networks support large-scale cargo and container flows.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Fixed and mobile broadband are widely available, with high
                      levels of internet adoption in households and businesses.
                      This underpins a strong digital ecosystem, including data
                      centres, cloud connectivity, and enterprise-grade network
                      solutions.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Belgium&output=embed"
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
                        Belgium&apos;s air and sea gateways form a critical
                        link in European supply chains, with Brussels and
                        Antwerp-Bruges acting as major passenger and freight
                        hubs.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>Brussels Airport (BRU)</li>
                        <li>Brussels South Charleroi Airport (CRL)</li>
                        <li>Antwerp International Airport (ANR)</li>
                        <li>Liège Airport (LGG)</li>
                        <li>Ostend–Bruges International Airport (OST)</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports & Inland Ports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Antwerp-Bruges (one of Europe&apos;s largest)</li>
                        <li>North Sea Port (Ghent area)</li>
                        <li>Port of Zeebrugge (container &amp; RoRo)</li>
                        <li>Port of Liège (major inland waterway port)</li>
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
                        Belgium has an advanced telecoms market with strong
                        fixed broadband and mobile coverage. Cable and fibre
                        broadband dominate the fixed market, while 4G and 5G
                        mobile networks provide high-speed connectivity across
                        urban and most suburban areas.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Metric
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Status (approx.)
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
                                Majority of population
                              </td>
                              <td className="py-3 px-4">
                                High penetration in households and businesses.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband
                              </td>
                              <td className="py-3 px-4">
                                Widespread coverage
                              </td>
                              <td className="py-3 px-4">
                                Cable &amp; fibre prevalent in cities and towns.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Networks
                              </td>
                              <td className="py-3 px-4">
                                4G nationwide; 5G in major areas
                              </td>
                              <td className="py-3 px-4">
                                Strong competition across operators.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Robust carrier &amp; datacenter presence
                              </td>
                              <td className="py-3 px-4">
                                Multiple IXPs and cloud on-ramps in/near
                                Brussels and Antwerp.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        High-quality connectivity and extensive caching of
                        global content support low-latency services for finance,
                        logistics, media, and cloud-based applications.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Backbone & Our Capabilities */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* International & Regional Backbone */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  International & Backbone Connectivity
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Belgium is deeply integrated into the Western European fibre
                  backbone. Multiple terrestrial fibre routes connect it with
                  France, the Netherlands, Germany, Luxembourg and the UK (via
                  neighbouring cable landing points), ensuring diverse,
                  high-capacity paths.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Through its coastal region and proximity to North Sea cable
                  landings, Belgium also benefits from direct and near-direct
                  access to subsea systems linking the UK, Scandinavia and other
                  European hubs. Traffic is then distributed via dense metro and
                  national backbones into Brussels, Antwerp, Ghent and other
                  cities.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/6SaBrlx.png"
alt="Submarine Cables Belgium"
className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
/>

</div>
              </CardContent>
            </Card>

            {/* ISPs & Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Internet Providers & Our Capabilities
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The Belgian market features several major operators delivering
                  fixed, mobile and enterprise services, including deep cable
                  and fibre footprints and 5G deployments across urban areas.
                  Competition between providers supports high speeds and
                  reliable connectivity.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT works with local and regional partners to deliver
                  enterprise-grade connectivity in Brussels, Antwerp, Ghent,
                  Liège, Charleroi and other industrial and logistics hubs
                  across the country.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

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
                  <strong>Commercial Offer within 2–4 working days</strong>.
                  Service delivery is usually achievable within{" "}
                  <strong>4–6 weeks</strong>, depending on access type,
                  location, and site readiness.
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
              . Our teams and partners can support deployments across Brussels,
              Antwerp, Ghent, Liège, Charleroi and other Belgian locations.
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
              <li>World Bank — Belgium (ICT & connectivity indicators)</li>
              <li>Digital 2024: Belgium — DataReportal</li>
              <li>Belgian Institute for Postal Services and Telecommunications (BIPT)</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Belgium;
