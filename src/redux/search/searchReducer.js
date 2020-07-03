import { UPDATE_SEARCH_FIELD, CLEAR_SEARCH_FIELD } from './theSearch';

const initialState = {
    searchfield: ''
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_FIELD:
            return {
                searchfield: action.payload.target.value
            }
        case CLEAR_SEARCH_FIELD:
            return {
                searchfield: ''
            }
        default: return state;
    }
}

export default searchReducer;
