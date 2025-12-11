import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Iceland: React.FC = () => {
    <Helmet>
        <title>Internet in Iceland | Connectivity, ISPs & Subsea Overview</title>
        <meta
          name="description"
          content="Overview of Iceland's internet connectivity, submarine & terrestrial routes, ISPs, broadband adoption and inte-QT capabilities in Reykjavík, Akureyri and other key centres."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/europe/iceland" />
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
              'url("https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWNlbGFuZHxlbnwwfDB8MHx8fDI%3D")',
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
            Internet in Iceland
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A sparsely populated North Atlantic island with a highly digitalised, resilient network footprint. Reykjavik is the main connectivity and datacentre hub, with multiple submarine links to Europe providing international capacity and redundancy.
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
                        <strong>Official Name:</strong> Republic of Iceland (Lýðveldið Ísland)
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 380,000–400,000 (2025 est.)
                      </li>
                      <li>
                        <strong>Capital & Main Cities:</strong> Reykjavík (capital), Kópavogur, Hafnarfjörður, Akureyri, Reykjanesbær
                      </li>
                      <li>
                        <strong>Languages:</strong> Icelandic (official); English and Nordic languages widely spoken
                      </li>
                      <li>
                        <strong>Currency:</strong> Icelandic króna (ISK)
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/is.png"
                        alt="Iceland Flag"
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
                      Iceland is widely connected internally with high broadband penetration and strong mobile coverage. The country's geographic position in the North Atlantic and progressive national policies have attracted datacentre investment and ensured robust international connectivity through multiple submarine cables and terrestrial extensions.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Reykjavik serves as the principal hub for peering, datacentres and enterprise services. Due to the island topology, undersea systems and reliable terrestrial backhaul are central to national resilience and redundancy strategies.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Iceland"
                          src="https://www.google.com/maps?q=Iceland&output=embed"
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
                        <li>Keflavík International Airport (KEF) — primary international gateway</li>
                        <li>Reykjavík Domestic Airport (RKV) — domestic services and regional flights</li>
                        <li>Akureyri Airport (AEY), Egilsstaðir (EGS), Ísafjörður (IFJ) — regional airports</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Iceland's international capacity is provided by several submarine systems (FARICE-1, DANICE, IRIS and Greenland Connect among regional links) that connect the country to the UK, Ireland, Denmark and Greenland. National backbone fibre and metro rings distribute capacity from landing stations to Reykjavik and regional centres. Mobile networks and fixed broadband provide high coverage and quality across populated regions.
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
                              <td className="py-3 px-4">≈ 380k–400k</td>
                              <td className="py-3 px-4">Low density; population concentrated in the Capital Region.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">High broadband penetration; strong mobile networks</td>
                              <td className="py-3 px-4">Significant datacentre presence due to cool climate and renewable energy.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Icelandic króna (ISK)</td>
                              <td className="py-3 px-4">Issued by the Central Bank of Iceland.</td>
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
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & International Routes</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Iceland's international connectivity is anchored by FARICE-1 and DANICE and has been significantly strengthened by the newer IRIS system and additional regional links such as Greenland Connect. These systems provide low-latency paths into the UK, Ireland, Denmark and onward to European and North American hubs.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/iceland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Iceland.png"
                      alt="Submarine cables serving Iceland"
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
                  Major operators include Síminn (national incumbent), Vodafone Iceland, Nova and various local ISPs. The market is mature with strong retail broadband options and enterprise-focused connectivity services, leveraging Iceland's datacentre ecosystem and renewable-energy-backed power.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Reykjavík, Akureyri and regional centres",
                    "DIA / IP transit via FARICE, DANICE, IRIS and regional PoPs",
                    "FTTx, metro and fixed-wireless last-mile solutions",
                    "CPE / Router staging, configuration and managed services",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards London/Dublin/Denmark PoPs",
                    "Security services (VPN, firewalling, DDoS mitigation) for enterprise workloads",
                    "Datacentre connectivity and hybrid cloud on-ramps"
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
              We support connectivity planning across Reykjavík, Akureyri and other feasible sites subject to landing station access and national logistics.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-qt.com?subject=Iceland%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.worldometers.info/world-population/iceland-population/" target="_blank" rel="noopener noreferrer" className="underline">Worldometers — Population (2025)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Iceland" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Iceland (overview)</a></li>
              <li><a href="https://farice.is/" target="_blank" rel="noopener noreferrer" className="underline">Farice — FARICE & DANICE network</a></li>
              <li><a href="https://www.submarinecablemap.com/" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Iceland;
