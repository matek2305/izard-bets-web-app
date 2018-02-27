export const createEvent = (data) => {
  console.log('POST /events');
  return delay(500).then(() => data);
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
