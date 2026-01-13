import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle, 
  Globe, 
  Users, 
  Shield, 
  Zap, 
  Clock, 
  Cloud, 
  Server, 
  Network, 
  ArrowLeft,
  ExternalLink,
  AlertCircle,
  Loader2,
  Calendar,
  Activity,
  ShieldCheck,
  Gauge,
  Globe2,
  Rocket,
  BarChart3,
  Building,
  Satellite,
  Cpu,
  HardDrive,
  MapPin,
  Wifi,
  Database,
  Layers,
  Target,
  FileText,
  Link as LinkIcon,
  Building2,
  Check,
  Menu,
  X
} from "lucide-react";
import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";

const API_BASE =import.meta.env.VITE_API_BASE;

interface CountryData {
  id?: string;
  Countryname: string;
  name?: string;
  slug: string;
  
  // Network Infrastructure
  partnersRange: string;
  Ipv4PeersRange: string;
  Ipv6PeersRange: string;
  IxpPartnersRange: string;
  Ipv4GatewaysRange: string;
  Ipv6GatewaysRange: string;
  CloudPartnersRange: string;
  
  // Performance & Features
  ddosProtection: boolean;
  minServiceLatencyRange: string;
  avgServiceLatencyRange: string;
  
  // Services
  features?: string;
  ourServices?: string;
  capabilities?: string;
  
  // Delivery
  commercialOfferDateRange?: string;
  deliveryDateRange?: string;
  
  // Submarine Cable
  submarineCableImage?: string;
  submarineCableLink?: string;
  
  // Additional
  integrationNote?: string;
  whyChooseUs?: string;
  
  // References
  references?: string[];
  
  // Status
  status: string;
  createdAt: string;
  updatedAt: string;
  
  // Created by
  createdBy?: {
    name: string;
    email: string;
  };
}

