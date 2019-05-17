import React from 'react';
import NavItem from '../NavItem';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Colorado Campgrounds</a>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavItem path="/">Home</NavItem>
          <NavItem path="/login">Login</NavItem>
        </div>
      </div>
    </nav>
  )
}

export default Nav;