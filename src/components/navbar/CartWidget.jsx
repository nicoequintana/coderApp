import React from "react";
import cartIcon from '../Assets/cart-icon.svg'
import s from './navbar.module.css'

function CartWidget () {


    return(
        <img src={cartIcon} className={s.cartIcon} />

    )
}

export default CartWidget;