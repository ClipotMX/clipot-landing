import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import ServicioDetalle from "./pages/ServicioDetalle";
import Portfolio from "./pages/Portfolio";
import Kommo from "./pages/Kommo";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contacto from "./pages/Contacto";
import Privacidad from "./pages/Privacidad";
import Terminos from "./pages/Terminos";
import NotFound from "./pages/NotFound";
import OperatorChat from "./pages/OperatorChat";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminCMS from "./pages/AdminCMS";
import AdminEmailEditor from "./pages/AdminEmailEditor";
import AdminIntegrations from "./pages/AdminIntegrations";
import AdminReports from "./pages/AdminReports";
import { ProtectedUserRoute, ProtectedAdminRoute } from "./components/ProtectedRoute";
import AdminRoles from "./pages/AdminRoles";
import AdminPostEditor from "./pages/AdminPostEditor";
import AdminTaxonomies from "./pages/AdminTaxonomies";
import LandingPage from "./pages/LandingPage";
import Layout from "./layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><LandingPage /></Layout>} />
          <Route path="/old-index" element={<Index />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:slug" element={<ServicioDetalle />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/kommo" element={<Kommo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/admin/chat" element={<ProtectedAdminRoute element={<OperatorChat />} />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedUserRoute element={<AdminDashboard />} />} />
          <Route path="/admin/cms" element={<ProtectedUserRoute element={<AdminCMS />} />} />
          <Route path="/admin/email" element={<ProtectedUserRoute element={<AdminEmailEditor />} />} />
          <Route path="/admin/integraciones" element={<ProtectedUserRoute element={<AdminIntegrations />} />} />
          <Route path="/admin/reportes" element={<ProtectedUserRoute element={<AdminReports />} />} />
          <Route path="/admin/roles" element={<ProtectedAdminRoute element={<AdminRoles />} />} />
          <Route path="/admin/cms/post/new" element={<ProtectedUserRoute element={<AdminPostEditor />} />} />
          <Route path="/admin/cms/post/:id" element={<ProtectedUserRoute element={<AdminPostEditor />} />} />
          <Route path="/admin/cms/taxonomias" element={<ProtectedAdminRoute element={<AdminTaxonomies />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
