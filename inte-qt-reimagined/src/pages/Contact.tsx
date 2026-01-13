import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { toast } from "sonner";


const API_BASE_URL = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inteqt.onrender.com";

  // simple client-side email validation
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
};
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  if (!form.name || !form.email || !form.message) {
    toast.error("Please fill all fields.");
    setLoading(false);
    return;
  }

  if (!isValidEmail(form.email)) {
    toast.error("Please enter a valid email address.");
    setLoading(false);
    return;
  }

  // optional: get captcha token here (reCAPTCHA/hCaptcha)
  // const captchaToken = await getCaptchaToken(); // implement if you add captcha
  const payload = { ...form /*, captchaToken */ };

  try {
    const res = await fetch(`${API_BASE_URL}/api/forms/general`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      toast.success(`Message sent — we'll reply to ${form.email}`);
      setForm({ name: "", email: "", message: "" });
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
        <title>Contact inte-QT | Sales, Support & Enterprise Connectivity Assistance</title>
        <meta name="description" content="Reach out to inte-QT for global connectivity solutions, enterprise internet, SD-WAN, NSOC support, pricing requests, and technical assistance." />
        <link rel="canonical" href="https://www.inte-qt.com/contact" />
      </Helmet>
  return (
    <>
      

      <div className="min-h-screen pt-20">
        <section className="gradient-hero text-primary-foreground py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-white dark:text-white text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-white dark:text-white text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">Let's discuss how we can support your connectivity needs</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-6">Choose an Option</h2>
                <div className="space-y-6">
                  <Link to="/sales">
                    <div className="p-6 border rounded-xl cursor-pointer hover:shadow-lg transition">
                      <p className="text-2xl font-semibold">Sales Form</p>
                      <p className="text-muted-foreground mt-1">Request pricing, quotes, and new service connections.</p>
                    </div>
                  </Link>

                  <Link to="/support">
                    <div className="p-6 border rounded-xl cursor-pointer hover:shadow-lg transition">
                      <p className="text-2xl font-semibold">Support Form</p>
                      <p className="text-muted-foreground mt-1">Need help with an existing service? Raise a support ticket.</p>
                    </div>
                  </Link>
                </div>
              </div>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">General Form</h2>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea name="message" placeholder="How can we help you?" rows={5} value={form.message} onChange={handleChange} required />
                    </div>

                    <Button className="w-full gradient-primary shadow-glow" size="lg" type="submit" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"} <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;