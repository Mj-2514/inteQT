import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Greece: React.FC = () => {
    <Helmet>
        <title>Internet in Greece | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Greece's internet connectivity, submarine and terrestrial routes, ISPs, broadband and datacentre ecosystem across Athens, Thessaloniki, Patras and other key centres."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/europe/greece" />
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
              'url("https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZWNlfGVufDB8MHwwfHx8Mg%3D%3D")',
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
            Internet in Greece
          </motion.h1>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A mature European market with widespread fibre and mobile coverage,
            strategic Mediterranean and Aegean cable landings and a growing
            datacentre ecosystem centred around Athens, Thessaloniki and Patras.
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
                        <strong>Official Name:</strong> Hellenic Republic (Greece)
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 10.2–10.4 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital & Main Cities:</strong> Athens (capital), Thessaloniki, Patras, Heraklion.
                      </li>
                      <li>
                        <strong>Language:</strong> Greek (official); English widely spoken.
                      </li>
                      <li>
                        <strong>Currency:</strong> Euro (EUR)
                      </li>
                      <li>
                        <strong>Neighbours:</strong> Albania, North Macedonia, Bulgaria, Turkey; maritime neighbours across the Mediterranean.
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/gr.png"
                        alt="Greece Flag"
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
                      Greece benefits from strong European-level connectivity, with
                      dense fibre coverage in urban areas, mature mobile networks and
                      established points-of-presence that feed regional and global
                      networks. Athens is the primary commercial and peering hub,
                      while Patras and other coastal locations serve as submarine
                      cable landing points.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The country's geography — a long coastline and many islands —
                      makes submarine and regional maritime routes critical. Greece
                      participates in Mediterranean and Aegean cable systems that
                      provide links into Europe, North Africa and the Middle East.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Greece"
                          src="https://www.google.com/maps?q=Greece&output=embed"
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
                        <li>Athens International Airport (ATH) — principal international gateway.</li>
                        <li>Thessaloniki, Heraklion, Patras (regional access via nearby airports) — important regional gateways.</li>
                        <li>Numerous island airports supporting tourism and regional connectivity.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Greece connects to international submarine cable systems in the
                        Mediterranean and Aegean seas. Coastal landing stations and
                        terrestrial backhaul connect these points to Athens and other
                        inland PoPs. The market features competitive retail ISPs and a
                        growing datacentre cluster supporting cloud and enterprise needs.
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
                              <td className="py-3 px-4">≈ 10.2–10.4 million</td>
                              <td className="py-3 px-4">Population concentrated in Athens and major regional cities.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">High broadband adoption; mature mobile market</td>
                              <td className="py-3 px-4">FTTx in urban areas, widespread 4G and expanding 5G coverage.</td>
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
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & Regional Routes</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Greece sits on key Mediterranean and Aegean subsea routes. Systems such as AAE-1 and other regional
                  Mediterranean cables provide transit to Southern Europe, North Africa and onward global networks. Landing
                  stations at coastal nodes (e.g., Patras, Kalamata and near Athens) provide the physical entry points for
                  international capacity.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/greece"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Greece.png"
                      alt="Submarine cables serving Greece"
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
                  The Greek market features national operators such as OTE/OTE Group (Cosmote), Vodafone Greece and smaller
                  ISPs providing retail broadband, mobile and enterprise services. Greece hosts regional IXPs and several
                  datacentre facilities that support local and international cloud connectivity.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Athens, Thessaloniki and Patras",
                    "DIA / IP transit via Mediterranean PoPs",
                    "FTTx and fixed-wireless solutions for islands and regional sites",
                    "CPE / Router staging, configuration and ongoing management",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards Athens/Frankfurt PoPs for optimal routing",
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
              We support connectivity planning around Athens, Thessaloniki, Patras and other feasible sites subject to local infrastructure and regulatory constraints.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Greece%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://ec.europa.eu/eurostat" target="_blank" rel="noopener noreferrer" className="underline">Eurostat / National statistics — population</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Greece" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Greece (overview)</a></li>
              <li><a href="https://www.submarinecablemap.com/" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — Mediterranean overview</a></li>
              <li><a href="https://www.aia.gr/" target="_blank" rel="noopener noreferrer" className="underline">Athens International Airport — details</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Greece;
