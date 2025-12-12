// src/pages/Afghanistan.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Afghanistan: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Afghanistan | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Afghanistan internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Kabul, Kandahar and Herat.",
    url: "https://www.inte-qt.com/coverage/asia/afghanistan",
    about: {
      "@type": "Country",
      name: "Afghanistan",
      population: 41100000,
      currency: "AFN (Afghani)",
      languages: ["Pashto", "Dari", "Uzbek", "Turkmen"],
      neighbouringCountries: ["Pakistan", "Iran", "Turkmenistan", "Uzbekistan", "Tajikistan", "China"],
      majorCities: ["Kabul", "Kandahar", "Herat"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Afghanistan | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Afghanistan internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Kabul, Kandahar and Herat."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/asia/afghanistan" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

        {/* Basic Open Graph */}
        <meta property="og:title" content="Internet in Afghanistan | Connectivity, ISPs & Broadband Overview" />
        <meta
          property="og:description"
          content="Detailed overview of Afghanistan internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Kabul, Kandahar and Herat."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/asia/afghanistan" />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative py-28 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://i.imgur.com/iI9URSO.jpg")'
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Afghanistan
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A land shaped by mountains, history, and resilience — where connectivity is evolving and opportunity waits
            behind every link.
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
                      <li>
                        <strong>Official Name:</strong> Islamic Republic of Afghanistan
                      </li>
                      <li>
                        <strong>Population:</strong> 41.1 million (2023 est.)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Kabul, Kandahar, Herat
                      </li>
                      <li>
                        <strong>Languages:</strong> Pashto, Dari, Uzbek, Turkmen
                      </li>
                      <li>
                        <strong>Currency:</strong> Afghani (AFN)
                      </li>
                      <li>
                        <strong>Neighbours:</strong> Pakistan, Iran, Turkmenistan, Uzbekistan, Tajikistan, China
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/af.png"
                        alt="Flag of Afghanistan"
                        className="mx-auto rounded-lg shadow-lg border border-white/40"
                        loading="lazy"
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
                      Afghanistan sits at the crossroads of Central and South Asia — rich in culture and terrain. Despite
                      long-running political and logistic challenges, urban centers are expanding and digital adoption is
                      gradually increasing.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Connectivity is heavily influenced by geography: mountainous interior regions are hard to reach and
                      international capacity is provided via terrestrial fiber links through neighboring countries.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Afghanistan"
                          src="https://www.google.com/maps?q=Afghanistan&output=embed"
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
                        <li>Kabul — Hamid Karzai International Airport (KBL)</li>
                        <li>Kandahar International Airport (KDH)</li>
                        <li>Herat International Airport (HEA)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Afghanistan depends on cross-border fiber routes for international capacity (primarily via Pakistan,
                        Iran and China). Mobile networks carry most consumer traffic; fixed broadband penetration remains
                        low outside major cities due to cost and terrain.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">Type</th>
                              <th className="py-3 px-4 text-left font-semibold">Estimate</th>
                              <th className="py-3 px-4 text-left font-semibold">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Broadband Subscribers</td>
                              <td className="py-3 px-4">~26,570</td>
                              <td className="py-3 px-4">&lt;0.1% penetration</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Cellular</td>
                              <td className="py-3 px-4">~23 million</td>
                              <td className="py-3 px-4">Mobile-first market; 3G/4G widely used</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">~13.2 million</td>
                              <td className="py-3 px-4">~30% of population (estimate)</td>
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

        {/* International Routes & Transit / Submarine note */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">International Routes & Transit</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  As a landlocked country, Afghanistan relies on terrestrial fiber routes from Pakistan, Iran and China
                  to reach regional submarine cable systems. These terrestrial links, PoPs in neighboring countries, and
                  cross-border transit agreements determine capacity, latency and redundancy.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/afghanistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="https://i.imgur.com/fA7SRVj.jpg"
                      alt="Regional transit map showing terrestrial routes serving Afghanistan"
                      className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                      loading="lazy"
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
                  Major operators include Roshan, Etisalat Afghanistan (now branded), Afghan Telecom and several regional
                  and local carriers. Enterprise services typically use leased lines, DIA and managed CPE; mobile networks
                  handle most consumer and SME traffic.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) across Kabul, Kandahar, Herat",
                    "IP Transit & Regional peering via neighboring PoPs",
                    "Hybrid wireless + fiber last-mile solutions",
                    "CPE staging, router configuration and managed services",
                    "SLA-backed NOC monitoring and escalation",
                    "Traffic engineering and multi-path routing",
                    "Security services (VPN, firewalling, DDoS protection)",
                    "Feasibility studies and on-the-ground logistics support"
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
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>.
              Our local operations team can support connectivity planning across Kabul, Herat and other feasible sites
              depending on supply and logistics.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Afghanistan%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a href="https://data.worldbank.org/country/afghanistan" target="_blank" rel="noopener noreferrer" className="underline">
                  World Bank — Afghanistan
                </a>
              </li>
              <li>
                <a href="https://www.submarinecablemap.com/" target="_blank" rel="noopener noreferrer" className="underline">
                  Submarine Cable Map
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Afghanistan;
