import PropTypes from 'prop-types';
import React from 'react';
import EventDetails from './EventDetails';
import { Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCreatedEvent } from '../eventReducer';

import './style.css';

const EventCreated = ({ event }) => {
  const eventUrl = `${window.location.origin}/events/${event.id}`;
  const joinEventUrl = `${window.location.origin}/events/${event.id}/join?invitationCode=${event.invitationCode}`;

  return (
    <div>
      <div className="created-event-details-container">
        <EventDetails event={event} style={{margin: '32px'}} />
      </div>
      <div className="created-event-links-container">
        <p>Your event url (remember your password if you want to be able to update event score when it finish)</p>
        <Well bsSize="small"><a href={eventUrl}>{eventUrl}</a></Well>
        <p>Inviation url (share it if you want to invite people for this event)</p>
        <Well bsSize="small"><a href={joinEventUrl}>{joinEventUrl}</a></Well>
      </div>
    </div>
  );
}

EventCreated.propTypes = {
  event: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    event: getCreatedEvent(state)
  };
};

export default connect(mapStateToProps)(EventCreated);
