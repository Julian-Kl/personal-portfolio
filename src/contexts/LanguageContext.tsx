import { createContext } from 'react';

export interface Station {
  title: string,
  institution: string,
  duration: string,
  location: string,
  icon: string,
  link: string,
  linkTitle: string,
  infos: string[]
}

export interface Dictionary {
    "contactButton": string,
    "start": {
      "title": string,
      "headline": string,
      "description": string
    },
    "about": {
      "title": string,
      "description": string[],
      "stations": {
        "one": Station,
        "two": Station,
        "three": Station
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
      "contactFormNameInputLabel": string,
      "contactFormSubjectInputLabel": string,
      "contactFormEmailInputLabel": string,
      "contactFormMessageInputLabel": string,
      "contactFormSubmitButtonText": string,
      "contactFormPhoneButtonText": string,
      "mailMessageSuccess": string,
      "mailMessageError": string,
      "telephoneMessage": string
    },
    "legalNotice": {
      "title": string,
      "information": string
    }
}

interface LanguageContextInterface {
  userLanguage: 'en' | 'de',
  setUserLanguage: Function,
  dictionary: Dictionary
}

export const LanguageContext = createContext<LanguageContextInterface | null>(null);

export const LanguageContextProvider = LanguageContext.Provider;

export const LanguageContextConsumer = LanguageContext.Consumer;
