import React from 'react';
import { Fragment } from 'react';
import Logo from './kingLogo.png';

function Header() {


    /*
     
     { showNav } = this.props;

     let applyNavClass = "";

     function handleNav {
        newNav = !showNav;

        if(newNav) {
            document.body.style.overflow = "hidden";
            applyNavClass = "on";
        } else {
            document.body.style.overflow = "initial";
            applyNavClass = "";
        }
        
        (do something to update redux showNav state, then exit function)

        remember to use -> className= 'nav-section ${applyNavClass}' onClick ={handleNav}
    } 
     
     */


 

    return (
        <Fragment>
            <header>
                <div className='header-container'>
                    <img src={Logo} alt="King AD Shop Logo" />
                    <div className='nav-section on'>
                        <div className='nav-toggle'>
                            <div className='one'></div>
                            <div className='two'></div>
                            <div className='three'></div>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Products</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;
