import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const EventCreated = ({ event }) => (
  <div>
    <div style={{
      display: 'table',
      textAlign: 'center',
      width: '100vw'
    }}>
      <span style={{
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'right',
        textTransform: 'uppercase',
        fontSize: '48px',
        fontWeight: 'bold',
        width: '50%'
      }}>{event.homeTeamName}</span>
      <span style={{
        fontSize: '128px',
        fontWeight: 'bold',
        margin: '24px'
      }}>VS</span>
      <span style={{
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'left',
        textTransform: 'uppercase',
        fontSize: '48px',
        fontWeight: 'bold',
        width: '50%'
      }}>{event.awayTeamName}</span>
    </div>
  </div>
);

EventCreated.propTypes = {
  event: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    event: state.event.created
  };
};

export default connect(mapStateToProps)(EventCreated);
