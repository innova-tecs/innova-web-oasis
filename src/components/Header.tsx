
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: React.FC = () => {
  const { t, language, setLanguage, dir } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            {/* INNOVA Logo */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-innova-purple to-innova-blue flex items-center justify-center text-white font-bold">
              I
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-innova-purple to-innova-blue bg-clip-text text-transparent">
              INNOVA
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            {t('home')}
          </a>
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            {t('features')}
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
            {t('pricing')}
          </a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
            {t('testimonials')}
          </a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors">
            {t('faq')}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={dir === 'rtl' ? 'end' : 'start'}>
              <DropdownMenuItem onClick={() => setLanguage('ar')}>
                العربية {language === 'ar' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English {language === 'en' && '✓'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="bg-gradient-to-r from-innova-purple to-innova-blue hover:opacity-90 transition-opacity hidden md:inline-flex">
            {t('hero.cta')}
          </Button>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-b border-border animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-foreground hover:text-primary transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('home')}
            </a>
            <a 
              href="#features" 
              className="text-foreground hover:text-primary transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('features')}
            </a>
            <a 
              href="#pricing" 
              className="text-foreground hover:text-primary transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('pricing')}
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-primary transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('testimonials')}
            </a>
            <a 
              href="#faq" 
              className="text-foreground hover:text-primary transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('faq')}
            </a>
            <Button className="bg-gradient-to-r from-innova-purple to-innova-blue hover:opacity-90 transition-opacity w-full">
              {t('hero.cta')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
