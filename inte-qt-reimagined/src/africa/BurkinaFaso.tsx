import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const BurkinaFaso: React.FC = () => {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Burkina Faso | Connectivity, ISPs & Broadband Overview",
  description:
    "Detailed overview of Burkina Faso's internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Ouagadougou, Bobo-Dioulasso and other key cities.",
  url: "https://www.inte-qt.com/coverage/africa/burkina-faso",
  about: {
    "@type": "Country",
    name: "Burkina Faso",
    population: 24200000,
    currency: "XOF (West African CFA franc)",
    languages: ["Mooré", "Dioula", "Fula", "French (official)"],

    neighbouringCountries: [
      "Mali",
      "Niger",
      "Benin",
      "Togo",
      "Ghana",
      "Côte d'Ivoire"
    ],

    majorCities: [
      "Ouagadougou",
      "Bobo-Dioulasso",
      "Koudougou",
      "Ouahigouya",
      "Banfora"
    ],

    majorAirports: [
      "Ouagadougou International Airport (OUA)",
      "Bobo Dioulasso Airport (BOY)"
    ],

    url: "https://en.wikipedia.org/wiki/Burkina_Faso"
  }
};


  return (
    <>
      <Helmet>
        <title>Internet in Burkina Faso | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Burkina Faso's internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Ouagadougou, Bobo-Dioulasso and other key cities."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/burkina-faso" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative py-24 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://i.imgur.com/C5fPqtn.jpeg")' }}
          aria-hidden
        />

        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" aria-hidden />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg"
          >
            Internet in Burkina Faso
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-white/90 max-w-3xl mx-auto text-base md:text-lg mt-4 leading-relaxed"
          >
            A landlocked Sahel nation where mobile networks dominate, fiber corridors link to the West African coast, and digital access is growing despite security and infrastructure challenges.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background">
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* LEFT — KEY FACTS */}
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <Card className="backdrop-blur-xl bg-white/70 dark:bg-black/30 rounded-2xl border border-white/20 shadow-lg">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Key Facts</h2>

                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                      <li>
                        <strong>Population:</strong> ~24.2 million (2025 est.)
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Mali, Niger, Benin, Togo, Ghana, Côte d'Ivoire
                      </li>
                      <li>
                        <strong>Languages:</strong> Mooré, Dioula, Fula, French (official)
                      </li>
                      <li>
                        <strong>Currency:</strong> West African CFA franc (XOF)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Ouagadougou, Bobo-Dioulasso, Koudougou, Ouahigouya, Banfora
                      </li>
                    </ul>

                    <div className="mt-4 text-center">
                      <motion.img
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        src="https://flagcdn.com/w320/bf.png"
                        alt="Burkina Faso flag"
                        className="mx-auto rounded-md shadow-sm border border-white/30 mt-4"
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
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Overview Card */}
                <Card className="rounded-2xl shadow-lg border border-white/10">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-3">A Brief Overview</h2>

                    <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                      Burkina Faso is a landlocked country in West Africa positioned between the Sahara and the Gulf of Guinea. Ouagadougou anchors political and economic life while Bobo-Dioulasso is a major commercial hub.
                    </p>

                    <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                      Mobile penetration is high and mobile networks are the dominant access method. Fiber backbone projects and regional initiatives along coastal gateways of Côte d'Ivoire, Ghana and Benin are improving capacity and resilience.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-2 text-base">Map</h3>
                      <div className="rounded-lg overflow-hidden shadow border border-white/20">
                        <div className="map-responsive" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                          <iframe
                            title="Map of Burkina Faso"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-6.0%2C9.0%2C3.0%2C15.5&layer=mapnik&marker=12.4%2C-1.6"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Airports + Connectivity Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="rounded-2xl border border-white/10 shadow-lg">
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">Main Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Ouagadougou International Airport (OUA) — capital gateway</li>
                        <li>Bobo Dioulasso Airport (BOY) — secondary international hub</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border border-white/10 shadow-lg">
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        Orange, Onatel (Moov Africa) and Telecel are the primary operators. Mobile teledensity exceeds 100% with millions of active SIMs, while internet penetration remains lower — concentrated in cities due to affordability and backhaul limits.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-2 px-3 text-left font-semibold">Type</th>
                              <th className="py-2 px-3 text-left font-semibold">Users / Lines</th>
                              <th className="py-2 px-3 text-left font-semibold">Penetration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Internet Users (late 2025)</td>
                              <td className="py-2 px-3">≈ 5.4 million</td>
                              <td className="py-2 px-3">~22–23% of population</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Mobile Connections</td>
                              <td className="py-2 px-3">≈ 29.3 million SIMs</td>
                              <td className="py-2 px-3">~121% teledensity</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Social Media Users</td>
                              <td className="py-2 px-3">≈ 3.9 million</td>
                              <td className="py-2 px-3">~16% of population</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Fixed Broadband</td>
                              <td className="py-2 px-3">Tens of thousands of lines</td>
                              <td className="py-2 px-3">&lt;1% — mainly business / urban</td>
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

        {/* Submarine Cable / Backbone */}
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-6xl space-y-6">
            <Card className="rounded-2xl border border-white/10 shadow-lg">
              <CardContent className="p-4 text-center">
                <h2 className="text-2xl font-bold mb-2">Fiber Corridors &amp; International Capacity</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed text-center max-w-3xl mx-auto text-sm">
                  Burkina Faso reaches the global internet through terrestrial fiber corridors that connect to submarine cable landing stations in neighbouring coastal countries (Côte d'Ivoire, Ghana, Benin). Regional systems like ACE, WACS and MainOne feed national backbones that traverse the Sahel.
                </p>

                <div className="flex justify-center mt-3">
                  <a href="https://www.submarinecablemap.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://i.imgur.com/GmufPsb.png"
                      alt="Submarine and terrestrial routes serving Burkina Faso"
                      className="rounded-md shadow-md border border-white/20 w-full max-w-2xl"
                      loading="lazy"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* ISPs */}
            <Card className="rounded-2xl border border-white/10 shadow-lg">
              <CardContent className="p-4">
                <h2 className="text-2xl font-bold mb-2">Internet Providers</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  The market is served by Orange Burkina Faso, Onatel (Moov Africa / FasoNet) and Telecel Faso, with a growing ecosystem of ISPs and wireless operators providing enterprise and last-mile access in Ouagadougou and Bobo-Dioulasso.
                </p>

                <h3 className="text-lg font-semibold mb-3">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband over fiber & wireless",
                    "4G / LTE last-mile and backup links",
                    "SLA-backed Services with monitoring",
                    "CPE / Router supply & management",
                    "MPLS / SD-WAN for multi-site enterprises",
                    "Diverse routing via multiple coastal gateways",
                    "Managed Security & DDoS mitigation",
                  ].map((cap) => (
                    <div key={cap} className="flex items-start space-x-2 bg-card/40 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                      <CheckCircle className="w-4 h-4 text-primary mt-1" />
                      <div className="text-sm">{cap}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Offer */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-base leading-relaxed mb-4 text-muted-foreground">
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. We can support connectivity across Ouagadougou, Bobo-Dioulasso, Koudougou and other regional centers, subject to last-mile feasibility.
            </p>

            <p className="mb-4">
              <a href="mailto:sales@inte-qt.com?subject=Burkina%20Faso%20Connectivity%20Inquiry" className="text-primary underline font-semibold">Email Us</a>
            </p>

            <h4 className="mb-2 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>
                <a href="https://datareportal.com/reports/digital-2026-burkina-faso" target="_blank" rel="noopener noreferrer" className="underline">DataReportal — Digital 2026: Burkina Faso</a>
              </li>
              <li>
                <a href="https://data.worldbank.org/country/burkina-faso" target="_blank" rel="noopener noreferrer" className="underline">World Bank — Burkina Faso data</a>
              </li>
              <li>
                <a href="https://arcep.bf/" target="_blank" rel="noopener noreferrer" className="underline">ARCEP Burkina Faso — Telecom regulator</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BurkinaFaso;
