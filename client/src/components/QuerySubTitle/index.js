import React from 'react';

function QueryTitle({ key, address, phone }) {
  return (
    <p 
      key={key}
      className="d-inline-block"
    >
      {phone}{"\n"}
      {address}
    </p>
  )
}

export default QueryTitle;