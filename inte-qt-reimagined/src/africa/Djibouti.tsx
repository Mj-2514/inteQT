import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Djibouti: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Djibouti | Connectivity, ISPs & Submarine Cable Hub",
    description:
      "Detailed overview of Djibouti's internet connectivity, submarine cable landings, terrestrial routes, telecom operators, broadband statistics and inte-QT service capabilities in Djibouti City and other key locations.",
    url: "https://www.inte-qt.com/coverage/africa/djibouti",
    about: {
      "@type": "Country",
      name: "Djibouti",
      population: 1180000,
      currency: "DJF (Djiboutian franc)",
      languages: ["Arabic", "French", "Somali", "Afar"],
      neighbouringCountries: ["Eritrea", "Ethiopia", "Somalia"],
      majorCities: ["Djibouti City", "Ali Sabieh", "Tadjoura", "Obock", "Dikhil"],
      majorAirports: [
        "Djibouti–Ambouli International Airport (JIB)",
        "Chabelley Airfield (military/logistics)"
      ],
      url: "https://en.wikipedia.org/wiki/Djibouti"
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Djibouti | Connectivity, ISPs & Submarine Cable Hub</title>
        <meta
          name="description"
          content="Detailed overview of Djibouti's internet connectivity, submarine cable landings, terrestrial routes, telecom operators, broadband statistics and inte-QT service capabilities in Djibouti City and other key locations."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/djibouti" />
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
              'url("https://images.unsplash.com/photo-1544704325-8c4f82787278?w=1200&auto=format&fit=crop&q=80")',
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
            Internet in Djibouti
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A strategic Horn of Africa hub at the entrance to the Red Sea, where
            more than a dozen submarine cables land and power regional internet
            traffic into East Africa and the Middle East.
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
                      <li>
                        <strong>Official Name:</strong> Republic of Djibouti
                      </li>
                      <li>
                        <strong>Population:</strong> ~1.18 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main City:</strong> Djibouti City
                      </li>
                      <li>
                        <strong>Other Towns:</strong> Ali Sabieh, Tadjoura, Obock, Dikhil
                      </li>
                      <li>
                        <strong>Location &amp; Neighbours:</strong> Horn of Africa; borders Eritrea, Ethiopia and Somalia; coastline on the Red Sea &amp; Gulf of Aden
                      </li>
                      <li>
                        <strong>Languages:</strong> Arabic &amp; French (official); Somali &amp; Afar widely spoken
                      </li>
                      <li>
                        <strong>Currency:</strong> Djiboutian franc (DJF)
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/dj.png"
                        alt="Djibouti flag"
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
                      Djibouti sits at one of the world's most strategic maritime chokepoints: the Bab-el-Mandeb Strait. Djibouti City hosts ports, logistics parks, free zones and several foreign military bases.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      This geography makes Djibouti a regional digital hub. Multiple submarine cables land at Djibouti Telecom's cable landing stations, and the country is building out data centre and IP transit capabilities. Most local users access the internet via mobile broadband; fixed broadband focuses on urban, enterprise and government sites.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Djibouti"
                          src="https://www.google.com/maps?q=Djibouti&output=embed"
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
                        <li>Djibouti–Ambouli International Airport (JIB)</li>
                        <li>Chabelley Airfield (military / logistics)</li>
                        <li>Regional airstrips supporting ports & logistics</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Djibouti's role as a transit hub gives it relatively strong headline internet indicators for the region. Roughly 65% of the population are online (~765k users as of 2025). Mobile networks provide most last-mile access; fixed broadband remains limited and enterprise-focused.
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
                              <td className="py-3 px-4">Internet Users (start 2025)</td>
                              <td className="py-3 px-4">≈ 765,000</td>
                              <td className="py-3 px-4">~65%</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Social Media Identities</td>
                              <td className="py-3 px-4">≈ 215,000</td>
                              <td className="py-3 px-4">~18%</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Connections</td>
                              <td className="py-3 px-4">≈ 1.0–1.1 million SIMs</td>
                              <td className="py-3 px-4">~85–95%</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband (2024–25 est.)</td>
                              <td className="py-3 px-4">&lt; 30–40k lines</td>
                              <td className="py-3 px-4">&lt; 3–4 per 100 inhabitants</td>
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
                  Djibouti is an important submarine cable hub. Many systems land or transit through Djibouti, including AAE-1, SEACOM, EASSy, EIG, SMW3, ADEN–Djibouti, DARE1 and 2Africa, providing routes to Europe, Asia and the Middle East and backhaul into Ethiopia and the wider Horn of Africa.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/djibouti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    aria-label="Submarine cable map for Djibouti"
                  >
                    <img
                      src="/Djibouti.png"
                      alt="Submarine cables and international routes serving Djibouti"
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
                  Djibouti Telecom is the dominant operator and owner/operator of major cable landing stations. The country focuses on IP transit, colocation and serving regional backhaul to Ethiopia and Somalia. Retail services are mostly mobile data; fixed broadband is enterprise/urban-focused.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "DIA & IP transit in Djibouti City carrier hotels and data centres",
                    "Enterprise Internet & VPN services for ports, free zones and logistics",
                    "Last-mile via fibre, microwave & 4G/LTE where available",
                    "24x7 NOC monitoring & SLA-backed services",
                    "CPE procurement, staging and managed lifecycle",
                    "Layer-3 VPNs and SD-WAN towards Ethiopia & regional sites",
                    "Diverse routing across multiple submarine cable systems",
                    "Managed Security, firewalling and DDoS mitigation at edge"
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
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. We can support connectivity in Djibouti City and selected strategic sites, subject to local infrastructure and regulatory feasibility.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-QT.com?subject=Djibouti%20Connectivity%20Inquiry" className="text-primary underline font-semibold">Email Us</a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://datareportal.com/reports/digital-2025-djibouti" target="_blank" rel="noopener noreferrer" className="underline">DataReportal — Digital 2025: Djibouti</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Djibouti" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Djibouti</a></li>
              <li><a href="https://www.submarinenetworks.com/en/stations/africa/djibouti" target="_blank" rel="noopener noreferrer" className="underline">Submarine Networks — Djibouti Cable Landings</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Djibouti;
