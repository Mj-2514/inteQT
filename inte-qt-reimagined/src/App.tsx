import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Coverage from "./pages/Coverage";
// import LoginPage, { RegisterPage } from './pages/Auth';
import AuthPage from "./pages/Auth";
import Services from "./pages/Services";
import PartnerCenter from "./pages/PartnerCenter";
import Cases from "./pages/Cases";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Support from "./pages/Support";
import Sales from "./pages/Sales";
import DedicatedLines from "./pages/DedicatedLines";
import WirelessConnection from "./pages/WirelessConnection";
import BusinessBroadband from "./pages/BusinessBroadband";
import GlobalNsoc from "./pages/GlobalNsoc";
import Bangladesh from "./asia/Bangladesh";
import Afghanistan from "./asia/Afghanistan";
import Asia from "./asia/Asia";
import Azerbaijan from "./asia/Azerbaijan";
import Bhutan from "./asia/Bhutan";
import BlogPage from "./pages/BlogPage";
import Europe from "./europe/Europe";
import DetailedBlog from "./pages/DetailedBlog";
import Armenia from "./asia/Armenia";
import Bahrain from "./asia/Bahrain";
import Indonesia from "./asia/Indonesia";
import Japan from "./asia/Japan";
import Qatar from "./asia/Qatar";
import Turkey from "./asia/Turkey";
import Vietnam from "./asia/Vietnma";
import Albania from "./europe/Albania";
import Andorra from "./europe/Andorra";
import Austria from "./europe/Austria";
import Belarus from "./europe/Belarus"
import Belgium from "./europe/Belgium";
import BosniaAndHerzegovina from "./europe/BosniaAndHerzengovina";
import Bulgaria from "./europe/Bulgaria";
import NorthAmericaList from "./north-america/NorthAmerica";
import SouthAmericaList from "./southAmerica/SouthAmerica";
import AfricaList from "./africa/Africa";
import OceaniaList from "./ocenia/Oceania";
import AntiguaAndBarbuda from "./north-america/AntiguaAndBarbuda";
import Bahamas from "./north-america/Bahamas";
import Belize from "./north-america/Belize";
import Canada from "./north-america/Canada";
import DominicanRepublic from "./north-america/DominicanRepublic";
import Mexico from "./north-america/Mexico";
import Argentina from "./southAmerica/Argentina";
import Bolivia from "./southAmerica/Bolvia";
import Brazil from "./southAmerica/Brazail";
import Chile from "./southAmerica/Chile";
import Algeria from "./africa/Algeria";
import Angola from "./africa/Angola";
import Benin from "./africa/Benin";
import Mozambique from "./africa/Mozambique";
import Nigeria from "./africa/Nigeria";
import SouthAfrica from "./africa/SouthAfrica";
import Australia from "./ocenia/Australia";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Barbados from "./north-america/Barbados";
import Botswana from "./africa/Botswana";
import CreateBlog from "./pages/CreateBlog";
import AdminBlogList from "./pages/AdminBlogList";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/coverage/asia/afghanistan" element={<Afghanistan />} />
          <Route path="/coverage/asia/vietnam" element={<Vietnam />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/admin/blogs" element={<AdminBlogList />} />
          <Route path="/coverage/europe/albania" element={<Albania />} />
          <Route path="/coverage/north-america" element={<NorthAmericaList />} />
          <Route path="/coverage/north-america/bahamas" element={<Bahamas />} />
          <Route path="/coverage/north-america/barbados" element={<Barbados />} />
          <Route path="/coverage/north-america/belize" element={<Belize />} />
          <Route path="/coverage/south-america/argentina" element={<Argentina />} />
          <Route path="/coverage/south-america/brazil" element={<Brazil />} />
          <Route path="/coverage/south-america/chile" element={<Chile />} />
          <Route path="/coverage/south-america/bolivia" element={<Bolivia />} />
          <Route path="/coverage/north-america/canada" element={<Canada />} />
          <Route path="/coverage/north-america/mexico" element={<Mexico />} />
          <Route path="/coverage/north-america/dominican-republic" element={<DominicanRepublic />} />
          <Route path="/coverage/north-america/antigua-and-barbuda" element={<AntiguaAndBarbuda />} />
          <Route path="/coverage/south-america" element={<SouthAmericaList />} />
          <Route path="/coverage/africa" element={<AfricaList />} />
          <Route path="/coverage/africa/algeria" element={<Algeria />} />
          <Route path="/coverage/africa/angola" element={<Angola />} />
          <Route path="/coverage/africa/botswana" element={<Botswana />} />
          <Route path="/coverage/africa/benin" element={<Benin />} />
          <Route path="/coverage/africa/mozambique" element={<Mozambique />} />
          <Route path="/coverage/africa/nigeria" element={<Nigeria />} />
          <Route path="/coverage/africa/south-africa" element={<SouthAfrica />} />
          <Route path="/coverage/oceania" element={<OceaniaList />} />
          <Route path="/coverage/oceania/australia" element={<Australia />} />
          <Route path="/coverage/europe/belgium" element={<Belgium />} />
          <Route path="/coverage/europe/Bosnia-and-Herzegovina" element={<BosniaAndHerzegovina />} />
          <Route path="/coverage/europe/austria" element={<Austria />} />
          <Route path="/coverage/europe/belarus" element={<Belarus />} />
          <Route path="/coverage/europe/bulgaria" element={<Bulgaria />} />
          <Route path="/coverage/europe/andorra" element={<Andorra />} />
          <Route path="/coverage/asia/qatar" element={<Qatar />} />
          <Route path="/coverage/asia/turkey" element={<Turkey />} />
          <Route path="/coverage/asia/japan" element={<Japan />} />
          <Route path="/coverage/asia/indonesia" element={<Indonesia />} />
          <Route path="/coverage/asia/bangladesh" element={<Bangladesh />} />
          <Route path="/coverage/asia/bahrain" element={<Bahrain />} />
          <Route path="/coverage/asia/azerbaijan" element={<Azerbaijan />} />
          <Route path="/coverage/asia/armenia" element={<Armenia />} />
          <Route path="/coverage/asia/bhutan" element={<Bhutan />} />
          <Route path="/coverage/asia" element={<Asia />} />
          <Route path="/global-nsoc" element={<GlobalNsoc />} />
          <Route path="/coverage" element={<><Navbar /><Coverage /><Footer /></>} />
          <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
          <Route path="/partner-center" element={<><Navbar /><PartnerCenter /><Footer /></>} />
          <Route path="/cases" element={<><Navbar /><Cases /><Footer /></>} />
          <Route path="/events" element={<><Navbar /><Events /><Footer /></>} />
          <Route path="/blogs" element={<><Navbar /><Blogs /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
          <Route path="/support" element={<Support />} />
          <Route path="/services/dedicated-lines" element={<DedicatedLines />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/services/wireless-connection" element={<WirelessConnection />} />
          <Route path="/services/business-broadband" element={<BusinessBroadband />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/coverage/europe" element={<Europe />} />
          <Route path="/blog/:slug" element={<DetailedBlog />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
