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
  primaryLight: '#b084f4',
  primaryMain: '#7540dd',
  primaryDark: '#4d2b90',
  secondaryLight: '#b084f4',
  secondaryMain: '#4d2b90',
  secondaryDark: '#4d2b90'
}
export const light: themeModeSpecifics = {
  paletteType: 'light',
  primaryLight: '#b084f4',
  primaryMain: '#80d6ff',
  primaryDark: '#4d2b90',
  secondaryLight: '#b084f4',
  secondaryMain: '#4d2b90',
  secondaryDark: '#4d2b90'
}

export const useStyles = makeStyles({
  backgroundDark: {
    height: '100vh',
    background: 'linear-gradient(140deg, #000714 20%, #2e1956 80%, #4d2b90)',
  },
  backgroundLight: {
    height: '100vh',
    background: 'linear-gradient(140deg, #c1ebff 20%, #a7e2fe 40%, #80d6ff)',
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