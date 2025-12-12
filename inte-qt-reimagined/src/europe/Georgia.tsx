import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Georgia: React.FC = () => {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Georgia | Connectivity, ISPs & Broadband Overview",
  description:
    "Overview of Georgia's internet connectivity, submarine and terrestrial routes, ISPs, broadband market and inte-QT capabilities in Tbilisi, Batumi, Kutaisi and other key centres.",
  url: "https://www.inte-qt.com/coverage/europe/georgia",
  about: {
    "@type": "Country",
    name: "Georgia",
    alternateName: "Sakartvelo",
    officialLanguage: "Georgian",
    currency: "GEL",
    population: {
      "@type": "QuantitativeValue",
      value: 3800000
    },
    capital: {
      "@type": "City",
      name: "Tbilisi"
    }
  },
  publisher: {
    "@type": "Organization",
    name: "inte-QT",
    url: "https://www.inte-qt.com"
  }
};

  return (
    <>
      <Helmet>
        <title>Internet in Georgia | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Georgia's internet connectivity, submarine and terrestrial routes, ISPs, broadband market and inte-QT capabilities in Tbilisi, Batumi, Kutaisi and other key centres."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/georgia"
        />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section
        className="relative py-28 overflow-hidden"
        aria-labelledby="hero-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1561731172-9d906d7b13bf?auto=format&fit=crop&w=1600&q=80")',
          }}
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Georgia
          </motion.h1>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A Caucasus country bridging Europe and Asia with growing digital
            infrastructure, strategic PoPs in Tbilisi and improving regional
            transit connectivity including Black Sea initiatives.
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
                        <strong>Official Name:</strong> Georgia (Sakartvelo)
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 3.7–3.9 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital & Main Cities:</strong> Tbilisi (capital), Batumi, Kutaisi, Rustavi.
                      </li>
                      <li>
                        <strong>Language:</strong> Georgian (official); Russian and English widely used.
                      </li>
                      <li>
                        <strong>Currency:</strong> Georgian lari (GEL)
                      </li>
                      <li>
                        <strong>Neighbours:</strong> Russia, Turkey, Armenia, Azerbaijan.
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/ge.png"
                        alt="Georgia Flag"
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
                      Georgia occupies a strategic position in the South Caucasus,
                      acting as a transit route between Europe and Asia. The
                      country has been developing its digital infrastructure —
                      with Tbilisi as the primary hub for data centres, IXPs and
                      enterprise connectivity.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Recent projects have explored Black Sea submarine cable
                      routes to strengthen regional resilience and provide new
                      low-latency paths to Europe. Domestic fibre and mobile
                      networks (4G; growing 5G trials) continue to expand urban
                      coverage while supporting enterprise growth.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Georgia"
                          src="https://www.google.com/maps?q=Georgia+(country)&output=embed"
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
                        <li>Shota Rustaveli Tbilisi International Airport (TBS) — primary international gateway.</li>
                        <li>Batumi International Airport (BUS) — important Black Sea gateway.</li>
                        <li>Kutaisi International Airport (KUT) — low-cost carrier hub.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Georgia's international connectivity combines terrestrial
                        fibre corridors and planned/subsea initiatives across the
                        Black Sea. Major urban nodes have dense peering and
                        enterprise-facing services; rural areas remain reliant on
                        wireless and satellite-backed links.
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
                              <td className="py-3 px-4">≈ 3.7–3.9 million</td>
                              <td className="py-3 px-4">Population varies with regional boundary considerations (Abkhazia/South Ossetia).</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Growing mobile penetration; expanding fibre</td>
                              <td className="py-3 px-4">4G coverage widespread; 5G trials underway in urban areas.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Georgian lari (GEL)</td>
                              <td className="py-3 px-4">Managed by the National Bank of Georgia.</td>
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

        {/* Submarine Cables & Projects */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Subsea & Regional Routes</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Georgia has strategic interest in Black Sea subsea connectivity projects
                  that aim to diversify transit paths to Europe. Combined with terrestrial
                  corridors through Turkey and Azerbaijan, these routes support regional
                  redundancy and improved latency for Georgian networks.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/georgia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Georgia.png"
                      alt="Regional transit and submarine cable access for Georgia"
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
                  The market comprises national operators and regional transit providers.
                  Retail access is commonly provided by mobile operators and local ISPs,
                  while enterprise customers consume leased lines, datacentre services
                  and international transit from PoPs in Tbilisi and Batumi.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Tbilisi and Batumi",
                    "DIA / IP transit via Black Sea and regional PoPs",
                    "Hybrid last-mile (4G/5G + fixed-wireless) for sites without fibre",
                    "CPE / Router staging, configuration and ongoing management",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards European PoPs for optimal routing",
                    "Security services (VPN, firewalling, DDoS mitigation) for enterprise workloads",
                    "Regional SD-WAN overlay designs for multi-site deployments"
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
              We support connectivity planning around Tbilisi, Batumi and other feasible sites subject to regional transit and regulatory conditions.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Georgia%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.worldometers.info/world-population/georgia-population/" target="_blank" rel="noopener noreferrer" className="underline">Worldometers — Population estimates (2025)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Georgia_(country)" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Georgia (overview)</a></li>
              <li><a href="https://tbilisiairport.com/" target="_blank" rel="noopener noreferrer" className="underline">Tbilisi International Airport — details</a></li>
              <li><a href="https://international-partnerships.ec.europa.eu/policies/global-gateway/black-sea-digital-connectivity-submarine-digital-cable_en" target="_blank" rel="noopener noreferrer" className="underline">Black Sea Digital Connectivity initiative — overview</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Georgia;
