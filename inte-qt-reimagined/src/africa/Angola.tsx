import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Angola: React.FC = () => {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Angola | Connectivity, ISPs & Broadband Overview",
  description: "Overview of Angola’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Luanda, Lobito, Benguela and other key regions.",
  url: "https://www.inte-qt.com/coverage/africa/angola",
  about: {
    "@type": "Country",
    name: "Angola",
    population: 37000000,
    currency: "AOA (Angolan Kwanza)",
    languages: ["Portuguese"],
    neighbouringCountries: ["Namibia","Zambia","Democratic Republic of the Congo"],
    majorCities: ["Luanda","Lubango","Huambo","Benguela","Lobito","Cabinda"],
    majorAirports: ["Quatro de Fevereiro Intl. Airport (LAD)","Catumbela Airport (CBT)","Albano Machado Airport (NOV)"],
    url: "https://en.wikipedia.org/wiki/Angola"
  }
}


  return (
    <>
      <Helmet>
        <title>Internet in Angola | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Angola’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Luanda, Lobito, Benguela and other key regions."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/angola" />
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
            backgroundImage: 'url("https://i.imgur.com/fntgKno.jpg")',
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
            Internet in Angola
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-white/90 max-w-3xl mx-auto text-base md:text-lg mt-4 leading-relaxed"
          >
            Angola — a resource-rich Southern African economy with growing urban centres and expanding digital infrastructure. This page covers population, language, major cities, ports, submarine cable landings and how inte-QT supports connectivity across Luanda, Lobito, Benguela and other regions.
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
                        <strong>Population:</strong> ~36–38 million (2024 estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Southern Africa, Atlantic Coast
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Namibia, Zambia, Democratic Republic of the Congo; Atlantic Ocean (west)
                      </li>
                      <li>
                        <strong>Capital:</strong> Luanda
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Luanda, Lubango, Huambo, Benguela, Lobito, Cabinda, Malanje, Soyo
                      </li>
                      <li>
                        <strong>Languages:</strong> Portuguese
                      </li>
                      <li>
                        <strong>Currency:</strong> Angolan Kwanza (AOA)
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> ~40% (rising)
                      </li>
                    </ul>

                    <div className="mt-4 text-center">
                      <motion.img
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        src="https://flagcdn.com/w320/ao.png"
                        alt="Angola flag"
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
                      Angola's economy is anchored in hydrocarbons and minerals, with strong urbanisation in Luanda and growing infrastructure investment. Connectivity investment targets ports and urban corridors while addressing long-distance backbone needs to reach oil & gas and mining sites.
                    </p>

                    <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                      inte-QT partners with Angolan operators to deliver DIA, IP-VPN, SD-WAN and managed services to enterprise, energy and public sector customers across coastal and inland corridors.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-2 text-base">Map</h3>
                      <div className="rounded-lg overflow-hidden shadow border border-white/20">
                        <div className="map-responsive" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                          <iframe
                            src="https://www.google.com/maps?q=Angola&output=embed"
                            title="Map of Angola"
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
                        Angola’s international airports and Atlantic ports are critical for oil & gas, container traffic and general cargo, anchoring demand for high-availability connectivity.
                      </p>

                      <h4 className="font-semibold text-sm mb-1">Key International Airports</h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-3">
                        <li>Quatro de Fevereiro Intl. Airport (LAD) — Luanda</li>
                        <li>Catumbela Airport (CBT) — Benguela / Lobito area</li>
                        <li>Alban Gweth Intl. Airport (SDD) — Lubango</li>
                        <li>Albano Machado Airport (NOV) — Huambo</li>
                        <li>Cabinda Airport (CAB) — Cabinda</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-1">Major Seaports</h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm">
                        <li>Port of Luanda</li>
                        <li>Port of Lobito</li>
                        <li>Port of Namibe</li>
                        <li>Port of Cabinda</li>
                        <li>Ports in Soyo and other oil & gas hubs</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Connectivity / Internet Access */}
                  <Card className="rounded-2xl border border-white/10 shadow-lg">
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">Connectivity &amp; Internet Access</h3>

                      <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                        Angola’s internet ecosystem is growing with increasing mobile subscriptions, higher broadband speeds and expanding FTTH in urban centres. Mobile broadband remains the primary access method across large parts of the country.
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
                              <td className="py-2 px-3">≈14–17 million users</td>
                              <td className="py-2 px-3 text-sm">Penetration around 40% with steady growth.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Fixed Broadband</td>
                              <td className="py-2 px-3">Concentrated in Luanda &amp; main cities</td>
                              <td className="py-2 px-3 text-sm">FTTH rollouts in Luanda, Benguela, Lobito, Huambo and selected provincial centres.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Mobile Networks</td>
                              <td className="py-2 px-3">3G/4G widely available; 5G emerging</td>
                              <td className="py-2 px-3 text-sm">Mobile broadband is primary; coverage focuses on urban corridors.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Enterprise Connectivity</td>
                              <td className="py-2 px-3">Strongest in Luanda &amp; economic corridors</td>
                              <td className="py-2 px-3 text-sm">DIA, IP-VPN, SD-WAN and managed services for energy, mining, finance and logistics; satellite & wireless for remote sites.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
                        Network design combines terrestrial fibre, microwave and satellite backup to address distance, terrain and power constraints.
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
                  Angola is connected to the global internet via submarine cable systems such as SAT-3, WACS and SACS with landing points on the Angolan coast. These systems provide capacity and diversity to Europe, the Americas and other African countries.
                </p>

                <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                  Landing stations feed into national backbones linking Luanda, Benguela, Lobito, Huambo and other provincial centres, and extend to ports, refineries and energy hubs.
                </p>

                <div className="flex justify-center mt-3">
                  <a href="https://www.submarinecablemap.com/country/angola" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://i.imgur.com/9zrlm9F.png"
                      alt="Submarine Cables Angola"
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
                <h2 className="text-2xl font-bold mb-2">Our Capabilities in Angola</h2>

                <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                  inte-QT partners with Angolan and regional operators to deliver managed connectivity solutions in Luanda, Benguela, Lobito and other strategic locations. We support energy, mining, finance, logistics and public sector customers with secure, scalable networking.
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
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. We support deployments across Luanda, Benguela, Lobito, Huambo, Lubango, Cabinda and other key regions in Angola.
            </p>

            <p className="mb-4">
              <a href="mailto:sales@inte-qt.com?subject=Connectivity in Angola" className="text-primary underline font-semibold">Email Us</a>
            </p>

            <h4 className="mb-2 font-semibold">Suggested References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>
                <a href="https://data.worldbank.org/country/angola" target="_blank" rel="noopener noreferrer" className="underline text-primary">World Bank / ITU — Angola ICT &amp; internet indicators</a>
              </li>
              <li>
                <a href="https://datareportal.com/reports/digital-2024-angola" target="_blank" rel="noopener noreferrer" className="underline text-primary">Digital 2024 Angola — internet &amp; social media data</a>
              </li>
              <li>
                <a href="https://www.inacom.gv/" target="_blank" rel="noopener noreferrer" className="underline text-primary">Instituto Angolano das Comunicações (INACOM) — Telecom regulator</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Angola;
