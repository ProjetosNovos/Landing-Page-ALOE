import { useState, useEffect } from 'react';
import { WhatsAppProvider, useWhatsApp } from './WhatsAppContext';
import WhatsAppModal from './components/WhatsAppModal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProvaSocial from './components/ProvaSocial';
import Sobre from './components/Sobre';
import Doutora from './components/Doutora';
import Tratamentos from './components/Tratamentos';
import Diferenciais from './components/Diferenciais';
import Resultados from './components/Resultados';
import ComoFunciona from './components/ComoFunciona';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isModalOpen, modalContext, closeModal } = useWhatsApp();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grain min-h-screen overflow-x-hidden">
      <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <ProvaSocial />
      <Sobre />
      <Doutora />
      <Tratamentos />
      <Diferenciais />
      <Resultados />
      <ComoFunciona />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppModal isOpen={isModalOpen} context={modalContext} onClose={closeModal} />
    </div>
  );
}

export default function App() {
  return (
    <WhatsAppProvider>
      <AppContent />
    </WhatsAppProvider>
  );
}
