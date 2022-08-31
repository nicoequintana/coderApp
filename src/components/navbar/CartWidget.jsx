import React from "react";
import AppleLogo from '../Assets/apple__logo--navbar.png'
import s from './navbar.module.css'

function CartWidget () {


    return(
        <>
            <img className={s.cartIcon} src={AppleLogo} alt='logo manzana de Apple'/>
        </>
    )
}

export default CartWidget;