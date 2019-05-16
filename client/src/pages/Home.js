import React, { Component } from 'react';
import Map from '../components/Map';
import ResultsList from '../components/ResultsList';

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Map />
        <div className="container">
          <ResultsList />
        </div>
      </div>
    )
  }
}

export default Home;
