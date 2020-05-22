import { SHOW_NAV, PAGE_ROUTE } from './theNav';
export const showNav = () => {
    return {
        type: SHOW_NAV
    }
};

export const pageRoute = (text) => {
    return {
        type: PAGE_ROUTE,
        text
    }
};
