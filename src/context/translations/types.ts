
// Types for the language context and translations
export type Language = 'ar' | 'en';

export type TranslationKey = keyof typeof import('./ar').default;

export interface TranslationsType {
  [key: string]: string;
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: string;
}
