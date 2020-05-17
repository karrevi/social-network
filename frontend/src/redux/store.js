import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers/index.js';
import { save, load } from 'redux-localstorage-simple';
import thunk from 'redux-thunk';

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = applyMiddleware(
    save(), thunk // Saving done here
)(createStore);

const store = createStoreWithMiddleware(
    reducer,
    load(), // Loading done here
    composeEnhancers(),
);

export default store;
