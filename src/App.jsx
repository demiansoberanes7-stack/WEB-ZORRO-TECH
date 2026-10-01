import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AudienceSection from './components/AudienceSection';
import DemoSection from './components/DemoSection';
import BentoSection from './components/BentoSection';
import FoodRecognition from './components/FoodRecognition';
import FinalCTA from './components/FinalCTA';
import ScrollExperience from './components/ScrollExperience';
import PreorderDialog from './components/PreorderDialog';
import ContenidoMultimedia from './pages/ContenidoMultimedia';
import PortafolioWeb from './pages/PortafolioWeb';
import Blog from './pages/Blog';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function HomePage({ onPreorder }) {
  return (
    <div className="mosaic-wrap" id="top">
      <ScrollExperience />
      <a href="#main" className="skip-link">Ir al contenido</a>
      <Header onPreorder={onPreorder} />
      <main id="main" tabIndex={-1}>
        <Hero onPreorder={onPreorder} />
        <AudienceSection />
        <DemoSection />
        <BentoSection />
        <FoodRecognition />
        <FinalCTA />
      </main>
    </div>
  );
}

function App() {
  const [preorder, setPreorder] = useState(false);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage onPreorder={() => setPreorder(true)} />} />
        <Route path="/contenido-multimedia" element={<ContenidoMultimedia />} />
        <Route path="/portafolio-web" element={<PortafolioWeb />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <PreorderDialog open={preorder} onClose={() => setPreorder(false)} />
    </>
  );
}

export default App;
