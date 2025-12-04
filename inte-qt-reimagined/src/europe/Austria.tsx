import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Austria: React.FC = () => {
  <Helmet>
        <title>Internet in Austria | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Austria’s internet connectivity, fibre and mobile networks, ISPs, broadband statistics and inte-QT service capabilities in Vienna, Graz, Linz and other key economic regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/austria"
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
            // Vienna skyline – swap with your own asset if needed
            backgroundImage:
              'url("https://i.imgur.com/YrjxC8I.jpg")',
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
            Internet in Austria
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A high-income Central European country with strong fixed and mobile
            broadband, dense fibre backbones, and near-universal internet
            penetration supporting a diversified economy.
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
                        <strong>Population:</strong> ~9.16 million (2024)
                      </li>
                      <li>
                        <strong>Region:</strong> Landlocked country in Central
                        Europe
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Germany, Czech Republic,
                        Slovakia, Hungary, Slovenia, Italy, Switzerland,
                        Liechtenstein
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> Vienna
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Vienna, Graz, Linz,
                        Salzburg, Innsbruck
                      </li>
                      <li>
                        <strong>Official Language:</strong> German
                      </li>
                      <li>
                        <strong>Currency:</strong> Euro (EUR)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Manufacturing,
                        machinery, automotive components, tourism, financial
                        services, logistics, ICT, green technologies
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> ~95% of the
                        population online
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Austria combines Alpine regions, industrial centres and
                        cultural cities, with Vienna regularly ranking among the
                        world&apos;s most liveable cities. The country plays a
                        key role in connecting Western and Eastern European
                        markets.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/at.png"
                        alt="Austria Flag"
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
                      Austria is a highly developed Central European economy
                      with strong manufacturing, services, tourism and
                      innovation sectors. Vienna serves as a major diplomatic
                      and regional HQ hub, while cities like Graz, Linz and
                      Innsbruck support industry, logistics, education and
                      tourism.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Its location at the heart of Europe and membership in the
                      European Union make Austria an important transit and
                      distribution point between Western, Central and Eastern
                      European markets, supported by robust road, rail and
                      digital infrastructure.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Broadband and mobile connectivity are widely available,
                      with very high levels of internet usage and digital skills
                      among the population, enabling cloud, e-government and
                      advanced enterprise services.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Austria&output=embed"
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
                  {/* Airports & Logistics */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Main Airports & Logistics Hubs
                      </h3>

                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        As a landlocked country, Austria relies on airports,
                        rail and road networks for international passenger and
                        cargo flows, with seaport connectivity via neighbouring
                        countries.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>Vienna International Airport (VIE)</li>
                        <li>Salzburg Airport (SZG)</li>
                        <li>Graz Airport (GRZ)</li>
                        <li>Linz Airport (LNZ)</li>
                        <li>Innsbruck Airport (INN)</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Inland & Rail Gateways
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Vienna &amp; Linz freight terminals</li>
                        <li>Danube inland ports (e.g. Vienna, Linz)</li>
                        <li>Rail corridors towards Germany, Italy, Hungary,
                          Czech Republic &amp; Slovakia</li>
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
                        Austria has near-universal internet access, strong fixed
                        broadband coverage and high mobile usage. Fibre and
                        cable broadband are widely deployed in urban and
                        suburban areas, while 4G and 5G mobile networks provide
                        nationwide coverage for residents and businesses.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Metric
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Value (recent)
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
                                ~8.6 million users
                              </td>
                              <td className="py-3 px-4">
                                ≈95% internet penetration.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Internet Access Level
                              </td>
                              <td className="py-3 px-4">
                                ~95% of population
                              </td>
                              <td className="py-3 px-4">
                                Among the highest in Europe.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband
                              </td>
                              <td className="py-3 px-4">
                                High household coverage
                              </td>
                              <td className="py-3 px-4">
                                Fibre and DOCSIS networks in major cities and
                                towns.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Networks
                              </td>
                              <td className="py-3 px-4">
                                4G nationwide; 5G in cities
                              </td>
                              <td className="py-3 px-4">
                                Multi-operator 5G rollout across urban centres
                                and corridors.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        High-quality connectivity, strong IXPs and extensive
                        caching of global content support low-latency services
                        for enterprises and consumers.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Submarine / International Backbone & Our Capabilities */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* International & Regional Backbone */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  International & Regional Backbone
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Austria is a landlocked country but is deeply integrated into
                  the European fibre and internet backbone. Multiple
                  cross-border terrestrial fibre routes link it with Germany,
                  Italy, Czech Republic, Slovakia, Hungary, Slovenia,
                  Switzerland and Liechtenstein, providing highly redundant
                  paths to major European hubs.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Through these connections, Austria accesses major internet
                  exchanges and submarine cable landing points in neighbouring
                  countries, enabling low-latency connectivity to the rest of
                  Europe, the Americas, Africa and Asia.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/vBic44e.png"
alt="Submarine Cables Austria"
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
                  The Austrian telecom market is served by multiple major
                  operators providing fixed, mobile and enterprise services. The
                  competitive environment supports high-speed broadband, 5G
                  mobile services and an expanding ecosystem of datacenters and
                  cloud connectivity options.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT works with local and regional partners to deliver
                  enterprise-grade connectivity across Vienna, Graz, Linz,
                  Salzburg, Innsbruck and other industrial and logistics hubs.
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
              . Our teams and partners can support deployments across Vienna,
              Graz, Linz, Salzburg, Innsbruck and other key Austrian locations.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-Qt.com?subject=Mail from Our Site"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">Suggested References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>World Bank — Austria (ICT & connectivity indicators)</li>
              <li>Digital 2024: Austria — DataReportal</li>
              <li>Statistics Austria — ICT usage in households & businesses</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Austria;
