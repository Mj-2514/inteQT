import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Congo: React.FC = () => {
    <Helmet>
        <title>
          Internet in Congo (Republic of the Congo) | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of the Republic of the Congo's internet connectivity, submarine and terrestrial fibre routes, telecom operators, broadband statistics and inte-QT service capabilities in Brazzaville, Pointe-Noire and other key cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/africa/congo"
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
            // 🔁 swap this with your own Brazzaville / Pointe-Noire screenshot
            backgroundImage:
              'url("https://images.unsplash.com/photo-1627041025700-63dce5cb092b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZ298ZW58MHx8MHx8fDI%3D")',
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
            Internet in Congo
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A Central African oil and forestry economy where connectivity runs
            along the Congo River and road corridors, with mobile networks and
            coastal cable landings linking Brazzaville and Pointe-Noire to the
            global internet.
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
                        <strong>Official Name:</strong> Republic of the Congo
                        (Congo-Brazzaville)
                      </li>
                      <li>
                        <strong>Population:</strong> ~6.5 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Brazzaville
                        (capital), Pointe-Noire, Dolisie, Nkayi, Owando
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Gabon, Cameroon, Central
                        African Republic, Democratic Republic of the Congo,
                        Angola (Cabinda enclave)
                      </li>
                      <li>
                        <strong>Languages:</strong> French (official), plus
                        Lingala, Kituba and many local languages
                      </li>
                      <li>
                        <strong>Currency:</strong> Central African CFA franc
                        (XAF)
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/cg.png"
                        alt="Congo Flag"
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
                      The Republic of the Congo stretches from the Atlantic
                      coast at Pointe-Noire across lowland forests and savanna
                      up the Congo River and into the northern rainforests.
                      Brazzaville, on the Congo River opposite Kinshasa, is the
                      political and administrative hub, while Pointe-Noire is
                      the main port and oil city on the coast.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Connectivity follows this geography. International
                      capacity lands on the Atlantic coast and is backhauled
                      inland over fibre along road and power corridors. Mobile
                      networks provide the primary access path for most users;
                      fixed broadband is limited and concentrated in
                      Brazzaville, Pointe-Noire and a few secondary towns.
                      Capacity, power reliability and affordability all shape
                      the user experience, but data usage and social media
                      adoption are rising quickly, especially among younger
                      urban populations.
                    </p>

                    {/* Map — GOOGLE MAPS ONLY */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Republic of the Congo"
                          // 👇 Google Maps embed without API key
                          src="https://www.google.com/maps?q=Brazzaville,Republic%20of%20the%20Congo&output=embed"
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
                          Maya-Maya International Airport (BZV) — main gateway
                          for Brazzaville
                        </li>
                        <li>
                          Agostinho-Neto International Airport (PNR) — serving
                          Pointe-Noire, key oil and port city
                        </li>
                        <li>
                          Dolisie Airport (DIS) — serving the Niari region
                        </li>
                        <li>
                          Ouesso Airport (OUE) — access point for the northern
                          rainforest and Sangha region
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
                        Congo&apos;s telecom market is relatively small.
                        Airtel and MTN are the main mobile operators, with a
                        handful of fixed and ISP players serving government,
                        banking, oil and enterprise customers. Internet usage is
                        still below global averages, but mobile data is growing
                        fast from a low base. Fixed broadband remains niche, and
                        most households rely on mobile bundles, shared access or
                        cybercafés.
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
                                ≈ 2.5–3.0 million
                              </td>
                              <td className="py-3 px-4">
                                ~38–45% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">
                                ≈ 7–8 million SIMs
                              </td>
                              <td className="py-3 px-4">
                                ~110–120% (multi-SIM common)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Identities
                              </td>
                              <td className="py-3 px-4">
                                ≈ 2.0–2.3 million accounts
                              </td>
                              <td className="py-3 px-4">
                                ~30–35% (mainly urban youth)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband (2024 est.)
                              </td>
                              <td className="py-3 px-4">
                                &lt; 100k lines (HFC/FTTx + DSL)
                              </td>
                              <td className="py-3 px-4">
                                &lt; 2 per 100 inhabitants
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
                  The Republic of the Congo taps international capacity mainly
                  from submarine cables landing on the Atlantic coast near
                  Pointe-Noire, including systems that run up and down the West
                  African coast. These are connected to Brazzaville and key
                  inland cities by fibre routes that parallel major roads and
                  power lines, with microwave used to infill more remote
                  sections. Redundancy and quality vary by route, but new
                  investments are gradually improving resilience.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Replace href/src with your own submarine-cable screenshot */}
                  <a
                    href="https://www.submarinecablemap.com/country/congo-rep-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Congo.png"
                      alt="Submarine cables and international routes serving the Republic of the Congo"
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
                  Market structure is centred on a small set of operators. MTN
                  and Airtel run nationwide mobile networks and data services;
                  Congo Telecom and a few other players provide fixed and
                  wholesale capacity, with enterprise ISPs supporting the oil
                  sector, banking, government and NGOs. Retail broadband is
                  focused on Brazzaville and Pointe-Noire, and quality of
                  service is highly location-dependent.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in Brazzaville & Pointe-Noire",
                    "Business Broadband and fixed wireless for offices, oil sites and NGOs",
                    "4G / LTE and microwave last-mile with backup options",
                    "SLA-backed Services with 24x7 monitoring and local partners",
                    "CPE / Router procurement, staging and managed services",
                    "MPLS / SD-WAN overlays across key cities and cross-border links",
                    "Diverse routing via multiple West African submarine systems",
                    "Managed Security, VPN, cloud access and DDoS mitigation",
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
              <mark className="bg-yellow-200 px-1 rounded">
                Commercial Offer in 2–4 working days
              </mark>
              . We can support connectivity in Brazzaville, Pointe-Noire and
              selected regional centres, subject to local infrastructure and
              last-mile feasibility.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Congo%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://www.worldatlas.com/maps/congo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  WorldAtlas — Congo Maps & Facts
                </a>
              </li>
              <li>
                <a
                  href="https://ontheworldmap.com/republic-of-the-congo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  OnTheWorldMap — Republic of the Congo Maps
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Republic_of_the_Congo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Republic of the Congo
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Telecommunications_in_the_Republic_of_the_Congo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Telecommunications in the Republic of the Congo
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinecablemap.com/country/congo-rep-of-the"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Cable Map — Congo (Rep. of)
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

export default Congo;
