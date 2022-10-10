import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import s from '../Modules/cart.module.css'
import EmptyCart from './EmptyCart';

function Cart() {

  const {cart, totalProducts, deleteAll, deleteOne, finalPrice} = useContext(CartContext);
  
  //console.log(cart.length)
  //console.log(cart.image)

  return (
    <div className={s.cartSiteStyle}>
      {cart.length === 0 ? <EmptyCart /> :
      <div>
        <div className={s.productsListContainer}>
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
          <span>Monto total a pagar: usd{finalPrice()}</span>
          <button className={s.deleteAllBtn} onClick={deleteAll}>Eliminar Carrito</button>
          <Link to='/checkout/'><button className={s.checkoutBtn}>Finalizar compra</button></Link>
        </div>
      </div>}
    </div>

  )
}

export default Cart;