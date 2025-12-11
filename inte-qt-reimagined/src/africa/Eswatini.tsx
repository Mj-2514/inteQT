import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Eswatini: React.FC = () => {
    <Helmet>
        <title>Internet in Eswatini | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Eswatini's internet connectivity, terrestrial routes, ISPs, broadband market and inte-QT service capabilities in Mbabane, Manzini and other key centres."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/eswatini" />
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
              'url("https://images.unsplash.com/photo-1652478412675-7cc39050f2f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXN3YXRpbml8ZW58MHwwfDB8fHwy")',
          }}
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Eswatini
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A landlocked Southern African kingdom with connectivity influenced by
            cross-border fibre routes through South Africa and Mozambique;
            broadband adoption is growing with 4G/5G and metro fibre expansion.
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
                        <strong>Official Name:</strong> Kingdom of Eswatini
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 1.2 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital Cities:</strong> Mbabane (administrative), Lobamba (legislative & royal).
                      </li>
                      <li>
                        <strong>Main Cities:</strong> Mbabane, Manzini, Matsapha.
                      </li>
                      <li>
                        <strong>Languages:</strong> Siswati (official), English (official working language).
                      </li>
                      <li>
                        <strong>Currency:</strong> Lilangeni (SZL) — pegged 1:1 to South African Rand.
                      </li>
                      <li>
                        <strong>Neighbours:</strong> South Africa (north, west, south), Mozambique (east).
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/sz.png"
                        alt="Eswatini Flag"
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
                      Eswatini is a compact, landlocked nation whose telecom
                      ecosystem is closely tied to neighbouring South Africa and
                      Mozambique. International capacity largely enters through
                      cross-border terrestrial fibre routes, complemented by
                      mobile broadband and enterprise wireless links.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Broadband availability is steadily increasing, with metro
                      fibre investments in Mbabane, Manzini and Matsapha. Mobile
                      networks (4G, emerging 5G) handle most consumer traffic,
                      while enterprise services rely on leased lines and regional
                      upstream providers.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Eswatini"
                          src="https://www.google.com/maps?q=Eswatini&output=embed"
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
                        <li>King Mswati III International Airport (SHO) — primary international airport.</li>
                        <li>Matsapha Airport — now mostly cargo/general aviation.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Eswatini does not have a submarine coastline, making
                        terrestrial cross-border fibre essential. Major operators
                        interconnect through South African and Mozambican transit,
                        while VSAT remains an option for remote enterprise sites.
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
                              <td className="py-3 px-4">≈ 1.2 million</td>
                              <td className="py-3 px-4">Growth concentrated around central corridor.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Mobile-first; improving fibre footprint</td>
                              <td className="py-3 px-4">4G common; 5G pilots; FTTH in select areas.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Lilangeni (SZL)</td>
                              <td className="py-3 px-4">Pegged to South African Rand (ZAR).</td>
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
                <h2 className="text-3xl font-bold mb-4">International Routes & Transit</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  As a landlocked country, Eswatini depends heavily on cross-border
                  fibre routes into South Africa and Mozambique. These paths
                  provide access to regional submarine cables (EASSy, SEACOM,
                  WACS, SAFE, etc.) via interconnected PoPs in neighbouring
                  countries.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/south-africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Eswatini.png"
                      alt="Regional transit and fibre routes serving Eswatini"
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
                  The market includes MTN Eswatini, eSwatini Posts and Telecoms,
                  and regional fibre partners. Mobile broadband dominates, while
                  enterprise customers rely on MPLS, DIA and wireless last-mile
                  solutions.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Enterprise connectivity feasibility in Mbabane, Manzini and Matsapha",
                    "DIA / IP transit via regional PoPs in South Africa and Mozambique",
                    "4G/5G + fixed-wireless hybrid solutions for last-mile gaps",
                    "CPE / Router staging, configuration and managed services",
                    "SLA-backed service with NOC monitoring and regional escalation",
                    "Traffic engineering via SA coastal PoPs for latency improvements",
                    "Security services (VPN, firewalling, DDoS mitigation)",
                    "SD-WAN overlays for multi-branch deployments"
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
              We support connectivity planning around Mbabane, Manzini and other feasible sites subject to regional fibre and regulatory conditions.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Eswatini%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.worldometers.info/world-population/eswatini-population/" target="_blank" rel="noopener noreferrer" className="underline">Worldometers — Population estimates (2025)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Eswatini" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Eswatini (overview)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/King_Mswati_III_International_Airport" target="_blank" rel="noopener noreferrer" className="underline">King Mswati III International Airport — details</a></li>
              <li><a href="https://www.submarinecablemap.com/" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable lines</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Eswatini;