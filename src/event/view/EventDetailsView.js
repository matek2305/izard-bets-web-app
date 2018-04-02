import React from 'react';
import EventDetails from './EventDetails';
import { Well } from 'react-bootstrap';
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
    const { event } = this.props;
    return (
      <div>
        <div className="created-event-links-container">
          <p>Your event url (remember your password if you want to be able to update event score when it finish)</p>
          <Well bsSize="small">
            <a href={window.location.href}>{window.location.href}</a>
          </Well>
        </div>
        <EventDetails event={event} />
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
)(EventDetailsView);
