import React from 'react';

function QueryTitle({ key, title, address, phone }) {
  return (
    <h5 
      key={key}
      className="d-inline-block"
    >
      {title}
    </h5>
  )
}

export default QueryTitle;