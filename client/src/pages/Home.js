import React, { Component } from 'react';
import axios from 'axios';
// React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import Map from '../components/Map';
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
      .get('/geocode', {
        city: this.state.searchCity,
      })
      .then(response => {
        console.log('Geocode response: ');
        console.log(response);
      })
      .catch(error => {
        console.log('Search error: ')
        console.log(error);    
      })
  }

  render() {
    return (
      <div>
        <Container className="mt-3" fluid>
          <Row>
            <Col lg={7}>
              <Map />
            </Col>
            <Col 
              lg={5}
              className="pl-0 mt-0"
            >
              <QueryList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
