import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="text-white bg-primary" style={{backgroundColor:''}}>
        <Container>
          <Navbar.Brand href="#home" className="text-white">
          <i className="fa-solid fa-phone" style={{color: "#ffffff",}} />
           {' '}
            Contactly
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header