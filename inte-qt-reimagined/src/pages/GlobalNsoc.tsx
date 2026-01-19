import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Shield,
  Wifi,
  Users,
  ArrowRight,
  Activity,
  AlertTriangle,
  BarChart3,
  Settings,
  FileText,
  MessageSquare,
  Search,
  Gauge,
  Network,
  ChevronRight,
  Target,
  Clock,
  CheckCircle,
  Globe,
  Building,
  Server,
  ShieldCheck,
  Zap,
  Database,
  Cpu,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

export default function GlobalNsoc(): JSX.Element {
  const pageUrl = "https://www.inte-qt.com/global-nsoc";
  const ogImage = "https://i.imgur.com/rNiboOR.jpg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Global Network Security Operations Center (NSOC) Services",
    description: "24×7 monitoring services, threat detection cases, incident response, and network connectivity optimization across 190+ countries.",
    provider: {
      "@type": "Organization",
      name: "inte-QT",
      url: "https://www.inte-qt.com",
      description: "Global network security services partner and operations center"
    },
    serviceType: "Network Security Monitoring, Incident Response, Connectivity Services",
    areaServed: {
      "@type": "Global",
      name: "Worldwide"
    },
    url: pageUrl,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      category: "Network Security Services"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does your Global NSOC partner center provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Global NSOC center provides comprehensive network security services including 24×7 monitoring, threat detection, incident response cases, connectivity optimization, and partner support for global operations."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle connectivity issues and security events?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We monitor all connectivity cases through our partner center, using AI-driven analytics to detect security events. Our team responds to incidents and provides detailed case blogs and reports."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>
          Global NSOC Services | 24×7 Network Security Operations Center Partner – inte-QT
        </title>

        <meta
          name="description"
          content="Partner with inte-QT's Global NSOC Center for 24×7 monitoring, threat detection services, incident response cases, and optimized network connectivity worldwide. Read our security blogs and event coverage."
        />
        <meta
          name="keywords"
          content="global nsoc, network security operations center, security services partner, incident response cases, connectivity services, network monitoring events, security blogs, partner center, global connectivity, home coverage services"
        />
        <link rel="canonical" href={pageUrl} />
        
        {/* Hreflang tags for international targeting */}
        <link rel="alternate" hreflang="en" href={pageUrl} />
        <link rel="alternate" hreflang="en-US" href={pageUrl} />
        <link rel="alternate" hreflang="x-default" href={pageUrl} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />

        <meta property="og:title" content="Global NSOC Services Partner | inte-QT Network Security Center" />
        <meta
          property="og:description"
          content="Human-led, AI-powered network monitoring services and security operations partner across 190+ global connectivity cases. Read our security blogs and event coverage."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="inte-QT" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Global NSOC Services | inte-QT Security Center" />
        <meta name="twitter:description" content="Network security services partner for global connectivity and incident cases. Security blogs and event coverage." />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {/* HERO */}
          <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center" aria-labelledby="main-heading">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${ogImage})`,
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/65" />

            <div className="relative z-10 px-6 max-w-4xl">
              <h1 id="main-heading" className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
                Global Network Security Operations Center Services
              </h1>
              <p className="text-white/90 text-base md:text-lg mb-6">
                24×7 human-led monitoring services, AI-driven threat detection cases, and
                enterprise-grade network connectivity assurance for global partners.
              </p>

              <Button size="lg" className="gradient-primary shadow-glow" asChild>
                <a href="/support">
                  Connect with NSOC Center <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </section>

          {/* HUMAN + AI NSOC */}
          <section className="py-14 md:py-20 bg-background" aria-labelledby="human-ai-nsoc">
            <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 id="human-ai-nsoc" className="text-2xl md:text-4xl font-bold mb-4">
                  Human Expertise. Intelligent Automation.
                </h2>
                <p className="text-muted-foreground mb-5">
                  inte-QT's Global NSOC Center blends certified network engineers with
                  AI-powered analytics to proactively detect, analyze, and
                  resolve incidents before they impact your business operations.
                </p>

                <h3 className="text-xl font-semibold mb-4">Our Partner Services Include:</h3>
                <ul className="space-y-3">
                  {[
                    "Live engineers validating every critical alert in our center",
                    "AI-based anomaly and traffic behavior analysis for connectivity cases",
                    "Predictive fault detection and SLA enforcement services",
                    "Structured escalation and root-cause workflows for incident cases",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <Shield className="w-5 h-5 text-primary mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="text-lg font-semibold mt-6 mb-3">Global Coverage Services</h4>
                <p className="text-sm text-muted-foreground">
                  Our center provides comprehensive coverage services across all global connectivity cases, 
                  ensuring seamless operations for every partner.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.imgur.com/WSZQMpb.png"
                  alt="3D visualization of global NSOC operations center showing partner connectivity and service cases"
                  className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-contain"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </section>

          {/* NSOC PROCESS */}
          <section className="py-14 md:py-20 bg-muted/30" aria-labelledby="nsoc-process">
            <div className="container mx-auto px-4 max-w-6xl text-center">
              <h2 id="nsoc-process" className="text-2xl md:text-4xl font-bold mb-4">
                End-to-End NSOC Operations for Global Partners
              </h2>

              <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
                Every incident case is handled through a structured lifecycle at our center
                to ensure speed, accuracy, accountability, and continuous optimization of services.
              </p>

              {/* PROCESS CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                {[
                  {
                    step: "01",
                    title: "Detect Events",
                    desc: "24×7 telemetry, traffic behavior, and anomaly monitoring services.",
                    subTitle: "Event Detection Services"
                  },
                  {
                    step: "02",
                    title: "Analyze Cases",
                    desc: "Human-verified alerts with root-cause identification in our center.",
                    subTitle: "Case Analysis Center"
                  },
                  {
                    step: "03",
                    title: "Respond Services",
                    desc: "Immediate remediation, rerouting, or isolation for partners.",
                    subTitle: "Partner Response Services"
                  },
                  {
                    step: "04",
                    title: "Report Blogs",
                    desc: "Post-incident RCA and performance optimization insights blogs.",
                    subTitle: "Security Blogs & Reports"
                  },
                ].map((s, i) => (
                  <Card key={i} className="hover:shadow-glow transition-all">
                    <CardContent className="p-6 text-left">
                      <span className="text-primary font-bold text-lg">
                        {s.step}
                      </span>
                      <h3 className="font-semibold mt-2">{s.title}</h3>
                      <h4 className="text-sm font-medium text-muted-foreground mt-1">
                        {s.subTitle}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        {s.desc}
                      </p>
                      <h5 className="text-xs font-semibold mt-3 uppercase">Key Benefits:</h5>
                      <ul className="text-xs text-muted-foreground mt-1 space-y-1">
                        <li>• Enhanced connectivity monitoring</li>
                        <li>• Improved case resolution</li>
                        <li>• Better partner collaboration</li>
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* SUPPORTING VISUAL */}
              <div className="relative inline-block rounded-2xl overflow-hidden shadow-2xl border bg-black">
                <img
                  src="https://i.imgur.com/FVpCGEE.png"
                  alt="NSOC end-to-end operational workflow visualization showing partner center connectivity and service cases"
                  className="w-full h-auto block"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Added h6 caption */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <h6 className="text-xs text-white/70 font-medium">
                    Figure 1: Global NSOC Partner Center Workflow Diagram
                  </h6>
                </div>
              </div>
              
              <div className="mt-8 text-left max-w-3xl mx-auto">
                <h4 className="text-lg font-semibold mb-3">Process Optimization Notes</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">For Connectivity Cases:</h5>
                    <p className="text-sm text-muted-foreground">
                      Our center specializes in complex global connectivity cases, providing 
                      comprehensive coverage services and detailed analysis.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">For Partner Services:</h5>
                    <p className="text-sm text-muted-foreground">
                      Each partner receives customized services from our center, including 
                      event monitoring, case management, and regular security blogs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* NSOC MANAGEMENT TOOLS */}
          <section className="py-14 md:py-20 bg-background" aria-labelledby="management-tools">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <h2 id="management-tools" className="text-2xl md:text-4xl font-bold mb-4">
                  NSOC Network & Security Management Tool Suite
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive suite of tools for complete network visibility,
                  control, and optimization at our partner center
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Search,
                    title: "Network Troubleshooting",
                    desc: "Rapid identification and resolution of network connectivity cases",
                    category: "Connectivity Services"
                  },
                  {
                    icon: Gauge,
                    title: "Bandwidth Monitoring",
                    desc: "Real-time bandwidth utilization tracking and analysis services",
                    category: "Performance Services"
                  },
                  {
                    icon: Network,
                    title: "Traffic Monitoring",
                    desc: "Deep packet inspection and traffic flow analysis for global cases",
                    category: "Analysis Services"
                  },
                  {
                    icon: Activity,
                    title: "Performance Monitoring",
                    desc: "End-to-end network performance metrics and SLA enforcement",
                    category: "Partner Services"
                  },
                  {
                    icon: BarChart3,
                    title: "Change Analytics",
                    desc: "Configuration change tracking and impact analysis at our center",
                    category: "Center Operations"
                  },
                  {
                    icon: AlertTriangle,
                    title: "Alert Management",
                    desc: "Centralized alert dashboard with severity classification services",
                    category: "Event Services"
                  },
                  {
                    icon: ArrowRight,
                    title: "Auto Ticket Escalation",
                    desc: "Automated escalation workflows based on SLA thresholds for partners",
                    category: "Partner Center"
                  },
                  {
                    icon: FileText,
                    title: "Report Management",
                    desc: "Customizable reports, dashboards, and compliance documentation",
                    category: "Documentation Services"
                  },
                  {
                    icon: MessageSquare,
                    title: "Virtual Assistance",
                    desc: "AI-powered virtual assistant for quick queries and case guidance",
                    category: "Support Services"
                  },
                ].map((tool, i) => {
                  const Icon = tool.icon;
                  return (
                    <Card key={i} className="hover:shadow-glow transition-all">
                      <CardContent className="p-6">
                        <Icon className="w-10 h-10 text-primary mb-3" />
                        <h3 className="font-semibold text-lg mb-2">
                          {tool.title}
                        </h3>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">
                          {tool.category}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {tool.desc}
                        </p>
                        <h5 className="text-xs font-semibold text-primary mb-1">
                          Key Features:
                        </h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Real-time monitoring capabilities</li>
                          <li>• Comprehensive case management</li>
                          <li>• Partner collaboration tools</li>
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              <div className="mt-12 text-center">
                <h4 className="text-xl font-semibold mb-4">Tool Integration Benefits</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">For Global Connectivity</h5>
                    <p className="text-sm text-muted-foreground">
                      Our tools ensure seamless global connectivity across all partner cases.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">For Service Partners</h5>
                    <p className="text-sm text-muted-foreground">
                      Enhanced collaboration tools for service partners in our center.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">For Case Management</h5>
                    <p className="text-sm text-muted-foreground">
                      Streamlined case management for all incident and connectivity cases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* INTE-QT ESCALATION SYSTEM */}
          <section className="py-14 md:py-20 bg-muted/30" aria-labelledby="escalation-system">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <h2 id="escalation-system" className="text-2xl md:text-4xl font-bold mb-4">
                  inte-QT Escalation System for Partner Center
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Structured incident management framework ensuring timely resolution
                  and continuous service improvement for all connectivity cases
                </p>
              </div>

              {/* ESCALATION SYSTEM FLOW */}
              <div className="mb-16">
                <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                  <div className="flex items-center gap-3 mb-6 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <ChevronRight className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">ESCALATION</h3>
                      <h4 className="text-muted-foreground">Multi-tier support structure for partners</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">PRIORITIZATION</h3>
                      <h4 className="text-muted-foreground">Impact-based severity classification for cases</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">INCIDENT HANDLING</h3>
                      <h4 className="text-muted-foreground">Timely resolution workflows at center</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">CONCLUSION</h3>
                      <h4 className="text-muted-foreground">Post-incident analysis & reporting blogs</h4>
                    </div>
                  </div>
                </div>

                {/* DETAILED ESCALATION LEVELS */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-semibold mb-4">Escalation Levels for Service Partners</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="border rounded-lg p-4">
                      <h5 className="font-bold text-primary mb-2">Level 1: Initial Response</h5>
                      <h6 className="text-sm font-medium mb-2">Basic Incident Cases</h6>
                      <p className="text-xs text-muted-foreground">First-line support for connectivity issues</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h5 className="font-bold text-primary mb-2">Level 2: Technical Analysis</h5>
                      <h6 className="text-sm font-medium mb-2">Complex Cases</h6>
                      <p className="text-xs text-muted-foreground">Deep technical analysis at our center</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h5 className="font-bold text-primary mb-2">Level 3: Expert Intervention</h5>
                      <h6 className="text-sm font-medium mb-2">Critical Events</h6>
                      <p className="text-xs text-muted-foreground">Expert team intervention for major events</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h5 className="font-bold text-primary mb-2">Level 4: Executive Review</h5>
                      <h6 className="text-sm font-medium mb-2">Strategic Cases</h6>
                      <p className="text-xs text-muted-foreground">Executive review for partner cases</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CASE RESOLUTION METRICS */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-center mb-6">Partner Center Performance Metrics</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <h5 className="text-3xl font-bold text-primary">99.9%</h5>
                    <h6 className="text-sm font-medium mt-1">Uptime for Services</h6>
                  </div>
                  <div>
                    <h5 className="text-3xl font-bold text-primary">15min</h5>
                    <h6 className="text-sm font-medium mt-1">Avg. Response Time</h6>
                  </div>
                  <div>
                    <h5 className="text-3xl font-bold text-primary">95%</h5>
                    <h6 className="text-sm font-medium mt-1">Case Resolution Rate</h6>
                  </div>
                  <div>
                    <h5 className="text-3xl font-bold text-primary">24/7</h5>
                    <h6 className="text-sm font-medium mt-1">Center Coverage</h6>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CAPABILITIES */}
          <section className="py-14 md:py-20 bg-background" aria-labelledby="capabilities">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <h2 id="capabilities" className="text-2xl md:text-4xl font-bold mb-4">
                  Global NSOC Center Capabilities & Services
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive security services and connectivity solutions for global partners
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Eye,
                    title: "24×7 Monitoring Services",
                    desc: "Continuous visibility across global network connectivity cases.",
                    features: ["Event monitoring", "Real-time alerts", "Partner notifications"]
                  },
                  {
                    icon: Shield,
                    title: "Threat Detection Center",
                    desc: "AI-assisted detection with human validation for security cases.",
                    features: ["Anomaly detection", "Behavior analysis", "Case triage"]
                  },
                  {
                    icon: Wifi,
                    title: "Network Optimization",
                    desc: "Latency, routing and uptime assurance for partner connectivity.",
                    features: ["Performance tuning", "Routing optimization", "QoS management"]
                  },
                  {
                    icon: Users,
                    title: "Incident Response Services",
                    desc: "Rapid triage and escalation handling for all partner cases.",
                    features: ["Case management", "Escalation protocols", "Partner communication"]
                  },
                  {
                    icon: Activity,
                    title: "Performance Analytics",
                    desc: "Bandwidth, jitter and SLA insights for service optimization.",
                    features: ["Metrics analysis", "SLA reporting", "Performance blogs"]
                  },
                  {
                    icon: ArrowRight,
                    title: "Root Cause Analysis",
                    desc: "Clear RCA reports after every incident case for partners.",
                    features: ["Forensic analysis", "Documentation", "Prevention strategies"]
                  },
                ].map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className="hover:shadow-glow transition-all">
                      <CardContent className="p-6">
                        <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold text-center">{f.title}</h3>
                        <h4 className="text-sm text-center text-muted-foreground mb-3">
                          Partner Center Service
                        </h4>
                        <p className="text-sm text-muted-foreground text-center mb-4">
                          {f.desc}
                        </p>
                        <h5 className="text-xs font-semibold text-center mb-2">
                          Included Features:
                        </h5>
                        <ul className="text-xs text-muted-foreground text-center space-y-1">
                          {f.features.map((feature, idx) => (
                            <li key={idx}>• {feature}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              {/* ADDITIONAL SERVICES */}
              <div className="mt-12">
                <h4 className="text-xl font-semibold text-center mb-6">Additional Partner Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h5 className="font-semibold mb-2">Security Blogs & Updates</h5>
                    <p className="text-sm text-muted-foreground">
                      Regular security blogs covering latest threats, events, and best practices
                    </p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-semibold mb-2">Event Coverage Services</h5>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive coverage of security events and incident cases
                    </p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-semibold mb-2">Home Coverage Solutions</h5>
                    <p className="text-sm text-muted-foreground">
                      Extended security services for remote workers and home networks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-14 md:py-20 gradient-hero text-center" aria-labelledby="cta-heading">
            <div className="container mx-auto px-4">
              <h2 id="cta-heading" className="text-2xl md:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Global Network with Our Partner Center?
              </h2>
              <p className="text-white/80 mb-6">
                Speak with our NSOC specialists about our services, connectivity cases, 
                and become a valued partner of our security center. Read our blogs and 
                event coverage to learn more.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/support">
                    Contact NSOC<ArrowRight className="ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20" asChild>
                  <a href="/blogs">
                    Read Blogs <FileText className="ml-2" />
                  </a>
                </Button>
              </div>
              
              <div className="mt-8">
                <h4 className="text-white/90 font-medium mb-3">Quick Links to Our Services:</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/services" className="text-white/70 hover:text-white text-sm">Services Partner</a>
                  <a href="/partner-center" className="text-white/70 hover:text-white text-sm">Partner Center</a>
                  <a href="/cases" className="text-white/70 hover:text-white text-sm">Case Studies</a>
                  <a href="/events" className="text-white/70 hover:text-white text-sm">Security Events</a>
                  <a href="/blogs" className="text-white/70 hover:text-white text-sm">Security Blogs</a>
                  <a href="/coverage" className="text-white/70 hover:text-white text-sm">Coverage Services</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}