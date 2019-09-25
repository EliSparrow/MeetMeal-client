import React from 'react';
import { Link } from 'react-router-dom';
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
        <Nav.Link eventKey="link-1" ><Link to="/">Page d'accueil</Link></Nav.Link>
      </Nav.Item>
        <Nav.Item as="li">
        <Nav.Link eventKey="link-2" ><Link to="/login">Se connecter</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-3"><Link to="/register">S'enregistrer</Link></Nav.Link>
      </Nav.Item>
      </Nav>
      <Nav>
        <DropdownButton
        alignRight
        title={<i className="fa fa-user fa-fw"></i>}
        id="dropdown-menu-align-right"
        >
          <Dropdown.Item eventKey="1" ><Link to="/">Page d'accueil</Link></Dropdown.Item>
          <Dropdown.Item eventKey="2" ><Link to="/login">Se connecter</Link></Dropdown.Item>
          <Dropdown.Item eventKey="3" ><Link to="/register">S'enregistrer</Link></Dropdown.Item>
          <Dropdown.Item eventKey="4" ><Link to="/profile">Profil</Link></Dropdown.Item>
          <Dropdown.Item eventKey="5" ><Link to="/">Mon historique</Link></Dropdown.Item>
          <Dropdown.Item eventKey="6" ><Link to="/">Rechercher un évènement</Link></Dropdown.Item>
          <Dropdown.Item eventKey="7" ><Link to="/">Créer un repas</Link></Dropdown.Item>
          <Dropdown.Item eventKey="8" ><Link to="/ListUsers">Voir tous les membres</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4"><i className="fa fa-sign-in"></i> Se déconnecter</Dropdown.Item>
        </DropdownButton>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header
