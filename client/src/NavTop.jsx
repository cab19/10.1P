import React from 'react';
import './NavTop.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavTop = (props) => (
    <Navbar bg="info" expand="lg">
        <Navbar.Brand href="#home" className="text-white">iCrowdTask</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home" className="nav-anchor">New Requester Task</Nav.Link>
            <Nav.Link href="#link" className="nav-anchor">Worker Task</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavTop;