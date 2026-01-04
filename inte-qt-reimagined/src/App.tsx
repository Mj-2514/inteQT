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
import Afghanistan from "./asia/Afghanistan";
import Armenia from "./asia/Armenia";
import Azerbaijan from "./asia/Azerbaijan";
import Bahrain from "./asia/Bahrain";
import Bangladesh from "./asia/Bangladesh";
import Bhutan from "./asia/Bhutan";
import Brunei from "./asia/Brunei";
import Cambodia from "./asia/Cambodia";
import China from "./asia/China";
import EastTimor from "./asia/EastTimor";
import Indonesia from "./asia/Indonesia";
import India from "./asia/India";
import Iran from "./asia/Iran";
import Iraq from "./asia/Iraq";
import Israel from "./asia/Isreal";
import Japan from "./asia/Japan";
import Jordan from "./asia/Jordon";
import Kazakhstan from "./asia/Kazakhstan";
import Kuwait from "./asia/Kuwait";
import Kyrgyzstan from "./asia/Kyrgyzstan";
import Laos from "./asia/Laos";
import Lebanon from "./asia/Lebanon";
import Malaysia from "./asia/Malaysia";
import Maldives from "./asia/Maldives";
import NorthKorea from "./asia/NorthKorea";
import SouthKorea from "./asia/SouthKorea";
import Qatar from "./asia/Qatar";
import Turkey from "./asia/Turkey";
import Vietnam from "./asia/Vietnma";


/* ===================== EUROPE ===================== */
import Albania from "./europe/Albania";
import Andorra from "./europe/Andorra";
import Austria from "./europe/Austria";
import Belarus from "./europe/Belarus";
import Belgium from "./europe/Belgium";
import BosniaAndHerzegovina from "./europe/BosniaAndHerzengovina";
import Bulgaria from "./europe/Bulgaria";
import Cyprus from "./europe/Cyprus";
import CzechRepublic from "./europe/CzechRepublic";
import Denmark from "./europe/Denmark";
import Estonia from "./europe/Estonia";
import Finland from "./europe/Finland";
import France from "./europe/France";
import Georgia from "./europe/Georgia";
import Germany from "./europe/Germany";
import Greece from "./europe/Greece";
import Hungary from "./europe/Hungary";
import Iceland from "./europe/Iceland";
import Ireland from "./europe/Ireland";
import Italy from "./europe/Italy";
import Latvia from "./europe/Latvia";
import Liechtenstein from "./europe/Liechtenstein";
import Lithuania from "./europe/Lithuania";
import Luxembourg from "./europe/Luxemborg";
import Malta from "./europe/Malta";
import UserCreateBlog from "./pages/CreateUserBlog";

/* ===================== AFRICA ===================== */
import Algeria from "./africa/Algeria";
import Angola from "./africa/Angola";
import Benin from "./africa/Benin";
import Botswana from "./africa/Botswana";
import BurkinaFaso from "./africa/BurkinaFaso";
import Burundi from "./africa/Burundi";
import CaboVerde from "./africa/CaboVerde";
import Cameroon from "./africa/Cameroon";
import CentralAfricanRepublic from "./africa/CentralAfricanRepublic";
import Chad from "./africa/Chad";
import Comoros from "./africa/Comoros";
import Congo from "./africa/Congo";
import CoteDIvoire from "./africa/CoteDIvoire";
import Djibouti from "./africa/Djibouti";
import Egypt from "./africa/Egypt";
import EquatorialGuinea from "./africa/EquatorialGuinea";
import Eritrea from "./africa/Eritrea";
import Eswatini from "./africa/Eswatini";
import Ethiopia from "./africa/Ethiopia";
import Gabon from "./africa/Gabon";
import Gambia from "./africa/Gambia";
import Ghana from "./africa/Ghana";
import Guinea from "./africa/Guinea";
import GuineaBissau from "./africa/GuineaBissau";
import Kenya from "./africa/Kenya";
import Lesotho from "./africa/Lesotho";
import Liberia from "./africa/Liberia";
import Libya from "./africa/Libya";
import Madagascar from "./africa/Madagascar";
import Malawi from "./africa/Malawi";
import Mali from "./africa/Mali";
import Mauritius from "./africa/Mauritius";
import Mozambique from "./africa/Mozambique";
import Nigeria from "./africa/Nigeria";
import SouthAfrica from "./africa/SouthAfrica";


