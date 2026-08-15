import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import SiteLayout from "@/components/layout/SiteLayout";
import Start from "./pages/Start.tsx";
import Plattform from "./pages/Plattform.tsx";
import ModellgetriebeneEntwicklung from "./pages/ModellgetriebeneEntwicklung.tsx";
import Services from "./pages/Services.tsx";
import Kontakt from "./pages/Kontakt.tsx";
import Impressum from "./pages/Impressum.tsx";
import Datenschutz from "./pages/Datenschutz.tsx";
import Karriere from "./pages/Karriere.tsx";
import KarriereDetail from "./pages/KarriereDetail.tsx";
import Team from "./pages/Team.tsx";
import Bewerbung from "./pages/Bewerbung.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Start />} />
            <Route path="/plattform" element={<Plattform />} />
            <Route path="/modellgetriebene-entwicklung" element={<ModellgetriebeneEntwicklung />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/karriere" element={<Karriere />} />
            <Route path="/karriere/bewerbung" element={<Bewerbung />} />
            <Route path="/karriere/:slug" element={<KarriereDetail />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />

            {/* Redirects von alten Routen */}
            <Route path="/leistungen" element={<Navigate to="/plattform" replace />} />
            <Route path="/beratung" element={<Navigate to="/plattform" replace />} />
            <Route path="/softwareentwicklung" element={<Navigate to="/modellgetriebene-entwicklung" replace />} />
            <Route path="/software" element={<Navigate to="/modellgetriebene-entwicklung" replace />} />
            <Route path="/systemintegration" element={<Navigate to="/services" replace />} />
            <Route path="/methodik" element={<Navigate to="/modellgetriebene-entwicklung" replace />} />
            
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
