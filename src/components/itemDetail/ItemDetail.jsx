import React from 'react';
import s from './itemDetail.module.css';
import ItemCountContainer from '../counter/ItemCountContainer';



function ItemDetail({product}) {

  console.log({product})
  return (
    <div>
        <div className={s.itemDetail}>
          <div className={s.itemDetail_thumbnailContainer}>
            <div className={s.itemDetail_thumbnail}>
              <img className={s.itemDetail_img} src={product.thumbnail} alt={'imagen ilustrativa del smartphone'}  />
            </div>
            <div className={s.itemDetail_thumbnail}>
              <img className={s.itemDetail_img} src={product.thumbnail} alt={'imagen ilustrativa del smartphone'}  />
            </div>
            <div className={s.itemDetail_thumbnail}>
              <img className={s.itemDetail_img} src={product.thumbnail} alt={'imagen ilustrativa del smartphone'}  />
            </div>
            <div className={s.itemDetail_thumbnail}>
              <img className={s.itemDetail_img} src={product.thumbnail} alt={'imagen ilustrativa del smartphone'}  />
            </div>
          </div>
          <div className={s.itemDetail_imgContent}>
            <img className={s.itemDetail_img} src={product.thumbnail} alt={'imagen ilustrativa del smartphone'}  />
          </div>
          <div className={s.itemDetail_descriptionContent}>
            <h1 className={s.itemDetail_descriptionTitle}>{product.title}</h1>
            <p>{product.id}</p>
            <p>Condicion: {product.condition}</p>
            {/* <p>Ubicacion: {product.address.state_name} - {product.address.city_name}</p> */}
            {/* <p>Categoria del Vendedor: {product.seller_reputation.power_seller_status}</p> */}
            <p>Precio: ${product.price}</p>
            <p>Stock Disponible: {product.available_quantity}</p>
            <ItemCountContainer stock={product.available_quantity}/>
          </div>
        </div>
    </div>
  )
}

export default ItemDetail