// src/pages/Indonesia.jsx (or .tsx)
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Indonesia: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Indonesia | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Indonesia’s internet connectivity, fiber backbone, ISPs, submarine cables, broadband statistics and inte-QT service capabilities across Jakarta, Surabaya, Bali and other key regions.",
    url: "https://www.inte-qt.com/coverage/asia/indonesia",
    about: {
      "@type": "Country",
      name: "Indonesia",
      population: 281000000,
      currency: "IDR (Indonesian Rupiah)",
      languages: ["Indonesian (Bahasa Indonesia)"],
      majorCities: ["Jakarta", "Surabaya", "Bandung", "Denpasar (Bali)"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Indonesia | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Indonesia’s internet connectivity, fiber backbone, ISPs, submarine cables, broadband statistics and inte-QT service capabilities across Jakarta, Surabaya, Bali and other key regions."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/asia/indonesia" />

        {/* Open Graph */}
        <meta property="og:title" content="Internet in Indonesia | inte-QT" />
        <meta property="og:description" content="Mobile-first connectivity, regional fiber backbones and subsea routes — connectivity insights for Jakarta, Surabaya, Bali and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/asia/indonesia" />
        <meta property="og:image" content="https://i.imgur.com/placeholder-1200x630.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internet in Indonesia | inte-QT" />
        <meta name="twitter:description" content="Connectivity overview — submarine cables, domestic backbones, ISPs and enterprise capabilities across Indonesia." />
        <meta name="twitter:image" content="https://i.imgur.com/placeholder-1200x630.png" />

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
            backgroundImage: 'url("https://i.imgur.com/2Wqitmk.jpg")'
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1.5px]" aria-hidden="true" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Indonesia
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            The world's largest archipelago and a fast-growing digital powerhouse — mobile-first connectivity and fiber backbones link thousands of islands into one networked economy.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background" id="main">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-10">
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
                      <li><strong>Population:</strong> ~281 million (2023–2024 estimate)</li>
                      <li><strong>Neighbors:</strong> Malaysia, Papua New Guinea, Timor-Leste; maritime proximity to Singapore, Philippines, Australia</li>
                      <li><strong>Official Language:</strong> Indonesian (Bahasa Indonesia)</li>
                      <li><strong>Currency:</strong> Indonesian Rupiah (IDR)</li>
                      <li><strong>Major Cities:</strong> Jakarta, Surabaya, Bandung, Denpasar (Bali)</li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">Cultural Snapshot</h3>
                      <p className="text-xs text-muted-foreground">Indonesia spans 17,000+ islands and hundreds of ethnic groups; Jakarta and Bali act as major digital and tourism gateways.</p>
                    </div>

                    <div className="text-center mt-6">
                      <img
                        src="https://flagcdn.com/w320/id.png"
                        alt="Indonesia flag"
                        className="mx-auto rounded-lg shadow-lg border border-white/40"
                        loading="lazy"
                        width={160}
                        height={100}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.aside>

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
                      Indonesia is the world's largest archipelagic state, stretching between the Indian and Pacific Oceans. With a young, urbanizing population and a rapidly growing middle class, the country is a key digital market in Southeast Asia.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Internet adoption is driven primarily by mobile broadband, supported by expanding fiber backbones and undersea cables. While connectivity quality varies across islands, large urban corridors enjoy high-capacity links, dense 4G/5G coverage, and multiple domestic and international gateways.
                    </p>

                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Indonesia Map"
                          src="https://www.google.com/maps?q=Indonesia&output=embed"
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
                      <h3 className="text-xl font-bold mb-3">Main Ports & Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li><strong>Airports:</strong> Soekarno–Hatta Intl (Jakarta), Juanda (Surabaya), I Gusti Ngurah Rai (Bali)</li>
                        <li><strong>Seaports:</strong> Tanjung Priok (Jakarta), Tanjung Perak (Surabaya), Belawan (Medan)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Indonesia is a mobile-first market: 4G is ubiquitous in urban areas, 5G is rolling out in major cities, and fixed broadband is expanding through FTTH and cable in dense corridors. Archipelagic geography makes undersea fiber and domestic backbones critical for performance and redundancy.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">Type</th>
                              <th className="py-3 px-4 text-left font-semibold">Estimated Users / Indicator</th>
                              <th className="py-3 px-4 text-left font-semibold">Penetration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">~185 million (2024)</td>
                              <td className="py-3 px-4">~66–67%</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Cellular Ownership</td>
                              <td className="py-3 px-4">~190 million+ individuals</td>
                              <td className="py-3 px-4">~68% of population; SIM penetration higher</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed-line</td>
                              <td className="py-3 px-4">&lt;1% of households</td>
                              <td className="py-3 px-4">Declining; replaced by mobile & VoIP</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband (Urban)</td>
                              <td className="py-3 px-4">Tens of millions of FTTH / cable subs</td>
                              <td className="py-3 px-4">Concentrated in major cities and Java corridor</td>
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
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & International Backbone</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Indonesia is tightly integrated into regional and global connectivity through multiple submarine cable systems. Routes land at key hubs such as Jakarta, Batam, Surabaya and Manado, linking the archipelago to Singapore, other ASEAN countries, the Middle East and Europe.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  These undersea assets, combined with domestic fiber backbones, underpin Indonesia's role as a regional traffic and hosting hub and support cloud, content, fintech and e-commerce ecosystems.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers & Market Landscape</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Key operators: Telkom Indonesia / IndiHome, Telkomsel, Indosat Ooredoo Hutchison, XL Axiata, Biznet, FirstMedia, Smartfren and others. Competition in metro fiber and data-center connectivity is increasing, especially around Jakarta.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity (4G/5G last mile)",
                    "Service Level Agreements (SLA)",
                    "Customer Premises Equipment (CPE) / Routers",
                    "Global Enterprise Management Solutions (GEMS)",
                    "Diverse Gateway Solutions",
                    "DDoS Protection"
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
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. Our teams and local partners can typically deploy services within <span className="font-semibold">4–6 weeks</span> in Jakarta, Surabaya, Bandung, Bali and other key locations, subject to last-mile feasibility.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-QT.com?subject=Indonesia%20Connectivity%20Inquiry" className="text-primary underline font-semibold">Email Us</a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1">
              <li><a href="https://data.worldbank.org/country/indonesia" target="_blank" rel="noopener noreferrer" className="underline">World Bank — Indonesia</a></li>
              <li><a href="https://www.bps.go.id/" target="_blank" rel="noopener noreferrer" className="underline">Statistics Indonesia (BPS)</a></li>
              <li><a href="https://www.kominfo.go.id/" target="_blank" rel="noopener noreferrer" className="underline">Ministry of Communication &amp; Informatics (KOMINFO)</a></li>
              <li><a href="https://www.submarinecablemap.com/" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Indonesia;
