import React from "react";
import s from './count.module.css'

function ItemCount ({count, add, dec, onAdd, validate}) {
    return(
        <div className={s.counterContainer}>
            <div className={s.counter}>
                <button className={s.btnCounterDec} onClick={() => {dec()}}>-</button>
                <p className={s.countHolder}>{count}</p>
                <button className={s.btnCounterAdd} onClick={() => {add()}}>+</button>
            </div>
                {validate ? <button className={s.addToCart}>Agegado!</button> : <button className={s.addToCart} onClick={() => {onAdd()}}>Agregar</button> }
                
        </div>
    )
}

export default ItemCount;
