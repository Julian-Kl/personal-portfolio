import React, { useRef } from 'react';
import './css/App.scss';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Navbar } from './domain/navbar/Navbar';
import { BottomNav } from './domain/bottomnav/BottomNav';
import { ContactButton } from './components/ContactButton';
import { Start } from './domain/start/Start';
import { About } from './domain/about/About';
import { Skills } from './domain/skills/Skills';
import { Portfolio } from './domain/portfolio/Portfolio';
import { Contact } from './domain/contact/Contact';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    siteContainter: {
      maxWidth: '1620px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    scrollContainer: {
      overflow: 'scroll',
      height: '90%',
      width: '100%',
      maxWidth: '1620px',
      display: 'block',
      position: 'absolute',
      bottom: '0',
      marginLeft: 'auto',
      marginRight: 'auto'
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

  const navigation = (target: "start" | "about" | "skills" | "portfolio" | "contact" ) => {
    switch(target){
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
    <div className={classes.siteContainter}>
        <Navbar navigation={navigation} />
        <div id="scroll-container" className={classes.scrollContainer}>
          <div id="scroll-content">
            <div ref={startRef} className={classes.site}>
              <Start />
            </div>
            <div ref={aboutRef} className={classes.site}>
              <About/>
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
        </div>
        <BottomNav>
          <ContactButton navigation={navigation} />
        </BottomNav>
    </div>
  );
}

export default App;