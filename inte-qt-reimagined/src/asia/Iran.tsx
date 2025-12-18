// src/pages/Iran.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Iran = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Iran | Connectivity, ISPs & Broadband Overview",
    description:
      "Detailed overview of Iran’s internet connectivity, terrestrial fiber routes, limited submarine cable access, ISPs, broadband statistics and inte-QT service capabilities.",
    url: "https://www.inte-qt.com/coverage/asia/iran",
    about: {
      "@type": "Country",
      name: "Iran",
      population: 88000000,
      currency: "IRR (Iranian Rial)",
      languages: ["Persian (Farsi)"],
      neighbouringCountries: [
        "Turkey",
        "Iraq",
        "Armenia",
        "Azerbaijan",
        "Turkmenistan",
        "Afghanistan",
        "Pakistan"
      ],
      majorCities: [
        "Tehran",
        "Mashhad",
        "Isfahan",
        "Shiraz",
        "Tabriz"
      ],
      climate: "Mostly arid and semi-arid with regional variations",
      nationalSport: "Wrestling",
      touristsPerYear: "~4 million"
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Iran | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Iran’s internet connectivity, fiber backbone, ISPs, broadband penetration and enterprise connectivity landscape."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/asia/iran"
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Internet in Iran | Connectivity, ISPs & Broadband Overview"
        />
        <meta
          property="og:description"
          content="Overview of Iran’s internet infrastructure, fiber backbone, ISPs and broadband ecosystem."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.inte-qt.com/coverage/asia/iran"
        />
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1583316852564-02be226c9782?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXJhbnxlbnwwfDB8MHx8fDI%3D")'
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1.5px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Iran
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A strategically positioned nation connecting Central Asia, the
            Middle East, and South Asia — Iran’s internet infrastructure is
            driven primarily by extensive terrestrial fiber networks and
            regional cross-border connectivity.
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
                      <li><strong>Population:</strong> ~88 million</li>
                      <li>
                        <strong>Neighbors:</strong> Turkey, Iraq, Armenia,
                        Azerbaijan, Turkmenistan, Afghanistan, Pakistan
                      </li>
                      <li><strong>Language:</strong> Persian (Farsi)</li>
                      <li><strong>Currency:</strong> Iranian Rial (IRR)</li>
                      <li>
                        <strong>Major Cities:</strong> Tehran, Mashhad, Isfahan,
                        Shiraz, Tabriz
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Energy, Manufacturing,
                        Telecom, IT Services
                      </li>
                      <li><strong>Tourists per Year:</strong> ~4 million</li>
                      <li><strong>National Sport:</strong> Wrestling</li>
                      <li>
                        <strong>Climate:</strong> Arid and semi-arid
                      </li>
                    </ul>

                    <div className="text-center mt-6">
                      <img
                        src="https://flagcdn.com/w320/ir.png"
                        alt="Flag of Iran"
                        className="mx-auto rounded-lg shadow-lg border border-white/40"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.aside>

              {/* MAIN */}
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
                      Iran operates one of the Middle East’s largest domestic
                      internet infrastructures, with a strong emphasis on
                      terrestrial fiber connectivity linking major population
                      centers and neighboring countries.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      International access is primarily achieved through
                      cross-border fiber links with Turkey, Armenia, Azerbaijan,
                      Turkmenistan, and Pakistan, while limited submarine cable
                      connectivity is available via the Persian Gulf.
                    </p>

                    {/* MAP */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          title="Map of Iran"
                          src="https://www.google.com/maps?q=Iran&output=embed"
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
                        <li>Imam Khomeini Intl – Tehran</li>
                        <li>Mehrabad Airport – Tehran</li>
                        <li>Shiraz Intl Airport</li>
                        <li>Isfahan Intl Airport</li>
                        <li>Tabriz Intl Airport</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Connectivity Overview</h3>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left">Type</th>
                              <th className="py-3 px-4 text-left">Users</th>
                              <th className="py-3 px-4 text-left">Penetration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t">
                              <td className="py-3 px-4">Mobile Internet</td>
                              <td className="py-3 px-4">~75 million</td>
                              <td className="py-3 px-4">~85%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">~12 million</td>
                              <td className="py-3 px-4">~14%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="py-3 px-4">Landline</td>
                              <td className="py-3 px-4">~28 million</td>
                              <td className="py-3 px-4">~32%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="py-3 px-4">Access to Internet</td>
                              <td className="py-3 px-4">~72 million</td>
                              <td className="py-3 px-4">~82%</td>
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
                  Iran’s international connectivity relies predominantly on
                  terrestrial fiber routes linking neighboring countries, with
                  supplementary submarine cable access through the Persian Gulf.
                  This architecture provides regional redundancy and strategic
                  transit positioning.
                </p>

                <a
                  href="https://www.submarinecablemap.com/country/iran"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Iran.png"
                    alt="Iran Connectivity Map"
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
                  Major ISPs in Iran include Telecommunication Company of Iran
                  (TCI), Mobile Communication Company of Iran (MCI),
                  Irancell, Shatel, and Rightel.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Cross-Border Fiber Connectivity",
                    "MPLS & SD-WAN",
                    "Diverse Gateway & Redundant Routing",
                    "DDoS Protection & Network Security"
                  ].map((cap) => (
                    <div
                      key={cap}
                      className="flex items-start space-x-3 bg-card/40 p-3 rounded-xl border border-white/10"
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

        {/* COMMERCIAL */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Contact us to receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">
                Commercial Offer in 2–4 working days
              </mark>
              . Services in Tehran, Isfahan and Shiraz can typically be deployed
              within 3–4 weeks, subject to regional access conditions.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-QT.com?subject=Iran%20Connectivity%20Inquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">References</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>
                <a
                  href="https://data.worldbank.org/country/iran-islamic-rep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  World Bank — Iran
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

export default Iran;
