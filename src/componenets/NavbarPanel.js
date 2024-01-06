import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarPanel = () => {

const cartProducts = useSelector(state => state.cart);


//bootstrap navbaar
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{fontFamily: 'cursive'}}>🏪Razak's Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/" as={Link}>Explore our Products</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>🛍️ My Bag {cartProducts.length}</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavbarPanel
