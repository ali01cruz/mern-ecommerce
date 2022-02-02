import actionsTypes from "../actions/actionTypes";


//una funcion que recibe dos parametros el estado inicial y una accion 
export const productListReducer = (state = {products:[]}, action) => {
    switch(action.type){

        case actionsTypes.PRODUCT_LIST_REQUEST: 
            return {loading: true, products: []};
        case actionsTypes.PRODUCT_LIST_SUCESS: 
            return {
                loading: false,
                products: action.payload.products,
                pages: action.payload.pages,

                page: action.payload.page,
            };
        case actionsTypes.PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default: 
            return state;
    }
};

export const productUpdateReducer = (state = {product:""}, action) => {
    switch(action.type){
        case actionsTypes.PRODUCT_LIST_REQUEST: 
            return {loading: true, product: ""};
        case actionsTypes.PRODUCT_LIST_SUCESS: 
            return {
                loading: false,
                product: action.payload.product,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case actionsTypes.PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default: 
            return state;
    }
};