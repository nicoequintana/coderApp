import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import s from '../Modules/navbar.module.css'

function CartWidget () {

    const {totalProducts} = useContext(CartContext);


    return(
        <div className={s.cartContainer}>
        <img alt={'imagen carrito de compras'} src={'https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/orange_shoppictcart_1484336529.png'} className={s.cartIcon} />
        <span className={s.cartCounterStyle}>{totalProducts()}</span>
        </div>

    )
}

export default CartWidget;