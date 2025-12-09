import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Cuba: React.FC = () => {
    <Helmet>
        <title>
          Internet in Cuba | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of Cuba's internet connectivity, submarine and terrestrial routes, telecom operators, broadband statistics and inte-QT service capabilities in Havana, Santiago de Cuba and other key cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/north-america/cuba"
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
            // 🔁 swap this with your own Havana / island screenshot
            backgroundImage: 'url("https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3ViYXxlbnwwfHwwfHx8Mg%3D%3D")',
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
            Internet in Cuba
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A large Caribbean island where connectivity is shaped by a single
            state operator, selective fibre rollout, mobile data growth and a
            small number of international cable routes.
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
                        <strong>Population:</strong> ~11.1 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Havana
                        (capital), Santiago de Cuba, Camagüey, Holguín, Santa
                        Clara, Cienfuegos
                      </li>
                      <li>
                        <strong>Region:</strong> Caribbean; closest neighbours
                        include USA (Florida), Mexico, Bahamas, Jamaica, Haiti
                        (by sea)
                      </li>
                      <li>
                        <strong>Languages:</strong> Spanish (official); limited
                        English in tourism
                      </li>
                      <li>
                        <strong>Currency:</strong> Cuban peso (CUP)
                      </li>
                      <li>
                        <strong>Political / Economic:</strong> Socialist system
                        with a state monopoly over telecoms (ETECSA)
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/cu.png"
                        alt="Cuba Flag"
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
                    <h2 className="text-3xl font-bold mb-4">
                      A Brief Overview
                    </h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Cuba stretches over 1,200 km across the northern Caribbean
                      between the Gulf of Mexico, the Straits of Florida and
                      the Windward Passage. Havana is the political and
                      economic centre on the northwest coast, while Santiago de
                      Cuba and other provincial capitals anchor the eastern and
                      central regions.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Telecoms and internet are dominated by the state-owned
                      operator ETECSA. For many years, access was restricted to
                      government entities, hotels and a small number of public
                      points; more recently, mobile data, home fixed services
                      (NAUTA Hogar) and public Wi-Fi hotspots have expanded
                      reach. Coverage and speeds are still uneven, with pricing
                      high relative to incomes and access subject to regulatory
                      controls. International capacity relies on the ALBA-1
                      submarine cable and a small number of regional links.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Cuba"
                          src="https://www.google.com/maps?q=Cuba&output=embed"
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
                        <li>
                          José Martí International Airport (HAV) — main gateway
                          for Havana
                        </li>
                        <li>
                          Juan Gualberto Gómez Airport (VRA) — Varadero / Matanzas
                          tourism zone
                        </li>
                        <li>
                          Antonio Maceo Airport (SCU) — serving Santiago de Cuba
                        </li>
                        <li>
                          Ignacio Agramonte Airport (CMW) — Camagüey region
                        </li>
                        <li>
                          Frank País Airport (HOG) — Holguín and eastern resorts
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Connectivity Overview
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Compared with most of Latin America and the Caribbean,
                        Cuba&apos;s internet penetration is still relatively low,
                        although it has grown quickly in the last decade. 3G and
                        expanding 4G/LTE networks provide mobile data
                        nationwide, but many users still rely on time-limited
                        packages and public Wi-Fi zones. Fixed broadband via
                        xDSL and limited fibre is available in parts of Havana
                        and select provincial cities under the NAUTA Hogar
                        program, focusing on government, enterprises and higher
                        income households.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Type
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Users / Lines
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Penetration
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Internet Users (mid-2020s est.)
                              </td>
                              <td className="py-3 px-4">
                                ≈ 7.0–7.5 million
                              </td>
                              <td className="py-3 px-4">
                                ~63–68% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">
                                ≈ 7.5–8.0 million SIMs
                              </td>
                              <td className="py-3 px-4">
                                ~70–75% (close to one line per inhabitant)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Identities
                              </td>
                              <td className="py-3 px-4">
                                ≈ 6.0–6.5 million accounts
                              </td>
                              <td className="py-3 px-4">
                                ~55–60% (primarily mobile)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband (2024 est.)
                              </td>
                              <td className="py-3 px-4">
                                &lt; 300k–350k lines (DSL / fibre / cable)
                              </td>
                              <td className="py-3 px-4">
                                ~2.5–3 per 100 inhabitants
                              </td>
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

        {/* Submarine Cables & Backbone */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine Cables & International Routes
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Cuba&apos;s primary international route is the ALBA-1
                  submarine cable linking Venezuela, Jamaica and Cuba, with
                  landings near Siboney (close to Santiago de Cuba). Additional
                  regional systems and microwave links to neighbouring islands
                  provide some redundancy, but overall diversity is limited
                  compared with other Caribbean markets. Inside the island,
                  traffic moves over a core fibre backbone connecting Havana
                  with provincial capitals, supplemented by microwave where
                  terrain or cost make fibre more difficult.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Replace href/src with your own submarine-cable screenshot */}
                  <a
                    href="https://www.submarinecablemap.com/country/cuba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Cuba.png"
                      alt="Submarine cables and international routes serving Cuba"
                      className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* ISPs */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Unlike most markets, Cuba has a single integrated provider:
                  ETECSA (Empresa de Telecomunicaciones de Cuba S.A.). It
                  controls all fixed and mobile infrastructure, wholesale and
                  retail. Internet access is provided via NAUTA accounts for
                  public Wi-Fi, home broadband and mobile data, with tariffs and
                  usage defined by the state. There is no formal competitive ISP
                  market, although some institutions operate private networks
                  and closed intranets.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Advisory on connectivity feasibility for projects in Havana and major provincial cities",
                    "Enterprise connectivity via locally compliant partnerships where available",
                    "Hybrid solutions combining local access with out-of-country hosting and security",
                    "SLA discussion and monitoring frameworks aligned with local operational constraints",
                    "CPE / Router configuration and optimisation for constrained-bandwidth environments",
                    "Overlay VPNs and SD-WAN to optimise application performance over limited links",
                    "Traffic engineering towards primary ALBA-1 and regional paths where possible",
                    "Security services, including VPN, access control and traffic inspection at the edge",
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
              Contact us to discuss{" "}
              <mark className="bg-yellow-200 px-1 rounded">
                feasibility and commercial options
              </mark>{" "}
              for projects in Cuba. Service design is highly dependent on local
              regulation, ETECSA arrangements and site-specific conditions.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Cuba%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Internet_in_Cuba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Internet in Cuba
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/ETECSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — ETECSA
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinecablemap.com/submarine-cable/alba-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Cable Map — ALBA-1
                </a>
              </li>
              <li>
                <a
                  href="https://www.worldatlas.com/maps/cuba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  WorldAtlas — Cuba Maps &amp; Facts
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

export default Cuba;
