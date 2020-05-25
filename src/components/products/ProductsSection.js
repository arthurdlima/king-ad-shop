import React from 'react';
import SearchBox from './SearchBox';
import Product from './Product';

function ProductsSection() {

    const componentsArray = getProducts();


    return (
        <div>
            <SearchBox />
            <section className='products-grid'>
                {}
            </section>
        </div>
    );
}

function getProducts(someSearchText) {

    const brandsArray = fetch('http://localhost:3000/products-data/product-list.json')
                            .then(res => res.json())
                            .then(data => {
                                const d = data.products[0].brands;
                                return productsToComponents(d);
                            });

    return brandsArray;
}

function productsToComponents(productsArray) {

    const componentsArray = productsArray.map(brand => {

        return (
            <Product key={brand.id}
                brand={brand.brand}
                thumbnail={brand.thumbnail}
                img={brand.img}
                price={brand.price}
            />
        );
    });
   
    return <div>{componentsArray}</div>;
}



export default ProductsSection;