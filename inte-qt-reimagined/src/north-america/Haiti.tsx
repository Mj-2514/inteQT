import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Haiti: React.FC = () => {
    <Helmet>
        <title>Internet in Haiti | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Haiti's internet connectivity, submarine & terrestrial routes, ISPs, broadband market and inte-QT capabilities across Port-au-Prince, Cap-Haïtien and other key centres."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/caribbean/haiti" />
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1602027333786-373a1b858831?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFpdGl8ZW58MHwwfDB8fHwy")',
          }}
        />

        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1.5px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Haiti
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A Caribbean nation with strong mobile adoption and improving international links — connectivity centres on Port-au-Prince and Cap-Haïtien, with regional submarine and terrestrial projects shaping capacity.
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
                      <li><strong>Official Name:</strong> Republic of Haiti</li>
                      <li><strong>Population:</strong> ≈ 11.8–12.0 million (2025 est.)</li>
                      <li><strong>Capital & Main Cities:</strong> Port-au-Prince (capital), Cap-Haïtien, Gonaïves, Les Cayes, Jacmel</li>
                      <li><strong>Languages:</strong> Haitian Creole (widely spoken) and French (official)</li>
                      <li><strong>Currency:</strong> Haitian gourde (HTG)</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/ht.png"
                        alt="Haiti Flag"
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
                      Haiti is the most populous nation in the Caribbean after Cuba and the Dominican Republic. Telecom markets are mobile-led, with Digicel and NATCOM among the primary operators. International capacity has been improved by targeted submarine cable projects and regional fibre extensions, though political and security challenges affect infrastructure rollout and operations.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Enterprise connectivity and data services are concentrated in Port-au-Prince and select regional centres; satellite and fixed wireless remain important for resilience and remote coverage.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Haiti"
                          src="https://www.google.com/maps?q=Haiti&output=embed"
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
                        <li>Toussaint Louverture International Airport (PAP) — Port-au-Prince; principal international gateway.</li>
                        <li>Cap-Haïtien International Airport (CAP) — northern regional gateway.</li>
                        <li>Regional airstrips support travel to Jacmel, Les Cayes and smaller communities.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Haiti's international connectivity relies on regional Caribbean submarine systems and targeted national extensions (including FibraLink-related projects and regional interconnects). Mobile broadband provides the bulk of consumer access while fibre and leased circuits serve enterprise and government customers.
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
                              <td className="py-3 px-4">≈ 11.8–12.0 million</td>
                              <td className="py-3 px-4">High urban concentration in Port-au-Prince and northern cities.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Mobile-first; improving fixed broadband</td>
                              <td className="py-3 px-4">Digicel and NATCOM are major providers; satellite and fixed wireless important for coverage.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Haitian gourde (HTG)</td>
                              <td className="py-3 px-4">Issued by the Banque de la République d'Haïti.</td>
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
                  Haiti is connected to regional submarine networks and has benefited from projects such as FibraLink extensions and private undersea links to improve capacity. These systems connect Haiti to Caribbean hubs and onward to North American PoPs, forming the backbone for international transit.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/haiti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Haiti.png"
                      alt="Submarine cables serving Haiti"
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
                  Major operators include Digicel Haiti, NATCOM, Access Haiti and Hainet. The retail market is mobile-led, with growing demand for enterprise fibre, datacentre and wholesale transit services when security and logistics permit.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Port-au-Prince and Cap-Haïtien",
                    "DIA / IP transit via regional PoPs and undersea gateways",
                    "FTTx and fixed-wireless last-mile solutions for metro and campus sites",
                    "CPE / Router staging, configuration and managed services",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards Miami and Caribbean PoPs for optimal latency",
                    "Security services (VPN, firewalling, DDoS mitigation) for enterprise workloads",
                    "SD-WAN overlay designs for multi-site and island deployments"
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
              We support connectivity planning across Port-au-Prince, Cap-Haïtien and other feasible sites subject to submarine landing access and local logistics.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Haiti%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.worldometers.info/world-population/haiti-population/" target="_blank" rel="noopener noreferrer" className="underline">Worldometers — Population estimates (2025)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Haiti" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Haiti (overview)</a></li>
              <li><a href="https://www.submarinecablemap.com/country/haiti" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — Haiti</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Toussaint_Louverture_International_Airport" target="_blank" rel="noopener noreferrer" className="underline">Toussaint Louverture International Airport — PAP</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Haiti;
