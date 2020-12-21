import React from 'react';
import './css/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './domain/navbar/Navbar';
import { ContactButton } from './components/ContactButton';
import { About } from './domain/about/about';
import { SkillCard } from './components/SkillCard';
import { ThemeHelper } from './themes/ThemeHelper';
import { LanguageHelper } from './languages/LanguageHelper';

const App: React.FC = () => {

  return (
      <ThemeHelper>
        <LanguageHelper>
          <Router>
            <Navbar/>
              <Route path="/about">
                <ContactButton />
                <About />
              </Route>
              <Route path="/skills">
                <SkillCard />
              </Route>
          </Router>
        </LanguageHelper>
      </ThemeHelper>
  );
}

export default App;