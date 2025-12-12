import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Denmark: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Denmark | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Denmark's internet connectivity, fibre and mobile networks, submarine cable systems and enterprise connectivity.",
    url: "https://www.inte-qt.com/coverage/europe/denmark",
    about: {
      "@type": "Country",
      name: "Denmark",
      population: 6100000,
      currency: "DKK",
      languages: ["Danish"],
      majorCities: ["Copenhagen", "Aarhus", "Odense", "Aalborg"],
    },
    publisher: {
      "@type": "Organization",
      name: "inte-QT",
      url: "https://www.inte-qt.com",
    },
  };

  return (
    <>
      <Helmet>
        <title>Internet in Denmark | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Explore Denmark’s internet infrastructure, fibre and mobile broadband, submarine cable routes and enterprise connectivity across Copenhagen, Aarhus and beyond."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/denmark"
        />

        {/* OpenGraph */}
        <meta property="og:title" content="Internet in Denmark | inte-QT" />
        <meta
          property="og:description"
          content="Denmark internet connectivity overview covering broadband, fibre, mobile and submarine cable routes."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.inte-qt.com/coverage/europe/denmark"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
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
            backgroundImage:
              'url("https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1600&q=80")',
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
            Internet in Denmark
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A highly digital Nordic EU member where nationwide fibre and mobile
            networks, strong IXPs and dense cable routes power enterprises and
            cloud ecosystems.
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
                        <strong>Official Name:</strong> Kingdom of Denmark
                      </li>
                      <li>
                        <strong>Population:</strong> ~6.1 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Copenhagen
                        (capital), Aarhus, Odense, Aalborg, Esbjerg, Randers
                      </li>
                      <li>
                        <strong>Location:</strong> Northern Europe, at the
                        entrance to the Baltic Sea; borders Germany and connects
                        by fixed links to Sweden
                      </li>
                      <li>
                        <strong>Languages:</strong> Danish (official); very high
                        English proficiency
                      </li>
                      <li>
                        <strong>Currency:</strong> Danish krone (DKK)
                      </li>
                      <li>
                        <strong>EU / Schengen:</strong> EU &amp; Schengen Area
                        member (not in Eurozone)
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/dk.png"
                        alt="Denmark Flag"
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
                      Denmark occupies the Jutland peninsula and hundreds of
                      islands between the North Sea and the Baltic, with
                      Copenhagen facing Sweden across the Øresund. Aarhus,
                      Odense and Aalborg act as key regional centres for
                      industry, logistics and education, while Esbjerg and other
                      west-coast towns support energy and offshore activities.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The country is consistently ranked among the most digital
                      economies in the world. Internet penetration is close to
                      universal, fixed broadband coverage is extensive with very
                      high-speed fibre and cable, and mobile networks deliver
                      4G and 5G across most of the territory. Denmark also plays
                      an outsized role as a connectivity hub: it hosts large
                      data centres, major IXPs and several key submarine cable
                      landings linking the Nordics, UK, continental Europe and
                      North America.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Denmark"
                          src="https://www.google.com/maps?q=Denmark&output=embed"
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
                          Copenhagen Airport (CPH) — main Nordic hub near
                          Copenhagen / Malmö region
                        </li>
                        <li>
                          Billund Airport (BLL) — major international and cargo
                          airport in Jutland
                        </li>
                        <li>
                          Aalborg Airport (AAL) — serving northern Jutland
                        </li>
                        <li>
                          Aarhus Airport (AAR) — serving Aarhus region
                        </li>
                        <li>
                          Odense / Hans Christian Andersen Airport (ODE) —
                          regional and charter traffic
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
                        Denmark&apos;s telecom market is advanced and
                        competitive. Internet usage is nearly universal and
                        digital services are embedded in daily life — from
                        e-government to banking and logistics. Fixed broadband
                        is dominated by high-speed cable and FTTH, while mobile
                        coverage (4G/5G) is extensive, with mobile connections
                        comfortably exceeding the population. The country is
                        well-integrated into pan-European backbones and
                        Nordic–continental transit routes.
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
                                Internet Users (2025 est.)
                              </td>
                              <td className="py-3 px-4">
                                ≈ 5.9–6.0 million
                              </td>
                              <td className="py-3 px-4">
                                ~97–99% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Identities
                              </td>
                              <td className="py-3 px-4">
                                ≈ 5.0–5.2 million accounts
                              </td>
                              <td className="py-3 px-4">
                                ~82–86% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">
                                ≈ 8.0–8.5 million SIMs
                              </td>
                              <td className="py-3 px-4">
                                ~130–140% (multi-SIM &amp; M2M)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband (2023–24)
                              </td>
                              <td className="py-3 px-4">
                                ≈ 2.1–2.2 million lines
                              </td>
                              <td className="py-3 px-4">
                                ~35–37 per 100 inhabitants
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
                  Denmark is a key landing point for several major submarine
                  cable systems linking the Nordics, UK, continental Europe and
                  North America. Cables in the North Sea and Baltic connect
                  Denmark with Norway, Sweden, Germany, the Netherlands and the
                  UK, while high-capacity terrestrial backbones extend from
                  Copenhagen and Jutland into the broader European core.
                  Domestic fibre rings interconnect major cities, data centres
                  and energy hubs with multiple redundant paths.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Replace href/src with your own submarine-cable screenshot */}
                  <a
                    href="https://www.submarinecablemap.com/country/denmark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Denmark.png"
                      alt="Submarine cables and international routes serving Denmark"
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
                  The main national operators include TDC NET / YouSee, Telia,
                  Telenor and 3, alongside a large ecosystem of regional fibre
                  companies and utility-owned networks. Data centres and cloud
                  providers have built a strong presence in and around
                  Copenhagen and Jutland, increasing demand for resilient,
                  low-latency connectivity and diverse routing into both Nordic
                  and continental hubs.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in Copenhagen, Aarhus, Odense, Aalborg & Esbjerg",
                    "Business Broadband and FTTH for offices, logistics hubs, industry and campuses",
                    "4G / 5G and fixed wireless last-mile options with failover and hybrid designs",
                    "SLA-backed Services with 24x7 monitoring, detailed KPIs and incident management",
                    "CPE / Router supply, staging, configuration and fully managed lifecycle",
                    "MPLS / SD-WAN for multi-site enterprises across Denmark and the wider Nordics",
                    "Diverse routing via multiple submarine systems and terrestrial paths into EU cores",
                    "Managed Security, VPN, cloud on-ramps and DDoS mitigation for critical workloads",
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
              . We can support connectivity across Copenhagen, Aarhus, Odense,
              Aalborg, Esbjerg and key data centre and industrial zones, subject
              to local infrastructure and last-mile feasibility.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Denmark%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2025-denmark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2025: Denmark
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Denmark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Denmark
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Telecommunications_in_Denmark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Telecommunications in Denmark
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinecablemap.com/country/denmark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Cable Map — Denmark Landings
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

export default Denmark;
