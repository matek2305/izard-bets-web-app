import { combineReducers } from 'redux';

const nothing = (state = {}, action) => state;

const izard = combineReducers({
  nothing
});

export default izard;
