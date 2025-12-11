import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Finland: React.FC = () => {
    <Helmet>
        <title>Internet in Finland | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Finland's internet connectivity, Nordic submarine routes, ISPs, broadband market, datacentres and inte-QT capabilities in Helsinki, Tampere, Oulu and other regions."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/europe/finland" />
      </Helmet>
  return (
    <>
      

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
              'url("https://images.unsplash.com/photo-1522885147691-06d859633fb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlubGFuZHxlbnwwfDB8MHx8fDI%3D")',
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
            Internet in Finland
          </motion.h1>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A highly digital Nordic nation with world-leading broadband access,
            extensive fibre coverage, advanced 5G deployment and strategic
            submarine cable routes linking Scandinavia, the Baltics and Central
            Europe.
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
                        <strong>Official Name:</strong> Republic of Finland
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 5.6 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital & Main Cities:</strong> Helsinki (capital), Espoo, Tampere, Oulu, Turku.
                      </li>
                      <li>
                        <strong>Languages:</strong> Finnish, Swedish (both official); English widely used.
                      </li>
                      <li>
                        <strong>Currency:</strong> Euro (EUR)
                      </li>
                      <li>
                        <strong>Neighbours:</strong> Sweden, Norway, Russia; maritime border with Estonia.
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/fi.png"
                        alt="Finland Flag"
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
                      Finland consistently ranks among the most digitally advanced
                      nations globally, boasting widespread fibre-to-home
                      penetration, high-speed 5G coverage and forward-leaning
                      digital public services. Its strong datacentre ecosystem—
                      amplified by a cool climate and green energy—supports
                      international cloud and enterprise deployments.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      International connectivity is anchored by Nordic and Baltic
                      submarine cable systems, including routes to Sweden,
                      Germany, Estonia and Poland. Finland’s geographic position
                      gives it a resilient multi-path footprint feeding major
                      European internet exchanges.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Finland"
                          src="https://www.google.com/maps?q=Finland&output=embed"
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

                {/* Airports & Connectivity */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Main Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Helsinki Airport (HEL) — major Nordic aviation hub.</li>
                        <li>Tampere–Pirkkala Airport — key regional airport.</li>
                        <li>Oulu & Turku — important domestic and regional connectors.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Finland benefits from multiple submarine cable landings,
                        extensive domestic fibre networks and very high broadband
                        adoption. Its low-latency Nordic routes connect directly to
                        Stockholm and Copenhagen, while Baltic Sea cables provide
                        additional redundancy into Estonia and Central Europe.
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
                              <td className="py-3 px-4">≈ 5.6 million</td>
                              <td className="py-3 px-4">Highly connected, tech-driven population.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Top-tier global connectivity</td>
                              <td className="py-3 px-4">Strong 5G rollout, dense fibre availability.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Euro (EUR)</td>
                              <td className="py-3 px-4">Eurozone member.</td>
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

        {/* Submarine Cables */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & International Routes</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Finland is integrated into multiple Nordic–Baltic cable systems,
                  including links to Sweden, Estonia, Germany and Poland. Newer
                  systems such as C-Lion and Northern Lights further strengthen its
                  role as a northern European digital gateway.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/finland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Finland.png"
                      alt="Submarine cables serving Finland"
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
                  The market is competitive with major carriers such as Elisa, Telia
                  Finland and DNA providing comprehensive consumer and enterprise
                  services. Finland hosts strong IXPs and datacentre clusters that
                      support peering and cloud connectivity.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Helsinki, Tampere and Oulu",
                    "DIA / IP transit options via Nordic and Baltic PoPs",
                    "FTTx and fixed-wireless solutions for regional sites",
                    "CPE / Router staging, configuration and ongoing management",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards Stockholm/Frankfurt PoPs for optimal routing",
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
              We support connectivity planning around Helsinki, Tampere, Oulu and other feasible sites subject to local infrastructure and regulatory constraints.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Finland%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.stat.fi/" target="_blank" rel="noopener noreferrer" className="underline">Statistics Finland — population & statistics</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Finland" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Finland (overview)</a></li>
              <li><a href="https://www.submarinecablemap.com/" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — Nordic / Baltic overview</a></li>
              <li><a href="https://www.elisa.fi/" target="_blank" rel="noopener noreferrer" className="underline">Elisa — operator</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Finland;
