import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar } from 'react-bootstrap';
import GithubIcon from './images/github.png'

class Header extends React.Component {
  render(){
    return(
      <div>
        <Navbar bg='dark' variant='dark' className="px-5">
            <Nav className="mr-auto">
              <LinkContainer to='/'><Nav.Link>Top</Nav.Link></LinkContainer>
              <LinkContainer to='/products'><Nav.Link>Products</Nav.Link></LinkContainer>
              <LinkContainer to='/cart'><Nav.Link>Cart</Nav.Link></LinkContainer>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/">
                <img
                  src={GithubIcon}
                  width="30"
                  height="30"
                  alt="Github Icon"
                />
              </Nav.Link>
            </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header;