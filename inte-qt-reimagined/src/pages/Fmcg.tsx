import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Globe, ServerCog, Shield } from "lucide-react";
import { motion } from "framer-motion";

/* ----------------------------------
   DETAILED ARGENTINA CASE DATA
----------------------------------- */
const mainSections = [
  {
    title: "Key Challenges Faced During Service Delivery",
    icon: ServerCog,
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y292aWR8ZW58MHwwfDB8fHwy",
    paragraphs: [
      `Argentina’s national carrier and multiple enterprise clients were facing a rapidly evolving digital landscape where traditional network architectures were struggling to meet the demand for performance, resilience, and future scalability. Legacy connectivity models were impacting transaction speeds, customer experiences, and operational continuity across diverse industries.`,
      `inte-QT was engaged to assess the existing infrastructure and design a comprehensive solution that would not only fix immediate performance bottlenecks but also support the country’s push toward digital transformation in banking, government services, and data-intensive enterprise environments.`,
    ],
    highlights: [
      "Rapid Deployment Requirements: Ensuring quick service delivery amidst strict COVID-19 regulations.",
      "Stringent Health and Safety Compliance: Meeting strict health guidelines during installation.",
      "High Standards for Quality of Service: Maintaining exceptional service quality in a remote location.",
    ],
  },
  {
    title: "Effective Solutions Implemented to Meet Customer Needs",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1591382696684-38c427c7547a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29yayUyMGZyb20lMjBob21lfGVufDB8MHwwfHx8Mg%3D%3D",
    paragraphs: [
      `inte-QT architects began with a comprehensive audit of Argentina’s major enterprise and institutional network demands. This involved mapping high-traffic corridors, analyzing latency and throughput requirements, and identifying redundancy gaps in existing WAN links.`,
      `The solution was to deploy a unified connectivity fabric combining high-capacity dedicated internet access, optimized MPLS paths where needed, and secure peering points for critical cloud services. The design emphasized low-latency routes between financial hubs, government data centers, and major industrial campuses.`,
      `Advanced traffic engineering techniques were used to prioritize time-sensitive applications while ensuring end-to-end encryption and compliance with local regulatory data protection standards.`,
    ],
    highlights: [
      "Strict adherence to COVID-19 protocols ensured safety for all parties involved.",
      "Collaboration with reliable partners guaranteed compliance with health and safety regulations.",
      "A robust network design exceeded customer expectations as part of the inte-Qt Dedicated Line service.",
    ],
  },
  {
    title: "Operational Resilience & Reliability",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1641706531193-03f3fa564779?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzaWxpZW5jZXxlbnwwfDB8MHx8fDI%3D",
    paragraphs: [
      `Given the customer's confidence in inte-QT based on previous successful projects, we quickly engaged with them to address their urgent needs. Our strong partner network in Latin America, aligned with COVID-19 regulations, allowed us to meet the delivery timeline.`,
      `Our operations team collaborated closely with both the partner and the customer to finalize the delivery framework. Effective communication was key; we assigned a dedicated resource to facilitate timely delivery through virtual meetings and discussions.`,
    ],
    highlights: [
      "Customer delighted with early delivery, meeting all regulatory compliance.",
      "Exceeded quality of service parameters, enhancing overall customer satisfaction.",
    ],
  },
  {
    title: "Capacity for Growth & Innovation",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNzdXJhbmNlfGVufDB8MHwwfHx8Mg%3D%3D",
    paragraphs: [
      `Beyond solving immediate connectivity challenges, inte-QT designed the infrastructure for long-term scalability. The modular architecture supports future bandwidth expansion, new service rollouts, and seamless integration with emerging cloud and edge computing frameworks.`,
      `This future-ready setup allows Argentina’s enterprises to deploy AI/ML-driven applications, real-time analytics platforms, and next-gen digital services without requiring disruptive redesigns or costly overhauls.`,
      `With clear pathways for expansion and predictable performance scaling, the solution positioned Argentina’s connected enterprises to compete globally in a digital age.`,
    ],
    highlights: [
      "Modular, scalable infrastructure",
      "Cloud and edge integration support",
      "Predictable performance growth paths",
    ],
  },
];

/* ----------------------------------
   COMPONENT
----------------------------------- */
const Fmcg = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: "Strategic Network Transformation Across Argentina",
    description:
      "inte-QT delivered a resilient and scalable network deployment for key enterprise and institutional clients in Argentina, enabling enhanced digital performance and continuity.",
    url: "https://www.inte-qt.com/cases/fmcg",
    provider: {
      "@type": "Organization",
      name: "inte-QT",
      url: "https://www.inte-qt.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
  };

  return (
    <>
      <Helmet>
        <title>Argentina Case Study | Strategic Network Transformation – inte-QT</title>
        <meta
          name="description"
          content="Explore how inte-QT delivered a resilient, scalable network solution across Argentina to support enterprise digital transformation, performance, and resilience."
        />
        <link rel="canonical" href="https://www.inte-qt.com/cases/argentina" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section - Responsive */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-muted/40">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Strategic Network Transformation Across Argentina
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              As Argentina's enterprises and institutional sectors embraced digital transformation in the face of growing data demands, inte-QT delivered a comprehensive network strategy built for performance, resilience, and future growth across the country.
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
                      {section.highlights.map((h, i) => (
                        <li 
                          key={i} 
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5 sm:mt-1" />
                          <span className="text-sm sm:text-base">{h}</span>
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
              Ready to Transform Your Network?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              Contact inte-QT today to discuss how we can deliver resilient, scalable network solutions for your organization.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary/90 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Fmcg;