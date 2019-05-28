import React, { Component } from 'react';
import axios from 'axios';
// React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import Map from '../components/Map';
import SearchForm from '../components/SearchForm';
import QueryList from '../components/QueryList';

class Home extends Component {
  state = {
    searchAddress: '',
    searchCity: '',
    searchState: '',
    searchZip: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    axios
      .get('/weather', {
        searchAddress: this.state.searchAddress,
        searchCity: this.state.searchCity,
        searchState: this.state.searchState,
        searchZip: this.state.searchZip,
      })
      .then(response => {
        console.log('weather response: ');
        console.log(response);
      })
      .catch(error => {
        console.log('login error: ')
        console.log(error);    
      })
  }

  render() {
    return (
      <div>
        <Container className="mt-3" fluid>
          <Row>
            <Col>
              <Map />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col lg={3}>
              <SearchForm 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </Col>
            <Col>
              <QueryList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
