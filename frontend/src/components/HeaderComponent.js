import React from 'react';
import { Container,Navbar,Nav } from 'react-bootstrap';
 import { LinkContainer } from 'react-router-bootstrap';

const HeaderComponent = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>TiendaVirtual</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <div class="container-fluid">
          <div class="col-12 col-m-6 col-lg-8">
             <form class="d-flex">
             <input class="form-control me-2" type="search" placeholder="Buscar Producto..." aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Buscar</button>
                 </form>
          </div>
          </div>
          
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Carrito
                  
                </Nav.Link>
              </LinkContainer>
             
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Login
                   
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
