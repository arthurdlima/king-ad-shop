import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/products/productActions';

import SearchBox from './SearchBox';
import Product from './Product';

function ProductsSection({ productObj, fetchProducts }) {
    useEffect(() => {
        fetchProducts();
    }, [])

    if (productObj.loading) {
        return (
            <div>
                <SearchBox />
                <section className='products-grid'>
                    <h2 style={{textAlign: "center",
                        paddingTop: "4rem"}}>Loading
                    </h2>
                </section>
            </div>
        );
    } else if (productObj.error) {
        return (
            <div>{productObj.error}</div>
        );
    } else {
        const prodCompArray = productsToComponents(productObj.products);
        return (
            <div>
                <SearchBox />
                <section className='products-grid'>
                    {prodCompArray}
                </section>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        productObj: state.productReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
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
    return componentsArray;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsSection);
