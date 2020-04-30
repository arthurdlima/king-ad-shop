import React from 'react';
import { Fragment } from 'react';
import Logo from './kingLogo.png';

function Header() {
    return (
        <Fragment>
            <header>
                <div className='header-container'>
                    <img src={Logo} alt="King AD Shop Logo"/>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;
