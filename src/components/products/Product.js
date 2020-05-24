import React from 'react';

function Product(img,price,prodName) {
    img = 'http://localhost:3000/products-data/images/1-watches/watch_1_small.jpg';
    price = '$200';
    prodName = 'watch';
    return (
        <div className='product'>
            <img src={img} alt='product' />
            <div>
                <p>{prodName}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default Product;
