import React from 'react';
import EventDetails from './EventDetails';
import { connect } from 'react-redux';
import { fetchEvent } from '../EventActions';
import { getEventDetails } from '../eventReducer';

class EventDetailsView extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { eventId, fetchEvent } = this.props;
    fetchEvent(eventId);
  }

  render() {
    return (
      <EventDetails { ...this.props } />
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
)(EventDetailsView);
