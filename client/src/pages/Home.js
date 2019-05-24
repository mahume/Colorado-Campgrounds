import React, { Component } from 'react';
import Map from '../components/Map';
import QueryList from '../components/QueryList';

class Home extends Component {
  state = {};
  
  render() {
    return (
      <div>
        <Map />
        <div className="container">
          <QueryList />
        </div>
      </div>
    );
  }
}

export default Home;
