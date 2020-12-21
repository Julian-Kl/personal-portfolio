import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LanguageHelper } from './languages/LanguageHelper';
import { ThemeHelper } from './themes/ThemeHelper';

ReactDOM.render(
  <React.StrictMode>
    <LanguageHelper>
      <ThemeHelper>
        <App />
      </ThemeHelper>
    </LanguageHelper>
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals(console.log);  // Prints the performance of the site in the console
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
