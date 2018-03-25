import React from 'react';

const EventDetails = ({ match }) => {
  let { params } = match;
  return (
    <div>
      <h1>Event details view</h1>
      <pre>id: {params.id}</pre>
    </div>
  )
};

export default EventDetails;
