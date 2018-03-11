import axios from 'axios';

export const createEvent = (data) => {
  return axios.post('https://demo2071198.mockable.io/events', data)
    .then(response => response.data);
}
