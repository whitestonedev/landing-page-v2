import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "@/components/layout/RootLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Event";
import EventDetail from "./pages/EventPost";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Contribute from "./pages/Contribute";
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
          <Route element={<RootLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/eventos/:slug" element={<EventDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/como-ajudar" element={<Contribute />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
