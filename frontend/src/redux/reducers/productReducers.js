import actionTypes from "../actions/actionType";

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

export const productReviewCreateReducer = (state = {}, action) => {
  console.log("hola entre")
    switch (action.type) {
      case actionTypes.PRODUCT_CREATE_REVIEW_REQUEST:
        return { loading: true };
      case actionTypes.PRODUCT_CREATE_REVIEW_SUCCESS:
        return { loading: false, success: true };
      case actionTypes.PRODUCT_CREATE_REVIEW_FAIL:
        return { loading: false, error: action.payload };
      case actionTypes.PRODUCT_CREATE_REVIEW_RESET:
        return {};
      default:
        return state;
    }
  };

  export const productDetailsReducer = (
    state = { product: { reviews: [] } },
    action
  ) => {
    console.log("hola entre en product");
    switch (action.type) {
      case actionTypes.PRODUCT_DETAILS_REQUEST:
        return { loading: true, ...state };
      case actionTypes.PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload };
      case actionTypes.PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };