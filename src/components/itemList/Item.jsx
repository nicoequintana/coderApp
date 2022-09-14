import React from "react";
import s from './itemList.module.css';
import { Link } from "react-router-dom";

function Item ({id, title, price, stock, thumbnail}) {
    
    return(
        <div>
            <div className={s.card}>
                <div className={s.card_img}>
                    <Link to={'/products/' + id}><img alt='imagen representativa del telefono' src={thumbnail} className={s.item_img}/></Link>
                </div>
                <div className={s.item_info}>
                    <p className={s.item_model}>{title}</p>
                    <p className={s.item_price}>${price}</p>
                    <p>Stock Disponible: {stock}</p>
                </div>
                <Link to={'/products/' + id}><button className={s.btnMoreInformation} >Ver más</button></Link>
            </div>
        </div>
    )
}

export default Item;