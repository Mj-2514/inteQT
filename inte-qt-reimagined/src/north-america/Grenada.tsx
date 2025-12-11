import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Grenada: React.FC = () => {
    <Helmet>
        <title>Internet in Grenada | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Grenada's internet connectivity, submarine cable access, ISPs, broadband landscape and inte-QT capabilities in St. George's, Gouyave and other key hubs."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/north-america/grenada" />
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
              'url("https://images.unsplash.com/photo-1468465704228-4966aabccd18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlbmFkYXxlbnwwfDB8MHx8fDI%3D")',
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
            Internet in Grenada
          </motion.h1>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A small Spice Isle in the southern Windward Islands — Grenada is a regional
            connectivity node with submarine cable landings and concentrated digital
            infrastructure around St. George's and the Maurice Bishop International Airport.
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
                        <strong>Official Name:</strong> Grenada
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 117,000 (2025 est.)
                      </li>
                      <li>
                        <strong>Capital & Main Towns:</strong> St. George's (capital), Gouyave, Grenville, Grand Anse, Carriacou.
                      </li>
                      <li>
                        <strong>Languages:</strong> English (official); Grenadian Creole English and Grenadian Creole French widely spoken.
                      </li>
                      <li>
                        <strong>Currency:</strong> Eastern Caribbean dollar (XCD)
                      </li>
                      <li>
                        <strong>Neighbours:</strong> Directly south of Saint Vincent and the Grenadines; ~100 miles north of Trinidad & Tobago.
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/gd.png"
                        alt="Grenada Flag"
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
                      Grenada — the "Island of Spice" — is a small island state whose
                      international connectivity is supported by submarine cable landing
                      stations and regional aggregation. Digital services and datacentre
                      resources are focused around St. George's and transport hubs.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Given the island geography, undersea systems such as regional Eastern
                      Caribbean networks and the Southern Caribbean Fiber provide critical
                      international transit to neighbouring Caribbean territories and onward
                      to North and South American PoPs.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Grenada"
                          src="https://www.google.com/maps?q=Grenada&output=embed"
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
                        <li>Maurice Bishop International Airport (GND) — primary international gateway.</li>
                        <li>Smaller airstrips serve Carriacou and Petit Martinique for regional traffic.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Consumer access is largely mobile-first with fixed broadband available in urban areas. Fibre and microwave
                        backhaul connect landing stations to PoPs and enterprise sites. Satellite links are used for some remote islands.
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
                              <td className="py-3 px-4">≈ 117,000</td>
                              <td className="py-3 px-4">Small island population concentrated on the main island and Carriacou.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Mobile-first; growing broadband</td>
                              <td className="py-3 px-4">Regional submarine cables provide international capacity.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Eastern Caribbean dollar (XCD)</td>
                              <td className="py-3 px-4">Shared by members of the Eastern Caribbean Currency Union.</td>
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
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & Regional Links</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Grenada is served by regional Eastern Caribbean submarine systems (e.g., ECFS) and newer Southern Caribbean Fiber
                  links that connect island networks across the Windward and Leeward chains to Trinidad, Barbados and beyond. These
                  undersea systems, combined with national backhaul, form the island's international transit backbone.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/grenada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Grenada.png"
                      alt="Submarine cables serving Grenada"
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
                  Retail and mobile services are provided by operators such as Digicel Grenada and FLOW (bmobile/Flow group). The market is
                  small and often relies on regional partners for wholesale transit and peering.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in St. George's and Gouyave",
                    "DIA / IP transit via Caribbean PoPs",
                    "Hybrid last-mile (4G + fixed-wireless) for remote sites",
                    "CPE / Router staging, configuration and managed services",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards regional PoPs for low latency",
                    "Security services (VPN, firewalling, DDoS mitigation) for enterprise workloads",
                    "SD-WAN overlay designs for multi-island deployments"
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
              We support connectivity planning around St. George's, Gouyave and other feasible sites subject to submarine landing access and local logistics.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Grenada%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.worldometers.info/world-population/grenada-population/" target="_blank" rel="noopener noreferrer" className="underline">Worldometers — Population estimates (2025)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Grenada" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Grenada (overview)</a></li>
              <li><a href="https://www.submarinecablemap.com/country/grenada" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — Grenada</a></li>
              <li><a href="https://www.gaa.gd/" target="_blank" rel="noopener noreferrer" className="underline">Grenada Airports Authority — Maurice Bishop International Airport</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Grenada;
