import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import App from './App';
<<<<<<< Updated upstream
=======
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> Stashed changes
import { LanguageHelper } from './languages/LanguageHelper';
import { ThemeHelper } from './themes/ThemeHelper';
import { NavigationHelper } from './navigation/NavigationHelper';

ReactDOM.render(
  <React.StrictMode>
    <LanguageHelper>
      <ThemeHelper>
        <Router>
          <NavigationHelper>
            <App />
          </NavigationHelper>
        </Router>
      </ThemeHelper>
    </LanguageHelper>
  </React.StrictMode>,
  document.getElementById('root')
);
