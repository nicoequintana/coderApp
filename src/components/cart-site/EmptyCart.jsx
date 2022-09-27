import React from 'react'
import { Link } from 'react-router-dom'
import s from '../Modules/cart.module.css'

function EmptyCart() {
  return (
    <div className={s.emptyCart}>
        <div className={s.emptyCartWarning}>
            <span>Tu carrito de compras aún está vacío.</span>
            <button><Link className={s.linkStyle} to={'/'}>Volver a la página de inicio</Link></button>
        </div>
    </div>
  )
}

export default EmptyCart