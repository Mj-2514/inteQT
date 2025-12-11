import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Eritrea: React.FC = () => {
    <Helmet>
        <title>Internet in Eritrea | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Eritrea's internet connectivity, terrestrial links, ISPs, broadband statistics and inte-QT service capabilities in Asmara, Massawa and other key centres."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/eritrea" />
      </Helmet>
  return (
    <>
      

      <Navbar />

      {/* HERO */}
      <section className="relative py-28 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // swap with your own Asmara / Red Sea coastline screenshot
            backgroundImage: 'url("https://images.unsplash.com/photo-1629633127060-b6286afe8b90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXJpdHJlYXxlbnwwfDB8MHx8fDI%3D")',
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
            Internet in Eritrea
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A Red Sea nation with highland and coastal zones; connectivity is
            concentrated around Asmara and the Red Sea ports with a domestic
            market that relies heavily on state operators, mobile networks and
            satellite/backhaul links.
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
                        <strong>Official Name:</strong> State of Eritrea
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 3.6 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Asmara (capital), Massawa (port), Keren, Assab.
                      </li>
                      <li>
                        <strong>Languages:</strong> Tigrinya, Tigre, Arabic; English widely used as a working language.
                      </li>
                      <li>
                        <strong>Currency:</strong> Eritrean nakfa (ERN)
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/er.png"
                        alt="Eritrea Flag"
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
                      Eritrea occupies a strategic position on the Red Sea with
                      highlands centred on Asmara and lowland ports such as
                      Massawa and Assab. The telecommunications sector is
                      comparatively small and historically tightly regulated;
                      state-linked operators and the national telecom provider play
                      an outsized role in wholesale and retail connectivity.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Consumer access is largely mobile-first with fixed broadband
                      penetration limited. International capacity has been
                      constrained by the absence of a domestic submarine cable
                      landing, making Eritrea more dependent on regional and
                      satellite/backhaul arrangements for international transit.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Eritrea"
                          src="https://www.google.com/maps?q=Eritrea&output=embed"
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
                        <li>Asmara International Airport (ASM) — primary international gateway.</li>
                        <li>Massawa International Airport — key Red Sea port airport (services vary).</li>
                        <li>Assab Airport — gateway for the south and port facilities.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Eritrea does not host a major international submarine cable
                        landing as of current public mappings; international
                        connectivity therefore relies on neighbouring country
                        transit, microwave links and satellite systems. Mobile
                        networks provide the majority of consumer access, while
                        limited fixed-line and enterprise services exist through
                        national carriers.
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
                              <td className="py-3 px-4">≈ 3.6 million</td>
                              <td className="py-3 px-4">Small market with urban concentration in Asmara.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Mobile-first; limited fixed broadband</td>
                              <td className="py-3 px-4">Most consumer access via mobile data and satellite/backhaul.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Eritrean nakfa (ERN)</td>
                              <td className="py-3 px-4">Local currency issued by the Bank of Eritrea.</td>
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
                  Eritrea's Red Sea coastline gives it strategic proximity to undersea
                  networks, but public mappings show no active submarine cable
                  landings directly in Eritrea; regional hubs (Djibouti, Sudan,
                  Yemen) and satellite/backhaul links provide the main
                  international transit options.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/djibouti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Eritrea.png"
                      alt="Submarine cables and international routes serving Eritrea (regional view)"
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
                  The market is small and historically dominated by state-linked
                  operators such as EriTel and Eritel, which provide a mix of
                  mobile, fixed and VSAT services. Enterprise connectivity is
                  typically arranged through national carriers and occasional
                  regional partners.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Asmara and Massawa",
                    "DIA / IP transit options via regional hubs and partner PoPs",
                    "Hybrid last-mile (4G/LTE + fixed-wireless) for sites without fibre",
                    "CPE / Router staging, configuration and ongoing management",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards nearby regional hubs for latency-sensitive paths",
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
              We support connectivity planning around Asmara, Massawa and other feasible sites subject to local infrastructure and regulatory constraints.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Eritrea%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li><a href="https://www.worldometers.info/world-population/eritrea-population/" target="_blank" rel="noopener noreferrer" className="underline">Worldometers — Population estimates (2025)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Eritrea" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Eritrea (overview)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Asmara_International_Airport" target="_blank" rel="noopener noreferrer" className="underline">Asmara International Airport — details</a></li>
              <li><a href="https://www.submarinecablemap.com/" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — regional cable overview</a></li>
              <li><a href="https://eritel.com.er/" target="_blank" rel="noopener noreferrer" className="underline">Eritel — local ISP / services (corporate site)</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Eritrea;