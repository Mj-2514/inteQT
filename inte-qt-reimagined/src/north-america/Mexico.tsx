import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Mexico: React.FC = () => {
    <Helmet>
        <title>Internet in Mexico | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Mexico’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Mexico City, Monterrey, Guadalajara and other regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/mexico"
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
            // Mexico City skyline – swap to your own asset if needed
            backgroundImage:
              'url("https://images.unsplash.com/photo-1534531409543-069f6204c5b4?auto=format&fit=crop&w=1600&q=80")',
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
            Internet in Mexico
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            Latin America’s second-largest economy with dense urban broadband,
            expanding fibre, and nationwide mobile networks connecting cities,
            industrial corridors and border regions.
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
                        <strong>Population:</strong> ~129 million (recent estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> North America / Latin America
                      </li>
                      <li>
                        <strong>Neighbors:</strong> United States (north),
                        Guatemala &amp; Belize (southeast); Pacific Ocean (west),
                        Gulf of Mexico &amp; Caribbean Sea (east)
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> Mexico City
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Mexico City, Guadalajara,
                        Monterrey, Puebla, Tijuana, León
                      </li>
                      <li>
                        <strong>Official Language:</strong> Spanish
                      </li>
                      <li>
                        <strong>Currency:</strong> Mexican Peso (MXN)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Manufacturing and
                        maquiladoras, automotive, electronics, oil &amp; gas,
                        mining, agriculture, logistics, tourism, services, BPO
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Mexico links North and Latin America via dense road,
                        rail and port networks. Urban and industrial corridors
                        such as Mexico City–Querétaro, Guadalajara, Monterrey,
                        Bajío and the US border regions generate strong demand
                        for high-capacity, low-latency connectivity.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/mx.png"
                        alt="Mexico Flag"
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
                      Mexico is a G20 economy with a strong manufacturing base,
                      deep integration into US and global supply chains, and a
                      growing services and technology sector. Mexico City is the
                      political and financial centre, while Monterrey,
                      Guadalajara, Tijuana and the Bajío region drive industrial
                      production, automotive, aerospace and electronics.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The population is predominantly urban, with large metro
                      areas and cross-border conurbations along the US border.
                      This geography supports dense fibre backbones and mobile
                      networks along major highways, rail lines and logistics
                      hubs.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Internet adoption has grown rapidly over the past decade.
                      Fixed broadband and 4G/4.5G mobile networks are widely
                      available in cities and towns, while rural and remote
                      areas still show coverage and quality gaps.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Mexico&output=embed"
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
                        Mexico’s international airports and seaports underpin
                        trade, tourism and logistics across both Pacific and
                        Gulf/Caribbean coasts.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>Mexico City International Airport (MEX)</li>
                        <li>Guadalajara International Airport (GDL)</li>
                        <li>Monterrey International Airport (MTY)</li>
                        <li>Cancún International Airport (CUN)</li>
                        <li>Tijuana International Airport (TIJ)</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Manzanillo (Pacific)</li>
                        <li>Port of Lázaro Cárdenas (Pacific)</li>
                        <li>Port of Veracruz (Gulf of Mexico)</li>
                        <li>Port of Altamira (Gulf of Mexico)</li>
                        <li>Other container &amp; RoRo ports along both coasts</li>
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
                        The Mexican telecom market is competitive, with multiple
                        operators providing fixed, mobile and enterprise
                        services. Urban regions and industrial corridors enjoy
                        strong fibre and mobile coverage, while some rural and
                        mountainous areas depend on 3G/4G or fixed wireless.
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
                                &gt;100 million users
                              </td>
                              <td className="py-3 px-4">
                                Majority of population online; usage highest in
                                urban and border regions.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Strong in cities &amp; towns
                              </td>
                              <td className="py-3 px-4">
                                Fibre, cable and xDSL widely deployed in major
                                metros and industrial corridors.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                4G nationwide; 4.5G/5G in key areas
                              </td>
                              <td className="py-3 px-4">
                                Primary access for many residential and SME
                                users, especially outside large cities.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Robust in major business hubs
                              </td>
                              <td className="py-3 px-4">
                                DIA, MPLS/IP-VPN, SD-WAN and wavelength
                                services available in key industrial and
                                corporate clusters.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Enterprises often mix fibre DIA at primary sites with
                        mobile or fixed wireless backup to ensure resilience
                        against local outages and last-mile challenges.
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
                  Mexico is connected to the global internet by multiple
                  submarine cable systems landing on both Pacific and
                  Gulf/Caribbean coasts, providing diverse routes to the United
                  States, Latin America and transoceanic systems.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  These landing points feed into high-capacity terrestrial
                  backbones that run through major population and industrial
                  corridors, interconnecting Mexico City, Monterrey,
                  Guadalajara, the Bajío, border cities and ports.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Regional rings, metro fibre and microwave links extend
                  connectivity to secondary cities and remote industrial sites,
                  enabling low-latency paths to cloud regions and regional IXPs.
                </p>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Mexico
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with leading Mexican carriers and regional
                  providers to deliver managed connectivity solutions in Mexico
                  City, Monterrey, Guadalajara, Querétaro, Tijuana, border
                  cities and other strategic locations nationwide.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support customers across manufacturing, automotive,
                  logistics, retail, BPO, finance, energy and public sector with
                  secure, scalable access and managed network services.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Services</h3>

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
              . We support deployments across Mexico City, Monterrey,
              Guadalajara, key industrial corridors, border regions and major
              ports.
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
              <li>World Bank / ITU — Mexico ICT indicators</li>
              <li>Digital 2024–2025 Mexico — internet &amp; mobile usage</li>
              <li>Instituto Federal de Telecomunicaciones (IFT) — regulator</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Mexico;
