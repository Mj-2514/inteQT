import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Gabon: React.FC = () => {
    <Helmet>
        <title>Internet in Gabon | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Gabon's internet connectivity, submarine and terrestrial routes, ISPs, broadband statistics and inte-QT service capabilities in Libreville, Port-Gentil and other key centres."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/gabon" />
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
            // swap with your own Libreville / coastline screenshot
            backgroundImage: 'url("https://images.unsplash.com/photo-1571068746171-55a7a1b2d36f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2Fib258ZW58MHwwfDB8fHwy")',
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
            Internet in Gabon
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            An equatorial West-Central African country with coastal landing points
            and a small, urban-concentrated market. Libreville and Port-Gentil
            are the primary connectivity and enterprise centres.
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
                        <strong>Official Name:</strong> Gabonese Republic
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 2.5–2.6 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Libreville (capital), Port-Gentil, Franceville, Oyem, Lambaréné.
                      </li>
                      <li>
                        <strong>Languages:</strong> French (official); Bantu languages prevail (Fang, Myéné, etc.).
                      </li>
                      <li>
                        <strong>Currency:</strong> Central African CFA franc (XAF)
                      </li>
                      <li>
                        <strong>Neighbours:</strong> Equatorial Guinea, Cameroon, Republic of the Congo; maritime access to the Atlantic Gulf of Guinea.
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/ga.png"
                        alt="Gabon Flag"
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
                      Gabon is an oil-rich Central African state with coastal landing
                      facilities that connect it into Atlantic submarine cable systems.
                      The domestic market is relatively small and concentrated in
                      Libreville and Port-Gentil, with national carriers and regional
                      partners supplying mobile and fixed services.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      International transit is bolstered by cables such as the Africa
                      Coast to Europe (ACE) system which lists Libreville as a landing
                      point; terrestrial backhaul connects landing sites to urban
                      PoPs and enterprise customers.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Gabon"
                          src="https://www.google.com/maps?q=Gabon&output=embed"
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
                        <li>Léon-Mba International Airport (LBV) — Libreville; primary international gateway.</li>
                        <li>Port-Gentil Airport (POG) — key for the oil & industrial hub.</li>
                        <li>Franceville, Oyem and Lambaréné — regional airports serving interior zones.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        The market is mobile-first in consumer segments, with fixed
                        broadband and enterprise DIA services concentrated around
                        major urban and industrial centres. Satellite and microwave
                        solutions fill connectivity gaps in remote interior regions.
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
                              <td className="py-3 px-4">≈ 2.5–2.6 million</td>
                              <td className="py-3 px-4">A small, low-density market concentrated in coastal cities.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Mobile-first; limited fixed broadband outside cities</td>
                              <td className="py-3 px-4">Operators and regional partners provide most consumer and enterprise access.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Central African CFA franc (XAF)</td>
                              <td className="py-3 px-4">Part of the BEAC currency union.</td>
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
                  Gabon's coastal location on the Gulf of Guinea provides landing
                  points for Atlantic submarine systems (for example ACE lists
                  Libreville as a landing point). These systems plus regional
                  terrestrial backhaul provide international capacity for ISPs and
                  enterprise customers.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/gabon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Gabon.png"
                      alt="Submarine cables serving Gabon"
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
                  The retail market is relatively small and often dominated by a few national
                  and regional operators. Wholesale and enterprise connectivity relies
                  on landing station access, regional transit partners and local fibre.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Libreville and Port-Gentil",
                    "DIA / IP transit via Atlantic PoPs and regional partners",
                    "Hybrid last-mile (4G + fixed-wireless) for sites without fibre",
                    "CPE / Router staging, configuration and ongoing management",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards Atlantic PoPs for optimal routing",
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
              We support connectivity planning around Libreville, Port-Gentil and other feasible sites subject to landing station access and local logistics.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Gabon%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.worldometers.info/world-population/gabon-population/" target="_blank" rel="noopener noreferrer" className="underline">Worldometers — Population estimates (2025)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Gabon" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Gabon (overview)</a></li>
              <li><a href="https://www.submarinecablemap.com/country/gabon" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — Gabon</a></li>
              <li><a href="https://en.wikipedia.org/wiki/L%C3%A9on-Mba_International_Airport" target="_blank" rel="noopener noreferrer" className="underline">Léon-Mba International Airport — details</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Gabon;
