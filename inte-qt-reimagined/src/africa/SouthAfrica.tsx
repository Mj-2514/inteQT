import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const SouthAfrica: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in South Africa | Connectivity, ISPs & Broadband Overview",
    description:
      "Overview of South Africa’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Johannesburg, Cape Town, Durban and other key regions.",
    url: "https://www.inte-qt.com/coverage/southafrica",
    about: {
      "@type": "Country",
      name: "South Africa",
      population: 61000000,
      currency: "ZAR (South African Rand)",
      languages: [
        "English",
        "Afrikaans",
        "isiZulu",
        "isiXhosa",
        "Sesotho",
        "Others"
      ],
      neighbouringCountries: [
        "Namibia",
        "Botswana",
        "Zimbabwe",
        "Mozambique",
        "Eswatini",
        "Lesotho"
      ],
      majorCities: [
        "Johannesburg",
        "Cape Town",
        "Durban",
        "Pretoria",
        "Gqeberha"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in South Africa | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of South Africa’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Johannesburg, Cape Town, Durban and other key regions."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/southafrica" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Internet in South Africa | Connectivity, ISPs & Broadband Overview" />
        <meta property="og:description" content="Overview of South Africa’s internet connectivity and regional backbone routes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/southafrica" />
        {/* <meta property="og:image" content="https://www.inte-qt.com/assets/south-africa-hero-1200x630.jpg" /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internet in South Africa | Connectivity & ISPs" />
        <meta name="twitter:description" content="Overview of South Africa’s internet connectivity and data-centre ecosystem." />

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
            backgroundImage: 'url("https://i.imgur.com/MmiBXYe.png")'
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
            Internet in South Africa
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-base md:text-lg mt-4 leading-relaxed"
          >
            A diversified Southern African economy with mature telecom markets, extensive fibre and mobile broadband, and regional backbones linking Johannesburg, Cape Town and Durban to mining, industrial and cross-border corridors.
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
                      <li><strong>Population:</strong> ~61 million (2024 est.)</li>
                      <li><strong>Region:</strong> Southern Africa</li>
                      <li><strong>Capitals:</strong> Pretoria (admin), Cape Town (legislative), Bloemfontein (judicial)</li>
                      <li><strong>Largest Metro:</strong> Johannesburg (Gauteng)</li>
                      <li><strong>Languages:</strong> 11 official languages (English widely used)</li>
                      <li><strong>Currency:</strong> South African Rand (ZAR)</li>
                      <li><strong>Internet Penetration:</strong> ~70–75%</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/za.png"
                        alt="Flag of South Africa"
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
                      South Africa is a diversified economy and a regional hub for finance, industry and ICT. Dense metro fibre, multiple submarine cable landings and strong data-centre ecosystems make it one of Africa’s most connected countries.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      National connectivity uses long-haul fibre and metro rings connecting Gauteng, the Western and Eastern Capes, KwaZulu-Natal and other provinces. Mobile coverage is extensive (3G/4G) with growing 5G deployments; FTTH and fixed broadband are well established in metros and suburbs.
                    </p>

                    {/* Map — responsive */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-xl overflow-hidden shadow-sm border border-white/10">
                        <div className="w-full aspect-[16/9]">
                          <iframe
                            title="South Africa map"
                            src="https://www.google.com/maps?q=South%20Africa&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            aria-label="Map showing South Africa and major metros"
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
                        Major airports and seaports anchor demand for resilient connectivity across logistics, finance, mining and manufacturing.
                      </p>

                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>O. R. Tambo Intl. Airport (JNB)</li>
                        <li>Cape Town Intl. Airport (CPT)</li>
                        <li>King Shaka Intl. Airport (DUR)</li>
                        <li>Port of Durban, Port of Cape Town, Port of Ngqura, Richards Bay</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border border-white/8 shadow-sm">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-xl font-bold mb-3">Connectivity & Internet Access</h3>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs" role="table" aria-label="South Africa connectivity metrics">
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
                              <td className="py-2 px-2">≈45–50M</td>
                              <td className="py-2 px-2">~70–75% penetration; high smartphone adoption</td>
                            </tr>
                            <tr className="border-t border-muted/30">
                              <td className="py-2 px-2">Fixed Broadband</td>
                              <td className="py-2 px-2">Well developed in metros</td>
                              <td className="py-2 px-2">FTTH/FTTB and fixed wireless available in cities/suburbs</td>
                            </tr>
                            <tr className="border-t border-muted/30">
                              <td className="py-2 px-2">Mobile Networks</td>
                              <td className="py-2 px-2">3G/4G nationwide; 5G in metros</td>
                              <td className="py-2 px-2">4G forms the backbone of mobile data; 5G deployments expanding</td>
                            </tr>
                            <tr className="border-t border-muted/30">
                              <td className="py-2 px-2">Enterprise</td>
                              <td className="py-2 px-2">Strong across metros</td>
                              <td className="py-2 px-2">DIA, IP-VPN, SD-WAN, cloud connectivity & managed security</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground text-xs mt-3 leading-relaxed">
                        Designs typically combine diverse terrestrial fibre routes, metro rings and wireless/satellite backup for resilience and route diversity.
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
                  South Africa is a key landing point for submarine cables on both Atlantic and Indian Ocean coasts, integrated into national backbones that support regional transit, IXPs and data-centres.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Metro rings and regional aggregation PoPs in Johannesburg, Cape Town and Durban enable cloud on-ramps, CDN, peering and low-latency enterprise access.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-white/8 shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Capabilities in South Africa</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with local and regional carriers to deliver DIA, managed services, last-mile wireless, CPE staging, security (DDoS, VPN, firewalling) and SD-WAN solutions across South Africa’s metros and corridors.
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
                  Typical lead times vary by access and site readiness. We can provide a commercial offer within <strong>2–4 working days</strong>, and delivery estimates on request.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* COMMERCIAL OFFER & REFERENCES */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-base md:text-lg leading-relaxed mb-4 text-muted-foreground">
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. We support deployments across Johannesburg, Cape Town, Durban, Pretoria and other major corridors.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-qt.com?subject=South%20Africa%20Connectivity%20Inquiry" className="text-primary underline font-semibold">
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">Suggested References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>World Bank / ITU — South Africa ICT & internet indicators</li>
              <li>National telecom regulator and data-centre market reports</li>
              <li>Submarine Cable Map — regional cable systems</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SouthAfrica;
