import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import QueryItem from '../QueryItem';

function QueryList() {
  return (
    <ListGroup as="ul">
      <QueryItem as="li"></QueryItem>
      <QueryItem as="li"></QueryItem>
      <QueryItem as="li"></QueryItem>
    </ListGroup>
  )
}

export default QueryList;