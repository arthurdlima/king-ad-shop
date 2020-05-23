import React from 'react';

function Product(img,price,prodName) {
    img = 'some image';
    price = '$200';
    prodName = 'watch';
    return (
        <div className='product'>
            <img src={img} alt='product'/>
            <p>{price}</p>
            <p>{prodName}</p>
        </div>
    );
}

export default Product;
