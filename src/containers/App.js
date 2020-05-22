import React from 'react';
import { Fragment } from 'react';
import './App.css';

import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductsSection from '../components/products/ProductsSection';
import Footer from '../components/Footer';

import { useSelector } from 'react-redux';


function App() {

    const pageRoute = useSelector(state => state.pageRoute);
    let routeToRender = '';

    if (pageRoute == 'home') {
        routeToRender = <Hero />;
    } else if (pageRoute == 'products') {
        routeToRender = <ProductsSection />;
    } else {
        routeToRender = '';
    }


    return (
        <Fragment>
            <Header />
            {routeToRender}
            <Footer />
        </Fragment>
    );
}

export default App;
