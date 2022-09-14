import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import s from './navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import NavLogo from "./NavLogo";
import { Link } from "react-router-dom";

function NavBar() {
  return (
      <div className={s.navFixed} bg='black'>
        <Navbar bg="black" variant="dark" className='container-fluid'>
          <Container>
            <Navbar.Brand href="#home"> <NavLogo /> <span className={s.logoText}>iStore</span> </Navbar.Brand>
            <Nav>
               <Link className={s.linkStyle} to='/'> Home </Link> 
               <Link className={s.linkStyle} to='/products/iphone/'> iPhone </Link> 
               <Link className={s.linkStyle} to='/products/fundaiphone/'> Cases </Link> 
               <Link className={s.linkStyle} to='/'> About Us </Link> 
              <CartWidget />
            </Nav>
          </Container>
        </Navbar>
      </div>
  );
}

export default NavBar;