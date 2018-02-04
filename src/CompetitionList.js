import React from 'react';

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
    const competitionItems = this.state.competitions
      .map(competition => <li>{competition.name}</li>);

    return (
      <ul>
        {competitionItems}
      </ul>
    )
  }

}

export default CompetitionList;
