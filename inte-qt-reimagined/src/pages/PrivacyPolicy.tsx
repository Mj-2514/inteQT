// src/pages/PrivacyPolicy.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Shield, Lock, Globe2, ChevronRight } from "lucide-react";

const sections = [
  { id: "introduction", title: "1. Introduction", summary: "Who we are, what this Privacy Policy covers and how it applies." },
  { id: "data-we-collect", title: "2. Information We Collect", summary: "Types of personal and technical information collected about users." },
  { id: "how-we-use-data", title: "3. How We Use Your Information", summary: "Purposes for processing, including service delivery, support, analytics and compliance." },
  { id: "legal-basis", title: "4. Legal Bases for Processing (EEA/UK Users)", summary: "Contractual necessity, legitimate interests, consent and legal obligations." },
  { id: "cookies", title: "5. Cookies & Similar Technologies", summary: "How cookies, tags and similar tools are used and how users can manage them." },
  { id: "sharing", title: "6. Sharing & International Transfers", summary: "When data is shared with providers, partners, and transferred across borders." },
  { id: "retention", title: "7. Data Retention", summary: "How long your information is kept and what criteria are used." },
  { id: "your-rights", title: "8. Your Rights & Choices", summary: "Access, correction, deletion, objection, marketing choices and other rights." },
  { id: "security", title: "9. Security", summary: "Technical and organizational measures used to protect your information." },
  { id: "children", title: "10. Children’s Privacy", summary: "Statement on services not being directed at children and parental responsibility." },
  { id: "changes", title: "11. Changes to This Policy", summary: "How and when the policy may be updated and how you’ll be informed." },
  { id: "contact", title: "12. Contact Us", summary: "How to contact inte-QT about privacy questions or requests." },
];

const LAST_UPDATED = "2025-12-01"; // update this as needed

