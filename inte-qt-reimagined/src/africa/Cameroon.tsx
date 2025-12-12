import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Cameroon: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Cameroon | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Cameroon's internet connectivity, submarine and terrestrial fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Douala, Yaoundé, Garoua and other key cities.",
    url: "https://www.inte-qt.com/coverage/africa/cameroon",
    about: {
      "@type": "Country",
      name: "Cameroon",
      population: 29900000,
      currency: "XAF (Central African CFA franc)",
      languages: ["French", "English", "Fulfulde", "Ewondo", "Duala", "Bassa", "and 250+ local languages"],
      neighbouringCountries: [
        "Nigeria",
        "Chad",
        "Central African Republic",
        "Equatorial Guinea",
        "Gabon",
        "Republic of the Congo"
      ],
      majorCities: ["Douala", "Yaoundé", "Garoua", "Bafoussam", "Maroua"],
      majorAirports: [
        "Douala International Airport (DLA)",
        "Yaoundé Nsimalen International Airport (NSI)",
        "Garoua International Airport (GOU)",
        "Maroua Salak Airport (MVR)",
        "Ngaoundéré Airport (NGE)"
      ],
      url: "https://en.wikipedia.org/wiki/Cameroon"
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Cameroon | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Cameroon's internet connectivity, submarine and terrestrial fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Douala, Yaoundé, Garoua and other key cities."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/cameroon" />
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
          style={{ backgroundImage: 'url("https://i.imgur.com/M9MWXrG.jpeg")' }}
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
            Internet in Cameroon
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A Central African hub on the Gulf of Guinea — busy ports, growing fiber backbones and a mobile-first digital ecosystem.
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
                      <li><strong>Population:</strong> ~29.9 million (2025 est.)</li>
                      <li><strong>Neighbors:</strong> Nigeria, Chad, CAR, Equatorial Guinea, Gabon, Republic of the Congo</li>
                      <li><strong>Languages:</strong> French &amp; English (official); 250+ local languages</li>
                      <li><strong>Currency:</strong> Central African CFA franc (XAF)</li>
                      <li><strong>Major Cities:</strong> Douala, Yaoundé, Garoua, Bafoussam, Maroua</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/cm.png"
                        alt="Cameroon Flag"
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
                <Card className="rounded-3xl shadow-xl border border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">A Brief Overview</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Cameroon stretches from the Atlantic coast into Central Africa. Douala is the economic engine and main port; Yaoundé is the political capital. Fiber backbones and submarine cable landings on the coast provide international capacity, while inland connectivity expands via national routes.
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The market is mobile-first and growing: many SIMs in use, rising mobile data uptake, and steady expansion of enterprise fiber. Fixed broadband remains limited outside major metro areas.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Cameroon"
                          src="https://www.openstreetmap.org/export/embed.html?bbox=7.5%2C1.5%2C17.0%2C13.5&layer=mapnik&marker=4.05%2C9.70"
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
                        <li>Douala International Airport (DLA)</li>
                        <li>Yaoundé Nsimalen International Airport (NSI)</li>
                        <li>Garoua International Airport (GOU)</li>
                        <li>Maroua Salak Airport (MVR)</li>
                        <li>Ngaoundéré Airport (NGE)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Mobile operators lead consumer access; enterprise and wholesale demand is concentrated in Douala and Yaoundé. National projects extend fiber inland and across borders for resilience and regional traffic.
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
                              <td className="py-3 px-4">Internet Users (end 2025)</td>
                              <td className="py-3 px-4">≈ 12.6 million</td>
                              <td className="py-3 px-4">~41.9%</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Connections</td>
                              <td className="py-3 px-4">≈ 29.0 million SIMs</td>
                              <td className="py-3 px-4">~96% (multi-SIM common)</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Social Media Identities</td>
                              <td className="py-3 px-4">≈ 5.9 million accounts</td>
                              <td className="py-3 px-4">~19–20%</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">≈ 600–800k lines (est.)</td>
                              <td className="py-3 px-4">~2–3 per 100 inhabitants</td>
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
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & National Backbone</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Submarine cables land on Cameroon's Atlantic coast and feed national optical-fiber backbones. These coastal landing stations connect Cameroon to Gulf of Guinea systems and, via cross-border terrestrial routes, to neighbouring inland countries.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/cameroon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="https://i.imgur.com/Yfqi1a0.png"
                      alt="Submarine cables and national backbone serving Cameroon"
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
                  Major operators include MTN Cameroon, Orange Cameroon, Camtel and Nexttel. Camtel provides backbone and wholesale services; mobile operators provide mass-market broadband.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in Douala, Yaoundé and regional cities",
                    "Business Broadband (fiber, copper, wireless)",
                    "4G / LTE last-mile and backup connectivity",
                    "SLA-backed services with 24x7 monitoring",
                    "CPE / Router supply, installation & management",
                    "MPLS / SD-WAN for multi-site enterprises",
                    "Diverse routing via coastal & cross-border routes",
                    "Managed Security, VPN and DDoS mitigation"
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
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. We support deployments across Douala, Yaoundé, Garoua, Bafoussam, Maroua and other regional centres.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-QT.com?subject=Cameroon%20Connectivity%20Inquiry" className="text-primary underline font-semibold">Email Us</a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a href="https://datareportal.com/reports/digital-2026-cameroon" target="_blank" rel="noopener noreferrer" className="underline">DataReportal — Digital 2026: Cameroon</a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Cameroon" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Cameroon</a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Telecommunications_in_Cameroon" target="_blank" rel="noopener noreferrer" className="underline">Telecommunications in Cameroon — Wikipedia</a>
              </li>
              <li>
                <a href="https://www.submarinecablemap.com/country/cameroon" target="_blank" rel="noopener noreferrer" className="underline">SubmarineCableMap — Cameroon</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Cameroon;
