import React from 'react';
import Logo from './kingLogo.png';
import CartImg from './shoppingCart.png';

import { useSelector, useDispatch } from 'react-redux';

//To use on dispatcher to change state
import { showNav, pageRoute } from '../redux/nav/navActions';

function Header() {

    const navVisible = useSelector(state => state.navReducer.navVisible);
    const dispatch = useDispatch();

    //To update nav visiblity based on css
    let sWidth = window.innerWidth;
    //let navCss = (navVisible == true && sWidth <= 710) ? "nav-section on" : "nav-section";
    let navCss;
    let removeOnPageChange = useDispatch();

    if (navVisible == true && sWidth <= 710) {
        navCss = 'nav-section on';
    } else {
        navCss = 'nav-section';
        removeOnPageChange = function () { };
    }


    console.log(navCss);
    console.log(removeOnPageChange);
    return (
        <header>
            <div className='header-container'>
                <img src={Logo} alt="King AD Shop Logo" />
                <div className={navCss}>
                    <div onClick={()=> dispatch(showNav())} className='nav-toggle'>
                        <div className='one'></div>
                        <div className='two'></div>
                        <div className='three'></div>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a onClick={() => {
                                    dispatch(pageRoute('home'))
                                    removeOnPageChange(showNav());
                                }} href="#">Home</a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    dispatch(pageRoute('products'))
                                    removeOnPageChange(showNav());
                                }} href="#">Products</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#" className='cart-container'>
                                    <div>0</div>
                                    <img src={CartImg} alt="Shopping cart" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
