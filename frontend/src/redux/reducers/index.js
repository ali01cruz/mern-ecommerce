import {combineReducers} from 'redux';
import {productListReducer, productUpdateReducer} from './productReducers';

//varios reducers
import {
    userDeleteReducer,
    userDetailsReducer,
    userListReducer,
    userLoginReducer,
    userRegisterReducer,
    userUpdateProfileReducer,
    userUpdateReducer,
  } from './userReducers';
  
const reducer = combineReducers({
    productList : productListReducer,

    productUpdate : productUpdateReducer,
});

export default reducer;
