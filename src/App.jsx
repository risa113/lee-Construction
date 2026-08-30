import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="min-h-screen bg-[#FAFAF8] text-[#111317] flex flex-col selection:bg-[#D4AF37] selection:text-white">
        {/* Navigation / Sidebar */}
        <Sidebar />

        {/* Main Content Area (Offset by Sidebar on Desktop lg:pl-72, and offset for mobile header pt-16 lg:pt-0) */}
        <div className="flex-1 flex flex-col lg:pl-72 pt-14 lg:pt-0">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Shared Global Architectural Footer */}
          <Footer />
        </div>

        {/* Global Floating WhatsApp Lead Button */}
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
