import axios from 'axios';

export const createEvent = (data) => {
  return axios.post('api/izard/events', data)
    .then(response => response.data);
}
