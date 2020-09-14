import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render(){
    return(
      <div>
        <Navbar bg='dark' variant='dark'>
            <Nav className="mr-auto">
              <LinkContainer to='/'>
                <Navbar.Brand>Top</Navbar.Brand>
              </LinkContainer>
              <LinkContainer to='/products'><Nav.Link>Products</Nav.Link></LinkContainer>
              <LinkContainer to='/cart'><Nav.Link>Cart</Nav.Link></LinkContainer>
            </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header;