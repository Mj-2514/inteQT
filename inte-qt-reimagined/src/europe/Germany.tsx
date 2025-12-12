import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Germany: React.FC = () => {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Germany | Connectivity, ISPs & Broadband Overview",
  description:
    "Overview of Germany's internet connectivity, submarine and terrestrial routes, ISPs, broadband statistics and inte-QT service capabilities in Berlin, Frankfurt, Munich and other key centres.",
  url: "https://www.inte-qt.com/coverage/europe/germany",
  about: {
    "@type": "Country",
    name: "Germany",
    officialLanguage: "German",
    currency: "EUR",
    population: {
      "@type": "QuantitativeValue",
      value: 84000000
    },
    capital: {
      "@type": "City",
      name: "Berlin"
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
        <title>Internet in Germany | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Germany's internet connectivity, submarine and terrestrial routes, ISPs, broadband statistics and inte-QT service capabilities in Berlin, Frankfurt, Munich and other key centres."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/germany"
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
              'url("https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80")',
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
            Internet in Germany
          </motion.h1>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A leading European digital economy with dense fibre rollouts, advanced
            mobile networks (including widespread 5G) and strategic international
            connectivity through multiple North Sea and Baltic landing stations.
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
                        <strong>Official Name:</strong> Federal Republic of Germany
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 84 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital & Main Cities:</strong> Berlin (capital), Hamburg, Munich, Cologne, Frankfurt.
                      </li>
                      <li>
                        <strong>Languages:</strong> German (de facto national language); recognised minority and regional languages exist.
                      </li>
                      <li>
                        <strong>Currency:</strong> Euro (EUR)
                      </li>
                      <li>
                        <strong>Neighbours:</strong> Denmark, Poland, Czech Republic, Austria, Switzerland, France, Luxembourg, Belgium, Netherlands.
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/de.png"
                        alt="Germany Flag"
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
                      Germany is one of Europe's largest digital markets, with extensive
                      fibre infrastructure, advanced mobile networks and a dense
                      ecosystem of datacentres and internet exchanges. Frankfurt is a
                      major European connectivity hub, and Germany benefits from multiple
                      submarine cable landings on the North Sea and Baltic coasts.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The country's enterprise market is well-served by national carriers
                      and international providers, while metropolitan areas enjoy high
                      FTTH/FTTB penetration and low-latency access to European PoPs.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Germany"
                          src="https://www.google.com/maps?q=Germany&output=embed"
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
                        <li>Frankfurt Airport (FRA) — major European aviation & cargo hub.</li>
                        <li>Munich Airport (MUC) — large international gateway in the south.</li>
                        <li>Berlin Brandenburg (BER), Hamburg (HAM), Düsseldorf (DUS) — key hubs.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Germany hosts strong peering ecosystems (e.g., DE-CIX in Frankfurt),
                        high FTTH availability in cities and widespread 5G coverage. Multiple
                        North Sea and Baltic landing points connect Germany into pan-European
                        and transatlantic networks.
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
                              <td className="py-3 px-4">≈ 84 million</td>
                              <td className="py-3 px-4">Largest EU population and major digital economy.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">High broadband adoption; mature 5G</td>
                              <td className="py-3 px-4">Dense fibre and strong IX/peering presence.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Euro (EUR)</td>
                              <td className="py-3 px-4">Member of the Eurozone.</td>
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
                  Germany connects to multiple submarine cable systems via North Sea and Baltic landing stations
                  (e.g., Norden, Rostock). These systems provide resilience and transit to the UK, Scandinavia and
                  broader Europe, while terrestrial backhaul links feed major PoPs like Frankfurt.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/germany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Germany.png"
                      alt="Submarine cables serving Germany"
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
                  A competitive market with major operators such as Deutsche Telekom, Vodafone Germany, 1&1 and Telefónica
                  Deutschland. Germany hosts prominent IXPs (DE-CIX) and many datacentre clusters that support cloud and
                  enterprise services.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Frankfurt, Berlin and Munich",
                    "DIA / IP transit via multiple European PoPs",
                    "FTTx and fixed-wireless solutions for regional sites",
                    "CPE / Router staging, configuration and ongoing management",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards Frankfurt/Amsterdam/Paris PoPs for optimal routing",
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
              We support connectivity planning around Frankfurt, Berlin, Munich and other feasible sites subject to local infrastructure and regulatory constraints.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Germany%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.destatis.de/EN/Home/_node.html" target="_blank" rel="noopener noreferrer" className="underline">Destatis — Federal Statistical Office</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Germany" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Germany (overview)</a></li>
              <li><a href="https://www.submarinecablemap.com/" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — landing stations</a></li>
              <li><a href="https://www.frankfurt-airport.com/en.html" target="_blank" rel="noopener noreferrer" className="underline">Frankfurt Airport — details</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Germany;
