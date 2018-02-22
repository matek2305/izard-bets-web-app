import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from './EventForm.css';

const EventForm = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Create event</h1>
    <Form horizontal className={styles.form}>
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
          Description
        </Col>
        <Col sm={8}>
          <FormControl
            className={styles.description}
            componentClass="textarea"
            placeholder="enter description"
          />
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
