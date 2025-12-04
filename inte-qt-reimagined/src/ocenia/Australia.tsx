import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Australia: React.FC = () => {
    <Helmet>
        <title>
          Internet in Australia | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Overview of Australia’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Sydney, Melbourne, Brisbane, Perth and other key regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/oceania/australia"
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
            // Sydney harbour / big-city coast vibe – swap to your own asset if needed
            backgroundImage:
              'url("https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80")',
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
            Internet in Australia
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A high-income Asia–Pacific economy with mature broadband markets,
            dense coastal metro networks, and long-haul backbones linking
            Sydney, Melbourne, Brisbane and Perth to regional centres and
            submarine cable gateways.
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
                        <strong>Population:</strong> ~26–27 million (mid-2020s
                        estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Oceania / Asia–Pacific
                      </li>
                      <li>
                        <strong>Geography:</strong> Island continent bordered
                        by the Indian Ocean (west) and Pacific / Tasman / Coral
                        Seas (east)
                      </li>
                      <li>
                        <strong>Capital City:</strong> Canberra
                      </li>
                      <li>
                        <strong>Largest Cities:</strong> Sydney, Melbourne,
                        Brisbane, Perth, Adelaide
                      </li>
                      <li>
                        <strong>Other Major Centres:</strong> Gold Coast,
                        Newcastle, Canberra, Hobart, Darwin, Townsville
                      </li>
                      <li>
                        <strong>Official Language:</strong> English (de facto)
                      </li>
                      <li>
                        <strong>Currency:</strong> Australian Dollar (AUD)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Services &amp; finance,
                        mining &amp; resources, agriculture, education &amp;
                        international students, tourism, ICT, logistics
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> &gt;90% of
                        population online
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Australia has a highly urbanised population concentrated
                        along the eastern and south-eastern seaboard and in
                        Perth in the west. The vast interior (“outback”) is
                        sparsely populated, which drives a strong focus on dense
                        metro fibre and fixed access in cities, long-haul
                        backbones between state capitals, and satellite or
                        wireless solutions for remote and regional communities.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/au.png"
                        alt="Australia Flag"
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
                      Australia is a high-income, services-led economy and a key
                      financial and technology hub in the Asia–Pacific region.
                      Sydney and Melbourne are major centres for banking,
                      professional services, media and digital industries, while
                      Brisbane, Perth and Adelaide anchor resources, energy,
                      manufacturing and logistics activity.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The country’s telecoms market is mature, with nationwide
                      mobile coverage, extensive backbones and the National
                      Broadband Network (NBN) providing fixed broadband using a
                      mix of fibre, fixed wireless and satellite. Connectivity
                      is densest in metro and suburban areas along the eastern
                      seaboard, with long-haul routes running between capitals
                      and into regional centres and mining hubs.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Internet adoption is very high, with widespread use of
                      cloud services, collaboration platforms and SaaS in both
                      consumer and enterprise segments. 4G and 5G mobile
                      broadband, along with FTTP/FTTC and HFC in many suburbs,
                      support low-latency links into regional data centres and
                      global clouds.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Australia&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                          title="Australia map"
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
                        Australia’s international airports and container ports
                        are critical gateways for passengers, trade, resources
                        exports and logistics, and they concentrate demand for
                        high-availability connectivity, security and cloud
                        services.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          Sydney Kingsford Smith Airport (SYD) — Sydney
                        </li>
                        <li>Melbourne Airport (MEL) — Melbourne</li>
                        <li>Brisbane Airport (BNE) — Brisbane</li>
                        <li>Perth Airport (PER) — Perth</li>
                        <li>Adelaide Airport (ADL) — Adelaide</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port Botany (Sydney)</li>
                        <li>Port of Melbourne</li>
                        <li>Port of Brisbane</li>
                        <li>Port of Fremantle (Perth)</li>
                        <li>Bulk ports in Newcastle, Port Hedland and others</li>
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
                        Australia has a mature broadband market with high
                        internet adoption. The NBN underpins fixed broadband
                        access, while 4G and 5G mobile networks provide
                        extensive coverage and are increasingly used as
                        complementary or backup access for homes, SMEs and
                        enterprises.
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
                                ≈22–24 million users
                              </td>
                              <td className="py-3 px-4">
                                Internet penetration well above 90% of the
                                population.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Widely available via NBN
                              </td>
                              <td className="py-3 px-4">
                                Mix of FTTP, FTTC, HFC, fixed wireless and
                                satellite; strongest in metro/suburban areas,
                                with tailored solutions for regional and remote
                                communities.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                4G nationwide; 5G in major cities and corridors
                              </td>
                              <td className="py-3 px-4">
                                High smartphone adoption; 5G roll-outs focused
                                on capital cities and high-traffic areas, with
                                4G providing broad national coverage.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Strong in metros &amp; key regional hubs
                              </td>
                              <td className="py-3 px-4">
                                DIA, IP-VPN, SD-WAN, cloud connectivity and
                                managed services for finance, government,
                                education, healthcare, resources, logistics and
                                digital businesses.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Network designs commonly combine diverse terrestrial
                        fibre routes, metro rings, NBN access and mobile or
                        satellite backup to meet high availability, latency and
                        business continuity requirements, especially between
                        state capitals and regional sites.
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
                  Australia is connected to the global internet by multiple
                  high-capacity submarine cable systems landing around Sydney,
                  Melbourne, Perth and other coastal sites, providing diverse
                  paths to Asia, North America and other Pacific and Indian
                  Ocean hubs.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  International landing stations feed into national long-haul
                  backbones that run between state capitals and along major
                  transport corridors, interconnecting Sydney, Melbourne,
                  Brisbane, Canberra, Adelaide, Perth and key regional centres.
                  These routes support mobile networks, data centres, content
                  delivery and enterprise workloads.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/5Sc9hBb.png"
alt="Submarine Cables in Australia"
className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
/>

</div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Australia
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with leading Australian and regional
                  operators to deliver managed connectivity solutions in Sydney,
                  Melbourne, Brisbane, Perth, Adelaide, Canberra and other
                  strategic metro and regional locations.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support sectors such as financial services, cloud and
                  technology providers, resources and energy, logistics and
                  ports, education and research, healthcare, retail and public
                  sector with secure, scalable network and security services.
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
              . We support deployments across Sydney, Melbourne, Brisbane,
              Perth, Adelaide, Canberra and other major cities and regions in
              Australia.
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
              <li>World Bank / ITU — Australia ICT &amp; internet indicators</li>
              <li>Digital 2023–2024 Australia — internet &amp; social data</li>
              <li>National telecom regulator and NBN market reports</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Australia;
