import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Canada: React.FC = () => {
    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in Canada | Connectivity, ISPs & Broadband Overview",
  description:
    "Detailed overview of Canada’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Toronto, Montreal, Vancouver and other major regions.",
  url: "https://www.inte-qt.com/coverage/north-america/canada",
  about: {
    "@type": "Country",
    name: "Canada",
    capital: {
      "@type": "City",
      name: "Ottawa"
    },
    officialLanguage: ["English", "French"],
    currency: "CAD",
    population: {
      "@type": "QuantitativeValue",
      value: 41500000
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 56.1304,
      longitude: -106.3468
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
      <Helmet>
  <title>Internet in Canada | Connectivity, ISPs & Broadband Overview</title>

  <meta
    name="description"
    content="Detailed overview of Canada’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Toronto, Montreal, Vancouver and other major regions."
  />

  <link
    rel="canonical"
    href="https://www.inte-qt.com/coverage/north-america/canada"
  />

  {/* JSON-LD Structured Data */}
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
            // Toronto skyline – swap with your own asset if needed
            backgroundImage:
              'url("https://i.imgur.com/AfvNiAu.jpg")',
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
            Internet in Canada
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A vast, high-income country with near-universal internet adoption,
            dense fibre backbones, and advanced mobile networks connecting
            people and businesses from coast to coast to coast.
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
                        <strong>Population:</strong> ~41.5 million (Q3–Q4 2024
                        estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> North America
                      </li>
                      <li>
                        <strong>Neighbors:</strong> United States (land border),
                        Greenland/Denmark (Arctic maritime proximity), Alaska
                        (US)
                      </li>
                      <li>
                        <strong>Capital:</strong> Ottawa
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Toronto, Montreal,
                        Vancouver, Calgary, Edmonton, Ottawa–Gatineau
                      </li>
                      <li>
                        <strong>Official Languages:</strong> English, French
                      </li>
                      <li>
                        <strong>Currency:</strong> Canadian Dollar (CAD)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Natural resources
                        (energy, mining, forestry), manufacturing, finance,
                        technology, transportation, agriculture, film/media,
                        tourism
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> ~94% of
                        population online
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Canada spans the Atlantic, Pacific and Arctic coasts,
                        with most of the population concentrated in a band
                        within 300 km of the US border. Large metropolitan
                        regions and long-distance transport corridors underpin
                        strong demand for resilient, low-latency connectivity.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/ca.png"
                        alt="Canada Flag"
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
                      Canada is the world’s second-largest country by land
                      area, with a diverse economy spanning energy, natural
                      resources, advanced manufacturing, financial services and
                      technology. Toronto, Montreal and Vancouver are major
                      business and cultural hubs, while cities like Calgary,
                      Edmonton and Halifax anchor energy, logistics and
                      Atlantic trade.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The population is highly urbanised, and digital
                      connectivity is deeply embedded in everyday life. Internet
                      penetration exceeds 90%, with most residents accessing the
                      internet through a combination of fixed broadband and
                      mobile data.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Canada’s vast geography makes backbones, regional
                      aggregation points and last-mile technology choices
                      critical for delivering enterprise-grade connectivity in
                      both dense metro areas and remote communities.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Canada&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Airports / Ports + Connectivity */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Airports & Ports */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Main Airports & Ports
                      </h3>

                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        Canada relies on a network of international airports and
                        deep-water ports across its Atlantic, Pacific and Great
                        Lakes coasts to connect trade, tourism and logistics
                        with global markets.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>Toronto Pearson International Airport (YYZ)</li>
                        <li>Vancouver International Airport (YVR)</li>
                        <li>Montréal–Trudeau International Airport (YUL)</li>
                        <li>Calgary International Airport (YYC)</li>
                        <li>Ottawa International Airport (YOW)</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports & Inland Hubs
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Vancouver (Pacific)</li>
                        <li>Port of Prince Rupert (Pacific)</li>
                        <li>Port of Montreal (St. Lawrence)</li>
                        <li>Port of Halifax (Atlantic)</li>
                        <li>Great Lakes &amp; St. Lawrence ports (e.g. Toronto)</li>
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
                        Canada has one of the highest internet usage rates in
                        the world. Fixed broadband is widely deployed in urban
                        and suburban areas, while 4G and 5G mobile networks
                        deliver high-speed access across much of the population
                        footprint. Remote and northern communities often rely on
                        satellite, microwave and hybrid solutions.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Metric
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Status (recent)
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Notes
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Population</td>
                              <td className="py-3 px-4">
                                ~41.5 million (2024–2025)
                              </td>
                              <td className="py-3 px-4">
                                Rapid growth driven largely by immigration.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">
                                ≈36.7 million users
                              </td>
                              <td className="py-3 px-4">
                                ~94% internet penetration nationwide.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Very high coverage in urban areas
                              </td>
                              <td className="py-3 px-4">
                                Fibre, cable and DSL across major cities and
                                corridors.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                4G nationwide; 5G in major metros
                              </td>
                              <td className="py-3 px-4">
                                High smartphone and mobile data usage.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Strong carrier and datacentre presence
                              </td>
                              <td className="py-3 px-4">
                                Cloud on-ramps and IXPs in Toronto, Montreal,
                                Vancouver and other hubs.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Enterprises typically mix fibre DIA in core sites with
                        VPN, SD-WAN and wireless backup to maintain resilience
                        across long distances and diverse climates.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Submarine Cables / Backbone & Our Capabilities */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* Submarine Cables & Backbone */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine Cables & National Backbone
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Canada is a major landing point and transit route for
                  transatlantic and transpacific submarine cable systems,
                  connecting North America to Europe and Asia. Cable landings in
                  Atlantic Canada and on the Pacific coast feed into dense
                  terrestrial backbones that run along the country’s main
                  population corridors.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  High-capacity fibre routes link major hubs such as Vancouver,
                  Calgary, Winnipeg, Toronto, Ottawa and Montreal, with
                  extensions towards Atlantic gateways and cross-border links
                  into the United States. Regional networks and microwave links
                  extend connectivity into more remote areas.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/0KnJGeV.png"
alt="Submarine Cables Canada"
className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
/>

</div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Canada
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with leading Canadian carriers and
                  infrastructure providers to deliver managed connectivity for
                  enterprises in Toronto, Montreal, Vancouver, Calgary, Ottawa,
                  Edmonton and many regional centres across the country.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support customers in sectors such as finance, technology,
                  manufacturing, energy, logistics, retail, government and
                  education with secure, scalable network solutions.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Services</h3>

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
                  <strong>4–6 weeks</strong>, depending on access type, site
                  readiness and geographic location.
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
              . We support deployments across major Canadian metros and
              regional locations, tailored to your connectivity and resilience
              needs.
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
              <li>World Bank / ITU — Canada ICT indicators</li>
              <li>Digital 2024: Canada — internet usage &amp; penetration</li>
              <li>Canadian Radio-television and Telecommunications Commission (CRTC)</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Canada;
