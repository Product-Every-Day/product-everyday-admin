import {ADD_TO_CART, REMOVE_CART_ITEM, SET_CART, GET_CART} from "../constant";
import { showSnackBar } from "./snackBarActions";

//set cart
export const getCart = ()  => {
  return{
      type: GET_CART
  };
}

//set cart
export const setCart = (data)  => {
    return{
        type: SET_CART,
        payload: data
    };
}








// Add to Cart
export const addToCart = (product, quantity) => async (dispatch, getState) => {

    console.log("action called");
    
    const data =  {
        product: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0].url,
        stock: product.quantity,
        quantity,
    }

    return {
        type: ADD_TO_CART,
        payload:data
    }

     //localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
    // dispatch(showSnackBar({ msg: "Add to Cart Success", type: "success" }))
    
    
};
  
  // REMOVE FROM CART
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
//   // SAVE SHIPPING INFO
//   export const saveShippingInfo = (data) => async (dispatch) => {
//     dispatch({
//       type: SAVE_SHIPPING_INFO,
//       payload: data,
//     });
  
//     localStorage.setItem("shippingInfo", JSON.stringify(data));
//   };