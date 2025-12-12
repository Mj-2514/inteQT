// src/pages/Bangladesh.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Bangladesh = () => {
  const capabilities = [
    "Dedicated Internet Access (DIA)",
    "Business Broadband (BB)",
    "Wireless Connectivity (4G LTE)",
    "Service Level Agreements (SLA)",
    "Customer Premises Equipment (CPE) / Routers",
    "Global Enterprise Management Solutions (GEMS)",
    "Diverse Gateway Solutions",
    "DDoS Protection",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Bangladesh | DIA, Broadband, 4G/5G, Fiber | inte-QT",
    description:
      "Enterprise internet in Bangladesh: Dedicated Internet Access (DIA), Business Broadband, Wireless LTE, SEA-ME-WE connectivity, and managed global services. Coverage across Dhaka, Chittagong & national regions.",
    url: "https://www.inte-qt.com/coverage/asia/bangladesh",
    about: {
      "@type": "Country",
      name: "Bangladesh",
      population: 172900000,
      currency: "BDT (Bangladeshi Taka)",
      languages: ["Bengali"],
      neighbouringCountries: ["India", "Myanmar"],
      majorCities: ["Dhaka", "Chittagong", "Khulna"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Bangladesh | DIA, Broadband, 4G/5G, Fiber | inte-QT</title>

        <meta
          name="description"
          content="Enterprise internet in Bangladesh: Dedicated Internet Access (DIA), Business Broadband, Wireless LTE, SEA-ME-WE connectivity, and managed global services. Coverage across Dhaka, Chittagong & national regions."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/asia/bangladesh" />

        {/* Open Graph */}
        <meta property="og:title" content="Internet in Bangladesh | DIA, Broadband, 4G/5G, Fiber | inte-QT" />
        <meta
          property="og:description"
          content="Enterprise internet in Bangladesh: DIA, Business Broadband, Wireless LTE, SEA-ME-WE connectivity, and managed global services across Dhaka, Chittagong & regional hubs."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/asia/bangladesh" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative py-28 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://i.imgur.com/Bks0uYa.jpeg")',
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" aria-hidden="true" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Bangladesh
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            Rapidly growing mobile adoption and expanding 4G coverage — inte-QT delivers tailored connectivity
            across Bangladesh for enterprise, public sector and digital services.
          </motion.p>
        </div>
      </section>

      {/* MAIN */}
      <main className="min-h-screen bg-background/60" id="main">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* LEFT — KEY FACTS */}
              <aside>
                <Card className="backdrop-blur-xl bg-white/70 dark:bg-black/30 rounded-3xl border border-white/10 shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-5">Key Facts</h2>

                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li><strong>Population:</strong> 172.9 million (2023 estimate)</li>
                      <li><strong>Neighbors:</strong> India, Myanmar; Bay of Bengal to the south</li>
                      <li><strong>Language:</strong> Bengali (Bangla). English used in business & education</li>
                      <li><strong>Currency:</strong> Bangladeshi Taka (BDT)</li>
                      <li><strong>Top Cities:</strong> Dhaka, Chittagong, Khulna</li>
                      <li><strong>Climate:</strong> Tropical monsoon — hot, humid summers; heavy rains</li>
                    </ul>

                    <div className="text-center mt-6">
                      <img
                        src="https://flagcdn.com/w320/bd.png"
                        alt="Flag of Bangladesh"
                        className="mx-auto rounded-md shadow-sm border border-white/10"
                        style={{ width: 140 }}
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
              </aside>

              {/* CENTER & RIGHT — CONTENT */}
              <article className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <Card className="rounded-3xl shadow-xl border border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">Overview</h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Bangladesh has seen massive mobile adoption; 4G is the primary access medium and fixed broadband is
                      growing in urban centers. inte-QT partners locally to provide enterprise-grade services across sectors
                      including textiles, shipping, pharmaceuticals and fintech.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      As 5G trials and infrastructure buildouts accelerate, enterprises need resilient routed connectivity,
                      redundancy and local support — all areas we can help with through DIA, BB and managed wireless.
                    </p>

                    {/* Map (centered card) */}
                    <div className="mt-6">
                      <h3 className="font-semibold mb-3 text-lg">Map & Location</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
                        <div className="p-6 bg-card">
                          <div className="max-w-3xl mx-auto">
                            <iframe
                              title="Map of Bangladesh"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d365789.2005341431!2d89.0108702821781!3d23.7808873427808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1c1f4f3b6b9%3A0x6aee0065b9b18158!2sBangladesh!5e0!3m2!1sen!2sus!4v1700000000000"
                              width="100%"
                              height="420"
                              style={{ border: 0 }}
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Airports + Connectivity table card rectangle */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Main Ports & Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li><strong>Seaports:</strong> Port of Chittagong, Port of Mongla</li>
                        <li><strong>Airports:</strong> Hazrat Shahjalal Intl (Dhaka), Shah Amanat Intl (Chittagong), Osmani Intl (Sylhet)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Connectivity Overview — rectangular table card */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Mobile broadband dominates internet access. 4G has broad penetration and networks are expanding
                        toward 5G readiness. International bandwidth comes from multiple submarine systems (SEA-ME-WE family).
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30">
                              <th className="py-3 px-4 text-left font-semibold">Type</th>
                              <th className="py-3 px-4 text-left font-semibold">Estimated Users</th>
                              <th className="py-3 px-4 text-left font-semibold">Penetration / Note</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile / 4G Subscribers</td>
                              <td className="py-3 px-4">~106.15 million (Jan 2025)</td>
                              <td className="py-3 px-4">High — primary access method</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband Users</td>
                              <td className="py-3 px-4">Growing in urban centers</td>
                              <td className="py-3 px-4">Mostly fibre in cities</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Landline</td>
                              <td className="py-3 px-4">Legacy / limited</td>
                              <td className="py-3 px-4">Primarily business use</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Access (approx)</td>
                              <td className="py-3 px-4">High mobile penetration — rising broadband</td>
                              <td className="py-3 px-4">Mobile-first market</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Submarine Cables & ISPs */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-6">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & Internet Backbone</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Bangladesh is connected to major submarine systems including SEA-ME-WE 4 / 5 / 6 which provide
                  international capacity and redundancy. These links connect national gateways to global networks.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://i.imgur.com/3x8sK8k.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full max-w-3xl"
                  >
                    <img
                      src="https://i.imgur.com/3x8sK8k.jpg"
                      alt="Submarine cables serving Bangladesh"
                      className="rounded-xl shadow-lg border border-white/20 w-full"
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Major operators: Grameenphone (largest mobile operator), Robi Axiata, Banglalink, Teletalk (state).
                  Infrastructure investments from these providers continue to drive coverage and capacity improvements.
                </p>

                <h3 className="text-xl font-semibold mb-3">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {capabilities.map((cap) => (
                    <div key={cap} className="flex items-start space-x-3 bg-card p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <div className="text-sm">{cap}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA / Contact / References */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>.
              Our local teams support deployments across Dhaka, Chittagong and regional hubs.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Connectivity%20in%20Bangladesh"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a href="https://data.worldbank.org/country/bangladesh" target="_blank" rel="noopener noreferrer" className="underline">
                  World Bank — Bangladesh
                </a>
              </li>
              <li>
                <a href="http://www.btrc.gov.bd/" target="_blank" rel="noopener noreferrer" className="underline">
                  Bangladesh Telecommunication Regulatory Commission (BTRC)
                </a>
              </li>
              <li>
                <a href="https://www.grameenphone.com/" target="_blank" rel="noopener noreferrer" className="underline">
                  Grameenphone
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

export default Bangladesh;
