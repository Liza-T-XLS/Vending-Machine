// == Imports

import React from 'react';

import './app.scss';

import Header from '../Header';
import VM from '../../containers/VM';
import Footer from '../Footer';

// == Component

const App = () => (
  <>
  <div className="app">
    <Header />
    <VM />
    <Footer />
  </div>
  <div className="noScreenRotation">
    <p>Oops! Sorry, screen rotation does not work with our vending machine...</p>
  </div>
  </>
);

// == Export

export default App;
