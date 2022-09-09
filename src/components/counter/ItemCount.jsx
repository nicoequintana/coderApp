import React from "react";
import s from './count.module.css'

function ItemCount ({count, add, dec, addToCart}) {
    return(
        <div className={s.counterContainer}>
            <div className={s.counter}>
                <button className={s.btnCounterDec} onClick={() => {dec()}}>-</button>
                <p className={s.countHolder}>{count}</p>
                <button className={s.btnCounterAdd} onClick={() => {add()}}>+</button>
            </div>
                <button className={s.addToCart} onClick={() => {addToCart()}}>Add to cart</button>
        </div>
    )
}

export default ItemCount;
