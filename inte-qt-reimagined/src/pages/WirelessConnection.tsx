import { CheckCircle, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WirelessConnection = () => {
  <Helmet>
  <title>Wireless Connect (XC) | 3G/4G LTE/5G Enterprise Wireless | inte-QT</title>

  <meta
    name="description"
    content="Wireless Connect (XC) by inte-QT delivers secure 3G/4G LTE/5G wireless connectivity for enterprise automation, IoT, remote operations, and rapid deployments across 190+ countries."
  />

  <meta
    name="keywords"
    content="wireless connect, XC, LTE connectivity, 5G enterprise internet, global wireless service, IoT connectivity, remote wireless solution, wireless broadband for business, inte-QT XC"
  />

  <link rel="canonical" href="https://www.inte-qt.com/services/wireless-connection" />

  {/* OpenGraph */}
  <meta property="og:title" content="Wireless Connect (XC) | Global 3G/4G/5G Connectivity" />
  <meta
    property="og:description"
    content="High-speed, enterprise-grade wireless connectivity for automation, IoT, and remote business environments with coverage in 190+ countries."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.inte-qt.com/services/wireless-connection" />
  <meta property="og:image" content="https://i.imgur.com/89t9JdN.jpeg" />

  {/* Twitter Meta */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Wireless Connect (XC) — Enterprise LTE & 5G" />
  <meta
    name="twitter:description"
    content="Secure global wireless connectivity powered by 3G/4G LTE/5G technology for IoT and mission-critical operations."
  />
  <meta name="twitter:image" content="https://i.imgur.com/89t9JdN.jpeg" />

  {/* Schema — Product Page */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Wireless Connect (XC)",
        "brand": "inte-QT",
        "description": "Enterprise-grade 3G, 4G LTE, and 5G wireless connectivity for IoT, automation, and global operations.",
        "url": "https://www.inte-qt.com/services/wireless-connection",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    `}
  </script>
</Helmet>

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-24">

        {/* HERO SECTION */}
        <section className="gradient-hero text-primary-foreground py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-white dark:text-white text-5xl md:text-6xl font-bold animate-ffade-in">
              Wireless Connect (XC)
            </h1>
            <p className="text-white dark:text-white text-xl md:text-2xl opacity-90 mt-4 max-w-3xl mx-auto animate-fade-in-up">
              High-speed, secure 3G/4G LTE/5G wireless connectivity engineered
              for automation, IoT, and modern business agility.
            </p>
          </div>
        </section>

        {/* WHAT IS XC + IMAGE SIDE BY SIDE */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">

              {/* LEFT — TEXT */}
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-8">
                  What is Wireless Connect (XC)?
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Wireless Connect (XC) leverages{" "}
                  <span className="font-semibold text-primary">3G, 4G LTE, and 5G</span>{" "}
                  mobile broadband technologies to deliver fast, secure,
                  enterprise-ready wireless connectivity for organizations.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  It ensures global reach, stable performance, and security —
                  making it ideal for{" "}
                  <span className="font-semibold">IoT applications, automation, remote operations</span>,
                  and locations where wired internet is impractical.
                </p>
              </div>

              {/* RIGHT — IMAGE */}
              <div className="flex-1">
                <div
                  className="w-full h-[320px] lg:h-[360px] rounded-2xl shadow-lg bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://www.gadgetmatch.com/wp-content/uploads/2018/12/GadgetMatch-20181219-5G-Explainer-03.gif)",
                  }}
                ></div>
              </div>

            </div>
          </div>
        </section>

        {/* GLOBAL WIRELESS CONNECT */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">

              <div className="flex-1">
                <Globe className="w-16 h-16 text-primary mb-6" />
                <h2 className="text-4xl font-bold mb-4">
                  End-to-End Fully Managed Global Wireless Connect
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With partnerships across{" "}
                  <span className="font-semibold text-primary">190+ countries</span>,
                  we deliver secure XC/LTE wireless connectivity backed by strong SLAs,
                  fast deployment, and enterprise-grade support.
                </p>
              </div>

              <Card className="flex-1 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className="w-full h-[260px] bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/vector-1761074483084-ec628a7624b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBjb25uZWN0aW9ufGVufDB8MHwwfHx8Mg%3D%3D)",
                    }}
                  ></div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Businesses Choose Wireless Connect (XC)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Quick deployments with high-capacity bandwidth",
                "Uninterrupted connectivity with minimal disruptions",
                "SIM device pairing for secure dedicated access",
                "Dedicated portal for optimizing tariffs",
                "Secure wireless connectivity for IoT & automation",
                "Reliable performance in hard-to-reach regions",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 p-5 bg-card shadow-sm rounded-xl hover:shadow-lg transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <p className="font-medium leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY INTE-QT UNIQUE */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">What Makes inte-QT Unique?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
              {[
                "Unmatched fast delivery",
                "Global presence with strong local expertise",
                "Proactive monitoring by NSOC 24×7×365",
                "Standardized, secure wireless process",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready for Wireless XC?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-white">
              Connect with our specialists and bring secure, high-speed wireless
              connectivity to any location on the globe.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Contact Sales
            </Button>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default WirelessConnection;
