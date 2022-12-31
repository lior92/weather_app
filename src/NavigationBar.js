import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const navigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/">Weather app</Navbar.Brand>
        <Nav className="me-auto">
     <NavLink to='/'>Home</NavLink>
    <NavLink to='/favorite'>Favorite</NavLink>
    </Nav>
    </Container>
    </Navbar>
  )
}

export default navigationBar



