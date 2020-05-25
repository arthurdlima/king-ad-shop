import React from 'react';

function Product(props) {

    console.log(props);
    const { brand, thumbnail, img, price } = props;


    return (
        <div className='product'>
            <img src={thumbnail} alt='product' />
            <div>
                <p>{brand}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default Product;
