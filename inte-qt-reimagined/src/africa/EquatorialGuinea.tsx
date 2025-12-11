import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const EquatorialGuinea: React.FC = () => {
    <Helmet>
        <title>
          Internet in Equatorial Guinea | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Overview of Equatorial Guinea's internet connectivity, submarine/terrestrial routes, ISPs, broadband statistics and inte-QT service capabilities in Malabo, Bata, and other key centres."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/africa/equatorial-guinea"
        />
      </Helmet>
  return (
    <>
      

      <Navbar />

      {/* HERO */}
      <section
        className="relative py-28 overflow-hidden"
        aria-labelledby="hero-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // swap with your own Malabo / coastline screenshot
            backgroundImage: 'url("https://images.unsplash.com/photo-1700144068853-671567b77ea8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXF1YXRvcmlhbCUyMGd1aW5lYXxlbnwwfDB8MHx8fDI%3D")',
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
            Internet in Equatorial Guinea
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A small Gulf of Guinea state with island and mainland territories;
            connectivity centers on Malabo (Bioko Island) and Bata (mainland),
            with submarine and regional terrestrial links shaping international
            capacity.
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
                        <strong>Official Name:</strong> Republic of Equatorial Guinea
                      </li>
                      <li>
                        <strong>Population:</strong> ~1.9–2.0 million (2025 est.). 
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Malabo (seat on Bioko Island), Bata (largest on the mainland), plus Ebebiyín, Mongomo and Luba. 
                      </li>
                      <li>
                        <strong>Languages:</strong> Spanish (primary official), French and Portuguese are also official; many local languages (Fang, Bubi, etc.). 
                      </li>
                      <li>
                        <strong>Currency:</strong> Central African CFA franc (XAF). 
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/gq.png"
                        alt="Equatorial Guinea Flag"
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
                      Equatorial Guinea comprises a mainland region (Río Muni) plus
                      islands (Bioko, Annobón). The capital, Malabo, sits on Bioko
                      Island while Bata is the country’s principal commercial
                      centre on the mainland. The economy is dominated by oil and
                      gas production, which has driven infrastructure projects and
                      regional connectivity initiatives — though development is
                      uneven across rural areas.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Internet access is concentrated around Malabo and Bata; the
                      small domestic market relies on a mix of submarine cable
                      landings, limited national fibre and mobile broadband for
                      most residential users. Political and regulatory factors
                      affect market dynamics and wholesale transit arrangements.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Equatorial Guinea"
                          src="https://www.google.com/maps?q=Equatorial%20Guinea&output=embed"
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
                        <li>Malabo International Airport (SSG) — primary international gateway. </li>
                        <li>Bata Airport (BSG) — major mainland airport and second-largest. </li>
                        <li>Smaller airfields include Ebebiyín and regional strips.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        The country hosts landing stations for regional submarine
                        cables serving the Gulf of Guinea region; these links plus
                        limited terrestrial backhaul shape international capacity.
                        Because of the nation’s small market and political
                        structure, wholesale transit and colocation activity tends
                        to be concentrated and opportunistic around port and oil
                        infrastructure.
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
                              <td className="py-3 px-4">≈ 1.9–2.0 million</td>
                              <td className="py-3 px-4">Small market concentrated in a few urban centres. </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Mobile-first; fixed broadband limited</td>
                              <td className="py-3 px-4">Most consumer access via mobile data and urban fixed links.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Central African CFA franc (XAF)</td>
                              <td className="py-3 px-4">Common currency with regional BEAC members. </td>
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
                  Equatorial Guinea’s coastal position in the Gulf of Guinea makes it part of regional undersea networks. Landing stations and nearby hubs provide regional connectivity into West and Central Africa and onward international transit; national backbone links connect Malabo and Bata where possible, with additional reliance on satellite and microwave in remote areas.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/equatorial-guinea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Equatorial-Guinea.png"
                      alt="Submarine cables and international routes serving Equatorial Guinea"
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
                  The market is relatively small and often dominated by state-linked operators and companies that service oil & gas, government and port infrastructure. Retail mobile operators provide the bulk of consumer access while wholesale and transit arrangements are concentrated in a few hubs.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Malabo and Bata",
                    "DIA / IP transit options where landing station access and peering exist",
                    "Hybrid last-mile (4G/LTE + fixed-wireless) for sites without fibre",
                    "CPE / Router staging, configuration and ongoing management",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards nearby regional hubs for latency-sensitive paths",
                    "Security services (VPN, firewalling, DDoS mitigation) for enterprise workloads",
                    "Regional SD-WAN overlay designs for multi-island / multi-site deployments"
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
              Contact us to receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>.
              We support connectivity planning around Malabo, Bata and other feasible sites subject to local infrastructure and regulatory constraints.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Equatorial%20Guinea%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.worldometers.info/world-population/equatorial-guinea-population/" target="_blank" rel="noopener noreferrer" className="underline">Worldometers — Population estimates (2025)</a></li>
              <li><a href="https://www.cia.gov/the-world-factbook/countries/equatorial-guinea/" target="_blank" rel="noopener noreferrer" className="underline">CIA / GOV.UK factfile — country overview (administrative notes)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Equatorial_Guinea" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Equatorial Guinea (languages, demographics)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Malabo_International_Airport" target="_blank" rel="noopener noreferrer" className="underline">Malabo International Airport — details</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Bata_Airport" target="_blank" rel="noopener noreferrer" className="underline">Bata Airport — details</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EquatorialGuinea;
