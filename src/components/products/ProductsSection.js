import React from 'react';
import SearchBox from './SearchBox';
import Product from './Product';

function ProductsSection() {
    const result = getProducts();

    return (
        <div>
            <SearchBox />
            <section className='products-grid'>
                <Product />
            </section>
        </div>
    );
}

function getProducts(someSearchText) {
    fetch('http://localhost:3000/products-data/product-list.json')
        .then(res => res.json())
        .then(data => console.log(data));
}



export default ProductsSection;