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

const europeanCountries: Country[] = [
  { name: "Albania", code: "al", link: "/coverage/europe/albania" },
  { name: "Andorra", code: "ad", link: "/coverage/europe/andorra" },
  { name: "Austria", code: "at", link: "/coverage/europe/austria" },
  { name: "Belarus", code: "by", link: "/coverage/europe/belarus" },
  { name: "Belgium", code: "be", link: "/coverage/europe/belgium" },
  { name: "Bosnia and Herzegovina", code: "ba", link: "/coverage/europe/bosnia-and-herzegovina" },
  { name: "Bulgaria", code: "bg", link: "/coverage/europe/bulgaria" },
  { name: "Croatia", code: "hr", link: "/coverage/europe/croatia" },
  { name: "Cyprus", code: "cy", link: "/coverage/europe/cyprus" },
  { name: "Czechia", code: "cz", link: "/coverage/europe/czechia" },
  { name: "Denmark", code: "dk", link: "/coverage/europe/denmark" },
  { name: "Estonia", code: "ee", link: "/coverage/europe/estonia" },
  { name: "Finland", code: "fi", link: "/coverage/europe/finland" },
  { name: "France", code: "fr", link: "/coverage/europe/france" },
  { name: "Germany", code: "de", link: "/coverage/europe/germany" },
  { name: "Greece", code: "gr", link: "/coverage/europe/greece" },
  { name: "Hungary", code: "hu", link: "/coverage/europe/hungary" },
  { name: "Iceland", code: "is", link: "/coverage/europe/iceland" },
  { name: "Ireland", code: "ie", link: "/coverage/europe/ireland" },
  { name: "Italy", code: "it", link: "/coverage/europe/italy" },
  { name: "Latvia", code: "lv", link: "/coverage/europe/latvia" },
  { name: "Liechtenstein", code: "li", link: "/coverage/europe/liechtenstein" },
  { name: "Lithuania", code: "lt", link: "/coverage/europe/lithuania" },
  { name: "Luxembourg", code: "lu", link: "/coverage/europe/luxembourg" },
  { name: "Malta", code: "mt", link: "/coverage/europe/malta" },
  { name: "Moldova", code: "md", link: "/coverage/europe/moldova" },
  { name: "Monaco", code: "mc", link: "/coverage/europe/monaco" },
  { name: "Montenegro", code: "me", link: "/coverage/europe/montenegro" },
  { name: "Netherlands", code: "nl", link: "/coverage/europe/netherlands" },
  { name: "North Macedonia", code: "mk", link: "/coverage/europe/north-macedonia" },
  { name: "Norway", code: "no", link: "/coverage/europe/norway" },
  { name: "Poland", code: "pl", link: "/coverage/europe/poland" },
  { name: "Portugal", code: "pt", link: "/coverage/europe/portugal" },
  { name: "Romania", code: "ro", link: "/coverage/europe/romania" },
  { name: "Russia", code: "ru", link: "/coverage/europe/russia" },
  { name: "San Marino", code: "sm", link: "/coverage/europe/san-marino" },
  { name: "Serbia", code: "rs", link: "/coverage/europe/serbia" },
  { name: "Slovakia", code: "sk", link: "/coverage/europe/slovakia" },
  { name: "Slovenia", code: "si", link: "/coverage/europe/slovenia" },
  { name: "Spain", code: "es", link: "/coverage/europe/spain" },
  { name: "Sweden", code: "se", link: "/coverage/europe/sweden" },
  { name: "Switzerland", code: "ch", link: "/coverage/europe/switzerland" },
  { name: "Ukraine", code: "ua", link: "/coverage/europe/ukraine" },
  { name: "United Kingdom", code: "gb", link: "/coverage/europe/united-kingdom" },
  { name: "Vatican City", code: "va", link: "/coverage/europe/vatican-city" },
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
