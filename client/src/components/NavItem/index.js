import React from 'react';

function NavItem(props) {
  return (
    <a className="nav-item nav-link" href={props.path}>
      {props.children}<span className="sr-only">(current)</span>
    </a>
  )
}

export default NavItem;