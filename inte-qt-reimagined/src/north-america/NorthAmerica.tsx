import { useState } from "react";
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

const northAmericanCountries: Country[] = [
  { name: "Antigua and Barbuda", code: "ag", link: "/coverage/north-america/antigua-and-barbuda" },
  { name: "Bahamas", code: "bs", link: "/coverage/north-america/bahamas" },
  { name: "Barbados", code: "bb", link: "/coverage/north-america/barbados" },
  { name: "Belize", code: "bz", link: "/coverage/north-america/belize" },
  { name: "Canada", code: "ca", link: "/coverage/north-america/canada" },
  { name: "Costa Rica", code: "cr", link: "/coverage/north-america/costa-rica" },
  { name: "Cuba", code: "cu", link: "/coverage/north-america/cuba" },
  { name: "Dominica", code: "dm", link: "/coverage/north-america/dominica" },
  { name: "Dominican Republic", code: "do", link: "/coverage/north-america/dominican-republic" },
  { name: "El Salvador", code: "sv", link: "/coverage/north-america/el-salvador" },
  { name: "Grenada", code: "gd", link: "/coverage/north-america/grenada" },
  { name: "Guatemala", code: "gt", link: "/coverage/north-america/guatemala" },
  { name: "Haiti", code: "ht", link: "/coverage/north-america/haiti" },
  { name: "Honduras", code: "hn", link: "/coverage/north-america/honduras" },
  { name: "Jamaica", code: "jm", link: "/coverage/north-america/jamaica" },
  { name: "Mexico", code: "mx", link: "/coverage/north-america/mexico" },
  { name: "Nicaragua", code: "ni", link: "/coverage/north-america/nicaragua" },
  { name: "Panama", code: "pa", link: "/coverage/north-america/panama" },
  { name: "Saint Kitts and Nevis", code: "kn", link: "/coverage/north-america/saint-kitts-and-nevis" },
  { name: "Saint Lucia", code: "lc", link: "/coverage/north-america/saint-lucia" },
  { name: "Saint Vincent and the Grenadines", code: "vc", link: "/coverage/north-america/saint-vincent-and-the-grenadines" },
  { name: "Trinidad and Tobago", code: "tt", link: "/coverage/north-america/trinidad-and-tobago" },
  { name: "United States", code: "us", link: "/coverage/north-america/united-states" },
];

export default function NorthAmericaList() {
  const [query, setQuery] = useState("");

  const filtered = northAmericanCountries.filter((c) =>
    c.name.toLowerCase().includes(query.trim().toLowerCase())
  );
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "North America Internet Coverage",
    description:
      "Explore North American country coverage for internet connectivity, broadband, wireless and managed network services.",
    url: "https://www.inte-qt.com/coverage/north-america",
    itemListElement: northAmericanCountries.map((c, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: c.name,
      url: `https://www.inte-qt.com${c.link}`,
    })),
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.inte-qt.com/#website",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.inte-qt.com/#organization",
    },
  };
  return (
    <>
      <Helmet>
        <title>North America Coverage | inte-QT Global Internet Services</title>

        <meta
          name="description"
          content="Explore North American country coverage for Dedicated Internet Access, Broadband, LTE/5G Wireless, Managed Services, and Global Connectivity."
        />

        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/north-america"
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
              Explore North America
            </h1>
            <p className="text-slate-200 text-lg max-w-2xl mb-8">
              Discover coverage across the North American region. Select a country to explore connectivity.
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
                  to={c.link}
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
