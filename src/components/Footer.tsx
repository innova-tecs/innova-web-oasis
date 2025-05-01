
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary pt-16 pb-8 text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* INNOVA Logo */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-innova-purple to-innova-blue flex items-center justify-center text-white font-bold">
                I
              </div>
              <span className="text-xl font-bold text-white">
                INNOVA
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              {t('language') === 'ar' 
                ? 'نوفر حلول استضافة موثوقة وسريعة لمساعدة عملائنا على تحقيق النجاح عبر الإنترنت.'
                : 'We provide reliable and fast hosting solutions to help our customers achieve success online.'}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">{t('language') === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">{t('home')}</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-white transition-colors">{t('features')}</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">{t('pricing')}</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-white transition-colors">{t('testimonials')}</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-white transition-colors">{t('faq')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">{t('language') === 'ar' ? 'خدماتنا' : 'Our Services'}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">
                {t('language') === 'ar' ? 'استضافة مشتركة' : 'Shared Hosting'}
              </a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">
                {t('language') === 'ar' ? 'استضافة VPS' : 'VPS Hosting'}
              </a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">
                {t('language') === 'ar' ? 'استضافة مخصصة' : 'Dedicated Hosting'}
              </a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">
                {t('language') === 'ar' ? 'استضافة ووردبريس' : 'WordPress Hosting'}
              </a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">
                {t('language') === 'ar' ? 'تسجيل النطاقات' : 'Domain Registration'}
              </a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">{t('contact')}</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                {t('language') === 'ar' ? 'البريد الإلكتروني: support@innova.com' : 'Email: support@innova.com'}
              </li>
              <li className="text-muted-foreground">
                {t('language') === 'ar' ? 'الهاتف: +966 123 456 789' : 'Phone: +966 123 456 789'}
              </li>
              <li className="text-muted-foreground">
                {t('language') === 'ar' ? 'العنوان: الرياض، المملكة العربية السعودية' : 'Address: Riyadh, Saudi Arabia'}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} INNOVA. {t('footer.rights')}
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground text-sm hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
