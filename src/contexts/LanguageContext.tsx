import { createContext } from 'react';

interface Dictionary {
    "contactButton": string,
    "start": {
      "title": string,
      "headline": string,
      "description": string
    },
    "about": {
      "title": string,
      "description": string,
      "stations": {
        "one": {
          title: string,
          institution: string,
          duration: string,
          location: string,
          icon: string,
          link: string,
          infos: string[]
        },
        "two": {
          title: string,
          institution: string,
          duration: string,
          location: string,
          icon: string,
          link: string,
          infos: string[]
        },
        "three": {
          title: string,
          institution: string,
          duration: string,
          location: string,
          icon: string,
          link: string,
          infos: string[]
        }
      }
    },
    "skills": {
      "title": string,
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
    },
    "portfolio": {
      "title": string
    },
    "contact": {
      "title": string,
      "mail": string,
      "telephone": string
    },
    "legal notice": {
      "title": string,
      "information": string
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
