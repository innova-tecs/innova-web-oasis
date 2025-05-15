
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

const HeroSection: React.FC = () => {
  const { t, dir } = useLanguage();
  
  return (
    <section className="pt-32 pb-16 md:pb-24 lg:py-32" id="home">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-innova-darkBlue via-innova-lightBlue to-innova-brightPurple bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-innova-darkBlue via-innova-lightBlue to-innova-violet hover:opacity-90 transition-opacity">
                {t('hero.cta')}
                {dir === 'rtl' ? null : <ArrowRight className="ms-2 h-4 w-4" />}
              </Button>
              <Button size="lg" variant="outline">
                {t('hero.secondary')}
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -z-10 w-72 h-72 blur-3xl rounded-full bg-innova-lightBlue/30 top-0 right-0"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-sm">
              <div className="aspect-video w-full max-w-xl mx-auto overflow-hidden rounded-xl bg-gradient-to-br from-innova-lightBlue/20 to-innova-violet/20 p-1">
                <div className="rounded-lg overflow-hidden w-full h-full border border-white/10 bg-innova-darkBg">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="w-full text-center text-sm text-gray-400">www.innova-hosting.com</div>
                  </div>
                  <div className="p-4 flex flex-col gap-4">
                    <div className="h-8 w-2/3 bg-white/10 rounded"></div>
                    <div className="h-32 w-full bg-white/5 rounded"></div>
                    <div className="flex gap-4">
                      <div className="h-12 w-32 bg-innova-lightBlue/50 rounded"></div>
                      <div className="h-12 w-32 bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 w-60 h-60 blur-3xl rounded-full bg-innova-violet/20 -bottom-10 -left-10"></div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-primary">99.9%</h3>
            <p className="text-muted-foreground">Uptime</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-primary">24/7</h3>
            <p className="text-muted-foreground">{t('features.support')}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-primary">10x</h3>
            <p className="text-muted-foreground">{t('features.speed')}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-primary">5000+</h3>
            <p className="text-muted-foreground">{t('pricing.domains')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
