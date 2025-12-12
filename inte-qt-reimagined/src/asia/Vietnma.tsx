import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Vietnam: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Vietnam | Connectivity, ISPs & Broadband Overview",
    url: "https://www.inte-qt.com/coverage/vietnam",
    description:
      "Overview of Vietnam’s internet connectivity, telecom operators, broadband and mobile penetration, submarine cables and inte-QT service capabilities in Hanoi, Ho Chi Minh City and Da Nang.",
    publisher: {
      "@type": "Organization",
      name: "inte-QT",
      url: "https://www.inte-qt.com",
    },
  };

  return (
    <>
      <Helmet>
        <title>Internet in Vietnam | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Vietnam’s internet connectivity, telecom operators, broadband and mobile penetration, submarine cables and inte-QT service capabilities in Hanoi, Ho Chi Minh City and Da Nang."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/vietnam" />

        {/* Open Graph */}
        <meta property="og:title" content="Internet in Vietnam | inte-QT" />
        <meta
          property="og:description"
          content="Overview of Vietnam’s internet connectivity, telecom operators, broadband and mobile penetration, submarine cables and inte-QT service capabilities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/vietnam" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internet in Vietnam | inte-QT" />
        <meta
          name="twitter:description"
          content="Connectivity, ISPs and submarine cable overview for Vietnam."
        />

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
            backgroundImage: 'url("https://i.imgur.com/wJ1x0q1.jpg")',
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
            Internet in Vietnam
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A fast-growing digital economy in Southeast Asia — powered by mobile
            broadband, expanding fibre networks, and a young, connected population.
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
                        <strong>Population:</strong> ~101 million (2024 est.)
                      </li>
                      <li>
                        <strong>Region:</strong> Southeast Asia; borders China, Laos, and Cambodia, with extensive coastline along the South China Sea.
                      </li>
                      <li>
                        <strong>Capital:</strong> Hanoi
                      </li>
                      <li>
                        <strong>Largest City:</strong> Ho Chi Minh City
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Hanoi, Ho Chi Minh City, Da Nang, Hai Phong, Can Tho
                      </li>
                      <li>
                        <strong>Official Language:</strong> Vietnamese
                      </li>
                      <li>
                        <strong>Currency:</strong> Vietnamese Dong (VND)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Manufacturing, electronics, garments, agriculture, seafood, tourism, ICT and business services
                      </li>
                      <li>
                        <strong>Population Online:</strong> ~78 million internet users (≈79% penetration, 2024)
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">Country Snapshot</h3>
                      <p className="text-xs text-muted-foreground">
                        With a young demographic profile and strong export-led growth, Vietnam has become one of Southeast Asia&apos;s most dynamic economies, rapidly scaling digital services, e-commerce and cloud adoption.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/vn.png"
                        alt="Vietnam Flag"
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
                      Vietnam is the third most populous country in Southeast Asia and has emerged as a major manufacturing and export hub, particularly in electronics, textiles, and consumer goods. Hanoi is the political capital, while Ho Chi Minh City is the financial and commercial engine.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Rapid urbanization and a young population have driven strong demand for mobile, broadband, and digital services. The government's focus on digital transformation and Industry 4.0 continues to accelerate cloud, fintech, and e-government initiatives.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Tourism, agriculture, logistics, and ICT services add to the country's diversified growth story, supported by strategic transport corridors, ports, and industrial zones.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Vietnam&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                          title="Map of Vietnam"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ports/Airports + Connectivity */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Airports & Ports */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Main Airports & Ports</h3>

                      <h4 className="font-semibold text-sm mb-2">Key International Airports</h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>Noi Bai International Airport (Hanoi)</li>
                        <li>Tan Son Nhat International Airport (Ho Chi Minh City)</li>
                        <li>Da Nang International Airport (Da Nang)</li>
                        <li>Cam Ranh International Airport (Nha Trang)</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">Major Seaports</h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Hai Phong Port</li>
                        <li>Saigon / Cat Lai Port (Ho Chi Minh City)</li>
                        <li>Da Nang Port</li>
                        <li>Cai Mep–Thi Vai Port Complex (Ba Ria–Vung Tau)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Connectivity / Internet Access */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity & Internet Access</h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        Vietnam is a mobile-first market with fast-growing fixed broadband. As of early 2024, there were roughly <strong>78.4 million internet users</strong>, equivalent to about <strong>79% internet penetration</strong> of the total population. Mobile data usage continues to be the main driver of telecom revenue.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">Metric</th>
                              <th className="py-3 px-4 text-left font-semibold">Status</th>
                              <th className="py-3 px-4 text-left font-semibold">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">~78.4 million (2024)</td>
                              <td className="py-3 px-4">≈79% of population online.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Social Media Users</td>
                              <td className="py-3 px-4">~72–73 million (2024)</td>
                              <td className="py-3 px-4">≈73% social media penetration.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">Tens of millions of lines</td>
                              <td className="py-3 px-4">Strong growth in FTTH, especially in major cities.</td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">4G nationwide; 5G expanding</td>
                              <td className="py-3 px-4">5G deployments led by major operators in key urban areas.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Telecom service revenue is projected to grow steadily, driven primarily by mobile data and fixed broadband segments.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Submarine Cables & Operators */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* Submarine Cables */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Submarine Cables & Regional Backbone</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Vietnam is connected to the global internet via multiple submarine cable systems in the Asia–Pacific region, linking it to Singapore, Hong Kong, Japan and onward to Europe and North America. These systems are critical for international bandwidth and low-latency connectivity.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Key systems include South-East Asia–Japan Cable (SJC / SJC2), Asia Pacific Gateway (APG), Asia-America Gateway (AAG), and newer high-capacity routes that enhance resilience and diversity. Domestic backbones then distribute this capacity along the north–south economic corridor and across regional hubs.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Combined with terrestrial cross-border links into neighbouring countries, these cable systems support Vietnam&apos;s fast-growing cloud, content, fintech, and outsourcing industries.
                </p>
              </CardContent>
            </Card>

            {/* ISPs & Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers & Market Landscape</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The Vietnamese telecom market is dominated by a handful of large operators, including Viettel, VNPT (VinaPhone), Mobifone, Vietnamobile, G-Mobile, and FPT Telecom. They offer nationwide mobile services alongside fixed broadband and enterprise connectivity.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Competition in fibre access and datacenter/connectivity services has intensified, especially in tier-1 cities, helping drive higher speeds and improved service quality for enterprises and consumers.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT delivers secure and scalable connectivity solutions across Vietnam, with service availability in key cities such as Hanoi, Ho Chi Minh City, Da Nang and major industrial clusters. We support customers in manufacturing, logistics, technology, finance, and outsourcing/BPO.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
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

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our Global Business Solutions team can typically provide a <strong>Commercial Offer within 2–4 working days</strong>, with delivery timelines dependent on local last-mile feasibility and site readiness.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Offer & References */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Contact us to receive a <mark className="bg-yellow-200 px-1 rounded">Commercial Offer in 2–4 working days</mark>. Our teams and local partners can typically deploy services in Hanoi, Ho Chi Minh City, Da Nang and other key regions within <span className="font-semibold">4–6 weeks</span>, subject to local access and site conditions.
            </p>

            <p className="mb-6">
              <a href="mailto:sales@inte-QT.com?subject=Mail from Our Site" className="text-primary underline font-semibold">
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References (suggested)</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>World Bank — Vietnam (ICT & digital indicators)</li>
              <li>DataReportal — Digital 2024: Vietnam</li>
              <li>Vietnam General Statistics Office (GSO)</li>
              <li>Ministry of Information and Communications, Vietnam</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Vietnam;
