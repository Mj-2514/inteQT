import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Ghana: React.FC = () => {
    <Helmet>
        <title>Internet in Ghana | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Ghana's internet connectivity, submarine cable landings, ISPs, broadband statistics and inte-QT service capabilities in Accra, Kumasi, Takoradi and other key centres."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/ghana" />
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1589104602532-9cee07f8f62c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2hhbmF8ZW58MHwwfDB8fHwy")',
          }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Ghana
          </motion.h1>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            One of West Africa's most advanced connectivity hubs, with multiple submarine cable landings,
            strong mobile broadband penetration and growing enterprise infrastructure.
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
                        <strong>Official Name:</strong> Republic of Ghana
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 34–35 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital & Main Cities:</strong> Accra (capital), Kumasi, Tamale, Takoradi
                      </li>
                      <li>
                        <strong>Languages:</strong> English (official); Akan, Ewe, Dagbani widely spoken
                      </li>
                      <li>
                        <strong>Currency:</strong> Ghanaian cedi (GHS)
                      </li>
                      <li>
                        <strong>Neighbours:</strong> Côte d’Ivoire, Burkina Faso, Togo; Gulf of Guinea coastline
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/gh.png"
                        alt="Ghana Flag"
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
                      Ghana is one of West Africa’s most connected economies. Accra and Tema host multiple
                      submarine cable landings, while mobile operators deliver widespread 4G and expanding 5G coverage.
                      Enterprise connectivity is supported by fibre corridors linking major commercial centres.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The country’s digital sector is strengthened by datacentres, national IXPs, and regional transit links
                      that connect Ghana to neighbouring states and global networks.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Ghana"
                          src="https://www.google.com/maps?q=Ghana&output=embed"
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
                        <li>Kotoka International Airport (ACC) — Accra; main international gateway.</li>
                        <li>Kumasi International Airport (KMS) — central regional hub.</li>
                        <li>Takoradi Airport (TKD) — industrial/oil service hub.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Ghana hosts several submarine cable landings including SAT-3, MainOne, WACS and ACE.
                        National fibre networks interconnect major cities, while 4G and expanding 5G deployments serve most population centres.
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
                              <td className="py-3 px-4">≈ 34–35 million</td>
                              <td className="py-3 px-4">Fast-growing population with strong urban concentration.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">High mobile broadband adoption</td>
                              <td className="py-3 px-4">4G widespread; 5G rollout progressing in urban centres.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Ghanaian cedi (GHS)</td>
                              <td className="py-3 px-4">Issued by the Bank of Ghana.</td>
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
                  Ghana is served by multiple submarine cable systems (SAT-3, MainOne, WACS, ACE) that land near Accra and Tema,
                  providing international transit and regional aggregation. These undersea systems, combined with national fibre,
                  form the backbone of Ghana's international connectivity.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/ghana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Ghana.png"
                      alt="Submarine cables serving Ghana"
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
                  Major operators include MTN Ghana, Vodafone Ghana, AirtelTigo and local ISPs and infrastructure providers such as CSquared and MainOne.
                  The market features mobile-first retail access, growing fixed broadband and enterprise services available via national fibre and subsea transit.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Accra, Kumasi and Takoradi",
                    "DIA / IP transit via regional PoPs and submarine cable gateways",
                    "FTTx and fixed-wireless solutions for regional and campus sites",
                    "CPE / Router staging, configuration and managed services",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards Accra/Tema PoPs for optimized routing",
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
              We support connectivity planning across Ghana's major hubs subject to submarine cable availability and local logistics.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Ghana%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a href="https://www.worldometers.info/world-population/ghana-population/" target="_blank" rel="noopener noreferrer" className="underline">
                  Worldometers — Population estimates (2025)
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Ghana" target="_blank" rel="noopener noreferrer" className="underline">
                  Wikipedia — Ghana (overview)
                </a>
              </li>
              <li>
                <a href="https://www.submarinecablemap.com/country/ghana" target="_blank" rel="noopener noreferrer" className="underline">
                  Submarine Cable Map — Ghana
                </a>
              </li>
              <li>
                <a href="https://www.mtn.com.gh/" target="_blank" rel="noopener noreferrer" className="underline">
                  MTN Ghana — operator
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

export default Ghana;
