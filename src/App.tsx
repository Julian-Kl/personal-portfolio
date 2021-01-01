import React, { useEffect, useRef } from 'react';
import './css/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Navbar } from './domain/navbar/Navbar';
import { BottomNav } from './domain/bottomnav/BottomNav';
import { ContactButton } from './components/ContactButton';
import { Start } from './domain/start/Start';
import { Skills } from './domain/skills/Skills';

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
      height: '100vh',
    },
    skills: {
      height: '100vh',
    }
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  const scrollPosition = useRef<number>(0);

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

  /*
  const scroll = () => {
    let container = document.getElementById('scroll-container')!;

    setTimeout((e) => {
      if (container.scrollTop < scrollPosition.current) {
        console.log("Scroll nach oben");
        if (startRef.current) {
          startRef.current.scrollIntoView({ behaviour: 'smooth' });
        }
      } else if (container.scrollTop > scrollPosition.current) {
        console.log("Scroll nach unten");
        if (skillsRef.current) {
          skillsRef.current.scrollIntoView({ behaviour: 'smooth' });
        }
      }
      setTimeout(() => {
        scrollPosition.current = container.scrollTop;
      }, 101)

    }, 100);
  }
*/


  const handleScroll = (e: { target: any; }) => {
    console.log("scroll")
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log("bottom")


      setTimeout((e) => {
        if (element.scrollTop < scrollPosition.current) {
          console.log("Scroll nach oben");
          if (startRef.current) {
            startRef.current.scrollIntoView({ behaviour: 'smooth' });
          }
        } else if (element.scrollTop > scrollPosition.current) {
          console.log("Scroll nach unten");
          if (skillsRef.current) {
            skillsRef.current.scrollIntoView({ behaviour: 'smooth' });
          }
        }
        setTimeout(() => {
          scrollPosition.current = element.scrollTop;
        }, 101)
      }, 100);
    }
  }


  return (
    <div className={classes.siteContainter}>
      <Router>
        <Navbar navigation={navigation} />
        <div id="scroll-container" className={classes.scrollContainer} onScroll={handleScroll}>
          <div id="scroll-content">
            <div ref={startRef} className={classes.site}>
              <Start />
            </div>
            <div ref={aboutRef} className={classes.site}>
              <p>About</p>
            </div>
            <div ref={skillsRef} className={classes.site}>
              <Skills />
            </div>
            <div ref={portfolioRef} className={classes.site}>
              <p>Portfolio</p>
            </div>
            <div ref={contactRef} className={classes.site}>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <BottomNav>
          <ContactButton navigation={navigation} />
        </BottomNav>
      </Router>
    </div>
  );
}

export default App;