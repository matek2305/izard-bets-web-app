import * as api from '../api';
import { push } from 'react-router-redux';

export const createEvent = (data) => (dispatch) =>
  api.createEvent(data).then(response => {
    dispatch({
      type: 'CREATE_EVENT_SUCCESS',
      response
    });
    dispatch(push('/eventCreated'));
  });
