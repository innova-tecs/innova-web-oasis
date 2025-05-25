
import React, { useRef, useEffect, useState } from 'react';
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
  isVisible: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, highlight, index, isVisible }) => {
  return (
    <Card 
      className={`h-full transition-all duration-700 hover:shadow-xl transform ${
        isVisible 
          ? 'animate-[featureSlideUp_0.8s_ease-out_calc(var(--index)*0.15s)_forwards] opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${
        highlight 
        ? 'border-primary border-2 shadow-md hover:scale-105' 
        : 'bg-secondary/5 hover:bg-secondary/10 transition-colors border border-border hover:scale-102'
      }`}
      style={{"--index": index} as React.CSSProperties}
    >
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-innova-purple to-innova-blue text-white mb-4 transition-all duration-500 hover:rotate-12 hover:scale-110 animate-[iconPulse_3s_ease-in-out_infinite_calc(var(--index)*0.5s)]">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 transition-colors duration-300 hover:text-primary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        {highlight && (
          <Badge variant="outline" className="mt-4 border-primary text-primary animate-[badgePulse_2s_ease-in-out_infinite]">
            Premium
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
    <section id="features" className="py-20 scroll-mt-16" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-[titleFadeIn_1s_ease-out_forwards] opacity-100' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-innova-darkBlue to-innova-brightPurple bg-clip-text text-transparent">
            {t('features.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            نوفر أحدث تقنيات الاستضافة مع لوحات تحكم متميزة لتلبية احتياجاتك المختلفة
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-innova-purple to-innova-blue mx-auto animate-[lineGrow_1.5s_ease-out_0.5s_forwards] scale-x-0"></div>
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
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'animate-[controlPanelsSlideUp_1s_ease-out_1s_forwards] opacity-100' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold mb-6">لوحات تحكم احترافية</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-[panelFloat_6s_ease-in-out_infinite]">
              <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center animate-[panelIconSpin_8s_linear_infinite]">
                <LayoutDashboard size={40} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">cPanel</h4>
              <span className="text-sm text-muted-foreground">سهل الاستخدام وقوي</span>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-[panelFloat_6s_ease-in-out_infinite_3s]">
              <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center animate-[panelIconSpin_8s_linear_infinite_4s]">
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
