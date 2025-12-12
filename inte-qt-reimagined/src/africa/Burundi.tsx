import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Burundi: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Burundi | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Burundi's internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Gitega, Bujumbura and other key cities.",
    url: "https://www.inte-qt.com/coverage/africa/burundi",
    about: {
      "@type": "Country",
      name: "Burundi",
      population: 14400000,
      currency: "BIF (Burundian franc)",
      languages: ["Kirundi", "French", "English", "Swahili"],
      neighbouringCountries: ["Rwanda", "Tanzania", "Democratic Republic of the Congo"],
      majorCities: ["Gitega", "Bujumbura", "Ngozi", "Muyinga", "Rumonge"],
      majorAirports: ["Bujumbura Melchior Ndadaye Intl. Airport (BJM)", "Gitega Airport"],
      url: "https://en.wikipedia.org/wiki/Burundi",
    },
  };

  return (
    <>
      <Helmet>
        <title>Internet in Burundi | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Burundi's internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Gitega, Bujumbura and other key cities."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/burundi" />
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
          style={{ backgroundImage: 'url("https://i.imgur.com/uGzREJd.jpeg")' }}
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
            Internet in Burundi
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-white/90 max-w-3xl mx-auto text-base md:text-lg mt-4 leading-relaxed"
          >
            A dense, landlocked nation in the Great Lakes region where mobile networks drive connectivity and fiber follows trade routes to the coast.
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
                        <strong>Population:</strong> ~14.4 million (2025 est.)
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Rwanda, Tanzania, DR Congo
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Gitega, Bujumbura, Ngozi, Muyinga, Rumonge
                      </li>
                      <li>
                        <strong>Major Airports:</strong> Bujumbura Melchior Ndadaye Intl. (BJM), Gitega Airport
                      </li>
                      <li>
                        <strong>Languages:</strong> Kirundi, French, English; Swahili used in trade
                      </li>
                      <li>
                        <strong>Currency:</strong> Burundian franc (BIF)
                      </li>
                    </ul>

                    <div className="mt-4 text-center">
                      <motion.img
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        src="https://flagcdn.com/w320/bi.png"
                        alt="Burundi flag"
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
                      Burundi is a compact, landlocked country in East Africa's Great Lakes region. Gitega is the capital, while Bujumbura remains the main commercial and logistics hub on Lake Tanganyika.
                    </p>

                    <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                      Mobile connectivity is widespread but internet adoption is limited due to affordability and infrastructure gaps. Recent backbone projects and cross-border fiber links are improving capacity.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-2 text-base">Map</h3>
                      <div className="rounded-lg overflow-hidden shadow border border-white/20">
                        <div className="map-responsive" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                          <iframe
                            title="Map of Burundi"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=28.8%2C-4.7%2C31.0%2C-2.0&layer=mapnik&marker=-3.43%2C29.92"
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
                        <li>Bujumbura Melchior Ndadaye Intl. Airport (BJM)</li>
                        <li>Gitega Airport (domestic)</li>
                        <li>Kirundo Airport (regional)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border border-white/10 shadow-lg">
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                        Burundi's telecom market is driven by mobile. Operators like Lumitel and Econet Leo provide the bulk of mobile broadband coverage, while ONATEL/Onamob and a handful of ISPs deliver fixed and enterprise services in urban centres.
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
                              <td className="py-2 px-3">Internet Users (end 2025)</td>
                              <td className="py-2 px-3">≈ 1.6 million</td>
                              <td className="py-2 px-3">~11% of population</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Mobile Connections</td>
                              <td className="py-2 px-3">≈ 8.8 million SIMs</td>
                              <td className="py-2 px-3">~61 per 100 people</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Social Media Users</td>
                              <td className="py-2 px-3">≈ 1.2 million IDs</td>
                              <td className="py-2 px-3">~8% of population</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Fixed Broadband</td>
                              <td className="py-2 px-3">Very limited (tens of thousands)</td>
                              <td className="py-2 px-3">&lt;1% — mostly urban / enterprise</td>
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

        {/* Submarine / Terrestrial Backbone */}
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-6xl space-y-6">
            <Card className="rounded-2xl border border-white/10 shadow-lg">
              <CardContent className="p-4 text-center">
                <h2 className="text-2xl font-bold mb-2">Regional Fiber Routes &amp; International Capacity</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed text-center max-w-3xl mx-auto text-sm">
                  Burundi relies on terrestrial fiber corridors that connect to submarine cable landing stations in Tanzania and Kenya. Backbone projects such as the Burundi Backbone System (BBS) and cross-border links into Tanzania and Rwanda are improving international capacity.
                </p>

                <div className="flex justify-center mt-3">
                  <a href="https://www.submarinecablemap.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://i.imgur.com/yVhDYfd.png"
                      alt="Regional fiber routes and submarine connectivity serving Burundi"
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
                  Major operators include Lumitel, Econet Leo and ONATEL/Onamob. These provide mobile and enterprise services; VSAT and microwave remain important for remote connectivity.
                </p>

                <h3 className="text-lg font-semibold mb-3">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Dedicated Internet Access (DIA) over fiber & microwave",
                    "Business Broadband and SME access",
                    "4G / LTE last-mile with backup options",
                    "SLA-backed Services with proactive monitoring",
                    "CPE / Router deployment & lifecycle management",
                    "MPLS / SD-WAN for multi-site networks",
                    "Diverse routing via multiple regional gateways",
                    "Managed Security, VPN and DDoS mitigation",
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
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. We can support connectivity across Gitega, Bujumbura, Ngozi, Muyinga and other regional centres, subject to last-mile feasibility.
            </p>

            <p className="mb-4">
              <a href="mailto:sales@inte-qt.com?subject=Burundi%20Connectivity%20Inquiry" className="text-primary underline font-semibold">Email Us</a>
            </p>

            <h4 className="mb-2 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>
                <a href="https://datareportal.com/reports/digital-2026-burundi" target="_blank" rel="noopener noreferrer" className="underline">DataReportal — Digital 2026: Burundi</a>
              </li>
              <li>
                <a href="https://data.worldbank.org/country/burundi" target="_blank" rel="noopener noreferrer" className="underline">World Bank — Burundi data</a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Communications_in_Burundi" target="_blank" rel="noopener noreferrer" className="underline">Communications in Burundi — Wikipedia</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Burundi;
