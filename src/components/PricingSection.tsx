import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { 
  Check, 
  X, 
  Server, 
  Database, 
  Globe, 
  Shield, 
  ArrowRight, 
  LifeBuoy,
  ExternalLink,
  Code,
  FileCode,
  Settings2,
  CloudCog
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface PlanFeature {
  name: string;
  included: boolean | string | number;
}

interface PricingPlan {
  name: string;
  price: string | number;
  storage: string;
  bandwidth: string;
  domains: string | number;
  description: string;
  mostPopular?: boolean;
  features: PlanFeature[];
  whatsAppLink: string;
}

const PricingSection: React.FC = () => {
  const { t, dir, language } = useLanguage();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  // Example WhatsApp number - replace with actual number
  const whatsAppNumber = "971500000000";
  
  const createPlans = (period: 'monthly' | 'yearly'): PricingPlan[] => {
    const multiplier = period === 'yearly' ? 0.8 : 1; // 20% discount for yearly
    
    return [
      {
        name: t('pricing.basic'),
        price: period === 'yearly' ? 
          Math.round(parseInt(t('pricing.basic.price')) * multiplier * 12) : 
          t('pricing.basic.price'),
        storage: t('pricing.basic.storage'),
        bandwidth: t('pricing.basic.bandwidth'),
        domains: t('pricing.basic.domains'),
        description: 'Perfect for personal websites and blogs',
        features: [
          { name: t('pricing.storage'), included: t('pricing.basic.storage') },
          { name: t('pricing.bandwidth'), included: t('pricing.basic.bandwidth') },
          { name: t('pricing.domains'), included: t('pricing.basic.domains') },
          { name: t('pricing.ssl'), included: true },
          { name: t('pricing.backups'), included: false },
          { name: t('pricing.support'), included: 'Email' },
        ],
        whatsAppLink: `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(`أود الاستفسار عن باقة ${language === 'ar' ? 'الأساسية' : 'Basic'}`)}`
      },
      {
        name: t('pricing.standard'),
        price: period === 'yearly' ? 
          Math.round(parseInt(t('pricing.standard.price')) * multiplier * 12) : 
          t('pricing.standard.price'),
        storage: t('pricing.standard.storage'),
        bandwidth: t('pricing.standard.bandwidth'),
        domains: t('pricing.standard.domains'),
        description: 'Great for small businesses and portfolios',
        mostPopular: true,
        features: [
          { name: t('pricing.storage'), included: t('pricing.standard.storage') },
          { name: t('pricing.bandwidth'), included: t('pricing.standard.bandwidth') },
          { name: t('pricing.domains'), included: t('pricing.standard.domains') },
          { name: t('pricing.ssl'), included: true },
          { name: t('pricing.backups'), included: 'Weekly' },
          { name: t('pricing.support'), included: '24/7 Chat' },
        ],
        whatsAppLink: `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(`أود الاستفسار عن باقة ${language === 'ar' ? 'القياسية' : 'Standard'}`)}`
      },
      {
        name: t('pricing.premium'),
        price: period === 'yearly' ? 
          Math.round(parseInt(t('pricing.premium.price')) * multiplier * 12) : 
          t('pricing.premium.price'),
        storage: t('pricing.premium.storage'),
        bandwidth: t('pricing.premium.bandwidth'),
        domains: t('pricing.premium.domains'),
        description: 'Ideal for growing businesses and online stores',
        features: [
          { name: t('pricing.storage'), included: t('pricing.premium.storage') },
          { name: t('pricing.bandwidth'), included: t('pricing.premium.bandwidth') },
          { name: t('pricing.domains'), included: t('pricing.premium.domains') },
          { name: t('pricing.ssl'), included: true },
          { name: t('pricing.backups'), included: 'Daily' },
          { name: t('pricing.support'), included: '24/7 Priority' },
        ],
        whatsAppLink: `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(`أود الاستفسار عن باقة ${language === 'ar' ? 'المتميزة' : 'Premium'}`)}`
      },
      {
        name: t('pricing.business'),
        price: period === 'yearly' ? 
          Math.round(parseInt(t('pricing.business.price')) * multiplier * 12) : 
          t('pricing.business.price'),
        storage: t('pricing.business.storage'),
        bandwidth: t('pricing.business.bandwidth'),
        domains: t('pricing.business.domains'),
        description: 'Perfect for established businesses with high traffic',
        features: [
          { name: t('pricing.storage'), included: t('pricing.business.storage') },
          { name: t('pricing.bandwidth'), included: t('pricing.business.bandwidth') },
          { name: t('pricing.domains'), included: t('pricing.business.domains') },
          { name: t('pricing.ssl'), included: true },
          { name: t('pricing.backups'), included: 'Daily' },
          { name: t('pricing.support'), included: '24/7 Priority' },
        ],
        whatsAppLink: `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(`أود الاستفسار عن باقة ${language === 'ar' ? 'الأعمال' : 'Business'}`)}`
      },
      {
        name: t('pricing.enterprise'),
        price: period === 'yearly' ? 
          Math.round(parseInt(t('pricing.enterprise.price')) * multiplier * 12) : 
          t('pricing.enterprise.price'),
        storage: t('pricing.enterprise.storage'),
        bandwidth: t('pricing.enterprise.bandwidth'),
        domains: t('pricing.enterprise.domains'),
        description: 'For large enterprises with complex requirements',
        features: [
          { name: t('pricing.storage'), included: t('pricing.enterprise.storage') },
          { name: t('pricing.bandwidth'), included: t('pricing.enterprise.bandwidth') },
          { name: t('pricing.domains'), included: t('pricing.enterprise.domains') },
          { name: t('pricing.ssl'), included: true },
          { name: t('pricing.backups'), included: 'Real-time' },
          { name: t('pricing.support'), included: '24/7 VIP' },
        ],
        whatsAppLink: `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(`أود الاستفسار عن باقة ${language === 'ar' ? 'المؤسسات' : 'Enterprise'}`)}`
      },
      {
        name: language === 'ar' ? 'ووردبريس المُدارة' : 'Managed WordPress',
        price: period === 'yearly' ? 
          Math.round(150 * multiplier * 12) : 
          150,
        storage: '50GB',
        bandwidth: 'Unlimited',
        domains: 5,
        description: language === 'ar' ? 'مثالية لمواقع ووردبريس مع إدارة كاملة' : 'Perfect for WordPress sites with full management',
        features: [
          { name: t('pricing.storage'), included: '50GB' },
          { name: t('pricing.bandwidth'), included: language === 'ar' ? 'غير محدود' : 'Unlimited' },
          { name: t('pricing.domains'), included: '5' },
          { name: t('pricing.ssl'), included: true },
          { name: t('pricing.backups'), included: language === 'ar' ? 'يومي' : 'Daily' },
          { name: t('pricing.support'), included: language === 'ar' ? '24/7 أولوية' : '24/7 Priority' },
          { name: language === 'ar' ? 'تحديثات تلقائية' : 'Auto Updates', included: true },
          { name: language === 'ar' ? 'حماية متقدمة' : 'Advanced Security', included: true },
        ],
        whatsAppLink: `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(`أود الاستفسار عن باقة ${language === 'ar' ? 'ووردبريس المُدارة' : 'Managed WordPress'}`)}`
      },
      {
        name: language === 'ar' ? 'الباقة المخصصة' : 'Custom Plan',
        price: language === 'ar' ? 'تواصل معنا' : 'Contact Us',
        storage: language === 'ar' ? 'مخصص' : 'Custom',
        bandwidth: language === 'ar' ? 'مخصص' : 'Custom',
        domains: language === 'ar' ? 'مخصص' : 'Custom',
        description: language === 'ar' ? 'خصص الاستضافة حسب احتياجاتك الفريدة' : 'Tailor hosting to your unique needs',
        features: [
          { name: t('pricing.storage'), included: language === 'ar' ? 'مخصص' : 'Custom' },
          { name: t('pricing.bandwidth'), included: language === 'ar' ? 'مخصص' : 'Custom' },
          { name: t('pricing.domains'), included: language === 'ar' ? 'مخصص' : 'Custom' },
          { name: t('pricing.ssl'), included: true },
          { name: t('pricing.backups'), included: language === 'ar' ? 'مخصص' : 'Custom' },
          { name: t('pricing.support'), included: language === 'ar' ? 'مخصص' : 'Custom' },
          { name: language === 'ar' ? 'موارد مخصصة' : 'Custom Resources', included: true },
          { name: language === 'ar' ? 'حلول مُخصصة' : 'Custom Solutions', included: true },
        ],
        whatsAppLink: `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(`أود الاستفسار عن ${language === 'ar' ? 'الباقة المخصصة' : 'Custom Plan'}`)}`
      }
    ];
  };
  
  const plans = createPlans(billingPeriod);
  
  return (
    <section id="pricing" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-[titleSlideUp_1s_ease-out_forwards] opacity-100' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-innova-darkBlue to-innova-brightPurple bg-clip-text text-transparent">
            {t('pricing.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('pricing.subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-innova-purple to-innova-blue mx-auto mt-4 animate-[lineGrow_1.5s_ease-out_0.5s_forwards] scale-x-0"></div>
        </div>
        
        <Tabs 
          defaultValue="monthly" 
          className={`w-full max-w-md mx-auto mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'animate-[tabsSlideUp_0.8s_ease-out_0.3s_forwards] opacity-100' : 'opacity-0 translate-y-6'}`}
          onValueChange={(value) => setBillingPeriod(value as 'monthly' | 'yearly')}
        >
          <TabsList className="grid w-full grid-cols-2 transition-all duration-300 hover:shadow-lg">
            <TabsTrigger value="monthly" className="transition-all duration-300">{t('pricing.monthly')}</TabsTrigger>
            <TabsTrigger value="yearly" className="transition-all duration-300">{t('pricing.yearly')}</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                `pricing-card relative border border-border rounded-xl overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-2xl transform ${
                  isVisible 
                    ? 'animate-[pricingCardSlideUp_0.8s_ease-out_calc(0.6s+var(--index)*0.1s)_forwards] opacity-100' 
                    : 'opacity-0 translate-y-12'
                }`,
                plan.mostPopular ? "border-primary shadow-lg shadow-primary/10" : "",
                plan.name === (language === 'ar' ? 'ووردبريس المُدارة' : 'Managed WordPress') ? "border-green-500 shadow-lg shadow-green-500/10" : "",
                plan.name === (language === 'ar' ? 'الباقة المخصصة' : 'Custom Plan') ? "border-purple-500 shadow-lg shadow-purple-500/10" : ""
              )}
              style={{"--index": index} as React.CSSProperties}
            >
              {plan.mostPopular && (
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-innova-purple to-innova-blue animate-[shimmer_2s_ease-in-out_infinite]" />
              )}
              {plan.name === (language === 'ar' ? 'ووردبريس المُدارة' : 'Managed WordPress') && (
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-green-400 to-green-600 animate-[shimmer_2s_ease-in-out_infinite]" />
              )}
              {plan.name === (language === 'ar' ? 'الباقة المخصصة' : 'Custom Plan') && (
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-purple-400 to-purple-600 animate-[shimmer_2s_ease-in-out_infinite]" />
              )}
              
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300 hover:text-primary">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  </div>
                  {plan.mostPopular && (
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full animate-[badgePulse_2s_ease-in-out_infinite]">
                      {language === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                    </span>
                  )}
                  {plan.name === (language === 'ar' ? 'ووردبريس المُدارة' : 'Managed WordPress') && (
                    <span className="bg-green-500/10 text-green-500 text-xs px-2 py-1 rounded-full animate-[badgePulse_2s_ease-in-out_infinite]">
                      {language === 'ar' ? 'موصى به' : 'Recommended'}
                    </span>
                  )}
                  {plan.name === (language === 'ar' ? 'الباقة المخصصة' : 'Custom Plan') && (
                    <span className="bg-purple-500/10 text-purple-500 text-xs px-2 py-1 rounded-full animate-[badgePulse_2s_ease-in-out_infinite]">
                      {language === 'ar' ? 'مخصص' : 'Custom'}
                    </span>
                  )}
                </div>
                
                {typeof plan.price === 'number' ? (
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold animate-[priceCount_2s_ease-out_calc(0.8s+var(--index)*0.1s)_forwards]">{plan.price}</span>
                    <span className="text-muted-foreground ms-2">
                      {t('pricing.sar')}/{billingPeriod === 'monthly' ? t('pricing.monthly').toLowerCase() : t('pricing.yearly').toLowerCase()}
                    </span>
                  </div>
                ) : (
                  <div className="mb-4">
                    <span className="text-xl font-semibold">{plan.price}</span>
                  </div>
                )}
                
                <a href={plan.whatsAppLink} target="_blank" rel="noopener noreferrer" className="block w-full mb-6">
                  <Button
                    className={cn(
                      "w-full group overflow-hidden relative transition-all duration-500 hover:shadow-lg animate-[ctaButtonZoom_0.6s_ease-out_calc(1s+var(--index)*0.05s)_forwards] scale-95 opacity-0",
                      plan.mostPopular
                        ? "bg-gradient-to-r from-innova-purple to-innova-blue hover:opacity-90"
                        : plan.name === (language === 'ar' ? 'ووردبريس المُدارة' : 'Managed WordPress')
                        ? "bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90 text-white"
                        : plan.name === (language === 'ar' ? 'الباقة المخصصة' : 'Custom Plan')
                        ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90 text-white"
                        : ""
                    )}
                    variant={
                      plan.mostPopular || 
                      plan.name === (language === 'ar' ? 'ووردبريس المُدارة' : 'Managed WordPress') || 
                      plan.name === (language === 'ar' ? 'الباقة المخصصة' : 'Custom Plan') 
                        ? "default" 
                        : "outline"
                    }
                  >
                    {language === 'ar' ? 'احجز الآن' : 'Book Now'}
                    <ExternalLink className={`${dir === 'rtl' ? 'mr-2' : 'ml-2'} h-4 w-4 transition-transform group-hover:translate-x-1`} />
                  </Button>
                </a>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className={`flex items-center gap-2 animate-[featureItemSlide_0.5s_ease-out_calc(1.2s+var(--fIndex)*0.05s)_forwards] opacity-0 translate-x-4`} style={{"--fIndex": fIndex} as React.CSSProperties}>
                      {feature.included === true ? (
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      ) : feature.included === false ? (
                        <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                      ) : (
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      )}
                      <span className="text-sm">
                        {feature.name}: {typeof feature.included === 'string' ? feature.included : ''}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Plan-specific icons */}
                {plan.name === (language === 'ar' ? 'ووردبريس المُدارة' : 'Managed WordPress') && (
                  <div className="mt-4 pt-4 border-t border-border flex justify-center space-x-3">
                    <FileCode className="h-5 w-5 text-green-500 animate-[iconBounce_2s_ease-in-out_infinite]" />
                    <Code className="h-5 w-5 text-green-500 animate-[iconBounce_2s_ease-in-out_infinite_0.3s]" />
                    <Settings2 className="h-5 w-5 text-green-500 animate-[iconBounce_2s_ease-in-out_infinite_0.6s]" />
                  </div>
                )}
                {plan.name === (language === 'ar' ? 'الباقة المخصصة' : 'Custom Plan') && (
                  <div className="mt-4 pt-4 border-t border-border flex justify-center space-x-3">
                    <Settings2 className="h-5 w-5 text-purple-500 animate-[iconBounce_2s_ease-in-out_infinite]" />
                    <CloudCog className="h-5 w-5 text-purple-500 animate-[iconBounce_2s_ease-in-out_infinite_0.3s]" />
                    <Server className="h-5 w-5 text-purple-500 animate-[iconBounce_2s_ease-in-out_infinite_0.6s]" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
