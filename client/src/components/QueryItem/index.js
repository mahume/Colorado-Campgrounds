import React from 'react';
import Image from 'react-bootstrap/Image';
import QueryTitle from '../QueryTitle';

function QueryItem() {
  return (
    <li className="list-group-item">
      <Image src="https://via.placeholder.com/100" rounded></Image>
      <QueryTitle />
    </li>
  )
}

export default QueryItem;