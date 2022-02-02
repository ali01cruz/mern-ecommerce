import actionsTypes from './actionTypes';
import { getProducts, updateProduct, deleteProduct } from '../../services/productServices';

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
