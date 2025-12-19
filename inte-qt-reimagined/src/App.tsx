// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import GlobalSEO from "@/components/seo/GlobalSeo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

/* =====================
   CORE PAGES
===================== */
import Index from "./pages/Index";
import Coverage from "./pages/Coverage";
import AuthPage from "./pages/Auth";
import Services from "./pages/Services";
import PartnerCenter from "./pages/PartnerCenter";
import Cases from "./pages/Cases";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Sales from "./pages/Sales";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GlobalNsoc from "./pages/GlobalNsoc";
import BlogPage from "./pages/BlogPage";
import DetailedBlog from "./pages/DetailedBlog";
import CreateBlog from "./pages/CreateBlog";
import AdminBlogList from "./pages/AdminBlogList";
import NotFound from "./pages/NotFound";

/* =====================
   SERVICES
===================== */
import DedicatedLines from "./pages/DedicatedLines";
import WirelessConnection from "./pages/WirelessConnection";
import BusinessBroadband from "./pages/BusinessBroadband";

/* =====================
   REGIONS
===================== */
import Asia from "./asia/Asia";
import Europe from "./europe/Europe";
import AfricaList from "./africa/Africa";
import NorthAmericaList from "./north-america/NorthAmerica";
import SouthAmericaList from "./southAmerica/SouthAmerica";
import OceaniaList from "./ocenia/Oceania";
import Gems from "./pages/Gems";
import CaseFiji from "./pages/CaseFiji";
import Fmcg from "./pages/Fmcg";
import AmidCrisis from "./pages/Amid";

/* =====================
   LAYOUT
===================== */
const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

/* =====================
   APP
===================== */
const App = () => {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        {/* ✅ Global SEO once */}
        <GlobalSEO />

        {/* ✅ Scroll reset ONCE (correct place) */}
        <ScrollToTop />

        <Routes>
          {/* Core */}
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/global-nsoc" element={<GlobalNsoc />} />
          <Route path="/gems" element={<Gems />} />

          {/* Main sections */}
          <Route path="/coverage" element={<PageLayout><Coverage /></PageLayout>} />
          <Route path="/services" element={<PageLayout><Services /></PageLayout>} />
          <Route path="/partner-center" element={<PageLayout><PartnerCenter /></PageLayout>} />
          <Route path="/cases" element={<PageLayout><Cases /></PageLayout>} />
          <Route path="/events" element={<PageLayout><Events /></PageLayout>} />
          <Route path="/blogs" element={<PageLayout><Blogs /></PageLayout>} />
          <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />

          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<DetailedBlog />} />

          {/* Admin */}
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/admin/blogs" element={<AdminBlogList />} />

          {/* Services */}
          <Route path="/support" element={<Support />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/services/dedicated-lines" element={<DedicatedLines />} />
          <Route path="/services/wireless-connect" element={<WirelessConnection />} />
          <Route path="/services/business-broadband" element={<BusinessBroadband />} />
          <Route path="/cases/fiji" element={<CaseFiji />} />
          <Route path="/cases/fmcg" element={<Fmcg />} />
          <Route path="/cases/amid-crisis" element={<AmidCrisis />} />

          {/* Regions */}
          <Route path="/coverage/asia" element={<Asia />} />
          <Route path="/coverage/europe" element={<Europe />} />
          <Route path="/coverage/africa" element={<AfricaList />} />
          <Route path="/coverage/north-america" element={<NorthAmericaList />} />
          <Route path="/coverage/south-america" element={<SouthAmericaList />} />
          <Route path="/coverage/oceania" element={<OceaniaList />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
