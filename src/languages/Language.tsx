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