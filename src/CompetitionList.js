import React from 'react';
import Competition from './Competition';

class CompetitionList extends React.Component {
  state = {
    competitions: []
  };

  componentDidMount() {
    const { handleResponse } = this;
    fetch('/rest/api/competitions')
      .then(response => response.json())
      .then(handleResponse);
  }

  handleResponse = response => {
    this.setState({
      competitions: response
    });
  }

  render() {
    const { competitions } = this.state;
    return competitions.map(competition => (
        <Competition {...competition} />
    ));
  }

}

export default CompetitionList;
