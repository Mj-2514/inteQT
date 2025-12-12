import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Qatar: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Internet in Qatar | Connectivity, ISPs & Broadband Overview",
    "url": "https://www.inte-qt.com/coverage/qatar",
    "description": "Detailed overview of Qatar’s internet connectivity, fibre and 5G networks, ISPs, submarine cables, broadband statistics and inte-QT service capabilities across Doha, Al Rayyan, Al Wakrah and key economic zones.",
    "publisher": {
      "@type": "Organization",
      "name": "inte-QT",
      "url": "https://www.inte-qt.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.inte-qt.com/static/logo-120x60.png"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Qatar | Connectivity, ISPs & Broadband Overview</title>

        <meta
          name="description"
          content="Detailed overview of Qatar’s internet connectivity, fibre and 5G networks, ISPs, submarine cables, broadband statistics and inte-QT service capabilities across Doha, Al Rayyan, Al Wakrah and key economic zones."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/qatar" />

        {/* Open Graph */}
        <meta property="og:title" content="Internet in Qatar | Connectivity, ISPs & Broadband Overview" />
        <meta property="og:description" content="Qatar connectivity overview — fibre, 5G, ISPs, submarine cables and enterprise capabilities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/qatar" />
        <meta property="og:image" content="https://www.inte-qt.com/static/og-qatar-1200x630.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internet in Qatar | inte-QT" />
        <meta name="twitter:description" content="Fibre, 5G and enterprise internet in Qatar — Doha and major economic zones." />
        <meta name="twitter:image" content="https://www.inte-qt.com/static/og-qatar-1200x630.jpg" />

        {/* Structured data */}
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
            backgroundImage: 'url("https://i.imgur.com/jGLbisl.jpg")',
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1.5px]" aria-hidden="true" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Qatar
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A high-income Gulf state with near-universal internet access, dense mobile networks, and advanced fibre and data center infrastructure supporting a rapidly digitalizing economy.
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
                      <li><strong>Population:</strong> ~3.0 million (2024 estimate)</li>
                      <li><strong>Neighbors:</strong> Land border with Saudi Arabia; maritime proximity to Bahrain, UAE and Iran in the Gulf.</li>
                      <li><strong>Languages:</strong> Arabic (official); English widely used in business, government and services.</li>
                      <li><strong>Currency:</strong> Qatari Riyal (QAR)</li>
                      <li><strong>Key Industries:</strong> LNG & natural gas, petroleum, aviation, construction, finance, logistics, tourism, ICT.</li>
                      <li><strong>Major Cities:</strong> Doha (capital), Al Rayyan, Al Wakrah.</li>
                      <li><strong>Climate:</strong> Hot desert climate with very hot summers, mild winters, low annual rainfall.</li>
                      <li><strong>Digital Standing:</strong> Among the most connected countries globally with near-universal internet availability.</li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">Economic & Cultural Snapshot</h3>
                      <p className="text-xs text-muted-foreground">
                        Qatar combines large-scale LNG exports and financial services with growing sports, tourism and smart city initiatives — anchored by Doha as a regional hub for aviation, media, and digital infrastructure.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/qa.png"
                        alt="Qatar Flag"
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
                      Qatar is a small but strategically located Gulf state whose economy is driven by liquefied natural gas, hydrocarbons, aviation, and financial services. Over the last decade, it has invested heavily in digital infrastructure, smart city projects, and major sporting events, positioning Doha as a regional hub.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      With one of the highest GDP per capita levels worldwide, Qatar has achieved extremely high connectivity indicators: widespread fibre-to-the-home, advanced mobile networks, and near-universal internet access for residents and the large expatriate workforce.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Qatar&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                          title="Map of Qatar"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ports/Airports + Connectivity Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Airports & Ports */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Main Ports & Airports</h3>
                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        Modern air and sea gateways support both passenger flows and large-scale energy and container exports.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">Key Airports</h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>Hamad International Airport (Doha)</li>
                        <li>Doha International Airport (legacy / limited use)</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">Major Seaports</h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Hamad Port (main commercial seaport)</li>
                        <li>Ras Laffan Industrial Port (LNG exports)</li>
                        <li>Mesaieed Port (industrial & petrochemicals)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Connectivity / Internet Access */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        Qatar ranks among the most connected countries in the world. Internet penetration is effectively universal, and mobile subscriptions significantly exceed the total population, reflecting multiple SIM ownership and a highly digital lifestyle.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">Type</th>
                              <th className="py-3 px-4 text-left font-semibold">Indicator</th>
                              <th className="py-3 px-4 text-left font-semibold">Details (latest estimates)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">~2.7 million</td>
                              <td className="py-3 px-4">~99% of population online.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Cellular Subscriptions</td>
                              <td className="py-3 px-4">~150–160 per 100 people</td>
                              <td className="py-3 px-4">Multiple SIM ownership; very high mobile density.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">Very high household coverage</td>
                              <td className="py-3 px-4">Widespread fibre, especially in Doha and surrounding municipalities.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">4G & 5G nationwide</td>
                              <td className="py-3 px-4">5G services widely available in urban areas, with ongoing expansion.</td>
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

        {/* Submarine Cables & International Backbone */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* Submarine Cables */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & International Backbone</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Qatar’s international connectivity is anchored by multiple high-capacity submarine cable systems landing in and around Doha, complemented by regional terrestrial routes into the wider Gulf and onwards to Europe and Asia.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Systems connecting Qatar include regional Gulf cables, routes towards the UAE and Oman, as well as large multi-regional projects that link the Middle East with Africa, Europe and Asia. These cables provide diverse paths that improve resilience and reduce latency for cloud, content, and financial traffic.
                </p>

                <h3 className="font-semibold mb-3 text-lg">Example Cable Systems & Regional Links</h3>
                <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                  <li>Intra-Gulf systems connecting Qatar with the UAE and other GCC states.</li>
                  <li>Participation in multi-country systems extending to Europe, Africa, and South / East Asia.</li>
                  <li>New-build regional projects led by operators such as Ooredoo to increase capacity and route diversity.</li>
                </ul>

                <p className="text-muted-foreground mt-4 leading-relaxed text-sm">
                  Together with regional terrestrial networks, these cables underpin Qatar’s role as a secure, low-latency hub for digital services in the Gulf.
                </p>
              </CardContent>
            </Card>

            {/* ISPs & Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers & Market Landscape</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The Qatari telecom market is led by two major operators: Ooredoo Qatar and Vodafone Qatar. They provide nationwide mobile, fixed broadband, and enterprise services, including extensive 4G/5G coverage and FTTH offerings in and around Doha.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Robust regulatory oversight and infrastructure competition have helped drive high speeds and quality of service, making Qatar one of the leading countries globally in ICT adoption and network readiness.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT delivers enterprise-grade connectivity solutions across Qatar, serving sectors including energy, finance, aviation, government, healthcare, education and media. Our services are designed for high availability, low latency, and strong security.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity (4G/5G last mile)",
                    "Service Level Agreements (SLA)",
                    "Customer Premises Equipment (CPE) / Routers",
                    "Global Enterprise Management Solutions (GEMS)",
                    "Diverse Gateway Solutions",
                    "Distributed Denial of Service (DDoS) Protection",
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

        {/* Commercial Offer & References */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. Our Global Business Solutions and Operations teams can typically deliver services across Doha, Al Rayyan, Al Wakrah and key industrial and logistics zones within <span className="font-semibold">3–6 weeks</span>, depending on last-mile access and site conditions.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-QT.com?subject=Mail from Our Site" className="text-primary underline font-semibold">Email Us</a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li><a href="https://data.worldbank.org/country/qatar" target="_blank" rel="noopener noreferrer" className="underline">World Bank — Qatar</a></li>
              <li><a href="https://datareportal.com/reports/digital-2024-qatar" target="_blank" rel="noopener noreferrer" className="underline">Digital 2024 — Qatar</a></li>
              <li><a href="https://www.cra.gov.qa/" target="_blank" rel="noopener noreferrer" className="underline">Communications Regulatory Authority (CRA) Qatar</a></li>
              <li><a href="https://www.ooredoo.qa/" target="_blank" rel="noopener noreferrer" className="underline">Ooredoo Qatar</a></li>
              <li><a href="https://www.vodafone.qa/" target="_blank" rel="noopener noreferrer" className="underline">Vodafone Qatar</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Qatar;
