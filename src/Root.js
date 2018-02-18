import React from 'react';
import { Provider } from 'react-redux';
import LoginFrom from './LoginForm'

const Root = ({ store }) => (
  <Provider store={store}>
    <LoginFrom/>
  </Provider>
);

export default Root;
