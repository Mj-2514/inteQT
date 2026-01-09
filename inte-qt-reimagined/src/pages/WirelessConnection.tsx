import { CheckCircle, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WirelessConnection = () => {
  return (
    <>
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

      <Navbar />

      <div className="min-h-screen pt-20 md:pt-24">

        {/* HERO SECTION - Responsive */}
        <section className="gradient-hero text-primary-foreground py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Wireless Connect (XC)
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto px-2">
              High-speed, secure 3G/4G LTE/5G wireless connectivity engineered
              for automation, IoT, and modern business agility.
            </p>
          </div>
        </section>

        {/* WHAT IS XC + IMAGE SIDE BY SIDE - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12">

              {/* LEFT — TEXT */}
              <div className="flex-1 w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
                  What is Wireless Connect (XC)?
                </h2>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Networks that use 3G, 4G Long Term Evolution (LTE), and 5G mobile broadband technologies.
                  </p>

                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    It offers global coverage, security, and other capabilities to organizations for uninterrupted internet access— especially for advanced IoT (Internet of Things) applications and automation.
                  </p>
                </div>
              </div>

              {/* RIGHT — IMAGE */}
              <div className="flex-1 w-full">
                <div
                  className="w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] rounded-xl sm:rounded-2xl shadow-lg md:shadow-xl bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://www.gadgetmatch.com/wp-content/uploads/2018/12/GadgetMatch-20181219-5G-Explainer-03.gif)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* GLOBAL WIRELESS CONNECT - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-center">

              {/* Content */}
              <div className="flex-1 w-full">
                <div className="mb-4 sm:mb-6">
                  <Globe className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-4 leading-tight">
                  End-to-End Fully Managed Global Wireless Connect
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We have relations with carriers and managed service partners in more than 190+ countries across the world, giving us unmatched presence to provide wireless connect (XC) and LTE solutions with best-in-segment SLAs.
                </p>
              </div>

              {/* Image Card */}
              <div className="flex-1 w-full">
                <Card className="shadow-lg sm:shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border-0">
                  <CardContent className="p-0">
                    <div
                      className="w-full h-[200px] sm:h-[240px] md:h-[260px] bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url(https://images.unsplash.com/vector-1761074483084-ec628a7624b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBjb25uZWN0aW9ufGVufDB8MHwwfHx8Mg%3D%3D)",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>

        {/* KEY FEATURES - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20 bg-muted/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
              Why Businesses Choose Wireless Connect (XC)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
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
                  className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 md:p-5 bg-card shadow-sm hover:shadow-lg transition-all rounded-lg sm:rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                  <p className="font-medium text-sm sm:text-base md:text-lg leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY INTE-QT UNIQUE - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              What Makes inte-QT Unique?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 text-left">
              {[
                "Unmatched fast delivery",
                "Global presence with strong local expertise",
                "Proactive monitoring by NSOC 24×7×365",
                "Standardized, secure wireless process",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                  <p className="font-medium text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Responsive */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              Ready for Wireless XC?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-2 text-white">
              Connect with our specialists and bring secure, high-speed wireless
              connectivity to any location on the globe.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="gradient-primary shadow-glow text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default WirelessConnection;