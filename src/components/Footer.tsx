import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/10 pt-16 pb-6 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Logo size="sm" />
            </Link>
            <p className="text-muted-foreground mb-4">
              {language === 'ar' 
                ? 'شركة رائدة في مجال استضافة المواقع وخدمات الإنترنت منذ 2010.'
                : 'Leading web hosting and internet services company since 2010.'}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center transition-colors hover:bg-primary/10"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center transition-colors hover:bg-primary/10"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center transition-colors hover:bg-primary/10"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">{language === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('features')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('pricing')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">{language === 'ar' ? 'الخدمات' : 'Services'}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'ar' ? 'استضافة المواقع' : 'Web Hosting'}
                </Link>
              </li>
              <li>
                <Link to="/vps-hosting" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'ar' ? 'استضافة VPS' : 'VPS Hosting'}
                </Link>
              </li>
              <li>
                <Link to="/dedicated-servers" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'ar' ? 'خوادم مخصصة' : 'Dedicated Servers'}
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'ar' ? 'استضافة سحابية' : 'Cloud Hosting'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">{language === 'ar' ? 'معلومات الاتصال' : 'Contact Info'}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">info@innova.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">+971 50 000 0000</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} INNOVA. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
