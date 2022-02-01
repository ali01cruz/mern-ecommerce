import {combineReducers} from 'redux';
import {productListReducer} from './productReducers.js';

//varios reducers
const reducer = combineReducers({
    productList : productListReducer
});

export default reducer;
