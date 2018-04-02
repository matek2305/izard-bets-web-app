import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';
import BetList from '../../common/BetList';

import './style.css';

const EventDetails = ({ event }) => (
  <div className="event-details-container">
    <div className="event-date-container">
      <Moment date={event.date} format="DD MMMM YYYY" />
      <Moment date={event.date} format="HH:mm" />
    </div>
    <div className="event-teams-container">
      <span className="team-name home-team">{event.homeTeamName}</span>
      <span className="versus">VS</span>
      <span className="team-name away-team">{event.awayTeamName}</span>
    </div>
    { event.bets &&
      <div className="event-bets-container">
        <BetList { ...event } />
      </div>
    }
  </div>
);

EventDetails.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventDetails;
