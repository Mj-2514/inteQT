import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Japan: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Internet in Japan | Connectivity, ISPs & Broadband Overview",
    "url": "https://www.inte-qt.com/coverage/japan",
    "description": "Detailed overview of Japan’s internet connectivity, submarine cables, ISPs, fibre broadband, mobile access and inte-QT service capabilities in Tokyo, Osaka, and other major cities.",
    "publisher": {
      "@type": "Organization",
      "name": "inte-QT",
      "url": "https://www.inte-qt.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.inte-qt.com/static/logo-120x60.png"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Internet in Japan | Connectivity, ISPs & Broadband Overview</title>
        <meta
          name="description"
          content="Detailed overview of Japan’s internet connectivity, submarine cables, ISPs, fibre broadband, mobile access and inte-QT service capabilities in Tokyo, Osaka, and other major cities."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/japan" />

        {/* Open Graph */}
        <meta property="og:title" content="Internet in Japan | Connectivity, ISPs & Broadband Overview" />
        <meta property="og:description" content="Connectivity insights for Tokyo, Osaka and other major hubs — submarine cables, ISPs, and enterprise capabilities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/japan" />
        <meta property="og:image" content="https://www.inte-qt.com/static/og-japan-1200x630.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internet in Japan | inte-QT" />
        <meta name="twitter:description" content="Submarine cables, ISPs, fiber and 5G across Japan — enterprise connectivity overview." />
        <meta name="twitter:image" content="https://www.inte-qt.com/static/og-japan-1200x630.jpg" />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative py-28 overflow-hidden" aria-labelledby="hero-title">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1600&q=80")',
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1.5px]" aria-hidden="true" />

        <div className="relative z-10 text-center px-6 container mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Internet in Japan
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl mt-4 leading-relaxed"
          >
            A technologically advanced island nation with world-class fibre broadband, dense mobile networks, and a rich cultural and digital landscape.
          </motion.p>
        </div>
      </section>

      {/* ... rest of page content unchanged ... */}

      <Footer />
    </>
  );
};

export default Japan;
