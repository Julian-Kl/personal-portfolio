import React, { useContext } from 'react';
import './css/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './domain/navbar/Navbar';
import { ContactButton } from './components/ContactButton';
import { About } from './domain/about/about';
import { SkillCard } from './components/SkillCard';
import { LanguageContext } from './contexts/LanguageContext';

const App: React.FC = () => {


  // Text
  const languageContext = useContext(LanguageContext);

  return (
      <Router>
        <Navbar/>
          <Route path="/about">
            <ContactButton />
            <About />
          </Route>
          <Route path="/skills">
            <SkillCard title={languageContext?.dictionary.skillSection1.title!} skills={languageContext?.dictionary.skillSection1.skills!}levels={languageContext?.dictionary.skillSection1.levels!} />
          </Route>
      </Router>
  );
}

export default App;