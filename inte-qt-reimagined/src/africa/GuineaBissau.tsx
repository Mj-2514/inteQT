import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const GuineaBissau: React.FC = () => {
    <Helmet>
        <title>Internet in Guinea-Bissau | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Guinea-Bissau's internet connectivity, national backbone, ISPs and enterprise capabilities in Bissau and regional centres."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/guinea-bissau" />
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
              'url("https://images.unsplash.com/photo-1680200023508-5289ae3de157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3VpbmVhJTIwYmlzc2F1fGVufDB8MHwwfHx8Mg%3D%3D")',
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
            Internet in Guinea-Bissau
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A small West African state with concentrated digital infrastructure in Bissau. International capacity and resilience
            have improved in recent years through regional projects and national backbone development.
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
                      <li><strong>Official Name:</strong> Republic of Guinea-Bissau</li>
                      <li><strong>Population:</strong> ≈ 2.2–2.3 million (2025 est.)</li>
                      <li><strong>Capital & Main Cities:</strong> Bissau (capital), Bafatá, Gabú, Bissorã, Cacheu</li>
                      <li><strong>Languages:</strong> Portuguese (official); Guinea-Bissau Creole (Kriol) widely used; many indigenous languages</li>
                      <li><strong>Currency:</strong> West African CFA franc (XOF)</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/gw.png"
                        alt="Guinea-Bissau Flag"
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
                      Guinea-Bissau is a low-density coastal country with most economic and digital activity concentrated in and around Bissau.
                      Historically underconnected, the country has been developing its national backbone and connecting to regional systems to improve international capacity.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Consumer access is predominantly mobile-first; fixed broadband and enterprise services are available in urban centres, while satellite and microwave help reach remote islands and rural areas.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Guinea-Bissau"
                          src="https://www.google.com/maps?q=Guinea-Bissau&output=embed"
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
                        <li>Osvaldo Vieira International Airport (Bissau — OXB) — primary international gateway</li>
                        <li>Regional airstrips support travel to interior towns and islands</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Recent projects have linked the country into regional submarine and terrestrial networks and built national backbone links from landing points to inland PoPs. Mobile operators provide most consumer connections, while enterprise services rely on fibre, satellite and wholesale transit.
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
                              <td className="py-3 px-4">≈ 2.2–2.3 million</td>
                              <td className="py-3 px-4">Concentrated around the capital and coastal zones.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Mobile-first; improving mobile broadband</td>
                              <td className="py-3 px-4">Operators expanding 4G; fixed broadband limited but growing.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">West African CFA franc (XOF)</td>
                              <td className="py-3 px-4">Member of the WAEMU monetary union.</td>
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
                  Regional initiatives (including recent ACE extensions and terrestrial links) have improved Guinea-Bissau's international connectivity, providing more resilient routes and options for transit through West Africa.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/guinea-bissau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/GuineaBissau.png"
                      alt="Submarine cables and regional transport links for Guinea-Bissau"
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
                  Local and regional operators provide mobile and limited fixed services. Wholesale transit and peering are typically concentrated near Bissau PoPs and any landing stations or terrestrial gateways.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for connectivity in Bissau and coastal centres",
                    "DIA / IP transit via regional PoPs and ACE-enabled links",
                    "Hybrid last-mile (4G + fixed-wireless) for island and rural sites",
                    "CPE / Router staging, configuration and managed services",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards Dakar/Abidjan/Madeira PoPs for optimal routing",
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
              We support connectivity planning around Bissau and regional centres subject to landing station access and local logistics.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-QT.com?subject=Guinea-Bissau%20Connectivity%20Inquiry" className="text-primary underline font-semibold">
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.worldometers.info/world-population/guinea-bissau-population/" target="_blank" rel="noopener noreferrer" className="underline">Worldometers — Population estimates (2025)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Guinea-Bissau" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Guinea-Bissau (overview)</a></li>
              <li><a href="https://www.submarinecablemap.com/country/guinea-bissau" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — Guinea-Bissau</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Osvaldo_Vieira_International_Airport" target="_blank" rel="noopener noreferrer" className="underline">Osvaldo Vieira International Airport — Bissau (OXB)</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GuineaBissau;
