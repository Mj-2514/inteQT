import { Card, CardContent } from "@/components/ui/card";
import { Eye, Shield, Award, Clock, CheckCircle } from "lucide-react";
import nsocImage from "@/assets/nsoc-operations.jpg";
import { Helmet } from "react-helmet-async";


const Cases = () => {
  
  const features = [
    {
      title: "24×7 Monitoring",
      description: "Round-the-clock network surveillance and threat detection",
      icon: Clock,
    },
    {
      title: "Proactive Security",
      description: "Advanced threat prevention and rapid incident response",
      icon: Shield,
    },
    {
      title: "Expert Team",
      description: "Certified security professionals with deep industry expertise",
      icon: Award,
    },
    {
      title: "Global Coverage",
      description: "Monitoring and protection across all 190+ countries",
      icon: Eye,
    },
  ];

  const services = [
    "Real-time Network Monitoring",
    "Security Incident Response",
    "Performance Optimization",
    "Threat Intelligence",
    "Compliance Reporting",
    "DDoS Protection",
    "Network Forensics",
    "Vulnerability Assessment",
  ];
  <Helmet>
  <title>NSOC 24×7 | Global Network Security Operations Center – inte-QT</title>

  <meta
    name="description"
    content="inte-QT’s Global NSOC delivers 24×7 monitoring, proactive security, rapid incident response, threat intelligence, and performance optimization across 190+ countries."
  />

  <meta
    name="keywords"
    content="NSOC, network security operations center, 24x7 monitoring, threat detection, incident response, ddos protection, network forensics, global monitoring, security operations, enterprise security"
  />

  <link rel="canonical" href="https://www.inte-qt.com/cases" />

  {/* OpenGraph */}
  <meta property="og:title" content="NSOC 24×7 | Global Network Security Operations Center – inte-QT" />
  <meta
    property="og:description"
    content="24×7 network monitoring, proactive threat prevention & global security operations across 190+ countries."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.inte-qt.com/cases" />
  <meta property="og:image" content="https://cdn.pixabay.com/photo/2019/07/16/11/39/charles-4341624_1280.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="NSOC 24×7 | Global Network Security Operations Center – inte-QT" />
  <meta
    name="twitter:description"
    content="Enterprise-grade network security monitoring with global coverage and rapid response."
  />
  <meta name="twitter:image" content="https://cdn.pixabay.com/photo/2019/07/16/11/39/charles-4341624_1280.jpg" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Network Security Operations Center (NSOC)",
        "provider": {
          "@type": "Organization",
          "name": "inte-QT",
          "url": "https://www.inte-qt.com"
        },
        "description": "24×7 Global Network Security Operations Center delivering monitoring, threat detection, incident response, and performance optimization.",
        "areaServed": "Worldwide",
        "audience": {
          "@type": "BusinessAudience",
          "name": "Enterprises, Telecom, IT Teams"
        }
      }
    `}
  </script>
</Helmet>


  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${nsocImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="w-16 h-16 text-primary animate-pulse-glow" />
              <h1 className="text-5xl md:text-6xl font-bold">
                We got our <span className="text-gradient">EYES</span> on it
              </h1>
            </div>
            <p className="text-2xl text-black-1500 mb-8">
              Global Network Security Operations Center (NSOC) - 24×7
            </p>
            <p className="text-lg text-black-1500">
              Sit back and relax while our dedicated team monitors, protects, and optimizes your
              global network infrastructure around the clock.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">NSOC Capabilities</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive network security and monitoring
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2"
                >
                  <CardContent className="p-8 text-center">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Monitor</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive security and performance services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg bg-card hover:shadow-md transition-all"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="relative py-36 md:py-44 overflow-hidden">
      
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://cdn.pixabay.com/photo/2019/07/16/11/39/charles-4341624_1280.jpg")',
          }}
        />
      
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-white max-w-5xl">
      
          <h2 className="text-4xl md:text-5xl font-bold mb-12 drop-shadow-lg text-black-500">
            Success Story
          </h2>
          <p>Real results from Real clients</p>
      
          <Card className="bg-white/10 backdrop-blur-m border-white/20 shadow-2xl max-w-4xl mx-auto rounded-3xl">
            <CardContent className="p-8 md:p-12 lg:p-14">
      
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Award
                    key={i}
                    className="w-7 h-7 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_6px_rgba(255,200,50,0.8)]"
                  />
                ))}
              </div>
      
              {/* Quote */}
              <p className="text-blue-500 text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-snug drop-shadow-[0_0_25px_rgb(0,0,0,)]">
                BRILLIANT work by inte-QT.
              </p>
      
              <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                It was seamlessly managed by inte-QT, right from quotation to timely
                delivery within the event schedule. A truly delightful experience.
              </p>
      
              {/* Client Info */}
              <div className="border-t border-white/20 pt-6">
                <p className="font-semibold text-white text-lg">Associate Director</p>
                <p className="text-sm md:text-base text-white/70">
                  World's Leading Tier-1 Carrier • London, UK
                </p>
                <p className="text-sm md:text-base text-primary mt-2">
                  World Championship Motor Racing
                </p>
              </div>
      
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose Our NSOC?</h2>
              <p className="text-xl text-muted-foreground">
                Peace of mind with enterprise-grade security
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "24/7/365 continuous monitoring",
                "Rapid incident response (< 15 minutes)",
                "Proactive threat hunting",
                "Detailed compliance reporting",
                "Multi-layered security approach",
                "Global threat intelligence",
                "Expert security analysts",
                "Customized security policies",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-card"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-gradient mb-2">99.9%</p>
              <p className="text-muted-foreground">Uptime</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gradient mb-2">&lt;15min</p>
              <p className="text-muted-foreground">Response Time</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gradient mb-2">10M+</p>
              <p className="text-muted-foreground">Events Monitored/Day</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gradient mb-2">100%</p>
              <p className="text-muted-foreground">Coverage</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
