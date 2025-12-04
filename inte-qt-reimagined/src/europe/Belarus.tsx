import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Belarus: React.FC = () => {
    <Helmet>
        <title>Internet in Belarus | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Overview of Belarus’s internet connectivity, fixed and mobile broadband, international backbone routes and inte-QT service capabilities in Minsk, Brest, Gomel and other major cities."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/belarus"
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
            // Minsk / Belarus – swap with your own asset if you have one
            backgroundImage:
              'url("https://i.imgur.com/NshlLgh.jpg")',
          }}
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1.5px]" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Belarus
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A landlocked Eastern European country with a strong industrial base,
            significant transit position, and evolving broadband and mobile
            connectivity across major urban centres.
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
                        <strong>Population:</strong> ~9.3 million (recent
                        estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Eastern Europe, landlocked
                      </li>
                      <li>
                        <strong>Neighbors:</strong> Russia, Ukraine, Poland,
                        Lithuania, Latvia
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> Minsk
                      </li>
                      <li>
                        <strong>Major Cities:</strong> Minsk, Brest, Gomel, Grodno, Mogilev, Vitebsk
                      </li>
                      <li>
                        <strong>Official Languages:</strong> Belarusian, Russian
                      </li>
                      <li>
                        <strong>Currency:</strong> Belarusian Ruble (BYN)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Manufacturing,
                        machinery, petrochemicals, agriculture, logistics,
                        transport, IT and outsourcing
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Belarus sits at a strategic crossroads between the
                        European Union and Russia, with dense road and rail
                        corridors. Minsk acts as the main political, economic
                        and technology hub, with growing IT and outsourcing
                        activity alongside traditional industries.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/by.png"
                        alt="Belarus Flag"
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
                      Belarus is a landlocked country in Eastern Europe with a
                      diversified industrial and agricultural economy and an
                      important transit role for freight between the EU and
                      Russia. Minsk is the primary centre for government,
                      services, IT, and higher education.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Over the past years, Belarus has invested in telecoms and
                      fibre infrastructure, improving broadband access in major
                      urban areas while mobile networks provide coverage across
                      most of the population. Urban households typically have
                      access to fixed broadband, while rural areas rely more
                      heavily on mobile and wireless services.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Despite regulatory and geopolitical challenges, core
                      connectivity remains stable, with Minsk and regional
                      centres acting as key landing points for enterprise and
                      carrier services.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Belarus&output=embed"
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Airports/Logistics + Connectivity */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Airports & Logistics */}
                  <Card className="rounded-3xl border border-white/10 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        Main Airports & Logistics Gateways
                      </h3>

                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        As a landlocked state, Belarus relies on airports, rail
                        and road corridors for passenger and cargo flows, with
                        onward access to seaports in neighbouring countries.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>Minsk National Airport</li>
                        <li>Brest Airport</li>
                        <li>Gomel Airport</li>
                        <li>Grodno Airport</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Transport Corridors
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>
                          Rail and road routes linking Poland–Belarus–Russia
                        </li>
                        <li>
                          North–south links towards the Baltic states and
                          Ukraine
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
                        Belarus has widespread mobile coverage and growing fixed
                        broadband in cities. Internet usage is high in urban
                        populations, with fixed-line broadband, FTTx and cable
                        available in major cities, and mobile broadband serving
                        as the primary access method in many regional and rural
                        areas.
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
                                ~7–8 million users
                              </td>
                              <td className="py-3 px-4">
                                Majority of population online, especially in
                                cities.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Fixed Broadband
                              </td>
                              <td className="py-3 px-4">
                                Strong in major cities
                              </td>
                              <td className="py-3 px-4">
                                FTTx and cable concentrated in Minsk and regional
                                centres.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Mobile Networks
                              </td>
                              <td className="py-3 px-4">
                                4G nationwide; 3G fallback
                              </td>
                              <td className="py-3 px-4">
                                Primary internet access in regional and rural
                                areas.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Enterprise and wholesale connectivity typically leverages
                        high-capacity links into Minsk and cross-border routes to
                        neighbouring countries.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* International Backbone & Our Capabilities */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* International Backbone */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  International & Backbone Connectivity
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  As a landlocked country, Belarus does not host its own
                  submarine cable landing points, but it is connected to the
                  global internet via terrestrial fibre routes into neighbouring
                  states. These cross-border links provide access to major
                  European and Eurasian backbones and onward submarine systems.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Core routes connect Belarus westwards through Poland and the
                  Baltic region and eastwards into Russia, enabling diverse
                  paths for international IP transit and private connectivity.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/AIP3GvL.png"
alt="Submarine Cables Belarus"
className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
/>

</div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Belarus
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT delivers managed connectivity for enterprises in
                  Belarus, with a focus on Minsk and key regional hubs such as
                  Brest, Gomel, Grodno, Mogilev and Vitebsk. We work with
                  trusted local and regional partners to build secure and
                  resilient access.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity (4G last mile)",
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
                  Service delivery is usually possible within{" "}
                  <strong>6–8 weeks</strong>, subject to local access,
                  regulatory conditions and site readiness.
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
              . Our teams and regional partners support deployments in Minsk,
              Brest, Gomel, Grodno, Mogilev, Vitebsk and other Belarusian
              locations.
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
              <li>World Bank — Belarus (ICT & connectivity indicators)</li>
              <li>Digital reports on Belarus — DataReportal / ITU</li>
              <li>National Statistical Committee of the Republic of Belarus</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Belarus;
