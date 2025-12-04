import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Armenia: React.FC = () => {
    <Helmet>
        <title>Internet in Armenia | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Armenia’s internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Yerevan, Gyumri and Vanadzor."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/asia/armenia"
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
            backgroundImage: 'url("https://i.imgur.com/V2S3IsT.jpg")',
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
            Internet in Armenia
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A landlocked nation at the crossroads of Europe and Asia — rich in
            culture, innovation, and a growing digital economy powered by
            resilient terrestrial connectivity.
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
                        <strong>Population:</strong> 2.8 million (2023 estimate)
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Georgia, Azerbaijan, Iran,
                        Turkey
                      </li>
                      <li>
                        <strong>Languages:</strong> Armenian (official)
                      </li>
                      <li>
                        <strong>Currency:</strong> Armenian Dram (AMD)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Yerevan, Gyumri, Vanadzor
                      </li>
                      <li>
                        <strong>Key Industries:</strong> IT, Agriculture,
                        Mining, Manufacturing
                      </li>
                      <li>
                        <strong>Tourists per Year:</strong> ~1.5 million (2023
                        estimate)
                      </li>
                      <li>
                        <strong>National Sport:</strong> Football
                      </li>
                      <li>
                        <strong>Climate:</strong> Continental; hot summers and
                        cold winters
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/am.png"
                        alt="Armenia Flag"
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
                      Armenia is a landlocked country situated at the crossroads
                      of Eastern Europe and Western Asia. With a deep cultural
                      heritage, historic landmarks, and a rapidly growing IT and
                      innovation sector, Yerevan — the capital — serves as the
                      political, economic, and cultural center of the country.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Despite having no coastline, Armenia has built a resilient
                      internet ecosystem using terrestrial fiber routes through
                      neighboring countries. High mobile penetration, improving
                      fixed broadband, and a strong tech talent base are
                      helping drive the country&apos;s expanding digital
                      economy.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Armenia&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
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
                        <li>Zvartnots International Airport (Yerevan)</li>
                        <li>Shirak Airport (Gyumri)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Connectivity Overview
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Armenia relies on terrestrial fiber links through
                        Georgia and Iran for international connectivity. Mobile
                        services show very high penetration, while fixed
                        broadband continues to grow, especially in urban hubs
                        like Yerevan, Gyumri, and Vanadzor.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Type
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Estimated Users
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Penetration
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Broadband (Fixed)
                              </td>
                              <td className="py-3 px-4">~900,000</td>
                              <td className="py-3 px-4">
                                ~32% (fixed broadband)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Cellular Users
                              </td>
                              <td className="py-3 px-4">~3 million</td>
                              <td className="py-3 px-4">~107%</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Landline</td>
                              <td className="py-3 px-4">~500,000</td>
                              <td className="py-3 px-4">~17.8%</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Access to Internet</td>
                              <td className="py-3 px-4">~2 million</td>
                              <td className="py-3 px-4">Over 70%</td>
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

        {/* Submarine Cable / Terrestrial Backbone */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  International Connectivity & Internet Backbone
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  As a landlocked country, Armenia has no direct access to
                  submarine cables. Instead, it connects to global networks via
                  terrestrial fiber optic routes through Georgia and Iran. These
                  paths enable stable international connectivity, though
                  reliance on external routes can affect redundancy and latency.
                </p>

                <div className="flex justify-center">
          
                    <img
                      src="https://i.imgur.com/Fzx6mrW.jpg"
                      alt="Armenia Connectivity Map"
                      className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                    />
                  
                </div>
              </CardContent>
            </Card>

            {/* ISPs */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Major internet providers in Armenia include Beeline, Ucom, and
                  Rostelecom. These operators offer a mix of mobile, broadband,
                  and fiber-based services, with strong coverage in urban areas
                  and steadily improving reach into rural regions.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We deliver secure and scalable connectivity solutions across
                  Armenia, with service availability in key cities like Yerevan,
                  Gyumri, and Vanadzor. Our portfolio is tailored for IT,
                  manufacturing, government, and international aid customers.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Business Broadband (BB)",
                    "Customer Premises Equipment (CPE) / Routers",
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
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Offer / Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Contact us to receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">
                Commercial Offer in 2–4 working days
              </mark>
              . Our Global Business Solutions team can typically deploy services
              in Yerevan and Gyumri within 3–4 weeks, and extend to areas like
              Vanadzor within 5–6 weeks, depending on regional access and
              deployment requirements.
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
            <ul className="text-muted-foreground space-y-1">
              <li>
                <a
                  href="https://data.worldbank.org/country/armenia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  World Bank — Armenia
                </a>
              </li>
              <li>
                <a
                  href="https://www.armstat.am/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Statistical Committee of Armenia
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.am/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Government of Armenia
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

export default Armenia;
