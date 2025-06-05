import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Eventos from "./pages/Eventos";
import EventoDetalhes from "./pages/EventoDetalhes";
import Blog from "./pages/Blog";
import Projetos from "./pages/Projetos";
import ComoAjudar from "./pages/ComoAjudar";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/eventos/:slug" element={<EventoDetalhes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/como-ajudar" element={<ComoAjudar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
