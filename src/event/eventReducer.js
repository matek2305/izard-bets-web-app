const eventReducer = (state = {}, action) => {
  if (action.type === 'CREATE_EVENT_SUCCESS') {
    return {
      ...action.response
    };
  }

  return state;
};

export default eventReducer;
