import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_TOTAL } from './theCart';

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
};

export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
};

export const updateTotal = (value) => {
    return {
        type: UPDATE_TOTAL,
        payload: value
    }
};
