import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const ElSalvador: React.FC = () => {
    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in El Salvador | Connectivity, ISPs & Broadband Overview",
  description:
    "Overview of El Salvador's internet connectivity, submarine and terrestrial routes, ISPs, broadband statistics and inte-QT service capabilities in San Salvador, Santa Ana, San Miguel and other key centres.",
  url: "https://www.inte-qt.com/coverage/central-america/el-salvador",
  about: {
    "@type": "Country",
    name: "El Salvador",
    alternateName: "Republic of El Salvador",
    capital: {
      "@type": "City",
      name: "San Salvador"
    },
    officialLanguage: ["Spanish"],
    currency: "USD",
    population: {
      "@type": "QuantitativeValue",
      value: 6400000
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.7942,
      longitude: -88.8965
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
  <title>
    Internet in El Salvador | Connectivity, ISPs & Broadband Overview
  </title>

  <meta
    name="description"
    content="Overview of El Salvador's internet connectivity, submarine and terrestrial routes, ISPs, broadband statistics and inte-QT service capabilities in San Salvador, Santa Ana, San Miguel and other key centres."
  />

  <link
    rel="canonical"
    href="https://www.inte-qt.com/coverage/central-america/el-salvador"
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
            // swap with your own San Salvador / coastal / volcano image
            backgroundImage: 'url("https://images.unsplash.com/photo-1634072724319-96cd27fcbb35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWwlMjBzYWx2YWRvcnxlbnwwfHwwfHx8Mg%3D%3D")',
          }}
        />

        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1.5px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in El Salvador
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A compact, densely populated Central American country where mobile
            broadband drives consumer adoption, fibre and cable grow in the main
            cities, and San Salvador is the principal connectivity hub.
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
                        <strong>Official Name:</strong> Republic of El Salvador
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 6.3–6.4 million (mid-2025 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Major Cities:</strong> San Salvador
                        (capital), Santa Ana, San Miguel, Soyapango, La Libertad
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Guatemala (NW), Honduras (NE), Pacific Ocean (S)
                      </li>
                      <li>
                        <strong>Language:</strong> Spanish (official)
                      </li>
                      <li>
                        <strong>Currency:</strong> United States dollar (USD) — official tender since 2001; Bitcoin remains legal tender policy is notable but optional.
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/sv.png"
                        alt="El Salvador Flag"
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
                    <h2 className="text-3xl font-bold mb-4">A Brief Overview</h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      El Salvador is the smallest and most densely populated country
                      in Central America. San Salvador is the political and economic
                      centre; the economy is service-oriented and remittances play a
                      large role. Geography is dominated by a volcanic central
                      plateau and a Pacific coastline — these shape connectivity
                      corridors and fibre routes that interlink the main urban
                      areas.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The market is mobile-first: mobile broadband adoption rose
                      strongly through the 2020s while fixed broadband (FTTH, HFC)
                      has expanded in urban and suburban pockets. A small number of
                      national and regional operators supply retail and wholesale
                      services, with San Salvador acting as the hub for data
                      centres, peering and transit connections.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of El Salvador"
                          src="https://www.google.com/maps?q=El%20Salvador&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Airports + Connectivity Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Main Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>El Salvador International Airport (SAL) — San Luis Talpa (main international gateway)</li>
                        <li>Ilopango International Airport (regional, charters, military)</li>
                        <li>Smaller airfields and regional strips serving domestic and charter traffic</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Internet users and mobile adoption grew through the mid-2020s: mobile internet users numbered several million (roughly three-quarters of the population in early-2025), while fixed broadband continued expanding in the main cities. Speeds and coverage are improving as operators upgrade radio access and fibre footprints.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">Type</th>
                              <th className="py-3 px-4 text-left font-semibold">Users / Lines</th>
                              <th className="py-3 px-4 text-left font-semibold">Penetration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users (early-2025)</td>
                              <td className="py-3 px-4">≈ 4.8 million (mobile internet users)</td>
                              <td className="py-3 px-4">≈ 75–77% mobile internet penetration</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Connections</td>
                              <td className="py-3 px-4">≈ 5.9–6.2 million SIMs</td>
                              <td className="py-3 px-4">~90–100% (multi-SIM common)</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband (2023–24 est.)</td>
                              <td className="py-3 px-4">Several hundred thousand FTTH/HFC/DSL lines</td>
                              <td className="py-3 px-4">~10–12 per 100 inhabitants (growing)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* International Routes & Regional Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">International Routes & Regional Links</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  El Salvador connects into regional undersea and terrestrial networks across the Pacific and Central America. International capacity and transit options use coastal cable landings in the region and overland links through neighbouring Central American hubs, with San Salvador functioning as an important national aggregation and peering point for transit and enterprise services.
                </p>

                <div className="flex justify-center">
                  {/* replace with your own network / topology screenshot */}
                  <a
                    href="https://www.submarinecablemap.com/country/el-salvador"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/El-Salvador.png"
                      alt="International and regional routes serving El Salvador"
                      className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* ISPs & Market */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers & Market</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The Salvadoran market features national mobile operators and a mix of regional fixed broadband providers offering FTTH, cable and wireless services. Competition is strongest in San Salvador and other larger urban areas, while smaller towns and rural zones rely more on mobile and fixed-wireless offerings.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) and business broadband in San Salvador and major cities",
                    "FTTH / HFC provisioning and rollout support for urban deployments",
                    "4G / LTE and fixed wireless last-mile with hybrid failover",
                    "SLA-backed services with 24x7 NOC monitoring and local escalation",
                    "CPE / Router supply, staging, configuration and managed lifecycle",
                    "MPLS / SD-WAN for multi-site enterprises across Central America",
                    "Regional transit and peering arrangements through San Salvador’s aggregation points",
                    "Managed Security, VPN, DDoS mitigation and cloud on-ramps"
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
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Offer */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Contact us to receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>.
              We support connectivity across San Salvador, Santa Ana, San Miguel and other locations, subject to local infrastructure and last-mile feasibility.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=El%20Salvador%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.britannica.com/place/El-Salvador" target="_blank" rel="noopener noreferrer" className="underline">Britannica — El Salvador (overview)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/El_Salvador_International_Airport" target="_blank" rel="noopener noreferrer" className="underline">El Salvador International Airport (SAL) — Wikipedia</a></li>
              <li><a href="https://en.wikipedia.org/wiki/El_Salvador" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — El Salvador (language, currency notes)</a></li>
              <li><a href="https://www.mordorintelligence.com/industry-reports/el-salvador-telecom-mno-market" target="_blank" rel="noopener noreferrer" className="underline">Mordor Intelligence — El Salvador telecom (mobile / internet stats)</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ElSalvador;
