import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Afghanistan: React.FC = () => {
  <Helmet>
  <title>Internet in Afghanistan | Connectivity, ISPs & Broadband Overview</title>
  <meta 
    name="description"
    content="Detailed overview of Afghanistan internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities in Kabul, Kandahar and Herat."
  />
  <link rel="canonical" href="https://www.inte-qt.com/country/afghanistan" />
</Helmet>

  return (
    <>
      <Navbar />

      {/* Explorer Ribbon */}
     

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
            backgroundImage: 'url("https://i.imgur.com/iI9URSO.jpg")',
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
            Internet in Afghanistan
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A land shaped by mountains, history, and resilience — where
            connectivity is evolving and opportunity waits behind every link.
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
                      <li><strong>Population:</strong> 41.1 million (2023)</li>
                      <li><strong>Neighbors:</strong> India ,Pakistan, Iran, China, Turkmenistan, Uzbekistan, Tajikistan</li>
                      <li><strong>Languages:</strong> Pashto, Dari, Uzbek, Turkmen</li>
                      <li><strong>Currency:</strong> AFN</li>
                      <li><strong>Major Cities:</strong> Kabul, Kandahar, Herat</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/af.png"
                        alt="Afghanistan Flag"
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
                      Afghanistan sits at the crossroads of Asia — rich in
                      culture, terrain, and untapped potential. Despite political
                      complexities, its cities continue to expand and digital
                      adoption grows every year.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Connectivity remains challenged by mountainous terrain and
                      dependence on neighboring countries for bandwidth, yet
                      mobile internet continues to push the country forward.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8391855.841931678!2d60.6652585709846!3d33.93218441864661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16eb08f77f3a9%3A0x9d17dfb42b4b8f4a!2sAfghanistan!5e0!3m2!1sen!2sus!4v1700000000000"
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
                        <li>Kabul — Hamid Karzai Intl.</li>
                        <li>Kandahar Intl.</li>
                        <li>Herat Intl.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
  <CardContent className="p-6">
    <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

    <p className="text-muted-foreground mb-6 leading-relaxed">
      Afghanistan’s connectivity depends heavily on cross-border fiber paths.
      Mobile networks dominate usage, while fixed broadband penetration remains
      extremely low due to terrain, cost, and infrastructure gaps.
    </p>

    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted/30 border border-muted">
            <th className="py-3 px-4 text-left font-semibold">Type</th>
            <th className="py-3 px-4 text-left font-semibold">Users</th>
            <th className="py-3 px-4 text-left font-semibold">Penetration</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-muted/40">
            <td className="py-3 px-4">Broadband</td>
            <td className="py-3 px-4">26,570</td>
            <td className="py-3 px-4">&lt;0.1%</td>
          </tr>

          <tr className="border-t border-muted/40">
            <td className="py-3 px-4">Mobile Cellular</td>
            <td className="py-3 px-4">23 million</td>
            <td className="py-3 px-4">~54%</td>
          </tr>

          <tr className="border-t border-muted/40">
            <td className="py-3 px-4">Landline</td>
            <td className="py-3 px-4">181,963</td>
            <td className="py-3 px-4">&lt;0.5%</td>
          </tr>

          <tr className="border-t border-muted/40">
            <td className="py-3 px-4">Internet Access</td>
            <td className="py-3 px-4">13.2 million</td>
            <td className="py-3 px-4">30.05%</td>
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

        {/* Submarine Cable */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
  <CardContent className="p-6 text-center">
    <h2 className="text-3xl font-bold mb-4">
      Submarine Cables & Internet Backbone
    </h2>

    <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
      Afghanistan, being landlocked, relies entirely on fiber routes from
      Pakistan, Iran and China for international connectivity. These routes
      shape bandwidth, redundancy, and stability across the entire nation.
    </p>

    <div className="flex justify-center">
      <a
        href="https://www.submarinecablemap.com/country/afghanistan"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <img
          src="https://i.imgur.com/fA7SRVj.jpg"
          alt="Submarine Cables Afghanistan"
          className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
        />
      </a>
    </div>
  </CardContent>
</Card>


            {/* ISPs */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Internet Providers
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Key operators include Roshan, Etisalat Afghanistan, Afghan
                  Telecom, and several regional carriers.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity",
                    "SLA-backed Services",
                    "CPE / Router Deployment",
                    "Global Enterprise Management",
                    "Diverse Gateway Routing",
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
              . Our local operations team can deliver connectivity across Kabul,
              Herat, and other regions depending on logistics.
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
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://data.worldbank.org/country/afghanistan"
                  target="_blank"
                  className="underline"
                >
                  World Bank — Afghanistan
                </a>
              </li>
              <li>
                <a
                  href="https://www.cso.gov.af/"
                  target="_blank"
                  className="underline"
                >
                  CSO Afghanistan
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

export default Afghanistan;
