// src/pages/China.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const China: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in China | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of China’s internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities across major hubs like Beijing, Shanghai, Guangzhou and Shenzhen.",
    url: "https://www.inte-qt.com/coverage/asia/china",
    about: {
      "@type": "Country",
      name: "China",
      population: 1420000000,
      currency: "CNY (Renminbi)",
      languages: ["Standard Mandarin", "Cantonese", "regional languages"],
      majorCities: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in China | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of China’s internet connectivity, fiber routes, ISPs, broadband statistics and inte-QT service capabilities across major hubs like Beijing, Shanghai, Guangzhou and Shenzhen."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/asia/china" />

        {/* Open Graph */}
        <meta property="og:title" content="Internet in China | Connectivity, ISPs & Broadband Overview" />
        <meta
          property="og:description"
          content="China: nationwide fiber and 5G, large cloud & IX corridors, and unique regulatory considerations for cross-border services."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/asia/china" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1517309230475-6736d926b979?w=1200&auto=format&fit=crop&q=80" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internet in China | inte-QT" />
        <meta
          name="twitter:description"
          content="Nationwide fiber, extensive 4G/5G and major coastal cable landings — connectivity insights for enterprise and wholesale."
        />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1517309230475-6736d926b979?w=1200&auto=format&fit=crop&q=80" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative py-28 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1517309230475-6736d926b979?w=1200&auto=format&fit=crop&q=80")',
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1.5px]" aria-hidden="true" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in China
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A hyper-connected digital giant where fiber, 5G and platforms at national scale power one of the largest internet ecosystems on Earth.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background" id="main">
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
                      <li><strong>Population:</strong> ~1.42 billion (2025)</li>
                      <li><strong>Neighbors:</strong> Russia, Mongolia, DPRK, Vietnam, Laos, Myanmar, India, Pakistan, Nepal, Bhutan, Afghanistan, Tajikistan, Kyrgyzstan, Kazakhstan</li>
                      <li><strong>Languages:</strong> Standard Mandarin, Cantonese, regional languages</li>
                      <li><strong>Currency:</strong> Chinese yuan (CNY)</li>
                      <li><strong>Major Cities:</strong> Beijing, Shanghai, Guangzhou, Shenzhen, Chengdu, Chongqing</li>
                    </ul>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/cn.png"
                        alt="China flag"
                        className="mx-auto rounded-lg shadow-lg border border-white/40"
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
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-10"
              >
                <Card className="rounded-3xl shadow-xl border border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">A Brief Overview</h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      China spans deserts, plateaus and dense coastal megacities – and its connectivity footprint mirrors that scale.
                      It is home to the world's largest online population, with nationwide fiber rollouts, extensive 4G/5G networks and major cloud & IX corridors.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Traffic is also tightly controlled by national regulations. Enterprises should factor in robust infrastructure plus compliance and cross-border restrictions when planning deployments.
                    </p>

                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="China Map"
                          src="https://www.google.com/maps?q=China&output=embed"
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
                        <li>Beijing Capital Intl. (PEK)</li>
                        <li>Beijing Daxing Intl. (PKX)</li>
                        <li>Shanghai Pudong Intl. (PVG)</li>
                        <li>Shanghai Hongqiao Intl. (SHA)</li>
                        <li>Guangzhou Baiyun Intl. (CAN)</li>
                        <li>Shenzhen Bao'an Intl. (SZX)</li>
                        <li>Chengdu Tianfu / Shuangliu</li>
                        <li>Chongqing Jiangbei Intl. (CKG)</li>
                        <li>Hong Kong Intl. (HKG)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Dense fiber between coastal cities, widespread 4G/5G coverage and major IX/cloud regions make China a top-tier connectivity market — with regulatory constraints for cross-border traffic.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">Type</th>
                              <th className="py-3 px-4 text-left font-semibold">Users / Lines</th>
                              <th className="py-3 px-4 text-left font-semibold">Penetration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Cellular Mobile Connections</td>
                              <td className="py-3 px-4">1.87 billion</td>
                              <td className="py-3 px-4">~132%</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">≈1.11 billion</td>
                              <td className="py-3 px-4">~78%</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband Subscriptions</td>
                              <td className="py-3 px-4">≈380 million</td>
                              <td className="py-3 px-4">~27 per 100 inhabitants</td>
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

        {/* Submarine Cable */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & Internet Backbone</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  China’s international capacity is concentrated on the eastern and southern seaboard, with landing stations connecting to pan-Asian and trans-Pacific cable systems via Shanghai, Hong Kong, Qingdao and other coastal hubs.
                </p>

                <div className="flex justify-center">
                  <a href="https://www.submarinecablemap.com/country/china" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img
                      src="/China.png"
                      alt="Submarine Cables China"
                      className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
                      loading="lazy"
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
                  Major carriers: <span className="font-medium">China Telecom</span>, <span className="font-medium">China Mobile</span>, <span className="font-medium">China Unicom</span>, plus regional operators and cloud/CDN providers.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "MPLS / SD-WAN Integrations",
                    "Wireless & 5G Last-Mile Options",
                    "SLA-backed Services",
                    "CPE / Router Deployment & Management",
                    "Redundant Routing via Multiple Coastal Gateways",
                    "DDoS Protection & Traffic Scrubbing",
                  ].map((cap) => (
                    <div key={cap} className="flex items-start space-x-3 bg-card/40 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow">
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
              Our local delivery and partner ecosystem allow us to turn up services across Beijing, Shanghai, Guangzhou, Shenzhen and other hubs.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-QT.com?subject=China%20Coverage%20Inquiry" className="text-primary underline font-semibold">
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1">
              <li><a href="https://datareportal.com/reports/digital-2025-china" target="_blank" rel="noopener noreferrer" className="underline">DataReportal — Digital 2025: China</a></li>
              <li><a href="https://data.worldbank.org/indicator/IT.NET.BBND.P2?locations=CN" target="_blank" rel="noopener noreferrer" className="underline">World Bank — China ICT Indicators</a></li>
              <li><a href="https://www.cnnic.cn" target="_blank" rel="noopener noreferrer" className="underline">CNNIC — China Internet Network Information Center</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default China;
