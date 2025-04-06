
import React, { createContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'hi' | 'ta' | 'te';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  availableLanguages: { code: Language; name: string }[];
};

// Sample translations
const translations: Translations = {
  en: {
    dashboard: 'Dashboard',
    courses: 'Courses',
    profile: 'Profile',
    settings: 'Settings',
    yourProgress: 'Your Progress',
    completedCourses: 'Completed Courses',
    inProgress: 'In Progress',
    achievements: 'Achievements',
    recommendedCourses: 'Recommended Courses',
    searchCourses: 'Search courses...',
    filterBy: 'Filter by',
    skillLevel: 'Skill Level',
    category: 'Category',
    language: 'Language',
    offline: 'Offline Available',
    downloadForOffline: 'Download for offline use',
    yourSkills: 'Your Skills',
    certificates: 'Certificates',
  },
  hi: {
    dashboard: 'डैशबोर्ड',
    courses: 'पाठ्यक्रम',
    profile: 'प्रोफाइल',
    settings: 'सेटिंग्स',
    yourProgress: 'आपकी प्रगति',
    completedCourses: 'पूरे किए गए पाठ्यक्रम',
    inProgress: 'प्रगति पर',
    achievements: 'उपलब्धियां',
    recommendedCourses: 'अनुशंसित पाठ्यक्रम',
    searchCourses: 'पाठ्यक्रम खोजें...',
    filterBy: 'फ़िल्टर करें',
    skillLevel: 'कौशल स्तर',
    category: 'श्रेणी',
    language: 'भाषा',
    offline: 'ऑफलाइन उपलब्ध',
    downloadForOffline: 'ऑफलाइन उपयोग के लिए डाउनलोड करें',
    yourSkills: 'आपके कौशल',
    certificates: 'प्रमाणपत्र',
  },
  ta: {
    dashboard: 'டாஷ்போர்டு',
    courses: 'பாடங்கள்',
    profile: 'சுயவிவரம்',
    settings: 'அமைப்புகள்',
    yourProgress: 'உங்கள் முன்னேற்றம்',
    completedCourses: 'முடிக்கப்பட்ட பாடங்கள்',
    inProgress: 'முன்னேற்றத்தில்',
    achievements: 'சாதனைகள்',
    recommendedCourses: 'பரிந்துரைக்கப்பட்ட பாடங்கள்',
    searchCourses: 'பாடங்களைத் தேடுங்கள்...',
    filterBy: 'வடிகட்டி',
    skillLevel: 'திறன் நிலை',
    category: 'வகை',
    language: 'மொழி',
    offline: 'ஆஃப்லைனில் கிடைக்கும்',
    downloadForOffline: 'ஆஃப்லைன் பயன்பாட்டிற்கு பதிவிறக்கவும்',
    yourSkills: 'உங்கள் திறன்கள்',
    certificates: 'சான்றிதழ்கள்',
  },
  te: {
    dashboard: 'డాష్‌బోర్డ్',
    courses: 'కోర్సులు',
    profile: 'ప్రొఫైల్',
    settings: 'సెట్టింగులు',
    yourProgress: 'మీ పురోగతి',
    completedCourses: 'పూర్తి చేసిన కోర్సులు',
    inProgress: 'ప్రగతిలో ఉన్నవి',
    achievements: 'విజయాలు',
    recommendedCourses: 'సిఫార్సు చేయబడిన కోర్సులు',
    searchCourses: 'కోర్సులను శోధించండి...',
    filterBy: 'ద్వారా వడపోత',
    skillLevel: 'నైపుణ్య స్థాయి',
    category: 'వర్గం',
    language: 'భాష',
    offline: 'ఆఫ్‌లైన్‌లో అందుబాటులో ఉంది',
    downloadForOffline: 'ఆఫ్‌లైన్ ఉపయోగం కోసం డౌన్‌లోడ్ చేయండి',
    yourSkills: 'మీ నైపుణ్యాలు',
    certificates: 'సర్టిఫికెట్లు',
  },
};

const availableLanguages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
];

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
  availableLanguages,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Try to get language preference from local storage
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage && ['en', 'hi', 'ta', 'te'].includes(storedLanguage)) {
      setLanguage(storedLanguage);
    } else {
      // If no stored preference, try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'hi' || browserLang === 'ta' || browserLang === 'te') {
        setLanguage(browserLang as Language);
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage: handleSetLanguage, 
        t,
        availableLanguages
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
