import React from 'react';
import { Provider } from 'react-redux';
import EventForm from './EventForm'

const Root = ({ store }) => (
  <Provider store={store}>
    <EventForm/>
  </Provider>
);

export default Root;
