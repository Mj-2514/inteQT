// src/pages/India.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const India = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in India | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of India’s internet connectivity, submarine cables, terrestrial fiber backbone, ISPs, broadband statistics and inte-QT service capabilities across major Indian cities.",
    url: "https://www.inte-qt.com/coverage/asia/india",
    about: {
      "@type": "Country",
      name: "India",
      population: 1429000000,
      currency: "INR (Indian Rupee)",
      languages: ["Hindi", "English"],
      neighbouringCountries: [
        "Pakistan",
        "China",
        "Nepal",
        "Bhutan",
        "Bangladesh",
        "Myanmar",
        "Sri Lanka"
      ],
      majorCities: [
        "New Delhi",
        "Mumbai",
        "Bengaluru",
        "Chennai",
        "Hyderabad",
        "Kolkata",
        "Pune"
      ],
      climate: "Tropical to subtropical; monsoon-driven",
      nationalSport: "Hockey",
      touristsPerYear: "~17 million (international visitors)"
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in India | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of India’s internet connectivity, submarine cables, fiber backbone, ISPs, broadband penetration and inte-QT service capabilities across major Indian cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/asia/india"
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Internet in India | Connectivity, ISPs & Broadband Overview"
        />
        <meta
          property="og:description"
          content="Comprehensive overview of India’s internet infrastructure, submarine cable systems, ISPs and broadband ecosystem."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.inte-qt.com/coverage/asia/india"
        />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative py-28 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1548013146-72479768bada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWF8ZW58MHwwfDB8fHwy")'
          }}
          aria-hidden="true"
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
            Internet in India
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A global digital powerhouse bridging East and West — India’s internet
            ecosystem is driven by vast submarine cable landings, one of the
            world’s largest terrestrial fiber backbones, and massive mobile
            broadband adoption.
          </motion.p>
        </div>
      </section>

      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background">
        {/* CONTENT */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* LEFT — KEY FACTS */}
              <motion.aside
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="backdrop-blur-xl bg-white/70 dark:bg-black/30 rounded-3xl border border-white/20 shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-5">Key Facts</h2>

                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>
                        <strong>Population:</strong> ~1.43 billion
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Pakistan, China, Nepal, Bhutan,
                        Bangladesh, Myanmar, Sri Lanka
                      </li>
                      <li>
                        <strong>Languages:</strong> Hindi, English + 20+ official
                        regional languages
                      </li>
                      <li>
                        <strong>Currency:</strong> Indian Rupee (INR)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> New Delhi, Mumbai,
                        Bengaluru, Chennai, Hyderabad, Kolkata
                      </li>
                      <li>
                        <strong>Key Industries:</strong> IT Services, Telecom,
                        Manufacturing, FinTech, E-commerce
                      </li>
                      <li>
                        <strong>Tourists per Year:</strong> ~17 million
                      </li>
                      <li>
                        <strong>National Sport:</strong> Hockey
                      </li>
                      <li>
                        <strong>Climate:</strong> Tropical to subtropical,
                        monsoon-driven
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <img
                        src="https://flagcdn.com/w320/in.png"
                        alt="Flag of India"
                        className="mx-auto rounded-lg shadow-lg border border-white/40"
                        loading="lazy"
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
                      India hosts one of the world’s largest and most dynamic
                      internet markets. Affordable mobile data pricing, rapid
                      smartphone adoption, and large-scale government initiatives
                      such as BharatNet have significantly expanded nationwide
                      digital access.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Strategically located along major global data routes, India
                      functions as a critical internet gateway for South Asia,
                      the Middle East, and Southeast Asia, supported by extensive
                      submarine cable landings and dense inland fiber networks.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of India"
                          src="https://www.google.com/maps?q=India&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Airports + Connectivity */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Main Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Indira Gandhi Intl – New Delhi</li>
                        <li>Chhatrapati Shivaji Intl – Mumbai</li>
                        <li>Kempegowda Intl – Bengaluru</li>
                        <li>Rajiv Gandhi Intl – Hyderabad</li>
                        <li>Chennai International Airport</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Connectivity Overview
                      </h3>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left">Type</th>
                              <th className="py-3 px-4 text-left">
                                Estimated Users
                              </th>
                              <th className="py-3 px-4 text-left">
                                Penetration
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t">
                              <td className="py-3 px-4">Mobile Internet</td>
                              <td className="py-3 px-4">~820 million</td>
                              <td className="py-3 px-4">~58%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">~40 million</td>
                              <td className="py-3 px-4">~3%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="py-3 px-4">Landline</td>
                              <td className="py-3 px-4">~20 million</td>
                              <td className="py-3 px-4">~1.5%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="py-3 px-4">Access to Internet</td>
                              <td className="py-3 px-4">~850+ million</td>
                              <td className="py-3 px-4">~60%</td>
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

        {/* BACKBONE */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  International Connectivity & Internet Backbone
                </h2>

                <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                  India is connected to global networks via multiple high-capacity
                  submarine cable systems landing at Mumbai, Chennai, Kochi and
                  Tuticorin. These are reinforced by one of the world’s largest
                  terrestrial fiber backbones, providing redundancy and regional
                  resilience.
                </p>

                <img
                  src="/India.png"
                  alt="India Connectivity Map"
                  className="rounded-xl shadow-lg border border-white/20 mx-auto"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ISPs */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Major internet service providers in India include Reliance Jio,
                  Bharti Airtel, Vodafone Idea, BSNL, ACT Fibernet, and Tata
                  Communications, delivering nationwide mobile, broadband and
                  enterprise-grade connectivity.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We provide scalable, secure connectivity solutions across
                  India’s metro and tier-2 cities, supporting enterprises,
                  hyperscalers, manufacturing, IT services and government
                  organizations.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "MPLS & SD-WAN",
                    "Colocation & Data Center Connectivity",
                    "Diverse Gateway & Redundant Routing",
                    "DDoS Protection & Network Security"
                  ].map((cap) => (
                    <div
                      key={cap}
                      className="flex items-start space-x-3 bg-card/40 p-3 rounded-xl border border-white/10"
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

        {/* COMMERCIAL */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Contact us to receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">
                Commercial Offer in 2–4 working days
              </mark>
              . Services in metro cities such as Mumbai, Delhi, Bengaluru and
              Chennai can typically be deployed within 3–4 weeks, subject to
              last-mile availability.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=India%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>
                <a
                  href="https://www.trai.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Telecom Regulatory Authority of India
                </a>
              </li>
              <li>
                <a
                  href="https://data.worldbank.org/country/india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  World Bank — India
                </a>
              </li>
              <li>
                <a
                  href="https://www.dot.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Department of Telecommunications, India
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

export default India;
