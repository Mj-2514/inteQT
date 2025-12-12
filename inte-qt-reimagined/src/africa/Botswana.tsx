import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Botswana: React.FC = () => {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Botswana | Connectivity, ISPs & Broadband Overview",
  description: "Overview of Botswana’s internet connectivity, mobile and broadband access, regional fibre routes, and inte-QT service capabilities in Gaborone, Francistown, Maun and other key locations.",
  url: "https://www.inte-qt.com/coverage/africa/botswana",
  about: {
    "@type": "Country",
    name: "Botswana",
    population: 2500000,
    currency: "BWP (Botswana Pula)",
    languages: ["English (official)","Setswana"],
    neighbouringCountries: ["South Africa","Namibia","Zimbabwe","Zambia"],
    majorCities: ["Gaborone","Francistown","Maun","Kasane","Selebi-Phikwe"],
    majorAirports: ["Sir Seretse Khama Intl. Airport (GBE)","Maun Airport (MUB)","Francistown Airport (FRW)"],
    url: "https://en.wikipedia.org/wiki/Botswana"
  }
}


  return (
    <>
      <Helmet>
        <title>Internet in Botswana | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Botswana’s internet connectivity, mobile and broadband access, regional fibre routes, and inte-QT service capabilities in Gaborone, Francistown, Maun and other key locations."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/botswana" />
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1509099863731-ef4bff19e808?auto=format&fit=crop&w=1600&q=80")',
          }}
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
            Internet in Botswana
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-white/90 max-w-3xl mx-auto text-base md:text-lg mt-4 leading-relaxed"
          >
            Botswana — a landlocked Southern African country with strong mobile adoption and growing digital infrastructure. This page covers population, languages, major cities, regional fibre routes and how inte-QT supports connectivity across Gaborone, Francistown and Maun.
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
                        <strong>Population:</strong> ~2.5 million (2024 estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Southern Africa, Kalahari basin
                      </li>
                      <li>
                        <strong>Neighbors:</strong> South Africa, Namibia, Zimbabwe, Zambia
                      </li>
                      <li>
                        <strong>Capital:</strong> Gaborone
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Gaborone, Francistown, Maun
                      </li>
                      <li>
                        <strong>Languages:</strong> English (official), Setswana
                      </li>
                      <li>
                        <strong>Currency:</strong> Botswana Pula (BWP)
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> ~68% (2022)
                      </li>
                    </ul>

                    <div className="mt-4 text-center">
                      <motion.img
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        src="https://flagcdn.com/w320/bw.png"
                        alt="Botswana flag"
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
                      Botswana is a politically stable, upper middle-income country with a diversified economy led by diamonds, tourism and financial services. Gaborone is the economic hub with ongoing investments in digital infrastructure and regional connectivity.
                    </p>

                    <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                      Urban centres and mining towns drive demand for reliable connectivity. Being landlocked, Botswana depends on terrestrial cross-border fibre to reach submarine cable systems via neighbouring states.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-2 text-base">Map</h3>
                      <div className="rounded-lg overflow-hidden shadow border border-white/20">
                        <div className="map-responsive" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                          <iframe
                            src="https://www.google.com/maps?q=Botswana&output=embed"
                            title="Map of Botswana"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Airports / Transport + Connectivity */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Airports & Transport */}
                  <Card className="rounded-2xl border border-white/10 shadow-lg">
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">Airports & Regional Access</h3>

                      <p className="text-muted-foreground mb-2 text-sm leading-relaxed">
                        Regional road and rail corridors through South Africa and Namibia provide Botswana with access to seaports. Air transport is essential for tourism and business connections to regional hubs.
                      </p>

                      <h4 className="font-semibold text-sm mb-1">Major Airports</h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-3">
                        <li>Sir Seretse Khama Intl. Airport (GBE) — Gaborone</li>
                        <li>Maun Airport (MUB) — gateway to Okavango Delta</li>
                        <li>Francistown Airport (FRW) — eastern commercial hub</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-1">Tourism Highlights</h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm">
                        <li>Okavango Delta — UNESCO World Heritage Site</li>
                        <li>Chobe National Park — major wildlife corridor</li>
                        <li>Makgadikgadi Salt Pans — unique pans ecosystem</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Connectivity / Internet Access */}
                  <Card className="rounded-2xl border border-white/10 shadow-lg">
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">Connectivity &amp; Internet Access</h3>

                      <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                        Botswana has high mobile penetration and growing internet usage, with mobile broadband the primary access method and fixed broadband concentrated in urban centres.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-2 px-3 text-left font-semibold">Metric</th>
                              <th className="py-2 px-3 text-left font-semibold">Status / Estimate</th>
                              <th className="py-2 px-3 text-left font-semibold">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Mobile Subscriptions</td>
                              <td className="py-2 px-3">&gt;160 per 100 inhabitants</td>
                              <td className="py-2 px-3">Multiple SIM ownership common; coverage in most populated areas.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Internet Users</td>
                              <td className="py-2 px-3">~68% (2022)</td>
                              <td className="py-2 px-3">Majority access via mobile broadband; ongoing growth.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Fixed Broadband</td>
                              <td className="py-2 px-3">Concentrated in urban centres</td>
                              <td className="py-2 px-3">Available in Gaborone, Francistown; limited elsewhere.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-2 px-3">Wireless Networks</td>
                              <td className="py-2 px-3">4G widely available; 5G pilots underway</td>
                              <td className="py-2 px-3">4G covers urban and semi-urban areas; 5G pilots since 2023.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
                        Key ISPs include Mascom Wireless, Orange Botswana and BTC (Botswana Telecommunications Corporation) offering mobile and fixed broadband services.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Regional Fibre & Our Capabilities */}
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-6xl space-y-6">
            {/* Regional & Submarine Connectivity */}
            <Card className="rounded-2xl border border-white/10 shadow-lg">
              <CardContent className="p-4">
                <h2 className="text-2xl font-bold mb-2">Regional Fibre &amp; International Connectivity</h2>

                <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                  Botswana has no direct submarine cable landings. International connectivity is achieved via terrestrial fibre through neighbouring countries (South Africa, Namibia, Mozambique) that link to regional submarine systems such as EASSy and WACS.
                </p>

                <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                  Cross-border backhaul routes and redundant terrestrial paths are essential to provide resilience and higher-capacity international connectivity for government, enterprise and tourism sectors.
                </p>

                <div className="flex justify-center mt-3">
                  <a href="https://www.submarinecablemap.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://i.imgur.com/B04OZIm.png"
                      alt="Regional cable routes (Botswana)"
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
                <h2 className="text-2xl font-bold mb-2">Our Capabilities in Botswana</h2>

                <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                  inte-QT partners with regional operators to deliver managed connectivity solutions in Gaborone, Francistown, Maun and other strategic locations, including mining sites and tourism corridors.
                </p>

                <h3 className="text-lg font-semibold mb-2">Our Services</h3>

                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  {[
                    "Dedicated Lines (DL)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity",
                    "Service Level Agreements (SLA)",
                    "Customer Premises Equipment (CPE) / Routers",
                    "Global Enterprise Management Solutions (GEMS)",
                    "Diverse Gateway Solutions",
                    "Distributed Denial of Service (DDoS) Protection",
                  ].map((capability) => (
                    <div key={capability} className="flex items-start space-x-2 bg-card/40 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                      <CheckCircle className="w-4 h-4 text-primary mt-1" />
                      <div className="text-sm">{capability}</div>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our Global Business Solutions team can typically provide a commercial offer within 2–4 working days. Delivery timelines depend on site readiness and cross-border logistics.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Offer & References */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-base leading-relaxed mb-4 text-muted-foreground">
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. We support deployments across Gaborone, Francistown, Maun and other strategic locations.
            </p>

            <p className="mb-4">
              <a href="mailto:sales@inte-qt.com?subject=Botswana Connectivity Enquiry" className="text-primary underline font-semibold">Email Us</a>
            </p>

            <h4 className="mb-2 font-semibold">Suggested References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>
                <a href="https://data.worldbank.org/country/botswana" target="_blank" rel="noopener noreferrer" className="underline text-primary">World Bank — Botswana data</a>
              </li>
              <li>
                <a href="https://www.botswanatourism.co.bw/" target="_blank" rel="noopener noreferrer" className="underline text-primary">Botswana Tourism Organisation</a>
              </li>
              <li>
                <a href="https://www.bocra.org.bw/" target="_blank" rel="noopener noreferrer" className="underline text-primary">BOCRA — Telecom regulator</a>
              </li>
              <li>
                <a href="https://www.mascom.bw/" target="_blank" rel="noopener noreferrer" className="underline text-primary">Mascom Wireless</a>
              </li>
              <li>
                <a href="https://www.orange.co.bw/" target="_blank" rel="noopener noreferrer" className="underline text-primary">Orange Botswana</a>
              </li>
              <li>
                <a href="https://www.btc.co.bw/" target="_blank" rel="noopener noreferrer" className="underline text-primary">BTC (Botswana Telecommunications Corporation)</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Botswana;
