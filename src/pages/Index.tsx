
import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

const Index = () => {
  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="light">
        <div className="min-h-screen">
          <Header />
          <main>
            <HeroSection />
            <FeaturesSection />
            <PricingSection />
            <AboutSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default Index;
