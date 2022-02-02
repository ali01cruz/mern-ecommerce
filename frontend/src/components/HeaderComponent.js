import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container,
  Navbar,
  Nav
} from 'react-bootstrap';

const HeaderComponent = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Tienda Virtual</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to='/'>
                <Navbar.Brand>Home</Navbar.Brand>
              </LinkContainer>
              <LinkContainer to='/products'>
                <Navbar.Brand>Products</Navbar.Brand>
              </LinkContainer>
            </Nav>
            <Nav className="ms-auto">
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>Carrito
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className="fas fa-user"></i>Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  );
};

export default HeaderComponent;
