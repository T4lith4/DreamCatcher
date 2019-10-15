import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';
//set a variiable for initial sotre state
const initialState = {};
//assign a vaariable for the thunk middleware
const middleWare = [thunk];
//create a basic store
const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
//export store
export default store;

/*
Add this when testing:

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';
//set a variiable for initial sotre state
const initialState = {};
//assign a vaariable for the thunk middleware
const middleWare = [thunk];
//create a basic store
const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleWare),
    window.REDUX_DEVTOOLS_EXTENSION_COMPOSE ?
    window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({
       actionsCreators
        }) : compose
    )
);
//export store
export default store; */