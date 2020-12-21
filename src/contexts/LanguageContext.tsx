import { createContext } from 'react';

interface LanguageContext {
    userLanguage: 'en' | 'de',
    setUserLanguage: Function,
    dictionary: object
}

export const LanguageContext = createContext<LanguageContext | null>(null);

export const LanguageContextProvider = LanguageContext.Provider;

export const LanguageContextConsumer = LanguageContext.Consumer;
