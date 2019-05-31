import React from 'react';
import Image from 'react-bootstrap/Image';
import QueryTitle from '../QueryTitle';
import QuerySubTitle from '../QuerySubTitle';

function QueryItem({ key, title, img, phone, address }) {
  return (
    <li className="list-group-item mt-0">
      <Image 
        key={key}
        src={img}
      ></Image>
      <QueryTitle
        title={title}
      />   
      <QuerySubTitle
        phone={phone}
        address={address}
      />
    </li>
  )
}

export default QueryItem;