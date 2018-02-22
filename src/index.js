import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from "./components/Root";
import configureStore from "./configureStore";

const store = configureStore();
render(
  <Root store={store}/>,
  document.getElementById('root')
);

registerServiceWorker();
