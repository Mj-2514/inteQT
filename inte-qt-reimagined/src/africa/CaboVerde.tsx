import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const CaboVerde: React.FC = () => {
  // --- JSON-LD (SEO) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Cabo Verde | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Cabo Verde's internet connectivity, submarine and domestic cables, ISPs, broadband statistics and inte-QT service capabilities in Praia, Mindelo, Sal, Boa Vista and other islands.",
    url: "https://www.inte-qt.com/coverage/africa/cabo-verde",
    about: {
      "@type": "Country",
      name: "Cabo Verde",
      population: 527000,
      currency: "CVE (Cape Verdean escudo)",
      languages: ["Portuguese", "Cape Verdean Creole (Kriolu)"],
      neighbouringCountries: [
        "Senegal (closest mainland)",
        "The Gambia",
        "Mauritania",
        "Guinea-Bissau",
      ],
      majorCities: ["Praia", "Mindelo", "Santa Maria", "Espargos", "Assomada"],
      majorAirports: [
        "Amílcar Cabral International Airport (SID) — Sal",
        "Nelson Mandela International Airport (RAI) — Praia, Santiago",
        "Cesária Évora International Airport (VXE) — São Vicente",
        "Aristides Pereira International Airport (BVC) — Boa Vista",
      ],
      url: "https://en.wikipedia.org/wiki/Cape_Verde",
    },
  };

  return (
    <>
      <Helmet>
        <title>Internet in Cabo Verde | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Cabo Verde's internet connectivity, submarine and domestic cables, ISPs, broadband statistics and inte-QT service capabilities in Praia, Mindelo, Sal, Boa Vista and other islands."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/cabo-verde" />
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
          style={{ backgroundImage: 'url("https://i.imgur.com/pXSWfEx.jpeg")' }}
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
            Internet in Cabo Verde
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            An Atlantic island hub where submarine cables land, mobile and broadband penetration are among Africa's highest, and the government aims to turn the archipelago into a digital gateway between Africa, Europe and the Americas.
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
                        <strong>Population:</strong> ~527,000 (2025 est.)
                      </li>
                      <li>
                        <strong>Neighbors:</strong> No land borders; closest mainland:
                        Senegal, plus The Gambia, Mauritania, Guinea-Bissau
                      </li>
                      <li>
                        <strong>Languages:</strong> Portuguese (official), Cape Verdean Creole (Kriolu)
                      </li>
                      <li>
                        <strong>Currency:</strong> Cape Verdean escudo (CVE)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Praia, Mindelo, Santa Maria, Espargos, Assomada
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/cv.png"
                        alt="Cabo Verde Flag"
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
                      Cabo Verde is a volcanic archipelago of ten islands in the central Atlantic Ocean, roughly 570 km off the coast of Senegal. Praia on Santiago Island is the political and economic capital, while Mindelo on São Vicente is the cultural hub, with Sal and Boa Vista acting as major tourism gateways.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      For its size, Cabo Verde is extremely well-connected. Multiple international submarine cables land in Praia and Sal, a domestic submarine system ties the islands together, and mobile and fixed broadband penetration are far above the African average. The government's "Cyber Island" and blue-economy strategies aim to position the country as a resilient digital hub linking Africa, Europe and the Americas.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Cabo Verde"
                          src="https://www.openstreetmap.org/export/embed.html?bbox=-26.5%2C14.5%2C-22.0%2C18.0&layer=mapnik&marker=14.93%2C-23.51"
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
                        <li>
                          Amílcar Cabral International (SID) — Sal Island, largest airport and intercontinental hub
                        </li>
                        <li>
                          Nelson Mandela International (RAI) — Praia, Santiago
                        </li>
                        <li>
                          Cesária Évora International (VXE) — São Vicente, serving Mindelo
                        </li>
                        <li>
                          Aristides Pereira Intl. / Rabil (BVC) — Boa Vista tourism hub
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Cabo Verde is one of Africa's most connected small states. As of early 2025, internet penetration is above 70%, mobile connections exceed the population, and social media adoption is close to half the population. Fixed broadband is still concentrated in urban and tourist centres, but speeds and coverage are improving as new cables and backbones go live.
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
                              <td className="py-3 px-4">Internet Users (Jan 2025)</td>
                              <td className="py-3 px-4">≈ 387,000</td>
                              <td className="py-3 px-4">~73.5% of population</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Connections</td>
                              <td className="py-3 px-4">≈ 604,000 SIMs</td>
                              <td className="py-3 px-4">~115% (many users have multiple SIMs)</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Social Media Users</td>
                              <td className="py-3 px-4">≈ 262,000 IDs</td>
                              <td className="py-3 px-4">~50% of population</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband (2023 est.)</td>
                              <td className="py-3 px-4">≈ 38,000 lines</td>
                              <td className="py-3 px-4">~7.2 per 100 inhabitants</td>
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
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & Island Backbone</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Cabo Verde punches far above its weight in subsea connectivity. Multiple international systems such as Atlantis-2, WACS, EllaLink, Equiano and others land in Praia and Sal, while a domestic submarine cable network links the main islands. New regional projects continue to add capacity and redundancy, underpinning the country's ambition to serve as a neutral Atlantic hub for data and cloud traffic.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Replace href/src with your own submarine-cable screenshot */}
                  <a
                    href="https://www.submarinecablemap.com/submarine-cable/cabo-verde-telecom-domestic-submarine-cable-phase-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Cabo.png"
                      alt="Submarine cables and domestic backbone serving Cabo Verde"
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
                  The market is led by CVTelecom/CVMóvel and Unitel T+, alongside smaller ISPs and cable operators. Mobile 4G and fixed fiber or hybrid access are widely available in urban areas and tourism zones, while outer islands and rural communities rely more on wireless and microwave links.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) on Sal, Santiago, São Vicente and Boa Vista",
                    "Business Broadband for hotels, resorts and offices",
                    "4G / 5G last-mile and wireless backup links",
                    "SLA-backed Services with 24x7 monitoring",
                    "CPE / Router deployment and management",
                    "MPLS / SD-WAN across multiple islands",
                    "Diverse routing via multiple international cables",
                    "Managed Security, VPN and DDoS protection",
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
              Contact us to receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>.
              We can deliver connectivity across Praia, Mindelo, Sal, Boa Vista and other islands, subject to local infrastructure and last-mile feasibility.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Cabo%20Verde%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2025-cabo-verde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2025: Cabo Verde
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Cape_Verde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Cabo Verde
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinenetworks.com/en/nv/news/cabo-verde-telecom-invites-bids-for-submarine-cable-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Networks — Cabo Verde Cable Projects
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

export default CaboVerde;
