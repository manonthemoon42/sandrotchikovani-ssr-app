import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import IndexLinkContainer from 'react-router-bootstrap/lib/IndexLinkContainer';

import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <Navbar expand="lg" id="NavBar" className="navbar-dark">
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle className="CustomToggler" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto text-right">
                        <IndexLinkContainer to="/">
                            <Nav.Link className="NavLink">
                                <span>BIENVENUE</span>
                            </Nav.Link>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/projects">
                            <Nav.Link className="NavLink">
                                <span>PROJECTS</span>
                            </Nav.Link>
                        </IndexLinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;