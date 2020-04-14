import { ADD_TO_CART, REMOVE_FROM_CART,} from "../actions/cartAction";

const initialState = {
    cart: [],
    product: [
        {name:'Lenovo laptop', id: 1},
        {name:'Asus laptop', id: 2},
        {name:'Apple laptop', id: 3},
        {name:'Dell laptop', id: 4},
        {name:'Hp laptop', id: 5},
    ]
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
             const newId = action.id;
             const newCart = [...state.cart,newId]
             return {...state,cart : newCart};

        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item !== id)
            return {...state,cart: remainingCart}

        default:
        return state;
    }
}
export default cartReducer;