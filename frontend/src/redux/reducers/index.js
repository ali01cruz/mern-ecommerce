import {combineReducers} from 'redux';
import {productListReducer, productUpdateReducer} from './productReducers';

//varios reducers
const reducer = combineReducers({
    productList : productListReducer,
    productUpdate : productUpdateReducer,
});

export default reducer;
