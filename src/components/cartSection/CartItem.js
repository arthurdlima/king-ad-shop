import React from 'react';

function CartItem(props) {
    const { brand, thumbnail, price, itemTypeCount } = props;

    return (
        <div className='cart-item'>
            <img src={thumbnail} alt='cart item' />
            <div>
                <p>{brand}</p>
                <p>{price}</p>
                <p>amount {itemTypeCount}</p>
            </div>
            <div>
                <button className='cart-btn' type="button">-</button>
                <button className='cart-btn' type="button">+</button>
            </div>
        </div>
    );
}

export default CartItem;
