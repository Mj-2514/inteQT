// src/pages/Home.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Zap,
  Shield,
  Network,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Eye,
  Plane,
  Cloud,
  DollarSign,
  Calendar,
  Lightbulb,
  Hotel,
  X,
} from "lucide-react";

const nsocImage = "https://www.hrcloud.com/hubfs/workplace.gif";

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showGlitters, setShowGlitters] = useState(false);
  
  // Show popup on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Start celebration after component mounts
    setShowGlitters(true);
    setShowPopup(true);
    
    // Auto close after 6 seconds (matching Vue)
    const timer = setTimeout(() => {
      setShowPopup(false);
      setShowGlitters(false);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClosePopup = () => {
    setShowPopup(false);
    setShowGlitters(false);
  };

  const services = [
    {
      title: "Dedicated Lines",
      subtitle: "Premium Connectivity",
      description: "High-performance dedicated internet connections",
      image:
        "https://assets.superhivemarket.com/cache/0346e49935ae63f6209492bf3994d0b4.gif",
      icon: Network,
    },
    {
      title: "Business Broadband",
      subtitle: "Reliable Speeds",
      description: "Reliable broadband solutions for businesses",
      image:
        "https://cdn.dribbble.com/userupload/29647510/file/original-6c41bc159984aa848eec332e1d774c8d.gif",
      icon: Zap,
    },
    {
      title: "Wireless Connect",
      subtitle: "Next-Gen Wireless",
      description: "Cutting-edge wireless connectivity",
      image:
        "https://www.gadgetmatch.com/wp-content/uploads/2018/12/GadgetMatch-20181219-5G-Explainer-03.gif",
      icon: Globe,
    },
  ];

  const industries = [
    { name: "Telecom", icon: Network },
    { name: "Airline", icon: Plane },
    { name: "Cloud", icon: Cloud },
    { name: "Pharma", icon: Shield },
    { name: "Financial", icon: DollarSign },
    { name: "Events", icon: Calendar },
    { name: "Energy", icon: Lightbulb },
    { name: "Hotels", icon: Hotel },
  ];

  const events = [
    {
      title: "International Telecoms Week 2024",
      date: "5 - 7 May 2025",
      location:
        "Gaylord National Resort & Convention Centre National Harbor",
      img: "https://imgur.com/y1G9poB.png",
    },
    {
      title: "Channel Partners Conference & Expo 2025",
      date: "24 - 25 March 2025",
      location: "The Venetian Resort in Las Vegas",
      img: "https://i.imgur.com/6G5KxAG.jpg",
    },
    {
      title: "Capacity Europe 2024",
      date: "15 - 17 October 2024",
      location: "InterContinental London - The O2",
      img: "https://i.imgur.com/XAx622Y.jpg",
    },
  ];
  
  const partnerBenefits = [
    { title: "Global", subtitle: "Interfacing", icon: Globe },
    { title: "Transparency of", subtitle: "Deal Cycle", icon: TrendingUp },
    { title: "A Forum to", subtitle: "Gain", icon: Users },
    { title: "Opportunity to", subtitle: "Grow", icon: Award },
    { title: "Efficient", subtitle: "Quote to Cash", icon: DollarSign },
  ];

  // Company logo for popup
  const companylogo = "https://www.inte-qt.com/img/logo.d6407a89.jpg";

  // === SEO values ===
  const title = "inte-QT | Global connectivity solutions across globe";
  const description = "Internet access in more than 190 countries around the world offering a variety of solutions. Dedicated Lines, Business Broadband and Wireless Connect.";
  const canonical = "https://www.inte-qt.com/";
  const image = "https://i.imgur.com/fgarNxn.png"; // Updated to match your Vue SEO image
  const siteName = "inte-QT";

  return (
    <div className="min-h-screen">
    <meta name="description" content="Partner with inte-QT for global L3 internet services, SD-WAN, and 24/7 NSOC in 190+ countries. Trusted by telecom, airline, and event industries worldwide."></meta>
      {/* POPUP - EXACT VUE DESIGN */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/60"
            onClick={handleClosePopup}
          />
          
          {/* Glitter Animation - EXACT FROM VUE */}
          {showGlitters && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(30)].map((_, n) => (
                <div
                  key={n}
                  className="absolute w-[10px] h-[10px] rounded-full animate-glitter"
                  style={{
                    left: `${Math.random() * 100}vw`,
                    top: `${Math.random() * 100}vh`,
                    animationDelay: `${Math.random()}s`,
                    backgroundColor: n % 2 === 0 ? 'gold' : '#fff8dc',
                    opacity: 0.8,
                  }}
                />
              ))}
            </div>
          )}

          {/* Popup Box - EXACT FROM VUE */}
          <div className="relative bg-white rounded-[15px] shadow-lg w-[350px] max-w-[90%] p-5 text-center animate-popup-fade z-10">
            {/* Logo - 300px as in Vue */}
            <img 
              src={companylogo} 
              alt="Company Logo" 
              className="w-[300px] mx-auto mb-5"
            />
            
            {/* Heading */}
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              We are one of the FT1000: Fastest-Growing Companies in Europe 2025!
            </h2>
            
            {/* Source */}
            <p className="text-gray-600 text-sm">
              (Source: Financial Times, Forbes España)
            </p>
            
            {/* Close button (optional, not in Vue but good to have) */}
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100"
              aria-label="Close popup"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      )}

      <Seo
        title={title}
        description={description}
        canonical={canonical}
        image={image}
        siteName={siteName}
      />

      {/* HERO SECTION WITH CORRECT IMAGE */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Background Image - Using your SEO image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://i.imgur.com/o0I3t65.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            Your Global Access Enabler
            <br />
            <span className="text-gradient">in 190+ Countries</span>
          </h1>

          <p className="
  font-agbalumo
  mt-28
  text-sm sm:text-base md:text-lg
  max-w-3xl mx-auto
  font-bold
  text-white
  drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]
