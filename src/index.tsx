import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
