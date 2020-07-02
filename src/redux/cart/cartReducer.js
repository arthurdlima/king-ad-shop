import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_TOTAL } from './theCart';

const initialState = {
    cart: [],
    itemTypeCount: [],
    cartCount: 0,
    total: 0
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
            window.alert('En: Product added to cart!!!'+
            '\nPt: Produto adicionado ao carrinho!!!');
            return {
                cart: [...state.cart, action.payload],
                itemTypeCount: [...state.itemTypeCount, 1],
                cartCount: state.cartCount + 1,
                total: state.total
            }

        case REMOVE_FROM_CART:
            // remove item from cart if item is LAST one
            let newState2;
            for(let i=0; i<state.cart.length;i++) {
                if(state.cart[i].id === action.payload.id && state.itemTypeCount[i] === 1){
                    let cartt = [...state.cart];
                    let itc = [...state.itemTypeCount];
                    cartt.splice(i,1);
                    itc.splice(i,1);
                    newState2 = {
                        cart: [...cartt],
                        itemTypeCount: [...itc],
                        cartCount: state.cartCount - 1,
                        total: state.total
                    }
                    window.alert('En: Product removed from cart!!!'+
                    '\nPt: Produto removido do carrinho!!!');
                break;
                // remove item amount from cart if more then 1
                } else if (state.cart[i].id === action.payload.id && state.itemTypeCount[i] > 1) {
                    let itc = [...state.itemTypeCount];
                    itc[i] = itc[i]-1;
                    newState2 = {
                        ...state,
                        itemTypeCount: [...itc],
                    }
                    break;
                }
            }
            if(newState2 != undefined) {
                return newState2;
            }
            return state;

        case UPDATE_TOTAL:
            console.log(action.payload);
            return {
                ...state,
                total: state.total + action.payload
            }

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
