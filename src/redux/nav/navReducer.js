import { SHOW_NAV } from './theNav';

const navIncialState = {
    navVisible: false
};

const navReducer = (state = navIncialState, action) => {
    switch (action.type) {
        case SHOW_NAV: return {
            ...state,
            navVisible: !state.navVisible
        }
        default: return state;
    }
};

export default navReducer;