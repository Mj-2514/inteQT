// src/pages/PrivacyPolicy.tsx
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Globe2, ChevronRight, Menu, X, ArrowUp } from "lucide-react";

const sections = [
  { id: "introduction", title: "1. Introduction", summary: "Who we are, what this Privacy Policy covers." },
  { id: "data-we-collect", title: "2. Information We Collect", summary: "Types of personal and technical information." },
  { id: "how-we-use-data", title: "3. How We Use Your Information", summary: "Purposes for processing data." },
  { id: "legal-basis", title: "4. Legal Bases for Processing", summary: "Contract, legitimate interests, consent." },
  { id: "cookies", title: "5. Cookies & Similar Technologies", summary: "How cookies are used and managed." },
  { id: "sharing", title: "6. Sharing & International Transfers", summary: "When data is shared across borders." },
  { id: "retention", title: "7. Data Retention", summary: "How long information is kept." },
  { id: "your-rights", title: "8. Your Rights & Choices", summary: "Access, correction, deletion rights." },
  { id: "security", title: "9. Security", summary: "Measures to protect your information." },
  { id: "children", title: "10. Children's Privacy", summary: "Services not directed at children." },
  { id: "changes", title: "11. Changes to This Policy", summary: "How and when policy is updated." },
  { id: "contact", title: "12. Contact Us", summary: "How to contact us about privacy." },
];

const LAST_UPDATED = "2025-12-01";

