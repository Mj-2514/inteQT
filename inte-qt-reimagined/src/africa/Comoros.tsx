import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Comoros: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Comoros | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Comoros' internet connectivity, submarine and terrestrial routes, telecom operators, broadband statistics and inte-QT service capabilities in Moroni, Mutsamudu, Fomboni and other key locations.",
    url: "https://www.inte-qt.com/coverage/africa/comoros",
    about: {
      "@type": "Country",
      name: "Comoros",
      population: 850000,
      currency: "KMF (Comorian franc)",
      languages: ["Shikomori (Comorian)", "Arabic", "French"],
      neighbouringCountriesMaritime: ["Mozambique", "Tanzania", "Madagascar", "Seychelles", "Mayotte (France)"],
      majorCities: ["Moroni", "Mutsamudu", "Fomboni", "Iconi", "Mitsamiouli"],
      majorAirports: [
        "Prince Said Ibrahim International Airport (HAH) — Moroni, Grande Comore",
        "Ouani Airport (AJN) — Anjouan (Nzwani)",
        "Mohéli Bandar Es Salam Airport (NWA) — Mohéli (Mwali)",
        "Dzaoudzi–Pamandzi International Airport (DZA) — Mayotte (nearby regional hub)"
      ],
      url: "https://en.wikipedia.org/wiki/Comoros"
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Comoros | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Comoros' internet connectivity, submarine and terrestrial routes, telecom operators, broadband statistics and inte-QT service capabilities in Moroni, Mutsamudu, Fomboni and other key locations."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/comoros" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative py-28 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1717551725335-5e1dcd57a491?w=1200&auto=format&fit=crop&q=80")',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1.5px]" aria-hidden />
        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Comoros
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A small Indian Ocean archipelago where connectivity depends on a
            handful of submarine cables, limited domestic fibre and heavily used mobile networks around Moroni and the main islands.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* LEFT — KEY FACTS */}
              <motion.aside initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full">
                <Card className="backdrop-blur-xl bg-white/70 dark:bg-black/30 rounded-3xl border border-white/20 shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-5">Key Facts</h2>

                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li><strong>Population:</strong> ~0.85 million (2025 est.)</li>
                      <li><strong>Maritime neighbours:</strong> Mozambique, Tanzania, Madagascar, Seychelles; close to Mayotte (France)</li>
                      <li><strong>Languages:</strong> Shikomori (Comorian), Arabic, French</li>
                      <li><strong>Currency:</strong> Comorian franc (KMF)</li>
                      <li><strong>Major towns:</strong> Moroni, Mutsamudu, Fomboni, Iconi, Mitsamiouli</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/km.png"
                        alt="Comoros Flag"
                        className="mx-auto rounded-lg shadow-lg border border-white/40"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.aside>

              {/* RIGHT — MAIN CONTENT */}
              <motion.article initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-10">
                {/* Overview */}
                <Card className="rounded-3xl shadow-xl border border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">A Brief Overview</h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The Union of the Comoros is a volcanic island state in the northern Mozambique Channel. The three main islands—
                      Grande Comore (Ngazidja), Mohéli (Mwali) and Anjouan (Nzwani)—are spread across the channel. Moroni on Grande Comore is the political and economic centre.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Connectivity is constrained by geography and a small market. Mobile networks are the primary access method; fixed broadband is very shallow and concentrated in government/business locations. International bandwidth comes through a small set of subsea systems and regional interconnects (Mayotte, Madagascar).
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Comoros"
                          src="https://www.openstreetmap.org/export/embed.html?bbox=42.0%2C-13.5%2C46.0%2C-10.5&layer=mapnik&marker=-11.70%2C43.25"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
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
                        <li>Prince Said Ibrahim International Airport (HAH) — Moroni, Grande Comore</li>
                        <li>Ouani Airport (AJN) — Anjouan (Nzwani)</li>
                        <li>Mohéli Bandar Es Salam Airport (NWA) — Mohéli (Mwali)</li>
                        <li>Nearby regional hub: Dzaoudzi–Pamandzi Intl. (Mayotte)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        A small, lower-ARPU market where Comores Télécom and Telma Comores dominate mobile services. Fixed broadband is minimal; many users rely on shared access or mobile bundles. International transit costs and power reliability affect service levels and pricing.
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
                              <td className="py-3 px-4">Internet Users (mid-2025 est.)</td>
                              <td className="py-3 px-4">≈ 0.36–0.40 million</td>
                              <td className="py-3 px-4">~42–47%</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Connections</td>
                              <td className="py-3 px-4">≈ 1.0–1.1 million SIMs</td>
                              <td className="py-3 px-4">~115–125%</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Social Media Identities</td>
                              <td className="py-3 px-4">≈ 0.25 million</td>
                              <td className="py-3 px-4">~30%</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband (2024 est.)</td>
                              <td className="py-3 px-4">&lt; 5,000–10,000 lines</td>
                              <td className="py-3 px-4">&lt;1 per 100 inhabitants</td>
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

        {/* Submarine Cables & Backbone */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & International Routes</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Comoros connects to the global internet via regional submarine systems (examples: EASSy, FLY-LION3 and nearby landings via Mayotte/Madagascar). Those cables backhaul into a limited domestic backbone linking Moroni with other islands and coastal towns.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/comoros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    aria-label="Open submarine cable map (Comoros)"
                  >
                    <img
                      src="/Comoros.png"
                      alt="Submarine cables and international routes serving Comoros"
                      className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                      loading="lazy"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* ISPs */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Market is small and dominated by Comores Télécom and Telma Comores, with some niche enterprise providers. Services are mainly mobile (3G/4G); limited fibre/fixed wireless exists in Moroni and select sites.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in Moroni and enterprise sites",
                    "Business Broadband / fixed wireless for hotels, banks and government",
                    "4G / LTE last-mile and microwave backup where available",
                    "SLA-backed services with monitoring adapted to local power conditions",
                    "CPE / Router supply, configuration & managed services",
                    "MPLS / SD-WAN overlays for multi-site organisations",
                    "Traffic engineering across EASSy / FLY-LION3 via regional partners",
                    "Managed Security, VPN termination and basic DDoS protection"
                  ].map((cap) => (
                    <div key={cap} className="flex items-start space-x-3 bg-card/40 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow">
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
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. We can support connectivity in and around Moroni and selected sites on Anjouan and Mohéli, subject to last-mile feasibility.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-QT.com?subject=Comoros%20Connectivity%20Inquiry" className="text-primary underline font-semibold">Email Us</a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1">
              <li><a href="https://en.wikipedia.org/wiki/Comoros" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Comoros</a></li>
              <li><a href="https://www.submarinecablemap.com/country/comoros" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — Comoros</a></li>
              <li><a href="https://www.worldatlas.com/maps/comoros" target="_blank" rel="noopener noreferrer" className="underline">WorldAtlas — Comoros facts & map</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Telecommunications_in_the_Comoros" target="_blank" rel="noopener noreferrer" className="underline">Telecommunications in the Comoros — Wikipedia</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Comoros;
