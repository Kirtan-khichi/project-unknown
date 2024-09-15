import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';  

import '../App.css'; 

function CustomNavbar() {
  return (
    <Navbar className="bg-black">
      <Container>
        <Navbar.Brand href="#home">Narendra Singh</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login">Contact</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;