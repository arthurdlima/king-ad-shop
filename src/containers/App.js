import React from 'react';
import { Fragment } from 'react';
import './App.css';

//import redux from 'redux';
import store from '../redux/store';
import { Provider } from 'react-redux';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


function App() {
    return (
        <Provider store={store}>
          <Fragment>
              <Header />
              <Hero />
              <Footer />
          </Fragment>
      </Provider>
  );
}

export default App;
