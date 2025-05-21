import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Server, Cpu, HardDrive, MonitorPlay } from 'lucide-react';

const DedicatedServers: React.FC = () => {
  const { t, language } = useLanguage();
  
  const dedicatedPlans = [
    {
      name: language === 'ar' ? 'أساسي' : 'Basic Dedicated',
      price: language === 'ar' ? '100 دولار' : '$100',
      period: language === 'ar' ? '/شهرياً' : '/month',
      cpu: 'Intel Xeon E-2236',
      cores: '6 Cores / 12 Threads',
      ram: '16 GB DDR4',
      storage: '2 × 512 GB NVMe SSD',
      bandwidth: '10 TB',
      icon: <Server className="h-6 w-6" />
    },
    {
      name: language === 'ar' ? 'متقدم' : 'Advanced Dedicated',
      price: language === 'ar' ? '200 دولار' : '$200',
      period: language === 'ar' ? '/شهرياً' : '/month',
      cpu: 'AMD EPYC 7302P',
      cores: '16 Cores / 32 Threads',
      ram: '64 GB DDR4',
      storage: '2 × 1 TB NVMe SSD',
      bandwidth: '30 TB',
      icon: <Server className="h-6 w-6" />
    },
    {
      name: language === 'ar' ? 'احترافي' : 'Enterprise Dedicated',
      price: language === 'ar' ? '350 دولار' : '$350',
      period: language === 'ar' ? '/شهرياً' : '/month',
      cpu: 'Intel Xeon Gold 6248R',
      cores: '24 Cores / 48 Threads',
      ram: '128 GB DDR4',
      storage: '4 × 1 TB NVMe SSD',
      bandwidth: '50 TB',
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
              {language === 'ar' ? 'خوادم مخصصة' : 'Dedicated Servers'}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'خوادم مادية مخصصة بالكامل لمشروعك مع أعلى مستويات الأداء والأمان.' 
                : 'Physical servers completely dedicated to your project with the highest levels of performance and security.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dedicatedPlans.map((plan) => (
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
                    <Cpu className="h-5 w-5 text-primary" />
                    <span>{plan.cores}</span>
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
              {language === 'ar' ? 'مميزات الخوادم المخصصة من إنوفا' : 'INNOVA Dedicated Server Features'}
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
                    {language === 'ar' ? 'أداء عالٍ' : 'High Performance'}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'ar' 
                      ? 'خوادم مخصصة حصرياً لمشروعك بكامل قدراتها وأدائها.' 
                      : 'Servers exclusively dedicated to your project with their full capacity and performance.'}
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
                    {language === 'ar' ? 'أمان متقدم' : 'Advanced Security'}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'ar' 
                      ? 'حماية متكاملة ضد الهجمات وحلول أمان احترافية لمشروعك.' 
                      : 'Comprehensive protection against attacks and professional security solutions for your project.'}
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

export default DedicatedServers;
