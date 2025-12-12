import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Bolivia: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Internet in Bolivia | Connectivity, ISPs & Broadband Overview",
    description:
      "Overview of Bolivia’s internet connectivity, fixed and mobile broadband, regional backbone routes and inte-QT service capabilities in La Paz, Santa Cruz, Cochabamba and other key regions.",
    url: "https://www.inte-qt.com/coverage/south-america/bolivia",
    about: {
      "@type": "Country",
      name: "Bolivia",
      alternateName: "Plurinational State of Bolivia",
      capital: [
        { "@type": "City", name: "La Paz" },
        { "@type": "City", name: "Sucre" }
      ],
      officialLanguage: [
        "Spanish",
        "Quechua",
        "Aymara",
        "Guaraní"
      ],
      currency: "BOB",
      population: {
        "@type": "QuantitativeValue",
        value: 12000000
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -16.2902,
        longitude: -63.5887
      }
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.inte-qt.com/#website"
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.inte-qt.com/#organization"
    }
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Internet in Bolivia | Connectivity, ISPs & Broadband Overview</title>

        <meta
          name="description"
          content="Overview of Bolivia’s internet connectivity, fixed and mobile broadband, regional backbone routes and inte-QT service capabilities in La Paz, Santa Cruz, Cochabamba and other key regions."
        />

        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/south-america/bolivia"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
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
            // Andes / Bolivia vibe – swap to your own asset if needed
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80")',
          }}
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1.5px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Bolivia
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A landlocked Andean country where diverse geography, growing cities
            and evolving digital infrastructure shape connectivity demands across
            the highlands and lowlands.
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
                        <strong>Population:</strong> ~12 million (recent estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Landlocked in central South America
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Brazil, Paraguay, Argentina,
                        Chile, Peru
                      </li>
                      <li>
                        <strong>Government Seats:</strong> La Paz (administrative);
                        Sucre (constitutional capital)
                      </li>
                      <li>
                        <strong>Major Cities:</strong> La Paz–El Alto, Santa Cruz
                        de la Sierra, Cochabamba
                      </li>
                      <li>
                        <strong>Official Languages:</strong> Spanish plus multiple
                        indigenous languages (e.g. Quechua, Aymara, Guaraní)
                      </li>
                      <li>
                        <strong>Currency:</strong> Boliviano (BOB)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Natural gas &amp; mining,
                        agriculture, manufacturing, services, transport, tourism
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Bolivia spans high Andean altiplano, inter-Andean valleys
                        and lowland plains. Santa Cruz is the main economic growth
                        hub, while La Paz–El Alto and Cochabamba are critical
                        political, cultural and logistics centres. Geography and
                        altitude strongly influence network design and last-mile
                        options.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/bo.png"
                        alt="Bolivia Flag"
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
                    <h2 className="text-3xl font-bold mb-4">
                      A Brief Overview
                    </h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Bolivia is a landlocked South American country with a
                      diverse geography ranging from the Andes and Altiplano to
                      tropical lowlands in the east. La Paz (together with El Alto)
                      and Santa Cruz de la Sierra are the main urban and economic
                      poles, complemented by Cochabamba and regional cities.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The economy is anchored in natural gas, mining, agriculture
                      and services, with gradual growth in manufacturing and
                      logistics. Trade relies heavily on road corridors to
                      neighbouring ports in Chile, Peru, Argentina and Brazil,
                      mirrored by cross-border fibre routes.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Connectivity has improved over the past decade, but there
                      remain gaps between major cities and rural/remote regions.
                      Urban centres show growing fibre and 4G coverage, while
                      mountainous terrain and long distances can constrain last-mile
                      options elsewhere.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Bolivia&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Airports / (River) Ports + Connectivity */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Airports & Access */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Main Airports & Access Corridors
                      </h3>

                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        As a landlocked nation, Bolivia depends on international
                        airports and road/rail links to neighbouring countries for
                        trade and travel. Inland river ports and logistics hubs also
                        play a role in moving goods towards foreign seaports.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          El Alto Intl. Airport (LPB) — La Paz/El Alto
                        </li>
                        <li>
                          Viru Viru Intl. Airport (VVI) — Santa Cruz de la Sierra
                        </li>
                        <li>
                          Jorge Wilstermann Intl. Airport (CBB) — Cochabamba
                        </li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Key Trade & Transport Corridors
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Road corridors to Chilean and Peruvian ports</li>
                        <li>
                          Border crossings with Brazil, Argentina, Paraguay and Peru
                        </li>
                        <li>
                          Inland river connections supporting agricultural exports
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Connectivity / Internet Access */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Connectivity & Internet Access
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        Fixed broadband and mobile services are concentrated in
                        larger cities, while many rural areas still rely on mobile
                        data, fixed wireless and community Wi-Fi. Urban fibre and
                        4G penetration has grown, with improving quality and speeds
                        in La Paz, Santa Cruz and Cochabamba.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Metric
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Status (approx.)
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Notes
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">
                                Majority of population online
                              </td>
                              <td className="py-3 px-4">
                                Usage highest in main cities; adoption growing in
                                secondary towns.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Strongest in La Paz, Santa Cruz, Cochabamba
                              </td>
                              <td className="py-3 px-4">
                                Fibre, cable and xDSL across main urban areas; more
                                limited outside.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                3G/4G widely available
                              </td>
                              <td className="py-3 px-4">
                                Primary access method for many households and
                                businesses, especially outside major cities.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Focused on main hubs
                              </td>
                              <td className="py-3 px-4">
                                DIA, IP-VPN and managed services available in large
                                cities and industrial zones.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Enterprises often combine fixed access with wireless or
                        multi-operator backup to handle terrain, weather and
                        infrastructure constraints in different regions.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Backbone & Our Capabilities */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* Regional & National Backbone */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Regional Fibre & National Backbone
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  As a landlocked country, Bolivia depends on terrestrial fibre
                  routes to neighbouring nations for international connectivity.
                  Cross-border links to Brazil, Argentina, Chile and Peru provide
                  access to regional internet hubs and submarine cable landing
                  stations on the Pacific and Atlantic coasts.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Domestic backbones connect La Paz–El Alto, Santa Cruz,
                  Cochabamba and other departmental capitals, often following
                  major road corridors and power infrastructure. Microwave links
                  complement fibre in areas where terrain makes deployment more
                  complex.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/eude26j.png"
alt="Submarine Cables Bolivia"
className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
/>

</div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Bolivia
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT works with in-country and regional partners to deliver
                  managed connectivity solutions across Bolivia, focusing on La
                  Paz–El Alto, Santa Cruz de la Sierra, Cochabamba and other
                  strategic locations.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support customers in sectors such as energy and mining,
                  logistics, manufacturing, government, financial services and
                  international organisations with secure, scalable services tuned
                  to local infrastructure conditions.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Services</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity (3G/4G last mile)",
                    "Service Level Agreements (SLA)",
                    "Customer Premises Equipment (CPE) / Routers",
                    "Global Enterprise Management Solutions (GEMS)",
                    "Diverse Gateway Solutions",
                    "Distributed Denial of Service (DDoS) Protection",
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

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our Global Business Solutions team can typically provide a{" "}
                  <strong>Commercial Offer within 2–4 working days</strong>.
                  Service delivery is usually achievable within{" "}
                  <strong>4–6 weeks</strong>, depending on last-mile options,
                  geography and site readiness.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Offer & References */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Contact us to receive a{" "}
              <mark className="bg-yellow-200 px-1 rounded">
                Commercial Offer in 2–4 working days
              </mark>
              . We support deployments in La Paz–El Alto, Santa Cruz, Cochabamba
              and other key locations across Bolivia.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-qt.com?subject=Mail from Our Site"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">Suggested References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>World Bank / ITU — Bolivia ICT indicators</li>
              <li>Digital &amp; telecom reports on Bolivia</li>
              <li>National telecom regulator &amp; statistics portals</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Bolivia;
