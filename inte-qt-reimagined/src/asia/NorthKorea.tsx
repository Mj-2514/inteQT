// src/pages/NorthKorea.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const NorthKorea = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in North Korea | Connectivity, ISPs & Network Overview",
    description:
      "Overview of North Korea’s highly restricted internet connectivity, limited international links, state-controlled networks and connectivity landscape.",
    url: "https://www.inte-qt.com/coverage/asia/north-korea",
    about: {
      "@type": "Country",
      name: "North Korea",
      alternateName: "Democratic People’s Republic of Korea",
      population: 26000000,
      currency: "KPW (North Korean Won)",
      languages: ["Korean"],
      neighbouringCountries: ["China", "South Korea", "Russia"],
      majorCities: ["Pyongyang", "Hamhung", "Chongjin"],
      climate: "Continental; cold winters and warm summers",
      nationalSport: "Football",
      touristsPerYear: "Very limited"
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Internet in North Korea | Connectivity, ISPs & Network Overview
        </title>
        <meta
          name="description"
          content="Overview of North Korea’s internet connectivity, state-controlled networks, limited international links and restricted access environment."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/asia/north-korea"
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Internet in North Korea | Connectivity, ISPs & Network Overview"
        />
        <meta
          property="og:description"
          content="Overview of North Korea’s restricted internet infrastructure and international connectivity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.inte-qt.com/coverage/asia/north-korea"
        />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section
        className="relative py-28 overflow-hidden"
        aria-labelledby="hero-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1604359896927-0610b7a3a2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGglMjBrb3JlYXxlbnwwfDB8MHx8fDI%3D")'
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1.5px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in North Korea
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            One of the world’s most restricted digital environments — North
            Korea’s connectivity is tightly controlled, with extremely limited
            access to the global internet.
          </motion.p>
        </div>
      </section>

      <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background">
        {/* CONTENT */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* KEY FACTS */}
              <motion.aside
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="backdrop-blur-xl bg-white/70 dark:bg-black/30 rounded-3xl border border-white/20 shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-5">Key Facts</h2>

                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li><strong>Population:</strong> ~26 million</li>
                      <li>
                        <strong>Neighbors:</strong> China, South Korea, Russia
                      </li>
                      <li><strong>Language:</strong> Korean</li>
                      <li>
                        <strong>Currency:</strong> North Korean Won (KPW)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Pyongyang, Hamhung,
                        Chongjin
                      </li>
                      <li>
                        <strong>Key Industries:</strong> State-controlled
                        manufacturing, mining, defense
                      </li>
                      <li>
                        <strong>Tourism:</strong> Highly restricted
                      </li>
                      <li><strong>National Sport:</strong> Football</li>
                      <li><strong>Climate:</strong> Continental</li>
                    </ul>

                    <div className="text-center mt-6">
                      <img
                        src="https://flagcdn.com/w320/kp.png"
                        alt="Flag of North Korea"
                        className="mx-auto rounded-lg shadow-lg border border-white/40"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.aside>

              {/* MAIN CONTENT */}
              <motion.article
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-10"
              >
                {/* OVERVIEW */}
                <Card className="rounded-3xl shadow-xl border border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">A Brief Overview</h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      North Korea operates a highly restricted and centralized
                      communications environment. General public access to the
                      global internet is virtually nonexistent.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Most citizens rely on a domestic intranet known as
                      <em> Kwangmyong</em>, which hosts state-approved content and
                      services. International connectivity is reserved for
                      government, military and select institutions.
                    </p>

                    {/* MAP */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of North Korea"
                          src="https://www.google.com/maps?q=North%20Korea&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AIRPORTS + CONNECTIVITY */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Main Airports</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Pyongyang Sunan International Airport</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Connectivity Overview
                      </h3>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left">Type</th>
                              <th className="py-3 px-4 text-left">Users</th>
                              <th className="py-3 px-4 text-left">
                                Penetration
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t">
                              <td className="py-3 px-4">Global Internet</td>
                              <td className="py-3 px-4">Very limited</td>
                              <td className="py-3 px-4">&lt;1%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="py-3 px-4">Domestic Intranet</td>
                              <td className="py-3 px-4">Several million</td>
                              <td className="py-3 px-4">State-controlled</td>
                            </tr>
                            <tr className="border-t">
                              <td className="py-3 px-4">Mobile Network</td>
                              <td className="py-3 px-4">~5 million</td>
                              <td className="py-3 px-4">Restricted</td>
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

        {/* BACKBONE */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  International Connectivity & Internet Backbone
                </h2>

                <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                  North Korea’s international internet connectivity is limited
                  to a small number of terrestrial links primarily routed
                  through China, with historical secondary paths via Russia.
                </p>

                <a
                  href="https://www.submarinecablemap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.imgur.com/4MZqZK2.jpg"
                    alt="North Korea Connectivity Map"
                    className="rounded-xl shadow-lg border border-white/20 mx-auto"
                    loading="lazy"
                  />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ISPs */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Internet Providers</h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  All telecommunications services are state-controlled. Major
                  operators include Korea Posts and Telecommunications
                  Corporation and Koryolink for mobile services.
                </p>

                
              </CardContent>
            </Card>
          </div>
        </section>

        {/* COMMERCIAL */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Connectivity services in North Korea are subject to strict
              international regulations and governmental approvals.
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>
                <a
                  href="https://data.worldbank.org/country/korea-dem-people-rep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  World Bank — DPRK
                </a>
              </li>
              <li>
                <a
                  href="https://www.submarinecablemap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Submarine Cable Map
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

export default NorthKorea;
