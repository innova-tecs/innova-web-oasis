
import ar from './ar';
import en from './en';
import { Language, TranslationsType } from './types';

export const translations: Record<Language, TranslationsType> = {
  ar,
  en
};

export * from './types';
