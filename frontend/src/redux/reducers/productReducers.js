import actionsTypes from "../actions/Types";

//una funcion que recibe dos parametros el estado inicial y una accion 
export const productListReducer = (state = {products:[]}, action) => {
    switch(action.type){
        case actionsTypes.PRODUCTS_LIST_REQUEST: 
            return {loading: true, products: []};
        case actionsTypes.PRODUCTS_LIST_SUCESS: 
            return {
                loading: false,
                products: action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page
            }
        case actionsTypes.PRODUCTS_LIST_FAIL:
            return {
                loading: false, error: action.payload
            }
        default: 
            return state;
    }
}