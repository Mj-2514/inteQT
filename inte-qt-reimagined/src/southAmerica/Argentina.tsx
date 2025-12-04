import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Argentina: React.FC = () => {
    <Helmet>
        <title>Internet in Argentina | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Argentina’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Buenos Aires, Córdoba, Rosario and other major regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/south-america/argentina"
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
            // Buenos Aires skyline/Obelisco – swap with your own asset if needed
            backgroundImage:
              'url("https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=1600&q=80")',
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
            Internet in Argentina
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A vast South American economy with strong urban broadband, growing
            fibre footprints and nationwide mobile networks linking the
            Pampas, Andes, Patagonia and Atlantic coast.
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
                        <strong>Population:</strong> ~46 million (recent estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> South America
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Chile (west), Bolivia &amp;
                        Paraguay (north), Brazil &amp; Uruguay (northeast);
                        Atlantic Ocean to the east
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> Buenos Aires
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Buenos Aires, Córdoba,
                        Rosario, Mendoza, La Plata, Mar del Plata
                      </li>
                      <li>
                        <strong>Official Language:</strong> Spanish
                      </li>
                      <li>
                        <strong>Currency:</strong> Argentine Peso (ARS)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Agriculture &amp;
                        agribusiness, food processing, automotive, oil &amp; gas,
                        mining, services, finance, ICT
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Argentina stretches from subtropical regions in the north
                        to Patagonia and Tierra del Fuego in the south. Most of
                        the population and economic activity is concentrated in
                        Buenos Aires and central-eastern provinces, where digital
                        connectivity and transport corridors are densest.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/ar.png"
                        alt="Argentina Flag"
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
                      Argentina is one of Latin America&apos;s largest economies,
                      with a strong agricultural base, industrial production and
                      a growing services and technology sector. Buenos Aires is
                      the primary political, financial and cultural hub, while
                      cities like Córdoba, Rosario and Mendoza anchor regional
                      industry and logistics.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The country&apos;s long north–south geography creates
                      diverse connectivity challenges — from dense metropolitan
                      networks in Buenos Aires and the Pampas to long-haul fibre
                      routes and mixed technologies in Patagonia and border
                      regions.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Internet adoption has increased steadily over the past
                      decade. Fibre and high-speed fixed broadband have expanded
                      in major cities, while 4G mobile networks cover the
                      majority of the population, with 5G starting to appear in
                      selected urban areas.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Argentina&output=embed"
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
                        Argentina relies on a network of international airports
                        and Atlantic/river ports to move people and goods across
                        South America and global markets.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          Ministro Pistarini Intl. Airport (Ezeiza, EZE) — Buenos Aires
                        </li>
                        <li>Aeroparque Jorge Newbery (AEP) — Buenos Aires</li>
                        <li>Ingeniero Aeronáutico Taravella Airport (COR) — Córdoba</li>
                        <li>Rosario Intl. Airport (ROS)</li>
                        <li>El Plumerillo Airport (MDZ) — Mendoza</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports & Inland Ports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Buenos Aires</li>
                        <li>Port of La Plata</li>
                        <li>Port of Rosario (Paraná river)</li>
                        <li>Ports of Bahía Blanca &amp; Mar del Plata</li>
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
                        Argentina has a mature telecom market with national and
                        regional operators providing fixed, mobile and enterprise
                        services. Urban centres and main corridors benefit from
                        strong fibre and mobile coverage, while rural and remote
                        areas rely more heavily on 3G/4G and fixed wireless.
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
                                Majority of population online
                              </td>
                              <td className="py-3 px-4">
                                High usage in Buenos Aires and large cities;
                                growing in smaller towns.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Strong in main metros
                              </td>
                              <td className="py-3 px-4">
                                Fibre, cable and xDSL widely deployed in Buenos
                                Aires, Córdoba, Rosario and other urban centres.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                4G nationwide; 5G emerging in key cities
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
                                Robust in main business hubs
                              </td>
                              <td className="py-3 px-4">
                                DIA, MPLS/IP-VPN, SD-WAN and wavelength services
                                for finance, industry and government.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Enterprises often combine fibre DIA at core sites with
                        wireless or multi-operator backup to manage resilience
                        across large distances and varied terrain.
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
                  Argentina connects to the global internet via South Atlantic
                  and regional submarine cable systems landing on its Atlantic
                  coast and in neighbouring countries such as Brazil and Chile.
                  These cables provide diverse routes to North America, Europe
                  and other Latin American markets.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  International capacity is aggregated in coastal and border
                  gateways, then carried inland via high-capacity terrestrial
                  fibre routes that link Buenos Aires, Rosario, Córdoba, Mendoza
                  and other provincial capitals.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/ndDSHp1.png"
alt="Submarine Cables Argentina"
className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
/>

</div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Argentina
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with leading Argentine and regional carriers
                  to deliver managed connectivity in Buenos Aires, Córdoba,
                  Rosario, Mendoza, La Plata, Mar del Plata and other strategic
                  locations nationwide.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support customers across sectors such as banking and
                  finance, manufacturing, agribusiness, logistics, retail, BPO,
                  media and public sector with secure, scalable network
                  solutions.
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
                  geography and site readiness.
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
              . We support deployments across Buenos Aires, Córdoba, Rosario,
              Mendoza, coastal hubs and other key locations in Argentina.
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
              <li>World Bank / ITU — Argentina ICT indicators</li>
              <li>Digital &amp; telecom reports for Argentina</li>
              <li>Ente Nacional de Comunicaciones (ENACOM) — regulator</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Argentina;
