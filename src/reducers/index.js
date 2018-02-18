import { combineReducers } from 'redux';
import { formReducer, modelReducer } from 'react-redux-form';

const izard = combineReducers({
  user: modelReducer('user'),
  userForm: formReducer('user')
});

export default izard;
