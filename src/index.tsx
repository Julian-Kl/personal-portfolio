import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const LightTheme = React.lazy(() => import('./themes/lightTheme'));
const DarkTheme = React.lazy(() => import('./themes/darkTheme'));

const ThemeSelector = ({ children }) => {
  var chosenTheme = '';
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    chosenTheme = 'light';
    console.log("Light Them");
  } else {
    chosenTheme = 'dark';
    console.log("Dark Theme");
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
      <App />
    </ThemeSelector>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);  // Prints the performance of the site in the console
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
