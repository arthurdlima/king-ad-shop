import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/products/productActions';
// for cart state
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, updateTotal } from '../../redux/cart/cartActions';

import SearchBox from './SearchBox';
import Product from './Product';

function ProductsSection({ productObj, fetchProducts }) {
    const searchState = useSelector(state => state.searchReducer.searchfield);
    const cart = useSelector(state => state.cartReducer);
    const cartDispatch = useDispatch();

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
        let prodCompArray;
        // if user typed into searchfield, render results. Else, render all json.
        if(searchState.length) {
            const filteredProducts = productObj.products.filter(prod => {
                return prod.brand.toLowerCase().includes(searchState.toLowerCase());
            });
            prodCompArray = productsToComponents(filteredProducts, cartDispatch);
            console.log(prodCompArray)
            if(prodCompArray.length === 0){
                return (
                    <div>
                        <SearchBox />
                        <section className='products-grid'>
                            <h2> Oops.. no products found :( </h2>
                        </section>
                    </div>
                );
            }
            return (
                <div>
                    <SearchBox />
                    <section className='products-grid'>
                        {prodCompArray}
                    </section>
                </div>
            );
        }
        prodCompArray = productsToComponents(productObj.products, cartDispatch);
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

function productsToComponents(productsArray, cartDispatch) {
    const componentsArray = productsArray.map(brand => {
        return (
            <div key = {brand.id} onClick={()=> {
                    prodCompItem(brand.id, productsArray, cartDispatch);
                }}>
                <Product key={brand.id}
                    brand={brand.brand}
                    thumbnail={brand.thumbnail}
                    img={brand.img}
                    price={brand.price}
                />
            </div>
        );
    });
    return componentsArray;
}

function prodCompItem (brandId, productsArray, cartDispatch) {
    productsArray.map(prod => {
        if(prod.id === brandId) {
            cartDispatch(addToCart(prod));
            cartDispatch(updateTotal(prod.price));
        }
    });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsSection);
