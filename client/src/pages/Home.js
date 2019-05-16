import React, { Component } from 'react';
import Map from '../components/Map';
import ResultsList from '../components/ResultsList';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav />
        <Map />
        <div className="container">
          <ResultsList />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;
