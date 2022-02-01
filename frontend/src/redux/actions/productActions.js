import actionTypes from './action-types';
import {
  createAProduct,
  createAProductReview,
  deleteAProduct,
  getProductById,
  getProducts,
  getTopProducts,
  updateAProduct,
  upload,
} from '../../services/productServices';
import { logout } from './userActions';

export const listProducts = (keyword = '', pageNumber = '') => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST });
      const data = await getProducts(keyword, pageNumber);
      dispatch({
        type: actionTypes.PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

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

export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_DELETE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      await deleteAProduct(id, userInfo);
      dispatch({
        type: actionTypes.PRODUCT_DELETE_SUCCESS,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: actionTypes.PRODUCT_DELETE_FAIL,
        payload: message,
      });
    }
  };
};

export const createProduct = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_CREATE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const data = await createAProduct(userInfo);
      dispatch({
        type: actionTypes.PRODUCT_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: actionTypes.PRODUCT_CREATE_FAIL,
        payload: message,
      });
    }
  };
};

export const updateProduct = (product) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_UPDATE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const data = await updateAProduct(product, userInfo);
      dispatch({
        type: actionTypes.PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: actionTypes.PRODUCT_UPDATE_FAIL,
        payload: message,
      });
    }
  };
};

export const uploadImage = (image) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_UPLOAD_IMAGE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const data = await upload(image, userInfo);
      dispatch({
        type: actionTypes.PRODUCT_UPLOAD_IMAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_UPLOAD_IMAGE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const createProductReview = (productId, review) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_CREATE_REVIEW_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      await createAProductReview(productId, review, userInfo);
      dispatch({
        type: actionTypes.PRODUCT_CREATE_REVIEW_SUCCESS,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: actionTypes.PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };
};

export const listTopProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.PRODUCT_TOP_REQUEST });
      const data = await getTopProducts();
      dispatch({
        type: actionTypes.PRODUCT_TOP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_TOP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};


/*import actionsTypes from "./Types.js";
import getProducts from '../../services/productServices.js';

export const listProducts = (keyword = '', pageNumber='') => {
    return async(dispatch) => {
        try {
            dispatch({type: actionsTypes.PRODUCTS_LIST_REQUEST});
            const data = await getProducts(keyword, pageNumber);
            dispatch({
                type : actionsTypes.PRODUCTS_LIST_SUCESS,
                payload : data
            });
        } catch (error) {
            dispatch({
                type : actionsTypes.PRODUCTS_LIST_FAIL,
                payload :
                    error.response  && error.response.data.message
                    ? error.response.data.message
                    : error.message
            });
        }
    }
}*/