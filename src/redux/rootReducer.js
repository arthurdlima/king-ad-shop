import { combineReducers } from 'redux'
import navReducer from './nav/navReducer';
import productReducer from './products/productReducer';
import cartReducer from './cart/cartReducer';
import searchReducer from './search/searchReducer'

export const rootReducer = combineReducers({
    navReducer: navReducer,
    productReducer: productReducer,
    cartReducer: cartReducer,
    searchReducer: searchReducer
});
