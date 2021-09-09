// == Imports

import React from 'react';

import './app.scss';

import Header from '../Header';
import VM from '../../containers/VM';
import Footer from '../Footer';

// == Component

const App = () => (
  <div className="app">
    <Header />
    <VM />
    <Footer />
  </div>
);

// == Export

export default App;
