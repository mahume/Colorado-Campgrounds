import React, { Component } from 'react';
import axios from 'axios';
// React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import Map from '../components/Map';
import CampsiteCard from '../components/CampsiteCard';
import campsites from '../campsites.json';


class Home extends Component {
  state = {
    campsiteSelected: 1,
  };

  displayCampground = e => {
    const { value } = e.target.attributes.index;
    this.setState({
      campsiteSelected: parseInt(value),
    })
  }

  render() {
    return (
      <div>
        <Container className="mt-3" fluid>
          <Row>
            <Col 
              lg={12} 
              xl={8}
              className="mb-3"
            >
              <Map displayCampground={this.displayCampground} />
            </Col>
            <Col 
              lg={12}
              xl={4}
              className="pl-0 mt-0 mb-3"
            >
              <CampsiteCard 
                campsiteSelected={this.state.campsiteSelected}
              />          
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
