import { createContext } from 'react';

interface Dictionary {
  "contactButton": string,
  "about": string,
  "skillCards": {
    "one": {
      "title": string,
      "skills": string[],
      "levels": number[]
    },
    "two": {
      "title": string,
      "skills": string[],
      "levels": number[]
    },
    "three": {
      "title": string,
      "skills": string[],
      "levels": number[]

    }
  }
}

interface LanguageContext {
  userLanguage: 'en' | 'de',
  setUserLanguage: Function,
  dictionary: Dictionary
}

export const LanguageContext = createContext<LanguageContext | null>(null);

export const LanguageContextProvider = LanguageContext.Provider;

export const LanguageContextConsumer = LanguageContext.Consumer;
