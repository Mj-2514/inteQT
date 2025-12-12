import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Nigeria: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Nigeria | Connectivity, ISPs & Broadband Overview",
    description:
      "Overview of Nigeria’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Lagos, Abuja, Port Harcourt, Kano and other key regions.",
    url: "https://www.inte-qt.com/coverage/nigeria",
    about: {
      "@type": "Country",
      name: "Nigeria",
      population: 240000000,
      currency: "NGN (Nigerian Naira)",
      languages: ["English", "Hausa", "Yoruba", "Igbo"],
      neighbouringCountries: ["Benin", "Niger", "Chad", "Cameroon"],
      majorCities: ["Lagos", "Abuja", "Kano", "Port Harcourt", "Ibadan"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Nigeria | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Nigeria’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Lagos, Abuja, Port Harcourt, Kano and other key regions."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/nigeria" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Internet in Nigeria | Connectivity, ISPs & Broadband Overview" />
        <meta property="og:description" content="Overview of Nigeria’s internet connectivity, submarine cable landings and national backbone routing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/nigeria" />
        {/* <meta property="og:image" content="https://www.inte-qt.com/assets/nigeria-hero-1200x630.jpg" /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internet in Nigeria | Connectivity & ISPs" />
        <meta name="twitter:description" content="Overview of Nigeria’s internet connectivity and regional backbone routes." />

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
            backgroundImage: 'url("https://i.imgur.com/sAoqVlf.jpg")'
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
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg leading-tight"
          >
            Internet in Nigeria
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-base md:text-lg mt-4 leading-relaxed"
          >
            A leading West African economy with a young, urbanising population, fast-growing digital services, and extensive mobile and fibre backbones linking Lagos, Abuja and coastal hubs to inland cities and regional corridors.
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
                      <li><strong>Population:</strong> ~240 million (2025 est.)</li>
                      <li><strong>Region:</strong> West Africa, Gulf of Guinea</li>
                      <li><strong>Capital:</strong> Abuja</li>
                      <li><strong>Largest City:</strong> Lagos</li>
                      <li><strong>Major Cities:</strong> Lagos, Abuja, Kano, Port Harcourt, Ibadan</li>
                      <li><strong>Language:</strong> English (official)</li>
                      <li><strong>Currency:</strong> Nigerian Naira (NGN)</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/ng.png"
                        alt="Flag of Nigeria"
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
                      Nigeria is a diversified, oil-producing economy and a major hub for finance, trade, media and technology in West Africa. Lagos is a key financial and digital-services centre, while Abuja is the political capital and Kano and Port Harcourt anchor regional activity.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      National connectivity is structured around coastal and inland backbones connecting Lagos, Abuja and other state capitals, with metro fibre and wireless networks densest in large cities and along major transport corridors.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Broadband adoption is growing rapidly as mobile networks expand and 5G pilots appear in key metros; fixed broadband and FTTH growth is concentrated in major urban centres.
                    </p>

                    {/* Map — responsive */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-xl overflow-hidden shadow-sm border border-white/10">
                        <div className="w-full aspect-[16/9]">
                          <iframe
                            title="Nigeria map"
                            src="https://www.google.com/maps?q=Nigeria&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            aria-label="Map showing Nigeria and major cities"
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
                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        Major airports and seaports generate high demand for resilient, low-latency connectivity across financial, energy and logistics sectors.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>Murtala Muhammed Intl. Airport (LOS) — Lagos</li>
                        <li>Nnamdi Azikiwe Intl. Airport (ABV) — Abuja</li>
                        <li>Port Harcourt Intl. Airport (PHC), Mallam Aminu Kano (KAN)</li>
                        <li>Lagos Ports Complex, Lekki Deep Sea Port, Port Harcourt & Onne</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border border-white/8 shadow-sm">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-xl font-bold mb-3">Connectivity & Internet Access</h3>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs" role="table" aria-label="Nigeria connectivity metrics">
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
                              <td className="py-2 px-2">≈110M+</td>
                              <td className="py-2 px-2">Penetration ~45–50%, growing</td>
                            </tr>
                            <tr className="border-t border-muted/30">
                              <td className="py-2 px-2">Broadband</td>
                              <td className="py-2 px-2">~50% (mixed)</td>
                              <td className="py-2 px-2">Mobile dominant; FTTH concentrated in metros</td>
                            </tr>
                            <tr className="border-t border-muted/30">
                              <td className="py-2 px-2">Mobile Networks</td>
                              <td className="py-2 px-2">3G/4G widespread; 5G emerging</td>
                              <td className="py-2 px-2">4G is the backbone of mobile data; 5G pilots in major cities</td>
                            </tr>
                            <tr className="border-t border-muted/30">
                              <td className="py-2 px-2">Enterprise</td>
                              <td className="py-2 px-2">DIA / IP-VPN / SD-WAN</td>
                              <td className="py-2 px-2">Strong enterprise demand in finance, oil & gas, manufacturing and media</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground text-xs mt-3 leading-relaxed">
                        Typical designs combine terrestrial fibre, metro rings and wireless/satellite backup to manage resilience and route diversity.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Submarine Cables & Capabilities */}
        <section className="py-10 md:py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-8">
            <Card className="rounded-2xl border border-white/8 shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Submarine Cables & National Backbone</h2>

                <p className="text-muted-foreground leading-relaxed mb-3">
                  Nigeria is connected by multiple submarine cables landing on the Gulf of Guinea, feeding national fibre backbones that extend inland and across regional corridors. These routes are key for low-latency regional transit and content delivery.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Metro rings and aggregation PoPs in Lagos, Abuja and other cities support data centres, IXPs and enterprise on-ramps, enabling cloud access, CDN and peering.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-white/8 shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Capabilities in Nigeria</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with national and regional carriers to deliver DIA, managed services, wireless last-mile, CPE staging, DDoS protection and SD-WAN solutions across Lagos, Abuja, Port Harcourt, Kano and other strategic locations.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Services</h3>

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
                  We can typically provide a commercial offer within <strong>2–4 working days</strong>; delivery timeline depends on site readiness and access technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Offer & References */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-base md:text-lg leading-relaxed mb-4 text-muted-foreground">
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. We support deployments across Lagos, Abuja, Port Harcourt, Kano and other major corridors.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-qt.com?subject=Nigeria%20Connectivity%20Inquiry" className="text-primary underline font-semibold">
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">Suggested References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>World Bank / ITU — Nigeria ICT & internet indicators</li>
              <li>Nigerian Communications Commission (NCC) reports & market statistics</li>
              <li>Submarine Cable Map — Gulf of Guinea systems</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Nigeria;
