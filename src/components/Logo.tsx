
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  // تحديد حجم الشعار بناءً على الخيار
  const logoSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  // تحديد النص بناءً على الحجم
  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <Link to="/" className="flex items-center gap-2">
      <div className={`${logoSizes[size]} overflow-hidden rounded-full`}>
        <img 
          src="/lovable-uploads/27f05499-d819-4713-8c98-e559ee8afe0f.png" 
          alt="INNOVA Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <span className={`${textSizes[size]} font-bold bg-gradient-to-r from-innova-lightBlue via-innova-violet to-innova-brightPurple bg-clip-text text-transparent`}>
        INNOVA
      </span>
    </Link>
  );
};

export default Logo;
