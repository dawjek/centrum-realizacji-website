import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BusinessLinesSection } from './components/BusinessLinesSection';
import { AboutSection } from './components/AboutSection';
import { ReferencesSection } from './components/ReferencesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-cr-white">
      <Header />
      <main>
        <HeroSection />
        <BusinessLinesSection />
        <AboutSection />
        <ReferencesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
