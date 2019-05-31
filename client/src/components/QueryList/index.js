import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import QueryItem from '../QueryItem';
import campsites from '../../campsites.json';
import './style.css'

function QueryList() {
  return (
    <ListGroup 
      id="list-group" 
      className="ml-0 mt-0"
      variant="flush"
      as="ul"
    >
      {campsites.map(campsite => (
            <QueryItem 
              as="li" 
              key={campsite.title}
              title={campsite.title}
              img={campsite.photos[0]}
            />
      ))}
    </ListGroup>
  )
}

export default QueryList;