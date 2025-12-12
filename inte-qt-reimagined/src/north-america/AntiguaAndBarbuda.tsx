import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const AntiguaAndBarbuda: React.FC = () => {
    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Antigua and Barbuda | Connectivity, ISPs & Broadband Overview",
  description:
    "Overview of Antigua and Barbuda’s internet connectivity, fixed and mobile broadband, submarine cable systems and inte-QT service capabilities in St. John’s and across both main islands.",
  url: "https://www.inte-qt.com/coverage/north-america/antigua-and-barbuda",
  about: {
    "@type": "Country",
    name: "Antigua and Barbuda",
    capital: {
      "@type": "City",
      name: "St. John's"
    },
    officialLanguage: "English",
    currency: "XCD",
    population: {
      "@type": "QuantitativeValue",
      value: 94000
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
    Internet in Antigua and Barbuda | Connectivity, ISPs & Broadband Overview
  </title>

  <meta
    name="description"
    content="Overview of Antigua and Barbuda’s internet connectivity, fixed and mobile broadband, submarine cable systems and inte-QT service capabilities in St. John’s and across both main islands."
  />

  <link
    rel="canonical"
    href="https://www.inte-qt.com/coverage/north-america/antigua-and-barbuda"
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
            // Caribbean beach / Antigua vibe – swap with your own asset if needed
            backgroundImage:
              'url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80")',
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
            Internet in Antigua and Barbuda
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A twin-island Caribbean state where tourism, financial services and
            digital connectivity support a modern, services-driven economy.
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
                        <strong>Population:</strong> ~94,000 (recent estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Eastern Caribbean, Leeward Islands
                      </li>
                      <li>
                        <strong>Composition:</strong> Main islands of Antigua and Barbuda, plus smaller islands such as Redonda
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> St. John&apos;s (Antigua)
                      </li>
                      <li>
                        <strong>Official Language:</strong> English
                      </li>
                      <li>
                        <strong>Currency:</strong> Eastern Caribbean Dollar (XCD)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Tourism, financial services, real estate, transport, construction, light manufacturing, ICT
                      </li>
                      <li>
                        <strong>Tourism:</strong> A major economic driver with cruise, resort and yachting activity
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Antigua and Barbuda blends white-sand beaches and marine
                        attractions with a growing services sector. St. John&apos;s is
                        the primary commercial hub, while Barbuda remains more
                        sparsely populated with eco-tourism potential.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/ag.png"
                        alt="Antigua and Barbuda Flag"
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
                {/* Overview & Tourism */}
                <Card className="rounded-3xl shadow-xl border border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">
                      A Brief Overview
                    </h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Antigua and Barbuda is a sovereign island nation in the
                      Eastern Caribbean, known for its beaches, harbours and
                      tourism infrastructure. Antigua is the main population and
                      business centre, while Barbuda remains less developed and
                      more rural.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The economy is strongly services-oriented, with tourism,
                      financial services, construction and real estate driving GDP.
                      Connectivity to global markets and visitors is critical for
                      hotels, resorts, marinas, government, and financial
                      institutions.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3">
                      Tourism & Digital Demand
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      A high share of visitors arrive via cruise ships and
                      long-haul flights, concentrating demand in and around
                      St. John&apos;s, resort zones and marinas. This creates strong
                      requirements for reliable Wi-Fi, mobile coverage and
                      enterprise-grade internet in hotels, ports and hospitality
                      venues.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Antigua%20and%20Barbuda&output=embed"
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
                        As an island nation, Antigua and Barbuda relies heavily on
                        air and sea gateways for passenger travel, cargo and
                        cruise tourism.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key Airport
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          V.C. Bird International Airport (ANU) — Antigua
                        </li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports & Marinas (Antigua)
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>St. John&apos;s Deep Water Harbour &amp; Cruise Port</li>
                        <li>Heritage Quay &amp; Redcliffe Quay (cruise &amp; retail)</li>
                        <li>English Harbour &amp; Falmouth Harbour (yachting hubs)</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Barbuda Access
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Codrington Airport (small regional airstrip)</li>
                        <li>Ferry services between Antigua and Barbuda</li>
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
                        Antigua and Barbuda has widespread mobile coverage and
                        expanding fixed broadband, particularly in Antigua around
                        St. John&apos;s and major resort areas. Fibre and high-speed
                        fixed wireless solutions are used for enterprise and
                        hospitality connectivity, while mobile data is the primary
                        access method for many residents and visitors.
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
                                Majority of residents online
                              </td>
                              <td className="py-3 px-4">
                                High penetration relative to population size.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Available in main urban/resort areas
                              </td>
                              <td className="py-3 px-4">
                                Fibre, cable and fixed wireless focused on Antigua&apos;s
                                population centres.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                4G widely available; LTE-Advanced in key areas
                              </td>
                              <td className="py-3 px-4">
                                Primary connectivity for many users and visitors.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Concentrated in St. John&apos;s &amp; resort zones
                              </td>
                              <td className="py-3 px-4">
                                DIA, MPLS/IP-VPN and managed Wi-Fi for hotels,
                                banks and government sites.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Seasonal tourism drives spikes in data traffic, especially
                        around cruise calls, events and high season, requiring
                        robust capacity management and resilient last-mile
                        solutions.
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
            {/* Submarine Cables & Backbone */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine Cables & International Backbone
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Antigua and Barbuda is connected to the global internet through
                  regional Caribbean submarine cable systems and terrestrial
                  backhaul into neighbouring islands and hubs. These systems
                  provide international bandwidth and redundancy to support
                  tourism, financial services and government operations.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Capacity typically lands on Antigua and is then distributed via
                  local backbones to St. John&apos;s, resort clusters, industrial
                  areas and inter-island links towards Barbuda.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/dFbxYqX.png"
alt="Submarine Cables Antigua and Barbuda"
className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
/>

</div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Antigua and Barbuda
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT delivers managed connectivity solutions for enterprises
                  across Antigua and Barbuda, focusing on St. John&apos;s, airport
                  and seaport zones, resort areas, marinas and key government and
                  financial service sites.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity (4G/LTE last mile)",
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
                  <strong>Commercial Offer within 2–4 working days</strong>, with
                  service delivery in most locations within{" "}
                  <strong>4–6 weeks</strong>, subject to local access, partner
                  availability and site readiness.
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
              . We support deployments across St. John&apos;s, resort and cruise
              areas on Antigua, and selected locations on Barbuda.
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
              <li>World Bank — Antigua and Barbuda (ICT & connectivity)</li>
              <li>Regional Caribbean telecom &amp; digital reports</li>
              <li>Government of Antigua and Barbuda — Statistics &amp; ICT data</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AntiguaAndBarbuda;
