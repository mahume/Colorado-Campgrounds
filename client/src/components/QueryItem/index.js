import React from 'react';
import Image from 'react-bootstrap/Image';
import QueryTitle from '../QueryTitle';
import campsites from '../../campsites.json';


function QueryItem({ title, img }) {
  return (
    <li className="list-group-item mt-0">
      <Image 
        src={img}
      ></Image>
      <QueryTitle 
        title={title}
      />
    </li>
  )
}

export default QueryItem;