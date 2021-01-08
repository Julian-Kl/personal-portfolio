import React, { useRef } from 'react';
import './css/App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Navbar } from './domain/navbar/Navbar';
import { BottomNav } from './domain/bottomnav/BottomNav';
import { ContactButton } from './components/ContactButton';
import { Start } from './domain/start/Start';
import { About } from './domain/about/About';
import { Skills } from './domain/skills/Skills';
import { Portfolio } from './domain/portfolio/Portfolio';
import { LegalNotice } from './domain/legalNotice/LegalNotice';
import { Contact } from './domain/contact/Contact';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    siteContainer: {
      maxWidth: '1620px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    scrollContainer: {
      overflow: 'scroll',
      height: '90%',
      width: '100%',
      display: 'block',
      position: 'absolute',
      bottom: '0',
    },
    site: {
      minHeight: '100vh',
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();

  const startRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const skillsRef = useRef<any>(null);
  const portfolioRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  const navigation = (target: "start" | "about" | "skills" | "portfolio" | "contact" | "legalNotice") => {
    switch (target) {
      case "start": {
        startRef.current.scrollIntoView({ behaviour: 'smooth' });
        break;
      }
      case "about": {
        aboutRef.current.scrollIntoView({ behaviour: 'smooth' });
        break;
      }
      case "skills": {
        skillsRef.current.scrollIntoView({ behaviour: 'smooth' });
        break;
      }
      case "portfolio": {
        portfolioRef.current.scrollIntoView({ behaviour: 'smooth' });
        break;
      }
      case "contact": {
        contactRef.current.scrollIntoView({ behaviour: 'smooth' });
        break;
      }
    }
  }

  return (
    <React.Fragment>
      <Router>
        <div className={classes.siteContainer}>
          <Navbar navigation={navigation} />
        </div>
        <div className={classes.scrollContainer}>
          <div className={classes.siteContainer}>
            <Switch>
              <Route exact path="/">
                <div id="scroll-content">
                  <div ref={startRef} className={classes.site}>
                    <Start />
                  </div>
                  <div ref={aboutRef} className={classes.site}>
                    <About />
                  </div>
                  <div ref={skillsRef} className={classes.site}>
                    <Skills />
                  </div>
                  <div ref={portfolioRef} className={classes.site}>
                    <Portfolio />
                  </div>
                  <div ref={contactRef} className={classes.site}>
                    <Contact />
                  </div>
                </div>
              </Route>
              <Route exact path="/legal">
                <LegalNotice />
              </Route>
            </Switch>
          </div>
        </div>
        <div className={classes.siteContainer}>
          <BottomNav>
            <ContactButton navigation={navigation} />
          </BottomNav>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;