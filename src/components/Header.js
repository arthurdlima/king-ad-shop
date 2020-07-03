import React from 'react';
import Logo from './kingLogo.png';
import CartImg from './shoppingCart.png';

import { useSelector, useDispatch } from 'react-redux';

//To use on dispatcher to change state
import { showNav, pageRoute } from '../redux/nav/navActions';

function Header() {

    const cartNum = useSelector(state => state.cartReducer.cartCount);

    const navVisible = useSelector(state => state.navReducer.navVisible);
    const dispatch = useDispatch();

    //To update nav visiblity based on css
    let sWidth = window.innerWidth;
    //let navCss = (navVisible == true && sWidth <= 815) ? "nav-section on" : "nav-section";
    let navCss;
    let removeOnPageChange = useDispatch();

    if (navVisible === true && sWidth <= 815) {
        navCss = 'nav-section on';
    } else {
        navCss = 'nav-section';
        removeOnPageChange = function () { };
    }

    return (
        <header>
            <div className='header-container'>
                <img onClick={() => {
                    dispatch(pageRoute('home'))
                    removeOnPageChange(showNav());
                }}src={Logo} alt="King AD Shop Logo" />
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
                                }}>Products</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                            <li>
                                <a onClick={() => {
                                        dispatch(pageRoute('cart'))
                                        removeOnPageChange(showNav());
                                    }}
                                     className='cart-container'>
                                    <div>{cartNum}</div>
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
