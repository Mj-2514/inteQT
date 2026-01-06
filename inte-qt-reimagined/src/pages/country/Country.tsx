import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "../NotFound";
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
  Target
} from "lucide-react";
import { motion } from "framer-motion";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"

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

  const handleRetry = () => {
    if (countrySlug) {
      fetchCountryData(countrySlug);
    }
  };

  const getFlagUrl = (countryName: string) => {
    const flagMap: Record<string, string> = {
      "Iceland": "is",
      "Germany": "de",
      "France": "fr",
      "UK": "gb",
      "United Kingdom": "gb",
      "Italy": "it",
      "Spain": "es",
      "Japan": "jp",
      "China": "cn",
      "India": "in",
      "Bangladesh": "bd",
      "Pakistan": "pk",
      "Brazil": "br",
      "USA": "us",
      "United States": "us",
      "Canada": "ca",
      "Australia": "au",
      "Russia": "ru",
      "Norway": "no",
      "Sweden": "se",
      "Finland": "fi",
      "Denmark": "dk",
      "Netherlands": "nl",
      "Belgium": "be",
      "Switzerland": "ch",
      "Austria": "at",
      "Portugal": "pt",
      "Greece": "gr",
      "Turkey": "tr",
      "South Korea": "kr",
      "Singapore": "sg",
      "Malaysia": "my",
      "Thailand": "th",
      "Vietnam": "vn",
      "Philippines": "ph",
      "Indonesia": "id",
      "Mexico": "mx",
      "Argentina": "ar",
      "Chile": "cl",
      "Colombia": "co",
      "Peru": "pe",
      "South Africa": "za",
      "Egypt": "eg",
      "Nigeria": "ng",
      "Kenya": "ke",
      "Morocco": "ma",
      "Saudi Arabia": "sa",
      "UAE": "ae",
      "Qatar": "qa",
      "Israel": "il",
    };
    
    const code = flagMap[countryName]?.toLowerCase() || "un";
    return `https://flagcdn.com/w320/${code}.png`;
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
  const hasFeatures = getFeaturesList().length > 0;
  const hasServices = getServicesList().length > 0;
  const hasCapabilities = getCapabilitiesList().length > 0;
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

      {/* Hero Section with Unsplash Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <Button
              onClick={() => navigate(-1)}
              variant="ghost"
              className="text-white hover:bg-white/10 border-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Coverage Map
            </Button>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Flag Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                {/* Flag Shadow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30" />
                
                {/* Flag Image */}
                <div className="relative">
                  <img
                    src={flagUrl}
                    alt={`${countryName} Flag`}
                    className="w-64 h-40 object-cover rounded-xl shadow-2xl border-4 border-white/20"
                  />
                  
                  {/* Live Badge */}
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              >
                Internet in {countryName}
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 mb-8 max-w-3xl"
              >
                Enterprise-grade network infrastructure with {countryData.partnersRange} global partners
                {countryData.ddosProtection && " and military-grade security"}
              </motion.p>

              {/* Badges */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                  <Users className="h-4 w-4 mr-2" />
                  {countryData.partnersRange} Network Partners
                </Badge>
                
                {countryData.ddosProtection && (
                  <Badge className="bg-green-500/30 backdrop-blur-sm text-green-100 border-green-400/30 px-4 py-2 rounded-full hover:bg-green-500/40 transition-colors">
                    <ShieldCheck className="h-4 w-4 mr-2" />
                    Advanced DDoS Protection
                  </Badge>
                )}
                
                {countryData.minServiceLatencyRange && (
                  <Badge className="bg-purple-500/30 backdrop-blur-sm text-purple-100 border-purple-400/30 px-4 py-2 rounded-full hover:bg-purple-500/40 transition-colors">
                    <Zap className="h-4 w-4 mr-2" />
                    {countryData.minServiceLatencyRange} Latency
                  </Badge>
                )}
                
                {countryData.Ipv4PeersRange && (
                  <Badge className="bg-blue-500/30 backdrop-blur-sm text-blue-100 border-blue-400/30 px-4 py-2 rounded-full hover:bg-blue-500/40 transition-colors">
                    <Globe className="h-4 w-4 mr-2" />
                    {countryData.Ipv4PeersRange} IPv4 Peers
                  </Badge>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          
          {/* Network Metrics Section */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Network Performance Metrics
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
                Real-time infrastructure insights and connectivity statistics for {countryName}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { 
                  label: "Network Partners", 
                  value: countryData.partnersRange, 
                  icon: Users, 
                  color: "from-blue-500 to-blue-600",
                  bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20"
                },
                { 
                  label: "IPv4 Peers", 
                  value: countryData.Ipv4PeersRange, 
                  icon: Globe2, 
                  color: "from-green-500 to-green-600",
                  bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20"
                },
                { 
                  label: "IPv6 Peers", 
                  value: countryData.Ipv6PeersRange, 
                  icon: Globe, 
                  color: "from-purple-500 to-purple-600",
                  bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20"
                },
                { 
                  label: "IXP Partners", 
                  value: countryData.IxpPartnersRange, 
                  icon: Network, 
                  color: "from-orange-500 to-orange-600",
                  bgColor: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20"
                },
                { 
                  label: "Cloud Partners", 
                  value: countryData.CloudPartnersRange, 
                  icon: Cloud, 
                  color: "from-indigo-500 to-indigo-600",
                  bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20"
                },
                { 
                  label: "Min Latency", 
                  value: countryData.minServiceLatencyRange, 
                  icon: Gauge, 
                  color: "from-teal-500 to-teal-600",
                  bgColor: "bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20"
                },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className={`${metric.bgColor} rounded-2xl p-6 text-center shadow-lg border border-white/10`}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} text-white mb-4 shadow-md`}>
                    <metric.icon className="h-7 w-7" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {metric.value || "N/A"}
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Left Sidebar */}
            <div className="space-y-6">
              {/* Status Card */}
              <Card className="shadow-lg border border-gray-200 dark:border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Activity className="h-5 w-5 text-blue-600" />
                      Network Status
                    </h3>
                    <Badge className={
                      countryData.status === "active" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        : countryData.status === "approved"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                    }>
                      {countryData.status.toUpperCase()}
                    </Badge>
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Last Updated</p>
                      <p className="font-bold text-lg text-gray-900 dark:text-white">
                        {new Date(countryData.updatedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Created On</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {new Date(countryData.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    
                    {countryData.createdBy && (
                      <div className="pt-5 border-t border-gray-200 dark:border-gray-800">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Submitted By</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                            {countryData.createdBy.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 dark:text-white">{countryData.createdBy.name}</p>
                            <p className="text-sm text-gray-500 truncate">{countryData.createdBy.email}</p>
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
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      Delivery Timeline
                    </h3>
                    
                    <div className="space-y-8">
                      {countryData.commercialOfferDateRange && (
                        <div className="relative pl-12">
                          <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">Commercial Offer</h4>
                            <p className="text-2xl font-black text-blue-600 mt-2">
                              {countryData.commercialOfferDateRange}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                              Initial proposal and agreement phase
                            </p>
                          </div>
                        </div>
                      )}
                      
                      {countryData.deliveryDateRange && (
                        <div className="relative pl-12">
                          <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 flex items-center justify-center">
                            <Rocket className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">Service Delivery</h4>
                            <p className="text-2xl font-black text-green-600 mt-2">
                              {countryData.deliveryDateRange}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
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
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-xl ${countryData.ddosProtection ? 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30' : 'bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30'}`}>
                      {countryData.ddosProtection ? 
                        <ShieldCheck className="h-8 w-8 text-green-600" /> : 
                        <Shield className="h-8 w-8 text-red-600" />
                      }
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">Security Status</h3>
                      <p className={`text-lg font-bold ${countryData.ddosProtection ? 'text-green-600' : 'text-red-600'}`}>
                        {countryData.ddosProtection ? 'DDoS Protection Active' : 'Basic Security Only'}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {countryData.ddosProtection 
                      ? 'Advanced distributed denial-of-service protection with 24/7 monitoring'
                      : 'Standard network security protocols are in place'
                    }
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Network Overview */}
              <Card className="shadow-xl border border-gray-200 dark:border-gray-800">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                    Network Infrastructure Overview
                  </h2>
                  
                  <div className="space-y-6">
                    {countryData.whyChooseUs && (
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-800/30">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">Why Choose Our Network?</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {countryData.whyChooseUs}
                        </p>
                      </div>
                    )}
                    
                    {countryData.integrationNote && (
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 rounded-2xl p-6 border border-green-100 dark:border-green-800/30">
                        <div className="flex items-center gap-3 mb-3">
                          <Target className="h-5 w-5 text-green-600" />
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Integration Notes</h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {countryData.integrationNote}
                        </p>
                      </div>
                    )}
                    
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Enterprise-grade network infrastructure in {countryName} featuring {countryData.Ipv4PeersRange} IPv4 peers, 
                        {countryData.Ipv6PeersRange} IPv6 peers, and connectivity through {countryData.IxpPartnersRange} Internet Exchange Points.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6 mt-6">
                        <div className="space-y-2">
                          <p className="font-medium text-gray-900 dark:text-white">IPv4 Gateways</p>
                          <p className="text-2xl font-bold text-blue-600">{countryData.Ipv4GatewaysRange || "N/A"}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="font-medium text-gray-900 dark:text-white">IPv6 Gateways</p>
                          <p className="text-2xl font-bold text-purple-600">{countryData.Ipv6GatewaysRange || "N/A"}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="font-medium text-gray-900 dark:text-white">Average Latency</p>
                          <p className="text-2xl font-bold text-green-600">{countryData.avgServiceLatencyRange || "N/A"}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="font-medium text-gray-900 dark:text-white">Cloud Partners</p>
                          <p className="text-2xl font-bold text-orange-600">{countryData.CloudPartnersRange || "N/A"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features & Services Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Features */}
                {hasFeatures && (
                  <Card className="shadow-lg border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                        </div>
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {getFeaturesList().map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Services */}
                {hasServices && (
                  <Card className="shadow-lg border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30">
                          <Server className="h-5 w-5 text-green-600" />
                        </div>
                        Services Offered
                      </h3>
                      <ul className="space-y-3">
                        {getServicesList().map((service, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Capabilities */}
                {hasCapabilities && (
                  <Card className="shadow-lg border border-gray-200 dark:border-gray-800 md:col-span-2">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30">
                          <Cpu className="h-5 w-5 text-purple-600" />
                        </div>
                        Technical Capabilities
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {getCapabilitiesList().map((capability, index) => (
                          <div key={index} className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{capability}</span>
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
            <section className="mb-16">
              <Card className="shadow-2xl border border-gray-200 dark:border-gray-800">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                    <div>
                      <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                        Global Network Connectivity
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl">
                        Submarine cable routes and terrestrial fiber infrastructure providing international connectivity
                      </p>
                    </div>
                    
                    {hasNetworkLink && (
                      <Button
                        onClick={() => window.open(countryData.submarineCableLink, '_blank')}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Interactive Map
                      </Button>
                    )}
                  </div>

                  <div className="relative group">
                    <div 
                      className={`rounded-2xl overflow-hidden border-2 ${hasNetworkLink ? 'cursor-pointer border-blue-300 hover:border-blue-500 dark:border-blue-700 dark:hover:border-blue-500' : 'border-gray-200 dark:border-gray-700'} transition-all duration-300 shadow-lg`}
                      onClick={() => hasNetworkLink && window.open(countryData.submarineCableLink, '_blank')}
                    >
                      <img
                        src={countryData.submarineCableImage}
                        alt="Network connectivity map showing submarine cables and infrastructure"
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    {hasNetworkLink && (
                      <div className="flex items-center justify-center gap-3 mt-6 text-gray-600 dark:text-gray-400">
                        <ExternalLink className="h-5 w-5" />
                        <span className="text-sm">Click on the map to explore detailed cable routes and network infrastructure</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </section>
          )}

          {/* CTA Section */}
          <section>
            <Card className="shadow-2xl border-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
              <CardContent className="p-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Deploy in {countryName}?
                </h2>
                
                <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                  Get a customized commercial offer with enterprise-grade solutions, dedicated support, and SLA-backed services tailored to your business requirements.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
  <Button
    size="lg"
    className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    onClick={() => navigate("/contact")}
  >
    <Rocket className="h-5 w-5 mr-2" />
    Request Enterprise Consultation
  </Button>
</div>
                
                {countryData.commercialOfferDateRange && (
                  <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/30">
                    <Clock className="h-5 w-5" />
                    <span className="font-semibold">
                      Commercial offer prepared within {countryData.commercialOfferDateRange}
                    </span>
                  </div>
                )}
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