const PrivacyPolicy: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button
      setShowBackToTop(window.scrollY > 500);

      // Update active section
      const scrollPosition = window.scrollY + 100;
      let current = "";
      
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = section.id;
          }
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pageUrl = "https://www.inte-qt.com/privacy-policy";
  const ogImage = "https://www.inte-qt.com/og/privacy-1200x630.jpg";

  return (
    <>
      <Helmet>
        <title>Privacy Policy | inte-QT</title>
        <meta
          name="description"
          content="Learn how inte-QT collects, uses, stores and protects personal data. Read our privacy policy covering managed connectivity services, website visitors and business contacts."
        />
        <meta name="keywords" content="privacy policy, data protection, GDPR, network provider privacy, inte-QT privacy" />
        <link rel="canonical" href={pageUrl} />
        <meta name="last-updated" content={LAST_UPDATED} />
        <meta property="og:title" content="Privacy Policy | inte-QT" />
        <meta property="og:description" content="Learn how inte-QT collects, uses, stores and protects personal data for customers and website visitors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | inte-QT" />
        <meta name="twitter:description" content="How inte-QT handles personal data for website visitors, prospects and customers." />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <Navbar />

      {/* Mobile TOC Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <motion.div 
              className="absolute right-0 top-0 h-full w-[280px] bg-background border-l shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold">Table of Contents</h3>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="p-4 overflow-y-auto h-[calc(100vh-80px)]">
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => handleScrollTo(section.id)}
                        className={`flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors ${
                          activeSection === section.id ? "bg-primary/10 text-primary" : "hover:bg-muted/50"
                        }`}
                      >
                        <div className={`mt-1 h-2 w-2 rounded-full ${activeSection === section.id ? "bg-primary" : "bg-muted"}`} />
                        <div>
                          <div className="text-sm font-medium">{section.title}</div>
                          <div className="mt-1 text-xs text-muted-foreground">{section.summary}</div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile TOC Floating Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <Menu className="h-5 w-5" />
        <span className="text-sm font-medium">Contents</span>
      </button>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* HERO SECTION - OPTIMIZED FOR ALL SCREENS */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Shield className="mr-2 h-4 w-4 flex-shrink-0" />
                Privacy & Data Protection
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Privacy Policy
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                We know your business connectivity depends on trust. This Privacy Policy explains how inte-QT handles personal data for website visitors, prospects and customers across our global managed connectivity services.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm sm:text-base text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Security-first approach to data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Applies to global operations</span>
                </div>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:justify-self-end w-full"
            >
              <Card className="rounded-xl sm:rounded-2xl border-border/50 bg-card shadow-lg sm:shadow-xl">
                <CardContent className="p-5 sm:p-6 md:p-8">
                  <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Quick Overview</h2>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    This Privacy Policy describes what information we collect, how we use it, how we share it, and which choices and rights you have.
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-foreground/90">We do not sell your personal data</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-foreground/90">Data is used to deliver and improve connectivity services</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-foreground/90">Contact us anytime to exercise your privacy rights</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT - FULLY RESPONSIVE */}
      <main className="pb-12 sm:pb-16 md:pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {/* Desktop TOC Sidebar */}
            <div className="hidden lg:block lg:col-span-1 xl:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="rounded-xl border-border/50 bg-card shadow-sm">
                  <CardContent className="p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">On this page</h3>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {sections.map((section) => (
                        <li key={section.id}>
                          <button
                            onClick={() => handleScrollTo(section.id)}
                            className={`flex w-full items-start gap-3 rounded-lg p-2 sm:p-3 text-left transition-colors ${
                              activeSection === section.id 
                                ? "bg-primary/10 text-primary" 
                                : "hover:bg-muted/50"
                            }`}
                          >
                            <div className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${
                              activeSection === section.id ? "bg-primary" : "bg-muted"
                            }`} />
                            <div className="min-w-0 flex-1">
                              <div className="text-xs sm:text-sm font-medium truncate">{section.title}</div>
                              <div className="mt-0.5 text-xs text-muted-foreground line-clamp-2">{section.summary}</div>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="rounded-xl border-emerald-500/20 bg-emerald-500/5">
                  <CardContent className="p-4 sm:p-5">
                    <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                      Important note
                    </p>
                    <p className="text-xs text-emerald-600/80 dark:text-emerald-400/80 leading-relaxed">
                      This information is for general guidance. Consult legal counsel for specific compliance requirements.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-2 xl:col-span-3">
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {sections.map((section, index) => (
                  <Card
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-20 sm:scroll-mt-24 rounded-xl border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-foreground">
                        {section.title}
                      </h2>
                      
                      <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {/* Section 1: Introduction */}
                        {index === 0 && (
                          <>
                            <p>
                              This Privacy Policy explains how inte-QT ("we", "us" or "our") collects, uses, discloses and protects personal information in connection with our websites, marketing activities and managed connectivity services.
                            </p>
                            <p>
                              This Policy applies to visitors of <span className="font-mono text-xs sm:text-sm">https://www.inte-qt.com</span> and to business contacts, prospects and customers who interact with us online or offline. Depending on your location, additional notices or rights may apply.
                            </p>
                          </>
                        )}
                        
                        {/* Section 2: Information We Collect */}
                        {index === 1 && (
                          <>
                            <p>We may collect the following categories of personal information:</p>
                            <ul className="ml-4 sm:ml-6 space-y-2 list-disc">
                              <li><strong>Contact details</strong> such as name, job title, business email, phone number and company information.</li>
                              <li><strong>Account information</strong> including service subscriptions, contract details and usage preferences.</li>
                              <li><strong>Technical data</strong> such as IP address, device identifiers, browser type and analytics data.</li>
                              <li><strong>Support information</strong> from service requests and communications with our teams.</li>
                              <li><strong>Marketing preferences</strong> including your choices about receiving updates.</li>
                            </ul>
                          </>
                        )}
                        
                        {/* Section 3: How We Use Your Information */}
                        {index === 2 && (
                          <>
                            <p>We use personal information for purposes such as:</p>
                            <ul className="ml-4 sm:ml-6 space-y-2 list-disc">
                              <li>Providing and supporting our managed connectivity services.</li>
                              <li>Responding to enquiries and support tickets.</li>
                              <li>Operating and improving our websites and internal systems.</li>
                              <li>Sending service-related communications and updates.</li>
                              <li>Meeting legal, regulatory and compliance obligations.</li>
                            </ul>
                          </>
                        )}
                        
                        {/* Section 4: Legal Bases */}
                        {index === 3 && (
                          <>
                            <p>Where applicable (for users in the EEA or UK), we rely on legal bases including:</p>
                            <ul className="ml-4 sm:ml-6 space-y-2 list-disc">
                              <li>Performance of a contract with you or your company.</li>
                              <li>Our legitimate interests in operating our business.</li>
                              <li>Your consent for specific activities like marketing.</li>
                              <li>Compliance with legal obligations.</li>
                            </ul>
                          </>
                        )}
                        
                        {/* Section 5: Cookies */}
                        {index === 4 && (
                          <>
                            <p>Our websites use cookies and similar technologies to operate effectively and understand user behavior.</p>
                            <p>You can control cookies through your browser settings and, where required by law, via consent tools on our site.</p>
                          </>
                        )}
                        
                        {/* Section 6: Sharing */}
                        {index === 5 && (
                          <>
                            <p>We may share personal information with:</p>
                            <ul className="ml-4 sm:ml-6 space-y-2 list-disc">
                              <li>Service providers assisting with our network and operations.</li>
                              <li>Local partners involved in delivering connectivity services.</li>
                              <li>Professional advisors and, where required, regulators.</li>
                            </ul>
                            <p>As a global company, data may be transferred internationally with appropriate safeguards.</p>
                          </>
                        )}
                        
                        {/* Section 7: Retention */}
                        {index === 6 && (
                          <p>We retain personal information as long as necessary for the purposes outlined, unless longer retention is required by law.</p>
                        )}
                        
                        {/* Section 8: Your Rights */}
                        {index === 7 && (
                          <>
                            <p>Depending on your location, you may have rights including:</p>
                            <ul className="ml-4 sm:ml-6 space-y-2 list-disc">
                              <li>Access to your personal data.</li>
                              <li>Correction or deletion of inaccurate data.</li>
                              <li>Objection to certain processing activities.</li>
                              <li>Withdrawal of consent where applicable.</li>
                              <li>Lodging complaints with authorities.</li>
                            </ul>
                            <p>Contact us to exercise these rights.</p>
                          </>
                        )}
                        
                        {/* Section 9: Security */}
                        {index === 8 && (
                          <p>We implement technical and organizational measures to protect personal information from unauthorized access, alteration, or destruction.</p>
                        )}
                        
                        {/* Section 10: Children */}
                        {index === 9 && (
                          <p>Our services are for business use and not directed at children. We do not knowingly collect children's data where prohibited.</p>
                        )}
                        
                        {/* Section 11: Changes */}
                        {index === 10 && (
                          <>
                            <p>We may update this Policy periodically. The "Last updated" date indicates recent changes.</p>
                            <p>Material changes will be communicated as required by law.</p>
                          </>
                        )}
                        
                        {/* Section 12: Contact */}
                        {index === 11 && (
                          <>
                            <p>For privacy questions or requests, contact us:</p>
                            <ul className="ml-4 sm:ml-6 space-y-2 list-disc">
                              <li><strong>Email:</strong> <a href="mailto:privacy@inte-qt.com" className="text-primary underline hover:text-primary/80">privacy@inte-qt.com</a></li>
                              <li>Or via our website contact page.</li>
                            </ul>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Last Updated */}
                <Card className="rounded-xl border-border/50 bg-muted/30">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <p className="text-sm sm:text-base text-muted-foreground">
                      This Privacy Policy was last updated on <span className="font-semibold text-foreground">{LAST_UPDATED}</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;