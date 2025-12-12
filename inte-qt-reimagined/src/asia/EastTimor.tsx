// src/pages/EastTimor.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const EastTimor: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in East Timor (Timor-Leste) | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Timor-Leste's internet connectivity, satellite and new submarine routes, telecom operators, broadband statistics and inte-QT service capabilities in Dili, Baucau and other key locations.",
    url: "https://www.inte-qt.com/coverage/asia/timor-leste",
    about: {
      "@type": "Country",
      name: "Timor-Leste",
      population: 1500000,
      currency: "USD (widely used)",
      languages: ["Tetum", "Portuguese", "Indonesian", "English"],
      majorCities: ["Dili", "Baucau", "Suai", "Lospalos"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in East Timor (Timor-Leste) | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Timor-Leste's internet connectivity, satellite and new submarine routes, telecom operators, broadband statistics and inte-QT service capabilities in Dili, Baucau and other key locations."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/asia/timor-leste" />

        {/* Open Graph */}
        <meta property="og:title" content="Internet in East Timor (Timor-Leste) | inte-QT" />
        <meta property="og:description" content="Timor-Leste connectivity: mobile-first market, growing 3G/4G coverage, and new subsea projects improving international capacity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/asia/timor-leste" />
        {/* Replace with a real social image when available */}
        <meta property="og:image" content="https://i.imgur.com/placeholder.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internet in East Timor (Timor-Leste) | inte-QT" />
        <meta name="twitter:description" content="Overview of Timor-Leste's internet market, submarine projects and operator landscape." />
        <meta name="twitter:image" content="https://i.imgur.com/placeholder.png" />

        {/* Structured data for crawlers */}
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
              'url("https://images.unsplash.com/photo-1591325408953-ef9298125f96?w=1200&auto=format&fit=crop&q=80")',
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1.5px]" aria-hidden="true" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in East Timor (Timor-Leste)
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A young Southeast Asian nation where a small mobile-first market,
            rugged terrain and limited infrastructure meet new subsea projects
            and growing demand for connectivity around Dili and key towns.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background" id="main">
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
                      <li><strong>Official Name:</strong> Democratic Republic of Timor-Leste (East Timor)</li>
                      <li><strong>Population:</strong> ~1.4–1.5 million (mid-2020s est.)</li>
                      <li><strong>Capital & Main Towns:</strong> Dili, Baucau, Same, Maliana, Suai, Lospalos</li>
                      <li><strong>Neighbors:</strong> Indonesia; north of Australia across the Timor Sea</li>
                      <li><strong>Languages:</strong> Tetum, Portuguese, Indonesian, English</li>
                      <li><strong>Currency:</strong> USD widely used</li>
                    </ul>

                    <div className="text-center mt-6">
                      <img
                        src="https://flagcdn.com/w320/tl.png"
                        alt="Timor-Leste flag"
                        className="mx-auto rounded-lg shadow-lg border border-white/40"
                        loading="lazy"
                        width={160}
                        height={100}
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
                <Card className="rounded-3xl shadow-xl border border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">A Brief Overview</h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Timor-Leste occupies the eastern half of the island of Timor, plus the Oecusse exclave.
                      Dili is the compact seaside capital and main economic centre, with towns spread across steep terrain.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Connectivity has relied on satellite and microwave; mobile is the primary access method.
                      New submarine cable projects linking Timor-Leste to Indonesia and Australia aim to improve latency and capacity.
                    </p>

                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Timor-Leste (East Timor)"
                          src="https://www.google.com/maps?q=Timor-Leste&output=embed"
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

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Main Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Presidente Nicolau Lobato Intl (DIL)</li>
                        <li>Baucau Airport (limited / special-use)</li>
                        <li>Suai Airport (XSU) — Tasi Mane corridor</li>
                        <li>Oecusse Airport — Oecusse SEZ</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Timor-Leste is early-stage: ~35–40% internet penetration (~0.5–0.6M users), ~1.0–1.1M mobile SIMs (multi-SIM common).
                        Fixed broadband is limited and concentrated in Dili/government/NGO sites.
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
                              <td className="py-3 px-4">Internet Users (mid-2020s est.)</td>
                              <td className="py-3 px-4">≈ 0.5–0.6 million</td>
                              <td className="py-3 px-4">~35–40%</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Connections</td>
                              <td className="py-3 px-4">≈ 1.0–1.1 million SIMs</td>
                              <td className="py-3 px-4">~70–80% (multi-SIM)</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband (2024 est.)</td>
                              <td className="py-3 px-4">&lt; 15–20k lines</td>
                              <td className="py-3 px-4">&lt; 1.5 per 100 inhabitants</td>
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

        {/* Submarine Cables & International Routes */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & International Routes</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Historically reliant on satellite and microwave, Timor-Leste is progressing with subsea projects to connect Dili to Indonesia and Australia, improving latency and capacity as domestic backbone links are built.
                </p>

                <div className="flex justify-center">
                  <a href="https://www.submarinecablemap.com/country/timor-leste" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img src="/East-Timor.png" alt="Submarine cables and international routes relevant to Timor-Leste" className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto" loading="lazy" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers & Market</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Key operators include Timor Telecom, Telkomcel and Telemor. Enterprise demand is driven by government, development agencies, NGOs and energy projects.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in Dili and selected centres (feasibility dependent)",
                    "Business Internet & wireless last-mile for NGOs, government and enterprise",
                    "Hybrid satellite / LTE / microwave resilience options",
                    "SLA-backed services with 24x7 monitoring",
                    "CPE / Router supply, configuration and managed lifecycle",
                    "IP-VPN / SD-WAN overlays toward Indonesia, Singapore & Australia",
                    "Traffic engineering over new submarine/regional routes",
                    "Managed Security, VPN and basic DDoS protection"
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
              Contact us to discuss <mark className="bg-yellow-200 px-1 rounded">feasibility and commercial options</mark> in Timor-Leste. We can support connectivity in Dili and selected strategic sites, subject to local infrastructure and the status of submarine/backbone projects.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-QT.com?subject=Timor-Leste%20Connectivity%20Inquiry" className="text-primary underline font-semibold">Email Us</a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://en.wikipedia.org/wiki/East_Timor" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Timor-Leste</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Telecommunications_in_East_Timor" target="_blank" rel="noopener noreferrer" className="underline">Telecommunications in East Timor</a></li>
              <li><a href="https://datareportal.com/digital-in-timor-leste" target="_blank" rel="noopener noreferrer" className="underline">DataReportal — Digital in Timor-Leste</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EastTimor;
