import { SHOW_NAV, PAGE_ROUTE } from './theNav';

const navIncialState = {
    navVisible: false,
    pageRoute: 'home'
};

const navReducer = (state = navIncialState, action) => {
    switch (action.type) {
        case SHOW_NAV: return {
            ...state,
            navVisible: !state.navVisible
        }
        case PAGE_ROUTE: return {
            ...state,
            pageRoute: action.text
        }
        default: return state;
    }
};

export default navReducer;