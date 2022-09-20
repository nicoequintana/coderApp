import React, { useState } from 'react';
import s from '../Modules/itemDetail.module.css';
import ItemCountContainer from '../Containers/ItemCountContainer';
import AddToCart from '../counter/AddToCart';



function ItemDetail({article}) {
  const [validateShopping, setValidateShopping] = useState(false)

  function onAdd () {
    setValidateShopping(true);
    
}

  return (
    <div className={s.itemDetailContainer}>
        <div className={s.itemDetail}>
          <div className={s.itemDetail_thumbnailContainer}>
            <div className={s.itemDetail_thumbnail}>
              <img className={s.itemDetail_img} src={article.image} alt={'imagen ilustrativa del smartphone'}  />
            </div>
            <div className={s.itemDetail_thumbnail}>
              <img className={s.itemDetail_img} src={article.image} alt={'imagen ilustrativa del smartphone'}  />
            </div>
            <div className={s.itemDetail_thumbnail}>
              <img className={s.itemDetail_img} src={article.image} alt={'imagen ilustrativa del smartphone'}  />
            </div>
            <div className={s.itemDetail_thumbnail}>
              <img className={s.itemDetail_img} src={article.image} alt={'imagen ilustrativa del smartphone'}  />
            </div>
          </div>
          <div className={s.itemDetail_imgContent}>
            <img className={s.itemDetail_img} src={article.image} alt={'imagen ilustrativa del smartphone'}  />
          </div>
          <div className={s.itemDetail_descriptionContent}>
            <h1 className={s.itemDetail_descriptionTitle}>{article.name}</h1>
            <p>Id: {article.id}</p>
            <p>Color: {article.color}</p>
            <p>Capacidad: {article.storage}</p>
            <p>Precio: ${article.price}</p>
            <p>Stock Disponible: {article.stock}</p>
            <p>{article.description}</p>
            {validateShopping ? <AddToCart /> : <ItemCountContainer onAdd={onAdd} stock={article.stock}/>}
            {console.log(article.stock)}
          </div>
        </div>
    </div>
  )
}

export default ItemDetail