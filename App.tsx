import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import BentoGrid from './components/BentoGrid';
import HowItWorks from './components/HowItWorks';
import AppShowcase from './components/AppShowcase';
import Gamification from './components/Gamification';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FeatureSpotlight from './components/FeatureSpotlight';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Home page component
const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <BentoGrid />
        <HowItWorks />
        <FeatureSpotlight />
        <AppShowcase />
        <Gamification />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [konami, setKonami] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);

    // Konami Code Easter Egg
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    const handleKeyDown = (e: KeyboardEvent) => {
      setKonami(prev => {
        const newSeq = [...prev, e.key];
        if (newSeq.length > konamiCode.length) {
          newSeq.shift();
        }
        if (JSON.stringify(newSeq) === JSON.stringify(konamiCode)) {
          alert('🎮 Cheat Code Activated: Unlimited XP Mode Unlocked!');
          return [];
        }
        return newSeq;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!mounted) return null;

  return (
    <div className="bg-[#0F172A] text-white min-h-screen selection:bg-purple-500/30 selection:text-purple-200">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </div>
  );
};

export default App;
