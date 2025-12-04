import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Nigeria: React.FC = () => {
    <Helmet>
        <title>
          Internet in Nigeria | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Overview of Nigeria’s internet connectivity, fixed and mobile broadband, submarine cable and backbone routes, and inte-QT service capabilities in Lagos, Abuja, Port Harcourt, Kano and other key regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/nigeria"
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
            // Lagos skyline / Gulf of Guinea vibe – swap to your own asset if needed
            backgroundImage:
              'url("https://i.imgur.com/sAoqVlf.jpg")',
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
            Internet in Nigeria
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A leading West African economy with a young, urbanising population,
            fast-growing digital services, and extensive mobile and fibre
            backbones linking Lagos, Abuja and coastal hubs to inland cities and
            regional corridors.
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
                        <strong>Population:</strong> ~240 million (2025 estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> West Africa, Gulf of Guinea
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Benin (west), Niger (north),
                        Chad (northeast), Cameroon (east); Gulf of Guinea / Atlantic
                        Ocean (south)
                      </li>
                      <li>
                        <strong>Capital:</strong> Abuja
                      </li>
                      <li>
                        <strong>Largest City &amp; Commercial Hub:</strong> Lagos
                      </li>
                      <li>
                        <strong>Other Major Cities:</strong> Kano, Port Harcourt,
                        Ibadan, Kaduna, Enugu, Onitsha, Benin City
                      </li>
                      <li>
                        <strong>Official Language:</strong> English (with many
                        local languages widely spoken)
                      </li>
                      <li>
                        <strong>Currency:</strong> Nigerian Naira (NGN)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Oil &amp; gas, financial
                        services &amp; fintech, ICT &amp; telecoms, trade &amp;
                        logistics, manufacturing, agriculture, creative industries
                      </li>
                      <li>
                        <strong>Internet Penetration:</strong> ~45–50% of
                        population online (over 100 million users)
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Nigeria is Africa’s most populous country and one of its
                        largest economies. Economic activity is concentrated in
                        Lagos and other southern coastal states, the federal
                        capital Abuja, and major northern and eastern cities such
                        as Kano and Port Harcourt. This distribution drives dense
                        metro networks in and around Lagos and Abuja and long-haul
                        backbones along north–south and east–west corridors.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/ng.png"
                        alt="Nigeria Flag"
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
                      Nigeria is a diversified, oil-producing economy and a major
                      hub for finance, trade, media and technology in West Africa.
                      Lagos is a key financial and digital-services centre, while
                      Abuja is the political capital and northern and eastern
                      cities such as Kano and Port Harcourt anchor trade,
                      agriculture, logistics and energy activity.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The country’s young, rapidly urbanising population is
                      driving strong demand for mobile data, cloud services and
                      fintech. National connectivity is structured around coastal
                      and inland backbones connecting Lagos, Abuja and other
                      state capitals, with metro fibre and wireless networks
                      densest in large cities and along major transport corridors.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Nigeria has one of Africa’s largest bases of internet users
                      and mobile subscriptions. Broadband penetration has been
                      rising steadily as 3G/4G coverage expands and 5G roll-outs
                      begin in key urban areas, although quality and availability
                      still vary between dense metros and rural regions.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Nigeria&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                          title="Nigeria map"
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
                        Nigeria’s international airports and seaports are
                        critical gateways for passengers, oil &amp; gas,
                        containers and regional trade, generating strong demand
                        for resilient connectivity for aviation, logistics,
                        government and enterprise users.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          Murtala Muhammed Intl. Airport (LOS) — Lagos
                        </li>
                        <li>
                          Nnamdi Azikiwe Intl. Airport (ABV) — Abuja
                        </li>
                        <li>
                          Port Harcourt Intl. Airport (PHC) — Port Harcourt
                        </li>
                        <li>
                          Mallam Aminu Kano Intl. Airport (KAN) — Kano
                        </li>
                        <li>
                          Akanu Ibiam Intl. Airport (ENU) — Enugu
                        </li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>
                          Lagos Ports Complex (Apapa &amp; Tin Can Island)
                        </li>
                        <li>Lekki Deep Sea Port (Lagos area)</li>
                        <li>Port Harcourt Port &amp; Onne Port Complex</li>
                        <li>Warri Port</li>
                        <li>Calabar Port</li>
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
                        Nigeria has one of Africa’s largest internet and mobile
                        broadband markets. Most users access the internet via
                        mobile networks, with 3G/4G widely available and 5G
                        emerging in major cities. Fixed broadband and FTTH are
                        growing in Lagos, Abuja and other large metros but remain
                        limited at national scale.
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
                                ≈110+ million users
                              </td>
                              <td className="py-3 px-4">
                                Internet penetration around the mid-40% range of
                                the total population, and rising.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Broadband</td>
                              <td className="py-3 px-4">
                                Broadband penetration approaching ~50%
                              </td>
                              <td className="py-3 px-4">
                                Mix of mobile broadband (dominant) and a smaller
                                fixed broadband/FTTH base concentrated in major
                                cities.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                3G/4G nationwide; 5G in key cities
                              </td>
                              <td className="py-3 px-4">
                                4G covers a large share of the population; 5G
                                roll-outs focused on Lagos, Abuja and other large
                                metros.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Strongest in Lagos, Abuja &amp; key corridors
                              </td>
                              <td className="py-3 px-4">
                                DIA, IP-VPN, SD-WAN and managed services for
                                finance, oil &amp; gas, manufacturing, logistics,
                                government, media and tech hubs across major
                                cities and industrial zones.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Network designs commonly combine terrestrial fibre, metro
                        rings and wireless or satellite backup to manage power,
                        congestion and route diversity requirements in large
                        urban areas and across long-haul corridors.
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
                  Nigeria connects to the global internet via multiple
                  high-capacity submarine cable systems landing primarily around
                  Lagos on the Gulf of Guinea. These include regional and
                  transcontinental systems that provide diverse paths to Europe,
                  the Americas and other African hubs.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  International landing stations are linked into national fibre
                  backbones operated by major carriers, with routes extending
                  from Lagos across the six geopolitical zones and to Abuja,
                  Port Harcourt, Kano and other state capitals. These backbones
                  support mobile networks, enterprise services, data centres and
                  internet exchanges.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  Metro rings in Lagos, Abuja and other large cities, combined
                  with regional aggregation networks, enable cloud on-ramps,
                  content delivery and low-latency paths for domestic and
                  regional traffic.
                </p>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Nigeria
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT partners with leading Nigerian and regional operators
                  to deliver managed connectivity solutions in Lagos, Abuja,
                  Port Harcourt, Kano, Ibadan, Enugu, Onitsha and other
                  strategic locations across the country’s coastal, central and
                  northern corridors.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support sectors such as financial services and fintech,
                  oil &amp; gas and energy, manufacturing, logistics and ports,
                  media &amp; entertainment, education, NGOs and public sector
                  with secure, scalable network and security solutions.
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
              . We support deployments across Lagos, Abuja, Port Harcourt, Kano,
              Ibadan and other major cities and corridors in Nigeria.
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
              <li>World Bank / ITU — Nigeria ICT &amp; internet indicators</li>
              <li>Digital 2025–2026 Nigeria — internet &amp; social media data</li>
              <li>
                Nigerian Communications Commission (NCC) reports &amp; market
                statistics
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Nigeria;
