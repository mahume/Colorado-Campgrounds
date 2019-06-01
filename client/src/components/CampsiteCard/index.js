import React from 'react';
import Card from 'react-bootstrap/Card';
import { Img, Body, Title, Text, Link } from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ImageCarousel from '../ImageCarousel';
import campsites from '../../campsites.json';

function CampsiteCard({ campsiteSelected, images, title, desc, phone, address }) {  
  console.log(campsiteSelected);
  
  return (
    <Card className="h-100">
      <ImageCarousel 
        images={campsites[campsiteSelected].photos}
      />
      <Body className="text-center">
        <Title>{campsites[campsiteSelected].title}</Title>
        {/* <Text scrollable>{desc}</Text> */}
      </Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{`Phone: ${campsites[campsiteSelected].phone}`}</ListGroupItem>
        <ListGroupItem>{`Address: ${campsites[campsiteSelected].address}`}</ListGroupItem>
      </ListGroup>
      <Body>
        <Link href="#">View</Link>
      </Body>
    </Card>
  )
}

export default CampsiteCard;