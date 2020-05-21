import { createStore } from 'redux';
import navReducer from './nav/navReducer';

const store = createStore(navReducer);

export default store;
