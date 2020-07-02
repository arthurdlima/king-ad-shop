import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, updateTotal, removeFromCart } from '../../redux/cart/cartActions';

function CartItem(props) {
    const { id, brand, thumbnail, price, itemTypeCount } = props;
    console.log("props!!!",props)
    const btnDispatch = useDispatch();

    return (
        <div className='cart-item'>
            <img src={thumbnail} alt='cart item' />
            <div>
                <p>{brand}</p>
                <p>${price}</p>
                <p>amount {itemTypeCount}</p>
            </div>
            <div>
                <button onClick={()=> {
                        btnDispatch(removeFromCart(props));
                        btnDispatch(updateTotal(-price));
                    }} className='cart-btn' type="button">-</button>
                <button onClick={()=> {
                        btnDispatch(addToCart(props));
                        btnDispatch(updateTotal(price));
                    }} className='cart-btn' type="button">+</button>
            </div>
        </div>
    );
}



export default CartItem;
