
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from '@/context/ThemeContext';
import Logo from './Logo';

const Header: React.FC = () => {
  const { t, language, setLanguage, dir } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
        <div className="flex items-center">
          <Logo size="md" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
          >
            {t('home')}
          </Link>
          <Link 
            to="/features" 
            className={`transition-colors ${isActive('/features') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
          >
            {t('features')}
          </Link>
          <Link 
            to="/pricing" 
            className={`transition-colors ${isActive('/pricing') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
          >
            {t('pricing')}
          </Link>
          <Link 
            to="/#faq" 
            className={`transition-colors text-foreground hover:text-primary`}
          >
            {t('faq.menu')}
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors ${isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
          >
            {t('contact')}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleTheme}>
            {theme === 'dark' ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

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

          <Link to="/pricing">
            <Button className="bg-gradient-to-r from-innova-darkBlue via-innova-lightBlue to-innova-violet hover:opacity-90 transition-opacity hidden md:inline-flex">
              {t('hero.cta')}
            </Button>
          </Link>

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
            <Link 
              to="/" 
              className={`px-4 py-2 transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link 
              to="/features" 
              className={`px-4 py-2 transition-colors ${isActive('/features') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('features')}
            </Link>
            <Link 
              to="/pricing" 
              className={`px-4 py-2 transition-colors ${isActive('/pricing') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('pricing')}
            </Link>
            <Link 
              to="/#faq" 
              className={`px-4 py-2 transition-colors text-foreground hover:text-primary`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('faq.menu')}
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 transition-colors ${isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('contact')}
            </Link>
            <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-gradient-to-r from-innova-darkBlue via-innova-lightBlue to-innova-violet hover:opacity-90 transition-opacity w-full">
                {t('hero.cta')}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
