import axios from 'axios';

export const createEvent = (data) => {
  return axios.post('http://demo2071198.mockable.io/events', data)
    .then(response => response.data);
}
