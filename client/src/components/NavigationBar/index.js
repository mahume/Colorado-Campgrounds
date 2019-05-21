import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Brand, Toggle, Collapse } from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-bootstrap/Nav';


function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Brand href="/">Colorado Campgrounds</Brand>
      <Toggle aria-controls="responsive-navbar-nav" />
      <Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/">Home</Link>
          <Link eventKey={2} href="/login">Login</Link>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavigationBar;