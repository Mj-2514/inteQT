import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Zap,
  Shield,
  Network,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  Eye,
  Plane,
  Cloud,
  Building2,
  DollarSign,
  Calendar,
  Lightbulb,
  Hotel,
} from "lucide-react";
// import heroImage from "@/assets/hero-global-network.jpg";
const nsocImage = "https://www.hrcloud.com/hubfs/workplace.gif";


const Home = () => {
  const services = [
  {
    title: "Dedicated Lines",
    subtitle: "Premium Connectivity",
    description: "High-performance dedicated internet connections",
    image: "https://assets.superhivemarket.com/cache/0346e49935ae63f6209492bf3994d0b4.gif",
    icon: Network,
  },
  {
    title: "Business Broadband",
    subtitle: "Reliable Speeds",
    description: "Reliable broadband solutions for businesses",
    image: "https://cdn.dribbble.com/userupload/29647510/file/original-6c41bc159984aa848eec332e1d774c8d.gif",
    icon: Zap,
  },
  {
    title: "Wireless Connect",
    subtitle: "Next-Gen Wireless",
    description: "Cutting-edge wireless connectivity",
    image: "https://www.gadgetmatch.com/wp-content/uploads/2018/12/GadgetMatch-20181219-5G-Explainer-03.gif",
    icon: Globe,
  },
];


  const partnerBenefits = [
    { title: "Global", subtitle: "Interfacing", icon: Globe },
    { title: "Transparency of", subtitle: "Deal Cycle", icon: TrendingUp },
    { title: "A Forum to", subtitle: "Gain", icon: Users },
    { title: "Opportunity to", subtitle: "Grow", icon: Award },
    { title: "Efficient", subtitle: "Quote to Cash", icon: DollarSign },
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
      location: "Gaylord National Resort & Convention Centre National Harbor",
    },
    {
      title: "Channel Partners Conference & Expo 2025",
      date: "24 - 25 March 2025",
      location: "The Venetian Resort in Las Vegas",
    },
    {
      title: "Capacity Europe 2024",
      date: "15 - 17 October 2024",
      location: "InterContinental London - The O2",
    },
  ];
  <Helmet>
  <title>Global Internet Provider in 190+ Countries | Dedicated Line & SD-WAN Underlay – inte-QT</title>

  <meta
    name="description"
    content="inte-QT delivers Dedicated Lines, Business Broadband, Wireless Connect and Global SD-WAN underlay solutions in 190+ countries. One provider. One SLA. 24×7 Global NSOC."
  />

  <meta
    name="keywords"
    content="global internet provider, dedicated internet access, DIA provider, SD-WAN underlay, global broadband, wireless connect 4G 5G, enterprise internet, global ISP, global connectivity provider, multi-country internet"
  />

  <link rel="canonical" href="https://www.inte-qt.com/" />

  {/* Open Graph */}
  <meta property="og:title" content="Global Internet Provider in 190+ Countries | inte-QT" />
  <meta property="og:description" content="Dedicated Line, Broadband, Wireless & SD-WAN underlay across 190+ countries with 24×7 NSOC monitoring." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.inte-qt.com/" />
  <meta property="og:image" content="https://i.imgur.com/o0I3t65.jpeg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Global Internet Provider | inte-QT" />
  <meta name="twitter:description" content="Premium global internet access & SD-WAN underlay in 190+ countries." />
  <meta name="twitter:image" content="https://i.imgur.com/o0I3t65.jpeg" />

  {/* JSON-LD (Structured Data) */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "inte-QT",
        "url": "https://www.inte-qt.com",
        "logo": "https://i.imgur.com/o0I3t65.jpeg",
        "description": "Global provider of Dedicated Internet Access, Business Broadband, 4G/5G Wireless Connect and SD-WAN underlay services across 190+ countries.",
        "sameAs": [
          "https://www.linkedin.com/company/bitsandbyteglobal/posts/?feedView=all"
        ]
      }
    `}
  </script>
</Helmet>

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://i.imgur.com/o0I3t65.jpeg")' }}


        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/15 to-background/14" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-white dark:text-white text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Your Global Access Enabler <br />
            <span className="text-gradient">
  in 190+ Countries
</span>

          </h1>
          <p className="text-xl md:text-2xl font-semibold text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.8)] mb-8 max-w-3xl mx-auto animate-fade-in-down">
  Managed L3 Internet Global Services
</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button asChild size="lg" className="gradient-primary shadow-glow text-lg px-8">
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-2">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive connectivity solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {services.map((service, index) => {
    const Icon = service.icon;

    return (
      <Link to={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}>
  <Card
    key={index}
    className="relative overflow-hidden rounded-2xl shadow-xl h-[340px] group cursor-pointer"
  >


        {/* FULL BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />

        {/* CONTENT */}
        <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
          {/* <Icon className="w-12 h-12 mb-3 drop-shadow-xl" /> */}
          <h3 className="text-2xl font-bold">{service.title}</h3>

          {service.subtitle && (
            <p className="text-sm font-semibold opacity-90 -mt-1">
              {service.subtitle}
            </p>
          )}

          <p className="text-xs opacity-80 mt-2 leading-relaxed">
            {service.description}
          </p>
        </CardContent>
        </Card>
</Link>

    );
  })}
</div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-2">
              <Link to="/coverage">
                <Globe className="mr-2 w-5 h-5" />
                We cover 190+ countries across the globe
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why become our partner?</h2>
            <p className="text-xl text-muted-foreground">Join our global network</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partnerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <p className="text-sm text-muted-foreground">{benefit.title}</p>
                    <p className="text-lg font-bold">{benefit.subtitle}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="gradient-primary shadow-glow">
              <Link to="/partner-center">
                Learn More <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* NSOC Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${nsocImage})` }}
        >
          <div className="absolute inset-0 bg-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="w-12 h-12 text-primary" />
              <h2 className="text-black text-4xl font-bold">
                Sit back & Relax, We got our <span className="text-gradient">EYES</span> on it
              </h2>
            </div>
            <p className="text-black text-xl mb-8">
              24×7 Global Network Security Operations Center
            </p>
            <Button asChild size="lg" className="gradient-primary shadow-glow">
              <Link to="/cases">
                Explore NSOC 24X7 <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">We help not One, but many Industries</h2>
            <p className="text-xl text-muted-foreground">Trusted by leading sectors worldwide</p>
          </div>
          <div className="overflow-hidden py-8">
  <div className="flex space-x-10 animate-scroll">
    {industries.concat(industries).map((industry, index) => {
      const Icon = industry.icon;
      return (
        <div
          key={index}
          className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 min-w-[120px]"
        >
          <Icon className="w-10 h-10 text-primary" />
          <p className="text-sm font-medium text-center">{industry.name}</p>
        </div>
      );
    })}
  </div>
