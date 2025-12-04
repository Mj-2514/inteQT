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

const africanCountries: Country[] = [
  { name: "Algeria", code: "dz", link: "/coverage/africa/algeria" },
  { name: "Angola", code: "ao", link: "/coverage/africa/angola" },
  { name: "Benin", code: "bj", link: "/coverage/africa/benin" },
  { name: "Botswana", code: "bw", link: "/coverage/africa/botswana" },
  { name: "Burkina Faso", code: "bf", link: "/coverage/africa/burkina-faso" },
  { name: "Burundi", code: "bi", link: "/coverage/africa/burundi" },
  { name: "Cabo Verde", code: "cv", link: "/coverage/africa/cabo-verde" },
  { name: "Cameroon", code: "cm", link: "/coverage/africa/cameroon" },
  { name: "Central African Republic", code: "cf", link: "/coverage/africa/central-african-republic" },
  { name: "Chad", code: "td", link: "/coverage/africa/chad" },
  { name: "Comoros", code: "km", link: "/coverage/africa/comoros" },
  { name: "Democratic Republic of the Congo", code: "cd", link: "/coverage/africa/democratic-republic-of-the-congo" },
  { name: "Republic of the Congo", code: "cg", link: "/coverage/africa/republic-of-the-congo" },
  { name: "Djibouti", code: "dj", link: "/coverage/africa/djibouti" },
  { name: "Egypt", code: "eg", link: "/coverage/africa/egypt" },
  { name: "Equatorial Guinea", code: "gq", link: "/coverage/africa/equatorial-guinea" },
  { name: "Eritrea", code: "er", link: "/coverage/africa/eritrea" },
  { name: "Eswatini", code: "sz", link: "/coverage/africa/eswatini" },
  { name: "Ethiopia", code: "et", link: "/coverage/africa/ethiopia" },
  { name: "Gabon", code: "ga", link: "/coverage/africa/gabon" },
  { name: "Gambia", code: "gm", link: "/coverage/africa/gambia" },
  { name: "Ghana", code: "gh", link: "/coverage/africa/ghana" },
  { name: "Guinea", code: "gn", link: "/coverage/africa/guinea" },
  { name: "Guinea-Bissau", code: "gw", link: "/coverage/africa/guinea-bissau" },
  { name: "Côte d'Ivoire", code: "ci", link: "/coverage/africa/cote-divoire" },
  { name: "Kenya", code: "ke", link: "/coverage/africa/kenya" },
  { name: "Lesotho", code: "ls", link: "/coverage/africa/lesotho" },
  { name: "Liberia", code: "lr", link: "/coverage/africa/liberia" },
  { name: "Libya", code: "ly", link: "/coverage/africa/libya" },
  { name: "Madagascar", code: "mg", link: "/coverage/africa/madagascar" },
  { name: "Malawi", code: "mw", link: "/coverage/africa/malawi" },
  { name: "Mali", code: "ml", link: "/coverage/africa/mali" },
  { name: "Mauritania", code: "mr", link: "/coverage/africa/mauritania" },
  { name: "Mauritius", code: "mu", link: "/coverage/africa/mauritius" },
  { name: "Morocco", code: "ma", link: "/coverage/africa/morocco" },
  { name: "Mozambique", code: "mz", link: "/coverage/africa/mozambique" },
  { name: "Namibia", code: "na", link: "/coverage/africa/namibia" },
  { name: "Niger", code: "ne", link: "/coverage/africa/niger" },
  { name: "Nigeria", code: "ng", link: "/coverage/africa/nigeria" },
  { name: "Rwanda", code: "rw", link: "/coverage/africa/rwanda" },
  { name: "Sao Tome and Principe", code: "st", link: "/coverage/africa/sao-tome-and-principe" },
  { name: "Senegal", code: "sn", link: "/coverage/africa/senegal" },
  { name: "Seychelles", code: "sc", link: "/coverage/africa/seychelles" },
  { name: "Sierra Leone", code: "sl", link: "/coverage/africa/sierra-leone" },
  { name: "Somalia", code: "so", link: "/coverage/africa/somalia" },
  { name: "South Africa", code: "za", link: "/coverage/africa/south-africa" },
  { name: "South Sudan", code: "ss", link: "/coverage/africa/south-sudan" },
  { name: "Sudan", code: "sd", link: "/coverage/africa/sudan" },
  { name: "Tanzania", code: "tz", link: "/coverage/africa/tanzania" },
  { name: "Togo", code: "tg", link: "/coverage/africa/togo" },
  { name: "Tunisia", code: "tn", link: "/coverage/africa/tunisia" },
  { name: "Uganda", code: "ug", link: "/coverage/africa/uganda" },
  { name: "Zambia", code: "zm", link: "/coverage/africa/zambia" },
  { name: "Zimbabwe", code: "zw", link: "/coverage/africa/zimbabwe" },
];

export default function AfricaList() {
  const [query, setQuery] = useState("");

  const filtered = africanCountries.filter((c) =>
    c.name.toLowerCase().includes(query.trim().toLowerCase())
  );
  <Helmet>
        <title>Africa Coverage | inte-QT Global Internet Services</title>
        <meta
          name="description"
          content="Explore African country coverage for Dedicated Internet Access, Broadband, LTE/5G Wireless, Managed Services, and Global Connectivity."
        />
        <link rel="canonical" href="https://www.inte-qt.com/coverage/africa" />
      </Helmet>

  return (
    
    <>
      

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
              Explore Africa
            </h1>
            <p className="text-slate-200 text-lg max-w-2xl mb-8">
              Discover coverage across the African continent. Select a country to explore connectivity.
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
