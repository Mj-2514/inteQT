import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Bulgaria: React.FC = () => {
    <Helmet>
        <title>Internet in Bulgaria | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Bulgaria’s internet connectivity, fixed and mobile broadband, regional backbone routes and inte-QT service capabilities in Sofia, Plovdiv, Varna and other key cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/bulgaria"
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
            // Sofia city / Bulgaria vibe – swap with your own asset if needed
            backgroundImage:
              'url("https://i.imgur.com/pEgmyIY.jpeg")',
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
            Internet in Bulgaria
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A Black Sea and Balkan nation with strong urban broadband, dense
            fibre backbones, and competitive mobile networks linking Sofia,
            Plovdiv, Varna and key regional corridors.
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
                        <strong>Population:</strong> ~6.8 million (recent estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Southeastern Europe, Balkans
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Romania (north), Serbia &amp; North Macedonia (west), Greece &amp; Türkiye (south); Black Sea coastline to the east
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> Sofia
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Sofia, Plovdiv, Varna, Burgas, Ruse, Stara Zagora
                      </li>
                      <li>
                        <strong>Official Language:</strong> Bulgarian
                      </li>
                      <li>
                        <strong>Currency:</strong> Bulgarian Lev (BGN)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Services, manufacturing, ICT, energy, agriculture, food processing, transport &amp; logistics, tourism
                      </li>
                      <li>
                        <strong>EU &amp; NATO:</strong> Member of both the European Union and NATO
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Bulgaria links Central Europe, the Black Sea and the Eastern
                        Mediterranean via road, rail and fibre corridors. Sofia is the
                        primary political and economic hub, while Plovdiv, Varna and Burgas
                        combine industry, logistics and tourism.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/bg.png"
                        alt="Bulgaria Flag"
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
                      Bulgaria is a Southeastern European country on the Balkan
                      Peninsula with a diverse geography of mountains, plains and
                      Black Sea coast. Sofia is the main political and business centre,
                      while cities like Plovdiv, Varna, Burgas and Ruse act as key
                      industrial, logistics and tourism hubs.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The economy is driven by services, manufacturing, agriculture,
                      energy and a growing ICT sector. Strategic transport corridors
                      cross the country north–south and east–west, connecting Central
                      Europe to Türkiye, Greece and the Black Sea.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Over the last decade, Bulgaria has improved fixed and mobile
                      broadband coverage, particularly in urban areas, while rural
                      regions still rely more heavily on mobile and wireless
                      technologies. Internet usage is high among younger populations
                      and in cities.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Bulgaria&output=embed"
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
                        Bulgaria’s airports and Black Sea ports form critical
                        gateways for tourism, trade and logistics along European
                        corridors.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>Sofia Airport (SOF)</li>
                        <li>Plovdiv Airport (PDV)</li>
                        <li>Varna Airport (VAR)</li>
                        <li>Burgas Airport (BOJ)</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports (Black Sea)
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Varna</li>
                        <li>Port of Burgas</li>
                        <li>Smaller terminals along the Black Sea and Danube (e.g. Ruse)</li>
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
                        Bulgaria has a competitive fixed and mobile broadband market.
                        Urban areas benefit from high-speed fibre and cable
                        broadband, while 4G – and in many places 5G – mobile networks
                        provide wide coverage for both consumers and enterprises.
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
                                High adoption in cities; usage growing in smaller towns.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Strong in urban areas
                              </td>
                              <td className="py-3 px-4">
                                Fibre, cable and xDSL common in Sofia, Plovdiv, Varna, Burgas.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                4G nationwide; 5G in key cities
                              </td>
                              <td className="py-3 px-4">
                                Main access method in many regional and rural areas.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Available in major hubs
                              </td>
                              <td className="py-3 px-4">
                                MPLS/IP-VPN, DIA and wavelength services from leading operators.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Local ISPs and mobile operators compete aggressively on speed
                        and pricing, particularly in larger cities, helping drive
                        adoption of high-capacity services.
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
            {/* Regional & International Backbone */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Regional & International Backbone
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Bulgaria is well integrated into regional and international
                  fibre networks. Terrestrial routes connect the country to
                  Romania, Serbia, North Macedonia, Greece and Türkiye, forming
                  part of key north–south and east–west corridors between
                  Central Europe, the Black Sea and the Eastern Mediterranean.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Through neighbouring countries and Black Sea/Med landing points,
                  Bulgaria accesses major submarine cable systems that link Europe
                  with the Middle East, the Caucasus and Asia. Traffic is
                  aggregated in hubs such as Sofia, Plovdiv, Varna and Burgas.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/dzQVHJK.png"
alt="Submarine Cables Bulgaria"
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
                  The Bulgarian telecom market is served by several major mobile
                  and fixed operators, alongside regional ISPs offering fibre,
                  cable, wireless and enterprise services. Competition is strong
                  in urban areas, helping drive high-speed broadband and 5G
                  rollouts.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with leading in-country carriers and regional
                  providers to deliver managed connectivity solutions in Sofia,
                  Plovdiv, Varna, Burgas, Ruse and other strategic locations.
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
                  <strong>4–6 weeks</strong>, depending on access type, location
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
              . We support deployments in Sofia, Plovdiv, Varna, Burgas, Ruse and
              other key locations across Bulgaria.
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
              <li>World Bank — Bulgaria (ICT & connectivity indicators)</li>
              <li>Digital in Bulgaria — recent digital reports</li>
              <li>Communications Regulation Commission (CRC) of Bulgaria</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Bulgaria;
