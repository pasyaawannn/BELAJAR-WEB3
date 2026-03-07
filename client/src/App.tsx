import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navigation } from "./components/Navigation";
import { SpaceBackground } from "./components/SpaceBackground";
import Home from "./pages/Home";
import BelajarWeb3 from "./pages/BelajarWeb3";
import Materi from "./pages/Materi";
import Roadmap from "./pages/Roadmap";
import Tools from "./pages/Tools";
import Tentang from "./pages/Tentang";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/belajar"} component={BelajarWeb3} />
      <Route path={"/materi"} component={Materi} />
      <Route path={"/roadmap"} component={Roadmap} />
      <Route path={"/tools"} component={Tools} />
      <Route path={"/tentang"} component={Tentang} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <SpaceBackground />
          <Navigation />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
