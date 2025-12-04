import { Card, CardContent } from "@/components/ui/card";
import { Globe, MapPin, Network, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import WorldGlobe from "./WorldGlobe";
import { Link } from "react-router-dom";

const Coverage = () => {
  const regions = [
    {
      name: "North America",
      slug: "north-america",
      countries: 25,
      image: "https://i.imgur.com/SrLzIM8.jpg",
    },
    {
      name: "South America",
      slug: "south-america",
      countries: 20,
      image: "https://i.imgur.com/YGlkriS.jpg",
    },
    {
      name: "Europe",
      slug: "europe",
      countries: 45,
      image: "https://i.imgur.com/tuFAw97.jpg",
    },
    {
      name: "Asia",
      slug: "asia",
      countries: 48,
      image: "https://i.imgur.com/iHPP1Ia.jpg",
    },
    {
      name: "Africa",
      slug: "africa",
      countries: 35,
      image: "https://i.imgur.com/0WyVgYN.jpg",
    },
    {
      name: "Oceania",
      slug: "oceania",
      countries: 17,
      image:
        "https://images.unsplash.com/photo-1539475314840-751cecc1dacd",
    },
  ];

  const features = [
    "24/7 Network Monitoring",
    "99.9% Uptime Guarantee",
    "Local Support Teams",
    "Multi-carrier Redundancy",
    "Fastest Route Selection",
    "Real-time Performance Monitoring",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      
      <WorldGlobe />

      {/* Regions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Regional Coverage</h2>
            <p className="text-xl text-muted-foreground">
              Connecting continents, empowering businesses
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <Link
                to={`/coverage/${region.slug}`}
                key={index}
                className="block"
              >
                <Card className="relative overflow-hidden group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${region.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all" />

                  <CardContent className="relative p-10 z-10 text-white flex flex-col items-center justify-center h-60">
                    <MapPin className="w-12 h-12 mb-4 drop-shadow-lg" />
                    <h3 className="text-3xl font-semibold mb-2 drop-shadow-lg">{region.name}</h3>
                    <p className="text-4xl font-bold drop-shadow-lg">{region.countries}+</p>
                    <p className="text-white/80 mt-1">Countries covered</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Network?</h2>
            <p className="text-xl text-muted-foreground">
              Industry-leading features and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg bg-card hover:bg-primary/5 transition"
              >
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-gradient mb-2">190+</p>
            <p className="text-muted-foreground">Countries</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-gradient mb-2">500+</p>
            <p className="text-muted-foreground">Network Partners</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-gradient mb-2">99.9%</p>
            <p className="text-muted-foreground">Uptime SLA</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-gradient mb-2">24/7</p>
            <p className="text-muted-foreground">Support</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <Network className="w-16 h-16 mx-auto mb-6 text-primary" />
        <h2 className="text-4xl font-bold mb-4">Ready to Go Global?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss how our global network can support your business expansion
        </p>

        <Button asChild size="lg" className="gradient-primary shadow-glow">
          <Link to="/contact">Get Started Today</Link>
        </Button>
      </section>
    </div>
  );
};

export default Coverage;
