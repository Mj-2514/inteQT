import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Ethiopia = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Ethiopia | Connectivity, ISPs & Broadband Overview",
    description:
      "Overview of Ethiopia's internet connectivity, terrestrial and regional submarine routes, ISPs, broadband statistics and inte-QT service capabilities in Addis Ababa, Dire Dawa and other key centres.",
    url: "https://www.inte-qt.com/coverage/africa/ethiopia",
    about: {
      "@type": "Country",
      name: "Ethiopia",
      population: 135000000,
      currency: "ETB (Ethiopian birr)",
      languages: ["Amharic", "Oromo", "Tigrinya", "Somali"],
      neighbouringCountries: ["Eritrea", "Djibouti", "Somalia", "Kenya", "South Sudan", "Sudan"],
      majorCities: ["Addis Ababa", "Dire Dawa", "Mekelle", "Bahir Dar", "Gondar"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Ethiopia | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Ethiopia's internet connectivity, terrestrial and regional submarine routes, ISPs, broadband statistics and inte-QT service capabilities in Addis Ababa, Dire Dawa and other key centres."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/ethiopia" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph (recommend adding more fields if you want previews on social) */}
        <meta property="og:title" content="Internet in Ethiopia | Connectivity, ISPs & Broadband Overview" />
        <meta property="og:description" content="Overview of Ethiopia's internet connectivity, terrestrial and regional submarine routes, ISPs, broadband statistics and inte-QT service capabilities in Addis Ababa, Dire Dawa and other key centres." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/africa/ethiopia" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative py-20 md:py-28 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1572888195250-3037a59d3578?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXRoaW9waWF8ZW58MHwwfDB8fHwy")'
          }}
          aria-hidden
        />

        <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" aria-hidden />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg leading-tight"
          >
            Internet in Ethiopia
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg md:text-xl mt-4 leading-relaxed"
          >
            A populous Horn of Africa country with rapidly evolving telecoms; Ethiopia combines a large domestic market, a major aviation hub in Addis Ababa and growing competition following recent liberalisation.
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
                      <li>
                        <strong>Official Name:</strong> Federal Democratic Republic of Ethiopia
                      </li>
                      <li>
                        <strong>Population:</strong> ≈ 135–137 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Addis Ababa, Dire Dawa, Mekelle, Bahir Dar, Gondar
                      </li>
                      <li>
                        <strong>Languages:</strong> Amharic, Oromo, Tigrinya, Somali
                      </li>
                      <li>
                        <strong>Currency:</strong> Ethiopian birr (ETB)
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/et.png"
                        alt="Flag of Ethiopia"
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
                      Ethiopia is one of Africa's largest markets by population and has undergone significant telecom reforms since 2021. The incumbent, Ethio Telecom, remains a major operator but new entrants (including Safaricom Ethiopia) are expanding mobile coverage and introducing competition.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      International connectivity relies on terrestrial fibre to Djibouti (the principal landing point for undersea cables), supplemented by satellite and cross-border links. Addis Ababa serves as a key regional PoP and datacentre hub.
                    </p>

                    {/* Map — RESPONSIVE */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-xl overflow-hidden shadow-sm border border-white/10">
                        <div className="w-full aspect-[16/9]">
                          <iframe
                            title="Map of Ethiopia"
                            src="https://www.google.com/maps?q=Ethiopia&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            aria-label="Map showing Ethiopia"
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
                        <li>
                          Addis Ababa Bole International Airport (ADD) — major African aviation hub via Ethiopian Airlines
                        </li>
                        <li>Dire Dawa Airport — important regional airport</li>
                        <li>Bahir Dar, Mekelle and Gondar — regional airports serving northern and western zones</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border border-white/8 shadow-sm">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-xl font-bold mb-3">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Ethiopia's international capacity primarily transits via Djibouti landing stations which host multiple submarine cables. Domestically, fibre backhaul connects major cities, while mobile broadband (4G and expanding LTE/5G pilots) provides most consumer access.
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
                              <td className="py-3 px-3">≈ 135–137 million</td>
                              <td className="py-3 px-3">Large and young population with increasing urbanisation.</td>
                            </tr>

                            <tr className="border-t border-muted/30">
                              <td className="py-3 px-3">Mobile & Internet</td>
                              <td className="py-3 px-3">Rapidly growing mobile subscribers; fixed broadband limited</td>
                              <td className="py-3 px-3">New market entrants are expanding coverage and services.</td>
                            </tr>

                            <tr className="border-t border-muted/30">
                              <td className="py-3 px-3">Currency</td>
                              <td className="py-3 px-3">Ethiopian birr (ETB)</td>
                              <td className="py-3 px-3">Managed by the National Bank; FX reforms in 2024.</td>
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
        <section className="py-10 md:py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-8">
            <Card className="rounded-2xl border border-white/8 shadow">
              <CardContent className="p-6 md:p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Submarine Cables & International Routes</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
                  Ethiopia accesses multiple submarine cable systems via terrestrial links to Djibouti. These regional undersea networks (and their PoPs in Djibouti) provide the bulk of international transit for Ethiopian ISPs and enterprise customers.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full max-w-3xl"
                    aria-label="View the submarine cable map"
                  >
                    <img
                      src="/Ethiopia.png"
                      alt="Regional transit and submarine cable access for Ethiopia"
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
                  The telecom market is transitioning from monopoly to a competitive landscape. Ethio Telecom remains the dominant national operator, while new entrants such as Safaricom Ethiopia have introduced mobile competition and expanded subscriber choice since 2022.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Feasibility and advisory for enterprise connectivity in Addis Ababa and regional hubs",
                    "DIA / IP transit options via Djibouti PoPs and regional partners",
                    "Hybrid last-mile (4G/LTE + fixed-wireless) for sites without fibre",
                    "CPE / Router staging, configuration and ongoing management",
                    "SLA-backed services with local escalation and NOC monitoring",
                    "Traffic engineering towards Djibouti and Gulf PoPs for improved latency",
                    "Security services (VPN, firewalling, DDoS mitigation) for enterprise workloads",
                    "Regional SD-WAN overlay designs for multi-site deployments"
                  ].map((cap) => (
                    <div
                      key={cap}
                      className="flex items-start space-x-3 bg-card/40 backdrop-blur-md p-3 rounded-lg border border-white/10 shadow-sm"
                    >
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
              We support connectivity planning around Addis Ababa, Dire Dawa and other feasible sites subject to regional transit and regulatory conditions.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-qt.com?subject=Ethiopia%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>
                <a href="https://www.worldometers.info/world-population/ethiopia-population/" target="_blank" rel="noopener noreferrer" className="underline">
                  Worldometers — Population estimates (2025)
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Ethiopia" target="_blank" rel="noopener noreferrer" className="underline">
                  Wikipedia — Ethiopia (overview)
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Addis_Ababa_Bole_International_Airport" target="_blank" rel="noopener noreferrer" className="underline">
                  Addis Ababa Bole International Airport — details
                </a>
              </li>
              <li>
                <a href="https://www.submarinecablemap.com/" target="_blank" rel="noopener noreferrer" className="underline">
                  Submarine Cable Map — regional cable overview (via Djibouti)
                </a>
              </li>
              <li>
                <a href="https://www.ethiotelecom.et/" target="_blank" rel="noopener noreferrer" className="underline">
                  Ethio Telecom — national operator
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

export default Ethiopia;
