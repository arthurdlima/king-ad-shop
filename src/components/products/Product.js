import React from 'react';

function Product(img,price,prodName) {

    return (
        <div className='product'>
            <img src={img} alt='product image'/>
            <p>{price}</p>
            <p>{prodName}</p>
        </div>
    );
}

export default Product;
