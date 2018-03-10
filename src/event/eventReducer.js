const eventReducer = (state = {}, action) => {
  if (action.type === 'CREATE_EVENT_SUCCESS') {
    return { created: { ...action.response } };
  } else if (action.type === 'CREATE_EVENT_FAILED') {
    return { error: { ...action.response.error }};
  }

  return state;
};

export default eventReducer;
