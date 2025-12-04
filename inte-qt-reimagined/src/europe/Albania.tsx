import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Albania: React.FC = () => {
    <Helmet>
        <title>Internet in Albania | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Albania’s internet connectivity, ISPs, broadband and mobile penetration, and inte-QT service capabilities across Tirana, Durrës, Vlorë and other key regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/albania"
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
            // Swap with your own Albania hero asset if you have one
            backgroundImage:
              'url("https://i.imgur.com/ZK8AaKl.jpg")',
          }}
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1.5px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Albania
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A Western Balkan nation on the Adriatic and Ionian Seas — with
            growing broadband adoption, strong mobile coverage, and rising
            digital engagement across cities and coastal regions.
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
                        <strong>Population:</strong> ~2.84 million (2023)
                      </li>
                      <li>
                        <strong>Region:</strong> Western Balkans, on the
                        Adriatic &amp; Ionian Seas
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Montenegro, Kosovo, North
                        Macedonia, Greece; maritime proximity to Italy
                      </li>
                      <li>
                        <strong>Capital:</strong> Tirana
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Tirana, Durrës, Vlorë,
                        Shkodër
                      </li>
                      <li>
                        <strong>Official Language:</strong> Albanian
                      </li>
                      <li>
                        <strong>Currency:</strong> Albanian Lek (ALL)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Services, tourism,
                        construction, textiles, energy, agriculture, mining
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> ~80–83% of the
                        population online (recent estimates)
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Albania is a compact, mountainous country with a
                        Mediterranean coastline and a young, increasingly urban
                        population. Tirana and Durrës form a growing economic
                        corridor, while coastal cities like Vlorë and Sarandë
                        benefit from tourism and trade.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/al.png"
                        alt="Albania Flag"
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
                      Albania has transitioned from a largely agrarian economy
                      to a service- and trade-driven one, with tourism,
                      construction, and remittances playing key roles.
                      Infrastructure investments across transport and energy
                      corridors are gradually improving regional integration and
                      logistics.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Tirana serves as the political and economic centre, while
                      port cities like Durrës and Vlorë act as gateways to the
                      Adriatic and wider EU markets. A growing focus on digital
                      services, outsourcing, and tourism is reshaping the
                      country&apos;s economic profile.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Internet and mobile connectivity have expanded rapidly in
                      the last decade, with most urban households now having
                      access to broadband and mobile data services.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Albania&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ports/Airports + Connectivity */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Airports & Ports */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Main Airports & Ports
                      </h3>

                      <h4 className="font-semibold text-sm mb-2">
                        Key Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          Tirana International Airport Nënë Tereza (Tirana)
                        </li>
                        <li>Kukës International Airport Zayed (Kukës)</li>
                        <li>Seasonal/charter operations via coastal airports</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Durrës (primary commercial seaport)</li>
                        <li>Port of Vlorë</li>
                        <li>Port of Sarandë (passenger &amp; cruise)</li>
                        <li>Port of Shëngjin</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Connectivity / Internet Access */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Connectivity & Internet Access
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        Albania has extensive mobile internet coverage, with
                        major operators providing robust 4G service across most
                        of the population and early 5G deployments in select
                        urban areas. Fixed broadband penetration is growing,
                        with fibre and cable concentrated in larger cities.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Metric
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Value (recent)
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Notes
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">
                                ~2.3 million users
                              </td>
                              <td className="py-3 px-4">
                                Around 80–83% of the population online.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Coverage
                              </td>
                              <td className="py-3 px-4">
                                &gt;95% population coverage
                              </td>
                              <td className="py-3 px-4">
                                4G widely available; 5G rolling out in major
                                cities.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Median Mobile Speed
                              </td>
                              <td className="py-3 px-4">
                                ~175 Mbps (download)
                              </td>
                              <td className="py-3 px-4">
                                Based on recent global speed index data.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Median Fixed Broadband
                              </td>
                              <td className="py-3 px-4">
                                ~158 Mbps (download)
                              </td>
                              <td className="py-3 px-4">
                                Strong performance relative to regional peers.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Urban centres like Tirana, Durrës and Vlorë benefit from
                        denser fibre networks, while rural and mountainous areas
                        rely more heavily on mobile broadband and wireless
                        solutions.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Submarine Cables & Market */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* Submarine Cables */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  International & Submarine Connectivity
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Albania is connected to the global internet through regional
                  submarine cables in the Adriatic and Mediterranean, linking
                  it to Italy, Greece and the wider European backbone. These
                  systems are complemented by terrestrial cross-border fibre
                  routes to neighbouring Balkan countries.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Together, these links provide Albania with diversified paths
                  for international traffic, supporting cloud access, content
                  delivery, and enterprise connectivity across the country.
                </p>

                <div className="flex justify-center">
      
        <img
          src="https://i.imgur.com/9W8oRIG.png"
          alt="Submarine Cables Albania"
          className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
        />
      
    </div>
              </CardContent>
            </Card>

            {/* ISPs & Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Internet Providers & Market Landscape
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Albania’s telecom market is served by several major operators,
                  including Vodafone Albania and ONE Albania (which merged with
                  Albtelecom), alongside other ISPs that provide fixed broadband
                  and enterprise services. These operators offer nationwide
                  mobile coverage and growing fibre-based access in urban areas.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Competition in mobile data plans and home broadband has helped
                  drive higher speeds and wider coverage, particularly around
                  Tirana, Durrës, Vlorë and key transport corridors.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT delivers secure and scalable connectivity solutions
                  across Albania, with service availability in key locations
                  such as Tirana, Durrës, Vlorë and other industrial and
                  commercial centres.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity (4G/5G last mile)",
                    "Service Level Agreements (SLA)",
                    "Customer Premises Equipment (CPE) / Routers",
                    "Global Enterprise Management Solutions (GEMS)",
                    "Diverse Gateway Solutions",
                    "Distributed Denial of Service (DDoS) Protection",
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

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our Global Business Solutions team can typically provide a{" "}
                  <strong>Commercial Offer within 2–4 working days</strong>,
                  with service delivery in most locations within{" "}
                  <strong>4–6 weeks</strong>, subject to local last-mile
                  feasibility and site conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Offer & References */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Contact us to receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">
                Commercial Offer in 2–4 working days
              </mark>
              . Our teams and local partners can support deployments in Tirana,
              Durrës, Vlorë and other strategic locations across Albania.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Mail from Our Site"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">Suggested References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>World Bank — Albania (ICT & connectivity indicators)</li>
              <li>DataReportal — Digital in Albania</li>
              <li>Albanian Electronic and Postal Communications Authority (AKEP)</li>
              <li>Internet Society — Albania Country Report</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Albania;
