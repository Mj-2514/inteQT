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
import CountryAdminDashboard from "./pages/country/CountryAdminDashboard";
import CountryLogin from "./pages/country/CountryLogin";
import CountryUserDashboard from "./pages/country/CountryUserDashboard";
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
import CreateUser from "./pages/admin/CreateUser";
import ManageCountryUsers from "./pages/country/ManageUsers";
import ManageSubmissions from "./pages/country/ManageSubmission";

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



/* ===================== ASIA ===================== */

import UserCreateBlog from "./pages/CreateUserBlog";





import AdminDashboard from "./pages/AdminDashboard";
import PendingBlogs from "./pages/admin/PendingBlogs";
import ApprovedBlogs from "./pages/admin/ApprovedBlogs";
import RejectedBlogs from "./pages/admin/RejectedBlogs";
import ManageUsers from "./pages/admin/AllBlogs";
import UserDashboard from "./pages/UserDashboard";
import EventManageUsers from "./pages/ManageUsers";



import ProtectedRoute from "./components/ProtectedRoute";
import EventProtectedRoute from "./components/EventProtectedRoutes";


/* ===================== OCEANIA ===================== */
import Australia from "./ocenia/Australia";
import Fiji from "./ocenia/Fiji";
import Kiribati from "./ocenia/Kiribati";
import MarshallIslands from "./ocenia/MarshalIslands";
import EventAuth from "./pages/EventAuth";
import CreateEvent from "./pages/CreateEvents";
import EditEvent from "./pages/EditEvent";
import Aeta from "./pages/Aeta";
import EventAdminDashboard from "./pages/EventAdminDashboard";
import RejectedEvents from "./pages/RejectedEvents";
import PendingEvents from "./pages/PendingEvents";
import AllEvents from "./pages/AllEvents";
import EventCreateUser from "./pages/EventCreateUSer";
import EventUserDashboard from "./pages/EventUserDashboard";
import EventReview from "./pages/EventReview";

// Import AuthProvider
import { AuthProvider } from "./context/AuthContext";
import CreateCountryForm from "./pages/country/CreateCountryForm";
import AdminReviewSubmission from "./pages/country/AdminReviewSubmission";
import Country from "./pages/country/Country";
import EditCountryForm from "./pages/country/EditCountryForm";

/* =====================
   LAYOUT
===================== */
const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    {children}
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

        {/* ✅ Wrap everything with AuthProvider */}
        <AuthProvider>
          <Routes>
            {/* Core */}
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/global-nsoc" element={<GlobalNsoc />} />
            <Route path="/gems" element={<Gems />} />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute adminOnly>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Main sections */}
            <Route path="/coverage" element={<PageLayout><Coverage /></PageLayout>} />
            <Route path="/events/login" element={<PageLayout><EventAuth /></PageLayout>} />
            <Route path="/services" element={<PageLayout><Services /></PageLayout>} />
            <Route path="/partner-center" element={<PageLayout><PartnerCenter /></PageLayout>} />
            <Route path="/cases" element={<PageLayout><Cases /></PageLayout>} />
            <Route path="/events" element={<PageLayout><Events /></PageLayout>} />
            <Route path="/blogs" element={<PageLayout><Blogs /></PageLayout>} />
            <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
            <Route path="/events/edit/:id" element={<PageLayout><EditEvent /></PageLayout>} />
            <Route path="/services/aeta" element={<PageLayout><Aeta /></PageLayout>} />
            <Route path="/user-dashboard" element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            } />

            <Route path="/event-admin-dashboard/rejected" element={
              <EventProtectedRoute>
                <RejectedEvents />
              </EventProtectedRoute>
            } />
            <Route path="/admin/create-event" element={
              <EventProtectedRoute>
                <CreateEvent />
              </EventProtectedRoute>
            } />
            <Route path="/event/dashboard" element={
              <EventProtectedRoute>
                <EventUserDashboard />
              </EventProtectedRoute>
            } />

            <Route path="event-admin-dashboard/events/:id" element={
              <ProtectedRoute>
                <EventReview />
              </ProtectedRoute>
            } />

            <Route path="/event/admin-dashboard" element={
              <EventProtectedRoute>
                <EventAdminDashboard />
              </EventProtectedRoute>
            } />

            <Route path="/event-admin-dashboard/pending" element={
              <EventProtectedRoute>
                <PendingEvents />
              </EventProtectedRoute>
            } />

            <Route path="/event-admin-dashboard/create-user" element={<PageLayout><EventCreateUser /></PageLayout>} />

            <Route path="/event-admin-dashboard/events" element={
              <EventProtectedRoute>
                <AllEvents />
              </EventProtectedRoute>
            } />

            <Route path="/event-admin-dashboard/manage-users" element={
              <EventProtectedRoute>
                <EventManageUsers />
              </EventProtectedRoute>
            } />

            <Route path="/create-blog" element={
              <ProtectedRoute>
                <UserCreateBlog />
              </ProtectedRoute>
            } />

           

          

            

            

           

            

            {/* Blog */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<DetailedBlog />} />

            {/* Admin */}
            <Route
              path="/admin/create-blog"
              element={
                <ProtectedRoute adminOnly>
                  <CreateBlog />
                </ProtectedRoute>
              }
            />
            <Route path="/admin/blogs" element={<AdminBlogList />} />
            <Route path="/admin-dashboard/pending" element={<ProtectedRoute adminOnly><PendingBlogs /></ProtectedRoute>} />
            <Route path="/admin-dashboard/approved" element={<ProtectedRoute adminOnly><ApprovedBlogs /></ProtectedRoute>} />
            <Route path="/admin-dashboard/rejected" element={<ProtectedRoute adminOnly><RejectedBlogs /></ProtectedRoute>} />
            <Route path="/admin-dashboard/deleted-users" element={<ProtectedRoute adminOnly><ManageUsers /></ProtectedRoute>} />

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
            <Route path="/country" element={<Country />} />

            {/* Country Routes - NO PageLayout for login */}
            <Route path="/country/login" element={<CountryLogin />} />
            
            <Route path="/country/admin-dashboard" element={
              <ProtectedRoute>
                <CountryAdminDashboard />
              </ProtectedRoute>
            } />

            <Route path="/country/submit" element={
              <ProtectedRoute>
                <CreateCountryForm />
              </ProtectedRoute>
            } />

            <Route path="/country/admin/submission/:slug" element={
              <ProtectedRoute>
                <AdminReviewSubmission />
              </ProtectedRoute>
            } />
            
            <Route path="/country/edit/:id" element={
              <ProtectedRoute>
                <EditCountryForm />
              </ProtectedRoute>
            } />

            



            <Route path="/country/admin/users" element={
  <ProtectedRoute adminOnly>
    <PageLayout>
      <ManageCountryUsers />
    </PageLayout>
  </ProtectedRoute>
} />

<Route path="/country/admin/submissions" element={
  <ProtectedRoute adminOnly>
    <PageLayout>
      <ManageSubmissions />
    </PageLayout>
  </ProtectedRoute>
} />
            
            <Route path="/country/dashboard" element={
              <ProtectedRoute>
                <CountryUserDashboard />
              </ProtectedRoute>
            } />

            

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;