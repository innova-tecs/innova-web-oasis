
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';

const FAQ: React.FC = () => {
  const { dir } = useLanguage();

  return (
    <div className={`min-h-screen ${dir === 'rtl' ? 'rtl' : 'ltr'}`} dir={dir}>
      <Header />
      <main className="pt-20">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
