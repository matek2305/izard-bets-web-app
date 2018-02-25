import * as api from '../api';

export const createEvent = (data) => (dispatch) =>
  api.createEvent(data).then(response => {
    dispatch({
      type: 'CREATE_EVENT_SUCCESS',
      response
    });
  });
