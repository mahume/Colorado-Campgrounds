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

              img={campsite.photos[0]}
              key={campsite.title}
              title={campsite.title}
            />
      ))}
    </ListGroup>
  )
}

export default QueryList;