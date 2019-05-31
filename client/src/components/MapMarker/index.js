import React from 'react';
import './style.css';

function MapMarker({ key, index, lat, lng, displayCampground }) {    
  return (
    <i 
      className="fas fa-campground fa-lg map-marker"
      key={key}
      index={index}
      lat={lat}
      lng={lng}
      onClick={displayCampground}
    ></i>
  )
}

export default MapMarker;