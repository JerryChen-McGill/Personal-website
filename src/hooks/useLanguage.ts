import React, { useState, useEffect, useCallback } from 'react';
import { Language } from '../types';

export const useLanguage = () => {
  const [lang, setLang] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('portfolio-language');
    if (saved && ['en', 'zh', 'fr'].includes(saved)) {
      return saved as Language;
    }
    
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'zh') return 'zh';
    if (browserLang === 'fr') return 'fr';
    return 'en';
  });

  // Save language preference
  useEffect(() => {
    localStorage.setItem('portfolio-language', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    const languages: Language[] = ['en', 'zh', 'fr'];
    const currentIndex = languages.indexOf(lang);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLang(languages[nextIndex]);
  }, [lang]);

  return { lang, setLang, toggleLanguage };
};

export default useLanguage;