import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Benin: React.FC = () => {
    <Helmet>
        <title>Internet in Benin | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Benin’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Cotonou, Porto-Novo, Parakou and other key regions."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa/benin" />
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
            // Cotonou / Gulf of Guinea vibe – swap to your own asset if needed
            backgroundImage:
              'url("https://i.imgur.com/sZhMLgw.jpg")',
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
            Internet in Benin
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A West African economy on the Bight of Benin with growing ports,
            trade corridors and telecom infrastructure, where mobile broadband
            and expanding fibre networks link coastal cities to inland towns and
            neighbouring markets.
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
                        <strong>Population:</strong> ~15 million (2025 estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> West Africa, Gulf of Guinea
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Togo (west), Burkina Faso
                        (northwest), Niger (north), Nigeria (east); Bight of
                        Benin / Gulf of Guinea (south)
                      </li>
                      <li>
                        <strong>Official Capital:</strong> Porto-Novo
                      </li>
                      <li>
                        <strong>Seat of Government &amp; Largest City:</strong>{" "}
                        Cotonou
                      </li>
                      <li>
                        <strong>Other Major Cities:</strong> Abomey-Calavi,
                        Parakou, Djougou, Bohicon, Porto-Novo, Kandi
                      </li>
                      <li>
                        <strong>Official Language:</strong> French (with many
                        local languages widely spoken)
                      </li>
                      <li>
                        <strong>Currency:</strong> West African CFA Franc (XOF)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Trade &amp; logistics,
                        port services, agriculture (cotton, palm products,
                        cashew), textiles, food processing, services and
                        cross-border commerce with Nigeria and landlocked
                        neighbours
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> ~30–35% of
                        population online (fast-growing, especially via mobile)
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Benin is a relatively small coastal state whose economy
                        is heavily influenced by Cotonou’s port and trade with
                        Nigeria and the Sahel. Most of the population lives in
                        the south along the Bight of Benin, while inland
                        departments are more rural, shaping how backbones,
                        mobile networks and last-mile access are rolled out.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/bj.png"
                        alt="Benin Flag"
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
                      Benin is a lower-middle-income West African country whose
                      economy centres on agriculture, port and corridor
                      logistics, trade and services. Cotonou functions as the
                      main commercial hub and seat of government, while
                      Porto-Novo is the constitutional capital. The country also
                      serves as an important gateway for landlocked neighbours
                      such as Niger and Burkina Faso.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Population and economic activity are concentrated along the
                      southern coastline and nearby cities such as Cotonou,
                      Abomey-Calavi, Porto-Novo and Bohicon, with secondary hubs
                      like Parakou and Djougou in the interior. National
                      connectivity mirrors these patterns, with north–south and
                      east–west routes linking coastal metros, inland towns and
                      border crossings.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Internet use in Benin is growing quickly from a relatively
                      low base. Mobile broadband (3G/4G) is the dominant access
                      method, with coverage reaching most of the population,
                      while fixed broadband and fibre are gradually expanding in
                      dense urban areas and along key transport corridors to
                      support businesses, government and education.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Benin&output=embed"
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
                        Benin’s international airport and seaport in the Cotonou
                        area, plus corridor roads to Nigeria and the Sahel,
                        drive a large share of trade and logistics activity and
                        underpin critical demand for reliable connectivity.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          Cadjehoun Intl. Airport (COO) — Cotonou (serves
                          Cotonou / Abomey-Calavi / Porto-Novo)
                        </li>
                        <li>Parakou Airport — Parakou (regional)</li>
                        <li>Natitingou Airport — Natitingou (regional)</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Cotonou — main seaport &amp; container hub</li>
                        <li>
                          Secondary jetties and coastal facilities supporting
                          trade and fishing along the Bight of Benin
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
                        Benin’s connectivity landscape is characterised by
                        strong growth in mobile broadband, increasing smartphone
                        adoption and gradual expansion of fibre and fixed
                        broadband in major cities. While penetration remains
                        below global averages, usage is rising quickly as
                        networks, international capacity and digital services
                        expand.
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
                                ≈4.5–5 million users
                              </td>
                              <td className="py-3 px-4">
                                Around one-third of the population online, with
                                usage increasing year on year.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Limited but growing in major cities
                              </td>
                              <td className="py-3 px-4">
                                Fibre and other fixed access mainly in Cotonou,
                                Abomey-Calavi, Porto-Novo and selected urban
                                centres; coverage in rural areas remains low.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                3G/4G widely available; 4G driving most data
                                growth
                              </td>
                              <td className="py-3 px-4">
                                Mobile broadband is the primary access method
                                for households and SMEs; coverage extends across
                                much of the populated territory.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Concentrated in coastal corridor &amp; key towns
                              </td>
                              <td className="py-3 px-4">
                                DIA, IP-VPN, SD-WAN and managed services for
                                logistics, banking, government, education and
                                services, especially around Cotonou, Porto-Novo
                                and main corridor routes.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Designs often combine terrestrial fibre, protected
                        routes and wireless or satellite backup to handle power,
                        terrain and last-mile challenges, particularly outside
                        dense urban areas.
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
                  Benin connects to the global internet mainly through
                  submarine cables landing on the Gulf of Guinea, which provide
                  international capacity and redundancy via regional systems
                  serving West Africa. These links tie Cotonou and neighbouring
                  countries into global routes to Europe and beyond.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  International capacity is backhauled via national and
                  regional fibre backbones that follow coastal and inland
                  corridors, interconnecting Cotonou, Porto-Novo, Abomey-Calavi,
                  Bohicon, Parakou and other towns, and extending towards border
                  crossings with Nigeria, Togo, Niger and Burkina Faso.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/n3CVbcN.png"
alt="Submarine Cables Benin"
className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
/>

</div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Benin
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with leading Beninese and regional operators
                  to deliver managed connectivity solutions in Cotonou,
                  Abomey-Calavi, Porto-Novo, Bohicon, Parakou, Djougou and other
                  strategic locations along coastal and inland trade corridors.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support sectors such as logistics and port operations,
                  financial services, government, education, NGOs, retail and
                  regional trade with secure, scalable network and security
                  services tailored to local conditions and global performance
                  expectations.
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
              . We support deployments across Cotonou, Abomey-Calavi,
              Porto-Novo, Parakou, Djougou and other cities and corridors in
              Benin.
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
              <li>World Bank / ITU — Benin ICT &amp; internet indicators</li>
              <li>Digital 2023–2024 Benin — internet &amp; social media data</li>
              <li>
                National telecom regulator / regional telecom association
                reports
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Benin;
