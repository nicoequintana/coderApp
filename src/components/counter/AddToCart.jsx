import React from 'react'
import { Link } from 'react-router-dom'
import s from '../Modules/count.module.css'

function AddToCart() {
  return (
    <>
        <Link to={'/'}><button className={s.btnGoToCart}>Ir a tu carrito de compras.</button></Link>
    </>
  )
}

export default AddToCart