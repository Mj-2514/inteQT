import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const BosniaAndHerzegovina: React.FC = () => {
    <Helmet>
        <title>
          Internet in Bosnia and Herzegovina | Connectivity, ISPs & Broadband
          Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of Bosnia and Herzegovina’s internet connectivity, fixed and mobile broadband, regional backbone routes and inte-QT service capabilities in Sarajevo, Banja Luka, Mostar and other key cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/bosnia-and-herzegovina"
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
            // Mostar bridge / Bosnia vibe – swap with your own asset if needed
            backgroundImage:
              'url("https://i.imgur.com/A0mOhuS.jpg")',
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
            Internet in Bosnia and Herzegovina
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A Western Balkan country with a complex geography and history —
            building out modern broadband and mobile networks across Sarajevo,
            Banja Luka, Mostar and regional corridors.
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
                        <strong>Population:</strong> ~3.2 million (recent
                        estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Western Balkans, Southeastern
                        Europe
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Croatia, Serbia, Montenegro;
                        short Adriatic coastline near Neum
                      </li>
                      <li>
                        <strong>Capital:</strong> Sarajevo
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Sarajevo, Banja Luka,
                        Mostar, Tuzla, Zenica
                      </li>
                      <li>
                        <strong>Official Languages:</strong> Bosnian, Croatian,
                        Serbian
                      </li>
                      <li>
                        <strong>Currency:</strong> Bosnia and Herzegovina
                        Convertible Mark (BAM)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Services, metal
                        processing, energy, forestry, agriculture, tourism,
                        manufacturing, IT outsourcing
                      </li>
                      <li>
                        <strong>Geography:</strong> Mostly mountainous with
                        river valleys; limited coastline
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Bosnia and Herzegovina is a middle-income country with a
                        decentralised political structure, emerging service and
                        tourism sectors, and growing demand for reliable
                        connectivity across urban centres and key transport
                        routes.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/ba.png"
                        alt="Bosnia and Herzegovina Flag"
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
                      Bosnia and Herzegovina is a Western Balkan country with a
                      diverse landscape of mountains, rivers and historic
                      cities. Sarajevo is the political and cultural capital,
                      while Banja Luka, Mostar and Tuzla serve as important
                      regional and industrial centres.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The economy is driven by services, manufacturing,
                      remittances and a growing tourism sector, with visitors
                      attracted to Sarajevo, Mostar, ski resorts and natural
                      parks. Connectivity along key corridors is critical for
                      trade, logistics and cross-border integration with
                      neighbouring EU markets.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Telecom and broadband infrastructure has improved over the
                      last decade, particularly in urban areas, though there are
                      still gaps between city and rural connectivity and
                      variation across entities and cantons.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Bosnia%20and%20Herzegovina&output=embed"
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
                  {/* Airports & Access */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Main Airports & Access Corridors
                      </h3>

                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        Bosnia and Herzegovina has several international
                        airports and relies on neighbouring countries&apos;
                        seaports for large-scale maritime trade.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>Sarajevo International Airport (SJJ)</li>
                        <li>Banja Luka International Airport (BNX)</li>
                        <li>Mostar International Airport (OMO)</li>
                        <li>Tuzla International Airport (TZL)</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Maritime Access (via Neighbouring States)
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>
                          Short coastline around Neum (limited port facilities)
                        </li>
                        <li>
                          Primary seaport access via Croatian ports (e.g. Ploče)
                        </li>
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
                        Fixed and mobile broadband coverage has expanded,
                        particularly in larger cities, while rural and
                        mountainous areas still rely more heavily on mobile and
                        wireless technologies. Several operators provide
                        fixed-line, cable and mobile broadband services across
                        entities.
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
                                High usage in urban areas; growing adoption
                                elsewhere.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Strongest in major cities
                              </td>
                              <td className="py-3 px-4">
                                xDSL, cable and some fibre in Sarajevo, Banja
                                Luka, Mostar, Tuzla.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                4G widely available; 3G fallback
                              </td>
                              <td className="py-3 px-4">
                                Primary access method in many regional and rural
                                areas.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Concentrated in larger cities
                              </td>
                              <td className="py-3 px-4">
                                Carrier and MPLS/IP-VPN solutions available for
                                multi-site customers.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        For enterprises, connectivity strategies often combine
                        fixed access in main sites with mobile or wireless
                        backup to address geography and last-mile constraints.
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
                  Bosnia and Herzegovina connects to the global internet
                  primarily through terrestrial fibre routes into neighbouring
                  Croatia, Serbia and Montenegro, where traffic is handed off to
                  larger European backbones and subsea cable landing points.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  These cross-border links provide diverse paths towards
                  regional hubs such as Zagreb, Belgrade and further onwards to
                  Vienna, Budapest and other Western and Central European
                  interconnection points.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/8b7uBo9.png"
alt="Submarine Cables Bosnia and Herzegovina"
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
                  The market is served by several national and regional
                  operators offering fixed, cable and mobile broadband. Service
                  footprints often reflect the administrative structure of the
                  country, with different providers leading in specific entities
                  and cantons.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT works with in-country and regional partners to deliver
                  managed connectivity solutions for enterprises operating in
                  Sarajevo, Banja Luka, Mostar, Tuzla and other key
                  locations.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity (4G last mile)",
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
                  Service delivery is usually possible within{" "}
                  <strong>4–6 weeks</strong>, depending on local last-mile
                  options, location and site readiness.
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
              . We support deployments in Sarajevo, Banja Luka, Mostar, Tuzla
              and other strategic locations across Bosnia and Herzegovina.
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
              <li>
                World Bank — Bosnia and Herzegovina (ICT & connectivity
                indicators)
              </li>
              <li>Digital reports on Bosnia and Herzegovina — DataReportal</li>
              <li>
                Communications Regulatory Agency of Bosnia and Herzegovina
                (RAK)
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BosniaAndHerzegovina;
