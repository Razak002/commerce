import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import images from './ImageCon';

const NavbarPanel = () => {

  const cartProducts = useSelector(state => state.cart);


  //bootstrap navbaar
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{ fontFamily: 'cursive' }} className='text-xl font-bold'>
          <div className='flex gap-1 items-center'>
            <img src={images.mall} alt='' className='w-10' />
            <span>Razak's <span className='text-blue-600'>Mall</span></span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/" as={Link} className='text-sm font-serif mt-2'>Explore our Products</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              <Nav.Link to="/cart" as={Link} >
                <div className='flex gap-1 items-center'>
                  <img src={images.bbag} alt='' className='w-8' />

                  <span>{cartProducts.length} checkout</span>
                </div>


              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavbarPanel
