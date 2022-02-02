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
    userLogin: userLoginReducer, //esta linea no estaba, tener en cuenta
    userRegister: userRegisterReducer,//agregado para ver lo del registro de cuenta nueva
    productUpdate : productUpdateReducer,
});

export default reducer;
