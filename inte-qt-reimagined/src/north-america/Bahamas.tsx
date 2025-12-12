import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Bahamas: React.FC = () => {
    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Internet in The Bahamas | Connectivity, ISPs & Broadband Overview",
  description:
    "Overview of The Bahamas’ internet connectivity, fixed and mobile broadband, submarine cable systems and inte-QT service capabilities in Nassau, Freeport and across the Family Islands.",
  url: "https://www.inte-qt.com/coverage/north-america/bahamas",
  about: {
    "@type": "Country",
    name: "The Bahamas",
    alternateName: "Commonwealth of The Bahamas",
    capital: {
      "@type": "City",
      name: "Nassau"
    },
    officialLanguage: "English",
    currency: "BSD",
    population: {
      "@type": "QuantitativeValue",
      value: 410000
    }
  },
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.inte-qt.com/#website"
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.inte-qt.com/#organization"
  }
};

  return (
    <>
    <Helmet>
  <title>
    Internet in The Bahamas | Connectivity, ISPs & Broadband Overview
  </title>

  <meta
    name="description"
    content="Overview of The Bahamas’ internet connectivity, fixed and mobile broadband, submarine cable systems and inte-QT service capabilities in Nassau, Freeport and across the Family Islands."
  />

  <link
    rel="canonical"
    href="https://www.inte-qt.com/coverage/north-america/bahamas"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {JSON.stringify(jsonLd)}
  </script>
</Helmet>

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
            // Bahamas beach / Nassau vibe – swap with your own asset if needed
            backgroundImage:
              'url("https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80")',
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
            Internet in The Bahamas
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A multi-island Caribbean nation where tourism, financial services and
            resilient connectivity are critical to supporting residents, visitors
            and offshore businesses.
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
                        <strong>Population:</strong> ~410,000 (recent estimate)
                      </li>
                      <li>
                        <strong>Region:</strong> Atlantic / Caribbean, north of
                        Cuba and southeast of Florida
                      </li>
                      <li>
                        <strong>Composition:</strong> Archipelago of ~700 islands
                        and cays, including New Providence (Nassau) and Grand
                        Bahama (Freeport)
                      </li>
                      <li>
                        <strong>Capital &amp; Largest City:</strong> Nassau
                        (New Providence)
                      </li>
                      <li>
                        <strong>Other Main Centres:</strong> Freeport (Grand
                        Bahama), Marsh Harbour, George Town (Exuma)
                      </li>
                      <li>
                        <strong>Official Language:</strong> English
                      </li>
                      <li>
                        <strong>Currency:</strong> Bahamian Dollar (BSD), pegged
                        to the US Dollar
                      </li>
                      <li>
                        <strong>Key Industries:</strong> Tourism, financial
                        services, shipping, real estate, construction, logistics,
                        light manufacturing, ICT
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Country Snapshot
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        The Bahamas is a high-income island state with a
                        services-based economy and significant reliance on
                        international tourism and financial services. Nassau and
                        Freeport are core economic hubs, while the &quot;Family
                        Islands&quot; have smaller populations and more
                        dispersed infrastructure.
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://flagcdn.com/w320/bs.png"
                        alt="Bahamas Flag"
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
                {/* Overview & Tourism */}
                <Card className="rounded-3xl shadow-xl border border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">
                      A Brief Overview
                    </h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The Commonwealth of The Bahamas is a sovereign archipelago
                      extending across the Atlantic and northern Caribbean.
                      Nassau, on New Providence Island, is the political and
                      commercial centre, while Freeport on Grand Bahama serves as
                      a major industrial and logistics hub.
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The economy is dominated by tourism and financial
                      services, supported by ports, airports and a network of
                      resorts, marinas and commercial districts. Reliable
                      connectivity is essential for hotels, cruise operations,
                      banking, and government services spread across multiple
                      islands.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3">
                      Tourism & Digital Demand
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Millions of visitors arrive each year by air and cruise,
                      concentrating traffic around Nassau, Paradise Island,
                      Grand Bahama and selected Family Islands. This drives
                      strong requirements for high-capacity internet, Wi-Fi and
                      mobile networks in airports, cruise terminals, resorts and
                      entertainment districts.
                    </p>

                    {/* Map */}
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Map</h3>
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                        <iframe
                          src="https://www.google.com/maps?q=Bahamas&output=embed"
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
                        As an island state, The Bahamas relies on a network of
                        airports and seaports to link Nassau, Grand Bahama and
                        the Family Islands with regional and global markets.
                      </p>

                      <h4 className="font-semibold text-sm mb-2">
                        Key International Airports
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>
                          Lynden Pindling International Airport (NAS), Nassau
                        </li>
                        <li>Grand Bahama International Airport (FPO), Freeport</li>
                        <li>Marsh Harbour Airport (MHH), Abaco</li>
                        <li>Exuma International Airport (GGT), Great Exuma</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Major Seaports & Cruise Terminals
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mb-4">
                        <li>Nassau Cruise Port &amp; Harbour</li>
                        <li>Freeport Container Port &amp; Harbour</li>
                        <li>Private cruise line islands (e.g. CocoCay, Castaway Cay)</li>
                      </ul>

                      <h4 className="font-semibold text-sm mb-2">
                        Inter-Island Connectivity
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                        <li>Domestic flights connecting major islands</li>
                        <li>Ferry and mailboat services for passengers &amp; cargo</li>
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
                        The Bahamas has widespread mobile coverage and growing
                        fixed broadband, particularly on New Providence and
                        Grand Bahama. Fibre, hybrid fibre-coax and fixed
                        wireless solutions provide high-speed access for
                        businesses, hospitality, government and residential
                        customers in main population centres.
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
                                Majority of residents online
                              </td>
                              <td className="py-3 px-4">
                                High penetration relative to population size.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Fixed Broadband</td>
                              <td className="py-3 px-4">
                                Strongest in Nassau &amp; Freeport
                              </td>
                              <td className="py-3 px-4">
                                Fibre, cable and fixed wireless in main urban
                                areas; more limited on smaller islands.
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">Mobile Networks</td>
                              <td className="py-3 px-4">
                                4G/LTE widely available
                              </td>
                              <td className="py-3 px-4">
                                Primary access for many residents and tourists;
                                5G trials/rollout in select zones (depending on
                                operator).
                              </td>
                            </tr>
                            <tr className="border-t border-muted/40">
                              <td className="py-3 px-4">
                                Enterprise Connectivity
                              </td>
                              <td className="py-3 px-4">
                                Concentrated in Nassau &amp; key islands
                              </td>
                              <td className="py-3 px-4">
                                DIA, MPLS/IP-VPN and managed services for banks,
                                resorts, government and offshore business
                                centres.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        The archipelagic geography makes last-mile delivery
                        more complex outside the main islands, often requiring a
                        mix of terrestrial, microwave and subsea links.
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
                  The Bahamas is connected to the global internet via multiple
                  regional submarine cable systems linking it to the United
                  States, other Caribbean nations and regional hubs. These
                  systems provide high-capacity, low-latency access for voice,
                  data and cloud services.
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  International capacity typically lands on New Providence and
                  Grand Bahama, before being backhauled to other islands using a
                  combination of subsea, terrestrial and microwave links.
                </p>

                <div className="flex justify-center">

<img
src="https://i.imgur.com/Uven6v0.png"
alt="Submarine Cables in Bahamas"
className="rounded-xl shadow-lg border border-white/20 w-full max-w-3xl mx-auto"
/>

</div>
              </CardContent>
            </Card>

            {/* Our Capabilities */}
            <Card className="rounded-3xl border border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Our Capabilities in The Bahamas
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  inte-QT delivers managed connectivity solutions for enterprises
                  across The Bahamas, with a focus on Nassau, Paradise Island,
                  Freeport, airport and cruise port zones, resorts, marinas and
                  key government and financial districts.
                </p>

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
                  <strong>Commercial Offer within 2–4 working days</strong>, with
                  service delivery in most locations within{" "}
                  <strong>4–6 weeks</strong>, depending on local access, island,
                  and site readiness.
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
              . We support deployments across Nassau, Freeport and selected
              Family Islands in The Bahamas.
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
              <li>World Bank — The Bahamas (ICT & connectivity indicators)</li>
              <li>Caribbean telecom &amp; broadband reports</li>
              <li>Utilities Regulation and Competition Authority (URCA) — Bahamas</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Bahamas;
