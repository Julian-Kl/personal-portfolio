import React, { useContext } from 'react';
import './css/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './domain/navbar/Navbar';
import { ContactButton } from './components/ContactButton';
import { About } from './domain/about/about';
import { Skills } from './domain/skills/Skills';

const App: React.FC = () => {

  return (
      <Router>
        <Navbar/>
          <Route path="/about">
            <ContactButton />
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
            <ContactButton/>
          </Route>
      </Router>
  );
}

export default App;