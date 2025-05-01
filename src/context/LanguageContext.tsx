
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: string;
}

const translations = {
  ar: {
    'home': 'الرئيسية',
    'features': 'المميزات',
    'pricing': 'الأسعار',
    'testimonials': 'آراء العملاء',
    'faq': 'الأسئلة الشائعة',
    'contact': 'اتصل بنا',
    'hero.title': 'استضافة ويب سريعة وموثوقة',
    'hero.subtitle': 'أفضل خدمة استضافة مواقع الويب مع دعم فني 24/7',
    'hero.cta': 'ابدأ الآن',
    'hero.secondary': 'تعرف على المزيد',
    'features.title': 'مميزات استضافة إنوفا',
    'features.speed': 'سرعة فائقة',
    'features.speed.desc': 'خوادم SSD فائقة السرعة مع تحسينات أداء متقدمة',
    'features.uptime': 'وقت تشغيل 99.9%',
    'features.uptime.desc': 'نضمن وقت تشغيل عالٍ لموقعك على مدار الساعة',
    'features.support': 'دعم فني 24/7',
    'features.support.desc': 'فريق دعم متخصص جاهز للمساعدة على مدار الساعة',
    'features.security': 'حماية متقدمة',
    'features.security.desc': 'حماية قوية ضد الهجمات الإلكترونية والبرامج الضارة',
    'pricing.title': 'خطط الاستضافة',
    'pricing.subtitle': 'اختر خطة الاستضافة المناسبة لاحتياجاتك',
    'pricing.basic': 'أساسي',
    'pricing.standard': 'قياسي',
    'pricing.premium': 'ممتاز',
    'pricing.business': 'أعمال',
    'pricing.enterprise': 'مؤسسات',
    'pricing.custom': 'مخصص',
    'pricing.monthly': 'شهرياً',
    'pricing.yearly': 'سنوياً',
    'pricing.sar': 'ر.س',
    'pricing.cta': 'ابدأ الآن',
    'pricing.compare': 'مقارنة الخطط',
    'pricing.storage': 'مساحة تخزين',
    'pricing.bandwidth': 'نطاق ترددي',
    'pricing.domains': 'نطاقات',
    'pricing.ssl': 'شهادة SSL',
    'pricing.backups': 'نسخ احتياطي',
    'pricing.support': 'دعم فني',
    'pricing.unlimited': 'غير محدود',
    'pricing.basic.price': '29',
    'pricing.standard.price': '59',
    'pricing.premium.price': '99',
    'pricing.business.price': '199',
    'pricing.enterprise.price': '299',
    'pricing.custom.price': 'اطلب عرض سعر',
    'pricing.basic.storage': '10GB',
    'pricing.standard.storage': '25GB',
    'pricing.premium.storage': '50GB',
    'pricing.business.storage': '100GB',
    'pricing.enterprise.storage': '250GB',
    'pricing.custom.storage': 'غير محدود',
    'pricing.basic.bandwidth': '100GB',
    'pricing.standard.bandwidth': '250GB',
    'pricing.premium.bandwidth': '500GB',
    'pricing.business.bandwidth': '1TB',
    'pricing.enterprise.bandwidth': '2TB',
    'pricing.custom.bandwidth': 'غير محدود',
    'pricing.basic.domains': '1',
    'pricing.standard.domains': '3',
    'pricing.premium.domains': '5',
    'pricing.business.domains': '10',
    'pricing.enterprise.domains': '20',
    'pricing.custom.domains': 'غير محدود',
    'testimonials.title': 'آراء عملائنا',
    'testimonials.subtitle': 'استمع لما يقوله عملائنا عن خدماتنا',
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'إجابات على الأسئلة الأكثر شيوعًا',
    'faq.q1': 'ما هي خدمات الاستضافة التي تقدمونها؟',
    'faq.a1': 'نقدم مجموعة متنوعة من خدمات الاستضافة بما في ذلك استضافة المواقع المشتركة، واستضافة VPS، واستضافة الخوادم المخصصة. كل خطة تأتي مع ميزات مختلفة لتناسب احتياجاتك.',
    'faq.q2': 'هل يمكنني ترقية خطتي في المستقبل؟',
    'faq.a2': 'نعم، يمكنك ترقية خطتك في أي وقت مع الحفاظ على موقعك وبياناتك بدون انقطاع.',
    'faq.q3': 'هل تقدمون ضمان استعادة الأموال؟',
    'faq.a3': 'نعم، نحن نقدم ضمان استعادة الأموال لمدة 30 يومًا على جميع خدمات الاستضافة.',
    'faq.q4': 'هل تقدمون دعمًا فنيًا؟',
    'faq.a4': 'نعم، نحن نقدم دعمًا فنيًا على مدار الساعة طوال أيام الأسبوع من خلال الدردشة الحية والبريد الإلكتروني والهاتف.',
    'faq.q5': 'كيف يمكنني الحصول على اسم نطاق؟',
    'faq.a5': 'يمكنك شراء اسم نطاق مباشرة من خلال منصتنا، أو استخدام نطاق موجود لديك بالفعل.',
    'faq.q6': 'هل يمكنني نقل موقعي من مزود استضافة آخر؟',
    'faq.a6': 'نعم، نحن نقدم خدمة نقل مجانية لمواقع الويب من مزودي الاستضافة الآخرين.',
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'نحن هنا للإجابة على أسئلتك',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',
  },
  en: {
    'home': 'Home',
    'features': 'Features',
    'pricing': 'Pricing',
    'testimonials': 'Testimonials',
    'faq': 'FAQ',
    'contact': 'Contact Us',
    'hero.title': 'Fast and Reliable Web Hosting',
    'hero.subtitle': 'Best web hosting service with 24/7 technical support',
    'hero.cta': 'Get Started',
    'hero.secondary': 'Learn More',
    'features.title': 'INNOVA Hosting Features',
    'features.speed': 'Lightning Speed',
    'features.speed.desc': 'Ultra-fast SSD servers with advanced performance optimizations',
    'features.uptime': '99.9% Uptime',
    'features.uptime.desc': 'We guarantee high uptime for your website around the clock',
    'features.support': '24/7 Support',
    'features.support.desc': 'Dedicated support team ready to assist you anytime',
    'features.security': 'Advanced Protection',
    'features.security.desc': 'Strong protection against cyber attacks and malware',
    'pricing.title': 'Hosting Plans',
    'pricing.subtitle': 'Choose the hosting plan that suits your needs',
    'pricing.basic': 'Basic',
    'pricing.standard': 'Standard',
    'pricing.premium': 'Premium',
    'pricing.business': 'Business',
    'pricing.enterprise': 'Enterprise',
    'pricing.custom': 'Custom',
    'pricing.monthly': 'Monthly',
    'pricing.yearly': 'Yearly',
    'pricing.sar': 'SAR',
    'pricing.cta': 'Get Started',
    'pricing.compare': 'Compare Plans',
    'pricing.storage': 'Storage',
    'pricing.bandwidth': 'Bandwidth',
    'pricing.domains': 'Domains',
    'pricing.ssl': 'SSL Certificate',
    'pricing.backups': 'Backups',
    'pricing.support': 'Support',
    'pricing.unlimited': 'Unlimited',
    'pricing.basic.price': '29',
    'pricing.standard.price': '59',
    'pricing.premium.price': '99',
    'pricing.business.price': '199',
    'pricing.enterprise.price': '299',
    'pricing.custom.price': 'Request Quote',
    'pricing.basic.storage': '10GB',
    'pricing.standard.storage': '25GB',
    'pricing.premium.storage': '50GB',
    'pricing.business.storage': '100GB',
    'pricing.enterprise.storage': '250GB',
    'pricing.custom.storage': 'Unlimited',
    'pricing.basic.bandwidth': '100GB',
    'pricing.standard.bandwidth': '250GB',
    'pricing.premium.bandwidth': '500GB',
    'pricing.business.bandwidth': '1TB',
    'pricing.enterprise.bandwidth': '2TB',
    'pricing.custom.bandwidth': 'Unlimited',
    'pricing.basic.domains': '1',
    'pricing.standard.domains': '3',
    'pricing.premium.domains': '5',
    'pricing.business.domains': '10',
    'pricing.enterprise.domains': '20',
    'pricing.custom.domains': 'Unlimited',
    'testimonials.title': 'Our Customers\' Feedback',
    'testimonials.subtitle': 'Hear what our customers say about our services',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Answers to the most common questions',
    'faq.q1': 'What hosting services do you offer?',
    'faq.a1': 'We offer a variety of hosting services including shared hosting, VPS hosting, and dedicated server hosting. Each plan comes with different features to suit your needs.',
    'faq.q2': 'Can I upgrade my plan in the future?',
    'faq.a2': 'Yes, you can upgrade your plan at any time while maintaining your website and data without interruption.',
    'faq.q3': 'Do you offer a money-back guarantee?',
    'faq.a3': 'Yes, we offer a 30-day money-back guarantee on all hosting services.',
    'faq.q4': 'Do you provide technical support?',
    'faq.a4': 'Yes, we provide 24/7 technical support through live chat, email, and phone.',
    'faq.q5': 'How can I get a domain name?',
    'faq.a5': 'You can purchase a domain name directly through our platform, or use an existing domain you already own.',
    'faq.q6': 'Can I transfer my site from another hosting provider?',
    'faq.a6': 'Yes, we offer free website migration from other hosting providers.',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We\'re here to answer your questions',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Submit',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'ar',
  setLanguage: () => {},
  t: () => '',
  dir: 'rtl'
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
    
    document.documentElement.lang = language;
  }, []);
  
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};
