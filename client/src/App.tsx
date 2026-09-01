/** Night Archive style reminder: routing must preserve the quiet archive continuity and provide clear escape routes. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Mandapas from "./pages/Mandapas";
import Garbhagrihas from "./pages/Garbhagrihas";
import MeenakshiAmman from "./pages/MeenakshiAmman";

function Router() {
  const locationHook = import.meta.env.BASE_URL === "/" ? undefined : useHashLocation;

  return (
    <WouterRouter hook={locationHook}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/temples/meenakshi-amman" component={MeenakshiAmman} />
        <Route path="/mandapas" component={Mandapas} />
        <Route path="/garbhagrihas" component={Garbhagrihas} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
