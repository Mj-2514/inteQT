import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Fiji: React.FC = () => {
    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Fiji | Connectivity, ISPs & Broadband Overview",
  description:
    "Overview of Fiji's internet connectivity, submarine cable systems, ISPs, broadband market and inte-QT service capabilities across Suva, Nadi and other key island hubs.",
  url: "https://www.inte-qt.com/coverage/oceania/fiji",
  about: {
    "@type": "Country",
    name: "Fiji",
    capital: {
      "@type": "City",
      name: "Suva"
    },
    officialLanguage: ["English", "Fijian", "Fiji Hindi"],
    currency: "FJD",
    population: {
      "@type": "QuantitativeValue",
      value: 940000
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -17.7134,
      longitude: 178.0650
    }
  },
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.inte-qt.com/#website"
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.inte-qt.com/#organization"
  }
};

  return (
    <>
      <Helmet>
  <title>Internet in Fiji | Connectivity, ISPs & Broadband Overview</title>

  <meta
    name="description"
    content="Overview of Fiji's internet connectivity, submarine cable systems, ISPs, broadband market and inte-QT service capabilities across Suva, Nadi and other key island hubs."
  />

  <link
    rel="canonical"
    href="https://www.inte-qt.com/coverage/oceania/fiji"
  />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify(jsonLd)}
  </script>
</Helmet>


      <Navbar />

      {/* HERO */}
      <section className="relative py-28 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1717361054046-eda52d552736?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlqaXxlbnwwfDB8MHx8fDI%3D")',
          }}
        />

        <div className="absolute inset-0 bg-black/45 backdrop-blur-[1.2px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Fiji
          </motion.h1>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A South Pacific island nation with strong submarine cable connectivity,
            growing digital infrastructure and key telecom hubs in Suva and Nadi.
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
                        <strong>Official Name:</strong> Republic of Fiji
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 940,000 (2025 est.)
                      </li>
                      <li>
                        <strong>Capital & Main Cities:</strong> Suva (capital), Nadi, Lautoka, Labasa.
                      </li>
                      <li>
                        <strong>Languages:</strong> English (official), iTaukei (Fijian), Fiji Hindi.
                      </li>
                      <li>
                        <strong>Currency:</strong> Fijian dollar (FJD)
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/fj.png"
                        alt="Fiji Flag"
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
                    <h2 className="text-3xl font-bold mb-4">A Brief Overview</h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Fiji serves as one of the major telecommunications hubs of the Pacific Islands.
                      It hosts key cable landing stations and provides international transit to neighbouring
                      island nations. Suva and Nadi contain the majority of data centres, fibre infrastructure
                      and enterprise connectivity.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Multiple submarine cable systems—including Southern Cross-related systems, regional interconnects
                      and Tonga/Samoa links—support Fiji’s role as a regional internet gateway, enhancing redundancy
                      and reducing latency to Australia, New Zealand and the US.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Fiji"
                          src="https://www.google.com/maps?q=Fiji&output=embed"
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

                {/* Airports & Connectivity */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Main Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Nadi International Airport (NAN) — main international hub.</li>
                        <li>Suva Nausori International Airport (SUV) — major domestic/international services.</li>
                        <li>Labasa & Savusavu — regional airports.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Fiji enjoys some of the best connectivity in the Pacific, with strong submarine cable presence
                        and an expanding domestic fibre footprint. Mobile broadband (4G/4.5G) covers most populated areas,
                        and early 5G trials and deployments are underway in urban centres.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">Type</th>
                              <th className="py-3 px-4 text-left font-semibold">Estimate</th>
                              <th className="py-3 px-4 text-left font-semibold">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Population (2025 est.)</td>
                              <td className="py-3 px-4">≈ 940,000</td>
                              <td className="py-3 px-4">Highly urbanised around Suva–Nausori corridor.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">High mobile penetration</td>
                              <td className="py-3 px-4">4G widespread; early 5G deployments in major towns.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Fijian dollar (FJD)</td>
                              <td className="py-3 px-4">Issued by the Reserve Bank of Fiji.</td>
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

        {/* Submarine Cables */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & Regional Links</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Fiji is a regional hub for Pacific undersea cables. Key systems connecting through or near Fiji include
                  Southern Cross related systems and regional interconnects that reduce latency to Australia, New Zealand and the United States.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/fiji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Fiji.png"
                      alt="Submarine cables serving Fiji"
                      className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* ISPs & Market */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers & Market</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The retail market is served by operators such as Vodafone Fiji, Digicel Fiji and Telecom Fiji (FINTEL).
                  Consumer access is dominated by mobile broadband, while fixed-line and enterprise services use a mix of fibre
                  and satellite for remote islands.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Suva and Nadi",
                    "DIA / IP transit via Australian & NZ PoPs",
                    "Hybrid last-mile (4G/4.5G + fixed-wireless) for island sites",
                    "CPE / Router staging, configuration and managed services",
                    "SLA-backed service with NOC monitoring and regional escalation",
                    "Traffic engineering to AU/NZ PoPs for latency-sensitive applications",
                    "Security services (VPN, firewalling, DDoS mitigation)",
                    "SD-WAN overlays for multi-island deployments",
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
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>.
              We support connectivity planning across Fiji's island hubs subject to submarine cable availability and local logistics.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Fiji%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a
                  href="https://www.worldometers.info/world-population/fiji-population/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Worldometers — Population estimates (2025)
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Fiji" target="_blank" rel="noopener noreferrer" className="underline">
                  Wikipedia — Fiji (overview)
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinecablemap.com/country/fiji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Cable Map — Fiji
                </a>
              </li>
              <li>
                <a href="https://www.vodafone.com.fj/" target="_blank" rel="noopener noreferrer" className="underline">
                  Vodafone Fiji — operator
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

export default Fiji;
