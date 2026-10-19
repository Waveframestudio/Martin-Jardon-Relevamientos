import React, { useState } from 'react';
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
