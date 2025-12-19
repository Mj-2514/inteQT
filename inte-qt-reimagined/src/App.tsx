// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import GlobalSEO from "@/components/seo/GlobalSeo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

/* =====================
   ASIA
===================== */
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
import Japan from "./asia/Japan";
import Qatar from "./asia/Qatar";
import Turkey from "./asia/Turkey";
import Vietnam from "./asia/Vietnma";

/* =====================
   EUROPE
===================== */
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

/* =====================
   AFRICA
===================== */
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
import Mozambique from "./africa/Mozambique";
import Nigeria from "./africa/Nigeria";
import SouthAfrica from "./africa/SouthAfrica";

/* =====================
   NORTH AMERICA
===================== */
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
import Mexico from "./north-america/Mexico";

/* =====================
   SOUTH AMERICA
===================== */
import Argentina from "./southAmerica/Argentina";
import Bolivia from "./southAmerica/Bolvia";
import Brazil from "./southAmerica/Brazail";
import Chile from "./southAmerica/Chile";
import Colombia from "./southAmerica/Colombia";
import Ecuador from "./southAmerica/Ecuador";
import Guyana from "./southAmerica/Guyana";

/* =====================
   OCEANIA
===================== */
import Australia from "./ocenia/Australia";
import Fiji from "./ocenia/Fiji";
import India from "./asia/India";
import Iran from "./asia/Iran";
import Iraq from "./asia/Iraq";
import Ireland from "./europe/Ireland";
import Israel from "./asia/Isreal";
import Italy from "./europe/Italy";
import CoteDIvoire from "./africa/CoteDIvoire";
import Jamaica from "./north-america/Jamaica";
import Jordan from "./asia/Jordon";
import Kazakhstan from "./asia/Kazakhstan";
import Kenya from "./africa/Kenya";
import Kiribati from "./ocenia/Kiribati";
import NorthKorea from "./asia/NorthKorea";
import SouthKorea from "./asia/SouthKorea";
import Kuwait from "./asia/Kuwait";
import Kyrgyzstan from "./asia/Kyrgyzstan";
import Laos from "./asia/Laos";
import Latvia from "./europe/Latvia";
import Lebanon from "./asia/Lebanon";
import Lesotho from "./africa/Lesotho";
import Liberia from "./africa/Liberia";
import Libya from "./africa/Libya";
import Liechtenstein from "./europe/Liechtenstein";
import Lithuania from "./europe/Lithuania";
import Luxembourg from "./europe/Luxemborg";
import Madagascar from "./africa/Madagascar";
import Malawi from "./africa/Malawi";
import Malaysia from "./asia/Malaysia";
import Maldives from "./asia/Maldives";
import Mali from "./africa/Mali";
import Malta from "./europe/Malta";
import MarshallIslands from "./ocenia/MarshalIslands";
import Mauritius from "./africa/Mauritius";
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
        {/* ✅ GLOBAL SEO (ONCE) */}
        <GlobalSEO />

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
          <Route path="/cases/fiji" element={<CaseFiji />} />
          <Route path="/cases/fmcg" element={<Fmcg />} />
          <Route path="/cases/amid-crisis" element={<AmidCrisis />} />
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

          {/* Regions */}
          <Route path="/coverage/asia" element={<Asia />} />
          <Route path="/coverage/europe" element={<Europe />} />
          <Route path="/coverage/africa" element={<AfricaList />} />
          <Route path="/coverage/north-america" element={<NorthAmericaList />} />
          <Route path="/coverage/south-america" element={<SouthAmericaList />} />
          <Route path="/coverage/oceania" element={<OceaniaList />} />

          {/* Asia */}
          <Route path="/coverage/asia/afghanistan" element={<Afghanistan />} />
          <Route path="/coverage/asia/north-korea" element={<NorthKorea />} />
          <Route path="/coverage/asia/armenia" element={<Armenia />} />
          <Route path="/coverage/asia/kyrgyzstan" element={<Kyrgyzstan />} />
          <Route path="/coverage/asia/laos" element={<Laos />} />
          <Route path="/coverage/asia/kuwait" element={<Kuwait />} />
          <Route path="/coverage/asia/lebanon" element={<Lebanon />} />
          <Route path="/coverage/asia/azerbaijan" element={<Azerbaijan />} />
          <Route path="/coverage/asia/india" element={<India />} />
          <Route path="/coverage/asia/south-korea" element={<SouthKorea />} />
          <Route path="/coverage/asia/iran" element={<Iran />} />
          <Route path="/coverage/asia/bahrain" element={<Bahrain />} />
          <Route path="/coverage/asia/iraq" element={<Iraq />} />
          <Route path="/coverage/asia/malaysia" element={<Malaysia />} />
          <Route path="/coverage/asia/bangladesh" element={<Bangladesh />} />
          <Route path="/coverage/asia/bhutan" element={<Bhutan />} />
          <Route path="/coverage/asia/brunei" element={<Brunei />} />
          <Route path="/coverage/asia/cambodia" element={<Cambodia />} />
          <Route path="/coverage/asia/china" element={<China />} />
          <Route path="/coverage/asia/jordan" element={<Jordan />} />
          <Route path="/coverage/asia/indonesia" element={<Indonesia />} />
          <Route path="/coverage/asia/maldives" element={<Maldives />} />
          <Route path="/coverage/asia/japan" element={<Japan />} />
          <Route path="/coverage/asia/kazakhstan" element={<Kazakhstan />} />
          <Route path="/coverage/asia/israel" element={<Israel />} />
          <Route path="/coverage/asia/qatar" element={<Qatar />} />
          <Route path="/coverage/asia/turkey" element={<Turkey />} />
          <Route path="/coverage/asia/vietnam" element={<Vietnam />} />
          <Route path="/coverage/asia/timor-leste" element={<EastTimor />} />

          {/* Europe */}
          <Route path="/coverage/europe/albania" element={<Albania />} />
          <Route path="/coverage/europe/andorra" element={<Andorra />} />
          <Route path="/coverage/europe/austria" element={<Austria />} />
          <Route path="/coverage/europe/italy" element={<Italy />} />
          <Route path="/coverage/europe/belarus" element={<Belarus />} />
          <Route path="/coverage/europe/ireland" element={<Ireland />} />
          <Route path="/coverage/europe/belgium" element={<Belgium />} />
          <Route path="/coverage/europe/bosnia-and-herzegovina" element={<BosniaAndHerzegovina />} />
          <Route path="/coverage/europe/bulgaria" element={<Bulgaria />} />
          <Route path="/coverage/europe/cyprus" element={<Cyprus />} />
          <Route path="/coverage/europe/czechia" element={<CzechRepublic />} />
          <Route path="/coverage/europe/denmark" element={<Denmark />} />
          <Route path="/coverage/europe/estonia" element={<Estonia />} />
          <Route path="/coverage/europe/finland" element={<Finland />} />
          <Route path="/coverage/europe/latvia" element={<Latvia />} />
          <Route path="/coverage/europe/france" element={<France />} />
          <Route path="/coverage/europe/malta" element={<Malta />} />
          <Route path="/coverage/europe/georgia" element={<Georgia />} />
          <Route path="/coverage/europe/germany" element={<Germany />} />
          <Route path="/coverage/europe/greece" element={<Greece />} />
          <Route path="/coverage/europe/luxembourg" element={<Luxembourg />} />
          <Route path="/coverage/europe/hungary" element={<Hungary />} />
          <Route path="/coverage/europe/iceland" element={<Iceland />} />
          <Route path="/coverage/europe/lithuania" element={<Lithuania />} />
          <Route path="/coverage/europe/liechtenstein" element={<Liechtenstein />} />

          {/* Africa */}
          <Route path="/coverage/africa/algeria" element={<Algeria />} />
          <Route path="/coverage/africa/malawi" element={<Malawi />} />
          <Route path="/coverage/africa/madagascar" element={<Madagascar />} />
          <Route path="/coverage/africa/lesotho" element={<Lesotho />} />
          <Route path="/coverage/africa/liberia" element={<Liberia />} />
          <Route path="/coverage/africa/libya" element={<Libya />} />
          <Route path="/coverage/africa/angola" element={<Angola />} />
          <Route path="/coverage/africa/benin" element={<Benin />} />
          <Route path="/coverage/africa/mauritius" element={<Mauritius />} />
          <Route path="/coverage/africa/mali" element={<Mali />} />
          <Route path="/coverage/africa/kenya" element={<Kenya />} />
          <Route path="/coverage/africa/cote-divoire" element={<CoteDIvoire />} />
          <Route path="/coverage/africa/botswana" element={<Botswana />} />
          <Route path="/coverage/africa/burkina-faso" element={<BurkinaFaso />} />
          <Route path="/coverage/africa/burundi" element={<Burundi />} />
          <Route path="/coverage/africa/cabo-verde" element={<CaboVerde />} />
          <Route path="/coverage/africa/cameroon" element={<Cameroon />} />
          <Route path="/coverage/africa/central-african-republic" element={<CentralAfricanRepublic />} />
          <Route path="/coverage/africa/chad" element={<Chad />} />
          <Route path="/coverage/africa/comoros" element={<Comoros />} />
          <Route path="/coverage/africa/republic-of-the-congo" element={<Congo />} />
          <Route path="/coverage/africa/djibouti" element={<Djibouti />} />
          <Route path="/coverage/africa/egypt" element={<Egypt />} />
          <Route path="/coverage/africa/equatorial-guinea" element={<EquatorialGuinea />} />
          <Route path="/coverage/africa/eritrea" element={<Eritrea />} />
          <Route path="/coverage/africa/eswatini" element={<Eswatini />} />
          <Route path="/coverage/africa/ethiopia" element={<Ethiopia />} />
          <Route path="/coverage/africa/gabon" element={<Gabon />} />
          <Route path="/coverage/africa/gambia" element={<Gambia />} />
          <Route path="/coverage/africa/ghana" element={<Ghana />} />
          <Route path="/coverage/africa/guinea" element={<Guinea />} />
          <Route path="/coverage/africa/guinea-bissau" element={<GuineaBissau />} />
          <Route path="/coverage/africa/mozambique" element={<Mozambique />} />
          <Route path="/coverage/africa/nigeria" element={<Nigeria />} />
          <Route path="/coverage/africa/south-africa" element={<SouthAfrica />} />

          {/* Americas & Oceania */}
          <Route path="/coverage/north-america/antigua-and-barbuda" element={<AntiguaAndBarbuda />} />
          <Route path="/coverage/north-america/bahamas" element={<Bahamas />} />
          <Route path="/coverage/north-america/barbados" element={<Barbados />} />
          <Route path="/coverage/north-america/belize" element={<Belize />} />
          <Route path="/coverage/north-america/canada" element={<Canada />} />
          <Route path="/coverage/north-america/costa-rica" element={<CostaRica />} />
          <Route path="/coverage/north-america/cuba" element={<Cuba />} />
          <Route path="/coverage/north-america/dominica" element={<Dominica />} />
          <Route path="/coverage/north-america/dominican-republic" element={<DominicanRepublic />} />
          <Route path="/coverage/north-america/el-salvador" element={<ElSalvador />} />
          <Route path="/coverage/north-america/grenada" element={<Grenada />} />
          <Route path="/coverage/north-america/guatemala" element={<Guatemala />} />
          <Route path="/coverage/north-america/jamaica" element={<Jamaica />} />
          <Route path="/coverage/north-america/haiti" element={<Haiti />} />
          <Route path="/coverage/north-america/honduras" element={<Honduras />} />
          <Route path="/coverage/north-america/mexico" element={<Mexico />} />

          <Route path="/coverage/south-america/argentina" element={<Argentina />} />
          <Route path="/coverage/south-america/bolivia" element={<Bolivia />} />
          <Route path="/coverage/south-america/brazil" element={<Brazil />} />
          <Route path="/coverage/south-america/chile" element={<Chile />} />
          <Route path="/coverage/south-america/colombia" element={<Colombia />} />
          <Route path="/coverage/south-america/ecuador" element={<Ecuador />} />
          <Route path="/coverage/south-america/guyana" element={<Guyana />} />

          <Route path="/coverage/oceania/australia" element={<Australia />} />
          <Route path="/coverage/oceania/fiji" element={<Fiji />} />
          <Route path="/coverage/oceania/marshall-islands" element={<MarshallIslands />} />
          <Route path="/coverage/oceania/kiribati" element={<Kiribati />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
