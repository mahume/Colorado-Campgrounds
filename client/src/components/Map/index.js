import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../MapMarker';
import campsites from '../../campsites.json';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.11,
      lng: -105.55
    },
    zoom: 7.5
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '85vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {campsites.map(campsite => (
            <MapMarker 
              lat={campsite.latitude}
              lng={campsite.longitude}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;