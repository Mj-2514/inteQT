import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Mozambique: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Mozambique | Connectivity, ISPs & Broadband Overview",
    description:
      "Overview of Mozambique’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Maputo, Beira, Nampula, Tete and other key regions.",
    url: "https://www.inte-qt.com/coverage/mozambique",
    about: {
      "@type": "Country",
      name: "Mozambique",
      population: 33000000,
      currency: "MZN (Mozambican metical)",
      languages: ["Portuguese", "Emakhuwa", "Tsonga", "Makhuwa", "Others"],
      neighbouringCountries: ["Tanzania", "Malawi", "Zambia", "Zimbabwe", "Eswatini", "South Africa"],
      majorCities: ["Maputo", "Matola", "Beira", "Nampula", "Tete", "Nacala", "Pemba"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Mozambique | Connectivity, ISPs & Broadband Overview</title>

        <meta
          name="description"
          content="Overview of Mozambique’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Maputo, Beira, Nampula, Tete and other key regions."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/mozambique" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Internet in Mozambique | Connectivity, ISPs & Broadband Overview" />
        <meta property="og:description" content="Overview of Mozambique’s internet connectivity, submarine cable and backbone routes, and inte-QT capabilities in Maputo, Beira and other regions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/mozambique" />
        {/* <meta property="og:image" content="https://www.inte-qt.com/assets/mozambique-hero-1200x630.jpg" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internet in Mozambique | Connectivity & ISPs" />
        <meta name="twitter:description" content="Overview of Mozambique’s internet connectivity, submarine cable landings and backbone routing." />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative py-20 md:py-28 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://i.imgur.com/0nJcdAY.jpg")'
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg leading-tight"
          >
            Internet in Mozambique
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-base md:text-lg mt-4 leading-relaxed"
          >
            A coastal Southern African economy on the Indian Ocean with strategic ports and growing fibre & mobile coverage connecting Maputo, Beira, Nampula, Tete and other hubs.
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
                      <li><strong>Population:</strong> ~33 million (2024 est.)</li>
                      <li><strong>Region:</strong> Southern/Eastern Africa, Indian Ocean coast</li>
                      <li><strong>Capital:</strong> Maputo</li>
                      <li><strong>Major Cities:</strong> Maputo, Matola, Beira, Nampula, Tete, Nacala, Pemba</li>
                      <li><strong>Language:</strong> Portuguese (official)</li>
                      <li><strong>Currency:</strong> Mozambican metical (MZN)</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/mz.png"
                        alt="Flag of Mozambique"
                        className="mx-auto rounded-md shadow-md border border-white/30 max-w-[160px]"
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
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-8"
              >
                <Card className="rounded-2xl shadow border border-white/8">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">A Brief Overview</h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Mozambique's economy is anchored in natural resources, ports and corridor logistics. Population and investment concentrate around Maputo, Beira and Nacala corridors, which shape backbone and metro network planning.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Mobile broadband (3G/4G) is the primary access method for most users; fixed broadband and FTTH are expanding in cities. Network designs blend submarine & terrestrial fibre, microwave and satellite to match geography and project needs.
                    </p>

                    {/* Map — responsive */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-xl overflow-hidden shadow-sm border border-white/10">
                        <div className="w-full aspect-[16/9]">
                          <iframe
                            title="Map of Mozambique"
                            src="https://www.google.com/maps?q=Mozambique&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            aria-label="Map showing Mozambique and major cities"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="rounded-2xl border border-white/8 shadow-sm">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-xl font-bold mb-3">Main Airports & Ports</h3>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                        International airports and deep-water ports are critical demand anchors for resilient, high-capacity connectivity.
                      </p>

                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>Maputo Intl. Airport (MPM)</li>
                        <li>Beira Airport (BEW)</li>
                        <li>Nampula (APL), Pemba (POL), Tete (TET)</li>
                        <li>Port of Maputo, Port of Beira, Port of Nacala, Port of Pemba</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border border-white/8 shadow-sm">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-xl font-bold mb-3">Connectivity & Internet Access</h3>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs" role="table" aria-label="Mozambique connectivity metrics">
                          <thead>
                            <tr className="bg-muted/20">
                              <th className="py-2 px-2 text-left font-semibold">Metric</th>
                              <th className="py-2 px-2 text-left font-semibold">Status</th>
                              <th className="py-2 px-2 text-left font-semibold">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/30">
                              <td className="py-2 px-2">Internet Users</td>
                              <td className="py-2 px-2">≈ 8–10M</td>
                              <td className="py-2 px-2">~25–30% penetration; mostly mobile</td>
                            </tr>
                            <tr className="border-t border-muted/30">
                              <td className="py-2 px-2">Fixed Broadband</td>
                              <td className="py-2 px-2">Limited</td>
                              <td className="py-2 px-2">Focused in Maputo, Beira, Nampula; FTTH expanding slowly</td>
                            </tr>
                            <tr className="border-t border-muted/30">
                              <td className="py-2 px-2">Mobile Networks</td>
                              <td className="py-2 px-2">2G/3G/4G (growing)</td>
                              <td className="py-2 px-2">4G drives most data; 5G pilots rare</td>
                            </tr>
                            <tr className="border-t border-muted/30">
                              <td className="py-2 px-2">Enterprise</td>
                              <td className="py-2 px-2">DIA / IP-VPN / SD-WAN</td>
                              <td className="py-2 px-2">Focus on ports, mining & energy sites; satellite/wireless for remote/offshore</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground text-xs mt-3 leading-relaxed">
                        Designs typically combine submarine & terrestrial fibre with microwave and satellite for resilience and reach.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* SUBMARINE CABLES & CAPABILITIES */}
        <section className="py-10 md:py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-8">
            <Card className="rounded-2xl border border-white/8 shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Submarine Cables & National Backbone</h2>

                <p className="text-muted-foreground leading-relaxed mb-3">
                  Mozambique connects to international networks via Indian Ocean submarine systems and coastal landings. National backbone corridors (Maputo, Beira, Nacala) backhaul capacity inland and toward neighbouring markets.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Metro networks around major cities support datacentres, carrier PoPs and enterprise on-ramps for cloud/peering, while SD-WAN and managed services help deliver consistent performance across multi-site deployments.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-white/8 shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Capabilities</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with local and regional operators to provide DIA, managed services, last-mile wireless, CPE staging, security (DDoS, VPN, firewalling) and SD-WAN solutions for Mozambique’s ports, projects and enterprises.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Fixed-wireless / 4G/5G last mile",
                    "SLA-backed managed services",
                    "CPE staging & logistics",
                    "DDoS protection & security",
                    "Traffic engineering & routing",
                    "Regional SD-WAN solutions"
                  ].map((s) => (
                    <div key={s} className="flex items-start space-x-3 bg-card/40 backdrop-blur-md p-2 rounded-lg border border-white/10 shadow-sm">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" aria-hidden />
                      <div className="text-sm">{s}</div>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  Typical lead times vary by access and site readiness. We can provide a commercial offer within <strong>2–4 working days</strong> and delivery estimates on request depending on region and technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* COMMERCIAL OFFER & REFERENCES */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-base md:text-lg leading-relaxed mb-4 text-muted-foreground">
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. We support deployments across Maputo, Beira, Nampula, Nacala, Tete, Pemba and other corridors.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-qt.com?subject=Mozambique%20Connectivity%20Inquiry" className="text-primary underline font-semibold">
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">Suggested References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>World Bank / ITU — Mozambique ICT & internet indicators</li>
              <li>National telecom regulator reports and market analyses</li>
              <li>Submarine Cable Map — regional cable systems</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Mozambique;
