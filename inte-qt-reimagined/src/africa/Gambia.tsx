import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Gambia: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in The Gambia | Connectivity, ISPs & Broadband Overview",
    description:
      "Overview of The Gambia's internet connectivity, submarine cable access, ISPs, broadband landscape and inte-QT capabilities in Banjul, Serrekunda and other key hubs.",
    url: "https://www.inte-qt.com/coverage/africa/gambia",
    about: {
      "@type": "Country",
      name: "The Gambia",
      population: 2850000,
      currency: "GMD (Gambian dalasi)",
      languages: ["English", "Mandinka", "Wolof", "Fula"],
      neighbouringCountries: ["Senegal"],
      majorCities: ["Banjul", "Serrekunda", "Brikama", "Bakau"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in The Gambia | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of The Gambia's internet connectivity, submarine cable access, ISPs, broadband landscape and inte-QT capabilities in Banjul, Serrekunda and other key hubs."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/gambia" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Internet in The Gambia | Connectivity, ISPs & Broadband Overview" />
        <meta property="og:description" content="Overview of The Gambia's internet connectivity, submarine cable access, ISPs, broadband landscape and inte-QT capabilities in Banjul, Serrekunda and other key hubs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/africa/gambia" />
        {/* <meta property="og:image" content="https://www.inte-qt.com/assets/gambia-share-1200x630.jpg" /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internet in The Gambia | Connectivity & ISPs" />
        <meta name="twitter:description" content="Overview of The Gambia's internet connectivity and submarine/terrestrial routes." />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative py-20 md:py-28 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1621862681356-eda413727d27?w=1600&auto=format&fit=crop&q=80")'
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg leading-tight"
          >
            Internet in The Gambia
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg md:text-xl mt-4 leading-relaxed"
          >
            A small West African nation with Atlantic submarine cable access, growing 4G coverage, and connectivity centred around Banjul and Serrekunda.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* LEFT — KEY FACTS */}
              <motion.aside
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <Card className="backdrop-blur-xl bg-white/80 dark:bg-black/30 rounded-2xl border border-white/10 shadow">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-4">Key Facts</h2>

                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                      <li><strong>Official Name:</strong> Republic of The Gambia</li>
                      <li><strong>Population:</strong> ≈ 2.8–2.9 million (2025 est.)</li>
                      <li><strong>Capital & Main Cities:</strong> Banjul, Serrekunda, Brikama, Bakau</li>
                      <li><strong>Languages:</strong> English (official); Mandinka, Wolof, Fula</li>
                      <li><strong>Currency:</strong> Gambian dalasi (GMD)</li>
                      <li><strong>Neighbours:</strong> Surrounded by Senegal (plus Atlantic coast)</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/gm.png"
                        alt="Flag of The Gambia"
                        className="mx-auto rounded-md shadow-md border border-white/30 max-w-[180px]"
                        loading="lazy"
                        width={180}
                        height={120}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.aside>

              {/* RIGHT — MAIN CONTENT */}
              <motion.article
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-8"
              >
                {/* Overview */}
                <Card className="rounded-2xl shadow border border-white/8">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">A Brief Overview</h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The Gambia is a narrow West African nation centred along the Gambia River, with connectivity heavily focused on its Atlantic urban belt. Mobile broadband dominates consumer access, with 4G widely adopted and new backbone projects improving resilience.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      International capacity is achieved mainly through the Africa Coast to Europe (ACE) submarine cable landing near Banjul, supported by terrestrial backhaul towards major population centres.
                    </p>

                    {/* Map — responsive */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-xl overflow-hidden shadow-sm border border-white/10">
                        <div className="w-full aspect-[16/9]">
                          <iframe
                            title="Map of The Gambia"
                            src="https://www.google.com/maps?q=The%20Gambia&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            aria-label="Map showing The Gambia and main cities"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Airports + Connectivity Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="rounded-2xl border border-white/8 shadow-sm">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-xl font-bold mb-3">Main Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Banjul International Airport (BJL) — main international gateway</li>
                        <li>Minor regional airstrips support domestic and NGO operations</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border border-white/8 shadow-sm">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-xl font-bold mb-3">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Mobile-first market with limited fixed broadband outside dense urban zones. Operators rely on ACE for international bandwidth while microwave and fibre projects extend capacity inland.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm" role="table" aria-label="Connectivity estimates and notes">
                          <thead>
                            <tr className="bg-muted/20">
                              <th className="py-3 px-3 text-left font-semibold">Type</th>
                              <th className="py-3 px-3 text-left font-semibold">Estimate</th>
                              <th className="py-3 px-3 text-left font-semibold">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/30">
                              <td className="py-3 px-3">Population (2025 est.)</td>
                              <td className="py-3 px-3">≈ 2.8–2.9 million</td>
                              <td className="py-3 px-3">Urban concentration in Banjul–Serrekunda corridor.</td>
                            </tr>

                            <tr className="border-t border-muted/30">
                              <td className="py-3 px-3">Mobile & Internet</td>
                              <td className="py-3 px-3">Mobile-first; growing 4G availability</td>
                              <td className="py-3 px-3">ACE submarine cable supports most international traffic.</td>
                            </tr>

                            <tr className="border-t border-muted/30">
                              <td className="py-3 px-3">Currency</td>
                              <td className="py-3 px-3">Gambian dalasi (GMD)</td>
                              <td className="py-3 px-3">Issued by the Central Bank of The Gambia.</td>
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
        <section className="py-10 md:py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-8">
            <Card className="rounded-2xl border border-white/8 shadow">
              <CardContent className="p-6 md:p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Submarine Cables & Regional Links</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
                  The Gambia benefits from the ACE submarine cable landing, which provides international connectivity to Europe and regional aggregation points. Terrestrial links then distribute capacity into Banjul, Serrekunda and inland towns.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/gambia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full max-w-3xl"
                    aria-label="Submarine cable map for The Gambia"
                  >
                    <img
                      src="/Gambia.png"
                      alt="Submarine cables serving The Gambia"
                      className="rounded-xl shadow-lg border border-white/20 w-full h-auto"
                      loading="lazy"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* ISPs & Market */}
            <Card className="rounded-2xl border border-white/8 shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Internet Providers & Market</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The retail market is served by operators such as Gamtel, Africell and QCell. Mobile broadband is the dominant access method; fixed broadband and enterprise services are usually concentrated in urban and commercial centres.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Banjul and Serrekunda",
                    "DIA / IP transit via Atlantic PoPs and regional partners",
                    "Hybrid last-mile (4G + fixed-wireless) for sites without fibre",
                    "CPE / Router staging, configuration and ongoing management",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards Atlantic PoPs for optimal routing",
                    "Security services (VPN, firewalling, DDoS mitigation) for enterprise workloads",
                    "Regional SD-WAN overlay designs for multi-site deployments"
                  ].map((cap) => (
                    <div key={cap} className="flex items-start space-x-3 bg-card/40 backdrop-blur-md p-3 rounded-lg border border-white/10 shadow-sm">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" aria-hidden />
                      <div className="text-sm">{cap}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Offer */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>.
              We support connectivity planning around Banjul, Serrekunda and other feasible sites subject to landing station access and local logistics.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-qt.com?subject=Gambia%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1">
              <li><a href="https://www.worldometers.info/world-population/gambia-population/" target="_blank" rel="noopener noreferrer" className="underline">Worldometers — Population estimates (2025)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/The_Gambia" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — The Gambia</a></li>
              <li><a href="https://www.submarinecablemap.com/country/gambia" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — The Gambia</a></li>
              <li><a href="https://www.gamtel.gm/" target="_blank" rel="noopener noreferrer" className="underline">Gamtel — operator</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Gambia;
