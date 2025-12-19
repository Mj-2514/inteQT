import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";

/* =========================
   IMAGE SLIDER DATA
========================= */
const SLIDER_IMAGES = [
  "https://i.imgur.com/B0W9Oes.jpeg",
  "https://i.imgur.com/8mSihSR.jpg",
  "https://i.imgur.com/Q0JibVh.jpg",
];

const INTRO_IMAGE =
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWd2dG9jenM4Z2ZoemRuanIzZWlqa3o0NG9lN3Z2MzNoYzljanN1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yQqNPOdGMexumRMxVP/giphy.gif";


const Gems: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* Auto slide every 4 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === SLIDER_IMAGES.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>GEMS – Global Enterprise Management Services | inte-QT</title>
        <meta
          name="description"
          content="GEMS by inte-QT delivers global enterprise management through a single interface, expert engineers, SLA-backed support, and seamless procurement & delivery."
        />
        <link rel="canonical" href="https://www.inte-qt.com/gems" />
      </Helmet>

      <Navbar />

      {/* =========================
          INTRO SECTION
      ========================== */}
      {/* =========================
    INTRO SECTION (WITH IMAGE)
========================== */}
<section className="pt-28 pb-20 px-4 md:pt-32">
  <div className="max-w-6xl mx-auto grid gap-20 md:grid-cols-2 items-center">
    
    {/* LEFT: TEXT */}
    <div>
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Global Enterprise Management Services (GEMS)
      </h1>

      <p className="text-muted-foreground mb-8">
        GEMS is inte-QT’s centralized framework for managing enterprise
        networks globally — simplifying operations, improving reliability,
        and ensuring SLA-driven performance.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          "Single interface for global environment",
          "Device staging & commissioning as per user requirement",
          "Maintenance support 24×7×365 as per SLA",
          "Professional & experienced SME engineers",
        ].map((feature, idx) => (
          <div key={idx} className="flex gap-3 items-start">
            <CheckCircle className="w-5 h-5 text-primary mt-1" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT: IMAGE */}
    <div className="relative">
      <img
        src={INTRO_IMAGE}
        alt="GEMS Global Enterprise Network"
        className="w-full h-[260px] sm:h-[320px] md:h-[320px] object-cover rounded-2xl shadow-lg"
      />
    </div>
  </div>
</section>


      {/* =========================
          GEM PROCESS (3 PARTS)
          – YOU CAN ADD POINTS
      ========================== */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-14">
            GEMS Process
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Analyzing</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {/* YOU WILL ADD POINTS HERE */}
                  <li>• Requirement analysis</li>
                  <li>• Network feasibility study</li>
                  <li>• Performance & SLA planning</li>
                  <li>• Assign dedicated project manager and sales support </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Local Procurement
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {/* YOU WILL ADD POINTS HERE */}
                  <li>• Align the requirement to local region partner. </li>
                  <li>• Work as per Deal ID or with local discount</li>
                  <li>• Design and prepare solution and present proposal. </li>
                  <li>• Solution understanding and Hardware availability with partner </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Delivery</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {/* YOU WILL ADD POINTS HERE */}
                  <li>• Define the scope of work for partner as per requirement</li>
                  <li>• Testing & commissioning</li>
                  <li>• Ongoing support & monitoring</li>
                  <li>• Collect the device details from partner </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* =========================
          IMAGE SLIDER
      ========================== */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            GEMS in Action
          </h2>

          <div className="relative overflow-hidden rounded-2xl h-[220px] sm:h-[300px] md:h-[580px]">
            {SLIDER_IMAGES.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`GEMS Slide ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  currentSlide === idx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {SLIDER_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  currentSlide === idx
                    ? "bg-primary"
                    : "bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gems;