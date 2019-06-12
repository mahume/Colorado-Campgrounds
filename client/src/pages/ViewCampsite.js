import React from 'react';
// React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import IndividualCampsite from '../components/CampsiteViewCard';
import campsites from '../campsites.json';

class ViewCampsite extends React.Component {
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
              xl={2}
              className="mb-3"
            >
            </Col>
            <Col 
              lg={12}
              xl={8}
              className="pl-0 mt-0 mb-3"
            >
            <Col 
              lg={12} 
              xl={2}
              className="mb-3"
            ></Col>
              <IndividualCampsite 
                campsiteSelected={this.state.campsiteSelected}
              />          
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ViewCampsite;