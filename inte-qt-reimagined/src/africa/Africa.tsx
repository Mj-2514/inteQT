import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface Country {
  name: string;
  code: string;
  slug: string; // Changed from 'link' to 'slug' to match Europe
}

const africanCountries: Country[] = [
  { name: "Algeria", code: "dz", slug: "algeria" },
  { name: "Angola", code: "ao", slug: "angola" },
  { name: "Benin", code: "bj", slug: "benin" },
  { name: "Botswana", code: "bw", slug: "botswana" },
  { name: "Burkina Faso", code: "bf", slug: "burkina-faso" },
  { name: "Burundi", code: "bi", slug: "burundi" },
  { name: "Cabo Verde", code: "cv", slug: "cabo-verde" },
  { name: "Cameroon", code: "cm", slug: "cameroon" },
  { name: "Central African Republic", code: "cf", slug: "central-african-republic" },
  { name: "Chad", code: "td", slug: "chad" },
  { name: "Comoros", code: "km", slug: "comoros" },
  { name: "Democratic Republic of the Congo", code: "cd", slug: "democratic-republic-of-the-congo" },
  { name: "Republic of the Congo", code: "cg", slug: "republic-of-the-congo" },
  { name: "Djibouti", code: "dj", slug: "djibouti" },
  { name: "Egypt", code: "eg", slug: "egypt" },
  { name: "Equatorial Guinea", code: "gq", slug: "equatorial-guinea" },
  { name: "Eritrea", code: "er", slug: "eritrea" },
  { name: "Eswatini", code: "sz", slug: "eswatini" },
  { name: "Ethiopia", code: "et", slug: "ethiopia" },
  { name: "Gabon", code: "ga", slug: "gabon" },
  { name: "Gambia", code: "gm", slug: "gambia" },
  { name: "Ghana", code: "gh", slug: "ghana" },
  { name: "Guinea", code: "gn", slug: "guinea" },
  { name: "Guinea-Bissau", code: "gw", slug: "guinea-bissau" },
  { name: "Côte d'Ivoire", code: "ci", slug: "cote-divoire" },
  { name: "Kenya", code: "ke", slug: "kenya" },
  { name: "Lesotho", code: "ls", slug: "lesotho" },
  { name: "Liberia", code: "lr", slug: "liberia" },
  { name: "Libya", code: "ly", slug: "libya" },
  { name: "Madagascar", code: "mg", slug: "madagascar" },
  { name: "Malawi", code: "mw", slug: "malawi" },
  { name: "Mali", code: "ml", slug: "mali" },
  { name: "Mauritania", code: "mr", slug: "mauritania" },
  { name: "Mauritius", code: "mu", slug: "mauritius" },
  { name: "Morocco", code: "ma", slug: "morocco" },
  { name: "Mozambique", code: "mz", slug: "mozambique" },
  { name: "Namibia", code: "na", slug: "namibia" },
  { name: "Niger", code: "ne", slug: "niger" },
  { name: "Nigeria", code: "ng", slug: "nigeria" },
  { name: "Rwanda", code: "rw", slug: "rwanda" },
  { name: "Sao Tome and Principe", code: "st", slug: "sao-tome-and-principe" },
  { name: "Senegal", code: "sn", slug: "senegal" },
  { name: "Seychelles", code: "sc", slug: "seychelles" },
  { name: "Sierra Leone", code: "sl", slug: "sierra-leone" },
  { name: "Somalia", code: "so", slug: "somalia" },
  { name: "South Africa", code: "za", slug: "south-africa" },
  { name: "South Sudan", code: "ss", slug: "south-sudan" },
  { name: "Sudan", code: "sd", slug: "sudan" },
  { name: "Tanzania", code: "tz", slug: "tanzania" },
  { name: "Togo", code: "tg", slug: "togo" },
  { name: "Tunisia", code: "tn", slug: "tunisia" },
  { name: "Uganda", code: "ug", slug: "uganda" },
  { name: "Zambia", code: "zm", slug: "zambia" },
  { name: "Zimbabwe", code: "zw", slug: "zimbabwe" },
];

export default function AfricaList(): JSX.Element {
  const [query, setQuery] = useState("");

  // Filter countries by name (case-insensitive)
  const filtered = africanCountries.filter((c) =>
    c.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  // JSON-LD structured data: WebPage + ItemList for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Africa Coverage | inte-QT Global Internet Services",
    description:
      "Explore African country coverage for Dedicated Internet Access, Broadband, LTE/5G Wireless, Managed Services, and Global Connectivity.",
    url: "https://www.inte-qt.com/coverage/africa",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.inte-qt.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    hasPart: {
      "@type": "ItemList",
      itemListElement: filtered.slice(0, 100).map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        url: `https://www.inte-qt.com/country?slug=${c.slug}`,
      })),
    },
  };

  // fallback flag when CDN fails
  const handleFlagError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.onerror = null;
    target.src = `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='200'><rect width='100%' height='100%' fill='%23e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='sans-serif' font-size='20'>Flag</text></svg>`
    )}`;
  };

  return (
    <>
      <Helmet>
        <title>Africa Coverage | inte-QT Global Internet Services</title>
        <meta
          name="description"
          content="Explore African country coverage for Dedicated Internet Access, Broadband, LTE/5G Wireless, Managed Services, and Global Connectivity."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-black -z-10" />

        <div
          className="absolute inset-0 opacity-[0.09] bg-center bg-contain bg-no-repeat -z-10"
          style={{
            backgroundImage:
              `url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')`,
          }}
          aria-hidden
        />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Explore Africa
            </h1>
            <p className="text-slate-200 text-lg max-w-2xl mb-8">
              Discover coverage across the African landscape. Pick any nation to dive into network insights.
            </p>

            <div className="max-w-xl mb-10">
              <div className="relative group">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search a country…"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 backdrop-blur-xl focus:ring-2 focus:ring-primary/70 transition"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {filtered.map((c) => (
                <Link
                  to={`/country?slug=${c.slug}`}  // Changed to match Europe pattern
                  key={c.name}
                  className="group block rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="h-28 w-full flex items-center justify-center rounded-t-2xl bg-white/10 overflow-hidden">
                    <img
                      src={`https://flagcdn.com/w320/${c.code}.png`}
                      alt={c.name}
                      className="w-20 drop-shadow-sm group-hover:scale-110 transition"
                      loading="lazy"
                      onError={handleFlagError}
                    />
                  </div>

                  <div className="p-4 text-center">
                    <p className="text-slate-300 text-xs tracking-wide">COUNTRY</p>
                    <h3 className="text-white font-semibold text-lg mt-1">
                      {c.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center mt-10 text-slate-300 text-lg">
                No country found. Try another search.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}