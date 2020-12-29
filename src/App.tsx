import React, { useContext } from 'react';
import './css/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Navbar } from './domain/navbar/Navbar';
import { BottomNav } from './domain/bottomnav/BottomNav';
import { ContactButton } from './components/ContactButton';
import { About } from './domain/about/about';
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
    }
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.siteContainter}>
      <Router>
      <Navbar />
      <div className={classes.scrollContainer}>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
      </div>
      <BottomNav>
        <ContactButton />
      </BottomNav>
    </Router>
    </div>
  );
}

export default App;