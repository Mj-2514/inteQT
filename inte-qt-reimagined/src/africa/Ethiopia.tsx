import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Ethiopia: React.FC = () => {
    <Helmet>
        <title>Internet in Ethiopia | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Ethiopia's internet connectivity, terrestrial and regional submarine routes, ISPs, broadband statistics and inte-QT service capabilities in Addis Ababa, Dire Dawa and other key centres."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/ethiopia" />
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
            // swap with your own Addis Ababa skyline or Ethiopian highlands image
            backgroundImage: 'url("https://images.unsplash.com/photo-1572888195250-3037a59d3578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXRoaW9waWF8ZW58MHwwfDB8fHwy")',
          }}
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Ethiopia
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A populous Horn of Africa country with rapidly evolving telecoms;
            Ethiopia combines a large domestic market, major aviation hub in
            Addis Ababa and growing competition following recent liberalisation.
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
                        <strong>Official Name:</strong> Federal Democratic Republic of Ethiopia
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 135–137 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Addis Ababa (capital &amp; aviation hub), Dire Dawa, Mekelle, Bahir Dar, Gondar.
                      </li>
                      <li>
                        <strong>Languages:</strong> Amharic (widely used federal working language), Oromo, Somali, Tigrinya; English commonly used in higher education and business.
                      </li>
                      <li>
                        <strong>Currency:</strong> Ethiopian birr (ETB)
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/et.png"
                        alt="Ethiopia Flag"
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
                      Ethiopia is one of Africa's largest markets by population and
                      has undergone significant telecom reforms since 2021. The
                      incumbent, Ethio Telecom, remains a major operator but new
                      entrants (including Safaricom Ethiopia) are expanding mobile
                      coverage and introducing competition for the first time in
                      decades.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      International connectivity relies on terrestrial fibre to
                      Djibouti (the principal landing point for undersea cables),
                      supplemented by satellite and cross-border links. Addis
                      Ababa serves as a key regional PoP and datacentre hub.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Ethiopia"
                          src="https://www.google.com/maps?q=Ethiopia&output=embed"
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
                        <li>Addis Ababa Bole International Airport (ADD) — major African aviation hub via Ethiopian Airlines.</li>
                        <li>Dire Dawa Airport — important regional airport.</li>
                        <li>Bahir Dar, Mekelle and Gondar — regional airports serving northern and western zones.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Ethiopia's international capacity primarily transits via
                        Djibouti landing stations which host multiple submarine
                        cables. Domestically, fibre backhaul connects major cities,
                        while mobile broadband (4G and expanding LTE/5G pilots)
                        provides most consumer access.
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
                              <td className="py-3 px-4">≈ 135–137 million</td>
                              <td className="py-3 px-4">Large and young population with increasing urbanisation.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Rapidly growing mobile subscribers; fixed broadband limited</td>
                              <td className="py-3 px-4">New market entrants are expanding coverage and services.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Ethiopian birr (ETB)</td>
                              <td className="py-3 px-4">Managed by the National Bank of Ethiopia; floated in 2024 as part of FX reforms.</td>
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
                  Ethiopia accesses multiple submarine cable systems via terrestrial
                  links to Djibouti. These regional undersea networks (and their
                  PoPs in Djibouti) provide the bulk of international transit for
                  Ethiopian ISPs and enterprise customers.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/somalia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Ethiopia.png"
                      alt="Regional transit and submarine cable access for Ethiopia"
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
                  The telecom market is transitioning from monopoly to a competitive
                  landscape. Ethio Telecom remains the dominant national operator,
                  while new entrants such as Safaricom Ethiopia have introduced
                  mobile competition and expanded subscriber choice since 2022.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Addis Ababa and regional hubs",
                    "DIA / IP transit options via Djibouti PoPs and regional partners",
                    "Hybrid last-mile (4G/LTE + fixed-wireless) for sites without fibre",
                    "CPE / Router staging, configuration and ongoing management",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards Djibouti and Gulf PoPs for improved latency",
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
              We support connectivity planning around Addis Ababa, Dire Dawa and other feasible sites subject to regional transit and regulatory conditions.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Ethiopia%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.worldometers.info/world-population/ethiopia-population/" target="_blank" rel="noopener noreferrer" className="underline">Worldometers — Population estimates (2025)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Ethiopia" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Ethiopia (overview)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Addis_Ababa_Bole_International_Airport" target="_blank" rel="noopener noreferrer" className="underline">Addis Ababa Bole International Airport — details</a></li>
              <li><a href="https://www.submarinecablemap.com/" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — regional cable overview (via Djibouti)</a></li>
              <li><a href="https://www.ethiotelecom.et/" target="_blank" rel="noopener noreferrer" className="underline">Ethio Telecom — national operator</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Ethiopia;
