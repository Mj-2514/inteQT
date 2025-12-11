import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Honduras: React.FC = () => {
    <Helmet>
        <title>Internet in Honduras | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Honduras' internet connectivity, submarine and terrestrial routes, ISPs, broadband market and inte-QT capabilities across Tegucigalpa, San Pedro Sula, La Ceiba and other key centres."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/north-america/honduras" />
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
              'url("https://images.unsplash.com/photo-1579390497555-d5842e45e622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9uZHVyYXN8ZW58MHwwfDB8fHwy")',
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
            Internet in Honduras
          </motion.h1>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            Central American nation with growing fibre networks, strong mobile adoption and multiple submarine cable landings on the Caribbean coast supporting regional transit.
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
                        <strong>Official Name:</strong> Republic of Honduras
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 11 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital & Main Cities:</strong> Tegucigalpa (capital), San Pedro Sula, La Ceiba, Choloma, Comayagua
                      </li>
                      <li>
                        <strong>Languages:</strong> Spanish (official); Garífuna and indigenous languages spoken regionally
                      </li>
                      <li>
                        <strong>Currency:</strong> Honduran lempira (HNL)
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/hn.png"
                        alt="Honduras Flag"
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
                      Honduras is a Central American country with urban centres that drive most digital demand. San Pedro Sula and Tegucigalpa host the majority of enterprise and consumer traffic, supported by national fibre rings and mobile networks. The Caribbean coast — notably Puerto Cortés, Puerto Lempira and Trujillo — hosts submarine cable landings that provide international transit.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Mobile broadband is the main consumer access method, while FTTx and metro-fibre continue to expand in major cities. Regional submarine cables and terrestrial corridors provide multiple routing options into North and South American PoPs.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Honduras"
                          src="https://www.google.com/maps?q=Honduras&output=embed"
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
                        <li>Palmerola / Comayagua International Airport (XPL) — serves Tegucigalpa region (main international gateway since 2021)</li>
                        <li>Ramón Villeda Morales International Airport (SAP) — San Pedro Sula; major commercial gateway</li>
                        <li>Golosón International Airport (LCE) — La Ceiba; regional gateway</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Honduras is served by multiple submarine cable systems (including TAM-1 and ARCOS routes) that land on the northern Caribbean coast. National backbone projects distribute capacity from landing stations to inland PoPs; satellite and microwave provide reach to remote and mountainous areas.
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
                              <td className="py-3 px-4">≈ 11 million</td>
                              <td className="py-3 px-4">Growing urbanisation around Tegucigalpa and San Pedro Sula.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Mobile-first; expanding FTTx</td>
                              <td className="py-3 px-4">4G widely available; 5G pilots and fibre rollouts in progress.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Honduran lempira (HNL)</td>
                              <td className="py-3 px-4">Issued by the Central Bank of Honduras.</td>
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
                  Northern Honduras hosts landings for regional systems such as TAM-1 and ARCOS, with points including Puerto Cortés, Puerto Lempira and Trujillo. These undersea routes feed into regional aggregation points and onward international transit.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/honduras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Honduras.png"
                      alt="Submarine cables serving Honduras"
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
                  Major operators include Hondutel, Tigo Honduras, Claro (América Móvil) and Digicel. The market mixes mobile-first retail access with increasing enterprise demand for fibre, datacentre services and international transit.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Tegucigalpa and San Pedro Sula",
                    "DIA / IP transit via Puerto Cortés and regional PoPs",
                    "FTTx and fixed-wireless last-mile for metro and campus sites",
                    "CPE / Router staging, configuration and managed services",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards Miami and Central American PoPs",
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
              We support connectivity planning across Tegucigalpa, San Pedro Sula, La Ceiba and other feasible sites subject to local infrastructure and regulatory constraints.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-qt.com?subject=Honduras%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.worldometers.info/world-population/honduras-population/" target="_blank" rel="noopener noreferrer" className="underline">Worldometers — Population estimates (2025)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Honduras" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Honduras (overview)</a></li>
              <li><a href="https://www.submarinecablemap.com/country/honduras" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — Honduras</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Comayagua_International_Airport" target="_blank" rel="noopener noreferrer" className="underline">Palmerola / Comayagua International Airport — XPL</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Honduras;
