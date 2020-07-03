import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from "./theProducts"


export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

const fetchProductsSuccess = products => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

const fetchProductsFailure = error => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest);
        fetch('http://localhost:3000/product-list')
            .then(response => response.json())
            .then(res => {
                const products = res.products[0].brands;
                dispatch(fetchProductsSuccess(products));
            })
            .catch(error => {
                dispatch(fetchProductsFailure(error));
        });
    }
}
