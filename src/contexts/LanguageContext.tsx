import { createContext } from 'react';

interface Dictionary {
    contactButton: string,
    about: string
}

interface LanguageContext {
    userLanguage: 'en' | 'de',
    setUserLanguage: Function,
    dictionary: Dictionary
}

export const LanguageContext = createContext<LanguageContext | null>(null);

export const LanguageContextProvider = LanguageContext.Provider;

export const LanguageContextConsumer = LanguageContext.Consumer;
