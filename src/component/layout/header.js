import React from 'react';
import '../../stylesheets/header.css';
import image from './MeatMeal.png';

import { Navbar, Nav, DropdownButton, Image, Dropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
    <Navbar.Brand href="/"><Image className="image-test" src={image}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1" href="/">Page d'accueil</Nav.Link>
      </Nav.Item>
        <Nav.Item as="li">
        <Nav.Link eventKey="link-2" href="/login">Se connecter</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-3" href="/register">S'enregistrer</Nav.Link>
      </Nav.Item>
      </Nav>
      <Nav>
        <DropdownButton
        alignRight
        title={<i className="fa fa-user fa-fw"></i>}
        id="dropdown-menu-align-right"
        >
          <Dropdown.Item eventKey="1" href="/">Page d'accueil</Dropdown.Item>
          <Dropdown.Item eventKey="2" href="/login">Se connecter</Dropdown.Item>
          <Dropdown.Item eventKey="3" href="/register">S'enregistrer</Dropdown.Item>
          <Dropdown.Item eventKey="4" href="/">Profil</Dropdown.Item>
          <Dropdown.Item eventKey="5" href="/">Mon historique</Dropdown.Item>
          <Dropdown.Item eventKey="6" href="/">Rechercher un évènement</Dropdown.Item>
          <Dropdown.Item eventKey="7" href="/">Créer un repas</Dropdown.Item>
          <Dropdown.Item eventKey="8" href="/">Voir tous les membres</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4"><i className="fa fa-sign-in"></i> Se déconnecter</Dropdown.Item>
        </DropdownButton>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header
