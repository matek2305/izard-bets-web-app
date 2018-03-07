import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import eventReducer from './event/eventReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  event: eventReducer
});

export default rootReducer;
