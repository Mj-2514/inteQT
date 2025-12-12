import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const EquatorialGuinea: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Equatorial Guinea | Connectivity, ISPs & Broadband Overview",
    description:
      "Overview of Equatorial Guinea's internet connectivity, submarine/terrestrial routes, ISPs, broadband statistics and inte-QT service capabilities in Malabo, Bata, and other key centres.",
    url: "https://www.inte-qt.com/coverage/africa/equatorial-guinea",
    about: {
      "@type": "Country",
      name: "Equatorial Guinea",
      population: 1950000,
      currency: "XAF (Central African CFA franc)",
      languages: ["Spanish", "French", "Portuguese", "Fang", "Bubi"],
      neighbouringCountries: ["Cameroon", "Gabon"],
      majorCities: ["Malabo", "Bata", "Ebebiyín", "Mongomo", "Luba"],
      majorAirports: [
        "Malabo International Airport (SSG)",
        "Bata Airport (BSG)",
        "San Antonio de Annobón Airport (NDO)"
      ],
      url: "https://en.wikipedia.org/wiki/Equatorial_Guinea"
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Internet in Equatorial Guinea | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Overview of Equatorial Guinea's internet connectivity, submarine/terrestrial routes, ISPs, broadband statistics and inte-QT service capabilities in Malabo, Bata, and other key centres."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/africa/equatorial-guinea"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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
              'url("https://images.unsplash.com/photo-1700144068853-671567b77ea8?w=1200&auto=format&fit=crop&q=80")'
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1.5px]" aria-hidden />
        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Equatorial Guinea
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A small Gulf of Guinea state with island and mainland territories; connectivity centers on Malabo (Bioko Island)
            and Bata (mainland), with submarine and regional terrestrial links shaping international capacity.
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
                        <strong>Official Name:</strong> Republic of Equatorial Guinea
                      </li>
                      <li>
                        <strong>Population:</strong> ~1.9–2.0 million (2025 est.)
                      </li>
                      <li>
                        <strong>Capital &amp; Main Cities:</strong> Malabo (Bioko Island), Bata (mainland), Ebebiyín, Mongomo, Luba
                      </li>
                      <li>
                        <strong>Languages:</strong> Spanish (primary official), French, Portuguese; local languages include Fang &amp; Bubi
                      </li>
                      <li>
                        <strong>Currency:</strong> Central African CFA franc (XAF)
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/gq.png"
                        alt="Equatorial Guinea Flag"
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
                      Equatorial Guinea comprises a mainland region (Río Muni) plus islands (Bioko, Annobón). Malabo sits on Bioko Island while Bata is the principal commercial centre on the mainland. The economy is dominated by oil &amp; gas production, which has driven targeted infrastructure projects.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Internet access is concentrated around Malabo and Bata; submarine cable landings, limited national fibre and mobile broadband form the backbone of consumer and enterprise access. Wholesale transit and colocation activity is concentrated around port and oil infrastructure.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Equatorial Guinea"
                          src="https://www.google.com/maps?q=Equatorial%20Guinea&output=embed"
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
                        <li>Malabo International Airport (SSG)</li>
                        <li>Bata Airport (BSG)</li>
                        <li>San Antonio de Annobón Airport (NDO) — Annobón Island</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        The coastal position places Equatorial Guinea within Gulf of Guinea undersea network activity; landing stations and regional hubs provide international connectivity while national backhaul links connect island and mainland territories where possible. Mobile-first access is the norm for most residents.
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
                              <td className="py-3 px-4">≈ 1.9–2.0 million</td>
                              <td className="py-3 px-4">Market concentrated in a few urban centres.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile & Internet</td>
                              <td className="py-3 px-4">Mobile-first; fixed broadband limited</td>
                              <td className="py-3 px-4">Most consumer access via mobile data and urban fixed links.</td>
                            </tr>

                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Currency</td>
                              <td className="py-3 px-4">Central African CFA franc (XAF)</td>
                              <td className="py-3 px-4">Shared currency within BEAC region.</td>
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
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & International Routes</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Regional undersea networks and nearby landing stations feed Equatorial Guinea’s international connectivity. National backbone links connect Malabo and Bata where feasible; remote areas rely more on microwave and satellite.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.submarinecablemap.com/country/equatorial-guinea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Equatorial-Guinea.png"
                      alt="Submarine cables and international routes serving Equatorial Guinea"
                      className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                      loading="lazy"
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
                  Market activity is often concentrated among state-linked or specialist operators servicing oil &amp; gas, government and port infrastructure; retail mobile operators deliver most consumer access.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Feasibility & advisory for enterprise connectivity in Malabo & Bata",
                    "DIA / IP transit where landing / peering exists",
                    "Hybrid last-mile (4G/LTE + fixed-wireless)",
                    "CPE / Router staging, configuration & managed services",
                    "SLA-backed services with local escalation & NOC monitoring",
                    "Traffic engineering toward nearby regional hubs",
                    "Security services (VPN, firewalling, DDoS mitigation)",
                    "Regional SD-WAN overlays for multi-site deployments"
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
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. We support connectivity planning around Malabo, Bata and other feasible sites subject to local infrastructure and regulatory constraints.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-qt.com?subject=Equatorial%20Guinea%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground">
              <li>
                <a href="https://en.wikipedia.org/wiki/Equatorial_Guinea" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — Equatorial Guinea</a>
              </li>
              <li>
                <a href="https://www.submarinecablemap.com/country/equatorial-guinea" target="_blank" rel="noopener noreferrer" className="underline">Submarine Cable Map — Equatorial Guinea</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EquatorialGuinea;
