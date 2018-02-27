import React from 'react';
import { Button, FormGroup, Col, Row, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import InputMoment from 'input-moment';
import moment from 'moment';
import { createEvent } from '../EventActions';

import 'input-moment/dist/input-moment.css';
import './style.css';

class CreateEvent extends React.Component {
  state = {
    homeTeamName: '',
    awayTeamName: '',
    password: '',
    passwordConfirm: '',
    description: '',
    date: moment()
  };

  render() {
    const { homeTeamName, awayTeamName, password, passwordConfirm, description, date } = this.state;
    const { dispatch } = this.props;

    return (
      <div>
        <h1 className="event-form-header">
          Event details
        </h1>
        <form className="event-form">
          <Row>
            <Col md={7} sm={12}>
              <FormGroup controlId="formHomeTeam">
                <ControlLabel>Home team</ControlLabel>
                <FormControl
                  value={homeTeamName}
                  onChange={e => this.setState({ homeTeamName: e.target.value })}
                  type="text"
                  placeholder="enter home team name"
                />
              </FormGroup>

              <FormGroup controlId="formAwayTeam">
                <ControlLabel>Away team</ControlLabel>
                <FormControl
                  value={awayTeamName}
                  onChange={e => this.setState({ awayTeamName: e.target.value })}
                  type="text"
                  placeholder="enter away team name"
                />
              </FormGroup>

              <FormGroup controlId="formEventPassword">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  value={password}
                  onChange={e => this.setState({ password: e.target.value })}
                  type="password"
                  placeholder="enter password"
                />
              </FormGroup>

              <FormGroup controlId="formEventPasswordConfirm">
                <ControlLabel>Confirm password</ControlLabel>
                <FormControl
                  value={passwordConfirm}
                  onChange={e => this.setState({ passwordConfirm: e.target.value })}
                  type="password"
                  placeholder="confirm your password"
                 />
              </FormGroup>

              <FormGroup controlId="formEventDesc">
                <ControlLabel>Description</ControlLabel>
                <FormControl
                  value={description}
                  onChange={e => this.setState({ description: e.target.value })}
                  componentClass="textarea"
                  placeholder="enter description"
                  className="event-form-desc"
                />
              </FormGroup>
            </Col>

            <Col md={5} sm={12}>
              <FormGroup controlId="formEventDate">
                <ControlLabel>When</ControlLabel>
                <InputMoment
                  moment={date}
                  onChange={m => this.setState({ date: m })}
                  className="event-form-date-picker"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={7} sm={12} className="event-form-btn-col">
              <Button
                onClick={() => dispatch(createEvent(this.state))}
                bsStyle="primary"
                bsSize="large"
                >
                Create your event
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
};

export default connect()(CreateEvent);
