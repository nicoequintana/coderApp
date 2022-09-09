import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import s from './navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import NavLogo from "./NavLogo";

function NavBar() {
  return (
      <div className={s.navFixed}>
        <Navbar bg="dark" variant="dark" className='container-fluid'>
          <Container>
            <Navbar.Brand href="#home"> <NavLogo /> <span className={s.logoText}>Apple</span> </Navbar.Brand>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Products</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <CartWidget />
            </Nav>
          </Container>
        </Navbar>
      </div>
  );
}

export default NavBar;