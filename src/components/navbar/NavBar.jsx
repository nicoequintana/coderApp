import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import s from '../Modules/navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import NavLogo from "./NavLogo";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

function NavBar({categories}) {

  const{cart} = useContext(CartContext)

  return (
      <div className={s.navFixed} bg='black'>
        <Navbar bg="black" variant="dark" className='container-fluid'>
          <Container>
            <Navbar.Brand className={s.navbarBrand}> 
              <Link className={s.linkStyle} to={'/'}>
                <NavLogo /> 
                <span className={s.logoText}>iStore</span>
              </Link>  
            </Navbar.Brand>
            <Nav>
              <ul className={s.navListStyle}>
                {categories.map(e => <li key={e.link + e.name}> <Link className={s.linkStyle} to={e.link}>{e.name}</Link> </li>)}
              </ul>
            </Nav>
            {cart.length === 0
            ? 
            <div></div>:<Link to={'/cart/'}><CartWidget /></Link>}
          </Container>
        </Navbar>
      </div>
  );
}

export default NavBar;