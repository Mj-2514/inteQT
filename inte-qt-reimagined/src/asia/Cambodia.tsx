// src/pages/Cambodia.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Cambodia: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Cambodia | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Cambodia's internet connectivity, submarine and terrestrial fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Phnom Penh, Siem Reap, Sihanoukville and other key cities.",
    url: "https://www.inte-qt.com/coverage/asia/cambodia",
    about: {
      "@type": "Country",
      name: "Cambodia",
      population: 17900000,
      currency: "KHR (Cambodian riel), USD widely used",
      languages: ["Khmer"],
      majorCities: ["Phnom Penh", "Siem Reap", "Sihanoukville", "Battambang"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Cambodia | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Cambodia's internet connectivity, submarine and terrestrial fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Phnom Penh, Siem Reap, Sihanoukville and other key cities."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/asia/cambodia" />

        {/* Open Graph */}
        <meta property="og:title" content="Internet in Cambodia | Connectivity, ISPs & Broadband Overview" />
        <meta
          property="og:description"
          content="Cambodia: mobile-first networks, growing fixed broadband in urban hubs, and submarine & terrestrial routes improving international capacity."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/asia/cambodia" />
        <meta property="og:image" content="https://i.imgur.com/P8m793C.jpeg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internet in Cambodia | inte-QT" />
        <meta
          name="twitter:description"
          content="Mobile-first networks, subsea landings in Sihanoukville and expanding urban fibre — connectivity insights and enterprise services."
        />
        <meta name="twitter:image" content="https://i.imgur.com/P8m793C.jpeg" />

        {/* JSON-LD */}
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
          style={{ backgroundImage: 'url("https://i.imgur.com/P8m793C.jpeg")' }}
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
            Internet in Cambodia
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A fast-digitising Mekong economy where mobile networks dominate,
            new airports and subsea cables are reshaping connectivity, and
            demand for data keeps climbing year after year.
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
                      <li><strong>Population:</strong> ~17.9 million (2025 est.)</li>
                      <li><strong>Neighbors:</strong> Thailand, Laos, Vietnam; Gulf of Thailand</li>
                      <li><strong>Languages:</strong> Khmer (official); English & French used in business/tourism</li>
                      <li><strong>Currency:</strong> Cambodian riel (KHR); US dollar widely used</li>
                      <li><strong>Major Cities:</strong> Phnom Penh, Siem Reap, Sihanoukville, Battambang</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/kh.png"
                        alt="Flag of Cambodia"
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
                {/* Overview */}
                <Card className="rounded-3xl shadow-xl border border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">A Brief Overview</h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Cambodia sits between Thailand, Laos and Vietnam with a long coastline on the Gulf of Thailand.
                      Phnom Penh is the political and economic centre, Siem Reap anchors tourism around Angkor, and
                      Sihanoukville is the key deep-water port and coastal hub.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The country is strongly mobile-first. Telecom operators run dense 4G networks, mobile connections
                      exceed the population, and social media adoption is high. Fixed broadband remains shallow outside
                      main cities, while subsea cables landing in Sihanoukville and terrestrial links to neighbors improve
                      international capacity.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Cambodia"
                          src="https://www.openstreetmap.org/export/embed.html?bbox=101.0%2C9.5%2C108.0%2C15.0&layer=mapnik&marker=11.56%2C104.92"
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
                        <li>Techo International Airport (KTI) — Phnom Penh</li>
                        <li>Siem Reap–Angkor International Airport (SAI)</li>
                        <li>Sihanoukville International Airport (KOS)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Cambodia's market is dominated by Smart Axiata, Metfone and Cellcard. Mobile connections are ~143%
                        of the population (multi-SIM common). Fixed broadband is growing from a low base, mainly in urban hubs.
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
                              <td className="py-3 px-4">Internet Users (late 2025)</td>
                              <td className="py-3 px-4">≈ 10.8 million</td>
                              <td className="py-3 px-4">~60–61%</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Connections</td>
                              <td className="py-3 px-4">≈ 25.3 million SIMs</td>
                              <td className="py-3 px-4">~143%</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Social Media Identities</td>
                              <td className="py-3 px-4">≈ 12.9 million accounts</td>
                              <td className="py-3 px-4">~72%</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband (2023 est.)</td>
                              <td className="py-3 px-4">≈ 230–250k lines</td>
                              <td className="py-3 px-4">~3–4 per 100 inhabitants</td>
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
                  Cambodia's international bandwidth comes from submarine cables landing at Sihanoukville and terrestrial
                  fiber links into Thailand, Laos and Vietnam. Systems like MCT and AAE-1 provide regional and global
                  onward connectivity.
                </p>

                <div className="flex justify-center">
                  <a href="https://www.submarinecablemap.com/country/cambodia" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img
                      src="/Cambodia.png"
                      alt="Submarine cables and international routes serving Cambodia"
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
                  Major players include Smart Axiata, Metfone and Cellcard, with Ezecom/Telcotech and other ISPs providing fiber,
                  enterprise and wholesale services. Fixed services target business, urban households and hospitality.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in Phnom Penh, Siem Reap & Sihanoukville",
                    "Business Broadband for offices, retail and hospitality",
                    "4G / LTE and wireless last-mile with backup options",
                    "SLA-backed Services with 24x7 monitoring",
                    "CPE / Router deployment and lifecycle management",
                    "MPLS / SD-WAN for multi-site enterprises",
                    "Diverse routing via MCT, AAE-1 and regional terrestrial paths",
                    "Managed Security, VPN and DDoS mitigation",
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
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>.
              We can support connectivity across Phnom Penh, Siem Reap, Sihanoukville and other provincial centres,
              subject to local infrastructure and last-mile feasibility.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-QT.com?subject=Cambodia%20Connectivity%20Inquiry" className="text-primary underline font-semibold">
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://datareportal.com/reports/digital-2025-cambodia" target="_blank" rel="noopener noreferrer" className="underline">DataReportal — Digital 2025: Cambodia</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Cambodia" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Cambodia</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Telecommunications_in_Cambodia" target="_blank" rel="noopener noreferrer" className="underline">Telecommunications in Cambodia</a></li>
              <li><a href="https://www.submarinenetworks.com/en/stations/asia/cambodia" target="_blank" rel="noopener noreferrer" className="underline">Submarine Networks — Cambodia Cable Landings</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Cambodia;
