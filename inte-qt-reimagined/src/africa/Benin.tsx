import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Benin: React.FC = () => {
  const jsonLd ={
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Benin | Connectivity, ISPs & Broadband Overview",
  description: "Overview of Benin’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Cotonou, Porto-Novo, Parakou and other key regions.",
  url: "https://www.inte-qt.com/coverage/africa/benin",
  about: {
    "@type": "Country",
    name: "Benin",
    population: 14600000,
    currency: "XOF (West African CFA Franc)",
    languages: ["French (official)","Fon","Yoruba"],
    neighbouringCountries: ["Togo","Burkina Faso","Niger","Nigeria"],
    majorCities: ["Cotonou","Porto-Novo","Abomey-Calavi","Parakou","Djougou"],
    majorAirports: ["Cadjehoun Intl. Airport (COO)","Parakou Airport"],
    url: "https://en.wikipedia.org/wiki/Benin"
  }
}


  return (
    <>
      <Helmet>
        <title>Internet in Benin | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Benin’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Cotonou, Porto-Novo, Parakou and other key regions."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/benin" />
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
          style={{
            backgroundImage: 'url("https://i.imgur.com/sZhMLgw.jpg")',
          }}
          aria-hidden
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" aria-hidden />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg"
          >
            Internet in Benin
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-white/90 max-w-3xl mx-auto text-base md:text-lg mt-4 leading-relaxed"
          >
            Benin — a West African coastal state centred on Cotonou with growing port activity and expanding digital infrastructure. This page covers population, languages, major cities, submarine cable landings and how inte-QT supports connectivity across Benin.
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
                        <strong>Population:</strong> ~14.6 million (2025 estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> West Africa, Gulf of Guinea
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Togo, Burkina Faso, Niger, Nigeria
                      </li>
                      <li>
                        <strong>Capital:</strong> Porto-Novo (constitutional)
                      </li>
                      <li>
                        <strong>Largest City / Seat of Government:</strong> Cotonou
                      </li>
                      <li>
                        <strong>Languages:</strong> French (official), Fon, Yoruba
                      </li>
                      <li>
                        <strong>Currency:</strong> West African CFA Franc (XOF)
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> ~30–35% (rising)
                      </li>
                    </ul>

                    <div className="mt-4 text-center">
                      <motion.img
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        src="https://flagcdn.com/w320/bj.png"
                        alt="Benin flag"
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
                      Benin’s economy is driven by trade, port services and agriculture, with Cotonou functioning as the primary commercial hub. National connectivity focuses on linking ports, corridors and inland hubs to support trade with neighbours and the Sahel.
                    </p>

                    <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                      Mobile broadband is the dominant access method while fibre and fixed broadband expand in cities. Networks are designed to connect coastal metros, inland towns and border crossing points that serve regional commerce.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-2 text-base">Map</h3>
                      <div className="rounded-lg overflow-hidden shadow border border-white/20">
                        <div className="map-responsive" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                          <iframe
                            src="https://www.google.com/maps?q=Benin&output=embed"
                            title="Map of Benin"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Airports / Ports + Connectivity */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Airports & Ports */}
                  <Card className="rounded-2xl border border-white/10 shadow-lg">
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">Main Airports &amp; Ports</h3>

                      <p className="text-muted-foreground mb-2 text-sm leading-relaxed">
                        Cotonou’s port and Cadjehoun airport are regional transport hubs that anchor demand for enterprise-grade connectivity, logistics and trade services.
                      </p>

                      <h4 className="font-semibold text-sm mb-1">Key International Airports</h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-3">
                        <li>Cadjehoun Intl. Airport (COO) — Cotonou</li>
                        <li>Parakou Airport — Parakou (regional)</li>
                        <li>Natitingou Airport — Natitingou (regional)</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-1">Major Seaports</h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm">
                        <li>Port of Cotonou — main seaport &amp; container hub</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Connectivity / Internet Access */}
                  <Card className="rounded-2xl border border-white/10 shadow-lg">
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">Connectivity &amp; Internet Access</h3>

                      <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                        Benin’s connectivity landscape features rapid mobile growth, expanding smartphone adoption, and gradual rollout of fibre and fixed broadband in major cities. Mobile remains the primary access technology for most users.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-2 px-3 text-left font-semibold">Metric</th>
                              <th className="py-2 px-3 text-left font-semibold">Status (recent)</th>
                              <th className="py-2 px-3 text-left font-semibold">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Internet Users</td>
                              <td className="py-2 px-3">≈4.5–5 million users</td>
                              <td className="py-2 px-3 text-sm">Around one-third of population online with rapid mobile-led growth.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Fixed Broadband</td>
                              <td className="py-2 px-3">Limited but growing in cities</td>
                              <td className="py-2 px-3 text-sm">Fibre and fixed access mainly in Cotonou, Abomey-Calavi and Porto-Novo.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Mobile Networks</td>
                              <td className="py-2 px-3">3G/4G widely available; 4G driving most growth</td>
                              <td className="py-2 px-3 text-sm">Mobile broadband is primary access method across the populated territory.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Enterprise Connectivity</td>
                              <td className="py-2 px-3">Concentrated in coastal corridor &amp; main towns</td>
                              <td className="py-2 px-3 text-sm">DIA, IP-VPN, SD-WAN and managed services for logistics, government, banking and education.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
                        Network designs typically combine coastal fibre backhaul, protected terrestrial routes and wireless/satellite backup to handle power and last-mile challenges outside urban areas.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Submarine Cables & Backbone / Our Capabilities */}
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-6xl space-y-6">
            {/* Submarine Cables & National Backbone */}
            <Card className="rounded-2xl border border-white/10 shadow-lg">
              <CardContent className="p-4">
                <h2 className="text-2xl font-bold mb-2">Submarine Cables &amp; National Backbone</h2>

                <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                  Benin connects to the global internet via submarine cables that land on the Gulf of Guinea (including ACE, SAT-3 and other regional systems). These provide international capacity and route diversity to Europe, West Africa and beyond.
                </p>

                <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                  International landing stations are backhauled along national and regional fibre corridors, linking coastal hubs such as Cotonou with inland towns and neighbouring countries.
                </p>

                <div className="flex justify-center mt-3">
                  <a href="https://www.submarinecablemap.com/country/benin" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://i.imgur.com/n3CVbcN.png"
                      alt="Submarine Cables Benin"
                      className="rounded-md shadow-md border border-white/20 w-full max-w-2xl"
                      loading="lazy"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-2xl border border-white/10 shadow-lg">
              <CardContent className="p-4">
                <h2 className="text-2xl font-bold mb-2">Our Capabilities in Benin</h2>

                <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                  inte-QT partners with Beninese and regional operators to deliver managed connectivity solutions in Cotonou, Porto-Novo, Abomey-Calavi, Parakou and other strategic locations.
                </p>

                <h3 className="text-lg font-semibold mb-2">Our Services</h3>

                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity (4G/5G or fixed wireless last mile)",
                    "Service Level Agreements (SLA)",
                    "Customer Premises Equipment (CPE) / Routers",
                    "Global Enterprise Management Solutions (GEMS)",
                    "Diverse Gateway Solutions",
                    "Distributed Denial of Service (DDoS) Protection",
                  ].map((cap) => (
                    <div key={cap} className="flex items-start space-x-2 bg-card/40 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                      <CheckCircle className="w-4 h-4 text-primary mt-1" />
                      <div className="text-sm">{cap}</div>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our Global Business Solutions team can typically provide a commercial offer within 2–4 working days, and services are generally deliverable within 4–6 weeks depending on access technology and site readiness.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Offer & References */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-base leading-relaxed mb-4 text-muted-foreground">
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. We support deployments across Cotonou, Porto-Novo, Parakou and other cities and corridors in Benin.
            </p>

            <p className="mb-4">
              <a href="mailto:sales@inte-qt.com?subject=Connectivity in Benin" className="text-primary underline font-semibold">Email Us</a>
            </p>

            <h4 className="mb-2 font-semibold">Suggested References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>
                <a href="https://data.worldbank.org/country/benin" target="_blank" rel="noopener noreferrer" className="underline text-primary">World Bank — Benin data</a>
              </li>
              <li>
                <a href="https://datareportal.com/reports/digital-2025-benin" target="_blank" rel="noopener noreferrer" className="underline text-primary">DataReportal — Digital 2025: Benin</a>
              </li>
              <li>
                <a href="https://arcep.bj/" target="_blank" rel="noopener noreferrer" className="underline text-primary">ARCEP Benin — Telecom regulator</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Benin;
