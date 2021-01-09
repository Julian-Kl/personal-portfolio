import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';

interface themeModeSpecifics {
  paletteType: 'dark' | 'light',
  primaryLight: string,
  primaryMain: string,
  primaryDark: string,
  secondaryLight: string,
  secondaryMain: string,
  secondaryDark: string
}

export const dark: themeModeSpecifics = {
  paletteType: 'dark',
  primaryLight: '#3966F9',
  primaryMain: '#3966F9',
  primaryDark: '#3966F9',
  secondaryLight: '#b084f4',
  secondaryMain: '#000714',
  secondaryDark: '#4d2b90'
}
export const light: themeModeSpecifics = {
  paletteType: 'light',
  primaryLight: '#FF7E47',
  primaryMain: '#FF7E47',
  primaryDark: '#FF7E47',
  secondaryLight: '#b084f4',
  secondaryMain: '#ffffff',
  secondaryDark: '#4d2b90'
}

export const useStyles = makeStyles({
  backgroundDark: {
    height: '100vh',
    background: 'linear-gradient(140deg, #000714 20%, #000f3f 50%, #041f79 80%, #041f79)',
  },
  backgroundLight: {
    height: '100vh',
    background: 'linear-gradient(140deg, #ace0f9 0%, #FF7E47 100%)',
  },
})

export function getTheme(theme: themeModeSpecifics) {
  return createMuiTheme({
    palette: {
      type: theme.paletteType,
      primary: {
        light: theme.primaryLight,
        main: theme.primaryMain,
        dark: theme.primaryDark,
        contrastText: '#fff',
      },
      secondary: {
        light: theme.secondaryLight,
        main: theme.secondaryMain,
        dark: theme.secondaryDark,
        contrastText: '#000',
      },
    },
    typography: {
      h1: {
        fontFamily: "Cosima, Impact",
        fontWeight: 600
      },
      h2: {
        fontFamily: "Cosima, Impact",
        fontWeight: 600
      },
      h3: {
        fontFamily: "Cosima, Impact",
        fontWeight: 600
      },
      h4: {
        fontFamily: "Cosima, Impact",
        fontWeight: 600
      },
      body1: {
        fontFamily: "Cosima, Impact",
        fontWeight: 400
      },
      body2: {
        fontFamily: "Cosima, Impact",
        fontWeight: 400
      },
      button: {
        fontFamily: "Cosima, Impact",
        fontWeight: 600
      }
    },
  });
}