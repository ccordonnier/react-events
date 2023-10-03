import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="light">
      <Container>
        <Navbar.Brand href="#home">EVENT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#deets">Evenements</Nav.Link>
            <Nav.Link href="#deets">Fonctionnement</Nav.Link>
            <Nav.Link href="#deets">tarifs</Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            <NavDropdown title="Compte" id="collasible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Mon compte</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mes évènements
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Historique</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Déconnexion
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;