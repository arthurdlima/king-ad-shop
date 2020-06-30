import { combineReducers } from 'redux'
import navReducer from './nav/navReducer';
import productReducer from './products/productReducer';

export const rootReducer = combineReducers({
    navReducer: navReducer,
    productReducer: productReducer
});


