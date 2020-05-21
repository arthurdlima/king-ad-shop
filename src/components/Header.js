import React from 'react';
import { Fragment } from 'react';
import Logo from './kingLogo.png';

import { useSelector, useDispatch } from 'react-redux';

//To use on dispatcher to change state
import { showNav } from '../redux/nav/navActions';

function Header() {

    const navVisible = useSelector(state => state.navVisible);
    const dispatch = useDispatch();

    //To update nav visiblity based on css
    let navCss = navVisible == true ? "on" : "";

    return (
        <Fragment>
            <header>
                <div className='header-container'>
                    <img src={Logo} alt="King AD Shop Logo" />
                    <div className={'nav-section '+navCss}>
                        <div onClick={()=> dispatch(showNav())} className='nav-toggle'>
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








/*

 { navVisible } = this.props;

 let applyNavClass = "";

 function handleNav {
    vai iniciar em falso. Após clicar botão, trocar para true
    e fazer a mudança no css

    newNav = !navVisible;
                           
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


export default Header;
