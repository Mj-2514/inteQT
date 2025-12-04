import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Botswana: React.FC = () => {
    <Helmet>
        <title>
          Internet in Botswana | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Overview of Botswana’s internet connectivity, mobile and broadband access, regional fibre routes, and inte-QT service capabilities in Gaborone, Francistown, Maun and other key locations."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/africa/botswana"
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
            // Botswana savanna / wildlife vibe – swap to your own asset if needed
            backgroundImage:
              'url("https://images.unsplash.com/photo-1509099863731-ef4bff19e808?auto=format&fit=crop&w=1600&q=80")',
          }}
        />

        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1.5px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Botswana
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A landlocked Southern African economy with world-class wildlife
            tourism, a diamond-driven economy and rapidly growing mobile and
            internet adoption across urban and rural regions.
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
                        <strong>Population:</strong> ~2.5 million (2024 estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Southern Africa, semi-arid,
                        dominated by the Kalahari Desert
                      </li>
                      <li>
                        <strong>Neighbors:</strong> South Africa (south &amp;
                        southeast), Namibia (west &amp; north), Zimbabwe
                        (northeast), Zambia (north)
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> Gaborone
                      </li>
                      <li>
                        <strong>Other Major Cities:</strong> Francistown, Maun
                      </li>
                      <li>
                        <strong>Official Language:</strong> English (Setswana as
                        national language)
                      </li>
                      <li>
                        <strong>Currency:</strong> Botswana Pula (BWP)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Diamonds and mining,
                        beef exports, tourism, financial services,
                        manufacturing, energy (including solar)
                      </li>
                      <li>
                        <strong>Unemployment:</strong> ~25% (2024 estimate),
                        with high youth unemployment
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> ~68% of
                        population online (2022)
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Botswana is a politically stable, upper middle-income
                        country whose economy is heavily driven by diamond
                        mining, beef exports and high-value tourism. Gaborone
                        and Francistown act as administrative and commercial
                        hubs, while Maun is the gateway to the Okavango Delta.
                        Its landlocked geography means that international
                        connectivity relies on terrestrial fibre routes through
                        neighbouring countries.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/bw.png"
                        alt="Botswana Flag"
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
                      Botswana is a landlocked country in Southern Africa known
                      for its successful democratic governance, prudent economic
                      management and globally recognised wildlife conservation
                      model. Diamonds remain the largest source of export
                      revenue, complemented by beef exports, financial services,
                      manufacturing and increasingly, energy and tourism.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Gaborone, the capital, is the political and economic
                      centre, hosting government, banking and corporate
                      headquarters. Francistown is a key commercial and
                      industrial hub in the east, while Maun operates as the
                      main gateway to the Okavango Delta, one of the world&apos;s
                      premier safari destinations. These centres, along with
                      mining towns and border crossings, drive demand for
                      reliable connectivity.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The country faces structural challenges, including an
                      unemployment rate around 25% and high youth unemployment,
                      but continues to invest in education, skills, digital
                      infrastructure and economic diversification to reduce
                      reliance on diamonds and expand sectors such as tourism,
                      financial services and renewable energy.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Botswana&output=embed"
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
                  {/* Airports & Transport */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Airports & Regional Access
                      </h3>

                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        As a landlocked country, Botswana relies on regional
                        road and rail corridors through South Africa, Namibia
                        and other neighbours for access to seaports. Air
                        transport plays a critical role for business, tourism
                        and connections to the Okavango Delta and northern
                        parks.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          Sir Seretse Khama International Airport (GBE) —
                          Gaborone, main international gateway
                        </li>
                        <li>
                          Maun Airport (MUB) — primary gateway to the Okavango
                          Delta and safari lodges
                        </li>
                        <li>
                          Francistown Airport (FRW) — serves the eastern
                          commercial region
                        </li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Tourism Highlights
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>
                          Okavango Delta — UNESCO World Heritage Site, major
                          high-value safari destination
                        </li>
                        <li>
                          Chobe National Park — known for large elephant
                          populations and riverfront lodges
                        </li>
                        <li>
                          Central Kalahari Game Reserve &amp; Makgadikgadi Salt
                          Pans — unique desert and pans ecosystems
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
                        Botswana has high mobile penetration, with over 160
                        mobile subscriptions per 100 people, driven by strong
                        adoption in both urban and rural areas. Internet usage
                        is rising, primarily via mobile broadband, while fixed
                        broadband is more prevalent in cities and towns.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs">
                          <thead>
                            <tr className="bg-muted/30 border border-muted">
                              <th className="py-3 px-4 text-left font-semibold">
                                Metric
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Status / Estimate
                              </th>
                              <th className="py-3 px-4 text-left font-semibold">
                                Notes
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Subscriptions
                              </td>
                              <td className="py-3 px-4">
                                &gt;160 per 100 inhabitants
                              </td>
                              <td className="py-3 px-4">
                                Very high penetration, multiple SIM ownership
                                common; coverage extends to most populated areas.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Internet Users</td>
                              <td className="py-3 px-4">
                                ~68% of population (2022)
                              </td>
                              <td className="py-3 px-4">
                                Majority access via mobile broadband; ongoing
                                growth as data prices decline.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Concentrated in urban centres
                              </td>
                              <td className="py-3 px-4">
                                Available in cities like Gaborone and
                                Francistown; more limited in rural areas.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Landlines</td>
                              <td className="py-3 px-4">
                                Minimal and declining usage
                              </td>
                              <td className="py-3 px-4">
                                Fixed lines largely replaced by mobile and IP-based
                                services.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Wireless Networks</td>
                              <td className="py-3 px-4">
                                4G widely available; 5G pilots underway
                              </td>
                              <td className="py-3 px-4">
                                4G covers most urban and semi-urban areas; 5G
                                launched in pilot zones since 2023.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Key ISPs include Mascom Wireless, Orange Botswana and
                        BTC, offering mobile and fixed broadband packages with
                        ongoing investment in capacity, coverage and speeds.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Submarine / Regional Fibre & Our Capabilities */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* Regional & Submarine Connectivity */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Regional Fibre & International Connectivity
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  As a landlocked country, Botswana has no direct submarine
                  cable landings. Instead, it connects to international capacity
                  via terrestrial fibre routes through neighbours such as South
                  Africa and Namibia, which provide access to systems like the{" "}
                  <strong>Eastern Africa Submarine System (EASSy)</strong> and
                  the <strong>West Africa Cable System (WACS)</strong>.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  These cross-border backhaul routes are critical for ensuring
                  resilient international connectivity for government,
                  enterprises, financial institutions and the tourism industry.
                  Redundant paths, protected circuits and diverse routes are
                  typically used to mitigate the risk of cable faults or
                  cross-border disruptions.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/B04OZIm.png"
alt="Submarine Cables Botswana"
className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
/>

</div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Botswana
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with leading operators in Botswana and the
                  wider Southern African region to deliver managed connectivity
                  solutions in Gaborone, Francistown, Maun and other strategic
                  locations, including mining sites, border posts and tourism
                  corridors.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support key sectors such as mining and resources,
                  financial services, public sector, transport and logistics,
                  tourism and hospitality, and manufacturing with secure,
                  scalable network and security services tailored to local
                  conditions and international requirements.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Services</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Dedicated Lines (DL)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity",
                    "Service Level Agreements (SLA)",
                    "Customer Premises Equipment (CPE) / Routers",
                    "Global Enterprise Management Solutions (GEMS)",
                    "Diverse Gateway Solutions",
                    "Distributed Denial of Service (DDoS) Protection",
                  ].map((capability) => (
                    <div
                      key={capability}
                      className="flex items-start space-x-3 bg-card/40 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <div className="text-sm">{capability}</div>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our Global Business Solutions team can typically provide a{" "}
                  <strong>Commercial Offer within 2–4 working days</strong>.
                  Service deployments in Gaborone are generally completed within{" "}
                  <strong>4–6 weeks</strong>, with other cities and remote
                  locations subject to site readiness, access technology and
                  local logistics.
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
              . We support deployments across Gaborone, Francistown, Maun and
              other strategic sites in Botswana.
            </p>

            <p className="mb-6">
              <a
                href="mailto:sales@inte-qt.com?subject=Botswana Connectivity Enquiry"
                className="text-primary underline font-semibold"
              >
                Email Us
              </a>
            </p>

            <h4 className="mb-3 font-semibold">Suggested References</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>World Bank — Botswana population, ICT and economic data</li>
              <li>
                Botswana Tourism Organisation — tourism and conservation
                information
              </li>
              <li>
                National statistics and regulator reports on telecoms and
                internet usage
              </li>
              <li>
                Mascom Wireless, Orange Botswana, BTC — retail and business
                connectivity offerings
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Botswana;
