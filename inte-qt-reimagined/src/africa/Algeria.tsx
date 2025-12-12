import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Algeria: React.FC = () => {
  // Structured data (JSON-LD) for this country page
  const jsonLd ={
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Algeria | Connectivity, ISPs & Broadband Overview",
  description: "Overview of Algeria’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Algiers, Oran, Constantine and other key regions.",
  url: "https://www.inte-qt.com/coverage/africa/algeria",
  about: {
    "@type": "Country",
    name: "Algeria",
    population: 46000000,
    currency: "DZD (Algerian Dinar)",
    languages: ["Arabic", "Amazigh (Berber)", "French (widely used)"],
    neighbouringCountries: ["Tunisia","Libya","Niger","Mali","Mauritania","Morocco","Western Sahara"],
    majorCities: ["Algiers","Oran","Constantine","Annaba","Blida","Sétif"],
    majorAirports: ["Houari Boumediene Intl. Airport (ALG)","Oran Es-Sénia Intl. Airport (ORN)","Mohamed Boudiaf Intl. Airport (CZL)"],
    url: "https://en.wikipedia.org/wiki/Algeria"
  }
}


  return (
    <>
      <Helmet>
        <title>Internet in Algeria | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Algeria’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Algiers, Oran, Constantine and other key regions."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/algeria" />
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
            backgroundImage: 'url("https://i.imgur.com/Qk6TNGC.jpg")',
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
            Internet in Algeria
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-white/90 max-w-3xl mx-auto text-base md:text-lg mt-4 leading-relaxed"
          >
            Algeria — a North African nation with a Mediterranean coast and
            an expanding digital infrastructure. This page covers population,
            languages, major cities, airports, submarine cable landings and how
            inte-QT supports connectivity and managed services across Algiers,
            Oran, Constantine and other regions.
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
                        <strong>Population:</strong> ~46 million (2024 estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> North Africa, Mediterranean Coast
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Tunisia, Libya, Niger, Mali,
                        Mauritania, Western Sahara, Morocco
                      </li>
                      <li>
                        <strong>Capital:</strong> Algiers
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Algiers, Oran, Constantine,
                        Annaba, Blida, Sétif, Béjaïa
                      </li>
                      <li>
                        <strong>Languages:</strong> Arabic, Amazigh (Berber); French
                        widely used in business
                      </li>
                      <li>
                        <strong>Currency:</strong> Algerian Dinar (DZD)
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> &gt;70% of population
                      </li>
                    </ul>

                    <div className="mt-4 text-center">
                      <motion.img
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        src="https://flagcdn.com/w320/dz.png"
                        alt="Algeria flag"
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
                      Algeria's economy is anchored in hydrocarbons, and its
                      population is concentrated along the Mediterranean coast.
                      Connectivity investment focuses on coastal metro areas
                      (Algiers, Oran, Constantine) with fibre rings, national
                      backbones and growing FTTH rollouts alongside expanding
                      mobile broadband.
                    </p>

                    <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                      inte-QT works with local and regional operators to provide
                      DIA, IP-VPN, SD-WAN and managed services to support energy,
                      government, financial services and enterprise customers.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-2 text-base">Map</h3>
                      <div className="rounded-lg overflow-hidden shadow border border-white/20">
                        <div className="map-responsive" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                          <iframe
                            src="https://www.google.com/maps?q=Algeria&output=embed"
                            title="Map of Algeria"
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
                        Algeria’s international airports and Mediterranean ports
                        are important demand anchors for reliable connectivity —
                        for passengers, cargo, energy and logistics operations.
                      </p>

                      <h4 className="font-semibold text-sm mb-1">Key International Airports</h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-3">
                        <li>Houari Boumediene Intl. Airport (ALG) — Algiers</li>
                        <li>Oran Es-Sénia Intl. Airport (ORN) — Oran</li>
                        <li>Mohamed Boudiaf Intl. Airport (CZL) — Constantine</li>
                        <li>Rabah Bitat Airport (AAE) — Annaba</li>
                        <li>Soummam–Abane Ramdane Airport (BJA) — Béjaïa</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-1">Major Seaports</h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm">
                        <li>Port of Algiers</li>
                        <li>Port of Oran</li>
                        <li>Port of Béjaïa</li>
                        <li>Port of Skikda</li>
                        <li>Port of Annaba</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Connectivity / Internet Access */}
                  <Card className="rounded-2xl border border-white/10 shadow-lg">
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">Connectivity &amp; Internet Access</h3>

                      <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                        Fixed broadband (copper, xDSL, FTTH) is strongest in
                        major cities; mobile broadband (3G/4G) covers most of the
                        population while 5G trials and early deployments appear
                        in larger urban centres. Enterprise connectivity relies
                        on DIA, IP-VPN, and managed backup over diverse paths.
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
                              <td className="py-2 px-3">≈33–34 million users</td>
                              <td className="py-2 px-3 text-sm">Penetration around low–mid 70% with ongoing growth.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Fixed Broadband</td>
                              <td className="py-2 px-3">Strongest in major cities</td>
                              <td className="py-2 px-3 text-sm">FTTH concentrated in Algiers, Oran, Constantine, Annaba and other urban areas.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Mobile Networks</td>
                              <td className="py-2 px-3">3G/4G nationwide; 5G emerging</td>
                              <td className="py-2 px-3 text-sm">High mobile penetration; mobile broadband is primary access for many users.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Enterprise Connectivity</td>
                              <td className="py-2 px-3">Coastal belt & energy corridors</td>
                              <td className="py-2 px-3 text-sm">DIA, IP-VPN, SD-WAN and managed services for energy, government, banking and logistics.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
                        Network design combines terrestrial fibre, coastal and inland routes, and wireless backup to mitigate geographic and infrastructure constraints.
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
                  Algeria connects to international submarine cable systems at several Mediterranean landings, providing capacity and diversity to Europe, the Middle East and beyond. National backbones interconnect landings with coastal metros and interior corridors.
                </p>

                <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                  Key landing and backbone operators include national incumbent carriers and private infrastructure players working with international consortiums to provide redundancy and route diversity.
                </p>

                <div className="flex justify-center mt-3">
                  <a href="https://www.submarinecablemap.com/country/algeria" target="_blank" rel="noopener noreferrer">
  <img
    src="https://i.imgur.com/vfpfvPv.png"
    alt="Submarine Cables Algeria"
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
                <h2 className="text-2xl font-bold mb-2">Our Capabilities in Algeria</h2>

                <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                  inte-QT partners with Algerian and regional operators to deliver managed connectivity solutions in Algiers, Oran, Constantine, Annaba and other strategic locations. We support sectors such as energy, manufacturing, finance, logistics and public sector with secure and scalable networking.
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
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. We support deployments across Algiers, Oran, Constantine, Annaba, Béjaïa and other major cities and industrial regions in Algeria.
            </p>

            <p className="mb-4">
              <a href="mailto:sales@inte-qt.com?subject=Connectivity in Algeria" className="text-primary underline font-semibold">Email Us</a>
            </p>

            <h4 className="mb-2 font-semibold">Suggested References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
  <li>
    <a href="https://data.worldbank.org/country/algeria" target="_blank" rel="noopener noreferrer" className="underline text-primary">
      World Bank / ITU — Algeria ICT & internet indicators
    </a>
  </li>
  <li>
    <a href="https://datareportal.com/reports/digital-2024-algeria" target="_blank" rel="noopener noreferrer" className="underline text-primary">
      Digital 2023–2024 Algeria — internet & social media data
    </a>
  </li>
  <li>
    <a href="https://www.arpt.gov.dz/" target="_blank" rel="noopener noreferrer" className="underline text-primary">
      National telecom regulator and market reports
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

export default Algeria;
