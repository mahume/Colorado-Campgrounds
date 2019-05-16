import React from 'react';
import QueryImage from '../QueryImage';
import QueryTitle from '../QueryTitle';

function QueryItem() {
  return (
    <li className="list-group-item">
      <QueryImage />
      <QueryTitle />
    </li>
  )
}

export default QueryItem;