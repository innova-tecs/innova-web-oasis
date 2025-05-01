
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">معلومات عنا</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-innova-purple to-innova-blue mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-innova-purple to-innova-blue flex items-center justify-center">
              <div className="text-white text-6xl font-bold">INNOVA</div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">من نحن</h3>
            <p className="mb-6 text-muted-foreground">
              نحن شركة رائدة في مجال استضافة المواقع الإلكترونية والخدمات السحابية. منذ تأسيسنا في عام 2010، قدمنا حلولًا موثوقة لأكثر من 50,000 عميل حول العالم.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
            <p className="mb-6 text-muted-foreground">
              نسعى لأن نكون الشريك الأمثل في رحلة نجاح عملائنا عبر الإنترنت، من خلال تقديم خدمات استضافة ذات جودة عالية وبأسعار تنافسية.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
                <h4 className="font-bold text-lg">+50,000</h4>
                <p className="text-muted-foreground">عميل حول العالم</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
                <h4 className="font-bold text-lg">99.9%</h4>
                <p className="text-muted-foreground">ضمان وقت التشغيل</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
                <h4 className="font-bold text-lg">24/7</h4>
                <p className="text-muted-foreground">دعم فني متواصل</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
                <h4 className="font-bold text-lg">+15</h4>
                <p className="text-muted-foreground">سنوات من الخبرة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