">
  Global connectivity solutions — Dedicated Lines, SD-WAN
  underlay and 24×7 NSOC.
</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="gradient-primary shadow-glow text-lg px-6 py-3 w-full sm:w-auto"
            >
              <Link to="/services">
                Explore Services{" "}
                <ArrowRight className="ml-2 w-5 h-5 inline-block" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-6 py-3 border-2 w-full sm:w-auto"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* REST OF YOUR COMPONENTS... */}
      {/* SERVICES */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprehensive connectivity solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  to={`/services/${service.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  key={index}
                >
                  <Card className="
  relative
  overflow-hidden
  rounded-2xl
  shadow-xl
  h-[320px]
  group
  cursor-pointer
  transition-all
  duration-300
  hover:scale-105
  hover:shadow-glow
">

                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />

                    <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                      <h3 className="text-xl sm:text-2xl font-semibold">
                        {service.title}
                      </h3> 
                      {service.subtitle && (
                        <p className="text-sm opacity-90 -mt-1">
                          {service.subtitle}
                        </p>
                      )}
                      <p className="text-xs sm:text-sm opacity-80 mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 w-full sm:w-auto"
            >
              <Link to="/coverage">
                {" "}
                <Globe className="mr-2 inline-block w-5 h-5" /> We cover 190+
                countries across the globe
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FULL-SCREEN VIDEO SECTION - ORIGINAL AETA VIDEO */}
      <Link 
        to="/services/aeta" 
        className="block relative w-full group cursor-pointer overflow-hidden bg-black"
      >
        {/* Video fills entire section - ORIGINAL VIDEO */}
        <video
          src="https://res.cloudinary.com/dmhhkhgny/video/upload/v1745406688/website/vzw7z92zdvomwfvwlguc.mp4"
          className="w-full h-auto block"
          autoPlay
          muted
          loop
          playsInline
        />
        
        {/* Overlay that darkens on hover */}
        <div className="absolute inset-0  transition-all duration-500" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            
            
            
            {/* Click indicator - appears on hover */}
            
          </div>

          {/* Global coverage badge - fixed at bottom */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            
          </div>
        </div>
      </Link>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Why become our partner?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Join our global network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partnerBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={i}
                  className="text-center hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      {benefit.title}
                    </p>
                    <p className="text-lg font-semibold">{benefit.subtitle}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="gradient-primary shadow-glow"
            >
              <Link to="/partner-center">
                {" "}
                Learn More <ArrowRight className="ml-2 inline-block" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* NSOC */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${nsocImage})` }}
        />
        <div className="absolute inset-0 bg-black/35" />


        <div className="container mx-auto px-4 relative z-10">
          <div
  className="
    max-w-3xl
    px-6 sm:px-8
    py-6
  "
