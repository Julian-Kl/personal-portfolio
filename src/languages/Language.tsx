import en from './en.json';
import de from './de.json';

interface dictionaryList {
  en: {
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
  },
  de: {
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
}

export const dictionaryList = { en, de };
