import React, { Component } from 'react'
import axios from 'axios'
// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import { Brand, Toggle, Collapse } from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import logo from '../../CO-CampLogo_Transp.svg';
import './style.css';

class NavigationBar extends Component {
    logout = e => {
        e.preventDefault();
        console.log('logging out');
        axios
            .post('/api/users/logout').then(response => {
                console.log(response.data)
                if (response.status === 200) {
                    this.props.updateUser({
                        loggedIn: false,
                        username: null
                    })
                }
            })
            .catch(error => {
                console.log('Logout error')
            })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <Navbar 
                bg="dark" 
                variant="dark" 
                expand="lg"
            >
                <Brand href="/">Colorado Campgrounds</Brand>
                <Image src={logo} className="logo" alt="logo" />
                <Toggle aria-controls="basic-navbar-nav" />
                <Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        { 
                            loggedIn 
                            ? 
                            <Link href="#" onClick={this.logout}>Logout</Link>
                            :
                            <div className="d-flex">
                                <Link href="/">Home</Link>
                                <Link href="/login">Login</Link>
                                <Link href="/signup">Signup</Link>
                            </div>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;