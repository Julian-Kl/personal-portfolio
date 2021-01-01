import en from './en.json';
import de from './de.json';

interface dictionaryList {
  en: {
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
        "titles": string[],
        "companies": string[],
        "durations": string[],
        "locations": string[],
        "icons": string[],
        "link": string[],
        "infos": object
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
      "title": string,
      "projects": {
        "titles": string[],
        "descriptions": string[],
        "liveLinks": string[],
        "githubLinks": string[]
      }
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
  },
  de: {
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
        "titles": string[],
        "companies": string[],
        "durations": string[],
        "locations": string[],
        "icons": string[],
        "link": string[],
        "infos": object
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
      "title": string,
      "projects": {
        "titles": string[],
        "descriptions": string[],
        "liveLinks": string[],
        "githubLinks": string[]
      }
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
}

export const dictionaryList = { en, de };