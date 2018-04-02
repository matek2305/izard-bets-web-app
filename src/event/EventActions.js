import { push } from 'react-router-redux';
import * as api from './EventApi';

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
