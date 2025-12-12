// src/pages/AsiaList.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface Country {
  name: string;
  code: string;
  link: string;
}

const asianCountries: Country[] = [
  { name: "Afghanistan", code: "af", link: "/coverage/asia/afghanistan" },
  { name: "Armenia", code: "am", link: "/coverage/asia/armenia" },
  { name: "Azerbaijan", code: "az", link: "/coverage/asia/azerbaijan" },
  { name: "Bahrain", code: "bh", link: "/coverage/asia/bahrain" },
  { name: "Bangladesh", code: "bd", link: "/coverage/asia/bangladesh" },
  { name: "Bhutan", code: "bt", link: "/coverage/asia/bhutan" },
  { name: "Brunei", code: "bn", link: "/coverage/asia/brunei" },
  { name: "Cambodia", code: "kh", link: "/coverage/asia/cambodia" },
  { name: "China", code: "cn", link: "/coverage/asia/china" },
  { name: "Cyprus", code: "cy", link: "/coverage/asia/cyprus" },
  { name: "Georgia", code: "ge", link: "/coverage/asia/georgia" },
  { name: "India", code: "in", link: "/coverage/asia/india" },
  { name: "Indonesia", code: "id", link: "/coverage/asia/indonesia" },
  { name: "Iran", code: "ir", link: "/coverage/asia/iran" },
  { name: "Iraq", code: "iq", link: "/coverage/asia/iraq" },
  { name: "Israel", code: "il", link: "/coverage/asia/israel" },
  { name: "Japan", code: "jp", link: "/coverage/asia/japan" },
  { name: "Jordan", code: "jo", link: "/coverage/asia/jordan" },
  { name: "Kazakhstan", code: "kz", link: "/coverage/asia/kazakhstan" },
  { name: "Kuwait", code: "kw", link: "/coverage/asia/kuwait" },
  { name: "Kyrgyzstan", code: "kg", link: "/coverage/asia/kyrgyzstan" },
  { name: "Laos", code: "la", link: "/coverage/asia/laos" },
  { name: "Lebanon", code: "lb", link: "/coverage/asia/lebanon" },
  { name: "Malaysia", code: "my", link: "/coverage/asia/malaysia" },
  { name: "Maldives", code: "mv", link: "/coverage/asia/maldives" },
  { name: "Mongolia", code: "mn", link: "/coverage/asia/mongolia" },
  { name: "Myanmar (Burma)", code: "mm", link: "/coverage/asia/myanmar" },
  { name: "Nepal", code: "np", link: "/coverage/asia/nepal" },
  { name: "Oman", code: "om", link: "/coverage/asia/oman" },
  { name: "Pakistan", code: "pk", link: "/coverage/asia/pakistan" },
  { name: "Palestine, State of", code: "ps", link: "/coverage/asia/palestine" },
  { name: "Philippines", code: "ph", link: "/coverage/asia/philippines" },
  { name: "Qatar", code: "qa", link: "/coverage/asia/qatar" },
  { name: "Saudi Arabia", code: "sa", link: "/coverage/asia/saudi-arabia" },
  { name: "Singapore", code: "sg", link: "/coverage/asia/singapore" },
  { name: "South Korea", code: "kr", link: "/coverage/asia/south-korea" },
  { name: "Sri Lanka", code: "lk", link: "/coverage/asia/sri-lanka" },
  { name: "Syria", code: "sy", link: "/coverage/asia/syria" },
  { name: "Tajikistan", code: "tj", link: "/coverage/asia/tajikistan" },
  { name: "Thailand", code: "th", link: "/coverage/asia/thailand" },
  { name: "Timor-Leste (East Timor)", code: "tl", link: "/coverage/asia/timor-leste" },
  { name: "Turkey", code: "tr", link: "/coverage/asia/turkey" },
  { name: "Turkmenistan", code: "tm", link: "/coverage/asia/turkmenistan" },
  { name: "United Arab Emirates", code: "ae", link: "/coverage/asia/uae" },
  { name: "Uzbekistan", code: "uz", link: "/coverage/asia/uzbekistan" },
  { name: "Vietnam", code: "vn", link: "/coverage/asia/vietnam" },
  { name: "Yemen", code: "ye", link: "/coverage/asia/yemen" },
];

export default function AsiaList(): JSX.Element {
  const [query, setQuery] = useState("");

  const filtered = asianCountries.filter((c) =>
    c.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Asia Coverage — inte-QT",
    description:
      "Coverage pages for countries in Asia — Dedicated Internet Access, Broadband, LTE/5G, Managed Services and regional connectivity.",
    url: "https://www.inte-qt.com/coverage/asia",
    itemListElement: asianCountries.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.inte-qt.com${c.link}`,
      name: c.name,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Asia Coverage | inte-QT Global Internet Services</title>
        <meta
          name="description"
          content="Explore Asian country coverage for Dedicated Internet Access, Broadband, LTE/5G Wireless, Managed Services, and Global Connectivity in 190+ countries."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/asia" />

        {/* Open Graph */}
        <meta property="og:title" content="Asia Coverage | inte-QT Global Internet Services" />
        <meta
          property="og:description"
          content="Explore Asian country coverage for Dedicated Internet Access, Broadband, LTE/5G Wireless, Managed Services, and Global Connectivity in 190+ countries."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inte-qt.com/coverage/asia" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-24 pb-20 relative overflow-hidden" id="main">
        {/* Soft global gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-black -z-10" />

        {/* Faint world map */}
        <div
          className="absolute inset-0 opacity-[0.09] bg-center bg-contain bg-no-repeat -z-10"
          style={{
            backgroundImage:
              `url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')`,
          }}
          aria-hidden="true"
        />

        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Explore Asia</h1>
            <p className="text-slate-200 text-lg max-w-2xl mb-8">
              Navigate through countries like an adventurer. Click any territory to view coverage insights.
            </p>

            {/* Search */}
            <div className="max-w-xl mb-10">
              <label htmlFor="country-search" className="sr-only">
                Search a country
              </label>
              <div className="relative group">
                <input
                  id="country-search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search a country…"
                  aria-label="Search countries in Asia"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 backdrop-blur-xl focus:ring-2 focus:ring-primary/70 transition"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" aria-hidden="true" />
              </div>
            </div>

            {/* Country grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {filtered.map((c) => (
                <Link
                  to={c.link}
                  key={c.name}
                  className="group block rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Flag */}
                  <div
                    className="h-28 w-full flex items-center justify-center rounded-t-2xl bg-white/10 overflow-hidden"
                    aria-hidden="false"
                  >
                    <img
                      src={`https://flagcdn.com/w320/${c.code}.png`}
                      alt={`${c.name} flag`}
                      className="w-20 drop-shadow-sm group-hover:scale-110 transition"
                      loading="lazy"
                      width={128}
                      height={80}
                    />
                  </div>

                  {/* Country name */}
                  <div className="p-4 text-center">
                    <p className="text-slate-300 text-xs tracking-wide">COUNTRY</p>
                    <h3 className="text-white font-semibold text-lg mt-1">{c.name}</h3>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center mt-10 text-slate-300 text-lg">No country found. Try another search.</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
