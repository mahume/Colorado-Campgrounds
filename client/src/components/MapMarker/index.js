import React from 'react';
import './style.css';

function MapMarker({ lat, lng, text }) {
  return (
    <i 
      id="map-marker"
      className="fas fa-campground fa-lg"
      lat={39.11}
      lng={-105.55}
    ></i>
  )
}

export default MapMarker;