import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface Country {
  name: string;
  code: string;
  slug: string; // Changed from link to slug
}

const asianCountries: Country[] = [
  { name: "Afghanistan", code: "af", slug: "afghanistan" },
  { name: "Armenia", code: "am", slug: "armenia" },
  { name: "Azerbaijan", code: "az", slug: "azerbaijan" },
  { name: "Bahrain", code: "bh", slug: "bahrain" },
  { name: "Bangladesh", code: "bd", slug: "bangladesh" },
  { name: "Bhutan", code: "bt", slug: "bhutan" },
  { name: "Brunei", code: "bn", slug: "brunei" },
  { name: "Cambodia", code: "kh", slug: "cambodia" },
  { name: "China", code: "cn", slug: "china" },
  { name: "Cyprus", code: "cy", slug: "cyprus" },
  { name: "Georgia", code: "ge", slug: "georgia" },
  { name: "India", code: "in", slug: "india" },
  { name: "Indonesia", code: "id", slug: "indonesia" },
  { name: "Iran", code: "ir", slug: "iran" },
  { name: "Iraq", code: "iq", slug: "iraq" },
  { name: "Israel", code: "il", slug: "israel" },
  { name: "Japan", code: "jp", slug: "japan" },
  { name: "Jordan", code: "jo", slug: "jordan" },
  { name: "Kazakhstan", code: "kz", slug: "kazakhstan" },
  { name: "Kuwait", code: "kw", slug: "kuwait" },
  { name: "Kyrgyzstan", code: "kg", slug: "kyrgyzstan" },
  { name: "Laos", code: "la", slug: "laos" },
  { name: "Lebanon", code: "lb", slug: "lebanon" },
  { name: "Malaysia", code: "my", slug: "malaysia" },
  { name: "Maldives", code: "mv", slug: "maldives" },
  { name: "Mongolia", code: "mn", slug: "mongolia" },
  { name: "Myanmar (Burma)", code: "mm", slug: "myanmar" },
  { name: "Nepal", code: "np", slug: "nepal" },
  { name: "Oman", code: "om", slug: "oman" },
  { name: "Pakistan", code: "pk", slug: "pakistan" },
  { name: "Palestine, State of", code: "ps", slug: "palestine" },
  { name: "Philippines", code: "ph", slug: "philippines" },
  { name: "Qatar", code: "qa", slug: "qatar" },
  { name: "Saudi Arabia", code: "sa", slug: "saudi-arabia" },
  { name: "Singapore", code: "sg", slug: "singapore" },
  { name: "South Korea", code: "kr", slug: "south-korea" },
  { name: "Sri Lanka", code: "lk", slug: "sri-lanka" },
  { name: "Syria", code: "sy", slug: "syria" },
  { name: "Tajikistan", code: "tj", slug: "tajikistan" },
  { name: "Thailand", code: "th", slug: "thailand" },
  { name: "Timor-Leste (East Timor)", code: "tl", slug: "timor-leste" },
  { name: "Turkey", code: "tr", slug: "turkey" },
  { name: "Turkmenistan", code: "tm", slug: "turkmenistan" },
  { name: "United Arab Emirates", code: "ae", slug: "united-arab-emirates" },
  { name: "Uzbekistan", code: "uz", slug: "uzbekistan" },
  { name: "Vietnam", code: "vn", slug: "vietnam" },
  { name: "Yemen", code: "ye", slug: "yemen" },
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
      url: `https://www.inte-qt.com/country?slug=${c.slug}`,
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
                  to={`/country?slug=${c.slug}`} // Updated: Link to single country page with query parameter
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