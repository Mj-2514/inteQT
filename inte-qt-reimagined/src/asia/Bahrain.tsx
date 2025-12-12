// src/pages/Bahrain.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Bahrain = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Bahrain | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Bahrain’s internet connectivity, 5G networks, ISPs, submarine cables, broadband statistics and inte-QT service capabilities in Manama, Riffa and Muharraq.",
    url: "https://www.inte-qt.com/coverage/asia/bahrain",
    about: {
      "@type": "Country",
      name: "Bahrain",
      population: 1520000,
      currency: "BHD (Bahraini Dinar)",
      languages: ["Arabic", "English"],
      neighbouringCountries: ["Saudi Arabia (via King Fahd Causeway)"],
      majorCities: ["Manama", "Riffa", "Muharraq"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Bahrain | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Bahrain’s internet connectivity, 5G networks, ISPs, submarine cables, broadband statistics and inte-QT service capabilities in Manama, Riffa and Muharraq."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/asia/bahrain" />

        {/* Open Graph */}
        <meta property="og:title" content="Internet in Bahrain | Connectivity, ISPs & Broadband Overview" />
        <meta
          property="og:description"
          content="Detailed overview of Bahrain’s internet connectivity, 5G networks, ISPs, submarine cables, broadband statistics and inte-QT service capabilities in Manama, Riffa and Muharraq."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/asia/bahrain" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

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
          style={{
            backgroundImage: 'url("https://i.imgur.com/HT9Nxyt.jpeg")'
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
            Internet in Bahrain
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A Gulf island hub powered by finance, innovation, and nation-wide 5G — with one of the highest internet
            penetration rates in the Middle East.
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
                        <strong>Population:</strong> 1.52 million (2023 estimate)
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Island nation in the Persian Gulf; connected to Saudi Arabia via King
                        Fahd Causeway.
                      </li>
                      <li>
                        <strong>Languages:</strong> Arabic (official), English widely spoken
                      </li>
                      <li>
                        <strong>Currency:</strong> Bahraini Dinar (BHD)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Finance, Petroleum, Aluminum, Construction, Tourism, ICT
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Manama, Riffa, Muharraq
                      </li>
                      <li>
                        <strong>Climate:</strong> Arid desert; hot summers, mild winters
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">Popular Sports & Cuisine</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        <strong>Sports:</strong> Football, Formula One, martial arts.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <strong>Food:</strong> Machboos, Muhammar, Samboosa, grilled Hammour.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/bh.png"
                        alt="Flag of Bahrain"
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
                      Bahrain is an island nation positioned as a financial and innovation hub for the GCC. Manama anchors
                      economic activity supported by a large expatriate workforce and advanced telecommunications
                      infrastructure.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The country invested early in 5G and fiber, achieving high internet penetration and strong regulatory
                      support for digital services.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Bahrain"
                          src="https://www.google.com/maps?q=Bahrain&output=embed"
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
                      <h3 className="text-xl font-bold mb-3">Main Ports & Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Khalifa Bin Salman Port</li>
                        <li>Bahrain International Airport (Manama)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Landline & Mobile Access</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Mobile dominates Bahrain’s telecom landscape. By end of 2023, mobile subscriptions reached about
                        2.42 million, exceeding the population and indicating penetration above 150%.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">Type</th>
                              <th className="py-3 px-4 text-left font-semibold">Indicator</th>
                              <th className="py-3 px-4 text-left font-semibold">Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Landline</td>
                              <td className="py-3 px-4">Business & residential</td>
                              <td className="py-3 px-4">Used but secondary to mobile</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Subscriptions</td>
                              <td className="py-3 px-4">2.42 million</td>
                              <td className="py-3 px-4">&gt;150% penetration (2023)</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">~1.61 million</td>
                              <td className="py-3 px-4">~99% active online (early 2025)</td>
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

        {/* Submarine Cables & Wireless / Access */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* Submarine Cables */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Submarine Cables Connecting Bahrain</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Bahrain is linked to multiple high-capacity submarine cable systems, providing robust international
                  bandwidth and redundancy via nearby landing points and Gulf regional networks.
                </p>

                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li><strong>FLAG:</strong> Core link connecting Europe to Asia via the Middle East.</li>
                  <li><strong>FALCON:</strong> Enhances Gulf-region connectivity.</li>
                  <li><strong>Tata TGN-Gulf:</strong> High-speed links between GCC, Europe, and Asia.</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  These systems reduce latency for international traffic and improve resilience across the region.
                </p>
              </CardContent>
            </Card>

            {/* Wireless Networks & Access */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Wireless Networks & Internet Access</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Bahrain achieved broad commercial 5G rollout early and all major operators (Batelco, Zain, STC Bahrain)
                  offer 5G services. Urban centers enjoy high-speed fiber plus dense 4G/5G coverage.
                </p>

                <div className="flex justify-center">
                  <img
                    src="https://i.imgur.com/778xIfh.png"
                    alt="Submarine Cables Bahrain"
                    className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>

            {/* ISPs & Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers & Our Capabilities</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Primary providers: Batelco, Zain Bahrain, STC Bahrain. They offer fixed broadband, mobile data, and
                  wireless services with leading mobile download speeds in the region.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT provides DIA, Business Broadband, managed services, and NSOC-backed monitoring for enterprise
                  customers across Bahrain.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Services</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity",
                    "Service Level Agreements (SLA)",
                    "Customer Premises Equipment (CPE) / Routers",
                    "Global Enterprise Management Solutions (GEMS)",
                    "Diverse Gateway Solutions",
                    "DDoS Protection"
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
              Our local operations and partners can deliver high-availability services across Manama, Riffa and Muharraq
              subject to site feasibility.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Bahrain%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>
                <a href="https://data.worldbank.org/country/bahrain" target="_blank" rel="noopener noreferrer" className="underline">
                  World Bank — Bahrain
                </a>
              </li>
              <li>
                <a href="https://www.tra.org.bh/" target="_blank" rel="noopener noreferrer" className="underline">
                  Telecommunications Regulatory Authority
                </a>
              </li>
              <li>
                <a href="https://www.bahrainedb.com/" target="_blank" rel="noopener noreferrer" className="underline">
                  Bahrain Economic Development Board
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

export default Bahrain;
