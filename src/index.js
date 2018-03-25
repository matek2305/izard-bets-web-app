import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Home from './home/Home';
import CreateEvent from './event/view/CreateEvent';
import EventCreated from './event/view/EventCreated';
import EventDetails from './event/view/EventDetails';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

import './style.css';

const history = createHistory();
const store = configureStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter basename={process.env.PUBLIC_URL} history={history}>
      <div className="view-container">
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
        <Route path={process.env.PUBLIC_URL + '/createEvent'} component={CreateEvent}/>
        <Route path={process.env.PUBLIC_URL + '/eventCreated'} component={EventCreated}/>
        <Route path={process.env.PUBLIC_URL + '/events/:id'} component={EventDetails}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
