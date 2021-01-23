import en from './en.json';
import de from './de.json';
import { Dictionary } from '../contexts/LanguageContext';

interface dictionaryListInterface {
  en: Dictionary,
  de: Dictionary
}

export const dictionaryList = { en, de };