import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Cyprus: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Cyprus | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Cyprus' internet connectivity, submarine cable systems, broadband coverage and enterprise connectivity services.",
    url: "https://www.inte-qt.com/coverage/europe/cyprus",
    about: {
      "@type": "Country",
      name: "Cyprus",
      population: 1260000,
      currency: "EUR",
      languages: ["Greek", "Turkish"],
      majorCities: ["Nicosia", "Limassol", "Larnaca", "Paphos"],
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
        <title>Internet in Cyprus | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Explore Cyprus’ internet infrastructure, submarine cables, broadband and mobile connectivity across Nicosia, Limassol, Larnaca and Paphos."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/cyprus"
        />

        {/* OpenGraph */}
        <meta property="og:title" content="Internet in Cyprus | inte-QT" />
        <meta
          property="og:description"
          content="Overview of Cyprus’ broadband, mobile connectivity and international submarine cable routes."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.inte-qt.com/coverage/europe/cyprus"
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
              'url("https://images.unsplash.com/photo-1560860446-c821e910a0a7?auto=format&fit=crop&w=1600&q=80")',
          }}
          aria-hidden="true"
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
            Internet in Cyprus
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            An EU island hub in the Eastern Mediterranean where fibre, cable and
            mobile networks support finance, shipping and tourism, backed by
            multiple subsea systems into Europe and the Middle East.
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
                        <strong>Official Name:</strong> Republic of Cyprus
                      </li>
                      <li>
                        <strong>Population:</strong> ~1.26 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Nicosia
                        (capital), Limassol, Larnaca, Paphos, Famagusta (de facto
                        divided control)
                      </li>
                      <li>
                        <strong>Location:</strong> Eastern Mediterranean, south
                        of Turkey, west of Syria &amp; Lebanon, north of Egypt
                      </li>
                      <li>
                        <strong>Languages:</strong> Greek and Turkish (official);
                        English widely used in business and tourism
                      </li>
                      <li>
                        <strong>Currency:</strong> Euro (EUR)
                      </li>
                      <li>
                        <strong>EU:</strong> Member of the European Union and
                        Eurozone
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/cy.png"
                        alt="Cyprus Flag"
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
                      Cyprus lies at the crossroads of Europe, the Middle East
                      and North Africa, making it a natural hub for shipping,
                      finance, tourism and regional services. Nicosia sits
                      inland as the political and administrative centre (and
                      remains a divided capital), while Limassol, Larnaca and
                      Paphos anchor coastal business, ports and resorts.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      As an EU member state, Cyprus has a relatively mature and
                      competitive telecom market for its size. Internet
                      penetration is high, with most households covered by fixed
                      broadband via VDSL, cable and expanding FTTH. Mobile
                      broadband usage is widespread across the island, with 4G
                      ubiquitous and 5G rollouts focused on major urban and
                      coastal zones. International connectivity relies on a mesh
                      of submarine cables linking Cyprus to Greece, Italy,
                      Israel, Egypt and the broader Mediterranean region.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Cyprus"
                          src="https://www.google.com/maps?q=Cyprus&output=embed"
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
                          Larnaca International Airport (LCA) — primary
                          international gateway for the Republic of Cyprus
                        </li>
                        <li>
                          Paphos International Airport (PFO) — tourism-focused,
                          serving western Cyprus
                        </li>
                        <li>
                          Ercan International Airport (ECN) — in the
                          Turkish-controlled north (recognised only by Türkiye)
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
                        Cyprus has high internet and mobile adoption for its
                        population size. Fixed broadband is widely deployed
                        through VDSL, cable and growing FTTH networks, with
                        speeds sufficient for cloud, OTT and remote work
                        scenarios. Mobile connections exceed the resident
                        population, reflecting multi-SIM usage and seasonal
                        tourism. Urban centres such as Nicosia, Limassol,
                        Larnaca and Paphos enjoy the best coverage and speeds,
                        while more rural and mountainous areas depend more
                        heavily on mobile and fixed-wireless options.
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
                                ≈ 1.1–1.15 million
                              </td>
                              <td className="py-3 px-4">
                                ~88–92% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">
                                ≈ 1.7–1.8 million SIMs
                              </td>
                              <td className="py-3 px-4">
                                ~135–145% (multi-SIM &amp; tourism)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Identities
                              </td>
                              <td className="py-3 px-4">
                                ≈ 0.95–1.0 million accounts
                              </td>
                              <td className="py-3 px-4">
                                ~75–80% (heavily mobile-first)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband (2023–24 est.)
                              </td>
                              <td className="py-3 px-4">
                                ≈ 350k–400k lines
                              </td>
                              <td className="py-3 px-4">
                                ~28–32 per 100 inhabitants
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
                  Cyprus is tied into the global internet via several
                  Mediterranean subsea systems linking the island to Greece,
                  Italy, Israel, Egypt and beyond. Legacy and modern systems —
                  such as MedNautilus / AAE-1 branches, Lev submarine systems
                  and regional cables — land at multiple coastal stations and
                  interconnect with domestic fibre rings that traverse the
                  island between Nicosia, Limassol, Larnaca and Paphos.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Replace href/src with your own submarine-cable screenshot */}
                  <a
                    href="https://www.submarinecablemap.com/country/cyprus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Cyprus.png"
                      alt="Submarine cables and international routes serving Cyprus"
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
                  The main telecom and broadband players in the Republic of
                  Cyprus include Cyta, Epic, Cablenet and Primetel, each
                  offering a mix of fixed and mobile services. In the
                  Turkish-controlled north, a separate set of operators and
                  regulatory structures applies. Enterprise demand is driven by
                  finance, shipping, professional services, gaming, tourism and
                  offshore business structures, with strong requirements for
                  low-latency paths to European and Middle Eastern data centres.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in Nicosia, Limassol, Larnaca & Paphos",
                    "Business Broadband and FTTH for offices, hotels, co-working and retail",
                    "4G / 5G and fixed-wireless last-mile with backup and hybrid options",
                    "SLA-backed Services with 24x7 monitoring and proactive incident handling",
                    "CPE / Router supply, staging, configuration and managed lifecycle",
                    "MPLS / SD-WAN for multi-site enterprises across Cyprus and regional hubs",
                    "Diverse routing via multiple Mediterranean submarine cables towards Europe & MENA",
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
              . We can support connectivity across Nicosia, Limassol, Larnaca,
              Paphos and key business parks, subject to local infrastructure and
              last-mile feasibility.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Cyprus%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2025-cyprus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2025: Cyprus
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Cyprus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Cyprus
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Telecommunications_in_Cyprus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Telecommunications in Cyprus
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinecablemap.com/country/cyprus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Cable Map — Cyprus Landings
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

export default Cyprus;
