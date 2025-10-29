import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import CourseCatalog from "./pages/CourseCatalog";
import StudentProfile from "./pages/StudentProfile";
import SpacingSystem from "./pages/SpacingSystem";
import NotFound from "./pages/NotFound";
import Icon from './components/ui/icon';

const queryClient = new QueryClient();

function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-serif text-xl">A</span>
            </div>
            <h1 className="text-2xl font-serif font-bold text-slate-900">Academia</h1>
          </div>
          
          <div className="flex gap-1">
            <Link
              to="/"
              className={`px-6 py-2 rounded-lg transition-all ${
                isActive('/') 
                  ? 'bg-slate-900 text-white' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Каталог курсов
            </Link>
            <Link
              to="/profile"
              className={`px-6 py-2 rounded-lg transition-all ${
                isActive('/profile') 
                  ? 'bg-slate-900 text-white' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Профиль
            </Link>
            <Link
              to="/spacing"
              className={`px-6 py-2 rounded-lg transition-all ${
                isActive('/spacing') 
                  ? 'bg-slate-900 text-white' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Spacing System
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-slate-50">
          <Navigation />
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<CourseCatalog />} />
              <Route path="/profile" element={<StudentProfile />} />
              <Route path="/spacing" element={<SpacingSystem />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;