import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';

interface themeModeSpecifics {
  paletteType?: 'dark' | 'light';
}

export const dark: themeModeSpecifics = {
  paletteType: 'dark'
}
export const light: themeModeSpecifics = {
  paletteType: 'light'
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
        light: '#80d6ff',
        main: '#42a5f5',
        dark: '#0077c2',
        contrastText: '#fff',
      },
      secondary: {
        light: '#b084f4',
        main: '#4d2b90',
        dark: '#4d2b90',
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
        fontWeight: 400
      },
      body1: {
        fontFamily: "Cosima, Impact",
        fontWeight: 600
      },
      body2: {
        fontFamily: "Cosima, Impact",
        fontWeight: 300
      },
      button: {
        fontFamily: "Cosima, Impact",
        fontWeight: 600
      }
    },
  });
}

