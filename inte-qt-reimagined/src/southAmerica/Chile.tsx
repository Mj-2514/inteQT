import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Chile: React.FC = () => {
    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Chile | Connectivity, ISPs & Broadband Overview",
  description:
    "Overview of Chile’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Santiago, Valparaíso, Concepción and other key regions.",
  url: "https://www.inte-qt.com/coverage/chile",

  about: {
    "@type": "Country",
    name: "Chile",

    population: {
      "@type": "QuantitativeValue",
      value: 19900000
    },

    currency: "CLP",

    inLanguage: ["Spanish"],

    capital: {
      "@type": "City",
      name: "Santiago"
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: -35.6751,
      longitude: -71.5430
    },

    containsPlace: [
      { "@type": "City", name: "Santiago" },
      { "@type": "City", name: "Valparaíso" },
      { "@type": "City", name: "Viña del Mar" },
      { "@type": "City", name: "Concepción" },
      { "@type": "City", name: "Antofagasta" },
      { "@type": "City", name: "Temuco" }
    ],

    neighboringCountry: [
      { "@type": "Country", name: "Peru" },
      { "@type": "Country", name: "Bolivia" },
      { "@type": "Country", name: "Argentina" }
    ]
  },

  mentions: [
    {
      "@type": "Airport",
      name: "Arturo Merino Benítez International Airport",
      iataCode: "SCL"
    },
    {
      "@type": "Airport",
      name: "Carriel Sur Airport",
      iataCode: "CCP"
    },
    {
      "@type": "Airport",
      name: "Andrés Sabella Gálvez International Airport",
      iataCode: "ANF"
    },
    {
      "@type": "Airport",
      name: "La Araucanía Airport",
      iataCode: "ZCO"
    },
    {
      "@type": "Airport",
      name: "El Tepual International Airport",
      iataCode: "PMC"
    }
  ],

  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.inte-qt.com/#website"
  },

  publisher: {
    "@type": "Organization",
    "@id": "https://www.inte-qt.com/#organization"
  }
};

  return (
    <>
      <Helmet>
      <title>Internet in Chile | Connectivity, ISPs & Broadband Overview</title>

      <meta
        name="description"
        content="Overview of Chile’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Santiago, Valparaíso, Concepción and other key regions."
      />

      <link
        rel="canonical"
        href="https://www.inte-qt.com/coverage/chile"
      />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>

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
            // Santiago / Andes vibe – swap to your own asset if needed
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
            Internet in Chile
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A Pacific-facing South American economy with advanced broadband,
            high internet adoption and long-haul backbones connecting desert
            mining hubs, central valleys and Patagonia.
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
                        <strong>Population:</strong> ~19.9 million (2023 estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> South America, Pacific Coast
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Peru (north), Bolivia (northeast), Argentina (east); Pacific Ocean (west)
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> Santiago
                      </li>
                      <li>
                        <strong>Other Major Cities:</strong> Valparaíso, Viña del Mar, Concepción, Antofagasta, Temuco
                      </li>
                      <li>
                        <strong>Official Language:</strong> Spanish
                      </li>
                      <li>
                        <strong>Currency:</strong> Chilean Peso (CLP)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Mining (copper, lithium), agriculture &amp; wine, forestry, fisheries, manufacturing, financial services, ICT, tourism
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> &gt;90% of population online
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Chile stretches over 4,000 km from the Atacama Desert in
                        the north to Patagonia and the glaciers of the far south.
                        Most of the population and economic activity is
                        concentrated in the central region around Santiago and
                        coastal cities like Valparaíso, shaping how backbones and
                        last-mile connectivity are deployed.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/cl.png"
                        alt="Chile Flag"
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
                      Chile is a high-income South American economy known for
                      its stable institutions, strong mining sector, export-led
                      agriculture, and growing services and technology industries.
                      Santiago is the financial and administrative core, while
                      Valparaíso, Concepción, Antofagasta and other cities anchor
                      port, industrial and mining activity.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Its long, narrow geography means that national connectivity
                      is built along north–south corridors, with dense metro
                      networks in central regions and extended fibre and
                      microwave routes towards the far north and south. This has
                      helped Chile achieve one of the highest internet adoption
                      rates in Latin America.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Broadband and mobile networks are advanced by regional
                      standards, with widespread fixed broadband in cities and
                      4G/5G mobile coverage across much of the populated
                      territory, supporting cloud, content delivery and
                      enterprise workloads.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Chile&output=embed"
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
                        Chile’s international airports and Pacific ports are key
                        gateways for mining exports, container traffic and
                        tourism, and they anchor much of the country’s demand
                        for high-availability connectivity.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          Arturo Merino Benítez Intl. Airport (SCL) — Santiago
                        </li>
                        <li>Carriel Sur Airport (CCP) — Concepción</li>
                        <li>Andrés Sabella Airport (ANF) — Antofagasta</li>
                        <li>La Araucanía Airport (ZCO) — Temuco</li>
                        <li>El Tepual Airport (PMC) — Puerto Montt</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Valparaíso</li>
                        <li>Port of San Antonio</li>
                        <li>Port of San Vicente / Talcahuano</li>
                        <li>Ports of Antofagasta &amp; Iquique (mining exports)</li>
                        <li>Ports in Puerto Montt and southern regions</li>
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
                        Chile has one of the highest internet penetration rates
                        in Latin America, with a mature broadband market and
                        extensive 4G/5G mobile coverage. Urban and central
                        regions benefit from dense fibre and HFC networks, while
                        more remote areas use a mix of fixed, mobile and
                        satellite solutions.
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
                                ≈17–18 million users
                              </td>
                              <td className="py-3 px-4">
                                Internet penetration above 90% of the population.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Strong in major cities &amp; towns
                              </td>
                              <td className="py-3 px-4">
                                Fibre and high-speed cable widely deployed in
                                Santiago, Valparaíso, Concepción and other hubs.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                4G nationwide; 5G in key cities
                              </td>
                              <td className="py-3 px-4">
                                High smartphone adoption; mobile is a primary
                                access method for many users.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Concentrated in central &amp; mining regions
                              </td>
                              <td className="py-3 px-4">
                                DIA, IP-VPN, SD-WAN and managed services for
                                finance, mining, manufacturing and government.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Network designs often combine terrestrial fibre with
                        diverse routes and wireless backup to mitigate risks
                        from geography, distance and seismic activity.
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
                  Chile is connected to the global internet via multiple Pacific
                  submarine cable systems that land along its coastline and link
                  it to North America and other Latin American countries. New
                  projects are extending capacity and providing more diverse
                  routes for international traffic.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  These landing stations feed into north–south terrestrial
                  backbones that follow the central valley and coastal corridors,
                  interconnecting Santiago, Valparaíso, Concepción, Temuco,
                  Puerto Montt and northern mining regions such as Antofagasta
                  and Iquique.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Regional and metro rings support datacentres, internet
                  exchanges and cloud on-ramps, enabling low-latency paths to
                  global platforms and regional peers.
                </p>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Chile
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with leading Chilean and regional operators to
                  deliver managed connectivity solutions in Santiago,
                  Valparaíso/Viña del Mar, Concepción, Antofagasta, Temuco,
                  Puerto Montt and other strategic locations across the country.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support sectors such as mining, energy, manufacturing,
                  financial services, logistics, retail, education and public
                  sector with secure, scalable network and security services.
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
              . We support deployments across Santiago, Valparaíso, Concepción,
              northern mining regions and southern cities in Chile.
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
              <li>World Bank / ITU — Chile ICT &amp; internet indicators</li>
              <li>Digital 2023–2024 Chile — internet &amp; social media data</li>
              <li>National telecom regulator and market reports</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Chile;
