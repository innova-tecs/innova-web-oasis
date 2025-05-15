
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Server, Cpu, HardDrive, MonitorPlay } from 'lucide-react';

const VPSHosting: React.FC = () => {
  const { t, language } = useLanguage();
  
  const vpsPlans = [
    {
      name: language === 'ar' ? 'اساسي' : 'Basic VPS',
      price: language === 'ar' ? '15 دولار' : '$15',
      period: language === 'ar' ? '/شهرياً' : '/month',
      cpu: '2 vCPU',
      ram: '2 GB',
      storage: '20 GB SSD',
      bandwidth: '1 TB',
      icon: <Server className="h-6 w-6" />
    },
    {
      name: language === 'ar' ? 'متقدم' : 'Advanced VPS',
      price: language === 'ar' ? '30 دولار' : '$30',
      period: language === 'ar' ? '/شهرياً' : '/month',
      cpu: '4 vCPU',
      ram: '8 GB',
      storage: '50 GB SSD',
      bandwidth: '2 TB',
      icon: <Server className="h-6 w-6" />
    },
    {
      name: language === 'ar' ? 'احترافي' : 'Professional VPS',
      price: language === 'ar' ? '60 دولار' : '$60',
      period: language === 'ar' ? '/شهرياً' : '/month',
      cpu: '6 vCPU',
      ram: '16 GB',
      storage: '100 GB SSD',
      bandwidth: '3 TB',
      icon: <Server className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-innova-darkBlue to-innova-brightPurple bg-clip-text text-transparent mb-4">
              {language === 'ar' ? 'استضافة الخوادم الافتراضية VPS' : 'VPS Hosting Solutions'}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'خوادم افتراضية قوية وموثوقة مع أداء استثنائي وتحكم كامل.' 
                : 'Powerful and reliable virtual private servers with exceptional performance and complete control.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vpsPlans.map((plan) => (
              <Card key={plan.name} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="flex justify-center items-end mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Cpu className="h-5 w-5 text-primary" />
                    <span>{plan.cpu}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 18h-6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3ZM8 18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" /></svg>
                    </div>
                    <span>{plan.ram}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HardDrive className="h-5 w-5 text-primary" />
                    <span>{plan.storage}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MonitorPlay className="h-5 w-5 text-primary" />
                    <span>{plan.bandwidth}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-innova-darkBlue via-innova-lightBlue to-innova-violet hover:opacity-90 transition-opacity">
                    {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-muted/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'لماذا تختار خوادم VPS من إنوفا؟' : 'Why Choose INNOVA VPS?'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">
                    {language === 'ar' ? 'موارد مخصصة' : 'Dedicated Resources'}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'ar' 
                      ? 'موارد مضمونة لخادمك الافتراضي دون مشاركتها مع مستخدمين آخرين.' 
                      : 'Guaranteed resources for your VPS without sharing with other users.'}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">
                    {language === 'ar' ? 'تحكم كامل' : 'Full Root Access'}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'ar' 
                      ? 'تحكم كامل في خادمك مع صلاحيات الجذر الكاملة لتثبيت أي برامج تحتاجها.' 
                      : 'Complete control of your server with full root access to install any software you need.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VPSHosting;
