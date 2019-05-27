import React, { Component } from 'react';
// React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import Map from '../components/Map';
import SearchForm from '../components/SearchForm';
import QueryList from '../components/QueryList';

class Home extends Component {
  state = {};
  
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
              <SearchForm />
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
