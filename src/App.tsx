
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Playbooks from "./pages/Playbooks";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";
import { StrictMode } from "react";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/playbooks" element={<Playbooks />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/get-started" element={<GetStarted />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
