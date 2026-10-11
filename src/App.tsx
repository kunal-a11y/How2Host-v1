import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Pages
import { HomePage } from "./pages/HomePage";
import { ServicesOverviewPage } from "./pages/ServicesOverviewPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { UpdatesPage } from "./pages/UpdatesPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

import { easeEditorial } from "./utils/animations";

function AnimatedAppRoutes() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  const initialAnim = reduceMotion ? undefined : { opacity: 0, y: 10 };
  const exitAnim = reduceMotion ? undefined : { opacity: 0, y: -6 };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={initialAnim}
        animate={{ opacity: 1, y: 0 }}
        exit={exitAnim}
        transition={{ duration: 0.35, ease: easeEditorial }}
        className="flex-1 flex flex-col"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesOverviewPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-white text-[#111111] flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <AnimatedAppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
