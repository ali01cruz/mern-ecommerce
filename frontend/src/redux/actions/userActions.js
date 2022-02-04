import {        
    loginUser,
    registerUser,            
  } from '../../services/userServices';
  import actionTypes from './action-types';
  
  export const login = (email, password) => {
    return async (dispatch) => {
      try {
        dispatch({
          type: actionTypes.USER_LOGIN_REQUEST,
        });
        const data = await loginUser(email, password);
        dispatch({
          type: actionTypes.USER_LOGIN_SUCCESS,
          payload: data,
        });
        localStorage.setItem('userLogin', JSON.stringify(data));
      } catch (error) {
        dispatch({
          type: actionTypes.USER_LOGIN_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
  };
  
  export const logout = () => {
    return (dispatch) => {
      dispatch({ type: actionTypes.USER_LOGIN_LOGOUT });
      localStorage.removeItem('userLogin');
    };
  };
  
  export const register = (name, email, password) => {
    return async (dispatch) => {
      try {
        dispatch({
          type: actionTypes.USER_REGISTER_REQUEST,
        });
        const data = await registerUser(name, email, password);
        dispatch({
          type: actionTypes.USER_REGISTER_SUCCESS,
          payload: data,
        });
        dispatch({
          type: actionTypes.USER_LOGIN_SUCCESS,
          payload: data,
        });
        localStorage.setItem('userLogin', JSON.stringify(data));
      } catch (error) {
        dispatch({
          type: actionTypes.USER_REGISTER_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
  };
 
  