import React from 'react';
import airplane from './airplane.jpg';

function Hero() {
    return (

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
  
    );
}

export default Hero;
