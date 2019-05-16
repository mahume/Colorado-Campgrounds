import React from 'react';

function NavItem({ children, path }) {
  return (
    <a className="nav-item nav-link" href={path}>
      {children}
    </a>
  )
}

export default NavItem;