</div>

        </div>
      </section>

      {/* Events Section */}
      {/* Events Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
      <p className="text-xl text-muted-foreground">Meet us at industry leading events</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          img: "https://imgur.com/y1G9poB.png",
          title: "International Telecoms Week 2024",
          date: "5 - 7 May 2025",
          location: "Gaylord National Resort & Convention Centre National Harbor",
        },
        {
          img: "https://i.imgur.com/6G5KxAG.jpg",
          title: "Channel Partners Conference & Expo 2025",
          date: "24 - 25 March 2025",
          location: "The Venetian Resort in Las Vegas",
        },
        {
          img: "https://i.imgur.com/XAx622Y.jpg",
          title: "Capacity Europe 2024",
          date: "15 - 17 October 2024",
          location: "InterContinental London - The O2",
        },
      ].map((event, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
        >
          {/* Event Image */}
          <div className="w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-t-xl">
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-64 object-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          <CardContent>
            <div className="flex items-start space-x-3 mb-4">
              <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
                <p className="text-sm text-muted-foreground">{event.location}</p>
              </div>
            </div>

            <Button asChild variant="link" className="text-primary px-0">
              <Link to="/events">
                Read more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="text-center mt-10">
      <Button asChild size="lg" variant="outline" className="border-2">
        <Link to="/events">View All Events</Link>
      </Button>
    </div>
  </div>
</section>


{/* Testimonial Section */}
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

    <h2 className="text-4xl md:text-5xl font-bold mb-12 drop-shadow-lg">
      What Our Clients Say
    </h2>

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


      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white dark:text-white text-4xl font-bold mb-4">Not sure what you need?</h2>
          <p className="text-white dark:text-white text-xl mb-8 opacity-90">
            Contact us and our team will resolve your concerns
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/contact">
              Get In Touch <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
