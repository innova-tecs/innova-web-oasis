
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
    <section className="pt-32 pb-16 md:pb-24 lg:py-32 overflow-hidden" id="home">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-innova-darkBlue via-innova-lightBlue to-innova-brightPurple bg-clip-text text-transparent animate-[heroTitle_1.5s_ease-out_forwards] opacity-0 translate-y-8">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-[fadeInUp_1s_ease-out_0.3s_forwards] opacity-0 translate-y-6">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-[fadeInUp_1s_ease-out_0.6s_forwards] opacity-0 translate-y-6">
              <Button size="lg" className="bg-gradient-to-r from-innova-darkBlue via-innova-lightBlue to-innova-violet hover:opacity-90 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group animate-[ctaZoomIn_0.8s_ease-out_0.9s_forwards] opacity-0 scale-95">
                {t('hero.cta')}
                {dir === 'rtl' ? null : <ArrowRight className="ms-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
              </Button>
              <Button size="lg" variant="outline" asChild className="transition-all duration-500 hover:bg-primary/10 hover:scale-105 animate-[ctaZoomIn_0.8s_ease-out_1.1s_forwards] opacity-0 scale-95">
                <Link to="/hosting-comparison">
                  {t('hero.secondary')}
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative animate-[slideInRight_1.2s_ease-out_0.4s_forwards] opacity-0 translate-x-12">
            {/* Animated background elements */}
            <div className="absolute -z-10 w-72 h-72 blur-3xl rounded-full bg-innova-lightBlue/30 top-0 right-0 animate-[pulseGlow_4s_ease-in-out_infinite]"></div>
            <div className="absolute -z-10 w-60 h-60 blur-3xl rounded-full bg-innova-violet/20 -bottom-10 -left-10 animate-[pulseGlow_4s_ease-in-out_infinite_2s]"></div>
            
            {/* Server rack illustration with pulsing lights */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm transform hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 animate-[shimmer_3s_ease-in-out_infinite]"></div>
              
              {/* Pulsing server lights */}
              <div className="absolute top-4 left-4 flex space-x-2 z-20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-[serverLight_2s_ease-in-out_infinite]"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-[serverLight_2s_ease-in-out_infinite_0.5s]"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full animate-[serverLight_2s_ease-in-out_infinite_1s]"></div>
              </div>
              
              <AutoCarousel className="w-full" autoplay={true} interval={5000}>
                <CarouselContent>
                  {serverImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-xl">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-[300px] object-cover transition-transform duration-1000 hover:scale-110"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-foreground transition-all duration-300 hover:scale-110" />
                <CarouselNext className="absolute right-2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-foreground transition-all duration-300 hover:scale-110" />
              </AutoCarousel>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: t('features.support') },
            { value: "10x", label: t('features.speed') },
            { value: "5000+", label: t('pricing.domains') }
          ].map((item, index) => (
            <div key={index} className="space-y-2 animate-[statsCountUp_1s_ease-out_calc(1.5s+var(--index)*0.2s)_forwards] opacity-0 transform translate-y-4" style={{"--index": index} as React.CSSProperties}>
              <h3 className="text-3xl font-bold text-primary transition-all duration-500 hover:scale-110">{item.value}</h3>
              <p className="text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
