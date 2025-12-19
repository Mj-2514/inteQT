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
    title: "Challenge",
    icon: Network,
    image: "https://i.imgur.com/Dvbfhyz.jpg",
    description: `
      The customer and end-user sought quick deployment and installation of links due to the critical nature of banking operations. Timely delivery was essential given the extensive requirements across the country's geography.

User operations had restricted access, making secure service paramount.

Being in a seismic zone prone to natural calamities like cyclones, accessing sites for connectivity deployment proved difficult.

Challenges included infrastructure shortages, timely equipment availability, and the need to avoid disruptions to existing services.
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
    image: "https://i.imgur.com/4O7Reay.jpg",
    description: `
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
    title: "Outcome",
    icon: Globe,
    image: "https://i.imgur.com/7fH1NGe.jpg",
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
    name: "Strategic Network Deployment for Fiji’s Leading Bank",
    description:
      "inte-QT delivered a resilient, scalable, high-performance telecom network for a leading financial institution in Fiji, supporting digital banking transformation.",
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
          Strategic Network Deployment for Fiji’s Leading Bank | inte-QT
        </title>
        <meta
          name="description"
          content="Explore how inte-QT designed and deployed a resilient, scalable telecom network for a leading bank in Fiji, enabling reliable digital banking and future growth."
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
            Strategic Network Deployment for Fiji’s Leading Bank
          </motion.h1>

          <p className="text-lg text-muted-foreground max-w-3xl">
            As digital banking adoption accelerated across the Pacific region,
            one of Fiji’s leading financial institutions required a robust,
            secure, and future-ready telecom network. inte-QT partnered closely
            with the bank to design and deploy a high-performance infrastructure
            capable of supporting mission-critical operations and an expanding
            digital customer experience.
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
          <h2 className="text-3xl font-semibold mb-6">The Outcome</h2>

          <p className="text-muted-foreground mb-4">
            Following the deployment, the bank experienced significant
            improvements in network stability, application responsiveness, and
            overall service reliability. Digital transactions became faster and
            more consistent, directly enhancing the customer experience across
            Fiji.
          </p>

          <p className="text-muted-foreground">
            With a resilient and scalable telecom foundation in place, the bank
            is now positioned to support future growth, introduce new digital
            services, and maintain high availability in an increasingly
            competitive financial landscape.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseFiji;
