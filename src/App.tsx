import React, { useState, useMemo} from 'react';
import './css/App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Navbar } from './domain/navbar/Navbar';
import { About } from './domain/about/about';


const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <About/>
    </React.Fragment>
  );
}

export default App;