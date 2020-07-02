import { ADD_TO_CART, REMOVE_FROM_CART } from './theCart';

const initialState = {
    cart: [],
    itemTypeCount: [],
    cartCount: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            state.cart.map(inCart => {
                if(inCart.id === )
            })
        case REMOVE_FROM_CART:
            return {
                loading: false,
                products: action.payload,
                error: ''
            }
        default: return state;
    }
}

/*
return {
    cart: state.cart.push(action.payload),
    itemTypeCount: state.itemTypeCount.push(1),
    cartCount: state.cartCount + 1
}
*/
export default cartReducer;
