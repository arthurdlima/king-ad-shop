import React from 'react';
import { Fragment } from 'react';
import airplane from './airplane.jpg';

function Hero() {
    return (
        <Fragment>
            <section className='hero-section'>
                <div className='hero-container'>
                    <div>
                        <h2>Shipping products worldwide!</h2>
                        <p>
                            Our products will be shipped to
                            all countries at no cost!
                        </p>
                    </div>
                    <img src={airplane} alt="airplane" />
                </div>
            </section>
        </Fragment>
    );
}

export default Hero;
