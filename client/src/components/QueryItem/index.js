import React from 'react';
import Image from 'react-bootstrap/Image';
import QueryTitle from '../QueryTitle';

function QueryItem({ key, title, img }) {
  return (
    <li className="list-group-item mt-0">
      <Image 
        key={key}
        src={img}
      ></Image>
      <QueryTitle 
        title={title}
      />
    </li>
  )
}

export default QueryItem;