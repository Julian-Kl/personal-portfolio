import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './themes/theme';

const LightTheme = React.lazy(() => import('./themes/lightTheme'));
const DarkTheme = React.lazy(() => import('./themes/darkTheme'));

const ThemeSelector: React.FC = ({ children }) => {
  var chosenTheme = '';
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    chosenTheme = 'light';
  } else {
    chosenTheme = 'dark';
  }

  return (
    <>
      <React.Suspense fallback={<></>}>
        {chosenTheme === 'light' && <LightTheme /> }
        {chosenTheme === 'dark' && <DarkTheme /> }
      </React.Suspense>
      {children}
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeSelector>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ThemeSelector>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);  // Prints the performance of the site in the console
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
