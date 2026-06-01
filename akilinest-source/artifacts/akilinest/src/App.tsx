import { useEffect } from "react";
import { Switch, Route, Router, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { CursorTrail } from "@/components/CursorTrail";

import Home from "@/pages/Home";
import Programme from "@/pages/Programme";
import ParentSeries from "@/pages/ParentSeries";
import Events from "@/pages/Events";
import About from "@/pages/About";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  // Keep header height CSS variable in sync so `main` padding matches header
  useEffect(() => {
    const setHeaderHeight = () => {
      const header = document.querySelector('header');
      const h = header ? Math.ceil(header.getBoundingClientRect().height) : 88;
      document.documentElement.style.setProperty('--header-height', `${h}px`);
    };
    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight);
    // Observe changes to header (e.g., wrapping nav links) and update
    const headerEl = document.querySelector('header');
    let mo;
    if (headerEl && typeof MutationObserver !== 'undefined') {
      mo = new MutationObserver(setHeaderHeight);
      mo.observe(headerEl, { attributes: true, childList: true, subtree: true });
    }
    return () => {
      window.removeEventListener('resize', setHeaderHeight);
      if (mo) mo.disconnect();
    };
  }, []);
  return null;
}

function AppRouter() {
  return (
    <div className="flex flex-col min-h-screen">
      <CursorTrail />
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/programme" component={Programme} />
          <Route path="/pis" component={ParentSeries} />
          <Route path="/events" component={Events} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router hook={useHashLocation} base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AppRouter />
        </Router>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
