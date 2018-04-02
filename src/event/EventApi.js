import axios from 'axios';

export const createEvent = (data) => {
  return axios
    .post('https://demo2071198.mockable.io/events', data)
    .then(response => response.data);
}

export const fetchEvent = (id) => {
  return axios
    .get(`http://localhost:9000/events/${id}`)
    .then(response => response.data);
}
