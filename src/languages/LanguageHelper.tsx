import React, { useState, useContext, useMemo } from 'react';
import { dictionaryList } from './Language';
import { LanguageContextProvider, LanguageContext } from '../contexts/LanguageContext';

export const LanguageHelper: React.FC = (props) => {
    const [userLanguage, setUserLanguage] = useState<'en' | 'de'>('en');

    let dictionary = dictionaryList[userLanguage];

    const languageMemo = useMemo(() => ({
        userLanguage, setUserLanguage, dictionary
    }), [userLanguage]);

    return (
        <LanguageContextProvider value={languageMemo}>
            {props.children}
        </LanguageContextProvider>
    );
}