/* ===================== NORTH AMERICA ===================== */
import AntiguaAndBarbuda from "./north-america/AntiguaAndBarbuda";
import Bahamas from "./north-america/Bahamas";
import Barbados from "./north-america/Barbados";
import Belize from "./north-america/Belize";
import Canada from "./north-america/Canada";
import CostaRica from "./north-america/CostaRica";
import Cuba from "./north-america/Cuba";
import Dominica from "./north-america/Dominica";
import DominicanRepublic from "./north-america/DominicanRepublic";
import ElSalvador from "./north-america/ElSalvador";
import Grenada from "./north-america/Grenada";
import Guatemala from "./north-america/Guatemala";
import Haiti from "./north-america/Haiti";
import Honduras from "./north-america/Honduras";
import Jamaica from "./north-america/Jamaica";
import Mexico from "./north-america/Mexico";
import AdminDashboard from "./pages/AdminDashboard";
import PendingBlogs from "./pages/admin/PendingBlogs";
import ApprovedBlogs from "./pages/admin/ApprovedBlogs";
import RejectedBlogs from "./pages/admin/RejectedBlogs";
import ManageUsers from "./pages/admin/AllBlogs";
import UserDashboard from "./pages/UserDashboard";
import EventManageUsers from "./pages/ManageUsers";


