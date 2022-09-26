import React, { useContext, useState } from 'react';
import s from '../Modules/itemDetail.module.css';
import e from '../Modules/count.module.css'
import ItemCountContainer from '../Containers/ItemCountContainer';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';



function ItemDetail({product}) {
  const [validateShopping, setValidateShopping] = useState(false)
  const [cantidad, setCantidad] = useState(0)
  const {addToCart} = useContext(CartContext);

  function onAdd (cant) {
    //console.log(`cantidad actual agregada ${cant}`)
    setCantidad(cant)
    addToCart(product, cant);
    setValidateShopping(true);
    
  }



  //console.log(`ahora el estado cantidad vale= ${cantidad}`)


  return (
    <div className={s.itemDetailContainer}>
        <div className={s.itemDetail}>
          <div className={s.itemDetail_thumbnailContainer}>
            <div className={s.itemDetail_thumbnail}>
              <img className={s.itemDetail_img} src={product.image} alt={'imagen ilustrativa del smartphone'}  />
            </div>
            <div className={s.itemDetail_thumbnail}>
              <img className={s.itemDetail_img} src={product.image} alt={'imagen ilustrativa del smartphone'}  />
            </div>
            <div className={s.itemDetail_thumbnail}>
              <img className={s.itemDetail_img} src={product.image} alt={'imagen ilustrativa del smartphone'}  />
            </div>
            <div className={s.itemDetail_thumbnail}>
              <img className={s.itemDetail_img} src={product.image} alt={'imagen ilustrativa del smartphone'}  />
            </div>
          </div>
          <div className={s.itemDetail_imgContent}>
            <img className={s.itemDetail_img} src={product.image} alt={'imagen ilustrativa del smartphone'}  />
          </div>
          <div className={s.itemDetail_descriptionContent}>
            <h1 className={s.itemDetail_descriptionTitle}>{product.name}</h1>
            <p>Id: {product.id}</p>
            <p>Color: {product.color}</p>
            <p>Capacidad: {product.storage}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock Disponible: {product.stock}</p>
            <p>{product.description}</p>
            {validateShopping ? <Link to={'/cart'}><button className={e.btnGoToCart}>Ir a tu carrito de compras.</button></Link> : <ItemCountContainer onAdd={onAdd} stock={product.stock} initial={1}/>}
          </div>
        </div>
    </div>
  )
}

export default ItemDetail