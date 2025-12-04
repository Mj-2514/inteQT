import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Japan: React.FC = () => {
    <Helmet>
        <title>Internet in Japan | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Japan’s internet connectivity, submarine cables, ISPs, fibre broadband, mobile access and inte-QT service capabilities in Tokyo, Osaka, and other major cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/japan"
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
            backgroundImage:
              'url("https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1600&q=80")',
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
            Internet in Japan
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A technologically advanced island nation with world-class fibre
            broadband, dense mobile networks, and a rich cultural and digital
            landscape.
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
                        <strong>Population:</strong> 125.4 million (long-term
                        projections suggest ~124.9M in 2022 and ~124.5M in 2023)
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Maritime proximity to PR
                        China, North Korea, South Korea, the Philippines,
                        Russia, and Taiwan; bordered by the Sea of Okhotsk and
                        the East China Sea.
                      </li>
                      <li>
                        <strong>Language:</strong> Japanese (primary language)
                      </li>
                      <li>
                        <strong>Currency:</strong> Japanese Yen (JPY)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Automobiles, consumer
                        electronics, semiconductors, iron and steel
                      </li>
                      <li>
                        <strong>Top Cities:</strong> Tokyo, Yokohama, Osaka
                      </li>
                      <li>
                        <strong>Climate:</strong> Hot, humid summers and snowy
                        winters in many eastern regions; subtropical in Okinawa
                        and Amami
                      </li>
                      <li>
                        <strong>National Sport:</strong> Sumo wrestling
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Japan is an island country of nearly 7,000 islands,
                        including the four main islands of Hokkaido, Honshu,
                        Kyushu, and Shikoku. It blends centuries-old traditions
                        like tea ceremonies and calligraphy with cutting-edge
                        technology and global cultural influence.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/jp.png"
                        alt="Japan Flag"
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
                      Japan is a highly developed island nation, renowned for
                      its advanced technology, efficient infrastructure, and
                      globally recognized brands. From automobiles and
                      semiconductors to consumer electronics, it remains a
                      leader in multiple high-value industries.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Culturally, Japan is known for traditional arts such as
                      tea ceremonies, calligraphy, and kabuki theatre, while
                      also being home to UNESCO World Heritage sites, modern
                      megacities, and famous culinary exports like sushi.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      As a tourism destination, Japan continues to attract
                      millions of visitors for its scenic landscapes, seasonal
                      attractions like cherry blossoms, and its unique blend of
                      heritage and innovation. While 2021 saw a sharp decline in
                      arrivals due to global travel restrictions, Japan remains
                      one of the most desirable destinations worldwide.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Japan&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ports/Airports + Connectivity Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Airports & Ports */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Main Airports & Ports
                      </h3>
                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        Japan is served by multiple international and domestic
                        airports, enabling strong passenger and cargo flows
                        across Asia and beyond.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports (IATA – Name – City)
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>NRT – Narita International Airport – Tokyo</li>
                        <li>KIX – Kansai International Airport – Osaka</li>
                        <li>FUK – Fukuoka Airport – Fukuoka</li>
                        <li>HND – Tokyo Haneda International Airport – Tokyo</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Tokyo</li>
                        <li>Kobe Port</li>
                        <li>Port of Nagoya</li>
                        <li>Port of Osaka</li>
                        <li>Port of Yokohama</li>
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
                        Japan pioneered mobile internet and remains one of the
                        world&apos;s most advanced telecommunications markets.
                        Landline telephony is well-established, but mobile and
                        broadband services drive the majority of usage.
                      </p>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        The country has over <strong>116 million</strong>{" "}
                        internet users, supported by a highly developed fibre
                        broadband ecosystem. Residential and business customers
                        can access speeds up to{" "}
                        <strong>10 Gbps</strong> in many urban areas, enabling
                        cloud, media, gaming, and enterprise applications at
                        scale.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Aspect
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Landline & Mobile Phone
                              </td>
                              <td className="py-3 px-4">
                                Mature fixed-line base; mobile networks among the
                                largest and most advanced globally.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">
                                116M+ users with extensive fibre and mobile
                                broadband options.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fibre Broadband Speeds
                              </td>
                              <td className="py-3 px-4">
                                Up to 10 Gbps available in many areas.
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
            {/* Submarine Cables */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine Cables in Japan
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Japan is a critical node in global internet infrastructure,
                  serving as a landing point for numerous high-capacity submarine
                  cable systems that connect Asia, North America, and beyond.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  These systems enable low-latency connectivity between Japan
                  and major markets, supporting cloud platforms, content
                  delivery, financial trading, and international enterprise
                  networks.
                </p>

                <h3 className="font-semibold mb-3 text-lg">
                  Key Submarine Cable Systems
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>APCN-2</li>
                    <li>Apricot</li>
                    <li>Asia Direct Cable (ADC)</li>
                    <li>Asia Pacific Gateway (APG)</li>
                    <li>Asia Submarine-cable Express (ASE) / Cahaya Malaysia</li>
                    <li>Australian-Japan Cable</li>
                    <li>EAC-C2C</li>
                    <li>FASTER</li>
                    <li>FLAG Europe-Asia (FEA)</li>
                    <li>FLAG North Asia Loop / Reach North Asia Loop</li>
                    <li>Guan Okinama Kyushu Incheon (GOKI)</li>
                    <li>Hokkaido-Sakhalin Cable System (HSCS)</li>
                    <li>Japan-Guam-Australia North (JGA-N)</li>
                    <li>Japan-U.S. Cable Network (JUS)</li>
                    <li>Jupiter</li>
                    <li>Korea-Japan Cable Network (KJCN)</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Miyazaki-Okinawa Cable (MOC)</li>
                    <li>New Cross Pacific (NCP) Cable System</li>
                    <li>Okinawa Cellular Cable</li>
                    <li>Pacific Crossing-1 (PC-1)</li>
                    <li>Russia-Japan Cable Network (RJCN)</li>
                    <li>SeaMeWe-3</li>
                    <li>Southeast Asia-Japan Cable 2 (SJC2)</li>
                    <li>Southeast Asia-Japan Cable (SJC)</li>
                    <li>Tata TGN-Pacific</li>
                    <li>Topaz</li>
                    <li>Trans-Pacific Express (TPE) Cable System</li>
                    <li>Unity / EAC-Pacific</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Japan
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT provides enterprise-grade connectivity services across
                  Japan, leveraging local and international infrastructure to
                  support mission-critical applications.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Dedicated Lines",
                    "Business Broadband",
                    "Wireless Connectivity",
                    "CPE / Router Deployment",
                    "Global Enterprise Management Solutions (GEMS)",
                    "Diverse Gateway Solutions",
                    "DDoS Protection",
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

                <p className="text-muted-foreground leading-relaxed">
                  Our Global Business Solutions team can typically provide a{" "}
                  <strong>Commercial Offer in 2–3 working days</strong>. Global
                  Operations can deliver services in major cities such as Tokyo
                  and Yamaguchi within <strong>3–4 weeks</strong>, and in other
                  cities within <strong>5–6 weeks</strong>, depending on local
                  access and site conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Offer & References */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              For tailored connectivity or managed network solutions in Japan,
              contact us to receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">
                Commercial Offer in 2–3 working days
              </mark>
              . Our teams can support deployments in core metropolitan areas and
              regional locations alike.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Mail from Our Site"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>Reference 1</li>
              <li>Reference 2</li>
              <li>Reference 3</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Japan;
