import actionTypes from './actionType';
export const logout = () => {
    return (dispatch) => {
      localStorage.removeItem('userInfo');
      dispatch({ type: actionTypes.USER_LOGIN_LOGOUT });
      dispatch({ type: actionTypes.USER_DETAILS_RESET });
      dispatch({ type: actionTypes.ORDER_LIST_MY_RESET });
      dispatch({ type: actionTypes.USER_LIST_RESET });
    };
  };