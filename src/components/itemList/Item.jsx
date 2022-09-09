import React from "react";
import s from './itemList.module.css';
import ItemCountContainer from '../counter/ItemCountContainer';

function Item ({title, price, stock, thumbnail}) {
    return(
        <div>
            <div className={s.card}>
                <div className={s.card_img}>
                    <img alt='imagen representativa del telefono' src={thumbnail} className={s.item_img}/>
                </div>
                <div className={s.item_info}>
                    <p className={s.item_model}>{title}</p>
                    <p className={s.item_price}>${price}</p>
                </div>
                {/* <ItemCountContainer stock={stock}/> */}
            </div>
        </div>
    )
}

export default Item;