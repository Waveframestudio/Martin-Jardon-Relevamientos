import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Coverage from './components/Coverage';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LoadingScreen from './components/LoadingScreen';
import AppDemoModal from './components/AppDemoModal';
import './App.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize IntersectionObserver for silky scroll-reveal animations across desktop & mobile
  useEffect(() => {
    if (isLoading) return;

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [isLoading]);

  return (
    <div className="app-root">
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Coverage />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <AppDemoModal />
    </div>
  );
}
