
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  Check, 
  X, 
  Server, 
  Database, 
  Globe, 
  Shield, 
  ArrowRight, 
  LifeBuoy 
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
  included: boolean | string;
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
}

const PricingSection: React.FC = () => {
  const { t, dir } = useLanguage();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
      },
      {
        name: t('pricing.custom'),
        price: t('pricing.custom.price'),
        storage: t('pricing.custom.storage'),
        bandwidth: t('pricing.custom.bandwidth'),
        domains: t('pricing.custom.domains'),
        description: 'Tailored solutions for special requirements',
        features: [
          { name: t('pricing.storage'), included: t('pricing.custom.storage') },
          { name: t('pricing.bandwidth'), included: t('pricing.custom.bandwidth') },
          { name: t('pricing.domains'), included: t('pricing.custom.domains') },
          { name: t('pricing.ssl'), included: true },
          { name: t('pricing.backups'), included: 'Custom' },
          { name: t('pricing.support'), included: 'Dedicated Team' },
        ]
      },
    ];
  };
  
  const plans = createPlans(billingPeriod);
  
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pricing.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('pricing.subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-innova-purple to-innova-blue mx-auto mt-4"></div>
        </div>
        
        <Tabs 
          defaultValue="monthly" 
          className="w-full max-w-md mx-auto mb-10"
          onValueChange={(value) => setBillingPeriod(value as 'monthly' | 'yearly')}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="monthly">{t('pricing.monthly')}</TabsTrigger>
            <TabsTrigger value="yearly">{t('pricing.yearly')}</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.slice(0, 6).map((plan, index) => (
            <div
              key={index}
              className={cn(
                "pricing-card relative border border-border rounded-xl overflow-hidden",
                plan.mostPopular ? "border-primary shadow-lg shadow-primary/10" : ""
              )}
            >
              {plan.mostPopular && (
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-innova-purple to-innova-blue" />
              )}
              
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  </div>
                  {plan.mostPopular && (
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {language === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                    </span>
                  )}
                </div>
                
                {typeof plan.price === 'number' ? (
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ms-2">
                      {t('pricing.sar')}/{billingPeriod === 'monthly' ? t('pricing.monthly').toLowerCase() : t('pricing.yearly').toLowerCase()}
                    </span>
                  </div>
                ) : (
                  <div className="mb-4">
                    <span className="text-xl font-semibold">{plan.price}</span>
                  </div>
                )}
                
                <Button
                  className={cn(
                    "w-full mb-6",
                    plan.mostPopular
                      ? "bg-gradient-to-r from-innova-purple to-innova-blue hover:opacity-90"
                      : ""
                  )}
                  variant={plan.mostPopular ? "default" : "outline"}
                >
                  {t('pricing.cta')}
                  {dir === 'rtl' ? null : <ArrowRight className="ms-2 h-4 w-4" />}
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
