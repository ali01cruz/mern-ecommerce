import actionsTypes from "./Types.js";
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
}