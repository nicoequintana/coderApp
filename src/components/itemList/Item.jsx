import React from "react";
import s from './itemList.module.css';
import { Link } from "react-router-dom";

function Item ({id, category, title, price, stock, thumbnail}) {
    console.log({id, category})
    return(
        <div>
            <div className={s.card}>
                <div className={s.card_img}>
                    <Link to={`/products/${category}/${id}/`}><img alt='imagen representativa del telefono' src={thumbnail} className={s.item_img}/></Link>
                </div>
                <div className={s.item_info}>
                    <p className={s.item_model}>{title}</p>
                    <p className={s.item_price}>${price}</p>
                    <p>Stock Disponible: {stock}</p>
                </div>
                {/*ACA DEBERIA METER CATEGORY TAMBIEN*/}
                <Link to={`/products/${category}/${id}/`}><button className={s.btnMoreInformation} >Ver más</button></Link>
            </div>
        </div>
    )
}

export default Item;