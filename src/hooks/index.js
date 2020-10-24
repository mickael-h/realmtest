import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { storesContext } from '../contexts/StoresContext';

export const useStores = () => useContext(storesContext);
export const useLocale = () => useContext(LanguageContext);
