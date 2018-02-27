import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ width: 400 }}>
    <Link to="./createEvent">
      <Button bsStyle="primary" bsSize="large" block>
        Create event
      </Button>
    </Link>
  </div>
);

export default Home;
