
import React, { useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  AutoCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/auto-carousel";

const serverImages = [
  {
    src: "/lovable-uploads/server-rack.jpg",
    alt: "خوادم ويب متطورة"
  },
  {
    src: "/lovable-uploads/photo-1605810230434-7631ac76ec81",
    alt: "مركز بيانات"
  },
  {
    src: "/lovable-uploads/photo-1488590528505-98d2b5aba04b",
    alt: "حاسوب محمول يعرض رموز البرمجة"
  },
  {
    src: "/lovable-uploads/photo-1518770660439-4636190af475",
    alt: "لوحة دارة كهربائية"
  }
];

const HeroSection: React.FC = () => {
  const { t, dir } = useLanguage();
  
  return (
    <section className="pt-32 pb-16 md:pb-24 lg:py-32" id="home">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-start animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-innova-darkBlue via-innova-lightBlue to-innova-brightPurple bg-clip-text text-transparent animate-[pulse_3s_ease-in-out_infinite]">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-[fade-in_0.6s_ease-out_0.3s_both]">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-[fade-in_0.6s_ease-out_0.6s_both]">
              <Button size="lg" className="bg-gradient-to-r from-innova-darkBlue via-innova-lightBlue to-innova-violet hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                {t('hero.cta')}
                {dir === 'rtl' ? null : <ArrowRight className="ms-2 h-4 w-4" />}
              </Button>
              <Button size="lg" variant="outline" asChild className="transition-all duration-300 hover:bg-primary/10">
                <Link to="/hosting-comparison">
                  {t('hero.secondary')}
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative animate-[scale-in_0.8s_ease-out_0.4s_both]">
            <div className="absolute -z-10 w-72 h-72 blur-3xl rounded-full bg-innova-lightBlue/30 top-0 right-0 animate-pulse"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-sm">
              <AutoCarousel className="w-full" autoplay={true} interval={5000}>
                <CarouselContent>
                  {serverImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-xl">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-[300px] object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-foreground transition-all duration-300" />
                <CarouselNext className="absolute right-2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-foreground transition-all duration-300" />
              </AutoCarousel>
            </div>
            <div className="absolute -z-10 w-60 h-60 blur-3xl rounded-full bg-innova-violet/20 -bottom-10 -left-10 animate-pulse"></div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: t('features.support') },
            { value: "10x", label: t('features.speed') },
            { value: "5000+", label: t('pricing.domains') }
          ].map((item, index) => (
            <div key={index} className="space-y-2 transition-all duration-500 hover:transform hover:scale-105 animate-[fade-in_0.5s_ease-out_calc(0.7s+var(--index)*0.1s)_both]" style={{"--index": index} as React.CSSProperties}>
              <h3 className="text-3xl font-bold text-primary">{item.value}</h3>
              <p className="text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
