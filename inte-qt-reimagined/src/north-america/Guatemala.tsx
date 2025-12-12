import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Guatemala: React.FC = () => {
    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Guatemala | Connectivity, ISPs & Broadband Overview",
  description:
    "Overview of Guatemala's internet connectivity, submarine cable routes, ISPs, broadband market and inte-QT capabilities across Guatemala City, Quetzaltenango, Antigua and other major hubs.",
  url: "https://www.inte-qt.com/coverage/north-america/guatemala",
  about: {
    "@type": "Country",
    name: "Guatemala",
    capital: {
      "@type": "City",
      name: "Guatemala City"
    },
    officialLanguage: ["Spanish"],
    currency: "GTQ",
    population: {
      "@type": "QuantitativeValue",
      value: 18500000
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 15.7835,
      longitude: -90.2308
    }
  },
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.inte-qt.com/#website"
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.inte-qt.com/#organization"
  }
};

  return (
    <>
      <Helmet>
  <title>Internet in Guatemala | Connectivity, ISPs & Broadband Overview</title>

  <meta
    name="description"
    content="Overview of Guatemala's internet connectivity, submarine cable routes, ISPs, broadband market and inte-QT capabilities across Guatemala City, Quetzaltenango, Antigua and other major hubs."
  />

  <link
    rel="canonical"
    href="https://www.inte-qt.com/coverage/north-america/guatemala"
  />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify(jsonLd)}
  </script>
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
            backgroundImage:
              'url("https://images.unsplash.com/photo-1563442744-3e17a3bf4932?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VhdGVtYWxhfGVufDB8MHwwfHx8Mg%3D%3D")',
          }}
        />

        <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Guatemala
          </motion.h1>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            Central America's most populous nation — with expanding fibre, strong mobile broadband,
            and dual-coast international connectivity through Pacific and Caribbean subsea systems.
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
                      <li><strong>Official Name:</strong> Republic of Guatemala</li>
                      <li><strong>Population:</strong> ≈ 18–19 million (2025 est.)</li>
                      <li><strong>Capital & Major Cities:</strong> Guatemala City, Quetzaltenango, Antigua, Cobán, Escuintla</li>
                      <li><strong>Languages:</strong> Spanish (official) + 20+ Mayan languages (K'iche', Q’eqchi’, Mam, etc.)</li>
                      <li><strong>Currency:</strong> Guatemalan quetzal (GTQ)</li>
                      <li><strong>Neighbours:</strong> Mexico, Belize, Honduras, El Salvador</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/gt.png"
                        alt="Guatemala Flag"
                        className="mx-auto rounded-lg shadow-lg border border-white/40"
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
                      Guatemala is Central America's largest population centre and a major regional commercial hub.
                      Connectivity is concentrated around Guatemala City, supported by fibre rings, mobile broadband
                      and growing datacentre deployments.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The nation benefits from both Pacific and Caribbean submarine cable routes, providing redundancy
                      and improved access to networks in Mexico, the U.S. and Latin America.
                    </p>

                    {/* Map */}
                    <h3 className="font-semibold mb-3 text-lg">Map</h3>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                      <iframe
                        title="Map of Guatemala"
                        src="https://www.google.com/maps?q=Guatemala&output=embed"
                        width="100%"
                        height="420"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Airports & Connectivity Grid */}
                <div className="grid md:grid-cols-2 gap-6">

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Main Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>La Aurora International Airport (GUA) — national gateway</li>
                        <li>Mundo Maya International Airport (FRS) — northern hub (Flores)</li>
                        <li>Several regional airports support domestic traffic</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        The market is mobile-first with widespread 4G and expanding FTTx availability.
                        National fibre routes connect major regions, while international capacity
                        depends on both Pacific and Caribbean subsea landings — offering path diversity.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left">Type</th>
                              <th className="py-3 px-4 text-left">Estimate</th>
                              <th className="py-3 px-4 text-left">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Population</td>
                              <td className="py-3 px-4">≈ 18–19 million</td>
                              <td className="py-3 px-4">Largest population in Central America</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Mobile-first; expanding fibre</td>
                              <td className="py-3 px-4">4G widespread; early 5G trials</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Guatemalan quetzal (GTQ)</td>
                              <td className="py-3 px-4">Stable national currency</td>
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

        {/* SUBMARINE CABLES */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">

            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & Regional Routes</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
                  Guatemala benefits from submarine systems connecting both coasts — Pacific and Caribbean —
                  enabling diverse paths to Mexico, the United States and South America.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/guatemala"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/Guatemala.png"
                      alt="Guatemala submarine cable routes"
                      className="rounded-xl shadow-lg border border-white/20 max-w-3xl w-full mx-auto"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* ISPs */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers & Market</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The market is dominated by Claro, Tigo, Movistar and enterprise fibre providers like UFINET.
                  Retail access is heavily mobile-led with rapid expansion of FTTx in urban corridors.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Enterprise connectivity advisory across Guatemala City, Quetzaltenango & Antigua",
                    "DIA / IP transit via Pacific and Caribbean PoPs",
                    "FTTx, fibre & fixed-wireless last-mile solutions",
                    "CPE / router staging, configuration & lifecycle management",
                    "SLA-backed services with local escalation & 24/7 NOC",
                    "Traffic engineering toward Miami & Mexico City for optimal latency",
                    "Enterprise security (VPN, firewalling, DDoS mitigation)",
                    "SD-WAN overlays for multi-site national deployments"
                  ].map((cap) => (
                    <div
                      key={cap}
                      className="flex items-start space-x-3 bg-card/40 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow"
                    >
                      <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                      <div className="text-sm">{cap}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* COMMERCIAL OFFER */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">

            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Contact us to receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>.
              We support connectivity planning across Guatemala City, Quetzaltenango and Antigua,
              subject to fibre availability and regional logistics.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-qt.com?subject=Guatemala%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1">
              <li><a className="underline" href="https://www.worldometers.info/world-population/guatemala-population/" target="_blank">Worldometers — Population</a></li>
              <li><a className="underline" href="https://en.wikipedia.org/wiki/Guatemala" target="_blank">Wikipedia — Overview</a></li>
              <li><a className="underline" href="https://www.submarinecablemap.com/country/guatemala" target="_blank">Submarine Cable Map — Guatemala</a></li>
              <li><a className="underline" href="https://www.dgac.gob.gt/" target="_blank">DGAC — Airport Information</a></li>
            </ul>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Guatemala;
