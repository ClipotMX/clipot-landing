import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// removed old-index
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import ServicioDetalle from "./pages/ServicioDetalle";
import Portfolio from "./pages/Portfolio";
// removed kommo
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contacto from "./pages/Contacto";
import Privacidad from "./pages/Privacidad";
import Terminos from "./pages/Terminos";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Layout from "./layout";
// removed landings

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><LandingPage /></Layout>} />
          <Route path="/nosotros" element={<Layout><Nosotros /></Layout>} />
          <Route path="/servicios" element={<Layout><Servicios /></Layout>} />
          <Route path="/servicios/:slug" element={<Layout><ServicioDetalle /></Layout>} />
          <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
          {/* removed kommo */}
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
          <Route path="/contacto" element={<Layout><Contacto /></Layout>} />
          <Route path="/privacidad" element={<Layout><Privacidad /></Layout>} />
          <Route path="/terminos" element={<Layout><Terminos /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
