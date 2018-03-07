import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const EventCreated = ({ event }) => (
  <div>
    <h1>Event created!</h1>
    <pre>response: { JSON.stringify(event, null, 2) }</pre>
  </div>
);

EventCreated.propTypes = {
  event: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    event: state.event
  };
};

export default connect(mapStateToProps)(EventCreated);
