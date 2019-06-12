import React from 'react';
import Card from 'react-bootstrap/Card';
import { Img, Body, Title, Text, Link } from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ImageCarousel from '../ImageCarousel';
import campsites from '../../campsites.json';

function ViewCampsite({ campsiteSelected, images, title, desc, phone, address }) {  
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
      <Body className="list-group-flush">
        <Text>{`Description: ${campsites[campsiteSelected].desc}`}</Text>
        <Text className="indCampStyle">{`Number of Tent Sites: ${campsites[campsiteSelected].numberTentSites}`}</Text>
        <Text className="indCampStyle">{`Number of RV Sites: ${campsites[campsiteSelected].numberRvSites}`}</Text>
        <ListGroupItem>{`RV Info: ${campsites[campsiteSelected].RvSiteInfo}`}</ListGroupItem>
        <Text className="indCampOtherLodg">{`Number of Other Lodgings: ${campsites[campsiteSelected].numberOtherLodging}`}</Text>
        <Text className="indCampStyle">{`Other Lodging Info: ${campsites[campsiteSelected].otherLodgingInfo}`}</Text>
        <ListGroupItem>{`Amenities: ${campsites[campsiteSelected].propertyAmenities}`}</ListGroupItem>
        <ListGroupItem>{`Nearby Activities: ${campsites[campsiteSelected].propertyNearbyActivities}`}</ListGroupItem>
      </Body>
    </Card>
  )
}

export default ViewCampsite;
