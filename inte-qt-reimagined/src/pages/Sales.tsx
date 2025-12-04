import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";


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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sales form submitted:", form);
  };
  <Helmet>
  <title>Sales Enquiry | Buy Dedicated Line, Broadband & Wireless – inte-QT</title>

  <meta
    name="description"
    content="Submit a sales enquiry for Dedicated Lines, Business Broadband, and Wireless Connectivity. inte-QT provides global enterprise-grade internet solutions across 190+ countries."
  />

  <meta
    name="keywords"
    content="dedicated line provider, business broadband sales, telecom sales enquiry, enterprise internet provider, wireless business internet, global connectivity solutions, leased line sales, corporate internet provider"
  />

  <link rel="canonical" href="https://www.inte-qt.com/sales" />

  {/* Open Graph (Facebook/LinkedIn) */}
  <meta property="og:title" content="Sales Enquiry | Enterprise Connectivity Solutions" />
  <meta
    property="og:description"
    content="Reach out to inte-QT for enterprise-grade connectivity including leased lines, wireless internet, and global broadband solutions."
  />
  <meta property="og:url" content="https://www.inte-qt.com/sales" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://i.ibb.co/bHF9JH9/sales-banner.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sales Enquiry | Buy Global Connectivity Services" />
  <meta
    name="twitter:description"
    content="Contact inte-QT to get pricing on dedicated lines, business broadband, and wireless enterprise internet services."
  />
  <meta name="twitter:image" content="https://i.ibb.co/bHF9JH9/sales-banner.jpg" />

  {/* Schema – Sales Form Page */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Sales Enquiry - inte-QT",
        "url": "https://www.inte-qt.com/sales",
        "description": "Sales enquiry page for enterprise connectivity solutions including dedicated lines, broadband, and wireless services.",
        "provider": {
          "@type": "Organization",
          "name": "inte-QT",
          "areaServed": "Worldwide",
          "serviceType": [
            "Dedicated Lines",
            "Business Broadband",
            "Wireless Connection"
          ]
        }
      }
    `}
  </script>
</Helmet>


  return (
    <>
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-white dark:text-white text-4xl font-bold mb-8">Sales Enquiry</h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={submitForm}>
          
          <input className="input" placeholder="Company Name" name="company" value={form.company} onChange={handleChange} required />
          <input className="input" placeholder="Full Name" name="fullName" value={form.fullName} onChange={handleChange} required />

          <input className="input" type="email" placeholder="Email Address" name="email" value={form.email} onChange={handleChange} required />
          <input className="input" type="tel" placeholder="Phone Number (with country code)" name="phone" value={form.phone} onChange={handleChange} required />

          <input className="input md:col-span-2" placeholder="Full Address" name="address" value={form.address} onChange={handleChange} required />
          <input className="input" placeholder="Postal Code" name="postal" value={form.postal} onChange={handleChange} required />

          <div className="md:col-span-2">
            <label className="font-medium">Select Product</label>

            <div className="flex flex-col gap-2 mt-2">
              {["Dedicated Lines", "Business Broadband", "Wireless Connection"].map((p) => (
                <label key={p} className="flex items-center gap-2">
                  <input type="radio" name="product" value={p} onChange={handleChange} required />
                  {p}
                </label>
              ))}
            </div>
          </div>

          <input className="input" placeholder="Year of Contract" name="contractYear" value={form.contractYear} onChange={handleChange} required />
          <input className="input" placeholder="IP requirement" name="ip" value={form.ip} onChange={handleChange} required />

          <textarea
            className="input md:col-span-2"
            rows={5}
            placeholder="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="primary-btn md:col-span-2">Submit</button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Sales;
