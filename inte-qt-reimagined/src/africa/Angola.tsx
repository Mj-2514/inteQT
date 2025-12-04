import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Angola: React.FC = () => {
    <Helmet>
        <title>Internet in Angola | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Angola’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Luanda, Lobito, Benguela and other key regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/africa/angola"
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
            // Luanda / Atlantic coast vibe – swap to your own asset if needed
            backgroundImage:
              'url("https://i.imgur.com/fntgKno.jpg")',
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
            Internet in Angola
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A resource-rich Southern African economy with a fast-growing urban
            population, expanding fibre and mobile broadband, and backbones
            connecting Atlantic ports, inland plateaus and oil &amp; gas regions.
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
                        <strong>Population:</strong> ~36–38 million (2024
                        estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Southern Africa, Atlantic Coast
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Namibia (south), Zambia
                        (east), Democratic Republic of the Congo (north &amp;
                        northeast); Atlantic Ocean (west)
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> Luanda
                      </li>
                      <li>
                        <strong>Other Major Cities:</strong> Lubango, Huambo,
                        Benguela, Lobito, Cabinda, Malanje, Soyo
                      </li>
                      <li>
                        <strong>Official Language:</strong> Portuguese
                      </li>
                      <li>
                        <strong>Currency:</strong> Angolan Kwanza (AOA)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Oil &amp; gas,
                        diamonds &amp; mining, construction, agriculture,
                        fisheries, manufacturing, logistics, services
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> ~40% of
                        population online (and rising)
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Angola is one of Africa’s largest countries by land
                        area, with most people concentrated in Luanda and
                        coastal and central highland provinces. Long distances,
                        low population density outside cities and a legacy of
                        conflict shape how fibre backbones, microwave routes and
                        mobile networks are deployed to connect ports, oil &amp;
                        gas fields, mining areas and growing urban centres.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/ao.png"
                        alt="Angola Flag"
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
                      Angola is a major oil-producing economy in Southern
                      Africa, with hydrocarbons dominating exports and public
                      revenues. Since the end of its civil war, the country has
                      invested heavily in rebuilding infrastructure, expanding
                      Luanda and provincial capitals, and diversifying into
                      construction, agriculture, logistics and services.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Population and economic activity are concentrated in
                      Luanda and a chain of coastal and inland cities such as
                      Benguela, Lobito, Huambo and Lubango. National
                      connectivity follows these axes, with long-haul fibre and
                      microwave routes linking Atlantic ports, central plateaus,
                      cross-border corridors and oil &amp; gas production
                      areas.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Fixed and mobile broadband adoption has grown quickly in
                      recent years, although coverage and quality still vary
                      between dense urban areas and rural regions. 3G/4G mobile
                      networks reach much of the population, while FTTH and
                      other fixed broadband solutions are expanding in Luanda
                      and key provincial cities to support cloud, collaboration,
                      financial services and industrial connectivity.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Angola&output=embed"
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
                        Angola’s international airports and Atlantic ports are
                        critical for oil &amp; gas, container traffic and
                        general cargo, and they concentrate demand for secure,
                        high-availability connectivity for aviation, energy,
                        logistics and public services.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          Quatro de Fevereiro Intl. Airport (LAD) — Luanda
                        </li>
                        <li>Catumbela Airport (CBT) — Benguela / Lobito area</li>
                        <li>Alban Gweth International Airport (SDD) — Lubango</li>
                        <li>Nova Lisboa (Albano Machado) Airport (NOV) — Huambo</li>
                        <li>Cabinda Airport (CAB) — Cabinda</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Luanda</li>
                        <li>Port of Lobito</li>
                        <li>Port of Namibe</li>
                        <li>Port of Cabinda</li>
                        <li>Ports in Soyo and other oil &amp; gas hubs</li>
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
                        Angola’s internet ecosystem is evolving, with tens of
                        millions of mobile subscriptions, increasing broadband
                        speeds and growing FTTH coverage in urban centres.
                        Internet penetration is still below global averages but
                        has been improving steadily as infrastructure, spectrum
                        and competition develop.
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
                                ≈14–17 million users
                              </td>
                              <td className="py-3 px-4">
                                Internet penetration around 40% of the
                                population, with steady year-on-year growth.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Concentrated in Luanda &amp; main cities
                              </td>
                              <td className="py-3 px-4">
                                FTTH and other fixed access in Luanda, Benguela,
                                Lobito, Huambo, Lubango and selected provincial
                                centres; limited coverage in rural areas.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                3G/4G widely available; 5G emerging
                              </td>
                              <td className="py-3 px-4">
                                Mobile broadband is the primary mode of access
                                for most users; coverage focuses on urban and
                                corridor populations.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Strongest in Luanda &amp; economic corridors
                              </td>
                              <td className="py-3 px-4">
                                DIA, IP-VPN, SD-WAN and managed services serving
                                oil &amp; gas, mining, banking, logistics,
                                government and manufacturing, with solutions for
                                remote sites using satellite and wireless.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Network designs often combine terrestrial fibre, diverse
                        coastal and inland routes, microwave and satellite
                        backup, to handle distance, terrain and power
                        constraints.
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
                  Angola is connected to the global internet via multiple
                  submarine cable systems in the South Atlantic, including SAT-3,
                  WACS and SACS, with landing points on the Angolan coast. These
                  systems provide diverse, high-capacity paths to Europe, the
                  Americas and other African countries.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  International landing stations feed into national fibre
                  backbones that run along the coast and into the interior,
                  linking Luanda, Benguela, Lobito, Huambo, Lubango and other
                  provincial centres, as well as ports, refineries, oil &amp; gas
                  fields and cross-border links to neighbouring states.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/9zrlm9F.png"
alt="Submarine Cables Angola"
className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
/>

</div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Angola
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with leading Angolan and regional operators to
                  deliver managed connectivity solutions in Luanda, Benguela,
                  Lobito, Huambo, Lubango, Cabinda, Soyo and other strategic
                  locations along coastal and inland economic corridors.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support sectors such as oil &amp; gas, mining, energy,
                  financial services, logistics, retail, manufacturing,
                  education and public sector with secure, scalable network and
                  security services tailored to demanding local and global
                  requirements.
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
              . We support deployments across Luanda, Benguela, Lobito, Huambo,
              Lubango, Cabinda and other key regions in Angola.
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
              <li>World Bank / ITU — Angola ICT &amp; internet indicators</li>
              <li>Digital 2024 Angola — internet &amp; social media data</li>
              <li>National telecom regulator and market reports</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Angola;
