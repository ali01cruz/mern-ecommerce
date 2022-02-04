import {combineReducers} from 'redux';
//import {productListReducer} from './productReducers.js';

//varios reducers
import {
    userLoginReducer,
    userRegisterReducer,
  } from './userReducers';
  
const reducer = combineReducers({    
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,    
});

export default reducer;
