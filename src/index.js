import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import Home from './home/Home';
import CreateEvent from './event/view/CreateEvent';
import EventCreated from './event/view/EventCreated';
import rootReducer from './rootReducer';
import registerServiceWorker from './registerServiceWorker';

import './style.css';

const history = createHistory();
const middlewares = [thunk, routerMiddleware(history)];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="view-container">
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
        <Route path={process.env.PUBLIC_URL + '/createEvent'} component={CreateEvent}/>
        <Route path={process.env.PUBLIC_URL + '/eventCreated'} component={EventCreated}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
