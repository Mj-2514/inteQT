import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface Country {
  name: string;
  code: string;
  slug: string; // Add slug field
}

const europeanCountries: Country[] = [
  { name: "Albania", code: "al", slug: "albania" },
  { name: "Andorra", code: "ad", slug: "andorra" },
  { name: "Austria", code: "at", slug: "austria" },
  { name: "Belarus", code: "by", slug: "belarus" },
  { name: "Belgium", code: "be", slug: "belgium" },
  { name: "Bosnia and Herzegovina", code: "ba", slug: "bosnia-and-herzegovina" },
  { name: "Bulgaria", code: "bg", slug: "bulgaria" },
  { name: "Croatia", code: "hr", slug: "croatia" },
  { name: "Cyprus", code: "cy", slug: "cyprus" },
  { name: "Czechia", code: "cz", slug: "czechia" },
  { name: "Denmark", code: "dk", slug: "denmark" },
  { name: "Estonia", code: "ee", slug: "estonia" },
  { name: "Finland", code: "fi", slug: "finland" },
  { name: "France", code: "fr", slug: "france" },
  { name: "Germany", code: "de", slug: "germany" },
  { name: "Greece", code: "gr", slug: "greece" },
  { name: "Hungary", code: "hu", slug: "hungary" },
  { name: "Iceland", code: "is", slug: "iceland" },
  { name: "Ireland", code: "ie", slug: "ireland" },
  { name: "Italy", code: "it", slug: "italy" },
  { name: "Latvia", code: "lv", slug: "latvia" },
  { name: "Liechtenstein", code: "li", slug: "liechtenstein" },
  { name: "Lithuania", code: "lt", slug: "lithuania" },
  { name: "Luxembourg", code: "lu", slug: "luxembourg" },
  { name: "Malta", code: "mt", slug: "malta" },
  { name: "Moldova", code: "md", slug: "moldova" },
  { name: "Monaco", code: "mc", slug: "monaco" },
  { name: "Montenegro", code: "me", slug: "montenegro" },
  { name: "Netherlands", code: "nl", slug: "netherlands" },
  { name: "North Macedonia", code: "mk", slug: "north-macedonia" },
  { name: "Norway", code: "no", slug: "norway" },
  { name: "Poland", code: "pl", slug: "poland" },
  { name: "Portugal", code: "pt", slug: "portugal" },
  { name: "Romania", code: "ro", slug: "romania" },
  { name: "Russia", code: "ru", slug: "russia" },
  { name: "San Marino", code: "sm", slug: "san-marino" },
  { name: "Serbia", code: "rs", slug: "serbia" },
  { name: "Slovakia", code: "sk", slug: "slovakia" },
  { name: "Slovenia", code: "si", slug: "slovenia" },
  { name: "Spain", code: "es", slug: "spain" },
  { name: "Sweden", code: "se", slug: "sweden" },
  { name: "Switzerland", code: "ch", slug: "switzerland" },
  { name: "Ukraine", code: "ua", slug: "ukraine" },
  { name: "United Kingdom", code: "gb", slug: "united-kingdom" },
  { name: "Vatican City", code: "va", slug: "vatican-city" },
];

export default function EuropeList() {
  const [query, setQuery] = useState("");

  const filtered = europeanCountries.filter((c) =>
    c.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Europe Coverage | inte-QT Global Internet Services</title>
        <meta
          name="description"
          content="Explore European country coverage for Dedicated Internet Access, Broadband, LTE/5G Wireless, Managed Services, and Global Connectivity."
        />
        <link
          rel="canonical"
          href="https://www.inte-qt.com/coverage/europe"
        />
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
              Explore Europe
            </h1>
            <p className="text-slate-200 text-lg max-w-2xl mb-8">
              Discover coverage across the European landscape. Pick any nation to dive into network insights.
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
                  to={`/country?slug=${c.slug}`}
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