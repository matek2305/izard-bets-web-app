import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { configureStore, history } from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import EventForm from './components/EventForm';
import Home from './components/Home';
import EventCreated from './components/EventCreated';

import './index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="view-container">
        <Route exact path="/" component={Home}/>
        <Route path="/createEvent" component={EventForm}/>
        <Route path="/eventCreated" component={EventCreated}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
