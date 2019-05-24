import React, { Component } from 'react'
import axios from 'axios'
import Navbar from 'react-bootstrap/Navbar';
import { Brand, Toggle, Collapse } from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-bootstrap/Nav';

import logo from '../../logo.svg';
import '../../App.css';

class NavigationBar extends Component {
    logout = e => {
        e.preventDefault();
        console.log('logging out');
        axios
            .post('/user/logout').then(response => {
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
            <Navbar bg="light" expand="lg">
                <img src={logo} className="App-logo" alt="logo" />
                <Brand href="#home">Colorado Campgrounds</Brand>
                <Toggle aria-controls="basic-navbar-nav" />
                <Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        { loggedIn 
                            ? 
                            <Link href="#" onClick={this.logout}>Logout</Link>
                            :
                            <div>
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