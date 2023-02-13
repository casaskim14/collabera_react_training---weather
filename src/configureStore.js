import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import logger from './middlewares/loggerMiddleware';
import error from './middlewares/errorMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [logger, error];

const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default configureStore;
