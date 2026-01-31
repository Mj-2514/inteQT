import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle,
  Network,
  Shield,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

/* ----------------------------------
   CASE STUDY DATA (LONG-FORM)
----------------------------------- */
const mainServices = [
  {
    title: "Challenges",
    icon: Network,
    image: "Wireless connectivity solution",
    description: `
      At inte-QT, we believe that challenges make us stronger and better with each delivery.

The customer required connectivity for a reputed bank located in Fiji, a country of islands where the sun rises as it sets in the West.

The customer and end-user sought quick deployment and installation of links due to the critical nature of banking operations. Timely delivery was essential given the extensive requirements across the country's geography.

User operations had restricted access, making secure service paramount.

Being in a seismic zone prone to natural calamities like cyclones, accessing sites for connectivity deployment proved difficult.

Challenges included infrastructure shortages, timely equipment availability, and the need to avoid disruptions to existing services.

Additionally, commercial terms needed to be aggressive to ensure savings.
    `,
    features: [
      "Faster Deployment and Migration",
      "Secure Access to Cloud Applications",
      "Integration of Remote Offices with the Mainland",
      "Adverse Climate Conditions",
      "Unavailability of Required Infrastructure"
    ],
  },
  {
    title: "Solution",
    icon: Shield,
    image: "Technology implementation",
    description: `
      Deeper customer engagement has always been part of the culture at Bits and Byte Global. Our customer appreciates the support we provide, allowing for open communication of requirements and concerns.

We engaged all relevant interfaces to address the customer's needs. Local partners and service providers were informed of the critical nature of the service.

Logistics were aligned to ensure installations were completed without delays. Relevant teams ensured services went live smoothly.

The network design focused on safety and security of user data with cloud service providers, including necessary redundancies to mitigate geographical vulnerabilities.

inte-Qt Dedicated Line service offers commitment across all fronts, from bandwidth to 24x7 network support. Rigorous tests were conducted before declaring services ready.
    `,
    features: [
      "Robust and Reliable Network Deployment as part of inte-Qt Dedicated Line Service",
      "Flawless Installation of inte-Qt Dedicated Line Service ensured seamless go-live of multiple locations.",
      "24x7 Network Assurance with inte-Qt Dedicated Line Service enabled real-time resolution of customer operations.",
    ],
  },
  {
    title: "Outcomes",
    icon: Globe,
    image: "Beautiful beach in Fiji",
    description: `
      Collaborative efforts led to timely delivery of services, meeting all quality parameters. Sustainable operations were achieved, with various links live and connected to the cloud.

The execution resulted in significant monetary savings, estimated at around 38%, without compromising service quality. The precise design improved operational effectiveness through prompt monitoring.

The customer and end-user appreciated inte-Qt's Dedicated Line service and network support, yielding both tangible benefits and improved service parameters.
    `,
    features: [
      "Sustainable and seamless operations for the user.",
      "Significant savings for the customer and overall service effectiveness.",
      "Exceeding customer expectations.",
    ],
  },
];

/* ----------------------------------
   PAGE COMPONENT
----------------------------------- */
const CaseFiji = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: "Bank Connectivity Solution in Fiji",
    description:
      "inte-QT delivered a dedicated connectivity solution for a reputed bank in Fiji, overcoming geographical challenges and infrastructure shortages to ensure secure banking operations.",
    url: "https://www.inte-qt.com/cases/fiji",
    industry: "Banking & Financial Services",
    provider: {
      "@type": "Organization",
      name: "inte-QT",
      url: "https://www.inte-qt.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Fiji",
    },
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Bank Connectivity Solution in Fiji | inte-QT Case Study
        </title>
        <meta
          name="description"
          content="inte-QT delivered a dedicated connectivity solution for a reputed bank in Fiji, overcoming geographical challenges and infrastructure shortages."
        />
        <link rel="canonical" href="https://www.inte-qt.com/cases/fiji" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="bg-muted/40 pt-28 pb-20 ">
        <div className="container max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Bank Connectivity Solution in Fiji
          </motion.h1>

          <p className="text-lg text-muted-foreground max-w-3xl">
            The customer required connectivity for a reputed bank located in Fiji, a country of islands. inte-QT delivered a dedicated connectivity solution, overcoming geographical challenges, infrastructure shortages, and adverse climate conditions to ensure secure and seamless banking operations.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 space-y-20">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row ${
                  reverse ? "lg:flex-row-reverse" : ""
                } gap-10 lg:gap-12 items-center`}
              >
                {/* IMAGE */}
                <div className="flex-1 w-full">
                  <Card className="relative h-[240px] sm:h-[300px] md:h-[340px] lg:h-[360px] rounded-2xl overflow-hidden border-0 shadow-xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <CardContent />
                  </Card>
                </div>

                {/* TEXT */}
                <div className="flex-1 text-center lg:text-left">
                  <Icon className="w-14 h-14 mb-4 text-primary mx-auto lg:mx-0" />

                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    {service.title}
                  </h2>

                  <p className="text-muted-foreground mb-6 whitespace-pre-line">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* OUTCOME */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-semibold mb-6">Successful Outcomes</h2>

          <p className="text-muted-foreground mb-4">
            Collaborative efforts led to timely delivery of services, meeting all quality parameters. Sustainable operations were achieved, with various links live and connected to the cloud.
          </p>

          <p className="text-muted-foreground mb-4">
            The execution resulted in significant monetary savings, estimated at around 38%, without compromising service quality. The precise design improved operational effectiveness through prompt monitoring.
          </p>

          <p className="text-muted-foreground">
            The customer and end-user appreciated inte-Qt's Dedicated Line service and network support, yielding both tangible benefits and improved service parameters.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseFiji;