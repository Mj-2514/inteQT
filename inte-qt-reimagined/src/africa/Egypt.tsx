import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Egypt: React.FC = () => {
    <Helmet>
        <title>
          Internet in Egypt | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Detailed overview of Egypt's internet connectivity, terrestrial and submarine routes, telecom operators, broadband statistics and inte-QT service capabilities in Cairo, Alexandria, Giza, New Administrative Capital and other key cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/africa/egypt"
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
            // 🔁 swap this with your own Cairo / Nile / Alexandria screenshot
            backgroundImage: 'url("https://images.unsplash.com/photo-1539768942893-daf53e448371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWd5cHR8ZW58MHx8MHx8fDI%3D")',
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
            Internet in Egypt
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A North African and Middle Eastern hub where the Nile Valley,
            Mediterranean and Red Sea corridors meet one of the world’s most
            critical clusters of submarine cables and terrestrial transit routes.
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
                        <strong>Official Name:</strong> Arab Republic of Egypt
                      </li>
                      <li>
                        <strong>Population:</strong> ~113 million (mid-2020s est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Cairo
                        (capital &amp; metro), Giza, Alexandria, New
                        Administrative Capital, Port Said, Suez, Mansoura, Tanta
                      </li>
                      <li>
                        <strong>Location &amp; Neighbours:</strong> North Africa /
                        Eastern Mediterranean; borders Libya, Sudan, Israel and
                        the Gaza Strip; coasts on the Mediterranean Sea and the
                        Red Sea / Gulf of Suez &amp; Aqaba
                      </li>
                      <li>
                        <strong>Languages:</strong> Arabic (official); English
                        widely used in business &amp; IT
                      </li>
                      <li>
                        <strong>Currency:</strong> Egyptian pound (EGP)
                      </li>
                      <li>
                        <strong>Key Corridors:</strong> Nile Valley, Suez Canal /
                        Sinai, Mediterranean coast, Red Sea coast
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/eg.png"
                        alt="Egypt Flag"
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
                      Egypt stretches from the Mediterranean coast and Nile Delta
                      through the Nile Valley down to Sudan, with the Sinai
                      Peninsula forming a land bridge to Asia between the Suez
                      Canal and the Gulf of Aqaba. Greater Cairo is the political
                      and economic core, while Alexandria anchors the main
                      Mediterranean port, and cities like Port Said, Ismailia and
                      Suez control the canal corridor and Red Sea access.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The country is one of the world’s most important
                      connectivity choke points. Dozens of submarine cables run
                      between Europe, the Middle East and Asia via Egypt’s
                      Mediterranean landings and Red Sea coast, connected by
                      multiple terrestrial crossings along the Suez Canal and
                      across Sinai. Domestically, mobile broadband is the primary
                      access method, with 4G widespread and 5G emerging in key
                      areas. Fixed broadband has improved significantly in major
                      cities but still lags in some rural and informal urban
                      zones.
                    </p>

                    {/* Map — GOOGLE MAPS */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Egypt"
                          src="https://www.google.com/maps?q=Egypt&output=embed"
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
                          Cairo International Airport (CAI) — main national and
                          regional hub
                        </li>
                        <li>
                          Sphinx International Airport (SPX) — serving west Cairo /
                          Giza and new developments
                        </li>
                        <li>
                          Borg El Arab International Airport (HBE) — Alexandria /
                          north coast
                        </li>
                        <li>
                          Hurghada International Airport (HRG) — Red Sea tourism hub
                        </li>
                        <li>
                          Sharm El Sheikh International Airport (SSH) — Sinai /
                          Red Sea tourism hub
                        </li>
                        <li>
                          Luxor (LXR) &amp; Aswan (ASW) — Upper Egypt / Nile Valley
                          tourism &amp; regional travel
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
                        Egypt’s telecom market is large and strategic. Internet
                        penetration has climbed to around{" "}
                        <span className="font-medium">
                          75–80% of the population
                        </span>{" "}
                        (≈{" "}
                        <span className="font-medium">
                          85–90 million users
                        </span>
                        ), with{" "}
                        <span className="font-medium">
                          mobile connections well above 100% penetration
                        </span>{" "}
                        due to multi-SIM usage. Fixed broadband is concentrated
                        in Cairo, Alexandria and larger regional cities, with
                        rapid upgrades from legacy ADSL to VDSL and fibre in
                        dense areas.
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
                                ≈ 85–90 million
                              </td>
                              <td className="py-3 px-4">
                                ~75–80% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Connections
                              </td>
                              <td className="py-3 px-4">
                                ≈ 115–120 million SIMs
                              </td>
                              <td className="py-3 px-4">
                                ~100–105% (multi-SIM common)
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Social Media Identities
                              </td>
                              <td className="py-3 px-4">
                                ≈ 55–60 million accounts
                              </td>
                              <td className="py-3 px-4">
                                ~50–55% of population
                              </td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband (2023–24 est.)
                              </td>
                              <td className="py-3 px-4">
                                ≈ 10–12 million lines
                              </td>
                              <td className="py-3 px-4">
                                ~9–11 per 100 inhabitants
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

        {/* Submarine Cables & International Routes */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine Cables & International Routes
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Egypt is the primary land bridge for submarine cables running
                  between Europe and Asia. Numerous systems land on the
                  Mediterranean coast near Alexandria, Abu Talat and Port Said,
                  then cross overland via multiple protected routes to Suez and
                  Red Sea landing stations such as Zafarana, Suez and Ras Ghareb.
                  From there, cables continue towards the Gulf of Aden, the
                  Arabian Peninsula and South Asia. This makes Egypt a critical
                  transit point for global IP traffic with strong demand for
                  redundancy and diverse routing.
                </p>

                <div className="flex justify-center">
                  {/* 👉 Swap src with your own submarine-cable screenshot; keep anchor tag */}
                  <a
                    href="https://www.submarinecablemap.com/country/egypt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Egypt.png"
                      alt="Submarine cables and international routes serving Egypt"
                      className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* ISPs & Market */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Internet Providers & Market
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The fixed and wholesale market is led by{" "}
                  <span className="font-medium">Telecom Egypt</span>, which owns
                  the bulk of the national backbone and many cable landing
                  stations. Mobile and retail broadband are provided by{" "}
                  <span className="font-medium">Vodafone Egypt</span>,{" "}
                  <span className="font-medium">Orange Egypt</span>,{" "}
                  <span className="font-medium">Etisalat Egypt</span> and{" "}
                  <span className="font-medium">WE</span> (Telecom Egypt’s
                  retail brand), plus a long tail of ISPs and enterprise-focused
                  providers. Demand is driven by a mix of mass-market mobile
                  data, government digitisation, outsourcing / IT services and a
                  growing data-centre ecosystem.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Our Capabilities
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA) in Cairo, Giza, New Capital, Alexandria, Port Said, Suez and major regional cities",
                    "Business broadband and fibre where available for offices, retail, factories, logistics and tourism sites",
                    "4G / 5G and fixed-wireless last-mile with backup and hybrid designs for challenging locations",
                    "SLA-backed services with 24x7 monitoring, detailed KPIs and local / regional escalation",
                    "CPE / Router supply, staging, configuration and fully managed lifecycle services",
                    "MPLS / SD-WAN for multi-site enterprises across Egypt and wider MENA / Mediterranean footprints",
                    "Diverse routing across multiple Mediterranean and Red Sea cable systems and terrestrial crossings",
                    "Managed Security, VPN, cloud on-ramps and DDoS mitigation for business-critical and government workloads",
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
              . We can support connectivity across Greater Cairo, Alexandria,
              the canal / Red Sea corridor and other regional centres, subject
              to local infrastructure and last-mile feasibility.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Egypt%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://datareportal.com/reports/digital-2025-egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  DataReportal — Digital 2025: Egypt
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Wikipedia — Egypt
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Telecommunications_in_Egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Telecommunications in Egypt
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinecablemap.com/country/egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Cable Map — Egypt Landings
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

export default Egypt;
