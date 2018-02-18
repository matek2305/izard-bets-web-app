import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { modelReducer, formReducer } from 'react-redux-form';

import LoginFrom from './forms/login-form'


const store = createStore(combineReducers({
  user: modelReducer('user'),
  userForm: formReducer('user')
}));

class App extends React.Component {
  render() {
    return (
        <Provider store={ store }>
          <LoginFrom/>
        </Provider>
    )
  }
}

export default App;
