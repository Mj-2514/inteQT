import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Barbados: React.FC = () => {
    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Barbados | Connectivity, ISPs & Broadband Overview",
  description:
    "Overview of Barbados’s internet connectivity, broadband and mobile adoption, submarine cable systems, and inte-QT service capabilities in Bridgetown, Speightstown, Oistins and other key locations.",
  url: "https://www.inte-qt.com/coverage/north-america/barbados",
  about: {
    "@type": "Country",
    name: "Barbados",
    capital: {
      "@type": "City",
      name: "Bridgetown"
    },
    officialLanguage: "English",
    currency: "BBD",
    population: {
      "@type": "QuantitativeValue",
      value: 281000
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.1939,
      longitude: -59.5432
    }
  },
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
  <title>Internet in Barbados | Connectivity, ISPs & Broadband Overview</title>

  <meta
    name="description"
    content="Overview of Barbados’s internet connectivity, broadband and mobile adoption, submarine cable systems, and inte-QT service capabilities in Bridgetown, Speightstown, Oistins and other key locations."
  />

  <link
    rel="canonical"
    href="https://www.inte-qt.com/coverage/north-america/barbados"
  />

  {/* JSON-LD Structured Data */}
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
            // Barbados beach / coastline – swap to your own asset if needed
            backgroundImage:
              'url("https://i.imgur.com/0d6q21u.jpg")',
          }}
        />

        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1.5px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Barbados
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            An eastern Caribbean island nation with a tourism-led economy,
            strong financial services, and growing digital infrastructure
            supporting sustainable development and offshore services.
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
                        <strong>Population:</strong> ~281,000 (2023 estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Eastern Caribbean
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Island nation; closest
                        neighbors include Saint Lucia, Saint Vincent and the
                        Grenadines (west), and Trinidad and Tobago (south)
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> Bridgetown
                      </li>
                      <li>
                        <strong>Other Major Towns:</strong> Speightstown,
                        Oistins
                      </li>
                      <li>
                        <strong>Official Language:</strong> English (Bajan
                        Creole widely spoken)
                      </li>
                      <li>
                        <strong>Currency:</strong> Barbadian Dollar (BBD), pegged
                        2:1 to the US Dollar
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Tourism, offshore
                        finance, sugar production, light manufacturing,
                        renewable energy
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> ~90% of population
                        with internet access
                      </li>
                      <li>
                        <strong>National Sport:</strong> Cricket
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Barbados is a compact, high-income island economy with
                        strong British colonial heritage and deep ties to
                        tourism and financial services. Bridgetown is the
                        commercial core, supported by coastal communities such
                        as Speightstown and Oistins that host resorts, ports and
                        residential areas. Its small landmass and dense coastal
                        development shape how broadband, mobile and
                        international connectivity are delivered.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/bb.png"
                        alt="Barbados Flag"
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
                      Barbados is an island nation in the eastern Caribbean,
                      known for its stable democracy, high human development and
                      strong services-oriented economy. Tourism is the backbone
                      of the economy, complemented by offshore financial
                      services, sugar and rum production, light manufacturing
                      and a growing renewable energy sector.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Bridgetown, the capital, functions as the main commercial
                      and administrative hub, while coastal towns like
                      Speightstown and Oistins serve tourism, fisheries and
                      local communities. The island&apos;s compact geography
                      enables relatively efficient deployment of national
                      telecom infrastructure, with international connectivity
                      concentrated around key landing points and the deep water
                      harbour.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The government is focused on sustainable development and
                      digital transformation, including renewable energy
                      adoption and modernisation of public services, making
                      reliable broadband and mobile connectivity a strategic
                      priority across residential, business and public-sector
                      users.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Barbados&output=embed"
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
                        Barbados is highly reliant on international air and sea
                        access, with tourism, cruise calls and container traffic
                        making its main port and airport critical demand centres
                        for resilient connectivity.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Airport
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          Grantley Adams International Airport (BGI) — near
                          Bridgetown
                        </li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaport
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Bridgetown Port (Deep Water Harbour)</li>
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
                        Barbados has widespread mobile coverage and high levels
                        of internet usage relative to its population size, with
                        broadband access concentrated in urban and coastal
                        areas. Mobile cellular penetration is above 100%, and
                        internet services are delivered via a mix of fixed
                        broadband and mobile data plans.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Metric
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Estimated Users
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Penetration / Notes
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Broadband Users</td>
                              <td className="py-3 px-4">~100,000</td>
                              <td className="py-3 px-4">
                                ~35% of population with fixed broadband
                                subscriptions.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Cellular Users
                              </td>
                              <td className="py-3 px-4">~300,000</td>
                              <td className="py-3 px-4">
                                ~110% penetration; multiple SIMs common.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Landlines</td>
                              <td className="py-3 px-4">~40,000</td>
                              <td className="py-3 px-4">
                                ~15% penetration; increasingly complemented by
                                mobile and VoIP.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">~250,000</td>
                              <td className="py-3 px-4">
                                ~90% of population with access to the internet.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Residential and SME connectivity is typically delivered
                        through fixed broadband and bundled services, while
                        enterprises and public-sector sites make use of
                        dedicated access, managed services and redundant
                        designs, particularly in and around Bridgetown.
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
            {/* Submarine Cables */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine Cables & International Connectivity
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Barbados is connected to the global internet via regional
                  submarine cable systems including the{" "}
                  <strong>Eastern Caribbean Fiber System (ECFS)</strong> and{" "}
                  <strong>Southern Caribbean Fiber (SCF)</strong>. These systems
                  link Barbados to neighbouring islands and to landing points
                  that connect onward to North and South America and other
                  international hubs.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  These cable systems support voice, data and internet services
                  for residential, business and carrier customers, and are
                  critical for the island&apos;s tourism, financial services and
                  government sectors, which rely on low-latency and resilient
                  connectivity to global markets.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/MpPflHG.png"
alt="Submarine Cables Barbados"
className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
/>

</div>

                
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Barbados
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT delivers tailored connectivity solutions in
                  Bridgetown, Speightstown, Oistins and other key locations
                  across Barbados, supporting the island&apos;s vital tourism,
                  finance, government and services sectors.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We work with local and regional partners to provide secure,
                  scalable and resilient network services for hotels and
                  resorts, banks and financial institutions, logistics and
                  maritime services, public administration, education and other
                  enterprises.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Services</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Dedicated Lines (DL)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity",
                    "Service Level Agreements (SLA)",
                    "Customer Premises Equipment (CPE) / Routers",
                    "Global Enterprise Management Solutions (GEMS)",
                    "Diverse Gateway Solutions",
                    "Distributed Denial of Service (DDoS) Protection",
                  ].map((capability) => (
                    <div
                      key={capability}
                      className="flex items-start space-x-3 bg-card/40 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <div className="text-sm">{capability}</div>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our Global Business Solutions team can typically provide a{" "}
                  <strong>Commercial Offer within 2–4 working days</strong>.
                  Service deployments in Bridgetown are generally completed
                  within <strong>3–4 weeks</strong>, while other locations such
                  as Speightstown and Oistins are typically delivered within{" "}
                  <strong>4–6 weeks</strong>, depending on access technology,
                  logistics and site readiness.
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
              . We support deployments across Bridgetown, Speightstown, Oistins
              and other key locations in Barbados.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-qt.com?subject=Barbados Connectivity Enquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">Suggested References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>
                World Bank — Barbados data and ICT indicators
              </li>
              <li>
                Telecommunications Unit, Government of Barbados — national ICT
                and telecoms policy
              </li>
              <li>
                Barbados Tourism Marketing Inc. — tourism and visitor data
              </li>
              <li>Flow Barbados and Digicel Barbados — retail and business connectivity offerings</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Barbados;
