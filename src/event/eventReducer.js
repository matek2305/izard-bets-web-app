const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_EVENT_SUCCESS':
      return { created: { ...action.response } };
    case 'FETCH_EVENT_SUCCESS':
      return { ...action.response };
    case 'CREATE_EVENT_FAILED':
      return { error: { ...action.response.error }};
    default:
      return state;
  }
};

export default eventReducer;

export const getCreatedEvent = (state) => state.event.created;
export const getEventDetails = (state) => state.event;
