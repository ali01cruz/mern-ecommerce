import actionTypes from "../actions/action-types";

//una funcion que recibe dos parametros el estado inicial y una accion 
export const productListReducer = (state = {products:[]}, action) => {
    switch(action.type){
        case actionTypes.PRODUCTS_LIST_REQUEST: 
            return {loading: true, products: []};
        case actionTypes.PRODUCTS_LIST_SUCESS: 
            return {
                loading: false,
                products: action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page
            }
        case actionTypes.PRODUCTS_LIST_FAIL:
            return {
                loading: false, error: action.payload
            }
        default: 
            return state;
    }
}