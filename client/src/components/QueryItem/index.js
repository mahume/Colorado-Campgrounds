import React from 'react';
import Image from 'react-bootstrap/Image';
import QueryTitle from '../QueryTitle';
import campsites from '../../campsites.json';

function QueryItem() {
  return (
    <li className="list-group-item mt-0">
      <QueryTitle />
      <Image 
        src="https://via.placeholder.com/100"
      ></Image>
    </li>
  )
}

export default QueryItem;