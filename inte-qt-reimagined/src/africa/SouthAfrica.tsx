import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const SouthAfrica: React.FC = () => {
    <Helmet>
        <title>
          Internet in South Africa | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Overview of South Africa’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Johannesburg, Cape Town, Durban and other key regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/southafrica"
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
            // Cape Town / Table Mountain vibe – swap to your own asset if needed
            backgroundImage:
              'url("https://i.imgur.com/MmiBXYe.png")',
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
            Internet in South Africa
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A diversified Southern African economy with mature telecom markets,
            extensive fibre and mobile broadband, and regional backbones
            linking Johannesburg, Cape Town and Durban to mining, industrial and
            cross-border corridors.
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
                        <strong>Population:</strong> ~61 million (2024 estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Southern Africa
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Namibia (northwest),
                        Botswana (north), Zimbabwe (north), Mozambique &amp;
                        Eswatini (northeast), Lesotho (enclave); Atlantic &amp;
                        Indian Oceans (south &amp; west)
                      </li>
                      <li>
                        <strong>Capital Cities:</strong> Pretoria (administrative), 
                        Cape Town (legislative), Bloemfontein (judicial)
                      </li>
                      <li>
                        <strong>Largest Metro &amp; Commercial Hub:</strong>{" "}
                        Johannesburg (Gauteng)
                      </li>
                      <li>
                        <strong>Other Major Cities:</strong> Cape Town, Durban,
                        Ekurhuleni, Tshwane, Gqeberha (Port Elizabeth),
                        Pietermaritzburg, Polokwane
                      </li>
                      <li>
                        <strong>Official Languages:</strong> 11 official
                        languages including English, Afrikaans, isiZulu,
                        isiXhosa and others (English widely used in business)
                      </li>
                      <li>
                        <strong>Currency:</strong> South African Rand (ZAR)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Mining &amp; minerals,
                        finance &amp; banking, manufacturing, retail,
                        agriculture, tourism, ICT &amp; telecoms, transport &amp;
                        logistics
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> ~70–75% of
                        population online (one of Africa’s highest)
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        South Africa has a highly urbanised population centred
                        on Gauteng (Johannesburg–Pretoria), coastal metros like
                        Cape Town and Durban, and mining and industrial towns
                        across the interior. This underpins a relatively mature
                        telecoms market with dense metro fibre, long-haul
                        backbones and strong demand for enterprise connectivity
                        and cloud services.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/za.png"
                        alt="South Africa Flag"
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
                      South Africa is a diversified upper-middle-income economy
                      and a key financial, industrial and logistics hub for the
                      African continent. Johannesburg and the broader Gauteng
                      region are the main centres for finance, services and
                      corporate headquarters, while Cape Town and Durban anchor
                      tourism, trade, manufacturing and technology ecosystems.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The country has some of the most advanced telecoms and
                      data-centre infrastructure in Africa. National
                      connectivity is built around long-haul fibre and microwave
                      routes linking Gauteng with coastal metros and mining and
                      industrial towns, complemented by dense metro fibre,
                      suburban access networks and extensive mobile coverage.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      South Africa has one of the highest rates of internet and
                      mobile broadband adoption on the continent, with widespread
                      3G/4G coverage and growing 5G deployments in major urban
                      areas. Fixed broadband and FTTH are well developed in
                      cities and suburbs, supporting cloud, content delivery and
                      high-bandwidth enterprise workloads.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=South%20Africa&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                          title="South Africa map"
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
                        South Africa’s international airports and ports are key
                        gateways for passengers, containers, bulk commodities
                        and automotive and manufacturing supply chains. They
                        anchor high demand for resilient connectivity supporting
                        aviation, logistics, customs, security and enterprise
                        operations.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          O. R. Tambo Intl. Airport (JNB) — Johannesburg /
                          Ekurhuleni (Gauteng)
                        </li>
                        <li>Cape Town Intl. Airport (CPT) — Cape Town</li>
                        <li>King Shaka Intl. Airport (DUR) — Durban</li>
                        <li>Port Elizabeth (Chief Dawid Stuurman) Intl. (PLZ)</li>
                        <li>Bram Fischer Intl. Airport (BFN) — Bloemfontein</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Durban — major container &amp; Ro-Ro hub</li>
                        <li>Port of Cape Town — containers &amp; general cargo</li>
                        <li>Port of Ngqura / Gqeberha (Coega)</li>
                        <li>Port of Richards Bay — bulk &amp; coal exports</li>
                        <li>Port of Saldanha Bay — bulk &amp; ore exports</li>
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
                        South Africa has one of the continent’s most developed
                        internet and broadband markets. Fixed and mobile
                        operators provide nationwide coverage, particularly
                        across urban and peri-urban areas, with strong fibre
                        footprints in major metros and growing FTTH coverage in
                        suburbs and business districts.
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
                                ≈45–50 million users
                              </td>
                              <td className="py-3 px-4">
                                Roughly three-quarters of the population online,
                                with high smartphone adoption.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Well developed in cities &amp; suburbs
                              </td>
                              <td className="py-3 px-4">
                                FTTH, FTTB and fixed wireless widely available in
                                major metros, with a growing independent fibre
                                operator ecosystem.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                3G/4G nationwide; 5G in key metros
                              </td>
                              <td className="py-3 px-4">
                                4G covers most of the population; 5G roll-outs
                                focused on Johannesburg, Pretoria, Cape Town,
                                Durban and other large cities.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Strong across major metros &amp; corridors
                              </td>
                              <td className="py-3 px-4">
                                DIA, IP-VPN, SD-WAN, cloud connectivity and
                                managed security services for finance,
                                manufacturing, mining, logistics, retail,
                                government and ICT providers.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Network designs typically blend diverse terrestrial
                        fibre routes, metro rings and wireless/satellite backup
                        to support high availability, regulatory requirements and
                        regional redundancy.
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
                  South Africa is a major landing point for several submarine
                  cable systems on both the Atlantic and Indian Ocean coasts,
                  connecting the country directly to Europe, Asia, the Middle
                  East and the Americas. This underpins its role as a regional
                  connectivity and data-centre hub.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  International landing stations in the Western and Eastern Cape
                  and KwaZulu-Natal are integrated into high-capacity national
                  backbones that connect Cape Town, Durban and other coastal
                  sites with Gauteng and inland provinces. These backbones
                  support mobile networks, wholesale capacity, IXPs and large
                  enterprise and cloud workloads.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Metro and regional rings in Gauteng, Cape Town, Durban and
                  other cities provide diverse paths to data centres, cloud
                  on-ramps and enterprise locations, enabling low-latency access
                  and high availability for mission-critical applications.
                </p>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in South Africa
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with leading South African and regional
                  carriers to deliver managed connectivity solutions in
                  Johannesburg, Pretoria, Cape Town, Durban, Gqeberha,
                  Bloemfontein and other strategic locations across South
                  Africa’s industrial, mining and logistics corridors.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support sectors such as financial services, ICT and cloud
                  providers, mining and resources, manufacturing, logistics and
                  ports, retail, public sector and education with secure,
                  scalable network and security services.
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
              . We support deployments across Johannesburg, Cape Town, Durban,
              Pretoria, Gqeberha and other major cities and corridors in South
              Africa.
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
                World Bank / ITU — South Africa ICT &amp; internet indicators
              </li>
              <li>
                Digital 2023–2024 South Africa — internet &amp; social media data
              </li>
              <li>
                National telecom regulator and market / data-centre reports
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SouthAfrica;
