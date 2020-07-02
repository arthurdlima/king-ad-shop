import { combineReducers } from 'redux'
import navReducer from './nav/navReducer';
import productReducer from './products/productReducer';
import cartReducer from './cart/cartReducer';

export const rootReducer = combineReducers({
    navReducer: navReducer,
    productReducer: productReducer,
    cartReducer: cartReducer
});
