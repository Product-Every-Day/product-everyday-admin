import { takeEvery, all, fork } from 'redux-saga/effects'
import cartSaga from './cartSaga'

function* rootSaga() {
    yield all(
        [
            fork(cartSaga)
        ]
    )
}

export default rootSaga