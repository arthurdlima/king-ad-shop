import React from 'react';
import { Fragment } from 'react';
import './App.css';

import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductsSection from '../components/products/ProductsSection';
import Footer from '../components/Footer';
import CartSection from '../components/cartSection/CartSection'

import { useSelector } from 'react-redux';

function App() {

    const pageRoute = useSelector(state => state.navReducer.pageRoute);
    let routeToRender;

    if (pageRoute === 'home') {
        routeToRender = <Hero />;
    } else if (pageRoute === 'products') {
        routeToRender = <ProductsSection />;
    } else if (pageRoute === 'cart') {
        routeToRender = <CartSection />;
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
