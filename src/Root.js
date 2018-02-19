import React from 'react';
import { Provider } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import EventForm from './EventForm'

const Root = ({ store }) => (
  <Provider store={store}>
    <Grid>
      <Row>
        <Col lg={2}></Col>
        <Col lg={6} className="align-middle">
          <EventForm/>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </Grid>
  </Provider>
);

export default Root;
