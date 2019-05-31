import React from 'react';
import Card from 'react-bootstrap/Card';
import { Img, Body, Title, Text, Link } from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ImageCarousel from '../ImageCarousel';

function CampsiteCard({ images, title, desc, phone, address }) {  
  return (
    <Card>
      <ImageCarousel 
        images={images}
      />
      <Body className="text-center">
        <Title>{title}</Title>
        {/* <Text scrollable>{desc}</Text> */}
      </Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{`Phone: ${phone}`}</ListGroupItem>
        <ListGroupItem>{`Address: ${address}`}</ListGroupItem>
      </ListGroup>
      <Body>
        <Link href="#">View</Link>
      </Body>
    </Card>
  )
}

export default CampsiteCard;