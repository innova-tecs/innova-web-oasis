
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-secondary/5 scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">معلومات عنا</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-innova-purple to-innova-blue mx-auto animate-[pulse_3s_ease-in-out_infinite]"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 animate-[scale-in_0.6s_ease-out_0.2s_both]">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-innova-purple to-innova-blue flex items-center justify-center transition-transform duration-700 hover:scale-105 group">
              <div className="text-white text-6xl font-bold transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">INNOVA</div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-[fade-in_0.6s_ease-out_0.4s_both]">
            <h3 className="text-2xl font-bold mb-4 animate-[fade-in_0.5s_ease-out_0.6s_both]">من نحن</h3>
            <p className="mb-6 text-muted-foreground animate-[fade-in_0.5s_ease-out_0.7s_both]">
              نحن شركة رائدة في مجال استضافة المواقع الإلكترونية والخدمات السحابية. منذ تأسيسنا في عام 2010، قدمنا حلولًا موثوقة لأكثر من 50,000 عميل حول العالم.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 animate-[fade-in_0.5s_ease-out_0.8s_both]">رؤيتنا</h3>
            <p className="mb-6 text-muted-foreground animate-[fade-in_0.5s_ease-out_0.9s_both]">
              نسعى لأن نكون الشريك الأمثل في رحلة نجاح عملائنا عبر الإنترنت، من خلال تقديم خدمات استضافة ذات جودة عالية وبأسعار تنافسية.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { value: "+50,000", label: "عميل حول العالم" },
                { value: "99.9%", label: "ضمان وقت التشغيل" },
                { value: "24/7", label: "دعم فني متواصل" },
                { value: "+15", label: "سنوات من الخبرة" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-card p-4 rounded-lg shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:transform hover:scale-105 animate-[fade-in_0.5s_ease-out_calc(1s+var(--index)*0.1s)_both]"
                  style={{"--index": index} as React.CSSProperties}
                >
                  <h4 className="font-bold text-lg">{stat.value}</h4>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
