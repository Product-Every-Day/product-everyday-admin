import { ADD_TO_CART, REMOVE_CART_ITEM, SET_CART, GET_CART } from "../constant" 

export const cartStateData = (state = { cartItems: []},action) => {
    switch (action.type) {
        case SET_CART:
        return {
            ...state,
            cartItems: action.payload,
        };
        case GET_CART:
        return {
            ...state
        };
        default:
        return state;
    }
};

export default cartStateData
