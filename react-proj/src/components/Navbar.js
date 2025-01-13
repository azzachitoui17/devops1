import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Nav.css';
import logoImage from './images/logo.png';

const NavigationBar = () => {
  return (
    <Navbar bg="light" className="navbar" expand="">
      <Container className="navbar-container">
        <Nav className="mr-auto nav-links">
          <Nav.Link as={Link} to="/auth/register">Admin</Nav.Link>
          <Nav.Link as={Link} to="/create-client">Client space</Nav.Link>
          <Nav.Link as={Link} to="/create-supplier">Supplier space</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/create-post">ajouter produit</Nav.Link>
        </Nav>
        <img src={logoImage} alt="" className="logo" /> {/* Logo */}
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
