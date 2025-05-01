
import React from 'react';
import Header from '@/components/Header';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
