
import React, { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Rocket, 
  Clock, 
  HeadphonesIcon, 
  Shield,
  Server,
  LayoutDashboard 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, highlight, index }) => {
  return (
    <Card 
      className={`h-full transition-all duration-500 hover:shadow-xl animate-[fade-in_0.5s_ease-out_calc(0.2s+var(--index)*0.1s)_both] ${
        highlight 
        ? 'border-primary border-2 shadow-md hover:transform hover:scale-105' 
        : 'bg-secondary/5 hover:bg-secondary/10 transition-colors border border-border hover:transform hover:scale-102'
      }`}
      style={{"--index": index} as React.CSSProperties}
    >
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-innova-purple to-innova-blue text-white mb-4 transition-transform duration-500 hover:rotate-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        {highlight && (
          <Badge variant="outline" className="mt-4 border-primary text-primary animate-pulse">
            Premium
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Rocket size={24} />,
      title: t('features.speed'),
      description: t('features.speed.desc')
    },
    {
      icon: <Clock size={24} />,
      title: t('features.uptime'),
      description: t('features.uptime.desc')
    },
    {
      icon: <HeadphonesIcon size={24} />,
      title: t('features.support'),
      description: t('features.support.desc')
    },
    {
      icon: <Shield size={24} />,
      title: t('features.security'),
      description: t('features.security.desc')
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "cPanel",
      description: "لوحة تحكم سهلة الاستخدام لإدارة موقعك الإلكتروني مع واجهة مستخدم سهلة وخيارات إدارة متقدمة",
      highlight: true
    },
    {
      icon: <Server size={24} />,
      title: "Plesk",
      description: "لوحة تحكم متقدمة تمكنك من إدارة خادم الويب والتطبيقات والبريد الإلكتروني بواجهة احترافية",
      highlight: true
    }
  ];
  
  return (
    <section id="features" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            نوفر أحدث تقنيات الاستضافة مع لوحات تحكم متميزة لتلبية احتياجاتك المختلفة
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-innova-purple to-innova-blue mx-auto animate-[pulse_3s_ease-in-out_infinite]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlight={feature.highlight}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center animate-[scale-in_0.6s_ease-out_0.5s_both]">
          <h3 className="text-2xl font-bold mb-6">لوحات تحكم احترافية</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border shadow-lg transition-transform hover:scale-105 duration-300">
              <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center animate-pulse">
                <LayoutDashboard size={40} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">cPanel</h4>
              <span className="text-sm text-muted-foreground">سهل الاستخدام وقوي</span>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border shadow-lg transition-transform hover:scale-105 duration-300">
              <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center animate-pulse">
                <Server size={40} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Plesk</h4>
              <span className="text-sm text-muted-foreground">للاحتياجات المتقدمة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
