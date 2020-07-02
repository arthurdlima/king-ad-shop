import { ADD_TO_CART, REMOVE_FROM_CART } from './theCart';

const initialState = {
    cart: [],
    itemTypeCount: [],
    cartCount: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // If the item is already in cart, just update the type count
            let newState;
            for(let i=0; i<state.cart.length;i++) {
                if(state.cart[i].id === action.payload.id){
                    let itc = [...state.itemTypeCount];
                    itc[i] = itc[i] + 1;
                    newState = {
                        ...state,
                        itemTypeCount: [...itc]
                    }
                    break;
                }
            }


            if(newState != undefined) {
                return newState;
            }

            // if the item is not in the cart, add

            return {
                cart: [...state.cart, action.payload],
                itemTypeCount: [...state.itemTypeCount, 1],
                cartCount: state.cartCount + 1
            }

        case REMOVE_FROM_CART:
            // remove item from cart if item is LAST one
            state.cart.map((inCart, index) => {
                if (inCart.id === action.payload.id && state.itemTypeCount[index] === 1) {
                    let cartt = [...state.cart];
                    let itc = [...state.itemTypeCount];
                    cartt.splice(index,1);
                    itc.splice(index,1);
                    return {
                        cart: [...cartt],
                        itemTypeCount: [...itc],
                        cartCount: state.cartCount - 1
                    }
                } else if (inCart.id === action.payload.id) {
                    // remove item from cart if there is MORE than one
                    let itc = [...state.itemTypeCount];
                    itc[index] = itc[index] - 1;
                    return {
                        ...state,
                        itemTypeCount: [...itc]
                    }
                }
            })
        default: return state;
    }
}

/*
let array = {
    n: "hi",
    a: [1,2,3]
}

array.a.map((value,index) =>{
    if(value === 3){
        let b = [...array.a];
        b[index] = 4;
        array = {
            ...array,
            a: b
        }
    }
})


let array = {
    n: "hi",
    a: [1,2,3]
}
let b;

array.a.map((value,index) =>{
    if(value === 3){
        let c = [...array.a];
        c.splice(index,1);
        b = {
            ...array,
            a: [...c]
        }
    }
})
*/

export default cartReducer;
