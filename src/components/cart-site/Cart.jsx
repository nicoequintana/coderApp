import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import s from '../Modules/cart.module.css'

function Cart() {

  const {cart, totalProducts, deleteAll, deleteOne, finalPrice} = useContext(CartContext)
  console.log(cart)
  console.log(cart.image)

  return (
    <div className={s.cartSiteStyle}>
      <div className={s.productsListContainer}>
      {/* uso .map para generar una card por cada producto que vaya sumando al carrito */}
        {cart.map(e =>
          <div className={s.productContainer}>
            <div>
              <img className={s.cartProductImg} alt='Imagen del producto seleccionado' src={e.image}/>
            </div>
            <div className={s.cartProductInfo}>
              <h3>{e.name}</h3>
              <p>${e.price}</p>
              <p>color: {e.color}</p>
              <p>Estas llevando: {e.cant} u.</p>
            </div>
            <div className={s.cartProductActions}>
              <button onClick={()=>{deleteOne(e.id)}}>Eliminar</button>
            </div>
          </div>
        )}
      </div>
      <div className={s.lineBottom}></div>
      <div className={s.cartActions}>
          <span>Total de productos: {totalProducts()}</span>
          <span>Monto total a pagar: {finalPrice()}</span>
          <button onClick={deleteAll}>Eliminar Carrito</button>
      </div>
    </div>

  )
}

export default Cart;