import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Send } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const continents = ["Asia", "Europe", "North America", "South America", "Africa", "Australia", "Antarctica"];
const countryCodes = ["+1", "+44", "+91", "+61", "+81", "+33", "+49", "+971", "+86"];
const API_BASE_URL = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inteqt.onrender.com";

const Support = () => {
  const [loading, setLoading] = useState(false);
  const [region, setRegion] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    // Ensure our Select values are included
    formData.set("region", region);
    formData.set("countryCode", countryCode);

    const payload: any = Object.fromEntries(formData.entries());

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
      if (!payload[field]) {
        toast.error("Please fill all required fields.");
        setLoading(false);
        return;
      }
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/forms/support`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        toast.success("Your request has been submitted!");
        (e.target as HTMLFormElement).reset();
        setRegion("");
        setCountryCode("+91");
      } else {
        toast.error(result.message || "Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
<Helmet>
        <title>Support Form | 24×7 Global Network Support – inte-QT</title>
        <meta name="description" content="Raise a support request with inte-QT. Our NSOC experts are available 24×7." />
        <link rel="canonical" href="https://www.inte-qt.com/support" />
      </Helmet>
  return (
    <>
      

      <Navbar />

      <div className="min-h-screen pt-24 pb-20">
        <section className="gradient-hero py-20 text-primary-foreground text-center">
          <h1 className="text-white dark:text-white text-5xl font-bold mb-4">Support Form</h1>
          <p className="text-white dark:text-white text-xl opacity-90 max-w-3xl mx-auto">Need help with your service? Our NSOC team is ready 24/7.</p>
        </section>

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
                    <Select value={countryCode} onValueChange={setCountryCode}>
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
                  <Select value={region} onValueChange={setRegion}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select continent" />
                    </SelectTrigger>
                    <SelectContent>
                      {continents.map((item, i) => (
                        <SelectItem key={i} value={item}>{item}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {/* hidden input so backend receives it when converting form to JSON */}
                  <input type="hidden" name="region" value={region} />
                  <input type="hidden" name="countryCode" value={countryCode} />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm mb-2 font-medium">Please Share Your Concern*</label>
                  <Textarea name="concern" required rows={5} placeholder="Describe your issue..." />
                </div>

                <Button disabled={loading} className="md:col-span-2 w-full gradient-primary shadow-glow" size="lg" type="submit">
                  {loading ? "Submitting..." : "Submit Request"} <Send className="w-4 h-4 ml-2" />
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
