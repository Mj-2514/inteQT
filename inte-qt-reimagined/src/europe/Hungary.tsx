import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Hungary: React.FC = () => {
    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Hungary | Connectivity, ISPs & Broadband Overview",
  description:
    "Overview of Hungary's internet connectivity, terrestrial routes, ISPs, broadband adoption and datacentre ecosystem across Budapest, Debrecen, Szeged and other key centres.",
  url: "https://www.inte-qt.com/coverage/europe/hungary",
  about: {
    "@type": "Country",
    name: "Hungary",
    alternateName: "Magyarország",
    officialLanguage: "Hungarian",
    currency: "HUF",
    population: {
      "@type": "QuantitativeValue",
      value: 9700000
    },
    capital: {
      "@type": "City",
      name: "Budapest"
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
  <title>Internet in Hungary | Connectivity, ISPs & Broadband Overview</title>

  <meta
    name="description"
    content="Overview of Hungary's internet connectivity, terrestrial routes, ISPs, broadband adoption and datacentre ecosystem across Budapest, Debrecen, Szeged and other key centres."
  />

  <link
    rel="canonical"
    href="https://www.inte-qt.com/coverage/europe/hungary"
  />

  {/* JSON-LD */}
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1616432902940-b7a1acbc60b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVuZ2FyeXxlbnwwfDB8MHx8fDI%3D")',
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
            Internet in Hungary
          </motion.h1>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A central European, landlocked market with mature broadband adoption, strong fibre and mobile coverage and Budapest as the primary connectivity and datacentre hub.
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
                      <li><strong>Official Name:</strong> Hungary (Magyarország)</li>
                      <li><strong>Population:</strong> ≈ 9.6–9.7 million (2025 est.)</li>
                      <li><strong>Capital & Main Cities:</strong> Budapest (capital), Debrecen, Szeged, Miskolc, Pécs</li>
                      <li><strong>Languages:</strong> Hungarian (official); recognised minority languages include German, Slovak, Romanian, Croatian, Serbian, Romani</li>
                      <li><strong>Currency:</strong> Hungarian forint (HUF)</li>
                      <li><strong>Neighbours:</strong> Austria, Slovakia, Ukraine, Romania, Serbia, Croatia, Slovenia</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/hu.png"
                        alt="Hungary Flag"
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
                      Hungary is a developed European market with widespread fixed and mobile broadband adoption. Budapest is the national connectivity hub, hosting major IXPs, datacentres and enterprise PoPs. Terrestrial fibre networks interconnect regional cities and provide international transit via neighbouring countries.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The country benefits from EU-level infrastructure funding and proximity to major European internet exchange points, facilitating low-latency routes into Central and Western Europe.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Hungary"
                          src="https://www.google.com/maps?q=Hungary&output=embed"
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

                {/* Airports & Connectivity Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Main Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Budapest Ferenc Liszt International Airport (BUD) — primary international gateway</li>
                        <li>Debrecen International Airport (DEB) — regional international services</li>
                        <li>Smaller airports and general aviation fields support domestic and regional routes</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Hungary's internet infrastructure is built around national fibre backbones, metro networks and mobile operators delivering high-capacity 4G/5G coverage. Budapest hosts key peering points and datacentre facilities that support regional cloud and enterprise services.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">Type</th>
                              <th className="py-3 px-4 text-left font-semibold">Estimate</th>
                              <th className="py-3 px-4 text-left font-semibold">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Population (2025 est.)</td>
                              <td className="py-3 px-4">≈ 9.6–9.7 million</td>
                              <td className="py-3 px-4">Population concentrated around Budapest and regional centres.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">High broadband adoption; mature market</td>
                              <td className="py-3 px-4">FTTx and fixed wireless available; 5G rollouts in major cities.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Hungarian forint (HUF)</td>
                              <td className="py-3 px-4">Issued by the Hungarian National Bank.</td>
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

                <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
                  Although Hungary is landlocked, it connects to major European submarine cable systems indirectly through neighbouring countries such as Austria, Slovakia, Slovenia and Romania. These terrestrial extensions link Budapest to major European landing points on the Adriatic, Mediterranean and North Sea, enabling low-latency access to global networks.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Hungary.png"
                      alt="Regional submarine connectivity routes affecting Hungary"
                      className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ISPs & Market */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Providers, Datacentres & Market</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Hungary's market includes major operators such as Magyar Telekom (T-Mobile/Telekom), Vodafone Hungary and Yettel (formerly Telenor Hungary), alongside local ISPs and international carriers. Budapest hosts a growing datacentre ecosystem and IXPs that provide strong peering and transit capabilities for Central Europe.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Budapest, Debrecen and regional hubs",
                    "DIA / IP transit via Budapest PoPs and neighbouring EU gateways",
                    "FTTx, metro and fixed-wireless last-mile solutions",
                    "CPE / Router staging, configuration and managed services",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards Vienna/Frankfurt/Amsterdam PoPs",
                    "Security services (VPN, firewalling, DDoS mitigation) for enterprise workloads",
                    "Regional SD-WAN and cloud-connect solutions"
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
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>.
              We support connectivity planning across Budapest, Debrecen and other feasible sites subject to regional transit and datacentre availability.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-qt.com?subject=Hungary%20Connectivity%20Inquiry" className="text-primary underline font-semibold">Email Us</a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.worldometers.info/world-population/hungary-population/" target="_blank" rel="noopener noreferrer" className="underline">Worldometers — Population (2025)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Hungary" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Hungary (overview)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Budapest_Ferenc_Liszt_International_Airport" target="_blank" rel="noopener noreferrer" className="underline">Budapest Ferenc Liszt International Airport — BUD</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Hungary;
