import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { fetchEvent } from '../EventActions';
import { getEventDetails } from '../eventReducer';

class EventDetails extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { eventId, fetchEvent } = this.props;
    fetchEvent(eventId);
  }

  render() {
    const { event } = this.props;
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          <Moment date={event.date} format="DD MMMM YYYY" /><br/>
          <Moment date={event.date} format="HH:mm" />
        </div>
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
  }
};

const mapStateToProps = (state, { match }) => {
  return {
    eventId: match.params.id,
    event: getEventDetails(state),
  };
};

export default connect(
  mapStateToProps,
  { fetchEvent }
)(EventDetails);
