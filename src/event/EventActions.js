import axios from 'axios';
import { push } from 'react-router-redux';
import EventsApiClient from './EventsApiClient';

const api = new EventsApiClient(axios.create({
  baseURL: 'https://demo2071198.mockable.io'
}));

export const createEvent = (data) => (dispatch) =>
  api.createEvent({ ...data, secret: data.password }).then(
    response => {
      dispatch({
        type: 'CREATE_EVENT_SUCCESS',
        response
      });
      dispatch(push(`${process.env.PUBLIC_URL}/events/${response.id}`));
    },
    error => {
      dispatch({
        type: 'CREATE_EVENT_FAILED',
        response: error.response.data
      });
    }
  );

export const fetchEvent = (id) => (dispatch) =>
  api.fetchEvent(id).then(
    response => {
      dispatch({
        type: 'FETCH_EVENT_SUCCESS',
        response
      });
    },
    error => {
      dispatch({
        type: 'FETCH_EVENT_FAILED',
        response: error.response.data
      });
    }
  );
