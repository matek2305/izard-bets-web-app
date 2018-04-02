class EventsApiClient {

  constructor(axios) {
    this.axios = axios;
  }

  fetchEvent = (id) => {
    return this.axios
      .get(`events/${id}`)
      .then(response => response.data);
  }

  createEvent = (data) => {
    return this.axios
      .post('/events', data)
      .then(response => response.data);
  }
}

export default EventsApiClient;