/* ===================== SOUTH AMERICA ===================== */
import Argentina from "./southAmerica/Argentina";
import Bolivia from "./southAmerica/Bolvia";
import Brazil from "./southAmerica/Brazail";
import Chile from "./southAmerica/Chile";
import Colombia from "./southAmerica/Colombia";
import Ecuador from "./southAmerica/Ecuador";
import Guyana from "./southAmerica/Guyana";
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

            {/* =====================
               ASIA – COUNTRIES
            ===================== */}
            <Route path="/coverage/asia/afghanistan" element={<PageLayout><Afghanistan /></PageLayout>} />
            <Route path="/admin/create-user" element={<ProtectedRoute adminOnly><CreateUser /></ProtectedRoute>} />
            <Route path="/coverage/asia/armenia" element={<PageLayout><Armenia /></PageLayout>} />
            <Route path="/coverage/asia/azerbaijan" element={<PageLayout><Azerbaijan /></PageLayout>} />
            <Route path="/coverage/asia/bahrain" element={<PageLayout><Bahrain /></PageLayout>} />
            <Route path="/coverage/asia/bangladesh" element={<PageLayout><Bangladesh /></PageLayout>} />
            <Route path="/coverage/asia/bhutan" element={<PageLayout><Bhutan /></PageLayout>} />
            <Route path="/coverage/asia/brunei" element={<PageLayout><Brunei /></PageLayout>} />
            <Route path="/coverage/asia/cambodia" element={<PageLayout><Cambodia /></PageLayout>} />
            <Route path="/coverage/asia/china" element={<PageLayout><China /></PageLayout>} />
            <Route path="/coverage/asia/east-timor" element={<PageLayout><EastTimor /></PageLayout>} />
            <Route path="/coverage/asia/indonesia" element={<PageLayout><Indonesia /></PageLayout>} />
            {/* <Route path="/coverage/asia/india" element={<PageLayout><India /></PageLayout>} /> */}
            <Route path="/coverage/asia/iran" element={<PageLayout><Iran /></PageLayout>} />
            <Route path="/coverage/asia/iraq" element={<PageLayout><Iraq /></PageLayout>} />
            <Route path="/coverage/asia/israel" element={<PageLayout><Israel /></PageLayout>} />
            <Route path="/coverage/asia/japan" element={<PageLayout><Japan /></PageLayout>} />
            <Route path="/coverage/asia/jordan" element={<PageLayout><Jordan /></PageLayout>} />
            <Route path="/coverage/asia/kazakhstan" element={<PageLayout><Kazakhstan /></PageLayout>} />
            <Route path="/coverage/asia/kuwait" element={<PageLayout><Kuwait /></PageLayout>} />
            <Route path="/coverage/asia/kyrgyzstan" element={<PageLayout><Kyrgyzstan /></PageLayout>} />
            <Route path="/coverage/asia/laos" element={<PageLayout><Laos /></PageLayout>} />
            <Route path="/coverage/asia/lebanon" element={<PageLayout><Lebanon /></PageLayout>} />
            <Route path="/coverage/asia/malaysia" element={<PageLayout><Malaysia /></PageLayout>} />
            <Route path="/coverage/asia/maldives" element={<PageLayout><Maldives /></PageLayout>} />
            <Route path="/coverage/asia/north-korea" element={<PageLayout><NorthKorea /></PageLayout>} />
            <Route path="/coverage/asia/south-korea" element={<PageLayout><SouthKorea /></PageLayout>} />
            <Route path="/coverage/asia/qatar" element={<PageLayout><Qatar /></PageLayout>} />
            <Route path="/coverage/asia/turkey" element={<PageLayout><Turkey /></PageLayout>} />
            <Route path="/coverage/asia/vietnam" element={<PageLayout><Vietnam /></PageLayout>} />

            {/* =====================
               EUROPE – COUNTRIES
            ===================== */}
            <Route path="/coverage/europe/albania" element={<PageLayout><Albania /></PageLayout>} />
            <Route path="/coverage/europe/andorra" element={<PageLayout><Andorra /></PageLayout>} />
            <Route path="/coverage/europe/austria" element={<PageLayout><Austria /></PageLayout>} />
            <Route path="/coverage/europe/belarus" element={<PageLayout><Belarus /></PageLayout>} />
            <Route path="/coverage/europe/belgium" element={<PageLayout><Belgium /></PageLayout>} />
            <Route path="/coverage/europe/bosnia-and-herzegovina" element={<PageLayout><BosniaAndHerzegovina /></PageLayout>} />
            <Route path="/coverage/europe/bulgaria" element={<PageLayout><Bulgaria /></PageLayout>} />
            <Route path="/coverage/europe/cyprus" element={<PageLayout><Cyprus /></PageLayout>} />
            <Route path="/coverage/europe/czech-republic" element={<PageLayout><CzechRepublic /></PageLayout>} />
            <Route path="/coverage/europe/denmark" element={<PageLayout><Denmark /></PageLayout>} />
            <Route path="/coverage/europe/estonia" element={<PageLayout><Estonia /></PageLayout>} />
            <Route path="/coverage/europe/finland" element={<PageLayout><Finland /></PageLayout>} />
            <Route path="/coverage/europe/france" element={<PageLayout><France /></PageLayout>} />
            <Route path="/coverage/europe/georgia" element={<PageLayout><Georgia /></PageLayout>} />
            <Route path="/coverage/europe/germany" element={<PageLayout><Germany /></PageLayout>} />
            <Route path="/coverage/europe/greece" element={<PageLayout><Greece /></PageLayout>} />
            <Route path="/coverage/europe/hungary" element={<PageLayout><Hungary /></PageLayout>} />
            <Route path="/coverage/europe/iceland" element={<PageLayout><Iceland /></PageLayout>} />
            <Route path="/coverage/europe/ireland" element={<PageLayout><Ireland /></PageLayout>} />
            <Route path="/coverage/europe/italy" element={<PageLayout><Italy /></PageLayout>} />
            <Route path="/coverage/europe/latvia" element={<PageLayout><Latvia /></PageLayout>} />
            <Route path="/coverage/europe/liechtenstein" element={<PageLayout><Liechtenstein /></PageLayout>} />
            <Route path="/coverage/europe/lithuania" element={<PageLayout><Lithuania /></PageLayout>} />
            <Route path="/coverage/europe/luxembourg" element={<PageLayout><Luxembourg /></PageLayout>} />
            <Route path="/coverage/europe/malta" element={<PageLayout><Malta /></PageLayout>} />

            {/* =====================
               AFRICA – COUNTRIES
            ===================== */}
            <Route path="/coverage/africa/algeria" element={<PageLayout><Algeria /></PageLayout>} />
            <Route path="/coverage/africa/angola" element={<PageLayout><Angola /></PageLayout>} />
            <Route path="/coverage/africa/benin" element={<PageLayout><Benin /></PageLayout>} />
            <Route path="/coverage/africa/botswana" element={<PageLayout><Botswana /></PageLayout>} />
            <Route path="/coverage/africa/burkina-faso" element={<PageLayout><BurkinaFaso /></PageLayout>} />
            <Route path="/coverage/africa/burundi" element={<PageLayout><Burundi /></PageLayout>} />
            <Route path="/coverage/africa/cabo-verde" element={<PageLayout><CaboVerde /></PageLayout>} />
            <Route path="/coverage/africa/cameroon" element={<PageLayout><Cameroon /></PageLayout>} />
            <Route path="/coverage/africa/central-african-republic" element={<PageLayout><CentralAfricanRepublic /></PageLayout>} />
            <Route path="/coverage/africa/chad" element={<PageLayout><Chad /></PageLayout>} />
            <Route path="/coverage/africa/comoros" element={<PageLayout><Comoros /></PageLayout>} />
            <Route path="/coverage/africa/congo" element={<PageLayout><Congo /></PageLayout>} />
            <Route path="/coverage/africa/cote-divoire" element={<PageLayout><CoteDIvoire /></PageLayout>} />
            <Route path="/coverage/africa/djibouti" element={<PageLayout><Djibouti /></PageLayout>} />
            <Route path="/coverage/africa/egypt" element={<PageLayout><Egypt /></PageLayout>} />
            <Route path="/coverage/africa/equatorial-guinea" element={<PageLayout><EquatorialGuinea /></PageLayout>} />
            <Route path="/coverage/africa/eritrea" element={<PageLayout><Eritrea /></PageLayout>} />
            <Route path="/coverage/africa/eswatini" element={<PageLayout><Eswatini /></PageLayout>} />
            <Route path="/coverage/africa/ethiopia" element={<PageLayout><Ethiopia /></PageLayout>} />
            <Route path="/coverage/africa/gabon" element={<PageLayout><Gabon /></PageLayout>} />
            <Route path="/coverage/africa/gambia" element={<PageLayout><Gambia /></PageLayout>} />
            <Route path="/coverage/africa/ghana" element={<PageLayout><Ghana /></PageLayout>} />
            <Route path="/coverage/africa/guinea" element={<PageLayout><Guinea /></PageLayout>} />
            <Route path="/coverage/africa/guinea-bissau" element={<PageLayout><GuineaBissau /></PageLayout>} />
            <Route path="/coverage/africa/kenya" element={<PageLayout><Kenya /></PageLayout>} />
            <Route path="/coverage/africa/lesotho" element={<PageLayout><Lesotho /></PageLayout>} />
            <Route path="/coverage/africa/liberia" element={<PageLayout><Liberia /></PageLayout>} />
            <Route path="/coverage/africa/libya" element={<PageLayout><Libya /></PageLayout>} />
            <Route path="/coverage/africa/madagascar" element={<PageLayout><Madagascar /></PageLayout>} />
            <Route path="/coverage/africa/malawi" element={<PageLayout><Malawi /></PageLayout>} />
            <Route path="/coverage/africa/mali" element={<PageLayout><Mali /></PageLayout>} />
            <Route path="/coverage/africa/mauritius" element={<PageLayout><Mauritius /></PageLayout>} />
            <Route path="/coverage/africa/mozambique" element={<PageLayout><Mozambique /></PageLayout>} />
            <Route path="/coverage/africa/nigeria" element={<PageLayout><Nigeria /></PageLayout>} />
            <Route path="/coverage/africa/south-africa" element={<PageLayout><SouthAfrica /></PageLayout>} />

            {/* =====================
               NORTH AMERICA – COUNTRIES
            ===================== */}
            <Route path="/coverage/north-america/antigua-and-barbuda" element={<PageLayout><AntiguaAndBarbuda /></PageLayout>} />
            <Route path="/coverage/north-america/bahamas" element={<PageLayout><Bahamas /></PageLayout>} />
            <Route path="/coverage/north-america/barbados" element={<PageLayout><Barbados /></PageLayout>} />
            <Route path="/coverage/north-america/belize" element={<PageLayout><Belize /></PageLayout>} />
            <Route path="/coverage/north-america/canada" element={<PageLayout><Canada /></PageLayout>} />
            <Route path="/coverage/north-america/costa-rica" element={<PageLayout><CostaRica /></PageLayout>} />
            <Route path="/coverage/north-america/cuba" element={<PageLayout><Cuba /></PageLayout>} />
            <Route path="/coverage/north-america/dominica" element={<PageLayout><Dominica /></PageLayout>} />
            <Route path="/coverage/north-america/dominican-republic" element={<PageLayout><DominicanRepublic /></PageLayout>} />
            <Route path="/coverage/north-america/el-salvador" element={<PageLayout><ElSalvador /></PageLayout>} />
            <Route path="/coverage/north-america/grenada" element={<PageLayout><Grenada /></PageLayout>} />
            <Route path="/coverage/north-america/guatemala" element={<PageLayout><Guatemala /></PageLayout>} />
            <Route path="/coverage/north-america/haiti" element={<PageLayout><Haiti /></PageLayout>} />
            <Route path="/coverage/north-america/honduras" element={<PageLayout><Honduras /></PageLayout>} />
            <Route path="/coverage/north-america/jamaica" element={<PageLayout><Jamaica /></PageLayout>} />
            <Route path="/coverage/north-america/mexico" element={<PageLayout><Mexico /></PageLayout>} />

            {/* =====================
               SOUTH AMERICA – COUNTRIES
            ===================== */}
            <Route path="/coverage/south-america/argentina" element={<PageLayout><Argentina /></PageLayout>} />
            <Route path="/coverage/south-america/bolivia" element={<PageLayout><Bolivia /></PageLayout>} />
            <Route path="/coverage/south-america/brazil" element={<PageLayout><Brazil /></PageLayout>} />
            <Route path="/coverage/south-america/chile" element={<PageLayout><Chile /></PageLayout>} />
            <Route path="/coverage/south-america/colombia" element={<PageLayout><Colombia /></PageLayout>} />
            <Route path="/coverage/south-america/ecuador" element={<PageLayout><Ecuador /></PageLayout>} />
            <Route path="/coverage/south-america/guyana" element={<PageLayout><Guyana /></PageLayout>} />

            {/* =====================
               OCEANIA – COUNTRIES
            ===================== */}
            <Route path="/coverage/oceania/australia" element={<PageLayout><Australia /></PageLayout>} />
            <Route path="/coverage/oceania/fiji" element={<PageLayout><Fiji /></PageLayout>} />
            <Route path="/coverage/oceania/kiribati" element={<PageLayout><Kiribati /></PageLayout>} />
            <Route path="/coverage/oceania/marshall-islands" element={<PageLayout><MarshallIslands /></PageLayout>} />

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

            {/*Asia*/}
            <Route path="/coverage/asia/india" element={<India />} />

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;