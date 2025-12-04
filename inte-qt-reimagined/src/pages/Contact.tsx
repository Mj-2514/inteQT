import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";

const Contact = () => {
  <Helmet>
  <title>Contact inte-QT | Sales, Support & Enterprise Connectivity Assistance</title>

  <meta
    name="description"
    content="Reach out to inte-QT for global connectivity solutions, enterprise internet, SD-WAN, NSOC support, pricing requests, and technical assistance. Sales and support teams available worldwide."
  />

  <meta
    name="keywords"
    content="contact inte-qt, telecom sales enquiry, enterprise connectivity support, global internet provider contact, sd-wan contact, nsoc support, business broadband sales, mpls provider contact"
  />

  <link rel="canonical" href="https://www.inte-qt.com/contact" />

  {/* OG Tags */}
  <meta property="og:title" content="Contact inte-QT | Sales & Support" />
  <meta
    property="og:description"
    content="Connect with our sales and support teams for enterprise-grade connectivity services across 190+ countries."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.inte-qt.com/contact" />
  <meta property="og:image" content="https://imgur.com/QihDOBg.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact inte-QT | Sales & Support" />
  <meta
    name="twitter:description"
    content="Reach out for enterprise internet, SD-WAN solutions, NSOC support, and service inquiries."
  />
  <meta name="twitter:image" content="https://imgur.com/QihDOBg.jpg" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact inte-QT",
        "url": "https://www.inte-qt.com/contact",
        "description": "Get in touch with inte-QT for global connectivity services, technical support, and sales inquiries.",
        "publisher": {
          "@type": "Organization",
          "name": "inte-QT",
          "url": "https://www.inte-qt.com"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "sales",
            "description": "Sales enquiries for enterprise connectivity",
            "availableLanguage": ["English"]
          },
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "description": "Support for existing services",
            "availableLanguage": ["English"]
          }
        ]
      }
    `}
  </script>
</Helmet>

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white dark:text-white text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-white dark:text-white text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Let's discuss how we can support your connectivity needs
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* LEFT — Sales / Support Options */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Choose an Option</h2>

              <div className="space-y-6">
                <Link to="/sales">
                  <div className="p-6 border rounded-xl cursor-pointer hover:shadow-lg transition">
                    <p className="text-2xl font-semibold">Sales Form</p>
                    <p className="text-muted-foreground mt-1">
                      Request pricing, quotes, and new service connections.
                    </p>
                  </div>
                </Link>

                <Link to="/support">
                  <div className="p-6 border rounded-xl cursor-pointer hover:shadow-lg transition">
                    <p className="text-2xl font-semibold">Support Form</p>
                    <p className="text-muted-foreground mt-1">
                      Need help with an existing service? Raise a support ticket.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* RIGHT — General Contact Form */}
            <Card>
              <CardContent className="p-8">

                {/* HEADING YOU ASKED FOR */}
                <h2 className="text-2xl font-bold mb-6">General Form</h2>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea placeholder="How can we help you?" rows={5} />
                  </div>

                  <Button className="w-full gradient-primary shadow-glow" size="lg">
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
