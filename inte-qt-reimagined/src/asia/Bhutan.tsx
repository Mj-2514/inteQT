// src/pages/Bhutan.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Bhutan = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Bhutan | Dedicated DIA, Broadband & Enterprise Connectivity | inte-QT",
    description:
      "Explore Bhutan’s internet landscape — LTE coverage 99%+, growing enterprise demand, and reliable DIA & broadband delivered by inte-QT across Thimphu, Paro & Phuentsholing.",
    url: "https://www.inte-qt.com/coverage/asia/bhutan",
    publisher: {
      "@type": "Organization",
      name: "inte-QT",
      url: "https://www.inte-qt.com"
    },
    about: {
      "@type": "Country",
      name: "Bhutan",
      population: 787000,
      currency: "BTN",
      languages: ["Dzongkha", "Nepali", "Sharchhop"],
      majorCities: ["Thimphu", "Paro", "Phuentsholing"]
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta */}
        <title>Internet in Bhutan | Dedicated DIA, Broadband & Enterprise Connectivity | inte-QT</title>

        <meta
          name="description"
          content="Explore Bhutan’s internet landscape — LTE coverage 99%+, growing enterprise demand, and reliable DIA & broadband delivered by inte-QT across Thimphu, Paro & Phuentsholing."
        />
        <meta
          name="keywords"
          content="Bhutan internet, Bhutan DIA, Bhutan broadband, enterprise internet Bhutan, Bhutan LTE, Bhutan telecom, connectivity Bhutan, inte-QT Bhutan"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.inte-qt.com/coverage/asia/bhutan" />

        {/* OpenGraph */}
        <meta property="og:title" content="Internet in Bhutan | Enterprise Connectivity by inte-QT" />
        <meta
          property="og:description"
          content="Bhutan’s digital ecosystem is growing fast — discover DIA, broadband, LTE solutions and enterprise-grade connectivity delivered by inte-QT."
        />
        {/* Add an actual social preview image URL when available */}
        <meta property="og:image" content="https://i.imgur.com/IF9vsz8.jpeg" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/asia/bhutan" />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internet in Bhutan | DIA, Broadband & Connectivity | inte-QT" />
        <meta
          name="twitter:description"
          content="99%+ LTE coverage, enterprise DIA, resilient gateways — inte-QT empowers Bhutan’s digital foundation."
        />
        <meta name="twitter:image" content="https://i.imgur.com/IF9vsz8.jpeg" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section className="relative py-28 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://i.imgur.com/IF9vsz8.jpeg")' }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1.5px]" aria-hidden="true" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Bhutan
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A kingdom in the Himalayas — peaceful, green, and steadily advancing its digital future through mobile
            broadband and growing enterprise demand.
          </motion.p>
        </div>
      </section>

      {/* ---------------- CONTENT ---------------- */}
      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background" id="main">
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
                        <strong>Population:</strong> 787,000 (2023)
                      </li>
                      <li>
                        <strong>Neighbors:</strong> India, China (landlocked)
                      </li>
                      <li>
                        <strong>Languages:</strong> Dzongkha (official), Nepali, Sharchhop
                      </li>
                      <li>
                        <strong>Currency:</strong> BTN (1:1 with INR)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Thimphu, Paro, Phuentsholing
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/bt.png"
                        alt="Flag of Bhutan"
                        className="mx-auto rounded-lg shadow-lg border border-white/40"
                        loading="lazy"
                        width={160}
                        height={100}
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
                      Bhutan lies deep in the Eastern Himalayas — peaceful, mountainous, and guided by its philosophy of
                      Gross National Happiness. Despite challenging geography, the country has expanded LTE coverage to
                      nearly the entire population.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Tourism, hydropower, agriculture, and public services depend increasingly on stable digital
                      infrastructure, driving demand for Dedicated Internet Access (DIA) and enterprise-grade connectivity
                      across the country.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Bhutan"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d257669.18474119735!2d89.315!3d27.514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e1946f1add3525%3A0xd3e0e4a75e96365e!2sBhutan!5e0!3m2!1sen!2sus!4v1700000000000"
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
                        <li>Paro International Airport</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Bhutan’s digital ecosystem is dominated by mobile LTE access, with over 99% coverage nationwide.
                        Landline and fixed broadband usage remain limited but enterprise DIA demand is growing fast.
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
                              <td className="py-3 px-4">Mobile Access</td>
                              <td className="py-3 px-4">750,000</td>
                              <td className="py-3 px-4">97.3%</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Landline</td>
                              <td className="py-3 px-4">Low</td>
                              <td className="py-3 px-4">&lt;10%</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">LTE Coverage</td>
                              <td className="py-3 px-4">Nationwide</td>
                              <td className="py-3 px-4">99%+</td>
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

        {/* ---------------- SUBMARINE / BACKBONE ---------------- */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Backbone & Submarine Cable Connectivity</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
                  Bhutan connects to the global internet via India through regional backbone and submarine routes,
                  enabling redundancy and international bandwidth for critical services.
                </p>

                <div className="flex justify-center">
                  <img
                    src="https://i.imgur.com/ulgmzVG.png"
                    alt="Submarine Cables Bhutan"
                    className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>

            {/* ISPs */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Bhutan Telecom (DrukNet), TashiCell, and NANO are the leading ISPs. Demand for enterprise DIA continues
                  to grow across the country.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity",
                    "Service Level Agreements (SLA)",
                    "CPE / Router Deployment",
                    "Global Enterprise Management Solutions",
                    "Diverse Gateway Routing",
                    "DDoS Protection"
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

        {/* ---------------- COMMERCIAL OFFER ---------------- */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Contact us to receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. Our team delivers
              connectivity across Bhutan including Thimphu, Paro, and Phuentsholing.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Connectivity%20in%20Bhutan"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <a href="https://data.worldbank.org/country/bhutan" target="_blank" rel="noopener noreferrer" className="underline">
                  World Bank — Bhutan
                </a>
              </li>
              <li>
                <a href="https://www.bhutan.travel" target="_blank" rel="noopener noreferrer" className="underline">
                  Tourism Council of Bhutan
                </a>
              </li>
              <li>
                <a href="https://www.bt.bt" target="_blank" rel="noopener noreferrer" className="underline">
                  Bhutan Telecom
                </a>
              </li>
              <li>
                <a href="https://www.bicma.gov.bt" target="_blank" rel="noopener noreferrer" className="underline">
                  BICMA
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

export default Bhutan;
