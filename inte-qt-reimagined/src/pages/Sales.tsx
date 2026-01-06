import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const API_BASE_URL =import.meta.env.VITE_API_BASE;
const Sales = () => {
  const [form, setForm] = useState({
    company: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    postal: "",
    product: "",
    contractYear: "",
    ip: "",
    message: "",
  });
  // simple client-side email validation
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
};

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  const requiredFields = [
    "company",
    "fullName",
    "email",
    "phone",
    "address",
    "postal",
    "product",
    "contractYear",
    "ip",
    "message",
  ];

  for (const field of requiredFields) {
    if (!form[field]) {
      toast.error("Please fill all required fields.");
      setLoading(false);
      return;
    }
  }

  if (!isValidEmail(form.email)) {
    toast.error("Please enter a valid email address.");
    setLoading(false);
    return;
  }

  // optionally: const captchaToken = await getCaptchaToken();

  try {
    const res = await fetch(`${API_BASE_URL}/api/forms/sales`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form /*, captchaToken */ }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      toast.success(`Enquiry submitted — we’ll contact ${form.email} shortly.`);
      setForm({
        company: "",
        fullName: "",
        email: "",
        phone: "",
        address: "",
        postal: "",
        product: "",
        contractYear: "",
        ip: "",
        message: "",
      });
    } else {
      toast.error(data.message || "Something went wrong. Please try again.");
    }
  } catch (err) {
    console.error(err);
    toast.error("Network error. Please try again.");
  } finally {
    setLoading(false);
  }
};

<Helmet>
        <title>Sales Enquiry | Buy Dedicated Line, Broadband & Wireless – inte-QT</title>
        <meta name="description" content="Submit a sales enquiry for Dedicated Lines, Business Broadband, and Wireless Connectivity." />
        <link rel="canonical" href="https://www.inte-qt.com/sales" />
      </Helmet>
  return (
    <>
      

      <Navbar />

      <div className="min-h-screen pt-20">
        <section className="gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-white dark:text-white text-5xl md:text-6xl font-bold mb-4">
              Sales Enquiry
            </h1>
            <p className="text-white dark:text-white text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Share your requirements for dedicated lines, broadband, or wireless connectivity.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardContent className="p-8 md:p-10">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={submitForm}>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Company Name*</label>
                    <Input name="company" placeholder="Your company name" value={form.company} onChange={handleChange} required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name*</label>
                    <Input name="fullName" placeholder="Your full name" value={form.fullName} onChange={handleChange} required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Your Email Address*</label>
                    <Input type="email" name="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number (with country code)*</label>
                    <Input type="tel" name="phone" placeholder="+91 9876543210" value={form.phone} onChange={handleChange} required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Postal Code*</label>
                    <Input name="postal" placeholder="Postal / ZIP code" value={form.postal} onChange={handleChange} required />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Full Address*</label>
                    <Input name="address" placeholder="Office address" value={form.address} onChange={handleChange} required />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Select Product*</label>
                    <div className="flex flex-col gap-2 mt-2">
                      {["Dedicated Lines", "Business Broadband", "Wireless Connection"].map((p) => (
                        <label key={p} className="flex items-center gap-2">
                          <input type="radio" name="product" value={p} checked={form.product === p} onChange={handleChange} required />
                          <span>{p}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Contract Duration*</label>
                    <div className="flex flex-wrap gap-4 mt-2">
                      {[
                        { label: "1 year", value: "1 year" },
                        { label: "2 years", value: "2 years" },
                        { label: "3 years", value: "3 years" },
                      ].map((item) => (
                        <label key={item.value} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="contractYear" value={item.value} checked={form.contractYear === item.value} onChange={handleChange} required />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">IP Requirement*</label>
                    <div className="flex flex-wrap gap-4 mt-2">
                      {["/29", "/30", "/31"].map((cidr) => (
                        <label key={cidr} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="ip" value={cidr} checked={form.ip === cidr} onChange={handleChange} required />
                          <span>{cidr}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Message / Requirements*</label>
                    <Textarea name="message" rows={5} placeholder="Share details about locations, bandwidth, timelines, or any specific requirements." value={form.message} onChange={handleChange} required />
                  </div>

                  <div className="md:col-span-2">
                    <Button type="submit" className="w-full gradient-primary shadow-glow" size="lg" disabled={loading}>
                      {loading ? "Submitting..." : "Submit Enquiry"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Sales;
