import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Mozambique: React.FC = () => {
    <Helmet>
        <title>
          Internet in Mozambique | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Overview of Mozambique’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Maputo, Beira, Nampula, Tete and other key regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/mozambique"
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
            // Maputo / Indian Ocean coast vibe – swap to your own asset if needed
            backgroundImage:
              'url("https://i.imgur.com/0nJcdAY.jpg")',
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
            Internet in Mozambique
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A coastal Southern African economy on the Indian Ocean with
            strategic ports, energy projects and trade corridors, where
            expanding fibre and mobile broadband connect Maputo, Beira, Nacala,
            inland hubs and neighbouring markets.
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
                        <strong>Population:</strong> ~33 million (2024 estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Southern/Eastern Africa, Indian
                        Ocean coast
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Tanzania (north), Malawi and
                        Zambia (northwest), Zimbabwe (west), Eswatini &amp; South
                        Africa (southwest); Indian Ocean (east)
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> Maputo
                      </li>
                      <li>
                        <strong>Other Major Cities:</strong> Matola, Beira,
                        Nampula, Quelimane, Tete, Nacala, Pemba
                      </li>
                      <li>
                        <strong>Official Language:</strong> Portuguese (many
                        local languages also widely spoken)
                      </li>
                      <li>
                        <strong>Currency:</strong> Mozambican Metical (MZN)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Natural gas &amp; coal,
                        aluminium, agriculture &amp; fisheries, port &amp;
                        corridor logistics, tourism, construction, services
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> ~25–30% of
                        population online (fast growing)
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Mozambique stretches along over 2,400 km of Indian Ocean
                        coastline, with major corridors linking its ports to
                        neighbouring countries. Population is concentrated in
                        coastal cities such as Maputo, Beira and Nacala, and in
                        key inland hubs like Tete and Nampula, shaping how
                        national backbones and mobile networks are planned and
                        deployed.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/mz.png"
                        alt="Mozambique Flag"
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
                      Mozambique is a low- to lower-middle-income Southern
                      African country whose economy is anchored in natural
                      resources, agriculture and trade corridors running from
                      landlocked neighbours to Indian Ocean ports. Large
                      offshore gas reserves, coal, aluminium smelting and
                      infrastructure along the Maputo, Beira and Nacala
                      corridors are key drivers of investment.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Economic activity and population are concentrated in
                      Maputo–Matola in the south, Beira and Chimoio in the
                      centre, and Nampula, Nacala and Pemba in the north, with
                      important mining and energy activity around Tete. National
                      connectivity follows these axes, with fibre and microwave
                      routes running along coastal and inland corridors that
                      connect ports, cities, border posts and project sites.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Internet and mobile usage has grown significantly from a
                      low base. 3G/4G mobile broadband is the primary access
                      method for most users, with coverage concentrated in
                      cities, towns and transport corridors. Fixed broadband and
                      FTTH are present in Maputo and a limited number of other
                      urban centres, gradually expanding as demand and
                      infrastructure investment increase.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Mozambique&output=embed"
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
                        Mozambique’s international airports and deep-water ports
                        are vital gateways for passengers, coal and gas exports,
                        containers and regional trade, anchoring demand for
                        resilient, high-capacity connectivity.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          Maputo Intl. Airport (MPM) — Maputo / Matola region
                        </li>
                        <li>Beira Airport (BEW) — Beira</li>
                        <li>Nampula Airport (APL) — Nampula</li>
                        <li>Pemba Airport (POL) — Pemba / gas region</li>
                        <li>Tete–Chingodzi Airport (TET) — Tete / mining corridor</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Maputo — regional trade &amp; bulk cargo</li>
                        <li>Port of Beira — central corridor &amp; hinterland</li>
                        <li>Port of Nacala — deep-water port &amp; rail corridor</li>
                        <li>Port of Pemba — offshore gas support hub</li>
                        <li>Other coastal ports and jetties along the Indian Ocean</li>
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
                        Mozambique’s connectivity landscape is characterised by
                        strong growth in mobile broadband, improving
                        international capacity and gradual expansion of fibre
                        and fixed broadband in key urban and corridor locations.
                        Penetration remains below global averages, but data
                        traffic and digital service uptake are rising each year.
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
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">
                                ≈8–10 million users
                              </td>
                              <td className="py-3 px-4">
                                Roughly one-quarter to one-third of the
                                population online, mostly via mobile devices.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Limited; focused on cities &amp; corridors
                              </td>
                              <td className="py-3 px-4">
                                FTTH and other fixed services mainly in Maputo,
                                Matola and selected cities such as Beira,
                                Nampula and Tete; rural fixed access remains
                                sparse.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                2G/3G/4G available; 4G driving most data uptake
                              </td>
                              <td className="py-3 px-4">
                                Mobile broadband is the primary access method;
                                coverage strongest in urban areas and along main
                                transport and energy corridors.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Focused on ports, corridors &amp; project sites
                              </td>
                              <td className="py-3 px-4">
                                DIA, IP-VPN, SD-WAN and managed services for
                                energy, mining, logistics, banking, NGOs,
                                government and tourism, with satellite and
                                wireless used for remote and offshore sites.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Network designs frequently blend submarine and
                        terrestrial fibre, microwave, and satellite backup to
                        address distance, terrain, weather and power reliability
                        challenges.
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
                  Mozambique connects to the global internet through multiple
                  submarine cable systems in the Indian Ocean, with landings
                  near Maputo and other coastal locations. These systems provide
                  international capacity and route diversity to regional hubs
                  and global destinations.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  International capacity is backhauled over national and
                  corridor fibre backbones that follow key routes such as the
                  Maputo, Beira and Nacala corridors, linking ports to inland
                  hubs like Tete and to borders with South Africa, Eswatini,
                  Zimbabwe, Malawi, Zambia and Tanzania.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Metro and aggregation networks around Maputo–Matola, Beira,
                  Nampula and other cities support datacentres, carrier PoPs and
                  enterprise sites, enabling cloud on-ramps, peering and
                  low-latency access for business-critical applications.
                </p>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Mozambique
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with leading Mozambican and regional
                  operators to deliver managed connectivity solutions in Maputo,
                  Matola, Beira, Nampula, Nacala, Tete, Pemba and other
                  strategic locations along coastal and inland trade and energy
                  corridors.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support sectors such as energy and LNG, mining, logistics
                  and ports, financial services, NGOs, government, education and
                  tourism with secure, scalable network and security services
                  aligned to local conditions and global performance needs.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Services</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity (4G/5G or fixed wireless last mile)",
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
                  <strong>Commercial Offer within 2–4 working days</strong>, and
                  services are generally deliverable within{" "}
                  <strong>4–6 weeks</strong>, depending on access technology,
                  region and site readiness.
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
              . We support deployments across Maputo, Beira, Nampula, Nacala,
              Tete, Pemba and other cities and corridors in Mozambique.
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
              <li>
                World Bank / ITU — Mozambique ICT &amp; internet indicators
              </li>
              <li>
                Digital 2023–2024 Mozambique — internet &amp; social media data
              </li>
              <li>National telecom regulator and market reports</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Mozambique;
