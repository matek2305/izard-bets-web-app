import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => (
  <div style={{ width: 400 }}>
    <Link to="/createEvent">
      <Button bsStyle="primary" bsSize="large" block>
        Create event
      </Button>
    </Link>
  </div>
);

export default Home;
