

import actionsTypes from './actionTypes';
import { getProducts, updateProduct, deleteProduct, getProductById } from '../../services/productServices';
import { logout } from './userActions.js';

export const listProducts = (keyword = '', pageNumber='') => {
    return async(dispatch) => {
        try {

            dispatch({type: actionsTypes.PRODUCT_LIST_REQUEST});
            const data = await getProducts(keyword, pageNumber);
            dispatch({
                type : actionsTypes.PRODUCT_LIST_SUCESS,
                payload : data,
            });
        } catch (error) {
            dispatch({
                type : actionsTypes.PRODUCT_LIST_FAIL,

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

export const productUpdate = (id) => {
    return async(dispatch) => {
        try {
            dispatch({type: actionsTypes.PRODUCT_LIST_REQUEST});
            const data = await updateProduct(id);
            dispatch({
                type : actionsTypes.PRODUCT_LIST_SUCESS,
                payload : data,
            });
        } catch (error) {
            dispatch({
                type : actionsTypes.PRODUCT_LIST_FAIL,
                payload :
                    error.response  && error.response.data.message
                    ? error.response.data.message
                    : error.message
            });
        }
    };
}

export const productDelete = (id) => {
    return async(dispatch) => {
        try {
            dispatch({type: actionsTypes.PRODUCT_LIST_REQUEST});
            const data = await deleteProduct(id);
            dispatch({
                type : actionsTypes.PRODUCT_LIST_SUCESS,
                payload : data,
            });
        } catch (error) {
            dispatch({
                type : actionsTypes.PRODUCT_LIST_FAIL,
                payload :
                    error.response  && error.response.data.message
                    ? error.response.data.message
                    : error.message
            });
        }
    };

}
