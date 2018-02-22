import React from 'react';
import moment from 'moment';
import InputMoment from 'input-moment';
import { FormGroup, Col, Row, ControlLabel, FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import 'input-moment/dist/input-moment.css';

const EventForm = () => (
  <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
    <h1 style={{ textAlign: 'center', margin: '32px' }}>
      Event details
    </h1>
    <form style={{ width: '800px' }}>
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
              style={{ resize: 'none', minHeight: '120px' }}
            />
          </FormGroup>
        </Col>

        <Col sm={6}>
          <FormGroup controlId="formEventDate">
            <ControlLabel>When</ControlLabel>
            <InputMoment moment={moment()} style={{ width: '100%' }}/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col sm={6} style={{ textAlign: 'right' }}>
          <Button type="submit" bsSize="large">Create your event</Button>
        </Col>
      </Row>
    </form>
  </div>
);

export default EventForm;
