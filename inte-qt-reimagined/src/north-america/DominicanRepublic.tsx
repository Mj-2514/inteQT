import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const DominicanRepublic: React.FC = () => {
    <Helmet>
        <title>
          Internet in Dominican Republic | Connectivity, ISPs & Broadband Overview
        </title>
        <meta
          name="description"
          content="Overview of the Dominican Republic’s internet connectivity, fixed and mobile broadband, submarine cable systems and inte-QT service capabilities in Santo Domingo, Santiago de los Caballeros, Punta Cana and other key regions."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe/dominicanrepublic"
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
            // DR beach/city vibe – swap with your own asset if needed
            backgroundImage:
              'url("https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=1600&q=80")',
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
            Internet in Dominican Republic
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A leading Caribbean economy where tourism, services and industry rely
            on expanding fibre, mobile and submarine connectivity across the
            island.
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
                        <strong>Population:</strong> ~11 million (recent estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Caribbean, shares the island of
                        Hispaniola with Haiti
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> Santo Domingo
                      </li>
                      <li>
                        <strong>Other Major Cities:</strong> Santiago de los
                        Caballeros, San Pedro de Macorís, La Romana, Puerto Plata,
                        Punta Cana/Bávaro corridor
                      </li>
                      <li>
                        <strong>Official Language:</strong> Spanish
                      </li>
                      <li>
                        <strong>Currency:</strong> Dominican Peso (DOP)
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Tourism, services,
                        manufacturing (free zones), agriculture, mining, telecom,
                        construction, remittances
                      </li>
                      <li>
                        <strong>Tourism:</strong> One of the Caribbean’s top
                        tourist destinations by arrivals
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        The Dominican Republic combines major resort areas,
                        industrial free zones and a dense capital region. Tourism
                        hotspots like Punta Cana and Puerto Plata, together with
                        Santo Domingo and Santiago, concentrate demand for
                        high-quality connectivity.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/do.png"
                        alt="Dominican Republic Flag"
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
                      The Dominican Republic is the second-largest country in the
                      Caribbean by land area and population. Santo Domingo is the
                      political, financial and logistics centre, while
                      Santiago de los Caballeros, the Cibao Valley and multiple
                      free zones support manufacturing and agribusiness.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The economy is service-led, with tourism and related
                      activities playing a critical role. Resort clusters in Punta
                      Cana, La Romana and Puerto Plata create concentrated demand
                      for high-capacity internet, Wi-Fi and mobile connectivity.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Broadband and mobile networks have expanded significantly
                      over the last decade, with fibre deployments in urban areas
                      and extensive 4G coverage nationwide. However, there remain
                      differences between city, tourist corridor and rural
                      connectivity quality.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Dominican%20Republic&output=embed"
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
                        International airports and seaports are critical for
                        tourism, trade and cruise operations, especially along the
                        eastern and northern coasts.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          Las Américas International Airport (SDQ) — Santo Domingo
                        </li>
                        <li>
                          Punta Cana International Airport (PUJ) — Punta Cana
                        </li>
                        <li>
                          Cibao International Airport (STI) — Santiago de los
                          Caballeros
                        </li>
                        <li>Gregorio Luperón International Airport (POP) — Puerto Plata</li>
                        <li>La Romana International Airport (LRM)</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports & Cruise Terminals
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Port of Santo Domingo</li>
                        <li>Caucedo Port (near Santo Domingo)</li>
                        <li>Puerto Plata cruise terminals (e.g. Amber Cove)</li>
                        <li>La Romana cruise port</li>
                        <li>Samaná and other regional ports</li>
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
                        The Dominican Republic has a competitive telecom market
                        with multiple operators providing fibre, cable, xDSL and
                        mobile services. Urban areas and resort corridors enjoy
                        relatively advanced connectivity, while rural and
                        mountainous regions rely more on mobile and fixed
                        wireless.
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
                                Majority of population online
                              </td>
                              <td className="py-3 px-4">
                                High usage in cities and tourism areas; growing
                                elsewhere.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Strongest in Santo Domingo, Santiago &amp; resorts
                              </td>
                              <td className="py-3 px-4">
                                Fibre and high-speed cable widely available in
                                main urban/tourism zones.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                4G/LTE widely available; 5G in select areas
                              </td>
                              <td className="py-3 px-4">
                                Primary access method for many residential and
                                SME users.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Concentrated in main cities &amp; free zones
                              </td>
                              <td className="py-3 px-4">
                                DIA, MPLS/IP-VPN, SD-WAN and managed Wi-Fi for
                                hotels, BPOs, free zones and government.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        Seasonal tourism peaks, events and cruise schedules can
                        generate significant short-term spikes in data demand,
                        particularly in coastal resort regions.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Submarine Cables & Our Capabilities */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* Submarine Cables & International Backbone */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Submarine Cables & International Backbone
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The Dominican Republic is connected to the global internet via
                  multiple Caribbean and Americas submarine cable systems,
                  providing diverse paths to the United States, Latin America and
                  other regional hubs.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Cable landings on the island feed into national fibre and
                  microwave backbones, which distribute capacity to
                  Santo Domingo, Santiago, resort areas and regional cities.
                </p>

                {/* Submarine Cable Systems */}
<div className="mt-6">
  <h3 className="text-xl font-semibold mb-3">Major Submarine Cable Systems</h3>

  <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
    <li>AMERICAS-I (Americas Region Cable System)</li>
    <li>ARCOS-1 (Americas Region Caribbean Ring)</li>
    <li>Antillas 1</li>
    <li>CARCIP Fiber Infrastructure</li>
    <li>EmeraldExpress (regional routes)</li>
    <li>South America – Caribbean Cable System (SAC)</li>
    <li>Global Caribbean Network (GCN)</li>
  </ul>

  {/* Submarine Cable Map */}
  <div className="mt-5">
    
    <div className="flex justify-center">
    <a
                    href="https://www.submarinecablemap.com/country/dominican-republic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
      <img
        src="/Dominican.png"
        alt="Submarine Cable Map Dominican Republic"
        className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
      />
      </a>
    </div>
  </div>
</div>

              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in Dominican Republic
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT works with leading local and regional operators to
                  deliver managed connectivity in Santo Domingo, Santiago,
                  Punta Cana, La Romana, Puerto Plata and other key commercial
                  and tourism hubs.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We support verticals including hospitality, BPO and contact
                  centres, manufacturing, financial services and government,
                  aligning service levels with critical application and uptime
                  requirements.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Services</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    "Dedicated Internet Access (DIA)",
                    "Business Broadband (BB)",
                    "Wireless Connectivity (4G/LTE last mile)",
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
                  <strong>Commercial Offer within 2–4 working days</strong>,
                  with services generally deliverable within{" "}
                  <strong>4–6 weeks</strong>, subject to local access
                  availability and site readiness.
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
              . We support deployments across Santo Domingo, Santiago,
              Punta Cana, Puerto Plata, La Romana and other strategic locations
              in the Dominican Republic.
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
    <a
      href="https://data.worldbank.org/country/dominican-republic"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline font-semibold"
    >
      World Bank – Dominican Republic ICT Indicators
    </a>
  </li>

  <li>
    <a
      href="https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline font-semibold"
    >
      ITU – Telecom & Digital Reports for Dominican Republic
    </a>
  </li>

  <li>
    <a
      href="https://indotel.gob.do/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline font-semibold"
    >
      INDOTEL – National Telecom Regulator (Dominican Republic)
    </a>
  </li>

  <li>
    <a
      href="https://www.submarinecablemap.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline font-semibold"
    >
      Submarine Cable Map – Global Subsea Systems
    </a>
  </li>

</ul>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DominicanRepublic;
