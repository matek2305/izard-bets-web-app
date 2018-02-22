import React from 'react';
import moment from 'moment';
import InputMoment from 'input-moment';
import { FormGroup, Col, Row, ControlLabel, FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import 'input-moment/dist/input-moment.css';
import './EventForm.css';

const EventForm = () => (
  <div className="event-form-container">
    <h1 className="event-form-header">
      Event details
    </h1>
    <form className="event-form">
      <Row>
        <Col sm={6}>
          <FormGroup controlId="formHomeTeam">
            <ControlLabel>Home team</ControlLabel>
            <FormControl type="text" placeholder="enter home team name"/>
          </FormGroup>

          <FormGroup controlId="formAwayTeam">
            <ControlLabel>Away team</ControlLabel>
            <FormControl type="text" placeholder="enter away team name"/>
          </FormGroup>

          <FormGroup controlId="formEventPassword">
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" placeholder="enter password"/>
          </FormGroup>

          <FormGroup controlId="formEventPasswordConfirm">
            <ControlLabel>Confirm password</ControlLabel>
            <FormControl type="password" placeholder="confirm your password"/>
          </FormGroup>

          <FormGroup controlId="formEventDesc">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="enter description"
              className="event-form-desc"
            />
          </FormGroup>
        </Col>

        <Col sm={6}>
          <FormGroup controlId="formEventDate">
            <ControlLabel>When</ControlLabel>
            <InputMoment moment={moment()} className="event-form-date-picker" />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col sm={6} className="event-form-btn-col">
          <Button type="submit" bsSize="large">Create your event</Button>
        </Col>
      </Row>
    </form>
  </div>
);

export default EventForm;
