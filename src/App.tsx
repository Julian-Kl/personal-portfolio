import React, { useState, useMemo} from 'react';
import './Style/App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Navbar } from './domain/navbar/Navbar';


const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <div>
        <p>Hello I'm Julian. This is my portfolio</p>
      </div>
    </React.Fragment>
  );
}

export default App;