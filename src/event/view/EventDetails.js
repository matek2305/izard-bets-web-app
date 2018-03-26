import React from 'react';
import Moment from 'react-moment';

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
  </div>
);

export default EventDetails;
