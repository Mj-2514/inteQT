import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface Country {
  name: string;
  code: string;
  slug: string; // Changed from 'link' to 'slug'
}

const southAmericanCountries: Country[] = [
  { name: "Argentina", code: "ar", slug: "argentina" },
  { name: "Bolivia", code: "bo", slug: "bolivia" },
  { name: "Brazil", code: "br", slug: "brazil" },
  { name: "Chile", code: "cl", slug: "chile" },
  { name: "Colombia", code: "co", slug: "colombia" },
  { name: "Ecuador", code: "ec", slug: "ecuador" },
  { name: "Guyana", code: "gy", slug: "guyana" },
  { name: "Paraguay", code: "py", slug: "paraguay" },
  { name: "Peru", code: "pe", slug: "peru" },
  { name: "Suriname", code: "sr", slug: "suriname" },
  { name: "Uruguay", code: "uy", slug: "uruguay" },
  { name: "Venezuela", code: "ve", slug: "venezuela" },
  { name: "French Guiana", code: "gf", slug: "french-guiana" },
];

export default function SouthAmericaList() {
  const [query, setQuery] = useState("");

  const filtered = southAmericanCountries.filter((c) =>
    c.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "South America Internet Coverage",
    description:
      "Explore South American country coverage for internet connectivity, broadband, wireless and managed network services.",
    url: "https://www.inte-qt.com/coverage/south-america",
    itemListElement: southAmericanCountries.map((c, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: c.name,
      url: `https://www.inte-qt.com/country?slug=${c.slug}`, // Updated URL pattern
    })),
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.inte-qt.com/#website"
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.inte-qt.com/#organization"
    }
  };

  return (
    <>
      <Helmet>
        <title>South America Coverage | inte-QT Global Internet Services</title>
        <meta
          name="description"
          content="Explore South American country coverage for Dedicated Internet Access, Broadband, LTE/5G Wireless, Managed Services, and Global Connectivity."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/south-america"
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
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
        />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Explore South America
            </h1>
            <p className="text-slate-200 text-lg max-w-2xl mb-8">
              Discover coverage across the South American region. Select a country to explore connectivity.
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
                  to={`/country?slug=${c.slug}`} // Updated to match Europe pattern
                  key={c.name}
                  className="group block rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="h-28 w-full flex items-center justify-center rounded-t-2xl bg-white/10 overflow-hidden">
                    <img
                      src={`https://flagcdn.com/w320/${c.code}.png`}
                      alt={c.name}
                      className="w-20 drop-shadow-sm group-hover:scale-110 transition"
                      loading="lazy"
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