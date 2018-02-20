import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const EventForm = () => (
  <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
    <Form horizontal style={{ width: '500px', margin: '16px' }}>
      <FormGroup controlId="formHomeTeam">
        <Col componentClass={ControlLabel} sm={4}>
          Home team
        </Col>
        <Col sm={8}>
          <FormControl type="text" placeholder="home team name"/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formAwayTeam">
        <Col componentClass={ControlLabel} sm={4}>
          Away team
        </Col>
        <Col sm={8}>
          <FormControl type="text" placeholder="away team name"/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formEventDate">
        <Col componentClass={ControlLabel} sm={4}>
          Date
        </Col>
        <Col sm={8}>
          <FormControl type="date"/>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={4} sm={8}>
          <Button type="submit">Add event</Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
);

export default EventForm;
