import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import QueryItem from '../QueryItem';
import './style.css'

function QueryList() {
  return (
    <ListGroup 
      id="list-group" 
      className="ml-0 mt-0"
      variant="flush"
      as="ul"
    >
      <QueryItem as="li"></QueryItem>
      <QueryItem as="li"></QueryItem>
      <QueryItem as="li"></QueryItem>
      <QueryItem as="li"></QueryItem>
      <QueryItem as="li"></QueryItem>
      <QueryItem as="li"></QueryItem>
      <QueryItem as="li"></QueryItem>
      <QueryItem as="li"></QueryItem>
      <QueryItem as="li"></QueryItem>
      <QueryItem as="li"></QueryItem>
    </ListGroup>
  )
}

export default QueryList;