import React from "react";
import s from './navbar.module.css'

function CartWidget () {


    return(
        <div className={s.cartContainer}>
        <img src={'https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/orange_shoppictcart_1484336529.png'} className={s.cartIcon} />
        <span>0</span>
        </div>

    )
}

export default CartWidget;