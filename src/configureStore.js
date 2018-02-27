import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const configureStore = (history) => {
  const middlewares = [thunk, routerMiddleware(history)];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