const Country: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [countrySlug, setCountrySlug] = useState<string>("");
  const [activeTab, setActiveTab] = useState<'overview' | 'references'>('overview');
  const [cloudPartners, setCloudPartners] = useState<string[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const slugFromQuery = queryParams.get("slug");
    
    if (!slugFromQuery) {
      navigate("/*", { replace: true });
      return;
    }
    
    setCountrySlug(slugFromQuery);
    fetchCountryData(slugFromQuery);
  }, [location.search, navigate]);

  useEffect(() => {
    if (countryData?.CloudPartnersRange) {
      const partners = countryData.CloudPartnersRange
        .split(/[,;|/]+/)
        .map(partner => partner.trim())
        .filter(partner => partner.length > 0);
      setCloudPartners(partners);
    }
  }, [countryData?.CloudPartnersRange]);

  const fetchCountryData = async (slug: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const res = await fetch(`${API_BASE}/api/country/${slug}`);
      
      if (!res.ok) {
        if (res.status === 404) {
          navigate("/*", { replace: true });
          return;
        } else {
          throw new Error(`Failed to load country data: ${res.status}`);
        }
      }
      
      const data = await res.json();
      
      if (data.success === false || !data.data) {
        navigate("/*", { replace: true });
        return;
      }
      
      setCountryData(data.data);
      
    } catch (err: any) {
      console.error("Error fetching country data:", err);
      setError(err.message || "Failed to load country information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getCountryName = () => {
    return countryData?.Countryname || countryData?.name || countrySlug?.toUpperCase() || "Country";
  };

  const getFeaturesList = () => {
    if (!countryData?.features) return [];
    return countryData.features.split('\n').filter(f => f.trim());
  };

  const getServicesList = () => {
    if (!countryData?.ourServices) return [];
    return countryData.ourServices.split('\n').filter(s => s.trim());
  };

  const getCapabilitiesList = () => {
    if (!countryData?.capabilities) return [];
    return countryData.capabilities.split('\n').filter(c => c.trim());
  };

  const hasReferences = countryData?.references && countryData.references.length > 0;
  const hasFeatures = getFeaturesList().length > 0;
  const hasServices = getServicesList().length > 0;
  const hasCapabilities = getCapabilitiesList().length > 0;
  const hasCloudPartners = cloudPartners.length > 0;

  const handleRetry = () => {
    if (countrySlug) {
      fetchCountryData(countrySlug);
    }
  };

  const getFlagUrl = (countryName: string) => {
    const flagMap: Record<string, string> = {
      // North America (23)
      "Antigua and Barbuda": "ag",
      "Bahamas": "bs",
      "Barbados": "bb",
      "Belize": "bz",
      "Canada": "ca",
      "Costa Rica": "cr",
      "Cuba": "cu",
      "Dominica": "dm",
      "Dominican Republic": "do",
      "El Salvador": "sv",
      "Grenada": "gd",
      "Guatemala": "gt",
      "Haiti": "ht",
      "Honduras": "hn",
      "Jamaica": "jm",
      "Mexico": "mx",
      "Nicaragua": "ni",
      "Panama": "pa",
      "Saint Kitts and Nevis": "kn",
      "Saint Lucia": "lc",
      "Saint Vincent and the Grenadines": "vc",
      "Trinidad and Tobago": "tt",
      "United States": "us",
      "USA": "us",
      "US": "us",
      
      // South America (12)
      "Argentina": "ar",
      "Bolivia": "bo",
      "Brazil": "br",
      "Chile": "cl",
      "Colombia": "co",
      "Ecuador": "ec",
      "Guyana": "gy",
      "Paraguay": "py",
      "Peru": "pe",
      "Suriname": "sr",
      "Uruguay": "uy",
      "Venezuela": "ve",
      
      // Europe (44)
      "Albania": "al",
      "Andorra": "ad",
      "Armenia": "am",
      "Austria": "at",
      "Azerbaijan": "az",
      "Belarus": "by",
      "Belgium": "be",
      "Bosnia and Herzegovina": "ba",
      "Bulgaria": "bg",
      "Croatia": "hr",
      "Cyprus": "cy",
      "Czech Republic": "cz",
      "Czechia": "cz",
      "Denmark": "dk",
      "Estonia": "ee",
      "Finland": "fi",
      "France": "fr",
      "Georgia": "ge",
      "Germany": "de",
      "Greece": "gr",
      "Hungary": "hu",
      "Iceland": "is",
      "Ireland": "ie",
      "Italy": "it",
      "Kazakhstan": "kz",
      "Kosovo": "xk",
      "Latvia": "lv",
      "Liechtenstein": "li",
      "Lithuania": "lt",
      "Luxembourg": "lu",
      "Malta": "mt",
      "Moldova": "md",
      "Monaco": "mc",
      "Montenegro": "me",
      "Netherlands": "nl",
      "North Macedonia": "mk",
      "Norway": "no",
      "Poland": "pl",
      "Portugal": "pt",
      "Romania": "ro",
      "Russia": "ru",
      "Russian Federation": "ru",
      "San Marino": "sm",
      "Serbia": "rs",
      "Slovakia": "sk",
      "Slovenia": "si",
      "Spain": "es",
      "Sweden": "se",
      "Switzerland": "ch",
      "Turkey": "tr",
      "Türkiye": "tr",
      "Ukraine": "ua",
      "United Kingdom": "gb",
      "UK": "gb",
      "Great Britain": "gb",
      "Britain": "gb",
      "England": "gb",
      "Scotland": "gb",
      "Wales": "gb",
      "Vatican City": "va",
      
      // Asia (48)
      "Afghanistan": "af",
      "Bahrain": "bh",
      "Bangladesh": "bd",
      "Bhutan": "bt",
      "Brunei": "bn",
      "Brunei Darussalam": "bn",
      "Cambodia": "kh",
      "China": "cn",
      "India": "in",
      "Indonesia": "id",
      "Iran": "ir",
      "Iran, Islamic Republic of": "ir",
      "Iraq": "iq",
      "Israel": "il",
      "Japan": "jp",
      "Jordan": "jo",
      "Kuwait": "kw",
      "Kyrgyzstan": "kg",
      "Laos": "la",
      "Lebanon": "lb",
      "Malaysia": "my",
      "Maldives": "mv",
      "Mongolia": "mn",
      "Myanmar": "mm",
      "Burma": "mm",
      "Nepal": "np",
      "North Korea": "kp",
      "Democratic People's Republic of Korea": "kp",
      "Oman": "om",
      "Pakistan": "pk",
      "Palestine": "ps",
      "State of Palestine": "ps",
      "Philippines": "ph",
      "Qatar": "qa",
      "Saudi Arabia": "sa",
      "Singapore": "sg",
      "South Korea": "kr",
      "Republic of Korea": "kr",
      "Korea, Republic of": "kr",
      "Sri Lanka": "lk",
      "Syria": "sy",
      "Syrian Arab Republic": "sy",
      "Taiwan": "tw",
      "Tajikistan": "tj",
      "Thailand": "th",
      "Timor-Leste": "tl",
      "East Timor": "tl",
      "Turkmenistan": "tm",
      "United Arab Emirates": "ae",
      "UAE": "ae",
      "Uzbekistan": "uz",
      "Vietnam": "vn",
      "Viet Nam": "vn",
      "Yemen": "ye",
      
      // Africa (54)
      "Algeria": "dz",
      "Angola": "ao",
      "Benin": "bj",
      "Botswana": "bw",
      "Burkina Faso": "bf",
      "Burundi": "bi",
      "Cabo Verde": "cv",
      "Cape Verde": "cv",
      "Cameroon": "cm",
      "Central African Republic": "cf",
      "Chad": "td",
      "Comoros": "km",
      "Congo": "cg",
      "Congo, Republic of the": "cg",
      "Democratic Republic of the Congo": "cd",
      "DR Congo": "cd",
      "Congo, Democratic Republic of": "cd",
      "Côte d'Ivoire": "ci",
      "Ivory Coast": "ci",
      "Djibouti": "dj",
      "Egypt": "eg",
      "Equatorial Guinea": "gq",
      "Eritrea": "er",
      "Eswatini": "sz",
      "Swaziland": "sz",
      "Ethiopia": "et",
      "Gabon": "ga",
      "Gambia": "gm",
      "Ghana": "gh",
      "Guinea": "gn",
      "Guinea-Bissau": "gw",
      "Kenya": "ke",
      "Lesotho": "ls",
      "Liberia": "lr",
      "Libya": "ly",
      "Madagascar": "mg",
      "Malawi": "mw",
      "Mali": "ml",
      "Mauritania": "mr",
      "Mauritius": "mu",
      "Morocco": "ma",
      "Mozambique": "mz",
      "Namibia": "na",
      "Niger": "ne",
      "Nigeria": "ng",
      "Rwanda": "rw",
      "São Tomé and Príncipe": "st",
      "Senegal": "sn",
      "Seychelles": "sc",
      "Sierra Leone": "sl",
      "Somalia": "so",
      "South Africa": "za",
      "South Sudan": "ss",
      "Sudan": "sd",
      "Tanzania": "tz",
      "United Republic of Tanzania": "tz",
      "Togo": "tg",
      "Tunisia": "tn",
      "Uganda": "ug",
      "Zambia": "zm",
      "Zimbabwe": "zw",
      
      // Oceania (14)
      "Australia": "au",
      "Fiji": "fj",
      "Kiribati": "ki",
      "Marshall Islands": "mh",
      "Micronesia": "fm",
      "Federated States of Micronesia": "fm",
      "Nauru": "nr",
      "New Zealand": "nz",
      "Palau": "pw",
      "Papua New Guinea": "pg",
      "Samoa": "ws",
      "Solomon Islands": "sb",
      "Tonga": "to",
      "Tuvalu": "tv",
      "Vanuatu": "vu",
    };
    
    // Clean and normalize the country name
    const cleanName = countryName.trim();
    
    // Try exact match first
    if (flagMap[cleanName]) {
      return `https://flagcdn.com/w320/${flagMap[cleanName].toLowerCase()}.png`;
    }
    
    // Try case-insensitive match
    const normalizedName = cleanName.toLowerCase();
    for (const [key, value] of Object.entries(flagMap)) {
      if (key.toLowerCase() === normalizedName) {
        return `https://flagcdn.com/w320/${value.toLowerCase()}.png`;
      }
    }
    
    // Try partial match (if country name contains parts)
    for (const [key, value] of Object.entries(flagMap)) {
      if (normalizedName.includes(key.toLowerCase()) || key.toLowerCase().includes(normalizedName)) {
        return `https://flagcdn.com/w320/${value.toLowerCase()}.png`;
      }
    }
    
    // Common aliases that might not match exactly
    const aliases: Record<string, string> = {
      "united states of america": "us",
      "america": "us",
      "great britain": "gb",
      "britain": "gb",
      "england": "gb",
      "scotland": "gb",
      "wales": "gb",
      "northern ireland": "gb",
      "south korea": "kr",
      "north korea": "kp",
      "czech": "cz",
      "slovak": "sk",
      "vietnam": "vn",
      "uae": "ae",
      "emirates": "ae",
      "u.a.e": "ae",
      "dr congo": "cd",
      "democratic republic of congo": "cd",
      "congo dr": "cd",
      "congo (democratic republic)": "cd",
      "congo (kinshasa)": "cd",
      "congo brazzaville": "cg",
      "republic of congo": "cg",
      "congo (republic)": "cg",
      "timor leste": "tl",
      "east timor": "tl",
      "ivory coast": "ci",
      "cote d'ivoire": "ci",
      "côte d'ivoire": "ci",
      "cape verde": "cv",
      "swaziland": "sz",
      "eswatini": "sz",
      "burma": "mm",
      "myanmar": "mm",
      "palestine": "ps",
      "türkiye": "tr",
      "turkey": "tr",
      "united arab emirates": "ae",
      "hong kong": "hk",
      "macau": "mo",
      "macao": "mo",
      "puerto rico": "pr",
      "guam": "gu",
      "american samoa": "as",
      "virgin islands": "vi",
      "british virgin islands": "vg",
      "cayman islands": "ky",
      "bermuda": "bm",
      "greenland": "gl",
      "faroe islands": "fo",
      "isle of man": "im",
      "jersey": "je",
      "guernsey": "gg",
      "aland islands": "ax",
      "svalbard": "sj",
      "mayotte": "yt",
      "reunion": "re",
      "martinique": "mq",
      "guadeloupe": "gp",
      "french guiana": "gf",
      "new caledonia": "nc",
      "french polynesia": "pf",
      "wallis and futuna": "wf",
      "cook islands": "ck",
      "niue": "nu",
      "tokelau": "tk",
      "gibraltar": "gi",
      "montserrat": "ms",
      "anguilla": "ai",
      "saint helena": "sh",
      "ascension island": "ac",
      "tristan da cunha": "ta",
      "falkland islands": "fk",
      "south georgia": "gs",
      "antarctica": "aq",
      "british indian ocean territory": "io",
      "christmas island": "cx",
      "cocos islands": "cc",
      "norfolk island": "nf",
      "pitcairn islands": "pn",
      "saint pierre and miquelon": "pm",
      "saint barthelemy": "bl",
      "saint martin": "mf",
      "sint maarten": "sx",
      "aruba": "aw",
      "curacao": "cw",
      "bonaire": "bq",
      "kosrae": "fm",
      "ponape": "fm",
      "truk": "fm",
      "yap": "fm",
      "palestine state": "ps",
      "west bank": "ps",
      "gaza": "ps",
      "taiwan province of china": "tw",
      "taiwan (province of china)": "tw",
    };
    
    if (aliases[normalizedName]) {
      return `https://flagcdn.com/w320/${aliases[normalizedName].toLowerCase()}.png`;
    }
    
    // If still not found, return UN flag
    console.warn(`Flag not found for country: "${countryName}"`);
    return `https://flagcdn.com/w320/un.png`;
  };

  const parseRangeValue = (range: string): number => {
    if (!range) return 0;
    const match = range.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  const getCloudPartnerColor = (partnerName: string): string => {
    const partner = partnerName.toLowerCase();
    
    if (partner.includes('aws') || partner.includes('amazon')) {
      return 'bg-gradient-to-br from-orange-500 to-yellow-500';
    } else if (partner.includes('azure') || partner.includes('microsoft')) {
      return 'bg-gradient-to-br from-blue-500 to-cyan-500';
    } else if (partner.includes('google') || partner.includes('gcp') || partner.includes('g cloud')) {
      return 'bg-gradient-to-br from-green-500 to-blue-500';
    } else if (partner.includes('ibm')) {
      return 'bg-gradient-to-br from-blue-600 to-purple-600';
    } else if (partner.includes('oracle')) {
      return 'bg-gradient-to-br from-red-600 to-red-500';
    } else {
      return 'bg-gradient-to-br from-gray-600 to-gray-800';
    }
  };

  const getCloudPartnerLogo = (partnerName: string): JSX.Element => {
    const partner = partnerName.toLowerCase();
    
    if (partner.includes('aws') || partner.includes('amazon')) {
      return (
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 text-white">
          <span className="font-bold text-xs">AWS</span>
        </div>
      );
    } else if (partner.includes('azure') || partner.includes('microsoft')) {
      return (
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
          <span className="font-bold text-xs">AZ</span>
        </div>
      );
    } else if (partner.includes('google') || partner.includes('gcp') || partner.includes('g cloud')) {
      return (
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-blue-500 text-white">
          <span className="font-bold text-xs">G</span>
        </div>
      );
    } else if (partner.includes('ibm')) {
      return (
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <span className="font-bold text-xs">IBM</span>
        </div>
      );
    } else if (partner.includes('oracle')) {
      return (
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-red-500 text-white">
          <span className="font-bold text-xs">OR</span>
        </div>
      );
    } else {
      return (
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 text-white">
          <Cloud className="h-4 w-4" />
        </div>
      );
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
          <div className="container mx-auto px-4 py-20 text-center">
            <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">Loading country data...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !countryData) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
          <div className="container mx-auto px-4 py-20 text-center">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {error ? "Error Loading Country" : "Country Not Found"}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {error || "The country data could not be loaded."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => navigate(-1)}
                variant="outline"
                className="px-4 py-2"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
              <Button
                onClick={handleRetry}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
              >
                Retry Loading
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const countryName = getCountryName();
  const flagUrl = getFlagUrl(countryName);
  const hasNetworkImage = !!countryData.submarineCableImage;
  const hasNetworkLink = !!countryData.submarineCableLink;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Internet in ${countryName} | Connectivity, ISPs & Network Overview`,
    description: `Overview of ${countryName}'s internet connectivity, network infrastructure, broadband adoption and inte-QT capabilities. Featuring ${countryData.partnersRange} partners and enterprise-grade services.`,
    url: `https://www.inte-qt.com/country?slug=${countrySlug}`,
    about: {
      "@type": "Country",
      name: countryName,
      url: `https://www.inte-qt.com/country?slug=${countrySlug}`
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.inte-qt.com/#website"
    },
    publisher: {
      "@type": "Organization",
      name: "inte-QT",
      url: "https://www.inte-qt.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Internet in ${countryName} | Connectivity, ISPs & Network Overview`}</title>
        <meta
          name="description"
          content={`Overview of ${countryName}'s internet connectivity, network infrastructure, broadband adoption and inte-QT capabilities. Featuring ${countryData.partnersRange} partners and enterprise-grade services.`}
        />
        <link rel="canonical" href={`https://www.inte-qt.com/country?slug=${countrySlug}`} />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-10"
          >
            <Button
              onClick={() => navigate(-1)}
              variant="ghost"
              className="text-white hover:bg-white/10 border-white/20 text-sm sm:text-base"
              size="sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Coverage Map
            </Button>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-12">
            {/* Flag Container - Responsive */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex-shrink-0 w-full sm:w-auto"
            >
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30" />
                
                <div className="relative">
                  <img
                    src={flagUrl}
                    alt={`${countryName} Flag`}
                    className="w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 object-cover rounded-xl shadow-2xl border-4 border-white/20 mx-auto lg:mx-0"
                  />
                  
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                      LIVE
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
              >
                Internet in {countryName}
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto lg:mx-0"
              >
                Enterprise-grade network infrastructure with {countryData.partnersRange} global partners
                {countryData.ddosProtection && " and military-grade security"}
                {hasReferences && `, backed by ${countryData.references?.length} supporting references`}
                {hasCloudPartners && `, integrated with ${cloudPartners.length} cloud platforms`}
              </motion.p>

              {/* Badges - Responsive Grid */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start"
              >
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-white/30 transition-colors text-xs sm:text-sm">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  {countryData.partnersRange} Network Partners
                </Badge>
                
                {countryData.ddosProtection && (
                  <Badge className="bg-green-500/30 backdrop-blur-sm text-green-100 border-green-400/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-green-500/40 transition-colors text-xs sm:text-sm">
                    <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    DDoS Protection
                  </Badge>
                )}
                
                {countryData.minServiceLatencyRange && (
                  <Badge className="bg-purple-500/30 backdrop-blur-sm text-purple-100 border-purple-400/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-purple-500/40 transition-colors text-xs sm:text-sm">
                    <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    {countryData.minServiceLatencyRange} Latency
                  </Badge>
                )}
                
                {hasReferences && (
                  <Badge className="bg-orange-500/30 backdrop-blur-sm text-orange-100 border-orange-400/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-orange-500/40 transition-colors text-xs sm:text-sm">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    {countryData.references?.length} Refs
                  </Badge>
                )}

                {hasCloudPartners && (
                  <Badge className="bg-indigo-500/30 backdrop-blur-sm text-indigo-100 border-indigo-400/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-indigo-500/40 transition-colors text-xs sm:text-sm">
                    <Cloud className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    {cloudPartners.length} Cloud
                  </Badge>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation - Mobile Responsive */}
          {hasReferences && (
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="inline-flex rounded-lg sm:rounded-xl bg-gray-100 dark:bg-gray-800 p-0.5 sm:p-1">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md sm:rounded-lg font-medium transition-colors text-sm sm:text-base ${activeTab === 'overview' 
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <span className="flex items-center gap-1 sm:gap-2">
                    <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                    Overview
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('references')}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md sm:rounded-lg font-medium transition-colors text-sm sm:text-base ${activeTab === 'references' 
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <span className="flex items-center gap-1 sm:gap-2">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                    References
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-full">
                      {countryData.references?.length}
                    </span>
                  </span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'overview' ? (
            <>
              {/* Network Metrics Section */}
              <section className="mb-12 sm:mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-8 sm:mb-12"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Network Performance Metrics
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-3xl mx-auto px-2">
                    Real-time infrastructure insights and connectivity statistics for {countryName}
                  </p>
                </motion.div>
                
                {/* Metrics Grid - Responsive */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                  {[
                    { 
                      label: "Network Partners", 
                      value: countryData.partnersRange, 
                      icon: Users, 
                      color: "from-blue-500 to-blue-600",
                      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
                      isCounter: true
                    },
                    { 
                      label: "IPv4 Peers", 
                      value: countryData.Ipv4PeersRange, 
                      icon: Globe2, 
                      color: "from-green-500 to-green-600",
                      bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
                      isCounter: true
                    },
                    { 
                      label: "IPv6 Peers", 
                      value: countryData.Ipv6PeersRange, 
                      icon: Globe, 
                      color: "from-purple-500 to-purple-600",
                      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
                      isCounter: true
                    },
                    { 
                      label: "IXP Partners", 
                      value: countryData.IxpPartnersRange, 
                      icon: Network, 
                      color: "from-orange-500 to-orange-600",
                      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
                      isCounter: true
                    },
                    { 
                      label: "Min Latency", 
                      value: countryData.minServiceLatencyRange, 
                      icon: Gauge, 
                      color: "from-teal-500 to-teal-600",
                      bgColor: "bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20",
                      isCounter: true,
                      suffix: "ms"
                    },
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className={`${metric.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-white/10`}
                    >
                      <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${metric.color} text-white mb-3 sm:mb-4 shadow-md`}>
                        <metric.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                        {metric.isCounter ? (
                          <Counter 
                            end={parseRangeValue(metric.value)} 
                            suffix={metric.suffix || ""}
                            duration={2000 + index * 200}
                            delay={index * 100}
                          />
                        ) : (
                          metric.value || "N/A"
                        )}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}

                  {/* Cloud Partners Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-white/10"
                  >
                    <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-3 sm:mb-4 shadow-md`}>
                      <Cloud className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {hasCloudPartners ? cloudPartners.length : "N/A"}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                      Cloud Platforms
                    </div>
                    {hasCloudPartners && (
                      <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 truncate">
                        {cloudPartners.slice(0, 1).join(', ')}
                        {cloudPartners.length > 1 && ` +${cloudPartners.length - 1} more`}
                      </div>
                    )}
                  </motion.div>
                </div>
              </section>

              {/* Cloud Partners Section */}
              {hasCloudPartners && (
                <section className="mb-12 sm:mb-16">
                  <Card className="shadow-xl border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
                        <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30">
                          <Cloud className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                            Cloud Platform Integration
                          </h2>
                          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
                            Seamless integration with major cloud providers
                          </p>
                        </div>
                      </div>

                      {/* Cloud Partners Grid - Responsive */}
                      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                        {cloudPartners.map((partner, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -3, scale: 1.02 }}
                            className="group"
                          >
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md">
                              <div className="flex flex-col items-center">
                                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl ${getCloudPartnerColor(partner)} text-white mb-3 sm:mb-4 shadow-lg`}>
                                  {getCloudPartnerLogo(partner)}
                                </div>
                                <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-1 sm:mb-2 truncate w-full">
                                  {partner}
                                </h3>
                                <div className="flex items-center gap-1 sm:gap-2 text-green-600 dark:text-green-400 text-xs sm:text-sm">
                                  <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                                  <span className="font-medium">Integrated</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                     
                    </CardContent>
                  </Card>
                </section>
              )}

              {/* Main Content Grid - Responsive */}
              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {/* Left Sidebar */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Status Card */}
                  <Card className="shadow-lg border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                          <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                          Network Status
                        </h3>
                        <Badge className={
                          `text-xs sm:text-sm ${
                            countryData.status === "active" 
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                              : countryData.status === "approved"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                          }`
                        }>
                          {countryData.status.toUpperCase()}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">Last Updated</p>
                          <p className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">
                            {new Date(countryData.updatedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">Created On</p>
                          <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                            {new Date(countryData.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        
                        {countryData.createdBy && (
                          <div className="pt-4 sm:pt-5 border-t border-gray-200 dark:border-gray-800">
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">Submitted By</p>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                                {countryData.createdBy.name.charAt(0)}
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="font-bold text-gray-900 dark:text-white text-sm sm:text-base truncate">{countryData.createdBy.name}</p>
                                <p className="text-xs sm:text-sm text-gray-500 truncate">{countryData.createdBy.email}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Delivery Timeline */}
                  {(countryData.commercialOfferDateRange || countryData.deliveryDateRange) && (
                    <Card className="shadow-lg border border-gray-200 dark:border-gray-800">
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                          <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                          Delivery Timeline
                        </h3>
                        
                        <div className="space-y-6 sm:space-y-8">
                          {countryData.commercialOfferDateRange && (
                            <div className="relative pl-10 sm:pl-12">
                              <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center">
                                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">Commercial Offer</h4>
                                <p className="text-xl sm:text-2xl font-black text-blue-600 mt-1 sm:mt-2">
                                  {countryData.commercialOfferDateRange}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
                                  Initial proposal and agreement phase
                                </p>
                              </div>
                            </div>
                          )}
                          
                          {countryData.deliveryDateRange && (
                            <div className="relative pl-10 sm:pl-12">
                              <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 flex items-center justify-center">
                                <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">Service Delivery</h4>
                                <p className="text-xl sm:text-2xl font-black text-green-600 mt-1 sm:mt-2">
                                  {countryData.deliveryDateRange}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
                                  Implementation and final handover
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Security Status */}
                  <Card className="shadow-lg border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${countryData.ddosProtection ? 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30' : 'bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30'}`}>
                          {countryData.ddosProtection ? 
                            <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" /> : 
                            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                          }
                        </div>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">Security Status</h3>
                          <p className={`text-base sm:text-lg font-bold ${countryData.ddosProtection ? 'text-green-600' : 'text-red-600'}`}>
                            {countryData.ddosProtection ? 'DDoS Protection Active' : 'Basic Security Only'}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {countryData.ddosProtection 
                          ? 'Advanced distributed denial-of-service protection with 24/7 monitoring'
                          : 'Standard network security protocols are in place'
                        }
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                  {/* Network Overview */}
                  <Card className="shadow-xl border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6 sm:p-8">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">
                        Network Infrastructure Overview
                      </h2>
                      
                      <div className="space-y-4 sm:space-y-6">
                        {countryData.whyChooseUs && (
                          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100 dark:border-blue-800/30">
                            <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-2 sm:mb-3">Why Choose Our Network?</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                              {countryData.whyChooseUs}
                            </p>
                          </div>
                        )}
                        
                        {countryData.integrationNote && (
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-100 dark:border-green-800/30">
                            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                              <Target className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                              <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">Internet in {countryName}</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                              {countryData.integrationNote}
                            </p>
                          </div>
                        )}
                        
                        <div className="prose dark:prose-invert max-w-none">
                          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Enterprise-grade network infrastructure in {countryName} featuring {countryData.Ipv4PeersRange} IPv4 peers, 
                            {countryData.Ipv6PeersRange} IPv6 peers, and connectivity through {countryData.IxpPartnersRange} Internet Exchange Points.
                            {hasCloudPartners && ` Seamlessly integrated with ${cloudPartners.join(', ')} cloud platforms.`}
                          </p>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                            <div className="space-y-1 sm:space-y-2">
                              <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">IPv4 Gateways</p>
                              <p className="text-xl sm:text-2xl font-bold text-blue-600">
                                <Counter end={parseRangeValue(countryData.Ipv4GatewaysRange)} suffix="" duration={2200} />
                              </p>
                            </div>
                            <div className="space-y-1 sm:space-y-2">
                              <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">IPv6 Gateways</p>
                              <p className="text-xl sm:text-2xl font-bold text-purple-600">
                                <Counter end={parseRangeValue(countryData.Ipv6GatewaysRange)} suffix="" duration={2400} />
                              </p>
                            </div>
                            <div className="space-y-1 sm:space-y-2">
                              <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Average Latency</p>
                              <p className="text-xl sm:text-2xl font-bold text-green-600">
                                <Counter end={parseRangeValue(countryData.avgServiceLatencyRange)} suffix="ms" duration={1800} />
                              </p>
                            </div>
                            <div className="space-y-1 sm:space-y-2">
                              <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Cloud Partners</p>
                              <p className="text-xl sm:text-2xl font-bold text-orange-600">
                                {hasCloudPartners ? cloudPartners.length : "N/A"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Features & Services Grid */}
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Features */}
                    {hasFeatures && (
                      <Card className="shadow-lg border border-gray-200 dark:border-gray-800">
                        <CardContent className="p-4 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                            <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30">
                              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                            </div>
                            Landline & Mobile network
                          </h3>
                          <ul className="space-y-2 sm:space-y-3">
                            {getFeaturesList().map((feature, index) => (
                              <li key={index} className="flex items-start gap-2 sm:gap-3">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}

                    {/* Services */}
                    {hasServices && (
                      <Card className="shadow-lg border border-gray-200 dark:border-gray-800">
                        <CardContent className="p-4 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                            <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30">
                              <Server className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                            </div>
                            Services Offered
                          </h3>
                          <ul className="space-y-2 sm:space-y-3">
                            {getServicesList().map((service, index) => (
                              <li key={index} className="flex items-start gap-2 sm:gap-3">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{service}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}

                    {/* Capabilities */}
                    {hasCapabilities && (
                      <Card className="shadow-lg border border-gray-200 dark:border-gray-800 md:col-span-2">
                        <CardContent className="p-4 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                            <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30">
                              <Cpu className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                            </div>
                            Technical Capabilities
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {getCapabilitiesList().map((capability, index) => (
                              <div key={index} className="flex items-start gap-2 sm:gap-3 bg-gray-50 dark:bg-gray-800/50 p-2 sm:p-3 rounded-lg">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{capability}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </div>

              {/* Network Infrastructure Section */}
              {hasNetworkImage && (
                <section className="mb-12 sm:mb-16">
                  <Card className="shadow-2xl border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">
                            Global Network Connectivity
                          </h2>
                          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl">
                            Submarine cable routes and terrestrial fiber infrastructure
                          </p>
                        </div>
                        
                        {hasNetworkLink && (
                          <Button
                            onClick={() => window.open(countryData.submarineCableLink, '_blank')}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base mt-4 md:mt-0"
                          >
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                            View Map
                          </Button>
                        )}
                      </div>

                      <div className="relative group">
                        <div 
                          className={`rounded-xl sm:rounded-2xl overflow-hidden border-2 ${hasNetworkLink ? 'cursor-pointer border-blue-300 hover:border-blue-500 dark:border-blue-700 dark:hover:border-blue-500' : 'border-gray-200 dark:border-gray-700'} transition-all duration-300 shadow-lg bg-gray-100 dark:bg-gray-800/50`}
                          onClick={() => hasNetworkLink && window.open(countryData.submarineCableLink, '_blank')}
                        >
                          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden flex items-center justify-center">
                            <img
                              src={countryData.submarineCableImage}
                              alt="Network connectivity map showing submarine cables and infrastructure"
                              className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        
                        {hasNetworkLink && (
                          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                            <ExternalLink className="h-4 w-4" />
                            <span>Click on the map to explore detailed cable routes</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </section>
              )}
            </>
          ) : (
            /* References Tab Content */
            <section className="mb-12 sm:mb-16">
              <Card className="shadow-2xl border border-gray-200 dark:border-gray-800">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                      Supporting References & Documentation
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
                      Verified sources, technical documentation, and supporting materials
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {countryData.references?.map((reference, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="group"
                      >
                        <a
                          href={reference}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-md sm:rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 dark:group-hover:from-blue-800/50 dark:group-hover:to-blue-700/50">
                            <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-gray-900 dark:text-white truncate text-sm sm:text-base">
                                Reference {index + 1}
                              </h3>
                              <span className="text-xs px-1.5 sm:px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full font-medium">
                                Verified
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                              {reference}
                            </p>
                          </div>
                          
                          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                        </a>
                      </motion.div>
                    ))}
                  </div>

                  {hasReferences && (
                    <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 rounded-lg sm:rounded-xl p-4 sm:p-6">
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Source Verification</h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                          All references have been verified and authenticated by our network engineering team. 
                          These sources provide additional context and validation for the network infrastructure details presented.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </section>
          )}

          {/* CTA Section */}
          <section>
            <Card className="shadow-2xl border-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
              <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Ready to Deploy in {countryName}?
                </h2>
                
                <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
                  Get a customized commercial offer with enterprise-grade solutions, dedicated support, and SLA-backed services.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-6 sm:mb-8 md:mb-10">
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => navigate("/contact")}
                  >
                    <Rocket className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Request Consultation
                  </Button>
                </div>
                
                
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Country;