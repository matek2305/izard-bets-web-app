import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Bet = ({ bet }) => (
  <li className="list-group-item" style={{
    display: 'flex',
    justifyContent: 'space-between'
  }}>
      <div>{bet.who}</div>
      <div>{bet.homeTeamScore}-{bet.awayTeamScore}</div>
  </li>
);

const BetList = ({ bets }) => (
  <ListGroup componentClass="ul" style={{
    width: '400px'
  }}>
    { bets.map(bet=>
      <Bet bet={bet} />
    )}
  </ListGroup>
);

export default BetList;
