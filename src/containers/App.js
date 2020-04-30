import React from 'react';
import { Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
//import '../index.css';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


function App() {
  return (
      <Fragment>
          <Header />
          <Hero />
          <Footer />
      </Fragment>
  );
}

export default App;
