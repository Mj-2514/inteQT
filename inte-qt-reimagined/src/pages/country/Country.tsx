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

const API_BASE = import.meta.env.VITE_API_BASE;

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
      // North America
      "United States": "us", "Canada": "ca", "Mexico": "mx", 
      // Europe
      "United Kingdom": "gb", "Germany": "de", "France": "fr", "Italy": "it", "Spain": "es",
      "Netherlands": "nl", "Switzerland": "ch", "Sweden": "se", "Norway": "no", "Denmark": "dk",
      "Finland": "fi", "Belgium": "be", "Austria": "at", "Ireland": "ie", "Portugal": "pt",
      "Greece": "gr", "Poland": "pl", "Czech Republic": "cz", "Hungary": "hu", "Romania": "ro",
      // Asia
      "China": "cn", "Japan": "jp", "South Korea": "kr", "India": "in", "Singapore": "sg",
      "United Arab Emirates": "ae", "Saudi Arabia": "sa", "Qatar": "qa", "Israel": "il",
      "Turkey": "tr", "Thailand": "th", "Malaysia": "my", "Indonesia": "id", "Philippines": "ph",
      "Vietnam": "vn", "Pakistan": "pk", "Bangladesh": "bd", "Sri Lanka": "lk",
      // Add more as needed...
    };
    
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
    
    // Common aliases
    const aliases: Record<string, string> = {
      "usa": "us", "america": "us", "uk": "gb", "britain": "gb", "england": "gb",
      "uae": "ae", "emirates": "ae", "south korea": "kr", "north korea": "kp",
      "czechia": "cz", "türkiye": "tr", "viet nam": "vn", "burma": "mm",
    };
    
    if (aliases[normalizedName]) {
      return `https://flagcdn.com/w320/${aliases[normalizedName].toLowerCase()}.png`;
    }
    
    // Default to UN flag
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

  // SEO Metadata
  const pageTitle = `Internet Connectivity in ${countryName} | Network Infrastructure & Services`;
  const pageDescription = `Explore ${countryName}'s internet infrastructure with ${countryData.partnersRange} network partners, ${cloudPartners.length} cloud integrations, ${countryData.Ipv4PeersRange} IPv4 peers, and enterprise-grade DDoS protection. Get commercial offers for connectivity solutions.`;
  const pageUrl = `https://www.inte-qt.com/country?slug=${countrySlug}`;
  const flagAlt = `Flag of ${countryName}`;
  const networkImageAlt = `Network connectivity and submarine cable infrastructure for ${countryName}`;

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.inte-qt.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Countries",
        "item": "https://www.inte-qt.com/countries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": countryName,
        "item": pageUrl
      }
    ]
  };

  // FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What internet infrastructure is available in ${countryName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${countryName} features ${countryData.partnersRange} network partners, ${countryData.Ipv4PeersRange} IPv4 peers, ${countryData.Ipv6PeersRange} IPv6 peers, ${countryData.IxpPartnersRange} Internet Exchange Points, and integration with ${cloudPartners.length} cloud platforms including ${cloudPartners.join(', ')}.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the network latency in ${countryName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Minimum latency ranges from ${countryData.minServiceLatencyRange} with average service latency of ${countryData.avgServiceLatencyRange}.`
        }
      },
      {
        "@type": "Question",
        "name": `Is DDoS protection available in ${countryName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${countryData.ddosProtection ? 'Yes, enterprise-grade DDoS protection with 24/7 monitoring is available.' : 'Basic network security protocols are implemented.'}`
        }
      },
      {
        "@type": "Question",
        "name": `How many cloud platforms are integrated in ${countryName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Currently integrated with ${cloudPartners.length} cloud platforms: ${cloudPartners.join(', ')}.`
        }
      }
    ]
  };

  // LocalBusiness structured data
  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `inte-QT Network Services in ${countryName}`,
    "description": `Enterprise network infrastructure and connectivity solutions in ${countryName}`,
    "url": pageUrl,
    "telephone": "+1-555-123-4567",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": countryName
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$$",
    "image": flagUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "124"
    },
    "makesOffer": {
      "@type": "Offer",
      "name": `Network Infrastructure in ${countryName}`,
      "description": `Complete network solutions with ${countryData.partnersRange} partners and ${cloudPartners.length} cloud integrations`,
      "areaServed": countryName,
      "availableAtOrFrom": {
        "@type": "Place",
        "name": countryName
      }
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${countryName}, internet connectivity, network infrastructure, broadband, ISP, cloud integration, DDoS protection, latency, network partners, ${cloudPartners.join(', ')}, inte-QT`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={flagUrl} />
        <meta property="og:image:alt" content={flagAlt} />
        <meta property="og:site_name" content="inte-QT" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={flagUrl} />
        <meta name="twitter:image:alt" content={flagAlt} />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="inte-QT" />
        <meta name="copyright" content={`© ${new Date().getFullYear()} inte-QT. All rights reserved.`} />
        <meta name="language" content="English" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": pageTitle,
            "description": pageDescription,
            "url": pageUrl,
            "isPartOf": {
              "@type": "WebSite",
              "name": "inte-QT",
              "url": "https://www.inte-qt.com"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": flagUrl,
              "width": 320,
              "height": 213,
              "caption": flagAlt
            },
            "datePublished": countryData.createdAt,
            "dateModified": countryData.updatedAt,
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".network-metrics", ".network-overview", ".cloud-integration"]
            },
            "potentialAction": {
              "@type": "ReadAction",
              "target": [pageUrl]
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(localBusinessStructuredData)}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section with proper semantic structure */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden" aria-label={`${countryName} Network Overview`}>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
          role="img"
          aria-label="Global network infrastructure background"
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
              aria-label="Go back to coverage map"
            >
              <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
              Back to Coverage Map
            </Button>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-12">
            {/* Flag Container */}
            <motion.figure
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
                    alt={flagAlt}
                    className="w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 object-cover rounded-xl shadow-2xl border-4 border-white/20 mx-auto lg:mx-0"
                    width="320"
                    height="213"
                    loading="eager"
                  />
                  
                  <figcaption className="sr-only">
                    {flagAlt}
                  </figcaption>
                  
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" aria-hidden="true" />
                      LIVE
                    </div>
                  </div>
                </div>
              </div>
            </motion.figure>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
              >
                Internet Connectivity in {countryName}
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
                {hasCloudPartners && `, integrated with ${cloudPartners.length} cloud platforms`}.
              </motion.p>

              {/* Badges */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start"
                role="list"
                aria-label="Network features"
              >
                <div role="listitem">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-white/30 transition-colors text-xs sm:text-sm">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" aria-hidden="true" />
                    {countryData.partnersRange} Network Partners
                  </Badge>
                </div>
                
                {countryData.ddosProtection && (
                  <div role="listitem">
                    <Badge className="bg-green-500/30 backdrop-blur-sm text-green-100 border-green-400/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-green-500/40 transition-colors text-xs sm:text-sm">
                      <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" aria-hidden="true" />
                      DDoS Protection
                    </Badge>
                  </div>
                )}
                
                {countryData.minServiceLatencyRange && (
                  <div role="listitem">
                    <Badge className="bg-purple-500/30 backdrop-blur-sm text-purple-100 border-purple-400/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-purple-500/40 transition-colors text-xs sm:text-sm">
                      <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" aria-hidden="true" />
                      {countryData.minServiceLatencyRange} Latency
                    </Badge>
                  </div>
                )}
                
                {hasReferences && (
                  <div role="listitem">
                    <Badge className="bg-orange-500/30 backdrop-blur-sm text-orange-100 border-orange-400/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-orange-500/40 transition-colors text-xs sm:text-sm">
                      <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" aria-hidden="true" />
                      {countryData.references?.length} Refs
                    </Badge>
                  </div>
                )}

                {hasCloudPartners && (
                  <div role="listitem">
                    <Badge className="bg-indigo-500/30 backdrop-blur-sm text-indigo-100 border-indigo-400/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-indigo-500/40 transition-colors text-xs sm:text-sm">
                      <Cloud className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" aria-hidden="true" />
                      {cloudPartners.length} Cloud
                    </Badge>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation */}
          {hasReferences && (
            <nav aria-label="Country information tabs" className="flex justify-center mb-8 sm:mb-12">
              <div className="inline-flex rounded-lg sm:rounded-xl bg-gray-100 dark:bg-gray-800 p-0.5 sm:p-1">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md sm:rounded-lg font-medium transition-colors text-sm sm:text-base ${activeTab === 'overview' 
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                  aria-current={activeTab === 'overview' ? 'page' : undefined}
                  aria-label="View network overview"
                >
                  <span className="flex items-center gap-1 sm:gap-2">
                    <Globe className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                    Overview
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('references')}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md sm:rounded-lg font-medium transition-colors text-sm sm:text-base ${activeTab === 'references' 
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                  aria-label="View references and documentation"
                >
                  <span className="flex items-center gap-1 sm:gap-2">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                    References
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-full">
                      {countryData.references?.length}
                    </span>
                  </span>
                </button>
              </div>
            </nav>
          )}

          {activeTab === 'overview' ? (
            <>
              {/* Network Metrics Section */}
              <section className="mb-12 sm:mb-16 network-metrics" aria-labelledby="network-metrics-title">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-8 sm:mb-12"
                >
                  <h2 id="network-metrics-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Network Performance Metrics
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-3xl mx-auto px-2">
                    Real-time infrastructure insights and connectivity statistics for {countryName}
                  </p>
                </motion.div>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4" role="list" aria-label="Network performance metrics">
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
                      role="listitem"
                    >
                      <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${metric.color} text-white mb-3 sm:mb-4 shadow-md`}>
                        <metric.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" aria-hidden="true" />
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
                    className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-white/10 cloud-integration"
                    role="listitem"
                  >
                    <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-3 sm:mb-4 shadow-md`}>
                      <Cloud className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" aria-hidden="true" />
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
                <section className="mb-12 sm:mb-16 cloud-integration" aria-labelledby="cloud-integration-title">
                  <Card className="shadow-xl border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
                        <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30">
                          <Cloud className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                        </div>
                        <div>
                          <h2 id="cloud-integration-title" className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                            Cloud Platform Integration
                          </h2>
                          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
                            Seamless integration with major cloud providers
                          </p>
                        </div>
                      </div>

                      {/* Cloud Partners Grid */}
                      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4" role="list" aria-label="Cloud platform partners">
                        {cloudPartners.map((partner, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -3, scale: 1.02 }}
                            className="group"
                            role="listitem"
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
                                  <Check className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
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

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {/* Left Sidebar */}
                <aside className="space-y-4 sm:space-y-6">
                  {/* Status Card */}
                  <Card className="shadow-lg border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                          <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" aria-hidden="true" />
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
                          <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" aria-hidden="true" />
                          Delivery Timeline
                        </h3>
                        
                        <div className="space-y-6 sm:space-y-8">
                          {countryData.commercialOfferDateRange && (
                            <div className="relative pl-10 sm:pl-12">
                              <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center">
                                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" aria-hidden="true" />
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
                                <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" aria-hidden="true" />
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
                            <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" aria-hidden="true" /> : 
                            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" aria-hidden="true" />
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
                </aside>

                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                  {/* Network Overview */}
                  <Card className="shadow-xl border border-gray-200 dark:border-gray-800 network-overview">
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
                              <Target className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" aria-hidden="true" />
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
                              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" aria-hidden="true" />
                            </div>
                            Landline & Mobile network
                          </h3>
                          <ul className="space-y-2 sm:space-y-3" role="list">
                            {getFeaturesList().map((feature, index) => (
                              <li key={index} className="flex items-start gap-2 sm:gap-3" role="listitem">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
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
                              <Server className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" aria-hidden="true" />
                            </div>
                            Services Offered
                          </h3>
                          <ul className="space-y-2 sm:space-y-3" role="list">
                            {getServicesList().map((service, index) => (
                              <li key={index} className="flex items-start gap-2 sm:gap-3" role="listitem">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
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
                              <Cpu className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" aria-hidden="true" />
                            </div>
                            Technical Capabilities
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" role="list">
                            {getCapabilitiesList().map((capability, index) => (
                              <div key={index} className="flex items-start gap-2 sm:gap-3 bg-gray-50 dark:bg-gray-800/50 p-2 sm:p-3 rounded-lg" role="listitem">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
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
                <section className="mb-12 sm:mb-16" aria-labelledby="network-infrastructure-title">
                  <Card className="shadow-2xl border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
                        <div>
                          <h2 id="network-infrastructure-title" className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">
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
                            aria-label={`View detailed network map for ${countryName}`}
                          >
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" aria-hidden="true" />
                            View Map
                          </Button>
                        )}
                      </div>

                      <div className="relative group">
                        <figure 
                          className={`rounded-xl sm:rounded-2xl overflow-hidden border-2 ${hasNetworkLink ? 'cursor-pointer border-blue-300 hover:border-blue-500 dark:border-blue-700 dark:hover:border-blue-500' : 'border-gray-200 dark:border-gray-700'} transition-all duration-300 shadow-lg bg-gray-100 dark:bg-gray-800/50`}
                          onClick={() => hasNetworkLink && window.open(countryData.submarineCableLink, '_blank')}
                        >
                          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden flex items-center justify-center">
                            <img
                              src={countryData.submarineCableImage}
                              alt={networkImageAlt}
                              className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                              width="800"
                              height="600"
                            />
                          </div>
                          <figcaption className="sr-only">
                            {networkImageAlt}
                          </figcaption>
                        </figure>
                        
                        {hasNetworkLink && (
                          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
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
            <section className="mb-12 sm:mb-16" aria-labelledby="references-title">
              <Card className="shadow-2xl border border-gray-200 dark:border-gray-800">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-8 sm:mb-12">
                    <h2 id="references-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                      Supporting References & Documentation
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
                      Verified sources, technical documentation, and supporting materials
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4" role="list" aria-label="References list">
                    {countryData.references?.map((reference, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="group"
                        role="listitem"
                      >
                        <a
                          href={reference}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                          aria-label={`Reference ${index + 1}: ${reference.substring(0, 50)}...`}
                        >
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-md sm:rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 dark:group-hover:from-blue-800/50 dark:group-hover:to-blue-700/50">
                            <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
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
                          
                          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" aria-hidden="true" />
                        </a>
                      </motion.div>
                    ))}
                  </div>

                  {hasReferences && (
                    <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 rounded-lg sm:rounded-xl p-4 sm:p-6">
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
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
          <section aria-labelledby="cta-title">
            <Card className="shadow-2xl border-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
              <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
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
                    aria-label="Request a consultation for network services"
                  >
                    <Rocket className="h-4 w-4 sm:h-5 sm:w-5 mr-2" aria-hidden="true" />
                    Request Consultation
                  </Button>
                </div>
                
                <div className="text-blue-200 text-sm">
                  <p className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    Response time: &lt; 24 hours
                  </p>
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