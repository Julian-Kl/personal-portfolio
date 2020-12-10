import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#80d6ff',
      main: '#42a5f5',
      dark: '#0077c2',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b084f4',
      main: '#fff',
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
