import React from 'react';
import ReactDOM from 'react-dom';
import '../../stylesheets/header.css';
import image from './MeatMeal.png';

import { Navbar, Nav, DropdownButton, Image, Dropdown } from 'react-bootstrap';

const Header = () => {
  return (
    // <Navbar id="topNav" class="navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse">
    //   <div class="col-4"></div>
    //   <a href="/"><Image class="col-4" src={image}/></a>
    //   <div class="col-4">
    //     <Button variant="outline-info" href="/login"><i class="fa fa-user fa-lg"></i></Button>
    //   </div>
    // </Navbar>
    <Navbar collapseOnSelect expand="lg" variant="light">
    <Navbar.Brand href="/"><Image className="image-test" src={image}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Nav>
        <DropdownButton
        alignRight
        title={<i className="fa fa-user fa-fw"></i>}
        id="dropdown-menu-align-right"
        >
          <Dropdown.Item eventKey="1">Login</Dropdown.Item>
          <Dropdown.Item eventKey="2">Register</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4"><i class="fa fa-sign-in"></i> Log out</Dropdown.Item>
        </DropdownButton>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header