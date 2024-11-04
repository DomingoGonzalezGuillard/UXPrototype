import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from '../locales/en.json';
import es from '../locales/es.json';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  translations: Record<string, string>;
};

const translationsMap: Record<string, Record<string, string>> = {
  en,
  es,
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  translations: es,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [translations, setTranslations] = useState<Record<string, string>>(es);

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLanguage = await AsyncStorage.getItem('selectedLanguage');
      if (storedLanguage) {
        setLanguage(storedLanguage);
        setTranslations(translationsMap[storedLanguage]);
      }
    };
    loadLanguage();
  }, []);

  const updateLanguage = async (lang: string) => {
    setLanguage(lang);
    setTranslations(translationsMap[lang]);
    await AsyncStorage.setItem('selectedLanguage', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
