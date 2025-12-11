import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Estonia: React.FC = () => {
    <Helmet>
        <title>Internet in Estonia | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Estonia's internet connectivity, submarine/terrestrial routes, ISPs, broadband statistics and inte-QT service capabilities in Tallinn, Tartu and other key centres."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/europe/estonia" />
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
            // swap with your own Tallinn skyline / coastline screenshot
            backgroundImage: 'url("https://images.unsplash.com/photo-1564951537954-29dd59397b90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXN0b25pYXxlbnwwfDB8MHx8fDI%3D")',
          }}
        />

        <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Estonia
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A digitally advanced Baltic nation with strong international fibre
            links across the Baltic Sea; Estonia is a regional leader in
            e-government, broadband adoption and cloud-first public services.
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
                        <strong>Official Name:</strong> Republic of Estonia
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 1.37 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Tallinn (capital), Tartu, Narva, Pärnu.
                      </li>
                      <li>
                        <strong>Languages:</strong> Estonian (official); Russian and English widely used.
                      </li>
                      <li>
                        <strong>Currency:</strong> Euro (EUR)
                      </li>
                      <li>
                        <strong>Neighbours:</strong> Latvia (south), Russia (east); maritime border with Finland across the Gulf of Finland.
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/ee.png"
                        alt="Estonia Flag"
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
                      Estonia is one of Europe’s most digitally connected
                      economies. Since independence the country has invested
                      heavily in national broadband, e-government platforms and
                      secure digital ID systems — factors that support high
                      internet adoption and advanced public services.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      International capacity is provided by multiple Baltic and
                      Nordic submarine cables and terrestrial links to Finland and
                      Latvia, together with modern datacentre connectivity in
                      Tallinn and other hubs.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Estonia"
                          src="https://www.google.com/maps?q=Estonia&output=embed"
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
                        <li>Lennart Meri Tallinn Airport (TLL) — international gateway.</li>
                        <li>Tartu Airport (TAY) — regional and seasonal services.</li>
                        <li>Pärnu / Kuressaare — smaller regional airports serving domestic & seasonal routes.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Broadband penetration is high by regional standards. The
                        country benefits from multiple submarine cable landings
                        and cross-Baltic connectivity (including EE–S links and
                        other Baltic Sea systems), low-latency paths to Nordic
                        networks and extensive fibre infrastructure within urban
                        areas.
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
                              <td className="py-3 px-4">≈ 1.37 million</td>
                              <td className="py-3 px-4">High urban concentration in Tallinn and Tartu.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">High broadband & mobile adoption</td>
                              <td className="py-3 px-4">Strong e-government platforms, digital ID and widespread fibre.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Euro (EUR)</td>
                              <td className="py-3 px-4">Member of the Eurozone since 2011.</td>
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
                  Estonia is connected into Baltic and Nordic undersea networks with
                  landing points in Tallinn and nearby islands. These links, plus
                  terrestrial cross-border fibre to Finland and Latvia, provide
                  resilient international transit for datacentres and enterprise
                  networks.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/estonia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Estonia.png"
                      alt="Submarine cables and international routes serving Estonia"
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
                  A competitive retail market with well-established carriers and
                  regional operator presence supports consumer and enterprise
                  connectivity. Tallinn serves as the primary hub for datacentre
                  services, peering and international transit.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Tallinn and Tartu",
                    "DIA / IP transit options via multiple Baltic and Nordic PoPs",
                    "FTTx and fixed-wireless solutions for secondary towns",
                    "CPE / Router staging, configuration and ongoing management",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering to Nordic hubs for low-latency paths",
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
              We support connectivity planning around Tallinn, Tartu and other feasible sites subject to local infrastructure and regulatory constraints.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Estonia%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.stat.ee/" target="_blank" rel="noopener noreferrer" className="underline">Statistics Estonia — population and demographics</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Estonia" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Estonia (overview)</a></li>
              <li><a href="https://www.submarinecablemap.com/landing-point/tallinn-estonia" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — Tallinn landing point</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Lennart_Meri_Tallinn_Airport" target="_blank" rel="noopener noreferrer" className="underline">Lennart Meri Tallinn Airport — details</a></li>
              <li><a href="https://flagcdn.com/" target="_blank" rel="noopener noreferrer" className="underline">Flag CDN — country flag images</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Estonia;
