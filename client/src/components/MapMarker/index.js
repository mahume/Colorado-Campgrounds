import React from 'react';
import './style.css';

function MapMarker({ key, lat, lng }) {  
  return (
    <i 
      key={key}
      className="fas fa-campground fa-lg map-marker"
      lat={lat}
      lng={lng}
    ></i>
  )
}

export default MapMarker;