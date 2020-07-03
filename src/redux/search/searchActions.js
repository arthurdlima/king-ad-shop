import { UPDATE_SEARCH_FIELD, CLEAR_SEARCH_FIELD } from './theSearch';

export const updateSearchField = (event) => {
    return {
        type: UPDATE_SEARCH_FIELD,
        payload: event
    }
};

export const clearSearchField = () => {
    return {
        type: CLEAR_SEARCH_FIELD,
        payload: ''
    }
};
