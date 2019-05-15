import React, { Component } from 'react';
import Map from '../components/Map';
import ListGroup from '../components/ListGroup';

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Map />
        <div className="container">
          <ListGroup />
        </div>
      </div>
    )
  }
}

export default Home;
