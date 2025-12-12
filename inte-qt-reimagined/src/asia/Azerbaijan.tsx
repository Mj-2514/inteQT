// src/pages/Azerbaijan.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Azerbaijan = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Azerbaijan | Coverage, ISPs, Fiber, DIA, LTE | inte-QT",
    description:
      "Business-grade internet in Azerbaijan: Dedicated Internet Access (DIA), Broadband, Wireless LTE/5G, Managed Services, fiber routes, ISPs and connectivity insights. Explore coverage across Baku and major regions.",
    url: "https://www.inte-qt.com/coverage/asia/azerbaijan",
    about: {
      "@type": "Country",
      name: "Azerbaijan",
      population: 10100000,
      currency: "AZN (Azerbaijani Manat)",
      languages: ["Azerbaijani"],
      neighbouringCountries: ["Russia", "Georgia", "Armenia", "Iran", "Turkey (via Nakhchivan exclave)"],
      majorCities: ["Baku", "Ganja", "Sumqayit"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Azerbaijan | Coverage, ISPs, Fiber, DIA, LTE | inte-QT</title>

        <meta
          name="description"
          content="Business-grade internet in Azerbaijan: Dedicated Internet Access (DIA), Broadband, Wireless LTE/5G, Managed Services, fiber routes, ISPs and connectivity insights. Explore coverage across Baku and major regions."
        />

        <link rel="canonical" href="https://www.inte-qt.com/coverage/asia/azerbaijan" />

        {/* Open Graph */}
        <meta property="og:title" content="Internet in Azerbaijan | inte-QT Global Connectivity" />
        <meta
          property="og:description"
          content="DIA, broadband, LTE, wireless and enterprise connectivity across Azerbaijan with SLAs and global NSOC monitoring."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/asia/azerbaijan" />
        {/* If you have a social preview image, add: <meta property="og:image" content="https://..." /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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
            backgroundImage: 'url("https://i.imgur.com/fUenNFq.jpg")'
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/45 backdrop-blur-[1.5px]" aria-hidden="true" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Azerbaijan
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A fast-modernising hub on the Caspian — strong urban broadband growth, expanding mobile reach, and
            strategic fiber links shaping the region’s connectivity.
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
                        <strong>Population:</strong> 10.1 million (2023 estimate)
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Russia, Georgia, Armenia, Iran; Caspian Sea to the east. (Nakhchivan
                        exclave borders Armenia, Iran, Turkey)
                      </li>
                      <li>
                        <strong>Languages:</strong> Azerbaijani (official)
                      </li>
                      <li>
                        <strong>Currency:</strong> Azerbaijani Manat (AZN)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Baku, Ganja, Sumqayit
                      </li>
                      <li>
                        <strong>Industries:</strong> Oil & Gas, Petrochemicals, Agriculture, Construction, IT, Tourism
                      </li>
                      <li>
                        <strong>Tourists (2023):</strong> Over 1.5 million international visitors
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/az.png"
                        alt="Azerbaijan Flag"
                        className="mx-auto rounded-lg shadow-lg border border-white/40 max-w-[160px]"
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
                      Azerbaijan sits on the western shore of the Caspian Sea and has rapidly modernised its communications
                      infrastructure in recent years. Urban areas — especially Baku — enjoy widespread fiber and LTE
                      availability while rural coverage continues to improve.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The country combines government-led broadband initiatives with private operator investment, producing
                      high household access rates and a strong mobile market that exceeds population in active SIM
                      connections.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Azerbaijan"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972948.3418872142!2d48.30069457065938!3d40.33472618576221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4037c6ca0bd3f1e3%3A0xdeb14f0b0e98c024!2sAzerbaijan!5e0!3m2!1sen!2sus!4v1700000000000"
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
                      <h3 className="text-xl font-bold mb-3">Main Airports & Ports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Heydar Aliyev International Airport (Baku)</li>
                        <li>Ganja International Airport</li>
                        <li>Nakhchivan International Airport</li>
                        <li className="mt-2">
                          <strong>Major Seaport:</strong> Port of Baku
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Mobile connectivity dominates internet access. As of early 2025, there were approximately{" "}
                        <strong>12.2 million active mobile cellular connections</strong> — surpassing the total population
                        and indicating very high mobile penetration. Urban centres have strong fiber and LTE infrastructure
                        while rural expansion continues.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">Type</th>
                              <th className="py-3 px-4 text-left font-semibold">Metric</th>
                              <th className="py-3 px-4 text-left font-semibold">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Cellular</td>
                              <td className="py-3 px-4">~12.2 million connections</td>
                              <td className="py-3 px-4">Penetration &gt;100% (early 2025)</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Household Broadband</td>
                              <td className="py-3 px-4">High urban coverage</td>
                              <td className="py-3 px-4">Extensive GPON and fiber in cities</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">4G / LTE</td>
                              <td className="py-3 px-4">Widespread</td>
                              <td className="py-3 px-4">Major operators provide broad 4G reach</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">5G Trials</td>
                              <td className="py-3 px-4">Limited / Trial</td>
                              <td className="py-3 px-4">Trials in Baku by Azercell and Bakcell</td>
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

        {/* Submarine Cable */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & Internet Backbone</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Azerbaijan is connected to regional terrestrial fiber routes and the Trans-Caspian fiber corridor, which
                  helps link the country to broader international networks via neighboring states and subsea pathways
                  across the Caspian region.
                </p>

                <div className="flex justify-center">
                  <img
                    src="https://i.imgur.com/YrQzLsr.jpg"
                    alt="Submarine Cables Azerbaijan"
                    className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>

            {/* ISPs */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Key operators include Aztelekom, Baktelecom, Nar, and Azercell. These providers offer fixed broadband,
                  mobile data, and wireless services — with the densest fiber and LTE penetration in Baku and other major
                  urban centres.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity",
                    "SLA-backed Services",
                    "CPE / Router Deployment",
                    "Global Enterprise Management",
                    "Diverse Gateway Routing",
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
              Our local operations team can deliver connectivity across Baku and other regions depending on logistics.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-QT.com?subject=Mail from Our Site" className="text-primary underline font-semibold">
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a href="https://www.worldbank.org/" target="_blank" rel="noopener noreferrer" className="underline">
                  World Bank — Azerbaijan
                </a>
              </li>
              <li>
                <a href="https://www.itu.int/" target="_blank" rel="noopener noreferrer" className="underline">
                  ITU — Azerbaijan data
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

export default Azerbaijan;
