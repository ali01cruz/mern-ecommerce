import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducers';

const initialState = {};

const middleware = [thunk];

//recibe como parametro un reducer y opcionalmente un 
//estado inicial 
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;