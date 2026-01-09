import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, Globe, Shield, Network } from "lucide-react";

/* -----------------------------
   DATA FOR LEBANON CASE
------------------------------ */
const mainSections = [
  {
    title: "Challenge",
    icon: Network,
    image: "https://images.unsplash.com/vector-1759549084820-637fc3b99068?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhbGxlbmdlfGVufDB8MHwwfHx8Mg%3D%3D",
    paragraphs: [
      `A requirement came up for internet connectivity at for a global organization who works for human rights and development programs in the country 'Lebanon' in West Asia.`,
      `Knowing the strengths and capabilities of inte-QT across the globe, the customer asked us if we can execute a service delivery in a complex environment within the given timelines as a global conference was approaching.`,
    ],
    highlights: [
      "Aging network infrastructure with frequent disruptions",
      "Inadequate bandwidth for enterprise digital services",
      "Critical need for resilient and secure connectivity",
    ],
  },
  {
    title: "Goals",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1610540604745-3e96fba9ccef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hbHN8ZW58MHwwfDB8fHwy",
    paragraphs: [
      `The technical specifications were different from the normal internet access deliveries. There was need to a install circuit of high bandwidth using copper lines and scope was work from end to end within the given time frames.`,
      `The complex regulatory requirements were creating challenges to get the installation lines from the service provider. Challenge the Challenges, this is the spirit with which inte-QT's service delivery team works.`,
      `The team engaged with the local partner to fulfil the regulatory requirements using out of the box approaches and ensured that the lines are delivered in time. we have a very strong partner network in more than 190+ countries across the world.`,
    ],
    highlights: [
      "High-capacity dedicated connectivity tailored to enterprise use",
      "Optimized routing for improved performance",
      "Redundant paths for resilience and uptime",
    ],
  },
  {
    title: "Solution",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1627634777217-c864268db30c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29sdXRpb25zfGVufDB8MHwwfHx8Mg%3D%3D",
    paragraphs: [
      `The delivery then seemed to be quite straight and on track well before the scheduled completion. Then, a sudden tragic accident happened in the capital. `,
      ` There was a high intensity blast near the seaport. The blast was so devastating that it damaged almost everything in few kilometers of the radius.`,
    ],
    highlights: [
      "Comprehensive network assessment and audit",
      "Real-time coordination with local partners",
      "Stress testing for performance and resilience",
    ],
  },
  {
    title: "Learnings",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhcm5pbmd8ZW58MHwwfDB8fHwy",
    paragraphs: [
      `The end user site was also damaged seriously, and infrastructure restoration was very much essential to move forward in the delivery. The capital was almost halt for a month, our timelines were surely impacted and delays were quite visible.The team also add to face challenges due to surging COVID-19 cases which resulted in limited movements and restrictions were imposed.`,
      `Amidst all these roadblocks, the team aligned the resources towards achieving the goal in the timelines, following the COVID protocols. The team was allowed to visit the site for limited hours and limited personals`,
      `Finally with the collective efforts, we completed the delivery not only with the required technicals but also providing additional features to the customer and more importantly it was well within the timelines committed. Thus, another feather in the cap of inte-QT team exceeding customer expectations and making customer delight.`,
    ],
    highlights: [
      "Improved uptime and application responsiveness",
      "Stable connectivity amid regional infrastructure challenges",
      "Future-ready foundation for digital services",
    ],
  },
];

/* -----------------------------
   COMPONENT
------------------------------ */
const AmidCrisis = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: "Delivering Connectivity Amid Crisis – Lebanon Case",
    description:
      "inte-QT delivered a resilient, customized network solution for enterprise clients in Lebanon, ensuring stable connectivity and performance amid regional challenges.",
    url: "https://www.inte-qt.com/cases/lebanon",
    provider: {
      "@type": "Organization",
      name: "inte-QT",
      url: "https://www.inte-qt.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Lebanon",
    },
  };

  return (
    <>
      <Helmet>
        <title>Lebanon Case Study | Connectivity Amid Crisis – inte-QT</title>
        <meta
          name="description"
          content="Explore how inte-QT delivered a resilient and customized network solution for enterprise clients in Lebanon, ensuring stable connectivity and enhanced performance amid local challenges."
        />
        <link rel="canonical" href="https://www.inte-qt.com/cases/lebanon" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section - Responsive */}
      <section className="bg-muted/40 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Delivering Connectivity Amid Crisis – Lebanon Case
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              inte-QT partnered with enterprises in Lebanon to design and deploy a
              customized telecom network that delivered resilient, high-performance
              connectivity, even amid infrastructure challenges and regional
              uncertainty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Sections - Fully Responsive */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {mainSections.map((section, idx) => {
            const Icon = section.icon;
            const reverse = idx % 2 !== 0;

            return (
              <div
                key={idx}
                className={`flex flex-col ${
                  reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center`}
              >
                {/* Image Card - Responsive */}
                <div className="w-full lg:w-1/2">
                  <Card className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[360px] rounded-xl sm:rounded-2xl overflow-hidden border-0 shadow-lg sm:shadow-xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url(${section.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <CardContent />
                  </Card>
                </div>

                {/* Content - Responsive */}
                <div className="w-full lg:w-1/2">
                  <div className="text-center lg:text-left">
                    {/* Icon - Responsive */}
                    <div className={`flex ${reverse ? 'lg:justify-start' : 'lg:justify-start'} justify-center mb-4 md:mb-6`}>
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-primary" />
                    </div>

                    {/* Title - Responsive */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6 leading-tight">
                      {section.title}
                    </h2>

                    {/* Paragraphs - Responsive */}
                    <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                      {section.paragraphs.map((p, i) => (
                        <p 
                          key={i} 
                          className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Highlights List - Responsive */}
                    <ul className="space-y-2 sm:space-y-3">
                      {section.highlights.map((highlight, hidx) => (
                        <li 
                          key={hidx} 
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5 sm:mt-1" />
                          <span className="text-sm sm:text-base">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Need Resilient Connectivity for Your Enterprise?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              Contact inte-QT today to discuss how we can deliver reliable, high-performance network solutions for your organization, even in challenging environments.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary/90 transition-colors duration-300"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AmidCrisis;