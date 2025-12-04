import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Send } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const continents = ["Asia", "Europe", "North America", "South America", "Africa", "Australia", "Antarctica"];
const countryCodes = ["+1", "+44", "+91", "+61", "+81", "+33", "+49", "+971", "+86"];

const Support = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "4872fbc2-7735-4b6b-92bc-5fb5e09c6291");
    formData.append("subject", "New Support Request");
    formData.append("to", "globalsupport@inte-qt.com");

    const requiredFields = [
      "firstName",
      "lastName",
      "companyName",
      "serviceId",
      "email",
      "phone",
      "region",
      "concern",
    ];

    for (let field of requiredFields) {
      if (!formData.get(field)) {
        toast.error("Please fill all required fields.");
        setLoading(false);
        return;
      }
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      toast.success("Your request has been submitted!");
      e.target.reset();
    } else {
      toast.error("Something went wrong. Try again.");
    }
  };
  <Helmet>
  <title>Support Form | 24×7 Global Network Support – inte-QT</title>

  <meta
    name="description"
    content="Raise a support request with inte-QT. Our NSOC experts are available 24×7 to help with connectivity issues, service outages, circuit ID concerns, and enterprise network support."
  />

  <meta
    name="keywords"
    content="support form, NSOC support, network support, circuit ID help, order ID support, enterprise connectivity support, inte-QT support, 24x7 network monitoring"
  />

  <link rel="canonical" href="https://www.inte-qt.com/support" />

  {/* OpenGraph */}
  <meta property="og:title" content="24×7 Global Support | inte-QT" />
  <meta
    property="og:description"
    content="Reach our global NSOC team anytime. Submit your support ticket for DIA, broadband, wireless connections, and managed network services."
  />
  <meta property="og:url" content="https://www.inte-qt.com/support" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://i.ibb.co/jb9QBk0/support-banner.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="inte-QT Support | Raise a Request" />
  <meta
    name="twitter:description"
    content="24×7 dedicated global support for all connectivity services including DIA, broadband, wireless, and managed operations."
  />
  <meta name="twitter:image" content="https://i.ibb.co/jb9QBk0/support-banner.jpg" />

  {/* Schema — Support Page */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org/",
        "@type": "ContactPage",
        "name": "inte-QT Support Form",
        "description": "Contact inte-QT NSOC for service support or issue resolution.",
        "url": "https://www.inte-qt.com/support",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "technical support",
          "availableLanguage": ["English"],
          "areaServed": "Worldwide"
        }
      }
    `}
  </script>
</Helmet>

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-24 pb-20">

        {/* Header */}
        <section className="gradient-hero py-20 text-primary-foreground text-center">
          <h1 className="text-white dark:text-white text-5xl font-bold mb-4">Support Form</h1>
          <p className="text-white dark:text-white text-xl opacity-90 max-w-3xl mx-auto">
            Need help with your service? Our NSOC team is ready 24/7.
          </p>
        </section>

        {/* Form */}
        <section className="container mx-auto px-4 py-12 max-w-3xl">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-8">Raise a Support Request</h2>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>

                <div>
                  <label className="block text-sm mb-2 font-medium">First Name*</label>
                  <Input name="firstName" required placeholder="Enter first name" />
                </div>

                <div>
                  <label className="block text-sm mb-2 font-medium">Last Name*</label>
                  <Input name="lastName" required placeholder="Enter last name" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm mb-2 font-medium">Company Name*</label>
                  <Input name="companyName" required placeholder="Your company name" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm mb-2 font-medium">NSOC ID / ORDER ID / CIRCUIT ID*</label>
                  <Input name="serviceId" required placeholder="Enter your service ID" />
                </div>

                <div>
                  <label className="block text-sm mb-2 font-medium">Email*</label>
                  <Input name="email" type="email" required placeholder="your@email.com" />
                </div>

                <div>
                  <label className="block text-sm mb-2 font-medium">Phone Number*</label>
                  <div className="flex gap-2">
                    <Select name="countryCode">
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="+91" />
                      </SelectTrigger>
                      <SelectContent>
                        {countryCodes.map((code, i) => (
                          <SelectItem key={i} value={code}>{code}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input name="phone" required placeholder="9876543210" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm mb-2 font-medium">Region*</label>
                  <Select name="region" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select continent" />
                    </SelectTrigger>
                    <SelectContent>
                      {continents.map((item, i) => (
                        <SelectItem key={i} value={item}>{item}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm mb-2 font-medium">Please Share Your Concern*</label>
                  <Textarea name="concern" required rows={5} placeholder="Describe your issue..." />
                </div>

                <Button
                  disabled={loading}
                  className="md:col-span-2 w-full gradient-primary shadow-glow"
                  size="lg"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>

              </form>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Support;
