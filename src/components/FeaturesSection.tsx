
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Rocket, 
  Clock, 
  HeadphonesIcon, 
  Shield 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-secondary/5 hover:bg-secondary/10 transition-colors rounded-xl p-6 border border-border">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-innova-purple to-innova-blue text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
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
    }
  ];
  
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('features.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-innova-purple to-innova-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
