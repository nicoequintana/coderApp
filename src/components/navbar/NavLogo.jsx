import React from "react";
import AppleLogo from '../Assets/apple__logo--navbar.png'
import s from './navbar.module.css'

function NavLogo () {
    return(
        <img src={AppleLogo} className={s.logoImg} alt='logo manzana de Apple'/>
    )
}

export default NavLogo;