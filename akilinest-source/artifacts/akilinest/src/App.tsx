import { useEffect } from "react";
import { Switch, Route, Router, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { CursorTrail } from "@/components/CursorTrail";

import Home from "@/pages/Home";
import Teams from "@/pages/Teams";
import AiTrainingKenya from "@/pages/AiTrainingKenya";
import TeamsEducators from "@/pages/TeamsEducators";
import TeamsCorporate from "@/pages/TeamsCorporate";
import KidsBootcamps from "@/pages/KidsBootcamps";
import Hero2026 from "@/pages/Hero2026";
import Insights from "@/pages/Insights";
import InsightPost from "@/pages/InsightPost";
import Programme from "@/pages/Programme";
import ParentSeries from "@/pages/ParentSeries";
import Events from "@/pages/Events";
import About from "@/pages/About";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import ParentsGuide from "@/pages/ParentsGuide";
import FutureSkillsReport from "@/pages/FutureSkillsReport";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

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
          <Route path="/ai-training-kenya" component={AiTrainingKenya} />
          <Route path="/teams/educators" component={TeamsEducators} />
          <Route path="/teams/corporate" component={TeamsCorporate} />
          <Route path="/teams" component={Teams} />
          <Route path="/kids-ai-bootcamps" component={KidsBootcamps} />
          <Route path="/hero-2026" component={Hero2026} />
          <Route path="/insights" component={Insights} />
          <Route path="/insights/:slug" component={InsightPost} />
          <Route path="/programme" component={Programme} />
          <Route path="/pis" component={ParentSeries} />
          <Route path="/events" component={Events} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/parents-guide" component={ParentsGuide} />
          <Route path="/future-skills-report" component={FutureSkillsReport} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
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
        <Router base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AppRouter />
        </Router>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
