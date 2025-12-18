// src/pages/Contact.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { toast } from "sonner";

/**
 * Note:
 * - API_BASE_URL points to your production host. When running locally (Vite),
 *   ensure you set DEV env accordingly or use import.meta.env.DEV.
 */
const API_BASE_URL = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inte-qt.com";

/** Basic client-side email validation (keeps UX snappy) */
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Frontend checks
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please complete all fields.");
      return;
    }
    if (!isValidEmail(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // Optional: add captcha token here if you integrate reCAPTCHA/hCaptcha
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
      // captchaToken: '...' 
    };

    try {
      const res = await fetch(`${API_BASE_URL}/api/forms/general`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // If server doesn't return JSON, guard safely
      const text = await res.text();
      let data: any = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = { message: text || null };
      }

      if (!res.ok) {
        const msg =
          data?.message ||
          (Array.isArray(data?.errors) ? data.errors.map((x) => x.msg).join(", ") : "") ||
          `Server responded with ${res.status}`;
        toast.error(msg);
      } else {
        // Expecting { success: true, ... } from your API
        if (data?.success === false) {
          toast.error(data.message || "Unable to send message right now.");
        } else {
          toast.success(`Message sent — we'll reply to ${form.email}`);
          setForm({ name: "", email: "", message: "" });
        }
      }
    } catch (err) {
      console.error("Contact form submission error:", err);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact inte-QT | Sales, Support & Enterprise Connectivity Assistance</title>
        <meta
          name="description"
          content="Reach out to inte-QT for global connectivity solutions, enterprise internet, SD-WAN, NSOC support, pricing requests, and technical assistance across 190+ countries."
        />
        <meta name="keywords" content="contact, inte-QT, enterprise internet, sales, support, SD-WAN, NSOC, global connectivity" />
        <link rel="canonical" href="https://www.inte-qt.com/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact inte-QT | Sales & Support" />
        <meta
          property="og:description"
          content="Contact inte-QT for global connectivity solutions and enterprise support across 190+ countries."
        />
        <meta property="og:url" content="https://www.inte-qt.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.inte-qt.com/og/contact-1200x630.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact inte-QT | Sales & Support" />
        <meta name="twitter:description" content="Contact inte-QT for global connectivity and enterprise-grade support." />
        <meta name="twitter:image" content="https://www.inte-qt.com/og/contact-1200x630.jpg" />

        {/* Structured data — ContactPoint */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "inte-QT",
            url: "https://www.inte-qt.com",
            logo: "https://www.inte-qt.com/logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+44-20-0000-0000",
                contactType: "Sales",
                areaServed: "Worldwide",
                availableLanguage: ["English"]
              },
              {
                "@type": "ContactPoint",
                telephone: "+44-20-0000-0001",
                contactType: "Support",
                areaServed: "Worldwide",
                availableLanguage: ["English"]
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-white dark:text-white text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-white dark:text-white text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Let's discuss how we can support your connectivity needs — sales, technical support or partnership enquiries.
            </p>
          </div>
        </section>

        {/* Main */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {/* Left: quick options */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Choose an Option</h2>
                <div className="space-y-6">
                  <Link to="/sales" aria-label="Sales form">
                    <div className="p-6 border rounded-xl cursor-pointer hover:shadow-lg transition">
                      <p className="text-2xl font-semibold">Sales Form</p>
                      <p className="text-muted-foreground mt-1">Request pricing, quotes and new service connections.</p>
                    </div>
                  </Link>

                  <Link to="/support" aria-label="Support form">
                    <div className="p-6 border rounded-xl cursor-pointer hover:shadow-lg transition">
                      <p className="text-2xl font-semibold">Support Form</p>
                      <p className="text-muted-foreground mt-1">Need help with an existing service? Raise a support ticket.</p>
                    </div>
                  </Link>

                  <div className="mt-6 text-sm text-muted-foreground">
                    <p><strong>Office Hours:</strong> 24×7 NSOC — global support available.</p>
                    <p className="mt-2">For urgent issues, please use the Support Form so our team routes your ticket with priority.</p>
                  </div>
                </div>
              </div>

              {/* Right: General Form */}
              <Card className="shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">General Enquiry</h2>

                  <form className="space-y-5" onSubmit={handleSubmit} aria-label="Contact form">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        aria-required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        aria-required
                        aria-invalid={!isValidEmail(form.email) && form.email.length > 0}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        aria-required
                      />
                    </div>

                    <div>
                      <Button
                        className="w-full gradient-primary shadow-glow"
                        size="lg"
                        type="submit"
                        disabled={loading}
                        aria-disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                        <Send className="ml-2 w-4 h-4" />
                      </Button>
                    </div>

                    <div className="text-xs text-muted-foreground pt-2">
                      By submitting you agree to our <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
