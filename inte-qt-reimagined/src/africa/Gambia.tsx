import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Gambia: React.FC = () => {
    <Helmet>
        <title>Internet in The Gambia | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of The Gambia's internet connectivity, submarine cable access, ISPs, broadband landscape and inte-QT capabilities in Banjul, Serrekunda and other key hubs."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/gambia" />
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
              'url("https://images.unsplash.com/photo-1621862681356-eda413727d27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtYmlhfGVufDB8MHwwfHx8Mg%3D%3D")',
          }}
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in The Gambia
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A small West African nation with Atlantic submarine cable access,
            growing 4G coverage, and connectivity centred around Banjul and
            Serrekunda.
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
                        <strong>Official Name:</strong> Republic of The Gambia
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 2.8–2.9 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital & Main Cities:</strong> Banjul (capital), Serrekunda, Brikama, Bakau.
                      </li>
                      <li>
                        <strong>Languages:</strong> English (official); Mandinka, Wolof, Fula widely spoken.
                      </li>
                      <li>
                        <strong>Currency:</strong> Gambian dalasi (GMD)
                      </li>
                      <li>
                        <strong>Neighbours:</strong> Surrounded by Senegal except its Atlantic coast.
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/gm.png"
                        alt="Gambia Flag"
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
                      The Gambia is a narrow West African nation centred along the
                      Gambia River, with connectivity heavily focused on its Atlantic
                      urban belt. Mobile broadband dominates consumer access, with 4G
                      widely adopted and new backbone infrastructure improving resilience.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      International capacity is achieved mainly through the Africa
                      Coast to Europe (ACE) submarine cable landing near Banjul,
                      supported by terrestrial backhaul towards major population
                      centres.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of The Gambia"
                          src="https://www.google.com/maps?q=The%20Gambia&output=embed"
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
                        <li>Banjul International Airport (BJL) — main international gateway.</li>
                        <li>Minor regional airstrips support domestic and NGO operations.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        A mobile-first market with limited fixed broadband outside
                        dense urban zones. Operators rely on ACE cable for
                        international bandwidth while microwave and fibre projects
                        extend capacity inland.
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
                              <td className="py-3 px-4">≈ 2.8–2.9 million</td>
                              <td className="py-3 px-4">Urban concentration in Banjul–Serrekunda corridor.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Mobile-first; growing 4G availability</td>
                              <td className="py-3 px-4">ACE submarine cable supports most international traffic.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Gambian dalasi (GMD)</td>
                              <td className="py-3 px-4">Issued by the Central Bank of The Gambia.</td>
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
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & Regional Links</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  The Gambia benefits from a landing of the Africa Coast to Europe (ACE) submarine cable,
                  which provides international connectivity to Europe and regional aggregation points.
                  Terrestrial links then distribute capacity into Banjul, Serrekunda and inland towns.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/gambia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Gambia.png"
                      alt="Submarine cables serving The Gambia"
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
                  The retail market is served by operators such as Gamtel, Africell and QCell.
                  Mobile broadband is the dominant access method; fixed broadband and enterprise services
                  are usually concentrated in urban and commercial centres.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Banjul and Serrekunda",
                    "DIA / IP transit via Atlantic PoPs and regional partners",
                    "Hybrid last-mile (4G + fixed-wireless) for sites without fibre",
                    "CPE / Router staging, configuration and ongoing management",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards Atlantic PoPs for optimal routing",
                    "Security services (VPN, firewalling, DDoS mitigation) for enterprise workloads",
                    "Regional SD-WAN overlay designs for multi-site deployments",
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
              We support connectivity planning around Banjul, Serrekunda and other feasible sites subject to landing station access and local logistics.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Gambia%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://www.worldometers.info/world-population/gambia-population/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Worldometers — Population estimates (2025)
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/The_Gambia" target="_blank" rel="noopener noreferrer" className="underline">
                  Wikipedia — The Gambia (overview)
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinecablemap.com/country/gambia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Cable Map — The Gambia
                </a>
              </li>
              <li>
                <a href="https://www.gamtel.gm/" target="_blank" rel="noopener noreferrer" className="underline">
                  Gamtel — operator
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Gambia;