const PrivacyPolicy: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pageUrl = "https://www.inte-qt.com/privacy-policy";
  const ogImage = "https://www.inte-qt.com/og/privacy-1200x630.jpg"; // replace with your OG image

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

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | inte-QT" />
        <meta property="og:description" content="Learn how inte-QT collects, uses, stores and protects personal data for customers and website visitors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | inte-QT" />
        <meta name="twitter:description" content="How inte-QT handles personal data for website visitors, prospects and customers." />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section
        className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-slate-950 via-slate-950/95 to-background"
        aria-labelledby="privacy-hero-title"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 pt-24 pb-16 lg:pt-28 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] items-center">
            {/* Left: Title */}
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-5">
              <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-200">
                <Shield className="mr-2 h-4 w-4" />
                Privacy &amp; Data Protection
              </p>

              <h1 id="privacy-hero-title" className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Privacy Policy
              </h1>

              <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-200 sm:text-lg">
                We know your business connectivity depends on trust. This Privacy Policy explains how inte-QT handles personal data for website visitors, prospects and customers across our global managed connectivity services.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300/90">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span>Security-first approach to data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4" />
                  <span>Applies to global operations</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Highlight Card */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:justify-self-end">
              <Card className="max-w-md rounded-3xl border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-xl">
                <CardContent className="p-6 sm:p-7">
                  <h2 className="mb-2 text-sm font-semibold text-slate-100">Quick Overview</h2>
                  <p className="mb-4 text-xs text-slate-300 leading-relaxed">
                    This Privacy Policy describes what information we collect, how we use it, how we share it, and which choices and rights you have. It applies to visitors of <span className="font-mono text-[0.7rem]">inte-qt.com</span> and to our business communications and services.
                  </p>

                  <div className="space-y-2 text-xs text-slate-200">
                    <div className="flex items-start gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>We do not sell your personal data.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>Data is used to deliver and improve connectivity services and to support customer relationships.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>You can contact us at any time to exercise your privacy rights or ask questions.</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="bg-gradient-to-b from-background via-background/40 to-background">
        <section className="py-10 sm:py-14 lg:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2.2fr)]">
              {/* LEFT: Sticky TOC on desktop, full-width on mobile */}
              <aside className="lg:pr-6">
                <Card className="mb-4 rounded-2xl border border-border/70 bg-card/70 backdrop-blur">
                  <CardContent className="p-4 sm:p-5">
                    <h2 className="mb-3 text-sm font-semibold tracking-tight">On this page</h2>

                    {/* Mobile: scrollable horizontal pills */}
                    <div className="mb-3 flex gap-2 overflow-x-auto pb-2 lg:hidden">
                      {sections.map((section) => (
                        <button key={section.id} onClick={() => handleScrollTo(section.id)} className="flex flex-none items-center gap-1 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-primary/70 hover:text-primary transition">
                          <ChevronRight className="h-3 w-3" />
                          <span>{section.title.replace(/^\d+\.\s*/, "")}</span>
                        </button>
                      ))}
                    </div>

                    {/* Desktop: vertical list */}
                    <div className="hidden lg:block">
                      <ul className="space-y-1.5 text-xs">
                        {sections.map((section) => (
                          <li key={section.id}>
                            <button onClick={() => handleScrollTo(section.id)} className="flex w-full items-start gap-2 rounded-xl px-2 py-2 text-left text-muted-foreground hover:bg-muted/70 hover:text-foreground transition">
                              <span className="mt-[3px] h-1.5 w-1.5 flex-none rounded-full bg-primary/70" />
                              <span>
                                <span className="font-medium">{section.title}</span>
                                <span className="mt-0.5 block text-[0.7rem] text-muted-foreground/80">{section.summary}</span>
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hidden rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-0 text-xs text-emerald-900 dark:text-emerald-100 lg:block">
                  <CardContent className="p-4">
                    <p className="font-semibold mb-1">Important note</p>
                    <p className="text-[0.7rem] leading-relaxed text-muted-foreground">
                      The information on this page is for general information only and does not replace your own legal review. Make sure the final wording of your Privacy Policy is reviewed and approved by your legal counsel or compliance team.
                    </p>
                  </CardContent>
                </Card>
              </aside>

              {/* RIGHT: Policy sections */}
              <div className="space-y-6 sm:space-y-7">
                {/* Each Card = a numbered section. Replace placeholder text with your final policy text. */}

                <Card id="introduction" className="scroll-mt-24 rounded-3xl border border-border/70 bg-card/80 backdrop-blur">
                  <CardContent className="p-5 sm:p-7">
                    <h2 className="mb-3 text-lg font-semibold sm:text-xl">1. Introduction</h2>
                    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>This Privacy Policy explains how inte-QT ("we", "us" or "our") collects, uses, discloses and protects personal information in connection with our websites, marketing activities and managed connectivity services.</p>
                      <p>This Policy applies to visitors of <span className="font-mono text-xs">https://www.inte-qt.com</span> and to business contacts, prospects and customers who interact with us online or offline. Depending on your location, additional notices or rights may apply.</p>
                      <p className="text-xs italic">Please adapt this section to exactly match how inte-QT describes its role (e.g. data controller/processor) and the scope of this Policy.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card id="data-we-collect" className="scroll-mt-24 rounded-3xl border border-border/70 bg-card/80 backdrop-blur">
                  <CardContent className="p-5 sm:p-7">
                    <h2 className="mb-3 text-lg font-semibold sm:text-xl">2. Information We Collect</h2>
                    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>We may collect the following categories of personal information (depending on how you interact with us and which services you use):</p>
                      <ul className="ml-5 list-disc space-y-1.5">
                        <li><strong>Contact details</strong> such as name, job title, business email address, phone number and company information.</li>
                        <li><strong>Account and commercial information</strong> such as service subscriptions, contract details, usage preferences and communications with our teams.</li>
                        <li><strong>Technical and usage data</strong> such as IP address, device identifiers, browser type, access times, pages viewed and other analytics data collected via our websites and platforms.</li>
                        <li><strong>Support and ticketing information</strong> such as details you provide when you raise a service request, incident or query.</li>
                        <li><strong>Marketing and communication preferences</strong> including your choices about receiving updates from us.</li>
                      </ul>
                      <p className="text-xs italic">Insert or adjust this list to reflect the exact categories of personal data inte-QT collects as described in your current Privacy Policy.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card id="how-we-use-data" className="scroll-mt-24 rounded-3xl border border-border/70 bg-card/80 backdrop-blur">
                  <CardContent className="p-5 sm:p-7">
                    <h2 className="mb-3 text-lg font-semibold sm:text-xl">3. How We Use Your Information</h2>
                    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>We use personal information for purposes such as:</p>
                      <ul className="ml-5 list-disc space-y-1.5">
                        <li>Providing, configuring and supporting our managed connectivity and related services.</li>
                        <li>Responding to enquiries, requests for proposals and support tickets.</li>
                        <li>Operating, maintaining and improving our websites, portals and internal systems.</li>
                        <li>Sending service-related communications, updates and relevant marketing (where permitted by law).</li>
                        <li>Meeting legal, regulatory, security and compliance obligations.</li>
                      </ul>
                      <p className="text-xs italic">Replace or expand this list based on the purposes listed in your official Privacy Policy and local law requirements.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card id="legal-basis" className="scroll-mt-24 rounded-3xl border border-border/70 bg-card/80 backdrop-blur">
                  <CardContent className="p-5 sm:p-7">
                    <h2 className="mb-3 text-lg font-semibold sm:text-xl">4. Legal Bases for Processing (EEA/UK Users)</h2>
                    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>Where applicable (for example for users in the European Economic Area or United Kingdom), we rely on one or more of the following legal bases:</p>
                      <ul className="ml-5 list-disc space-y-1.5">
                        <li>Performance of a contract with you or your company.</li>
                        <li>Our legitimate interests in operating our business and services.</li>
                        <li>Your consent, where required (e.g. certain marketing activities).</li>
                        <li>Compliance with legal obligations.</li>
                      </ul>
                      <p className="text-xs italic">Align this section with the exact legal basis language in your policy (GDPR, UK GDPR, local equivalents).</p>
                    </div>
                  </CardContent>
                </Card>

                <Card id="cookies" className="scroll-mt-24 rounded-3xl border border-border/70 bg-card/80 backdrop-blur">
                  <CardContent className="p-5 sm:p-7">
                    <h2 className="mb-3 text-lg font-semibold sm:text-xl">5. Cookies &amp; Similar Technologies</h2>
                    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>Our websites may use cookies, pixels and similar technologies to operate the site, remember your preferences and understand how visitors use our pages.</p>
                      <p>You can typically control cookies through your browser settings and, where required by law, via consent tools presented on our website.</p>
                      <p className="text-xs italic">If inte-QT maintains a separate Cookie Policy or uses a specific consent management platform, reference and link to it here.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card id="sharing" className="scroll-mt-24 rounded-3xl border border-border/70 bg-card/80 backdrop-blur">
                  <CardContent className="p-5 sm:p-7">
                    <h2 className="mb-3 text-lg font-semibold sm:text-xl">6. Sharing &amp; International Transfers</h2>
                    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>We may share personal information with:</p>
                      <ul className="ml-5 list-disc space-y-1.5">
                        <li>Service providers and suppliers who assist us in operating our network, platforms and business.</li>
                        <li>Local access partners and carriers involved in delivering connectivity services.</li>
                        <li>Professional advisers (e.g. legal, audit, insurance) and, where required, regulators or law enforcement.</li>
                      </ul>
                      <p>Because inte-QT operates globally, your information may be transferred to and processed in countries other than your own. Where required, we implement appropriate safeguards (for example, standard contractual clauses).</p>
                      <p className="text-xs italic">Adapt this section to match your actual sharing practices and cross-border transfer mechanisms.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card id="retention" className="scroll-mt-24 rounded-3xl border border-border/70 bg-card/80 backdrop-blur">
                  <CardContent className="p-5 sm:p-7">
                    <h2 className="mb-3 text-lg font-semibold sm:text-xl">7. Data Retention</h2>
                    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>We retain personal information for as long as necessary to fulfil the purposes outlined in this Policy, unless a longer retention period is required or permitted by law (for example, tax, accounting or regulatory reasons).</p>
                      <p className="text-xs italic">Insert specific retention criteria or categories here if your current Privacy Policy defines them.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card id="your-rights" className="scroll-mt-24 rounded-3xl border border-border/70 bg-card/80 backdrop-blur">
                  <CardContent className="p-5 sm:p-7">
                    <h2 className="mb-3 text-lg font-semibold sm:text-xl">8. Your Rights &amp; Choices</h2>
                    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>Depending on your location and applicable law, you may have rights such as:</p>
                      <ul className="ml-5 list-disc space-y-1.5">
                        <li>Request access to the personal data we hold about you.</li>
                        <li>Request correction, update or deletion of your data.</li>
                        <li>Object to or restrict certain types of processing.</li>
                        <li>Withdraw consent where processing is based on consent.</li>
                        <li>Lodge a complaint with a data protection authority.</li>
                      </ul>
                      <p>To exercise your rights, please contact us using the details in the <strong>Contact Us</strong> section below.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card id="security" className="scroll-mt-24 rounded-3xl border border-border/70 bg-card/80 backdrop-blur">
                  <CardContent className="p-5 sm:p-7">
                    <h2 className="mb-3 text-lg font-semibold sm:text-xl">9. Security</h2>
                    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>We implement appropriate technical and organisational measures to protect personal information against accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access.</p>
                      <p className="text-xs italic">Describe in more detail the types of controls you use (network security, access controls, encryption, training, etc.) as per your existing policy.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card id="children" className="scroll-mt-24 rounded-3xl border border-border/70 bg-card/80 backdrop-blur">
                  <CardContent className="p-5 sm:p-7">
                    <h2 className="mb-3 text-lg font-semibold sm:text-xl">10. Children’s Privacy</h2>
                    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>Our websites and services are designed for business and professional use and are not directed to children. We do not knowingly collect personal information from children where this is prohibited by law.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card id="changes" className="scroll-mt-24 rounded-3xl border border-border/70 bg-card/80 backdrop-blur">
                  <CardContent className="p-5 sm:p-7">
                    <h2 className="mb-3 text-lg font-semibold sm:text-xl">11. Changes to This Policy</h2>
                    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>We may update this Privacy Policy from time to time. The "Last updated" date at the top of the Policy will indicate when it was most recently revised.</p>
                      <p>Where required by law, we will notify you of material changes (for example, via our website or direct communication).</p>
                    </div>
                  </CardContent>
                </Card>

                <Card id="contact" className="scroll-mt-24 rounded-3xl border border-border/70 bg-card/80 backdrop-blur">
                  <CardContent className="p-5 sm:p-7">
                    <h2 className="mb-3 text-lg font-semibold sm:text-xl">12. Contact Us</h2>
                    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>If you have any questions about this Privacy Policy or how we process personal information, please contact us:</p>
                      <ul className="ml-5 list-disc space-y-1.5">
                        <li><strong>Email:</strong> <a href="mailto:privacy@inte-qt.com" className="text-primary underline underline-offset-2">privacy@inte-qt.com</a></li>
                        <li>Or via the contact details provided on our website contact page.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
