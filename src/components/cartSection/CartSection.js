import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cart/cartActions';
import CartItem from './CartItem';

function CartSection() {

    const cart = useSelector(state => state.cartReducer);
    const cartDispatch = useDispatch();
    const cartCompArray = mapCartToComp(cart);
    console.log(cart);

    if(cart.cartCount > 0) {
        return (
            <section className='cart-section'>
                <div className='cart-flex'>
                    {cartCompArray}
                </div>
                <div id='cart-total'>total: $100</div>
            </section>
        );
    } else {
        return (
            <section className='cart-section'>
                <h1> Cart is empty! </h1>
            </section>
        );
    }

}

function mapCartToComp(cartt) {
    const cartCompArray = cartt.cart.map((prod,index) => {
        return (
            <div key = {prod.id}>
                <CartItem key={prod.id}
                    brand={prod.brand}
                    thumbnail={prod.thumbnail}
                    price={prod.price}
                    itemTypeCount={cartt.itemTypeCount[index]}
                />
            </div>
        );

    });
    return cartCompArray;
}


export default CartSection;
