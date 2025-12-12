import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Belize: React.FC = () => {
    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Belize | Connectivity, ISPs & Broadband Overview",
  description:
    "Overview of Belize’s internet connectivity, fixed and mobile broadband, submarine cable systems and inte-QT service capabilities in Belize City, Belmopan and key tourism and border corridors.",
  url: "https://www.inte-qt.com/coverage/north-america/belize",
  about: {
    "@type": "Country",
    name: "Belize",
    capital: {
      "@type": "City",
      name: "Belmopan"
    },
    officialLanguage: "English",
    currency: "BZD",
    population: {
      "@type": "QuantitativeValue",
      value: 414000
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.1899,
      longitude: -88.4976
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
  <title>Internet in Belize | Connectivity, ISPs & Broadband Overview</title>

  <meta
    name="description"
    content="Overview of Belize’s internet connectivity, fixed and mobile broadband, submarine cable systems and inte-QT service capabilities in Belize City, Belmopan and key tourism and border corridors."
  />

  <link
    rel="canonical"
    href="https://www.inte-qt.com/coverage/north-america/belize"
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
            // Belize coast / Caribbean vibe – swap with your own asset if needed
            backgroundImage:
              'url("https://i.imgur.com/l4cDGEa.jpg")',
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
            Internet in Belize
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A Central American and Caribbean nation where tourism, agriculture
            and financial services depend on improving fixed and mobile
            connectivity across coastal cities and inland communities.
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
                        <strong>Population:</strong> ~414,000 (2024 estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Central America, Caribbean coast
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Mexico (north), Guatemala
                        (west &amp; south), Caribbean Sea (east)
                      </li>
                      <li>
                        <strong>Capital:</strong> Belmopan
                      </li>
                      <li>
                        <strong>Largest City:</strong> Belize City
                      </li>
                      <li>
                        <strong>Other Key Towns:</strong> San Ignacio, Orange
                        Walk, Dangriga, Corozal, Placencia
                      </li>
                      <li>
                        <strong>Official Language:</strong> English (Spanish,
                        Belizean Creole and Mayan languages widely spoken)
                      </li>
                      <li>
                        <strong>Currency:</strong> Belize Dollar (BZD), pegged
                        to the US Dollar
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Tourism, agriculture
                        (sugar, bananas, citrus), fisheries, offshore services,
                        construction, light manufacturing, services
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Belize links Central America and the Caribbean, with
                        coastal tourism centres, inland agricultural districts
                        and protected rainforest and reef ecosystems. Population
                        is relatively small and dispersed, making last-mile
                        infrastructure and resilient connectivity important
                        design considerations.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/bz.png"
                        alt="Belize Flag"
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
                      Belize is a small, upper-middle-income country on the
                      Caribbean coastline of Central America. Belize City is the
                      main commercial hub and port, while Belmopan is the
                      administrative capital. Inland towns such as San Ignacio
                      and Orange Walk support agriculture, ecotourism and
                      cross-border trade.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The economy is diversified across tourism, agriculture,
                      offshore services and public administration. Connectivity
                      along coastal corridors, border crossings and tourism
                      hotspots is critical for hotels, financial institutions,
                      logistics operators and government agencies.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Internet adoption has been rising, with the majority of
                      the population now online, but there remains a gap between
                      urban/coastal areas and more remote rural communities,
                      where mobile broadband is often the primary access method.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Belize&output=embed"
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
                        Belize relies on a combination of international and
                        domestic airports, plus seaports along the Caribbean
                        coast, to connect tourism centres, islands and inland
                        regions.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International & Domestic Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          Philip S. W. Goldson International Airport (BZE) —
                          near Belize City
                        </li>
                        <li>Belmopan Airport (BCV)</li>
                        <li>San Pedro Airport (SPR) — Ambergris Caye</li>
                        <li>Caye Caulker Airport (CUK)</li>
                        <li>Punta Gorda &amp; other regional airstrips</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Main Seaports & Maritime Access
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Belize (Belize City) — primary cargo port</li>
                        <li>Belize City Cruise Terminal &amp; tenders</li>
                        <li>Smaller ports &amp; piers serving islands and coastal towns</li>
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
                        Belize has widespread mobile coverage and growing fixed
                        broadband, particularly in Belize City, Belmopan and
                        larger towns. Fibre, upgraded copper and fixed wireless
                        are used to deliver high-speed access, while mobile data
                        is the primary connection for many households and
                        tourists.
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
                                ≈300,000 users (~72% penetration)
                              </td>
                              <td className="py-3 px-4">
                                Majority of population online, with growth led by
                                mobile broadband.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Available in main urban centres
                              </td>
                              <td className="py-3 px-4">
                                Fibre and high-speed plans concentrated in Belize
                                City, Belmopan and larger towns.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                3G/4G nationwide; LTE in key areas
                              </td>
                              <td className="py-3 px-4">
                                High mobile penetration; primary access in many
                                rural communities.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Focused on cities &amp; resorts
                              </td>
                              <td className="py-3 px-4">
                                DIA and managed services for banking, tourism,
                                offshore and government sites.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        The combination of small market size and dispersed
                        population means network investments are often targeted
                        at high-demand corridors, with wireless solutions used
                        to extend reach.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Submarine Cables & Our Capabilities */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* Submarine Cables & International Backbone */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine Cables & International Backbone
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Belize is connected to the global internet via regional
                  Caribbean and Central American submarine cable systems, most
                  notably ARCOS-1, which links it to the wider Americas and
                  global backbones. Additional projects, such as domestic and
                  regional fibre links, strengthen connectivity to islands and
                  tourism zones.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  International capacity typically lands on the mainland, then
                  is distributed via terrestrial fibre and microwave links to
                  coastal towns, border points and island destinations like
                  Ambergris Caye.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/cB3dDbn.png"
alt="Submarine Cables Belize"
className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
/>

</div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Belize
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT delivers managed connectivity solutions for
                  enterprises across Belize, with a focus on Belize City,
                  Belmopan, tourism zones such as San Pedro and Placencia, and
                  key industrial and government locations.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity (3G/4G/LTE last mile)",
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
                  services can usually be delivered within{" "}
                  <strong>4–6 weeks</strong>, subject to local access options
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
              . We support deployments in Belize City, Belmopan, key tourism
              corridors and selected regional locations across Belize.
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
              <li>World Bank / ITU — Belize ICT indicators</li>
              <li>Digital 2024–2026 Belize — DataReportal</li>
              <li>Regulatory &amp; national digital strategy documents</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Belize;
