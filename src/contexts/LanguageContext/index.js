import React, { useState, useEffect } from 'react';
import * as RNLocalize from 'react-native-localize';
import en from '../../lang/text_en.json';

const languageObject = { en };

export const LanguageContext = React.createContext();

export const LanguageContextProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const textValues = {
    ...languageObject[currentLanguage]
  };

  useEffect(() => {
    const bestDeviceLanguage = RNLocalize.findBestAvailableLanguage(Object.keys(languageObject));
    setCurrentLanguage(bestDeviceLanguage?.languageTag || 'en');
  }, []);

  return (
    <LanguageContext.Provider value={textValues}>
      {children}
    </LanguageContext.Provider>
  );
};
