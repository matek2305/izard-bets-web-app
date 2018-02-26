import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const nothing = (state = {}, action) => state;

const izard = combineReducers({
  router: routerReducer,
  nothing
});

export default izard;
