import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from "./theProducts"

const initialState = {
    loading: false,
    products: [],
    error: ''
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                loading: false,
                products: [],
                error: action.payload
            }
    }
}

export default reducer;