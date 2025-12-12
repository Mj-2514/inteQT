import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Chad: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Chad | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Chad's internet connectivity, terrestrial fiber routes to submarine cables, ISPs, broadband statistics and inte-QT service capabilities in N'Djamena, Moundou, Sarh and other key cities.",
    url: "https://www.inte-qt.com/coverage/africa/chad",
    about: {
      "@type": "Country",
      name: "Chad",
      population: 21000000,
      currency: "XAF (Central African CFA franc)",
      languages: ["Arabic", "French", "Chadian Arabic", "Local languages"],
      neighbouringCountries: ["Libya", "Sudan", "Central African Republic", "Cameroon", "Nigeria", "Niger"],
      majorCities: ["N'Djamena", "Moundou", "Sarh", "Abéché", "Kélo", "Koumra", "Pala"],
      majorAirports: [
        "N'Djamena International Airport (NDJ)",
        "Moundou Airport (MQQ)",
        "Abéché Airport (AEH)",
        "Faya-Largeau Airport (FYT)"
      ],
      url: "https://en.wikipedia.org/wiki/Chad"
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Chad | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Chad's internet connectivity, terrestrial fiber routes to submarine cables, ISPs, broadband statistics and inte-QT service capabilities in N'Djamena, Moundou, Sarh and other key cities."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/chad" />
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
              'url("https://images.unsplash.com/photo-1676034625780-f662d34ac673?w=1200&auto=format&fit=crop&q=80")',
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
            Internet in Chad
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A vast, landlocked Sahel–Sahara state where mobile networks carry most traffic and new regional fiber corridors aim to link N&apos;Djamena to coastal submarine cables.
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
                      <li><strong>Population:</strong> ~21.0 million (2025 est.)</li>
                      <li><strong>Neighbors:</strong> Libya, Sudan, Central African Republic, Cameroon, Nigeria, Niger</li>
                      <li><strong>Languages:</strong> Arabic &amp; French (official); Chadian Arabic and 100+ local languages</li>
                      <li><strong>Currency:</strong> Central African CFA franc (XAF)</li>
                      <li><strong>Major Cities:</strong> N'Djamena, Moundou, Sarh, Abéché, Kélo, Koumra, Pala</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/td.png"
                        alt="Chad Flag"
                        className="mx-auto rounded-lg shadow-lg border border-white/40"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.aside>

              {/* RIGHT — MAIN CONTENT */}
              <motion.article initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-10">
                <Card className="rounded-3xl shadow-xl border border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">A Brief Overview</h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Chad stretches from the Sahara in the north to more fertile southern savannahs. N&apos;Djamena, near Cameroon and Nigeria, is the centre for government, trade and international connectivity; Moundou, Sarh and Abéché anchor regional economies.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Mobile networks provide nearly all consumer connectivity; fewer than 15% of people are online and fixed broadband is rare outside N&apos;Djamena. Terrestrial fiber corridors through neighbouring states (and emerging Trans-Saharan backbones) are the primary routes to submarine cable systems.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Chad"
                          src="https://www.openstreetmap.org/export/embed.html?bbox=11.0%2C7.5%2C25.5%2C24.5&layer=mapnik&marker=12.11%2C15.05"
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
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-sm">
                        <li>N&apos;Djamena International Airport (NDJ) — primary international gateway</li>
                        <li>Moundou Airport (MQQ)</li>
                        <li>Abéché Airport (AEH)</li>
                        <li>Faya-Largeau Airport (FYT)</li>
                        <li>Sarh Airport (SRH)</li>
                        <li>Am Timan Airport (AMC)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                        Internet use and social media are growing from a low base. Mobile connections are ~70% (multi-SIM and some non-data). Affordability, distances and security affect rollout, but regional backbone projects are improving options to reach subsea capacity.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">Type</th>
                              <th className="py-3 px-4 text-left font-semibold">Users / Connections</th>
                              <th className="py-3 px-4 text-left font-semibold">Penetration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">≈ 2.79 million</td>
                              <td className="py-3 px-4">~13.2%</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Social Media Identities</td>
                              <td className="py-3 px-4">≈ 2.38 million</td>
                              <td className="py-3 px-4">~11.3%</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Connections</td>
                              <td className="py-3 px-4">≈ 14.5 million SIMs</td>
                              <td className="py-3 px-4">~69.8%</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">Very low; limited to select sites</td>
                              <td className="py-3 px-4">&lt;1 per 100 inhabitants</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-[0.78rem] text-muted-foreground mt-3 leading-relaxed">
                        Headline figures are estimates (DataReportal / ITU / GSMA / World Bank).
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Backbone & Regional Access to Submarine Cables */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Regional Fiber & Access to Submarine Cables</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Chad has no direct submarine cable landings. Traffic backhauls via terrestrial fiber through Cameroon, Niger, Nigeria and Sudan. Large projects (Trans-Saharan / regional backbones) aim to give Chad multiple diverse routes to Mediterranean and Atlantic subsea systems.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Chad.png"
                      alt="Regional fiber routes connecting Chad to submarine cables"
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
                  The market includes Airtel Chad and Moov Africa historically, alongside smaller ISPs and satellite providers. Consumer access is primarily mobile data; fixed and fiber services are used by government, NGOs and enterprises in N&apos;Djamena.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in N'Djamena and regional cities",
                    "Business Broadband via fiber, microwave and 4G",
                    "4G / LTE last-mile and backup connectivity",
                    "SLA-backed services with monitoring",
                    "CPE / Router sourcing, configuration & maintenance",
                    "MPLS / SD-WAN for multi-site enterprises and NGOs",
                    "Diverse routing via Cameroon, Niger and regional gateways",
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
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. We can support connectivity across N&apos;Djamena, Moundou, Sarh, Abéché and other strategic locations.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-QT.com?subject=Chad%20Connectivity%20Inquiry" className="text-primary underline font-semibold">Email Us</a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li><a href="https://datareportal.com/reports/digital-2026-chad" target="_blank" rel="noreferrer" className="underline">DataReportal — Digital 2026: Chad</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Chad" target="_blank" rel="noreferrer" className="underline">Wikipedia — Chad</a></li>
              <li><a href="https://developingtelecoms.com/telecom-business/telecom-trends-forecasts/Categories/8574-chad-offers-potential-despite-challenges-r-m.html" target="_blank" rel="noreferrer" className="underline">Chad Telecoms Market Overview</a></li>
              <li><a href="https://dabafinance.com/en/news/chad-niger-trans-saharan-backbone-internet-connectivity-cemac-sahel" target="_blank" rel="noreferrer" className="underline">Trans-Saharan Backbone (DTS) — Chad &amp; Niger</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Chad;
