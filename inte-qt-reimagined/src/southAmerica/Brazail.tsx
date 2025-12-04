import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Brazil: React.FC = () => {
    <Helmet>
        <title>Internet in Brazil | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Brazil’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in São Paulo, Rio de Janeiro, Brasília, Porto Alegre, Fortaleza and other regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/south-america/brazil"
        />
      </Helmet>
  return (
    <>
      

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
            // São Paulo / Brazil cityscape – swap with your own asset if needed
            backgroundImage:
              'url("https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=1600&q=80")',
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
            Internet in Brazil
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            Latin America’s largest economy, with dense fibre and mobile networks
            connecting megacities, industrial corridors, agribusiness hubs and
            Atlantic landing stations.
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
                        <strong>Population:</strong> ~215 million (recent estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> South America
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Argentina, Bolivia, Colombia,
                        Guyana, Paraguay, Peru, Suriname, Uruguay, Venezuela and
                        French Guiana (France); Atlantic coastline to the east
                      </li>
                      <li>
                        <strong>Capital:</strong> Brasília
                      </li>
                      <li>
                        <strong>Major Cities:</strong> São Paulo, Rio de Janeiro,
                        Brasília, Belo Horizonte, Porto Alegre, Curitiba, Salvador,
                        Recife, Fortaleza
                      </li>
                      <li>
                        <strong>Official Language:</strong> Portuguese
                      </li>
                      <li>
                        <strong>Currency:</strong> Brazilian Real (BRL)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Manufacturing, oil &amp;
                        gas, mining, agribusiness, services, finance, ICT,
                        logistics, tourism
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Brazil covers nearly half of South America’s land area.
                        Economic and population density concentrate along the
                        southeast and coastal corridors, with São Paulo and Rio de
                        Janeiro as core hubs, while agribusiness and energy shape
                        demand across the interior.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/br.png"
                        alt="Brazil Flag"
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
                      Brazil is Latin America’s largest economy and most populous
                      country. Its economic engine is centred on São Paulo, Rio de
                      Janeiro and the southeast, with Brasília as the political
                      capital and other major cities anchoring regional industry,
                      logistics and services.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The country’s digital landscape combines dense metropolitan
                      fibre networks, long-haul backbones across thousands of
                      kilometres and a mix of wireless, satellite and fixed
                      technologies serving the Amazon, interior states and
                      smaller municipalities.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Internet adoption and mobile data usage are high, especially
                      in urban and coastal regions. Fixed broadband and 4G/4.5G
                      networks are widespread, with 5G rollouts launched in major
                      cities and expanding over time.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Brazil&output=embed"
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
                        Brazil’s international airports and Atlantic ports are
                        critical for trade, tourism and logistics, supporting
                        industrial corridors, offshore energy and container flows.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>São Paulo/Guarulhos Intl. Airport (GRU)</li>
                        <li>São Paulo/Congonhas Airport (CGH)</li>
                        <li>Rio de Janeiro/Galeão Intl. Airport (GIG)</li>
                        <li>Brasília Intl. Airport (BSB)</li>
                        <li>Confins Intl. Airport (CNF) — Belo Horizonte</li>
                        <li>Pinto Martins Intl. Airport (FOR) — Fortaleza</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Santos (São Paulo state)</li>
                        <li>Ports of Rio de Janeiro &amp; Itaguaí</li>
                        <li>Port of Paranaguá (Paraná)</li>
                        <li>Port of Rio Grande (Rio Grande do Sul)</li>
                        <li>Ports in Salvador, Suape, Fortaleza and other hubs</li>
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
                        Brazil’s telecom market is one of the largest in the
                        world, with several national and regional operators
                        offering fixed, mobile and enterprise services. Urban,
                        coastal and industrial regions benefit from dense fibre
                        and advanced mobile coverage, while parts of the interior
                        and Amazon still rely on mobile, radio and satellite
                        access.
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
                                &gt;150 million users
                              </td>
                              <td className="py-3 px-4">
                                Majority of population online; usage highest in
                                large cities and coastal states.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Strong in cities &amp; large towns
                              </td>
                              <td className="py-3 px-4">
                                Fibre, cable and xDSL widely deployed in major
                                metros and along key corridors.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                4G nationwide; 5G in major cities
                              </td>
                              <td className="py-3 px-4">
                                Primary access for many residential and SME users,
                                especially in smaller municipalities.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Very strong in business hubs
                              </td>
                              <td className="py-3 px-4">
                                DIA, MPLS/IP-VPN, SD-WAN, wavelength and
                                datacentre connectivity in core metro and
                                industrial regions.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Enterprises typically design multi-region network
                        architectures with diverse paths across different
                        operators and technologies to manage distance,
                        infrastructure and weather-related risks.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Submarine Cables & Backbone / Our Capabilities */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* Submarine Cables & National Backbone */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine Cables & National Backbone
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Brazil is a major landing point for South Atlantic and Americas
                  submarine cable systems, including routes that connect it
                  directly to North America, Europe and Africa. Key landing
                  stations are located along the northeast and southeast coasts,
                  in cities such as Fortaleza, Rio de Janeiro and Santos.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  International capacity is aggregated into high-capacity
                  terrestrial backbones that run through the main population and
                  industrial corridors, interconnecting São Paulo, Rio de Janeiro,
                  Brasília, Belo Horizonte, Porto Alegre, Curitiba, Recife,
                  Salvador, Fortaleza and other state capitals.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/933qBKY.png"
alt="Submarine Cables Brazil"
className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
/>

</div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Brazil
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with leading Brazilian and regional operators
                  to deliver managed connectivity solutions in São Paulo, Rio de
                  Janeiro, Brasília, Belo Horizonte, Porto Alegre, Curitiba,
                  Recife, Salvador, Fortaleza and other strategic locations across
                  the country.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support customers in sectors such as finance, technology,
                  manufacturing, agribusiness, oil &amp; gas, logistics, retail,
                  BPO and public sector with secure, scalable network and
                  security services.
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
                  <strong>4–6 weeks</strong>, depending on access type,
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
              . We support deployments across São Paulo, Rio de Janeiro, Brasília,
              and other major Brazilian cities and industrial corridors.
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
              <li>World Bank / ITU — Brazil ICT indicators</li>
              <li>Digital &amp; telecom market reports for Brazil</li>
              <li>Anatel — Brazilian National Telecommunications Agency</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Brazil;
