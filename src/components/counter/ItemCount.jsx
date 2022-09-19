import React from "react";
import s from '../Modules/count.module.css'

function ItemCount ({stock, count, add, dec, onAdd}) {
    return(
        <div className={s.counterContainer}>
            <div className={s.counter}>
                <button className={s.btnCounterDec} onClick={() => {dec()}}>-</button>
                <p className={s.countHolder}>{count}</p>
                <button className={s.btnCounterAdd} onClick={() => {add()}}>+</button>
            </div>
            <button className={s.addToCart} onClick={() => {onAdd()}}>
                Agregar
            </button>
                
        </div>
    )
}

export default ItemCount;
