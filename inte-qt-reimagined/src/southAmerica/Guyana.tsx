import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Guyana: React.FC = () => {
    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Guyana | Connectivity, ISPs & Broadband Overview",
  description:
    "Overview of Guyana's internet connectivity, submarine and terrestrial routes, ISPs, broadband market and inte-QT capabilities across Georgetown, Linden, Berbice and other key hubs.",
  url: "https://www.inte-qt.com/coverage/south-america/guyana",

  about: {
    "@type": "Country",
    name: "Guyana",

    population: {
      "@type": "QuantitativeValue",
      value: 805000
    },

    currency: "GYD",

    inLanguage: ["English", "Guyanese Creole"],

    capital: {
      "@type": "City",
      name: "Georgetown"
    },

    containsPlace: [
      { "@type": "City", name: "Georgetown" },
      { "@type": "City", name: "Linden" },
      { "@type": "City", name: "New Amsterdam" },
      { "@type": "City", name: "Bartica" },
      { "@type": "City", name: "Lethem" }
    ],

    neighboringCountry: [
      { "@type": "Country", name: "Brazil" },
      { "@type": "Country", name: "Suriname" },
      { "@type": "Country", name: "Venezuela" }
    ],

    geo: {
      "@type": "GeoCoordinates",
      latitude: 4.8604,
      longitude: -58.9302
    }
  },

  mentions: [
    {
      "@type": "Airport",
      name: "Cheddi Jagan International Airport",
      iataCode: "GEO"
    },
    {
      "@type": "Airport",
      name: "Eugene F. Correia International Airport",
      iataCode: "OGL"
    }
  ],

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
      <title>Internet in Guyana | Connectivity, ISPs & Broadband Overview</title>

      <meta
        name="description"
        content="Overview of Guyana's internet connectivity, submarine/terrestrial routes, ISPs, broadband market and inte-QT capabilities across Georgetown, Linden, Berbice and other key hubs."
      />

      <link
        rel="canonical"
        href="https://www.inte-qt.com/coverage/south-america/guyana"
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1595794038905-0b713525dead?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3V5YW5hfGVufDB8MHwwfHx8Mg%3D%3D")',
          }}
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1.2px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Guyana
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A rapidly developing South American nation with growing fibre rollout, strong mobile adoption
            and international connectivity linked through regional Caribbean routes and neighbouring countries.
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
                      <li><strong>Official Name:</strong> Co-operative Republic of Guyana</li>
                      <li><strong>Population:</strong> ≈ 800,000–810,000 (2025 est.)</li>
                      <li><strong>Capital & Major Cities:</strong> Georgetown (capital), Linden, New Amsterdam, Bartica, Lethem</li>
                      <li><strong>Languages:</strong> English (official); Guyanese Creole widely spoken</li>
                      <li><strong>Currency:</strong> Guyanese dollar (GYD)</li>
                      <li><strong>Neighbours:</strong> Brazil, Suriname, Venezuela</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/gy.png"
                        alt="Guyana Flag"
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
                      Guyana has been rapidly expanding its telecom and digital sectors, supported by economic growth driven by offshore oil production.
                      Fibre deployment in Georgetown and coastal regions is growing, while the interior relies on long-haul fibre, microwave and VSAT links.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      International connectivity routes typically pass through the Caribbean, with links into Trinidad, Suriname and Brazil forming part of regional redundancy and IP transit paths.
                    </p>

                    {/* Map */}
                    <h3 className="font-semibold mb-3 text-lg">Map</h3>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                      <iframe
                        title="Map of Guyana"
                        src="https://www.google.com/maps?q=Guyana&output=embed"
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
                        <li>Cheddi Jagan International Airport (GEO) — main international gateway</li>
                        <li>Eugene F. Correia International Airport (OGL) — regional hub serving domestic & Caribbean routes</li>
                        <li>Interior airstrips support remote mining & forestry regions</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Guyana’s connectivity ecosystem is dominated by mobile broadband and developing FTTx networks.
                        International routing relies on submarine fibre systems via Trinidad & Tobago, Suriname and Brazil,
                        with redundancy improving gradually.
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
                              <td className="py-3 px-4">Population (2025 est.)</td>
                              <td className="py-3 px-4">≈ 800k–810k</td>
                              <td className="py-3 px-4">Sparse inland population; coastal concentration.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Mobile-first; growing fibre</td>
                              <td className="py-3 px-4">4G widespread; FTTx expanding in Georgetown.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Guyanese dollar (GYD)</td>
                              <td className="py-3 px-4">National currency issued by Bank of Guyana.</td>
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

        {/* Submarine Cables & ISPs */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & Regional Routes</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Guyana benefits from regional submarine links and terrestrial corridors that connect to Caribbean and South American PoPs.
                  Recent infrastructure projects aim to increase redundancy and lower transit costs for regional traffic.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/guyana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Guyana.png"
                      alt="Submarine cables serving Guyana"
                      className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
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
                  Major providers include GTT (Guyana Telephone & Telegraph), Digicel Guyana and local ISPs. The market mixes mobile-first retail access with growing enterprise fibre and wholesale services.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity across Georgetown, Linden and Lethem",
                    "DIA / IP transit via Caribbean and regional PoPs",
                    "FTTx and fixed-wireless last-mile solutions for coastal and interior sites",
                    "CPE / Router staging, configuration and managed services",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards Trinidad/Miami PoPs for optimal routing",
                    "Security services (VPN, firewalling, DDoS mitigation) for enterprise workloads",
                    "SD-WAN overlay designs for multi-site deployments"
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
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>.
              We support connectivity planning around Georgetown, Linden and other feasible sites subject to regional transit and landing availability.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-qt.com?subject=Guyana%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.worldometers.info/world-population/guyana-population/" target="_blank" rel="noopener noreferrer" className="underline">Worldometers — Population</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Guyana" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Guyana (overview)</a></li>
              <li><a href="https://www.submarinecablemap.com/country/guyana" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — Guyana</a></li>
              <li><a href="https://gis.gy/" target="_blank" rel="noopener noreferrer" className="underline">Guyana Lands & Surveys Commission / GIS resources</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Guyana;