>

           <div className="flex items-center gap-4 mb-4">
  <Eye className="w-10 h-10 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" />
  <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
    Sit back &amp; Relax, We got our{" "}
    <span className="">EYES</span> on it
  </h2>
</div>

<p className="text-base sm:text-lg mb-6 text-white font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
  24×7 Global Network Security Operations Center
</p>


            <Button
              asChild
              size="lg"
              className="gradient-primary shadow-glow"
            >
              <Link to="/global-nsoc">
                Explore NSOC 24X7{" "}
                <ArrowRight className="ml-2 inline-block" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              We help not One, but many Industries
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Trusted by leading sectors worldwide
            </p>
          </div>

          <div className="overflow-hidden py-6">
            <div className="flex space-x-6 animate-scroll">
              {industries.concat(industries).map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-card min-w-[110px]"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                    <p className="text-sm text-center">{industry.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Past Events
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Great industry leading events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 w-full"
              >
                <div className="w-full aspect-[16/9] overflow-hidden rounded-t-xl bg-muted">
  <img
    src={event.img}
    alt={event.title}
    className="w-full h-full object-contain"
  />
</div>

                <CardContent>
                  <div className="flex items-start gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {event.date}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {event.location}
                      </p>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="link"
                    className="text-primary px-0"
                  >
                    <Link to="/events">
                      Read more{" "}
                      <ArrowRight className="ml-1 w-4 h-4 inline-block" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 w-full sm:w-auto"
            >
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section
        className="relative py-20 sm:py-28 overflow-hidden"
        aria-label="Client testimonials"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://cdn.pixabay.com/photo/2019/07/16/11/39/charles-4341624_1280.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        <div className="relative container mx-auto px-4 text-center text-white max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            What Our Clients Say
          </h2>

          <Card className="bg-white/10 backdrop-blur-m border-white/20 shadow-2xl mx-auto rounded-3xl">
            <CardContent className="p-6 sm:p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl sm:text-2xl font-bold mb-4">
                BRILLIANT work by inte-QT.
              </p>
              <p className="text-base sm:text-lg text-white/80 mb-4">
              
                It was seamlessly managed by inte-QT, right from quotation
                to timely delivery within the event schedule. A truly
                delightful experience.
              </p>

              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold">Associate Director</p>
                <p className="text-sm text-white/70">
                  World's Leading Tier-1 Carrier • London, UK
                </p>
                <p className="text-sm text-primary mt-2">
                  World Championship Motor Racing
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
            Not sure what you need?
          </h2>
          <p className="text-base sm:text-lg mb-6 text-white">
            Contact us and our team will resolve your concerns
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg px-6 py-3"
          >
            <Link to="/contact">
              Get In Touch <ArrowRight className="ml-2 inline-block" />
            </Link>
          </Button>
        </div>
      </section>

      {/* HIDDEN BACKLINKS (SEO) */}
      <div style={{ display: "none" }}>
        <a href="https://www.inte-qt.com/services/dedicated-lines">
          Dedicated Internet Access
        </a>
        <a href="https://www.inte-qt.com/services/sd-wan-underlay">
          SD-WAN Underlay Provider
        </a>
        <a href="https://www.inte-qt.com/coverage">
          Global Internet Coverage in 190+ Countries
        </a>
        <a href="https://www.inte-qt.com/contact">
          Enterprise Connectivity Solutions
        </a>
      </div>
    </div>
  );
};

export default Home;