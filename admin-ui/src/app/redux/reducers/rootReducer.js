import {combineReducers} from 'redux'
import { snackBarStateData } from './snackBarReducer'
import { spinnerStateData } from './spinnerReducer'
import { categoryStateData } from './categoryReducer'
import { cartStateData } from './cartReducer'

export default combineReducers({
    spinnerStateData,
    snackBarStateData,
    categoryStateData,
    cartStateData
})