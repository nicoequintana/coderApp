import React from "react";
import s from './itemList.module.css';
import imgIphone from '../Assets/Iphone_models/iPhone-11.png';
import ItemCountContainer from '../counter/ItemCountContainer';

function Item ({model, memory, price}) {

    return(
        <div>
            <div className={s.item_card}>
                <div className={s.card_img}>
                    <img alt='imagen representativa del telefono' src={imgIphone} className={s.item_img}/>
                </div>
                <div className={s.item_info}>
                    <p className={s.item_model}>{model}</p>
                    <p className={s.item_memory}>{memory}</p>
                    <p className={s.item_price}>USD{price}</p>
                </div>
                <ItemCountContainer />
            </div>
        </div>
    )
}

export default Item;