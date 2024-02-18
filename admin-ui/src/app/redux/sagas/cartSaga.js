import { call, takeEvery, take } from 'redux-saga/effects';
import { GET_CART, SET_CART } from '../constant';
import { setCart } from '../actions/cartActions';
import { BACKEND_URL } from '../../core/constants';
import { post,get } from '../../services/Common';

function* getCart() {
    console.log("saga called");
    let user = JSON.parse(localStorage.getItem('User'));
    console.log(user.id);
    const url = `${BACKEND_URL}/cart/${user.id}`
    let data =  yield get(url, [])
    console.log(data);
}

function* cartSaga() {
    console.log("cartSaga");
    yield takeEvery(GET_CART, getCart)
    //yield takeEvery(SET_CART, getCart);
}

export default cartSaga;
