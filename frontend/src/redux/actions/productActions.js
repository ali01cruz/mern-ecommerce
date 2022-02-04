import actionTypes from "./actionType.js";
import getProducts from '../../services/productServices.js';
import  getProductById from  '../../services/productServices.js';
import { logout } from './userActions.js';

export const listProducts = (keyword = '', pageNumber='') => {
    return async(dispatch) => {
        try {
            dispatch({type: actionTypes.PRODUCTS_LIST_REQUEST});
            const data = await getProducts(keyword, pageNumber);
            dispatch({
                type : actionTypes.PRODUCTS_LIST_SUCESS,
                payload : data
            });
        } catch (error) {
            dispatch({
                type : actionTypes.PRODUCTS_LIST_FAIL,
                payload :
                    error.response  && error.response.data.message
                    ? error.response.data.message
                    : error.message
            });
        }
    }
}
export const listProductsDetails = (id) => {
    return async (dispatch) => {
      try {
        dispatch({ type: actionTypes.PRODUCT_DETAILS_REQUEST });
        const data = await getProductById(id);
        dispatch({
          type: actionTypes.PRODUCT_DETAILS_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: actionTypes.PRODUCT_DETAILS_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
  };

export const createProductReview = (id, review) => {
    return async(dispatch, getState) => {
        try {
            dispatch({type: actionTypes.PRODUCTS_LIST_REQUEST});
            const {
                userLogin: {userInfo},}=getState
            
             await createProductReview(id, review, userInfo);
        
        } catch (error) {
            const message= 
            error.response  && error.response.data.message
            ? error.response.data.message
            : error.message;

            if (message==="Not authorized, token failed"){
                dispatch(logout());
            }
            dispatch({
                type : actionTypes.PRODUCT_CREATE_REVIEW_REQUEST,
                payload : message,
            });

                   
            
            
        
    }
}
}
