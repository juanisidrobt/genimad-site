
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSpecialtiesSection from './components/ServicesSpecialtiesSection';
import ContactFooter from './components/ContactFooter';
import AboutHoursSection from './components/AboutHoursSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutHoursSection />
        <ServicesSpecialtiesSection />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
    