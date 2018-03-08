import { push } from 'react-router-redux';
import * as api from './EventApi';

export const createEvent = (data) => (dispatch) =>
  api.createEvent({ ...data, secret: data.password }).then(
    response => {
      dispatch({
        type: 'CREATE_EVENT_SUCCESS',
        response
      });
      dispatch(push(`${process.env.PUBLIC_URL}/eventCreated`));
    },
    error => {
      dispatch({
        type: 'CREATE_EVENT_FAILED',
        response: error.response.data
      })
    });
